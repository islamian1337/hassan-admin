import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { db, storage } from "../firebase";
import { doc, setDoc, collection, addDoc } from "@firebase/firestore";
import "./login.css";

const AdminPanel = () => {
  const [progress, setProgress] = useState(0);

  const formatHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };
  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("Download URL: ", url);
          try {
            const docRef = addDoc(collection(db, "photos"), {
              type: "image",
              imageURL: url,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
      }
    );
  };
  return (
    <div>
      <h1>Hassan Turi: image Addition Panel</h1>
      <form onSubmit={formatHandler}>
        <label style={{ margin: "10px" }}>Drop image here:</label>
        <br />
        <input type="file" style={{ margin: "10px" }} />
        <br />
        <button style={{ margin: "10px" }} id="log">
          Upload
        </button>
        <br />
      </form>
      <h3>Upload Progress {progress}%</h3>
    </div>
  );
};

export default AdminPanel;
