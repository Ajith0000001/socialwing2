export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay || 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay || 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
