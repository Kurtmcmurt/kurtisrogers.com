// src/components/LinkButton.test.jsx
import { render } from '@solidjs/testing-library';
import Content from '.';
import { describe, it, expect } from 'vitest';

const props = {
  component: Content,
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec
      imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex
      vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus,
      auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce
      molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum
      id lacus. Donec eget dolor lacus.
    </p>
  ),
  gridLayout: "wide",
  variant: "white"
}

describe('<Content />', () => {
  it('renders some simple content', () => {
    const { getByText } = render(() => <Content {...props} />);
    const content = getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus./);
    expect(content).toMatchSnapshot();
    expect(content).toBeInTheDocument();
  });
});
