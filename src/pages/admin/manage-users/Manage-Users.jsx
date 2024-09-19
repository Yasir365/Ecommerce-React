
import './manage-users.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../../components/loader/Loader';
import defaultImage from '../../../assets/skeleton.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ManageUsers = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const productsPerPage = 10;
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='manage-products'>
            <div className='filter mb-4'>
                <div>
                    <input type="text" placeholder='Search...' />
                    {loader && <div className="loader"></div>}
                </div>
                <div></div>
            </div>
            <div className="products mb-3">
                <div className="rounded h-100 ">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" className='text-center' >Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data && data.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row" className='align-middle'>{index + 1 + pageNumber * productsPerPage}</th>
                                            <td className='align-middle'><LazyLoadImage src={item.images[0] || defaultImage} alt={item.title} /></td>
                                            <td className='align-middle'>{item.title}</td>
                                            <td className='align-middle'>{item.description}</td>
                                            <td className='align-middle'>{item.price}</td>
                                            <td className='align-middle'>{item.rating}</td>
                                            <td className='align-middle'>
                                                <div className='d-flex justify-content-center'>
                                                    <button><i className="fa-solid fa-pen-to-square"></i></button>
                                                    <button className="ms-2"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    loader && (
                                        <tr>
                                            <td colSpan={7} className='text-center'>
                                                <div className='loader-conatiner'><Loader /></div>
                                            </td>
                                        </tr>
                                    )
                                }
                                {
                                    !loader && data && data.length === 0 && (
                                        <tr>
                                            <td colSpan={7} className='text-center'>No Data Found</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {
                !loader && data && data.length > 0 ?
                    <ReactPaginate
                        previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                        nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                        forcePage={pageNumber}
                        onPageChange={changePage}
                        pageCount={pageCount}
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
        </div>
    );
};

export default ManageUsers;