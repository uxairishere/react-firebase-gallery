import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/Modal'
import About from './comps/About';
import './App.css';
  
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <About/>
    </div>
  );
}

export default App;
