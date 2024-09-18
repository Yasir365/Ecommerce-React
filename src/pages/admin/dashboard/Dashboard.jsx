
import './dashboard.scss';
import userImage from '../../../assets/member/1.jpg';


const Dashboard = () => {

    return (
        <>
            {/* Sale & Revenue Start */}
            <div className="container-fluid p-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-line fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Total Orders</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-bar fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Total Sale</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-area fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Today Revenue</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="widget rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-pie fa-3x" />
                            <div className="ms-3">
                                <p className="mb-2 title">Total Revenue</p>
                                <h6 className="mb-0">$1234</h6>
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
                        <div className="widget text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Worldwide Sales</h6>
                                <a href="" className='showall'>Show All</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="widget text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 title">Salse &amp; Revenue</h6>
                                <a href="" className='showall'>Show All</a>
                            </div>

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