import React from "react";

const withClass = (Comment, className) => {
  return props => {
    return (
      <div className={className}>
        <Comment {...props} />
      </div>
    );
  };
};

export default withClass;
