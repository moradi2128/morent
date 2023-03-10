export const LeftToRightVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 5, duration: 0.5 },
    },
  };
//   === Image ===
  export const showImgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 0.5 },
    },
  };
  export const openImgVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      transition: { delay: 1.5, duration: 0.2 },
    },
  };

  export const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };