import React from "react";

function OtherLoader(Component) {
  // Returning a function that is a React component
  return function WrappedComponent(props) {
    return (
      <div>
        {/* You can add loader UI or logic here */}
        <Component {...props} />
      </div>
    );
  };
}

export default OtherLoader;
