type HeaderLinks = {
  name: string;
  link: string;
};
type Article = {
  source: {
    id: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

type ApiResponseSources = {
  status: string;
  sources: Source[];
};
type ChannelSources = {
  id: string;
  name: string;
  pic: string;
};
