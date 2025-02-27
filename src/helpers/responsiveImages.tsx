// Based on the Strapi image API response

import type { ImageResponse } from '@/types/branding'

export type Data = {
  data: ImageResponse;
};

const responsiveImages = ({ data }: Data) => {
  if (!data) return (
    <></>
  );

  const _default = data.attributes;
  const { xlarge, large, medium, small, thumbnail } = data.attributes.formats || {};

  xlarge && (xlarge.minWidth = 1420);
  large && (large.minWidth = 960);
  medium && (medium.minWidth = 768);
  small && (small.minWidth = 320);

  // reorder the object in a way which makes sense for the images sort i the DOM (biggest first)
  const reformatted = {
    ...(xlarge && { xlarge }),
    ...(large && { large }),
    ...(medium && { medium }),
    ...(small && { small }),
    ...(thumbnail && { thumbnail }),
  };

  const imageSizes = Object.values(reformatted);
  // eslint-disable-next-line prefer-const
  let imageSources: string[] = [];

  imageSizes.forEach((size) => {
    const _minWidth = `${size?.minWidth}px`;
    const url = size?.src;
    const altText = _default.alternativeText ? _default.alternativeText : '';

    // fallback/smallest will always be the thumbnail
    imageSources.push(
      url?.includes('-thumbnail')
        ? `<img
            class="w-full h-full object-cover"
            src="${url}"
            alt="${altText}"
            loading="eager"
            decoding="async">`
        : `<source
            media="(min-width: ${_minWidth})"
            srcset=${url} />`
    );
  });

  return (
    <picture innerHTML={imageSources.join(' ')} />
  );
};

export default responsiveImages;