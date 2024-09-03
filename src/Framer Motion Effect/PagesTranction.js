export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
