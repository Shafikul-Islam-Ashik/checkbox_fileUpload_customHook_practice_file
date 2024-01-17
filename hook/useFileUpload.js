import { useState } from "react";

const useFileUpload = () => {
  const [allFiles, setAllFiles] = useState([]);

  // handleFileUpload
  const handleFileUpload = (e) => {
    // add to the array
    setAllFiles((prevState) => [...prevState, ...Array.from(e.target.files)]);
  };

  // handle file Delete
  const handleFileDelete = (item) => {
    // remove from the array
    setAllFiles(allFiles.filter((data) => data !== item));
  };

  return { allFiles, setAllFiles, handleFileUpload, handleFileDelete };
};

export default useFileUpload;
