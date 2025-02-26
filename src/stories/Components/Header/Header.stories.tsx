import Header from '@/components/organisms/Header';

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = (args: any) => (
  <Header {...args} />
);

export const Default = Template.bind({})
