/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "./Card";

function Slider({ title }) {
  return (
    <div>
      <div className="box">
        <div className="mx-auto p-2">
          <h2 className="font-weight-bold">
            <Link to="books.html" style={{ color: "#03265a" }}>
              {title}
            </Link>
          </h2>
        </div>

        <main>
          <div className="container-fluid">
            <div style={{ overflowY: "hidden" }}>
              <div style={{ display: "flex" }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Slider;
