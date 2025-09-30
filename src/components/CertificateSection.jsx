import { ArrowRight, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Coming Soon - Web Development Certificate",
    description: "This is a placeholder for upcoming certificates. I am working on obtaining certifications in web development.",
    image: "/projects/placeholder-cert.png", // Ganti dengan gambar placeholder jika ada
    link: "#", // Link ke sertifikat jika ada
  },
  {
    id: 2,
    title: "Coming Soon - Mobile Development Certificate",
    description: "Placeholder for mobile development certifications. Stay tuned for updates!",
    image: "/projects/placeholder-cert.png",
    link: "#",
  },
  // Tambah lebih banyak jika sudah ada sertifikat
];

export const CertificateSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Certificates </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my certificates. I am actively pursuing more to enhance my skills in web and mobile development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/projects/certificate1.png"
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1"> {cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Cairdee"
          >
            Check My Achievements <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};