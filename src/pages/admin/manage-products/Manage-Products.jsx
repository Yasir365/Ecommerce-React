import './manage-products.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../../components/loader/Loader';
import defaultImage from '../../../assets/default_no_image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import apiService from '../../../services/api-service';
import swalToastr from '../../../services/toastr-service';
import Swal from 'sweetalert2';

// Constants
const ITEMS_PER_PAGE = 10;

// Helper Functions
const getInitialFormData = () => ({
  title: '',
  price: 0,
  description: '',
  images: [],
  preview: '', // For thumbnail preview
  imagePreviews: [] // For other images previews
});

const ManageProducts = () => {
  // State variables
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState(getInitialFormData());
  const [modalState, setModalState] = useState('add');
  const [submitLoader, setSubmitLoader] = useState(false);
  const [error, setError] = useState('');

  // Pagination Calculations
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);

  // Fetch products on component mount and when page or search changes
  useEffect(() => {
    getProducts();
  }, [currentPage, search]);

  const getProducts = async () => {
    setLoader(true);
    const payload = {
      currentPage: currentPage + 1,
      itemsPerPage: ITEMS_PER_PAGE,
      search,
    };
    try {
      const resp = await apiService.getProducts(payload);
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

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (name === 'thumbnail') {
          setFormData({ ...formData, thumbnail: file, preview: reader.result });
        } else {
          const imageIndex = parseInt(name.replace('image', ''), 10) - 1; // Get index from image1, image2, etc.
          const updatedImages = [...formData.images];
          const updatedImagePreviews = [...formData.imagePreviews];

          updatedImages[imageIndex] = file;
          updatedImagePreviews[imageIndex] = reader.result;

          setFormData({
            ...formData,
            images: updatedImages,
            imagePreviews: updatedImagePreviews,
          });
        }
      };

      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, price, description, thumbnail, images } = formData;

    // Check for required fields
    if (!title || !price || !description || (!thumbnail && modalState === 'add')) {
      setError('All fields are required');
      return;
    }

    setSubmitLoader(true);
    try {
      const payload = new FormData();
      payload.append('title', title);
      payload.append('price', price);
      payload.append('description', description);

      if (thumbnail) payload.append('thumbnail', thumbnail);
      images.forEach((image, index) => {
        if (image) payload.append(`image${index + 1}`, image);
      });

      if (modalState === 'edit') {
        payload.append('productId', formData._id);
      }

      const response =
        modalState === 'add'
          ? await apiService.addProduct(payload)
          : await apiService.updateProduct(payload);

      if (response.data.success) {
        swalToastr('success', `Product ${modalState === 'add' ? 'Added' : 'Updated'} Successfully!`);
        getProducts();
        resetForm();
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error submitting form: ' + error.message);
    } finally {
      setSubmitLoader(false);
    }
  };


  // Edit product
  const editProduct = (product) => {
    setFormData({
      ...product,
      preview: `http://localhost:8080/${product.thumbnail}`, // Set the thumbnail preview
      images: product.images || [], // Ensure images array is set
      imagePreviews: product.images.map((img, index) => {
        const key = Object.keys(img)[0]; // Get the image key (image1, image2, etc.)
        return `http://localhost:8080/uploads/${img[key]}`;
      }) // Set previews for images
    });
    setModalState('edit');
  };

  // Reset form and close modal
  const resetForm = () => {
    setFormData(getInitialFormData());
    setError('');
    document.getElementById('closeAddProductModalBtn')?.click();
  };

  // Delete product
  const deleteProduct = async (id) => {
    Swal.fire({
      title: 'Are you sure!',
      text: 'You want to delete this product?',
      icon: 'warning',
      confirmButtonText: 'OK',
      cancelButtonText: 'No',
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await apiService.deleteProduct(id);
          if (response.data.success) {
            swalToastr('success', 'Product Deleted Successfully!');
            getProducts();
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
        <button
          className='btn add-product'
          data-bs-toggle='modal'
          data-bs-target='#addProductModal'
          onClick={() => setModalState('add')}
        >
          Add Product
        </button>
      </div>

      <ProductTable
        data={data}
        loader={loader}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />

      {!loader && data.length > 0 && pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={changePage}
        />
      )}

      <ProductModal
        formData={formData}
        error={error}
        modalState={modalState}
        submitLoader={submitLoader}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const ProductTable = ({ data, loader, currentPage, itemsPerPage, editProduct, deleteProduct }) => (
  <div className='products mb-3'>
    <div className='rounded h-100'>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Image</th>
              <th scope='col'>Title</th>
              <th scope='col' style={{ width: '40%' }}>Description</th>
              <th scope='col'>Status</th>
              <th scope='col'>Price</th>
              <th scope='col'>Rating</th>
              <th scope='col' className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope='row' className='align-middle'>
                  {index + 1 + currentPage * itemsPerPage}
                </th>
                <td className='align-middle'>
                  <LazyLoadImage
                    src={item.thumbnail ? `http://localhost:8080/${item.thumbnail}` : defaultImage}
                    alt='Image'
                  />
                </td>
                <td className='align-middle'>{item.title}</td>
                <td className='align-middle'>{item.description}</td>
                <td className='align-middle'>
                  <span className='badge bg-success'>{item.status}</span>
                </td>
                <td className='align-middle'>{item.price}</td>
                <td className='align-middle'>{item.rating}</td>
                <td className='align-middle'>
                  <div className='d-flex justify-content-center'>
                    <button onClick={() => editProduct(item)} data-bs-toggle='modal' data-bs-target='#addProductModal' >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </button>
                    <button className='ms-2' onClick={() => deleteProduct(item._id)}>
                      <i className='fa-solid fa-trash'></i>
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

const ProductModal = ({ formData, error, modalState, submitLoader, handleInputChange, handleImageChange, handleSubmit, }) => (
  <div className='modal fade' data-bs-backdrop='static' id='addProductModal' tabIndex='-1' role='dialog' aria-labelledby='addProductModalTitle' aria-hidden='true' >
    <div className='modal-dialog modal-dialog-centered modal-lg' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>
            {modalState === 'add' ? 'Add' : 'Edit'} Product
          </h5>
          <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' id='closeAddProductModalBtn' ></button>
        </div>
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            {/* Thumbnail Upload */}
            <input
              type='file'
              id='thumbnailFile'
              style={{ display: 'none' }}
              name='thumbnail'
              onChange={handleImageChange}
            />
            <div className='image-container'>
              <label htmlFor='thumbnailFile'>
                <img
                  src={formData.preview || defaultImage}
                  alt='Thumbnail Preview'
                  width={150}
                  height={150}
                  style={{ cursor: 'pointer' }}
                />
                Thumbnail
              </label>
            </div>

            {/* Additional Images Upload */}
            <div className='d-flex justify-content-between'>
              {[1, 2, 3].map((index) => (
                <div key={index} className='image-container'>
                  <input
                    type='file'
                    id={`image${index}`}
                    style={{ display: 'none' }}
                    name={`image${index}`}
                    onChange={handleImageChange}
                  />
                  <label htmlFor={`image${index}`}>
                    <img
                      src={formData.imagePreviews[index - 1] || defaultImage}
                      alt={`Image ${index} Preview`}
                      width={150}
                      height={150}
                      style={{ cursor: 'pointer' }}
                    />
                    Image {index}
                  </label>
                </div>
              ))}
            </div>

            {/* Other Form Fields */}
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder=''
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <label htmlFor='title'>Title</label>
            </div>

            <div className='form-floating mb-3'>
              <input
                type='number'
                className='form-control'
                id='price'
                placeholder=''
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                required
              />
              <label htmlFor='price'>Price</label>
            </div>

            <div className='form-floating'>
              <textarea
                className='form-control'
                id='description'
                style={{ height: '150px' }}
                placeholder=''
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                required
              />
              <label htmlFor='description'>Description</label>
            </div>
            {error && <p className='error'>{error}</p>}
          </form>
        </div>
        <div className='footer'>
          <button type='button' className='submit-btn' onClick={handleSubmit} disabled={submitLoader} >
            {modalState === 'add' ? 'Save' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ManageProducts;
