

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-150 animate-gradient">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <a
        href="/"
        className="text-indigo-600 hover:text-indigo
        -800 font-semibold text-lg"
      >
        Go Back to Home
      </a>
    </div>
  );
}
