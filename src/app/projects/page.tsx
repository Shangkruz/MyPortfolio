"use client"; // Required for Next.js App Router

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      description: "A portfolio made using React Next.js for practicing.",
      link: "https://myportfolio.com",
      images: ["/images/portfolio/portfolio1.png", "/images/portfolio/portfolio2.png", "/images/portfolio/portfolio3.png", "/images/portfolio/portfolio4.png", "/images/portfolio/portfolio5.png"],
    },
    {
      title: "Office of the Student Services (OSS) Website",
      description:
        "A capstone project focusing on web development using PHP, MySQL, Laravel, and XAMPP. The system allows student organizations to manage activity requests, approvals, and event postings.",
      link: "https://oss-act.com",
      images: [
        "/images/oss/oss1.png", "/images/oss/oss2.png", "/images/oss/oss3.png", "/images/oss/oss4.png", "/images/oss/oss5.png",
        "/images/oss/oss6.png", "/images/oss/oss7.png", "/images/oss/oss8.png", "/images/oss/oss9.png", "/images/oss/oss10.png",
        "/images/oss/oss11.png"
      ],
    },
    {
      title: "Rogue's Descent",
      description: "A game we developed during our internship",
      link: "https://RoguesDescent.site",
      images: [
        "/images/RD/rd_1.png",
        "/images/RD/rd_2.png",
        "/images/RD/rd_3.png",
        "/images/RD/rd_4.png",
        "/images/RD/rd_5.png",
        "/images/RD/rd_6.png",
        "/images/RD/rd_7.png",
        "/images/RD/rd_8.png",
        "/images/RD/rd_9.png",
        "/images/RD/rd_10.png",
        "/images/RD/rd_11.png",
        "/images/RD/rd_12.png",
        "/images/RD/rd_13.png",
        "/images/RD/rd_14.png"
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-gray-900 px-6">
      <h1 className="mt-20 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        My <span className="text-blue-500">Projects</span>
      </h1>

      <p className="mt-4 text-lg text-white max-w-2xl text-center">
        Here are some of the projects I’ve worked on.
      </p>

      <ul className="mt-6 w-full max-w-5xl space-y-6 text-lg text-gray-800">
        {projects.map((project, index) => (
          // CORRECTED LINE: No extra curly braces around ProjectCard
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </ul>

      <div className="mt-10 mb-15">
        <a
          href="/contact"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: { title: string; description: string; link: string; images: string[] }; index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
  };

  const isThirdProject = index === 2;

  const carouselWidth = isThirdProject ? 'w-[400px]' : 'w-[800px]';
  const carouselHeight = isThirdProject ? 'h-[800px]' : 'h-[400px]';

  return (
    <li className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all w-full flex flex-col space-y-4">
      <div>
        <strong className="text-2xl text-gray-900">{project.title}</strong>
        <p className="mt-2 text-gray-700">{project.description}</p>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className={`relative mx-auto ${carouselWidth} ${carouselHeight}`}>
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot`}
            className={`${carouselWidth} ${carouselHeight} object-cover rounded-lg transition-opacity duration-300`}
          />

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-semibold transition-all"
      >
        View Project &rarr;
      </a>
    </li>
  );
}