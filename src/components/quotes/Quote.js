import React, { Fragment } from "react";

import "../../assets/scss/quotes.scss";

const Quote = ({ quote, author }) => {
  return (
    <Fragment>
      <div className="bubble box">
        <blockquote>{quote}</blockquote>
        <div></div>
        <cite>{author}</cite>{" "}
      </div>
    </Fragment>
  );
};

export default Quote;
