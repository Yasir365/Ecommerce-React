import './manage-products.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../../components/loader/Loader';
import defaultImage from '../../../assets/skeleton.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ManageProducts = () => {

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
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col" className='text-center' >Actions</th>
                </tr>
              </thead>
              <tbody>

                {data && data.map((item, index) => (
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
                ))}
                {loader && <div className='loader-conatiner'><Loader /></div>}
                {!loader && data && data.length === 0 && <tr><td colSpan={7} className='text-center'>No Data Found</td></tr>}
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


      {/* Modal Section */}
      <div className="modal fade" data-bs-backdrop="static" id="addProductModal" tabIndex="-1" role="dialog" aria-labelledby="addProductModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="title" placeholder='' />
                  <label for="title">Title</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="price" placeholder=''/>
                  <label for="price">Price</label>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" id="description" style={{ height: '150px' }} placeholder=''></textarea>
                  <label for="description">Description</label>
                </div>
              </form>
            </div>
            <div className="footer">
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ManageProducts