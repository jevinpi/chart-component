import React, { useEffect } from "react";

function TestCom() {
  useEffect(() => {
    console.log('test组件 useEffect');
  }, [])
  return <p>test组件</p>;
}

export default TestCom;
