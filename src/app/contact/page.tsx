export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-900 px-6">
      <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        Get in <span className="text-blue-500">Touch</span>
      </h1>

      <p className="mt-4 text-lg text-white max-w-2xl text-center">
        Feel free to reach out if you have any questions, opportunities, or just want to connect!
      </p>

      <div className="mt-6 flex flex-col space-y-4">
        <a
          href="mailto:seancruzby@gmail.com"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sean-alexander-cruz-937320256/"
          target="_blank"
          className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
