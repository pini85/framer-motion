import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isToggleModal, setToggleModal, children }) => {
  console.log(children);
  //Multilayer animations

  return (
    <AnimatePresence>
      {isToggleModal && (
        <motion.div
          style={{
            position: 'fixed',
            top: '30px',
            left: '50%',
            transform: 'translate(-50%,0.0)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div initial={{ y: 0 }} animate={{ y: 30 }} exit={{ y: 30 }}>
            {/* //exit doesnt work here because our wrapper exiting the div we need something called variants to help out */}
            <button onClick={() => setToggleModal(false)}>Close</button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
