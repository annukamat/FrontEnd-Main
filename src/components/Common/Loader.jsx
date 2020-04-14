import React from "react";
import LoadingOverlay from "react-loading-overlay";

function Loader({ children, text, active }) {
  return (
    <>
      <LoadingOverlay active={active} spinner text={text||'Loading...'} className="p-2">
        {children}
      </LoadingOverlay>
    </>
  );
}

export default Loader;
