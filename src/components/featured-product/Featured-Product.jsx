import Product from '../product/Product';

export default function FeaturedProduct(props) {
    return (
        !props ? (
            <Loader />
        ) : (
            <section className='features container'>
                <h1 className="heading">{props.title}</h1>
                <div className='products'>
                    {
                        props.products.map((item) => (
                            <div className="product" key={item._id}>
                                <Product {...item} />
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    )
}
