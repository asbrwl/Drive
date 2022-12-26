import React,{useState} from 'react';
import './App.css';

import BackgroundVideo from './Components/BackgroundVideo';
import DashImage from './Components/Dash';
import Modal from './Components/Modal';

function App() {
  
const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

const closeModal = () => {
  setIsOpen(false);
};
  return (
       <div>
      <BackgroundVideo />
      <DashImage />
      <button onClick={toggleModal}>Open phone</button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    
  );
}

export default App;
