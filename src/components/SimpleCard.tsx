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

dayjs.extend(relativeTime);

interface IProps {
  article: IArticle;
}

function SimpleCard(props: IProps) {
  const time = dayjs(props.article.publishedAt).fromNow();
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  const saveArticle = async (article: IArticle) => {
    const q = getArticleMutationKeysValue(article, [
      "id",
      "read_later",
      "favorites",
      "already_read",
    ]);
    try {
      const res = await apolloMutation(`mutation{
        articleStatus(input:{
            ${q}
            already_read:1
        }){
          id
        }
    }`);
      
      console.log(res);
    } catch (e) {
      console.log(`${q}, already_read:1`);
      console.log(e);
    } finally {
    }
  };

  const onClick = () => {
    dispatch({ type: "dialog/toggle", payload: true });
    dispatch({ type: "feed/showArticle", payload: props.article });
    saveArticle(props.article);
  };

  switch (state.setting.disposition) {
    case 0:
      return <CTitle article={props.article} onClick={() => onClick()} />;

    case 1:
      return <CCard article={props.article} onClick={() => onClick()} />;

    default:
      return <CBlog article={props.article} onClick={() => onClick()} />;
  }
}

export default SimpleCard;
