import React, { useState, useEffect } from "react";
import "./Popup.css"

export default function Popup({ show, onClose, children }) {
   // Disable scroll when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);


  if (!show) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="popup">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </>
  );
}
