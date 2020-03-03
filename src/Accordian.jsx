import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordian = () => {
  const [isToggled, setToggled] = useState();
  return (
    <>
      <h2 onClick={() => setToggled(prevValue => !prevValue)} role="button">
        I am an accordian!
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            style={{ overflow: 'hidden' }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            nihil amet blanditiis dolor, maxime ea deserunt consequatur nobis
            dolore labore ut sit non vero, sunt tempora fugiat voluptatibus
            incidunt eos.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Accordian;
