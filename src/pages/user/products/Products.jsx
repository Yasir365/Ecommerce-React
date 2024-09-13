import { useEffect, useState } from 'react';
import Product from '../../../components/product/Product';
import ReactPaginate from 'react-paginate';
import './products.scss';

const Products = () => {
const [data, setData] = useState([]);
const [pageNumber, setPageNumber] = useState(0);
const [total, setTotal] = useState(0);
const productsPerPage = 12;
const pageCount = Math.ceil(total / productsPerPage);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${pageNumber * productsPerPage}&select=`)
        .then((res) => res.json())
        .then((json) => {
            setData(json.products);
            setTotal(json.total);
        });
    }, [pageNumber]);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <section className="container">
        <div className="products mb-5">
            {data.map((item) => (
            <div className="product">
                <Product key={item.id} {...item} />
            </div>
            ))}
        </div>
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
        />
        </section>
    );
};

export default Products;