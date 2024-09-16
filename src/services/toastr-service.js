import { toast } from 'react-toastify';

const toastrService = {
    success: (message) => {
        toast.success(message);
    },
    error: (message) => {
        toast.error(message);
    },
    info: (message) => {
        toast.info(message);
    },
    warn: (message) => {
        toast.warn(message);
    },
}

export default toastrService