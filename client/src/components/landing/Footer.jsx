function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-white bg-[#1E1E2F] px-4">
      © {new Date().getFullYear()} zeroID. All rights reserved.
      <span className="block mt-2 text-indigo-600 font-bold">
        Team SyntaxSurfers
      </span>
      <img src="/zeroIDDark.png" alt="logo" className="h-8 w-auto mx-auto mt-2" />
    </footer>
  );
}

export default Footer;