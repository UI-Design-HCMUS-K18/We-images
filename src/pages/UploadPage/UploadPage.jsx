import React, { useState } from 'react';
import './UploadPage.css';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';

export default function UploadPage() {
  const [images, setImages] = useState([]);

  const history = useHistory();

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const clearImages = () => {
    setImages([]);
  };

  const saveImages = () => {
    console.log(images);
    localStorage.setItem(
      'images',
      JSON.stringify(
        images.map((image) => ({ src: URL.createObjectURL(image) }))
      )
    );
    history.push('/editupload');
  };

  return (
    <div className="upload-page">
      <div className="container">
        <div className="upload-page__header">
          <h1>Upload your images</h1>
        </div>

        <div className="upload-page__content">
          <div className="top">
            <p>Drop your images below</p>
            <p>or</p>
            <label for="upload-images" className="btn">
              <CreateNewFolderIcon />
              Select images
            </label>
          </div>
          <hr className="hr" />
          <div className="bottom">
            {images.map((image, index) => (
              <div className="image-container" key={index}>
                <div
                  className="delete-image"
                  onClick={() => deleteImage(index)}
                >
                  <CloseIcon />
                </div>
                <img src={URL.createObjectURL(image)} alt="abc" />
              </div>
            ))}
            <label for="upload-images" className="add-btn">
              <AddIcon className="icon" />
            </label>
          </div>
        </div>
        <div className="action">
          <label className="clear-btn" onClick={clearImages}>
            <DeleteIcon className="icon" />
            <p>Clear</p>
          </label>
          <label onClick={saveImages} className="upload-btn">
            <FileUploadIcon className="icon" />
            <p>Upload</p>
          </label>
        </div>
        <input
          id="upload-images"
          multiple="multiple"
          type="file"
          name="myImage"
          onChange={(event) => {
            setImages([...images, ...event.target.files]);
            event.target.value = null;
          }}
          accept="image/x-png,image/gif,image/jpeg"
        />
      </div>
      <Footer />
    </div>
  );
}
