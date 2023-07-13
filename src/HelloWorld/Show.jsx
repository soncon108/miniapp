import { useState } from "react";
import "./Show.css";

function Show() {
  const [info, setInfo] = useState("");
  const hanldeShow = (event) => {
    setInfo(event.target.value);
  };

  return (
    <>
      <div className="containerShow">
        <h3>Nhập Là Hiển Thị</h3>
        <input value={info} onChange={hanldeShow} />
        <p>{info}</p>
      </div>
    </>
  );
}

export default Show;
