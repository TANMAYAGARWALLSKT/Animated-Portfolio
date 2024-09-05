export const pageVariants = {
  initial: {
    y: "100vh",
  },
  in: {
    y: "-140vh",
    display: "none",

    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
  out: {
    y: "-140vh",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
// initial={{
//
// }}
// animate={{
//
// }}
// exit={{
//
// }}
