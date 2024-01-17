import useFormInput from "../../hook/useFormInput";

const Form = () => {
  const { input, setInput, handleInputChange, handleResetForm } = useFormInput({
    name: "",
    age: "",
    phone: "",
    email: "",
    skill: "",
  });

  //handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //reset form
    handleResetForm();
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="my-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="my-2">
                    <input
                      type="text"
                      placeholder="Age"
                      className="form-control"
                      name="age"
                      value={input.age}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="my-2">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      name="phone"
                      value={input.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="my-2">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                    />
                    <div className="my-2">
                      <select
                        className="form-select"
                        name="skill"
                        value={input.skill}
                        onChange={handleInputChange}
                      >
                        <option value="Html">Html</option>
                        <option value="Css">Css</option>
                        <option value="Javascript">Javascript</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
