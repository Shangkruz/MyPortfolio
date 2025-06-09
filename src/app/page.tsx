export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen  text-gray-900 px-6">
      {/* Header Text */}
      <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        Welcome to <span className="text-blue-500">My Portfolio</span>
      </h1>
      
      {/* Subtext */}
      <p className="mt-4 text-lg text-white max-w-2xl text-center">
      A 4th year IT student with a goal-oriented mindset. I take pride in my ability to approach tasks
      with focus, determination, and a commitment.
      </p>
      
      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="/about"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Learn More
        </a>
        <a
          href="/projects"
          className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
