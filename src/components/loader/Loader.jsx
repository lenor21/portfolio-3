import { motion } from "framer-motion";

const Loader = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "#333"
    },
    visible: {
      pathLength: 1,
      fill: "#C5D8C5"
    }
  }

  return (
    <div className="c-loader">
        <svg id="Layer_2" className="c-loader__icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.81 534.25">
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              className="cls-1" 
              d="m380.11,25.93c-11.97-5.68-24.42-10.49-37.28-14.34-12.6-3.78-25.59-6.64-38.9-8.5-12.13-1.71-24.52-2.59-37.12-2.59H.5v533.25h76.18l.32-80.19c48.21,49.48,115.44,80.19,189.81,80.19,12.6,0,24.99-.88,37.12-2.59,129.06-18.13,228.38-129.43,228.38-264.03,0-106.56-62.24-198.51-152.2-241.2ZM76.79,266.81l.02-13.13v-.03l.29-173.06v-4.55h152.26v3.57s-.32,187.2-.32,187.2H76.79Zm227.14,187.26c-12.25,2.51-24.94,3.82-37.93,3.82-77.64,0-144.38-46.97-173.71-114.23l211.64-.03V79.86c13.43,2.74,26.34,6.91,38.57,12.35,13.55,6.02,26.27,13.59,37.93,22.49,45.7,34.86,75.22,90.1,75.22,152.27,0,92.36-65.15,169.41-151.72,187.1Z"
            />
          </g>
        </svg>
    </div>
  );
};

export default Loader;