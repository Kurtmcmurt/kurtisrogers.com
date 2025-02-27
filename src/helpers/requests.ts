// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const GET = async (query?: any) => {
  // const response = await fetch(query);

  return [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "About",
      link: "/about"
    },
    {
      text: "Blog",
      link: "/blog"
    },
    {
      text: "Contact us",
      link: "/contact-us"
    }
  ];

  // return response.json();
};
