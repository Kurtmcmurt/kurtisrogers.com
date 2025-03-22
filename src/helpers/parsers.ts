const parser = new DOMParser();

function handleSVGString(svgString: string): string {
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");

  if (svgDoc.documentElement.nodeName === "parsererror") {
    console.error("Error parsing SVG:", svgDoc.documentElement.textContent);
    return "";
  }

  return svgDoc.documentElement.innerHTML;
}

export { handleSVGString };
