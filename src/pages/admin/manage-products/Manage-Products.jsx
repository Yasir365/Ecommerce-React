import './manage-products.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../../components/loader/Loader';
import defaultImage from '../../../assets/skeleton.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import apiService from '../../../services/api-service';

const ManageProducts = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const itemsPerPage = 10;
  const pageCount = Math.ceil(total / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, [currentPage, search]);

  const getProducts = async () => {
    setLoader(true);
    const payload = {
      currentPage: currentPage + 1,
      itemsPerPage,
      search
    };
    let resp = await apiService.getProducts(payload);
    if (resp.data.success) {
      setData(resp.data.data);
      setTotal(resp.data.pagination.totalCount);
      setLoader(false);
    }
  };

  // Add Product
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(defaultImage)
  const [submitLoader, setSubmitLoader] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addProduct = async (event) => {
    event.preventDefault();
    if (!title || !price || !description || !image) {
      setError('All fields are required');
      return;
    }
    setError(null);
    try {
      setSubmitLoader(true);
      const productData = { title, price, description, image, };
      const response = await apiService.addProduct(productData);
      setSubmitLoader(false);
      if (response.success) {
        toastrService.success('Product Added Successful...');
        getProducts();
        setError(null);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setSubmitLoader(false);
      setError(error.message);
    }
  };

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='manage-products'>
        <div className='filter mb-4'>
          <div>
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
            {loader && <div className="loader"></div>}
          </div>
          <button className='btn add-product' data-bs-toggle="modal" data-bs-target="#addProductModal">Add Product</button>
        </div>
        <div className="products mb-3">
          <div className="rounded h-100 ">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col" style={{ width: '40%' }}>Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                    <th scope="col" className='text-center' >Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    data && data.map((item, index) => (
                      <tr key={index}>
                        <th scope="row" className='align-middle'>{index + 1 + currentPage * itemsPerPage}</th>
                        <td className='align-middle'><LazyLoadImage src={item.image || defaultImage} alt={item.title} /></td>
                        <td className='align-middle'>{item.title}</td>
                        <td className='align-middle'>{item.description}</td>
                        <td className='align-middle'><span className='badge bg-success'>{item.status}</span></td>
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
          !loader && data && data.length > 0 && pageCount > 1 ?
            <ReactPaginate
              previousLabel={<i className="fa-solid fa-chevron-left"></i>}
              nextLabel={<i className="fa-solid fa-chevron-right"></i>}
              forcePage={currentPage}
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
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              breakLabel="..."
            />
            : null
        }
      </div>


      {/* Modal Section */}
      <div className="modal fade" data-bs-backdrop="static" id="addProductModal" tabIndex="-1" role="dialog" aria-labelledby="addProductModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Add Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
                <div className='image-container'>
                  <label htmlFor="fileInput">
                    <img src={preview} alt="Image Preview" width={150} height={150} style={{ cursor: 'pointer' }} />
                  </label>

                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="title" placeholder="" value={title} onChange={(event) => setTitle(event.target.value)} />
                  <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="price" placeholder="" value={price} onChange={(event) => setPrice(event.target.value)} />
                  <label htmlFor="price">Price</label>
                </div>

                <div className="form-floating">
                  <textarea className="form-control" id="description" style={{ height: '150px' }} placeholder="" value={description} onChange={(event) => setDescription(event.target.value)} />
                  <label htmlFor="description">Description</label>
                </div>
                <p className='error'>{error}</p>
              </form>
            </div>
            <div className="footer">
              <button type="button" className="submit-btn" onClick={addProduct} disabled={submitLoader}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default ManageProducts