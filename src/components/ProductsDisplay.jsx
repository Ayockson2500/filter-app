import React from "react";

const ProductsDisplay = ({filterSearch}) => {

  
  return (
    <div className="itemsDiplay mt-3">
      { filterSearch.length !== 0 &&
      <>
        {filterSearch.slice(0, 10).map((data, key) => (
          <div key={data.id}>
            <img src={data.thumbnailUrl} alt="" /> <br />
            <a className="dataItem" href={data.thumbnailUrl} rel="noreferrer" target="_blank">{data.title}</a>
          </div>
        ))}
      </>
      }
    </div>
  );
};

export default ProductsDisplay;
