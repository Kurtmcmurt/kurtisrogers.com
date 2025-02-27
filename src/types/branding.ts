export interface Branding {
  colors: "yellow" | "white" | "grey" | "black" | "red" | "default" | undefined;
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  minWidth?: number;
}

export interface ImageResponse {
  attributes: {
    alternativeText?: string;
    url: string;
    formats: {
      thumbnail?: Image;
      small?: Image;
      medium?: Image;
      large?: Image;
      xlarge?: Image;
    };
  };
}