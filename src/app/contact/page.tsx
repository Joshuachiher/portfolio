"use client";

import { useState } from "react";
import { Mail, Phone, Github } from "lucide-react"; // install lucide-react jika belum

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Kontak Saya</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Form Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-8">
          {submitted ? (
            <div className="text-green-600 dark:text-green-400 text-center font-semibold">
              Terima kasih! Pesan Anda telah dikirim.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Kirim
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Info Kontak</h2>

          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <a
              href="mailto:joshua@example.com"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              joshuachiher@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <a
              href="tel:+6281234567890"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              +62 812-9074-4206
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <a
              href="https://github.com/Joshuachiher/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              github.com/joshuachiher
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
