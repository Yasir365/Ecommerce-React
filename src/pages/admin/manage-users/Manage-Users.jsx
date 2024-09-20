import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../../components/loader/Loader';
import apiService from '../../../services/api-service';
import swalToastr from '../../../services/toastr-service';
import Swal from 'sweetalert2';
import moment from 'moment';


// Constants
const ITEMS_PER_PAGE = 10;

const ManageUsers = () => {
    // State variables
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState('');

    // Pagination Calculations
    const pageCount = Math.ceil(total / ITEMS_PER_PAGE);

    // Fetch products on component mount and when page or search changes
    useEffect(() => {
        getUsers();
    }, [currentPage, search]);

    const getUsers = async () => {
        setLoader(true);
        const payload = {
            currentPage: currentPage + 1,
            itemsPerPage: ITEMS_PER_PAGE,
            search,
        };
        try {
            const resp = await apiService.getUsers(payload);
            if (resp.data.success) {
                setData(resp.data.data);
                setTotal(resp.data.pagination.totalCount);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoader(false);
        }
    };



    // Delete product
    const toggleStatus = async (user) => {
        Swal.fire({
            title: 'Are you sure!',
            text: `You want to ${user.status === 'ACTIVE' ? 'deactivate' : 'activate'} this user?`,
            icon: 'warning',
            confirmButtonText: 'OK',
            cancelButtonText: 'No',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await apiService.toggleUserStatus(user._id);
                    if (response.data.success) {
                        swalToastr('success', 'User Status Updated Successfully!');
                        getUsers();
                    } else {
                        swalToastr('error', response.data.message);
                    }
                } catch (error) {
                    swalToastr('error', 'Error deleting product: ' + error.message);
                }
            }
        });
    };

    // Change page
    const changePage = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='manage-products'>
            <div className='filter mb-4'>
                <div>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {loader && <div className='loader'></div>}
                </div>

            </div>

            <UserTable
                data={data}
                loader={loader}
                currentPage={currentPage}
                itemsPerPage={ITEMS_PER_PAGE}
                toggleStatus={toggleStatus}
            />

            {!loader && data.length > 0 && pageCount > 1 && (
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onPageChange={changePage}
                />
            )}


        </div>
    );
};

const UserTable = ({ data, loader, currentPage, itemsPerPage, toggleStatus }) => (
    <div className='products mb-3'>
        <div className='rounded h-100'>
            <div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Username</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Created at</th>
                            <th scope='col' className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th scope='row' className='align-middle'>
                                    {index + 1 + currentPage * itemsPerPage}
                                </th>
                                <td className='align-middle'>{item.name}</td>
                                <td className='align-middle'>{item.email}</td>
                                <td className='align-middle'>
                                    <span className={item.role === 'admin' ? 'badge bg-primary' : 'badge bg-secondary'}>
                                        {item.role == 'admin' ? 'Admin' : 'User'}
                                    </span>
                                </td>
                                <td className='align-middle'>
                                    <span className={item.status === 'ACTIVE' ? 'badge bg-success' : 'badge bg-danger'}>
                                        {item.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className='align-middle'>
                                    <span title={moment(item.createdDate).format('MMMM DD, YYYY, hh:mm a')} >
                                        {moment(item.createdDate).format('MMM DD, YYYY')}
                                    </span>
                                </td>
                                <td className='align-middle'>
                                    <div className='d-flex justify-content-center'>
                                        <button className='ms-2' onClick={() => toggleStatus(item)}>
                                            {item.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {loader && (
                            <tr>
                                <td colSpan={8} className='text-center'>
                                    <div className='loader-container'>
                                        <Loader />
                                    </div>
                                </td>
                            </tr>
                        )}
                        {!loader && data.length === 0 && (
                            <tr>
                                <td colSpan={8} className='text-center'>No Data Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const Pagination = ({ pageCount, currentPage, onPageChange }) => (
    <ReactPaginate
        previousLabel={<i className='fa-solid fa-chevron-left'></i>}
        nextLabel={<i className='fa-solid fa-chevron-right'></i>}
        forcePage={currentPage}
        onPageChange={onPageChange}
        pageCount={pageCount}
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

export default ManageUsers;
