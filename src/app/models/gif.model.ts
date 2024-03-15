export interface Gif {
  type: string;
  id: string;
  url: string;
  title: string;
  rating: string;
  images: {
    original: {
      url: string;
    };
  };
}
