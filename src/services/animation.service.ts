export const ParentVariants = {
  hidden: {
    x: '0px',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};
export const HeadingVariants = {
  hidden: {
    opacity: 0,
    x: '-20px',
    pathLength: -2,
    
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};
export const ImageVariants = {
  hidden: {
    opacity: 0,
    x: '-40px',
    pathLength: -2,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};
export const TextVariants = {
  hidden: {
    opacity: 0,
    y: '40px',
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    y: 0,

    pathLength: 1,
    transition: { delay: 0.2, duration: 0.5, originY: 0 },
  },
};
