function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 bg-gray-200 px-4">
      © {new Date().getFullYear()} zeroID. All rights reserved.
      <span className="block mt-2">
        Team SyntaxSurfers
      </span>
    </footer>
  );
}

export default Footer;