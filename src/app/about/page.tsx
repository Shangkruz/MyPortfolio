export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-900 px-6">
      {/* Introduction */}
      <h1 className="mt-20 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        Hi, I'm <span className="text-blue-500">Sean</span>
      </h1>

      <p className="mt-4 text-lg text-white max-w-2xl text-center">
        A web developer focusing on Front-End but also taking on challenges as a Back-End, Full-Stack, and Game Developer.
      </p>

      {/* My Skills Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <div className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-6">
          {[
            { name: "HTML", src: "/icons/html.svg" },
            { name: "CSS", src: "/icons/css.svg" },
            { name: "JavaScript", src: "/icons/js.svg" },
            { name: "React", src: "/icons/react.svg" },
            { name: "Next.js", src: "next.svg" },
            { name: "TailwindCSS", src: "/icons/tailwind.svg" },
            { name: "PHP", src: "/icons/php.svg" },
            { name: "Laravel", src: "/icons/laravel.svg" },
            { name: "MySQL", src: "/icons/mysql.svg" },
            { name: "GitHub", src: "/icons/github.svg" },
            { name: "Typing Speed", src: "/icons/wpm.svg" },
            { name: "Unity", src: "/icons/unity.svg" },
            { name: "C#", src: "/icons/csharp.svg" }
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-md transition-all duration-200 hover:bg-gray-100"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 transition-all duration-200 hover:brightness-75"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

     {/* Educational Background Section */}
<div className="mt-16 w-full max-w-4xl">
  <h2 className="text-3xl font-bold text-white">Educational Background</h2>
  <div className="mt-6 space-y-6">
    {[
      {
        level: "Laboratory High School",
        school: "Polytechnic University of the Philippines (PUP)",
        duration: "2015 - 2019",
        descriptions: [
          "Completed fundamental skills in Document Management through a 150-hour On-the-Job Training, focusing on office processes and tools.",
          "Gained proficiency in Microsoft Office applications, including Word, Excel, and PowerPoint.",
          "Learned HTML and CSS for basic web design through ICT subjects.",
        ],
      },
      {
        level: "Senior High School",
        school: "Polytechnic University of the Philippines (PUP)",
        duration: "2019 - 2021",
        descriptions: [
          "Specialized in the TVL-ICT Strand, focusing on programming languages such as C, C++, C#, and Java.",
          "Acquired skills in hardware assembly, troubleshooting, and problem resolution for computer systems.",
        ],
      },
      {
        level: "Bachelor of Science in Information Technology",
        school: "Polytechnic University of the Philippines (PUP)",
        duration: "2021 - Present",
        descriptions: [
          "Pursuing a degree in Information Technology, building a strong foundation in programming languages, databases, and frameworks (C, C++, C#, Java, React, Next.js, PHP, Laravel, MySQL).",
          "Gained knowledge in Python for Data Science, with applications in AI Integration and Algorithms.",
          "Completed a capstone project focusing on web development using PHP, MySQL, Laravel, and XAMPP, designing and implementing a website for a PUP office.",
        ],
      },
    ].map((edu, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">{edu.level}</h3>
        <p className="text-gray-700">{edu.school}</p>
        <p className="text-sm text-gray-500">{edu.duration}</p>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          {edu.descriptions.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>


      {/* Work Experience Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              position: "On-The-Job Trainee",
              company: "Global Venture - Promotion & Marketing Services Corp.",
              duration: "November 21, 2018 - February 9, 2019",
              responsibilities: [
                "Experienced encoding of handwritten checks and inventories.",
                "Completed 150 required hours of training.",
                "Organized and sorted office files and documents.",
              ],
            },
          ].map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500">{job.duration}</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-6">
          {[
            {
              position: "On-The-Job Trainee",
              company: "Metacoresoft(formerly known as 1Devs)",
              duration: "March 3, 2025 - June 6, 2025",
              responsibilities: [
                "Attended tutorial session in game development from our CTO/President.",
                "Completed 500 required hours of training.",
                "Experienced developing a game from scratch.",
              ],
            },
          ].map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500">{job.duration}</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* View My Projects Button */}
      <div className="mt-10 mb-15">
        <a
          href="/projects"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}
