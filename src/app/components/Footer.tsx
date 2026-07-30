const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row">
        {/* Left */}
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Mini<span className="text-blue-600">CRM</span>
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            Manage your contacts efficiently.
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="transition-colors hover:text-blue-600"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="transition-colors hover:text-blue-600"
          >
            Contacts
          </a>

          <a
            href="#"
            className="transition-colors hover:text-blue-600"
          >
            Support
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p>
            © {currentYear} MiniCRM. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;