import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
import { IReducer } from "@/utils/rootReducer";
import CTitle from "./card/cTitle";
import CCard from "./card/ccard";
import CBlog from "./card/cblog";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { apolloMutation } from "@/utils/apollo";
import { getArticleMutationKeysValue } from "@/helpers/getArticleMutationKeysValue";
import { saveArticle } from "@/helpers/saveArticle";

dayjs.extend(relativeTime);

interface IProps {
  article: IArticle;
}

function SimpleCard(props: IProps) {
  const time = dayjs(props.article.publishedAt).fromNow();
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch({ type: "dialog/toggle", payload: true });
    dispatch({ type: "dialog/changePage", payload: 0 });
    dispatch({ type: "feed/showArticle", payload: props.article });

    const exceptFields = ["id", "read_later", "favorites", "already_read"];
    saveArticle(props.article, exceptFields, "already_read:1", () => {});
  };

  const getAgo = () => {
    if (props.article.publishedAt) {
      return dayjs().to(dayjs(props.article.publishedAt));
    }
    return "";
  };

  switch (state.setting.disposition) {
    case 0:
      return (
        <CTitle
          article={props.article}
          onClick={() => onClick()}
          ago={getAgo()}
        />
      );

    case 1:
      return (
        <CCard
          article={props.article}
          onClick={() => onClick()}
          ago={getAgo()}
        />
      );

    default:
      return (
        <CBlog
          article={props.article}
          onClick={() => onClick()}
          ago={getAgo()}
        />
      );
  }
}

export default SimpleCard;
