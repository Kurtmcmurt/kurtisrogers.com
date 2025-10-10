import { describe, expect, vi, beforeEach, afterEach, it } from "vitest";
import { render } from "@solidjs/testing-library";
import { screen } from "@testing-library/dom";
import Banner from ".";

describe("Banner", () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const propData = {
    "type": "banner",
    "title": {
      "text": "Software Engineer",
      "headingLevel": "1",
      "headingClass": "text-size-h2"
    },
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "My name is Kurtis Rogers and I'm an experienced fullstack software engineer from Bristol, UK."
          }
        ]
      },
      {
        "type": "list",
        "children": [
          "An expert in popular frontend frameworks including serverside Node development (Express/Koa)",
          "Effective and approachable mentor to less experienced colleagues, always willing to help folks where I can.",
          "A team player, able to build robust yet relaxed relationships with all stakeholders."
        ]
      },
      {
        "type": "buttongroup",
        "children": [
          {
            "variant": "primary",
            "outline": true,
            "href": {
              "url": "https://www.linkedin.com/in/kurtisrogers",
              "target": "_blank"
            },
            "content": "Visit my LinkedIn"
          },
          {
            "variant": "secondary",
            "href": {
              "url": "https://github.com/Kurtmcmurt/kurtisrogers.com",
              "target": "_blank"
            },
            "content": "Repo for the site"
          }
        ]
      }
    ],
    "backgroundImage": {
      "data": {
        "attributes": {
          "alternativeText":
            "A photo of The Milky Way, taken from the surface of Earth in a heavily wooded area. The silouhette of trees wrap the image with the sky in the background emphasising the expanse of our galaxy.",
          "url": "/images/optimised/milkyway-galaxy-forest-md.webp",
          "formats": {
            "medium": {
              "src": "/images/optimised/milkyway-galaxy-forest-md.webp",
              "minWidth": 768
            },
            "large": {
              "src": "/images/optimised/milkyway-galaxy-forest-lg.webp",
              "minWidth": 960
            },
            "xlarge": {
              "src": "/images/optimised/milkyway-galaxy-forest-xl.webp",
              "minWidth": 1420
            }
          }
        }
      }
    },
    "gridLayout": "content"
  };

  it("renders", () => {
    const { container } = render(() => <Banner {...propData} />);
    expect(container).toMatchSnapshot();
  });
  
  it("has a title", () => {
    const { getByText } = render(() => <Banner {...propData} />);
    
    expect(getByText(/Software Engineer/)).toBeInTheDocument();
  });
  
  it("can have a image", () => {
    render(() => <Banner {...propData} />);
    
    // Find the image inside the picture element
    const image = screen.getByAltText(/A photo of The Milky Way, taken from the surface of Earth in a heavily wooded area. The silouhette of trees wrap the image with the sky in the background emphasising the expanse of our galaxy./i);
    
    // Check if the image exists and has the correct alt text
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", propData.backgroundImage.url);
  });
});