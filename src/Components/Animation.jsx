import React from "react";

const Animation = ({ state, setState }) => {
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <h1>MATCH FOUND</h1>
      {/* <Button onClick={()=>{}}> Compare </Button> */}
      {setState(false)}
    </div>
  );
};

export default Animation;
