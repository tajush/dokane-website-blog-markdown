import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const toastMap = {
    warning: null,
    success: null,
    info: null,
    error: null,
}
const RaiseToast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </div>
    );
}

const success = (title, message = '') => {
    if (!toast.isActive(toastMap.success)) {
        toastMap.success = toast.success(title, {
            id: title
        });
    }
};

const error = (title = 'Something went wrong!', message = '') => {
    if (!toast.isActive(toastMap.error)) {
        toastMap.error = toast.error(title, {
            id: title
        });
    }

};

const warn = (title, message = '') => {
    if (!toast.isActive(toastMap.warning)) {
        toastMap.warning = toast.warn(title, {
            id: title
        });
    }
};

const info = (title, message = '') => {
    if (!toast.isActive(toastMap.info)) {
        toastMap.info = toast.info(title, {
            id: title
        });
    }
};


const AlertService = {
    success, error, warn, info, RaiseToast
};

export default AlertService;
