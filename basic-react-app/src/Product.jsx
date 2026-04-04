import "./Product.css";
import Price from "./Price";

function Product({ title, idx}) {
  let oldPrice = ["12,495", "11,900", "1,599"];
  let newPrice = ["13,495", "15,900", "6,599"];
  let description = ["8,000 DPI", 
    "intuitive surface",
    "designed for ipad Pro."
    , "wireless"
  ]

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrices={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  );
}

export default Product;