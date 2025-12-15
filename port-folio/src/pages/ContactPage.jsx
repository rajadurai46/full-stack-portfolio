import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        "https://full-stack-portfolio-vfzr.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (data) {
        alert("Message Sent Successfully!");
        setStatus("sent");
      } else {
        alert("Something went wrong");
        setStatus("error");
      }
    } catch {
      alert("An error occurred. Please try again later.");
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
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  className="form-control"
                  type="phone"
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
                onChange={submit}
              >
                Send
              </button>
              {status === "sending" && <span className="ms-2">Sending...</span>}
              {status === "sent" && (
                <span className="ms-2 text-success">
                  Sent! I'll reply soon.
                </span>
              )}
              {status === "error" && (
                <span className="ms-2 text-danger">
                  Error. Try again later.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
