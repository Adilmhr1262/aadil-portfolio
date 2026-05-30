import Image from "next/image";

const services = [
  {
    title: "Virtual Assistance",
    description:
      "Daily admin support, calendar coordination, inbox handling, research, and organized follow-ups for busy teams.",
  },
  {
    title: "Customer Support",
    description:
      "Professional chat, email, and client communication focused on clear answers and a calm customer experience.",
  },
  {
    title: "Reporting & Data",
    description:
      "Clean spreadsheets, simple dashboards, research summaries, and business updates that are easy to understand.",
  },
  {
    title: "HR & Remote Team Support",
    description:
      "Candidate coordination, interview scheduling, onboarding support, and team communication assistance.",
  },
];

const skills = [
  "Virtual Assistance",
  "Customer Support",
  "Data Analysis",
  "Admin Support",
  "Client Management",
  "Reporting",
  "Remote Communication",
  "HR Coordination",
  "Meta Ads Basics",
  "Google Ads Basics",
  "Shopify Basics",
  "Research",
];

const whyHire = [
  {
    title: "Reliable communication",
    text: "Clear updates, professional follow-up, and a calm style that helps remote teams stay aligned.",
  },
  {
    title: "Patient with customers",
    text: "Comfortable handling questions, concerns, and support conversations with patience and respect.",
  },
  {
    title: "Good with reports",
    text: "Able to organize information, prepare summaries, and make day-to-day business data easier to use.",
  },
];

const experience = [
  {
    role: "Customer Support Representative",
    company: "LIBT Admission Center",
    text: "Supported admission-related communication, helped customers with questions, and maintained professional follow-up.",
  },
  {
    role: "HR Assistant",
    company: "BA Marketing",
    text: "Worked with a German company on HR support, coordination, candidate communication, and remote team assistance.",
  },
  {
    role: "Data Science",
    company: "Sky Tech Solutions",
    text: "Worked on data-related tasks, reporting, research, and organizing information for clearer business decisions.",
  },
];

const tools = [
  "Google Sheets",
  "Microsoft Excel",
  "Gmail",
  "Slack",
  "Zoom",
  "Shopify",
  "Meta Ads",
  "Google Ads",
  "Canva",
  "Notion",
  "Trello",
  "ChatGPT",
];

const work = [
  {
    title: "Data Analysis",
    text: "Prepared reports, organized business data, and supported research tasks for clearer decision-making.",
  },
  {
    title: "Customer Support",
    text: "Handled customer communication, resolved client concerns, and maintained professional follow-up.",
  },
  {
    title: "HR Support",
    text: "Assisted with candidate coordination, interview scheduling, and remote team communication.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#15211f]">
      <nav className="animate-fade-in mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aadil Mahar Logo"
            width={160}
            height={80}
            className="h-14 w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-4 text-sm font-semibold text-[#42514d] sm:gap-7">
          <a className="transition hover:text-[#0f766e]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#0f766e]" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-[#0f766e]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#0f766e]" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <div>
          <div className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-[#cbd8d2] bg-white/70 px-4 py-2 text-sm font-bold text-[#0f766e] shadow-sm">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#14b8a6]" />
            Available for Remote Work
          </div>

          <h1 className="animate-fade-up delay-100 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#15211f] sm:text-6xl lg:text-7xl">
            Reliable remote support for teams that need things handled.
          </h1>

          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-8 text-[#51615d]">
            I&apos;m Aadil Ali Mahar, a Computer Science graduate from Pakistan
            helping businesses with virtual assistance, customer support,
            reporting, admin work, and client coordination.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/923240879719"
              className="interactive-lift rounded-full bg-[#15211f] px-7 py-3 text-center text-sm font-bold text-white shadow-xl shadow-[#15211f]/15 hover:bg-[#0f766e]"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="interactive-lift rounded-full border border-[#aebbb5] bg-white/70 px-7 py-3 text-center text-sm font-bold text-[#15211f] hover:border-[#0f766e] hover:text-[#0f766e]"
            >
              View Resume
            </a>
          </div>

          <div className="animate-fade-up delay-400 mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {["Admin", "Support", "Reporting"].map((item, index) => (
              <div
                key={item}
                className={`interactive-lift rounded-2xl border border-[#dce4df] bg-white/65 px-4 py-4 shadow-sm ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
                }`}
              >
                <p className="text-sm font-black text-[#15211f]">{item}</p>
                <p className="mt-1 text-xs font-semibold text-[#71817c]">
                  Remote ready
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-300 relative">
          <div className="animate-float-soft absolute -left-5 top-8 z-20 hidden rounded-3xl bg-[#cdece6] px-5 py-4 text-sm font-bold text-[#0f5f58] shadow-lg lg:block">
            Fast learner
          </div>
          <div className="animate-float-soft absolute -right-3 bottom-10 z-20 hidden rounded-3xl bg-[#15211f] px-5 py-4 text-sm font-bold text-white shadow-lg [animation-delay:900ms] lg:block">
            Clear communication
          </div>
          <div className="animate-float-soft relative z-10 mx-auto max-w-[390px] overflow-hidden rounded-[2rem] border border-white bg-[#15211f] p-3 shadow-2xl shadow-[#15211f]/25">
            <Image
              src="/profile.jpg"
              alt="Aadil Ali Mahar"
              width={780}
              height={1000}
              className="h-[500px] w-full rounded-[1.45rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="reveal-card grid grid-cols-1 gap-5 rounded-[2rem] border border-[#dfe7e2] bg-white/75 p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Why Hire Me
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Dependable support with a calm, organized working style.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {whyHire.map((item, index) => (
              <div
                key={item.title}
                className={`reveal-card interactive-lift rounded-3xl border border-[#e2e9e5] bg-[#f7f5ef] p-5 ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
                }`}
              >
                <h3 className="text-lg font-black text-[#15211f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#596965]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#15211f] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-card flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80d8cf]">
                Services
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Support that keeps daily work moving.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#bfcbc8]">
              I focus on dependable execution, clean communication, and simple
              systems your team can trust.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`reveal-card interactive-lift shine-panel rounded-3xl border border-white/10 bg-white/[0.06] p-6 ${
                  index === 1
                    ? "delay-100"
                    : index === 2
                      ? "delay-200"
                      : index === 3
                        ? "delay-300"
                        : ""
                }`}
              >
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#bfcbc8]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="reveal-card">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Experience
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Real roles across support, HR, and data.
            </h2>
            <p className="mt-5 leading-8 text-[#596965]">
              My background combines customer communication, HR coordination,
              and reporting work, which makes me useful for remote teams that
              need practical day-to-day support.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-4 before:absolute before:left-5 before:top-5 before:hidden before:h-[calc(100%-40px)] before:w-px before:bg-[#cfdad4] sm:before:block">
            {experience.map((item, index) => (
              <article
                key={item.role}
                className={`reveal-card interactive-lift relative rounded-3xl border border-[#dfe5e1] bg-white p-6 pl-14 shadow-sm ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
                }`}
              >
                <span className="absolute left-4 top-7 flex h-3 w-3 rounded-full bg-[#0f766e] ring-8 ring-[#e4f5f1]" />
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0f766e]">
                  {item.company}
                </p>
                <h3 className="mt-2 text-xl font-black">{item.role}</h3>
                <p className="mt-3 leading-7 text-[#596965]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="reveal-card">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Practical help across support, data, and operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {work.map((item, index) => (
              <article
                key={item.title}
                className={`reveal-card interactive-lift rounded-3xl border border-[#dfe5e1] bg-white p-6 shadow-sm ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e4f5f1] text-sm font-black text-[#0f766e]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[#596965]">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="reveal-card">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Strengths
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Skills I bring to remote teams.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`reveal-card interactive-lift rounded-full border border-[#d7e0dc] bg-[#f7f5ef] px-5 py-3 text-sm font-bold text-[#42514d] ${
                    index % 4 === 1
                      ? "delay-100"
                      : index % 4 === 2
                        ? "delay-200"
                        : index % 4 === 3
                          ? "delay-300"
                          : ""
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-card delay-100 rounded-[2rem] bg-[#f7f5ef] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Tools I Use
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Comfortable with common remote-work tools.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className={`reveal-card interactive-lift rounded-2xl border border-[#d7e0dc] bg-white px-4 py-3 text-center text-sm font-bold text-[#42514d] ${
                    index % 3 === 1
                      ? "delay-100"
                      : index % 3 === 2
                        ? "delay-200"
                        : ""
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="reveal-card shine-panel mx-auto grid max-w-7xl grid-cols-1 gap-8 rounded-[2rem] bg-[#15211f] p-8 text-white shadow-2xl shadow-[#15211f]/20 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80d8cf]">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-[#bfcbc8]">
              Looking for a reliable remote assistant, customer support person,
              or admin support team member? I&apos;m ready to help.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/923240879719"
                className="interactive-lift rounded-full bg-[#80d8cf] px-7 py-3 text-center text-sm font-black text-[#10201d] hover:bg-white"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:adilmahar72@gmail.com"
                className="interactive-lift rounded-full border border-white/20 px-7 py-3 text-center text-sm font-black text-white hover:bg-white/10"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <div className="space-y-4 text-sm">
              <p>
                <span className="block font-bold text-[#80d8cf]">Email</span>
                adilmahar72@gmail.com
              </p>
              <p>
                <span className="block font-bold text-[#80d8cf]">Phone</span>
                +92 324 0879719
              </p>
              <p>
                <span className="block font-bold text-[#80d8cf]">Location</span>
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
