const breakpoints = {
  SM: "480",
  MD: "768",
  LG: "1024",
  XL: "1200",
};

const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mediaQueries;
