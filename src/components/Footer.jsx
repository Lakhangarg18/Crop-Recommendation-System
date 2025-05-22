import React from "react";

function Footer() {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-green-800 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Logo and Quick Links */}
        <div className="lg:flex lg:justify-between lg:space-x-12">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-3xl font-semibold text-white">FasalGuru</h3>
            <p className="text-lg text-gray-300 mt-2">
              Your one-stop solution for all your farming needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/4 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="text-gray-300">+91 1234567890</p>
              </li>
              <li>
                <a
                  href="mailto:yash@gmail.com"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  yash@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section: Copyright and Social Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p className="text-gray-300 text-sm">
            © 2021 FasalGuru. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
