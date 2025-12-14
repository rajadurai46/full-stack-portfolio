import React from "react";

export default function ResumeButton() {
  const handleDownload = () => {
    window.location.href = "/api/resume";
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
