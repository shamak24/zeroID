export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-purple-400 via-pink-300 to-red-200 px-6 py-12">
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="text-center max-w-screen-sm w-full animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 drop-shadow-lg mb-4">
          404
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 px-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 text-base sm:text-lg font-medium"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
