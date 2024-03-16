export interface Gif {
  type: string;
  id: string;
  url: string;
  title: string;
  username:string;
  rating: string;
  images: {
    original: {
      url: string;
    };
  };
  user: {
    description:string;
    
  };
}
