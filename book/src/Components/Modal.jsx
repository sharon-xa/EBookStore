import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

export const Modal = ({
  children,
  open,
  onOk,
  onCancel,
  title,
  width,
  height,
  author,
  pages,
  genre,
  description,
  image,
  link,
  ...props
}) => {
  const modalStyle = {
    display: open ? "block" : "none",
  };
  const modelSize = {
    width: 400,
    height: 800,
  };

  let topTitle = "Modal-title";
  if (title) {
    topTitle = title;
  }

  return (
    <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white rounded-lg shadow-lg p-6">
        <div className="modal-header flex justify-between items-center border-b pb-4">
          <p className="text-lg font-semibold"></p>
          <span
            onClick={onCancel}
            className="close-button cursor-pointer text-gray-500 hover:text-gray-700">
            &#10006;
          </span>
        </div>
        <div className="modal-body max-h-60 overflow-y-auto">
          <div className="overflow-y-auto max-h-80"></div>
        </div>
        {children}
        <div className="modal-footer mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onOk}
          >
            OK
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
