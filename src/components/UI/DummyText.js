import React, { memo } from "react";

const DummyText = (props) => {
  props.func();
  console.log("dummy text");
  return (
    <>
      {/* <p>{props.text}</p>; */}
      <p>hello dummy</p>
    </>
  );
};

export default memo(DummyText);
