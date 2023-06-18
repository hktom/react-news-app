export interface IUser {
  id?: string;
  name: string;
  avatar?: string;
  email: string;
  settings?: ISetting[];
  articles?: IArticle[];
  taxonomies?: ITaxonomy[];
}

export interface ISetting {
  id: string;
  disposition?: number;
  dark_mode?: number;
  notification?: number;
  showByPage?: number;
  feed_by?: string;
}

export interface IArticle {
  id?: string;
  title: string;
  description?: string;
  content?: string;
  image?: string;
  publishedAt?: string;
  url: string;
  category_id?: string;
  category_name?: string;
  source_id?: string;
  source_name?: string;
  author_id?: string;
  author_name?: string;
  read_later?: number;
  favorites?: number;
  already_read?: number;
  user?: IUser;
}

export interface ITaxonomy {
  id: string;
  name: string;
  type: string;
  slug?: string;
  user: IUser;
  parent?: ITaxonomy;
  children?: ITaxonomy[];
}
