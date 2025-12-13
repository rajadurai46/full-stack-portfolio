import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const data = [
    {
      id: 1,
      degree: "B.E. Automobile Engineering",
      school: "Mahendra Institute of Technology",
      year: "2017 – 2020",
      desc: "Studied automotive design and fuction engineering and Auto-CAD.",
    },
    {
      id: 2,
      degree: "Diploma in Automobile Engineering",
      school: "M.I.E.T Polytechnic College",
      year: "2015 – 2017",
      desc: "Studied auotmobile components manufacturing and its usage.",
    },
     {
      id: 3,
      degree: "HSC",
      school: "Tagore Vidyalayam Matriculation Higher Secondary School",
      year: "2014 – 2015",
      desc: "Completed HSC with a focus on mathematics and computer science.",
    },
     {
      id: 4,
      degree: "SSLC",
      school: "Tagore Vidyalayam Matriculation Higher Secondary School",
      year: "2012 – 2013",
      desc: "Completed SSLC with a focus on general science.",
    }
  ];

  return (
    <div className="container py-5">
     <h2 className="h3 mb-4 text-center">Education</h2>

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
            <div className="timeline-icon bg-primary text-white">
              <FaGraduationCap />
            </div>

            {/* Card */}
            <div className="card shadow-sm border-0 timeline-card">
              <div className="card-body">
                <h4 className="fw-bold">{item.degree}</h4>
                <h5 className="text-secondary">{item.school}</h5>
                <span className="badge bg-info mb-2">{item.year}</span>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
