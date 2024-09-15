import { useEffect, useState } from 'react';
import Product from '../../../components/product/Product';
import ReactPaginate from 'react-paginate';
import './products.scss';
import Loader from '../../../components/loader/Loader';

const Products = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const productsPerPage = 12;
    const pageCount = Math.ceil(total / productsPerPage);



    useEffect(() => {
        setLoader(true);
        fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${pageNumber * productsPerPage}&select=`)
            .then((res) => res.json())
            .then((json) => {
                setData(json.products);
                setTotal(json.total);
                setLoader(false);
            });
    }, [pageNumber]);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <section className="container">
            <div className="products mb-5">
                {loader ? <Loader />
                    : !data && !loader ? <h1>No Products Found</h1>
                        : data.map((item) => (
                            <div className="product" key={item.id}>
                                <Product {...item} />
                            </div>
                        ))}
            </div>

            {
                !loader && data && data.length > 0?
                    <ReactPaginate 
                        previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                        nextLabel={<i className="fa-solid fa-chevron-right"></i>}

                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}

                        // Custom page range logic
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        breakLabel="..."
                    />
                    : null
            }
        </section>
    );
};

export default Products;