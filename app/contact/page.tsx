"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error("All fields are required");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      console.log("Form submission:", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-light rounded-lg p-8 md:p-10 margin-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">
              Contact Walk Tech
            </h2>
            <p className="text-gray-600 text-lg text-center mb-8">
              Have a project in mind or want to learn more about our services? Fill
              out the form below and we'll get back to you within 24 hours.
            </p>

            {status === "success" && (
              <div className="bg-green-100 border-green-400 rounded-lg p-6 text-center mb-6">
                <p className="text-green-800 font-medium">
                  Your message has been sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {status && status !== "success" && (
              <div className="bg-red-100 border-red-400 rounded-lg p-6 text-center mb-6">
                <p className="text-red-800 font-medium">
                  {status}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-navy-light border border-navy-light/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-navy-light border border-navy-light/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-navy-light border border-navy-light/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy resize-y"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full bg-navy text-white font-medium rounded-lg py-3 px-4 
                  transition-colors 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-navy/90"}
                `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}