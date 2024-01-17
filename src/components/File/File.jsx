import { useState } from "react";

const File = () => {
  const [file, setFile] = useState([]);

  // handleFileUpload
  const handleFileUpload = (e) => {
    // console.log(Array.from(e.target.files));

    setFile((prevState) => [...prevState, ...Array.from(e.target.files)]);
  };
  //   console.log(file);

  // handlePrevPhotoDelete
  const handlePrevPhotoDelete = (item) => {
    setFile(file.filter((data) => data !== item));
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <input
                  type="file"
                  className="form-control"
                  multiple={true}
                  onChange={handleFileUpload}
                />
              </div>
              <hr />

              <div className="row p-2">
                {file.map((item, index) => {
                  const imgUrl = URL.createObjectURL(item);

                  return (
                    <div className="col-md-3" key={index}>
                      <img className="w-100" src={imgUrl} alt="" />
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handlePrevPhotoDelete(item)}
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default File;
