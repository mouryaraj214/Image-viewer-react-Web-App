import { useState } from 'react';
import './App.css';

const imageList = [
  'https://picsum.photos/600/400',
  'https://picsum.photos/600/401',
  'https://picsum.photos/600/402',
  'https://picsum.photos/600/403',
  'https://picsum.photos/600/404',
  
];

function App() {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  return (
    <div className="app-container">
    
      <h1 className="app-title">Image Viewer React App</h1>


      <div className="viewer-container">
        <img src={selectedImage} alt="Selected" className="selected-image" />
      </div>

      
      <div className="thumbnails-container">
        {imageList.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Thumbnail ${index + 1}`} 
            className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
            onClick={() => setSelectedImage(img)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
