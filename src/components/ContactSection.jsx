import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
      dateStyle: "medium",
      timeStyle: "short",
    }); // WIB time

    const serviceId = "service_o753aqw"; 
    const templateId = "template_p2b0roa"; 
    const userId = "yadwvJZFmBgXhEqnB"; 

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "jovancojojo268@gmail.com", // Email tujuan
      time: time, // Tambahkan waktu
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-8 max-w-md mx-auto px-4 md:pl-12">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-2">Email</h4>
                  <a
                    href="mailto:jovancojojo268@gmail.com"
                    className="text-foreground hover:text-primary transition-colors block"
                  >
                    jovancojojo268@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-2">Phone</h4>
                  <a
                    href="tel:+6282147296071"
                    className="text-foreground hover:text-primary transition-colors block"
                  >
                    +62 821 4729 6071
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-2">Location</h4>
                  <p className="text-foreground">
                    Kudus, Central Java, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/jovanco-nicholas-782921298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Twitch className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="John..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};