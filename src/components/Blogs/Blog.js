import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="my-4">
      <h3 className="mb-4">Q & A</h3>
      <div className="q1 p-4">
        <h4>What is Context API?</h4>
        <p>
          Ans: Context API is a React Structure. It allows us to pass data
          without prop drillings. Using context api we can send data from parent
          component to child component. It allows one to share state accross
          eitire app.
        </p>
      </div>
      <div className="q2 p-4">
        <h4>WHati is Symanctic Tag?</h4>
        <p>
          Ans: Symantic HTML elements clearly described in a human and machine
          readable way. HTML symantic tags help search engine and other user
          devices to determine the importance and context of web page. The pages
          made with symantic elements are much easier to read. It has huge
          accessibility. It offers better user experience.
        </p>
      </div>
      <div className="q3 p-4">
        <h4>
          What are the difference between inline block and inline block
          elements?
        </h4>
      </div>
    </div>
  );
};

export default Blogs;
