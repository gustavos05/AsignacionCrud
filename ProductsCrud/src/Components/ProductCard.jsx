
const ProductCard = ({products, deleteProduct, selectProduct}) => {



    return(
        <div className="Wrapper">
            {
                products?.map( (productElement, index) => (
                    <div className="Card" key={`products-${index}`}>
                        <h4><span>Name:</span> {productElement.name}</h4>
                        <h4><span>Category: </span> {productElement.category}</h4>
                        <button className="btn-delete" onClick={ () => deleteProduct(productElement.id) }>Delete</button>
                        <button className="btn-edit" onClick={ () => selectProduct(productElement) } >Select</button>
                    </div>
                ) )
            }
       </div>
    )

}

export default ProductCard
