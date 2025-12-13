import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const data = [
    {
      id: 1,
      role: "MERN Full Stack Developer-Internship",
      company: "Maticz Technologies Private Limited",
      year: "2025 – Present",
      desc: "Developing full-stack MERN applications, APIs, and UI components.",
    },
    {
      id: 2,
      role: "Java Developer-Trainee",
      company: "HulkHire",
      year: "2025",
      desc: "Built backend API integrations.",
    }  
  ];

  return (
    <div className="container py-5">
      <h2 className="h3 mb-4 text-center">Experience</h2>

      <div className="timeline border-start border-3 ps-4">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="mb-5 position-relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="timeline-icon bg-success text-white">
              <FaBriefcase />
            </div>

            {/* Card */}
            <div className="card shadow-sm border-0 timeline-card">
              <div className="card-body">
                <h4 className="fw-bold">{item.role}</h4>
                <h5 className="text-secondary">{item.company}</h5>
                <span className="badge bg-danger mb-2">{item.year}</span>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
