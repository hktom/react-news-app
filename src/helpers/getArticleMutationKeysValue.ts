export const getArticleMutationKeysValue = (
  article: any,
  exceptFields: string[]
): string => {
  let input: string = "";

  for (const key in article) {
    if (
      Object.prototype.hasOwnProperty.call(article, key) &&
      key != "__typename" &&
      article[key] &&
      !exceptFields.includes(key)
    ) {
      input += `${key}: "${article[key]?.replaceAll('"', "'")}"`;
      if (key !== Object.keys(article)[Object.keys(article).length - 1]) {
        input += ", \n";
      }
    }
  }

  return input;
};
