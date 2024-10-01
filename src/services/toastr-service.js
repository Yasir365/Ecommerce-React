import Swal from 'sweetalert2';

const swalToastr = (icon, title) => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
    });
};

export default swalToastr;
