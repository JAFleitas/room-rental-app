import React from "react"
import { toast, cssTransition } from "react-toastify"
import "animate.css/animate.min.css"

import "react-toastify/dist/ReactToastify.css"

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
})

export const ErrorAlert = (message) =>{

    toast.error(`${message}`, {
        autoClose: 5000,
        transition: bounce,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        maxToast:3,
    })
    toast.clearWaitingQueue(); 
}
export const WarningAlert = (message) =>{

    toast.warn(`${message}`, {
        autoClose: 5000,
        transition: bounce,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        maxToast:3,
    })
    toast.clearWaitingQueue(); 
}
export const SuccessAlert = (message) =>{

    toast.success(`${message}`, {
        autoClose: 5000,
        transition: bounce,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        maxToast:3,
    })
    toast.clearWaitingQueue(); 
}