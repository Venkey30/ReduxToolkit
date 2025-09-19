import React from "react";
import { useGetAllProductsQuery } from "../../services/products";


function Products() {

    var { isLoading, data } = useGetAllProductsQuery();
    console.log("isLoading::", isLoading);
    console.log("data::", data);
  return (
    <div className="border border-2 border-info p-3 m-3">
        <h1>Products</h1>
        {isLoading && <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"/>}
        {!isLoading && (
            <ul>
                {data.products.map((pr)=> {
                    return <li>{pr.title}</li>;
                })}
            </ul>
        )}
    </div>
  );
}

export default Products;