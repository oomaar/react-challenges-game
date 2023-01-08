type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}[];

type CommentsType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

export type EffectOneStateType = PostsType | UsersType | CommentsType;

export type ResourceType = "Posts" | "Users" | "Comments";
