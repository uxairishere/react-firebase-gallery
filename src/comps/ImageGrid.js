import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const [counter, setCounter] = useState(10)

  function HandleOnClick() {
    setCounter(counter + 5);
  }

  return (
    <div>
      <div className="img-grid">
        {
          docs && docs.filter((doc, idx) => idx < counter).map(doc => (
            <motion.div className="img-wrap" key={doc.id}
              layout
              whileHover={{ opacity: 1 }} s
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img src={doc.url} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))
        }
      </div>

      <button onClick={HandleOnClick}>
        <svg class="animate-bounce w-6 h-6 text-cyan-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>

    </div>
  )
}

export default ImageGrid;