import { apolloMutation } from "@/utils/apollo";
import { IArticle } from "@/utils/interface";
import { getArticleMutationKeysValue } from "./getArticleMutationKeysValue";

export const saveTaxonomy = async (
  article: IArticle,
  type: string,
  callBack: () => void
) => {
  let q: string = "";
  if (type == "category") q = article.category_name!;
  if (type == "source") q = article.source_name!;
  if (type == "author") q = article.author_name!;

  try {
    const res = await apolloMutation(`mutation {
        taxonomyUpsert(input: {name: "${q}", type: "${type}"}) {
          id
        }
      }`);
  } catch (e) {
  } finally {
    callBack();
  }
};
