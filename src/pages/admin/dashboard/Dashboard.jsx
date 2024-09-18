
import './dashboard.scss';
import userImage from '../../../assets/member/1.jpg';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);


const Dashboard = () => {
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Orders',
                data: [50, 30, 55, 65, 60, 80, 95,50, 30, 55, 65, 60],
                backgroundColor: 'rgba(0, 156, 255, 0.7)',
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Users',
                data: [15, 30, 55, 45, 70, 65,35, 30, 55, 45, 70, 65, 85],
                borderColor: 'rgba(0, 156, 255, 0.5)',
                fill: true,
                backgroundColor: 'rgba(0, 156, 255, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                // position: 'top',
            },
            title: {
                display: false,
            },
        },
    };


    
    return (
        <>
            {/* Sale & Revenue Start */}
            <div className="container-fluid p-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa-solid fa-list fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Total Orders</p>
                                <h6 className="mb-0">240</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa-solid fa-clipboard-check fa-3x"></i>
                            <div className="ms-3">
                                <p className="mb-2 title">Completed Orders</p>
                                <h6 className="mb-0">230</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa-regular fa-hourglass-half fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Pending Orders</p>
                                <h6 className="mb-0">10</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-users fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Total Users</p>
                                <h6 className="mb-0">1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sale & Revenue End */}


            {/* Sales Chart Start */}
            <div className="container-fluid p-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="widget charts text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Users</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>
                            <Line data={lineData} options={options} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="widget charts text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Salse &amp; Revenue</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>
                            <Bar data={barData} options={options} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Sales Chart End */}


            {/* Recent Sales Start */}
            <div className="container-fluid p-4">
                <div className="widget text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0 title">Recent Salse</h6>
                        <a href="" className='showall'>Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <input className="form-check-input" type="checkbox" />
                                    </th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                                <tr>
                                    <td> <input className="form-check-input" type="checkbox" /> </td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td> <a className="btn btn-sm btn-primary" href=""> Detail </a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Recent Sales End */}


            {/* Widgets Start */}
            <div className="container-fluid p-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 widget rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0 title">Messages</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src={userImage} alt="" style={{ width: 40, height: 40 }} />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 widget rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Notification</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src={userImage} alt="" style={{ width: 40, height: 40 }} />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 widget rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Reviews</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src={userImage} alt="" style={{ width: 40, height: 40 }} />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src={userImage}
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Widgets End */}
        </>
    );
};

export default Dashboard;