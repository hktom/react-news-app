import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
import { IReducer } from "@/utils/rootReducer";
import CTitle from "./card/cTitle";
import CCard from "./card/ccard";
import CBlog from "./card/cblog";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { apolloMutation } from "@/utils/apollo";

dayjs.extend(relativeTime);

interface IProps {
  article: IArticle;
}

function SimpleCard(props: IProps) {
  const time = dayjs(props.article.publishedAt).fromNow();
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  const getValue = (article: any): string => {
    let input: string = "";

    for (const key in article) {
      if (Object.prototype.hasOwnProperty.call(article, key)) {
        input += `${key}: "${article[key]}"`;
        if (key !== Object.keys(article)[Object.keys(article).length - 1]) {
          input += ", ";
        }
      }
    }

    return input;
  };

  const saveArticle = async (article: IArticle) => {
    const res = await apolloMutation(`mutation{
        articleStatus(input:{
            ${getValue(article)}
        }){
        }
    }`);
  };

  const onClick = () => {
    dispatch({ type: "feed/showArticle", payload: props.article });
    dispatch({
      type: "feed/addTo",
      payload: {
        article: props.article,
        type: "alreadyRead",
      },
    });
    saveArticle(props.article);
  };

  switch (state.setting.settings?.disposition) {
    case 1:
      return <CTitle article={props.article} onClick={() => onClick()} />;

    case 2:
      return <CCard article={props.article} onClick={() => onClick()} />;

    default:
      return <CBlog article={props.article} onClick={() => onClick()} />;
  }
}

export default SimpleCard;
