import React, { useState } from "react";
import axios from "axios";
import Prompt from "../components/Prompt";
import "./css/Paragraph.css";

const Paragraph = () => {
  const [text, settext] = useState("");
  const [para, setPara] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/paragraph", { text });
      console.log(data);
      setPara(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      {!loggedIn ? (
        <Prompt />
      ) : (
        <div className="para-container">
          {error !== "" && (
            <div className="error-parent">
              <div className="error-content">{error}</div>
            </div>
          )}
          <form className="para-form" onSubmit={handleSubmit}>
            <h3>Write anything and get a Paragraph</h3>

            <textarea
              placeholder="Add your text"
              required
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />
              
            <button type="submit">Generate</button>
          </form>

          <div className="para-solution">
            <p>
              {para
                ? para
                : "Just wait for few minutes , you will see your response here"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Paragraph;
