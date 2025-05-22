import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-32 px-6">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        About Us
      </h1>
      
      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <strong>FasalGuru</strong>, your go-to platform for everything related to agriculture and crops. Our mission is to
        provide farmers, gardeners, and agriculture enthusiasts with the most up-to-date, reliable, and practical information
        to help them thrive in their agricultural endeavors.
      </p>
      
      {/* Mission Statement */}
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        At FasalGuru, we are dedicated to providing valuable information on various crops, modern farming techniques, and sustainable practices.
        We aim to empower farmers and the agricultural community to grow healthy crops, improve yields, and make informed decisions
        for the betterment of agriculture and the environment.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Choose FasalGuru?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Comprehensive crop information with detailed growing conditions and care tips.</li>
        <li>Expert insights on modern farming techniques and sustainable practices.</li>
        <li>Real-time updates and weather information to help farmers make better decisions.</li>
        <li>Easy-to-navigate website with well-organized content and resources.</li>
      </ul>

      {/* Team Section */}
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Meet Our Team</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We are a group of passionate individuals with diverse backgrounds in agriculture, technology, and environmental science.
        Our team is committed to making agriculture more sustainable, efficient, and accessible for everyone.
      </p>

      {/* Contact Information */}
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions or would like to learn more about agriculture, feel free to contact us. We're here to help you!
      </p>
      <p className="text-lg text-gray-700">
        Email: <a href="mailto:info@agrinfo.com" className="text-green-500">info@agrinfo.com</a>
      </p>
    </div>
  );
};

export default About;
