import { render } from "@solidjs/testing-library";
import Logo from "."; // Adjust the import path as necessary

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>
  }
})

describe('Logo Component', () => {
  it('renders with default props', () => {
    const { getByLabelText } = render(() => <Logo />);
    const logo = getByLabelText('Go to the homepage');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('bg-red', 'text-white');
    expect(logo.querySelector('strong')).toHaveTextContent('Kurtis Rogers');
  });

  it('renders with secondary variant', () => {
    const { getByLabelText } = render(() => <Logo variant="secondary" />);
    const logo = getByLabelText('Go to the homepage');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('bg-white', 'text-black');
    expect(logo.querySelector('strong')).toHaveTextContent('Kurtis Rogers');
  });

  it('renders with custom text', () => {
    const { getByLabelText } = render(() => <Logo text="Custom Logo" />);
    const logo = getByLabelText('Go to the homepage');

    expect(logo).toBeInTheDocument();
    expect(logo.querySelector('strong')).toHaveTextContent('Custom Logo');
  });

  it('renders with secondary variant and custom text', () => {
    const { getByLabelText } = render(() => <Logo variant="secondary" text="Custom Logo" />);
    const logo = getByLabelText('Go to the homepage');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('bg-white', 'text-black');
    expect(logo.querySelector('strong')).toHaveTextContent('Custom Logo');
  });
});
