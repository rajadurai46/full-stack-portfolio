import React from "react";

export default function ResumeButton() {
  const handleDownload = () => {
    window.location.href = "https://full-stack-portfolio-3zve.onrender.com/api/resume";
  };

  return (
    <button 
      onClick={handleDownload} 
      className="btn btn-outline-success"
    >
      Download Resume
    </button>
  );
}
