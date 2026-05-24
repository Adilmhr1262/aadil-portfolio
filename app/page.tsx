export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#111827]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <img
  src="/logo.png"
  alt="Aadil Mahar Logo"
  className="h-32  w-auto"
/>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#work">Works</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 gap-10">
        <div>
          <div className="inline-block bg-black text-white px-5 py-3 rounded-md mb-8 font-semibold">
            Available for Remote Work
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Aadil Ali <br /> Mahar
          </h2>

          <h3 className="text-2xl mt-5 font-medium">
            Virtual Assistant & Customer Support Professional
          </h3>

          <p className="mt-6 text-gray-700 max-w-xl leading-8">
  I am a Computer Science graduate from Pakistan with experience in remote
  international roles across Data Science, Customer Service, and HR support.
  I help businesses with communication, reporting, admin work, and client
  management.
</p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://wa.me/923240879719"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
target="_blank"
              className="border border-black px-6 py-3 rounded-full font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-96 md:w-96 md:h-[500px] bg-black rounded-[40px] overflow-hidden shadow-2xl">
  <img
    src="/profile.jpg"
    alt="Aadil Ali Mahar"
    className="w-full h-full object-cover object-top"
  />
</div>
        </div>
      </section>

      {/* Skills */}
      <section id="resume" className="px-10 py-16 bg-white">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Virtual Assistance",
            "Customer Support",
            "Data Analysis",
            "Remote Team Support",
            "Communication",
            "Client Management",
            "Reporting",
            "Meta Ads Basics",
            "Google Ads Basics",
            "Shopify Basics",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#f4f1ea] px-5 py-3 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-10 py-16">
        <h2 className="text-4xl font-bold mb-8">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow">
            <h3 className="text-xl font-bold mb-3">Data Analysis</h3>
            <p className="text-gray-700">
              Worked on reporting, research, and data interpretation tasks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <h3 className="text-xl font-bold mb-3">Customer Support</h3>
            <p className="text-gray-700">
              Handled customer communication and resolved client issues
              professionally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <h3 className="text-xl font-bold mb-3">HR Support</h3>
            <p className="text-gray-700">
              Assisted with recruitment, candidate coordination, and remote team
              communication.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-16 bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>

        <p className="text-gray-300 mb-8 max-w-xl">
          Looking for a reliable remote assistant, customer support person, or
          admin support team member? Let&apos;s connect.
        </p>

        <div className="space-y-3 text-lg">
          <p>Email: adilmahar72@gmail.com</p>
          <p>Phone: +92 324 0879719</p>
          <p>Location: Pakistan</p>
        </div>
      </section>
    </main>
  );
}