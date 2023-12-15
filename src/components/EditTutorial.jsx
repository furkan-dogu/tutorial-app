import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editData, getTutorials }) => {
  const { title: oldTitle, description: oldDescription } = editData;
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
  }, [oldTitle, oldDescription]);

  const putTutorial = async () => {
    try {
      const newData = { title, description };
      await axios.put(`${process.env.REACT_APP_URL}${editData.id}/`, newData);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div>
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Tutorial
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                  }}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={putTutorial}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter your title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder="Enter your Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-danger mb-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default EditTutorial;
