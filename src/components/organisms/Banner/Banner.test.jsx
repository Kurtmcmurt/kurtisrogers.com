import { describe, expect, vi, beforeEach, afterEach, it } from "vitest";
import { render } from "@solidjs/testing-library";
import { screen } from '@testing-library/dom';
import Banner from '.';

describe("Banner", () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const propData = {
    title: "Welcome to my website",
    children: <>
      <p>My name is Kurtis Rogers, a proper Software Engineer from Bristol, UK</p>
      <ul>
        <li>Specialising in Frontend technology since 2018</li>
        <li>Expert in leading frameworks including serverside Node development (Express/Koa)</li>
        <li>Experienced in building and developing accessible themes in both Drupal and WordPress</li>
        <li>Effective and approachable mentor</li>
        <li>Team player, able to build robust yet relaxed relationships with colleagues and stakeholders alike</li>
      </ul>
      <p>Want to know more?</p>
      <a class="button" href="/about">Read more about me</a>
    </>,
    backgroundImage: {
      data: {
        attributes: {
          alternativeText: 'A photo of The Milky Way, lots of stars and some star-making gas clouds far far away...',
          url: '/images/pexels-jack-davis-86003658-9069564-thumbnail.webp',
          formats: {
            thumbnail: {
              src: '/images/pexels-jack-davis-86003658-9069564-thumbnail.webp',
            },
            small: {
              src: '/images/pexels-jack-davis-86003658-9069564-sm.webp',
              minWidth: 320,
            },
            medium: {
              src: '/images/pexels-jack-davis-86003658-9069564-md.webp',
              minWidth: 768,
            },
            large: {
              src: '/images/pexels-jack-davis-86003658-9069564-lg.webp',
              minWidth: 960,
            },
            xlarge: {
              src: '/images/pexels-jack-davis-86003658-9069564-xl.webp',
              minWidth: 1420,
            },
          },
        },
      },
    },
    gridLayout: "wide",
  }

  it("renders", () => {
    const { container } = render(() => <Banner {...propData} />);
    expect(container).toMatchSnapshot();
  });
  
  it("has a title", () => {
    const { getByText } = render(() => <Banner {...propData} />);
    
    expect(getByText(/Welcome to my website/i)).toBeInTheDocument();
  });
  
  it("can have a image", () => {
    render(() => <Banner {...propData} />);
    
    // Find the image inside the picture element
    const image = screen.getByAltText(/A photo of The Milky Way, lots of stars and some star-making gas clouds far far away.../i);
    
    // Check if the image exists and has the correct alt text
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", propData.backgroundImage.url);
  });
});