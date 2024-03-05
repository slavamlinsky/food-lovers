"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    // console.log(event.target)
    console.log(file.name);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  //   <Image
  //     src={URL.createObjectURL(file)}
  //     alt={`Preview of ${file.name}`}
  //     className={styles.fileImage}
  //     onClick={() => onShow(file, quality, resize)}
  //     width={160}
  //     height={120}
  //   />

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image yet</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
        </div>
        <input
          ref={imageInput}
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
