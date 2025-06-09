export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Left side - Copyright */}
          <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
  
          {/* Right side - Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              LinkedIn
            </a>
            <a href="mailto:your-email@example.com" className="hover:text-blue-400 transition-all">
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  