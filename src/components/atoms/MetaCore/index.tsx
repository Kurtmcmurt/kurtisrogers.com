import { Meta } from "@solidjs/meta";

interface Props {
  url: string;
  domain: string;
  title: string;
  description: string;
  image?: string;
}

export default function MetaCore({ url, domain, title, description, image }: Props) {
  return (
    <>
      {/* facebook */}
      <Meta property="og:url" content={url} />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      {/* twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="twitter:domain" content={domain} />
      <Meta property="twitter:url" content={url} />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />
    </>
  );
}
