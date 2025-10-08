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
      small?: Image;
      medium?: Image;
      large?: Image;
      xlarge?: Image;
    };
  };
}

export interface Heading {
  title?: string;
  text: string;
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6";
  headingClass?:
    | "text-size-h1"
    | "text-size-h2"
    | "text-size-h3"
    | "text-size-h4"
    | "text-size-h5"
    | "text-size-h6";
}
