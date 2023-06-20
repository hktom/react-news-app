import { apolloMutation } from "@/utils/apollo";
import { IArticle } from "@/utils/interface";
import { getArticleMutationKeysValue } from "./getArticleMutationKeysValue";

export const saveArticle = async (
  article: IArticle,
  exceptFields: string[],
  statusValue: string,
  callBack: () => void
) => {
  const q = getArticleMutationKeysValue(article, exceptFields);
  try {
    const res = await apolloMutation(`mutation{
        articleStatus(input:{
            ${q}
            ${statusValue}
        }){
          id
        }
    }`);
  } catch (e) {
  } finally {
    callBack();
  }
};
