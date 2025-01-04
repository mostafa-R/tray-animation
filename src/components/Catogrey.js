import React from "react";
import Roll from "react-reveal/Roll";

function Catogrey({ filterItems, allCatogries }) {
  return (
    <div className="row mb-5">
      <div className="col d-flex flex-row justify-content-center align-items-center mt-3">
        {
          /* The buttons are rendered dynamically based on the allCatogries array */
          allCatogries.map((item) => (
            <Roll>
              <button
                className="btn btn-catogrey me-2"
                onClick={() => filterItems(item)}
              >
                {item}
              </button>
            </Roll>
          ))
        }
      </div>
    </div>
  );
}

export default Catogrey;
