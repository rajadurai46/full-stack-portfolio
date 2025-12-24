import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://full-stack-portfolio-lf6v.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting me. I'll get back to you soon.",
          timer: 2500,
          showConfirmButton: false,
        });

        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data?.message || "Something went wrong",
        });
        setStatus("error");
      }
    } catch{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later."
      });
      setStatus("error");
    }
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h3 mb-3 text-center">Contact Me</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="p-3 bg-white rounded-3">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:rj46jr@mail.com">rj46jr@mail.com</a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+918111073100">+91 81110 73100</a>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <form className="p-3 bg-white rounded-3" onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handle}
                  className="form-control"
                  type="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  className="form-control"
                  type="tel"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                className="btn btn-accent"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

