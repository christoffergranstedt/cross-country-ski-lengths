import React from 'react'
import { ToastContainer } from 'react-toastify'

interface AlertContainerProps {

}

export const AlertContainer: React.FC<AlertContainerProps> = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}