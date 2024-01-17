import { useState } from "react";
import useFileUpload from "../../hook/useFileUpload";

const File2 = () => {
  const { allFiles, setAllFiles, handleFileUpload, handleFileDelete } =
    useFileUpload();

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
                {allFiles.map((item, index) => {
                  const imgUrl = URL.createObjectURL(item);

                  return (
                    <div className="col-md-3" key={index}>
                      <img className="w-100" src={imgUrl} alt="" />
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleFileDelete(item)}
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

export default File2;
