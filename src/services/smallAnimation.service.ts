export const SmallParentVariants = {
  hidden: {
    // x: '30px',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};
export const HeadingVariants = {
  hidden: {
    opacity: 0,
    x: '-5px',
    pathLength: -2,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 1.2 },
  },
};
export const SmallImageVariants = {
  hidden: {
    opacity: 0,
    x: '-10',
    pathLength: -2,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 1.2 },
  },
};
export const SmallTextVariants = {
  hidden: {
    opacity: 0,
    y: '10px',
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    y: 0,

    pathLength: 1,
    transition: { delay: 0.5, duration: 1.3, originY: 0 },
  },
};
