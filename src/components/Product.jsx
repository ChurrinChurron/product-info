import "./styles/product.css"


const Product = ({imgProduct, titleProduct, oldPrice, actualPrice}) => {
  return (
    <div className="product">
        <img src={imgProduct} alt={titleProduct} />
        <div className="product__info">
            <span>Free shipping</span>
            <h2>{titleProduct}</h2>
            <p id="oldPrice">{oldPrice},-</p>
            <h3>{actualPrice},-</h3>
            <p id="offer">The offer is valid until April 3 or as long as stack lasts!</p>
            <button className="addCart">Add to cart</button>
            <p id="stock"><i className="fa-solid fa-circle"></i> 50+ pcs. in stock.</p>
            <div className="product__options">
                <button className="optionProduct"><i className="fa-solid fa-scale-balanced"></i> Add to cart</button>
                <button className="optionProduct"><i className="fa-regular fa-heart"></i> Add to wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default Product