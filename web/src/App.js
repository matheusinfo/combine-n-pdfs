import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { base64toBlob } from "./utils";
import "./App.css";

const App = () => {
  const mergePdfs = async (files) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/merge`, files, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        toast.success('PDFs merged successfully');
        const url = base64toBlob(result.data.pdf_buffer);
        window.open(URL.createObjectURL(url), "mozillaTab");
      })
      .catch((error) => toast.error(error.response.data.error));
  };

  const upload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (var key of Object.keys(files)) {
      formData.append("file", files[key]);
    }

    mergePdfs(formData);
  };

  return (
    <div className="App">
      <label for="files" class="main-label" title="Click here to select your PDF's">Click here to select your PDF's</label>
      <input
        hidden
        id="files"
        multiple
        type="file"
        accept=".pdf"
        onChange={upload}
        title="Select only PDF files"
      />
      <ToastContainer />
    </div>
  );
};

export default App;
