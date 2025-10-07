import Banner, { Props as BannerProps } from "@/components/organisms/Banner";
import Content, { Props as ContentProps } from "@/components/atoms/Content";

export const renderList = {
  Banner: (props: BannerProps) => <Banner {...props} />,
  Content: (props: ContentProps) => <Content {...props} />
};

export default renderList;
