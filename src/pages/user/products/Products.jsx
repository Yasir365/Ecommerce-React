import { useEffect, useState } from 'react';
import Product from '../../../components/product/Product';
import ReactPaginate from 'react-paginate';
import './products.scss';
import Loader from '../../../components/loader/Loader';
import apiService from '../../../services/api-service';

// Constants
const ITEMS_PER_PAGE = 12;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    // Fetch products whenever currentPage changes
    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    // Calculate page count
    const pageCount = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Fetch products from API
    const fetchProducts = async () => {
        setLoading(true);
        const payload = {
            currentPage: currentPage + 1,
            itemsPerPage: ITEMS_PER_PAGE,
        };
        try {
            const response = await apiService.getProducts(payload);
            if (response.data.success) {
                setProducts(response.data.data);
                setTotalItems(response.data.pagination.totalCount);
            } else {
                console.error('Failed to fetch products:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <section className='container'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <ProductList products={products} />
                    {products.length > 0 && (
                        <PaginationControls
                            pageCount={pageCount}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </section>
    );
};

// Component for rendering list of products
const ProductList = ({ products }) => (
    <div className='products mb-5'>
        {products.length === 0 ? (
            <h1>No Products Found</h1>
        ) : (
            products.map((product) => (
                <div className='product' key={product._id}>
                    <Product {...product} />
                </div>
            ))
        )}
    </div>
);

// Component for rendering pagination controls
const PaginationControls = ({ pageCount, currentPage, onPageChange }) => (
    <ReactPaginate
        previousLabel={<i className='fa-solid fa-chevron-left'></i>}
        nextLabel={<i className='fa-solid fa-chevron-right'></i>}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={onPageChange}
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClassName='active'
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel='...'
    />
);

export default Products;
