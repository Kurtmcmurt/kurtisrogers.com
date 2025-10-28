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
    type: "banner",
    title: {
      text: "About",
      headingLevel: "1" as "1" | "2" | "3" | "4" | "5" | "6"
    },
    children: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Technology is where I live. I also love anything to do with space."
          },
          {
            type: "text",
            text: "Will our species ever reach Alpha Centauri? Propulsion technology has come a long way since we last went to the Moon. A simple laser-powered lightsail? Theoretically this could reach 20% speed of light (0.2c). So Alpha Centauri in a cool 21.41 years. Not sure about the return journey though..."
          },
          {
            type: "text",
            text: "Time dialation? 0.44 years. And roughly half an hour away via radio contact..."
          }
        ]
      }
    ],
    image: {
      data: {
        attributes: {
          alternativeText: "Milky Way illustration.",
          credit: {
            author: "Philippe Donn",
            link: {
              url: "https://www.pexels.com/photo/milky-way-illustration-1169754/",
              target: "_blank" as "_blank" | "_self"
            }
          },
          url: "/images/optimised/milkyway-galaxy-md.webp",
          formats: {
            medium: {
              src: "/images/optimised/milkyway-galaxy-md.webp",
              minWidth: 768
            },
            large: {
              src: "/images/optimised/milkyway-galaxy-lg.webp",
              minWidth: 960
            },
            xlarge: {
              src: "/images/optimised/milkyway-galaxy-xl.webp",
              minWidth: 1420
            }
          }
        }
      }
    }
  };

  it("renders", () => {
    const { container } = render(() => <Banner {...propData} />);
    expect(container).toMatchSnapshot();
  });

  it("has a title", () => {
    const { getByText } = render(() => <Banner {...propData} />);

    expect(getByText(/About/)).toBeInTheDocument();
  });

  it("can have a image", () => {
    render(() => <Banner {...propData} />);

    // Find the image inside the picture element
    const image = screen.getByAltText(/Milky Way illustration./i);

    // Check if the image exists and has the correct alt text
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", propData.image.data.attributes.url);
  });
});
