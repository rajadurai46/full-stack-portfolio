import React from "react";

export default function ResumeButton() {
  const handleDownload = () => {
    window.location.href = "/api/resume";  // triggers file download
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
