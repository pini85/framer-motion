import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardGrid, Container, Header } from './Elements';
import './App.css';
import Modal from './Modal';
import Accordian from './Accordian';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggled] = useState(true);
  const [isToggleModal, setToggleModal] = useState(false);

  return (
    <motion.div
    // animate={{ opacity: [1, 0, 1] }}
    // transition={{ times: [0, 0.1, 1.0], duration: 5 }}
    // //times is the keyframeso f %. We ditched initial animation and just plugged it in the animate. from 0% it is opacity 1 and from 0% to 10% is opacity 0 and from 10% to 100% it is opacity 1
    >
      <Header>
        accordian
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        {/* Unmounting */}
        <AnimatePresence>
          {isToggled && (
            <motion.h2
              initial={{ opacity: 0 }}
              // animate={{ x: parseInt(value) * 10, opacity: isToggled ? 1 : 0 }}
              animate={{ opacity: 1, x: value + 'px' }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={() => setToggled(prevValue => !prevValue)}>
          Toggle
        </button>
        <button onClick={() => setToggleModal(true)}>Toggle Modal</button>

        <Modal isToggleModal={isToggleModal} setToggleModal={setToggleModal}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

        <Accordian />
        <CardGrid>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: 'var(--blue)' }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
