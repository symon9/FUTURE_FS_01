"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 p-8 rounded-xl border border-white/10 bg-black/20 shadow-lg backdrop-blur-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-white/5 p-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-white/5 p-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="bg-white/5 p-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
