import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">UrbanBazarrr</h2>
          <p className="text-sm text-gray-400">
            A new trend of shopping. Discover the latest fashion and unbeatable
            deals with us.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: support@urbanbazarrr.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} UrbanBazarrr. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
