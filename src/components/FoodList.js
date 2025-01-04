import React from "react";
import Zoom from "react-reveal/Zoom";

function FoodList({ foodItems }) {
  return (
    <>
      {foodItems.length > 0 ? (
        foodItems.map((item) => {
          return (
            <div className="row mt-1" key={item.id}>
              <Zoom>
                <div className="col sm-12 card mb-3 d-flex flex-row">
                  <img src={item.img} className="card-img-right" alt="..." />
                  <div className="card-body">
                    <div className="card-title d-flex justify-content-between">
                      <h5>{item.title}</h5>
                      <h5 style={{ color: "#dc3545" }}>{item.price}</h5>
                    </div>
                    <div className="card-text py-2">{item.description}</div>
                  </div>
                </div>
              </Zoom>
            </div>
          );
        })
      ) : (
        <h2>لا يوجد اصناف</h2>
      )}
    </>
  );
}

export default FoodList;
