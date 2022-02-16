export const breakpoints = {
  mobile: 500,
  tablet: 775,
  desktop: 1024,
};

// Usage: mediaQueries(breakpoints.mobile)
export const mediaQueries = (breakpoint) => `@media (max-width: ${breakpoint}px)`;
