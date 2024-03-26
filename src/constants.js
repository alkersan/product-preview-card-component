export const BREAKPOINTS = {
  tablet: 768,
  laptop: 1100,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
