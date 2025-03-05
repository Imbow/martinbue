
import { useState } from "react";
import { ArrowLeft, Send, Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mail client with pre-filled email
    const mailtoLink = `mailto:martinbuep@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-200 mb-12">
          Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          <a href="mailto:martinbuep@gmail.com" className="bg-gray-600 p-2 sm:p-3 rounded-lg flex flex-col items-center text-center hover:bg-gray-500 transition-colors">
            <Mail className="h-6 w-6 mb-1 text-blue-500" />
            <h3 className="font-medium text-sm sm:text-base text-white">Email</h3>
            <p className="text-gray-300 text-xs sm:text-sm">martinbuep@gmail.com</p>
          </a>
          
          <a href="https://linkedin.com/in/martinbue" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 sm:p-3 rounded-lg flex flex-col items-center text-center hover:bg-gray-500 transition-colors">
            <Linkedin className="h-6 w-6 mb-1 text-blue-700" />
            <h3 className="font-medium text-sm sm:text-base text-white">LinkedIn</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Connect with me</p>
          </a>
          
          <a href="https://www.instagram.com/martinbue90/" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 sm:p-3 rounded-lg flex flex-col items-center text-center hover:bg-gray-500 transition-colors">
            <Instagram className="h-6 w-6 mb-1 text-pink-500" />
            <h3 className="font-medium text-sm sm:text-base text-white">Instagram</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Follow me</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
