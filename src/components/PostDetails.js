import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import "../styles/about-page.css";

// Since this component is simple and static, there's no parent container for it.
const PostDetails = props => {
  const { title, body } = props.postDetails;
  return (
    <div>
      <div className="display-content">
        {/* <span>{id})</span> */}
        <div style={{ padding: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <h4>{title.toUpperCase()}</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>{body}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
PostDetails.propTypes = {
  postDetails: PropTypes.object
};

export default PostDetails;
