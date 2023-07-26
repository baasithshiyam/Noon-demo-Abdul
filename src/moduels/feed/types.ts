export type Post = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  subTitle: string;
  image: string;
  tags: string[];
  likeCount: number;
  commentCount: number;
  caption: string;
  favorite: boolean;
};
