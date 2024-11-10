import WHNavbar from "@/components/common/WHNavbar";
import React from "react";

const Text: React.FC = () => {
  return (
    <div className="relative lg:pl-32 md:pr-32 lg:pr-0 md:px-16 sm:px-8 px-4 pb-14">
      <WHNavbar dark />
      <img
        className="absolute top-0 left-0 -z-20"
        src="Vector-blue.png sm:hidden"
        alt=""
      />
      <img
        className="absolute top-0 right-0 -z-20"
        src="Vector (1)gk.png"
        alt=""
      />
      <div className="  md:pt-28 pt-28  md:pb-4 text-[#626687]   md:pr-28">
        <h1 className="text-3xl sm:text-3xl font-medium  mb-6">
          Privacy policy
        </h1>

        <p className="mb-2 ">
          1. Introduction <br />
          BookMyWarehouse ("we," "our," or "us") respects your privacy and is
          committed to protecting it. This Privacy Policy explains <br />
          how we collect, use, and share your information.
        </p>

        <p className="mb-2">
          2. Information We Collect
          <br />
          <ul className="list-disc pl-5">
            <li>
              Personal Information: Name, email, phone number, and payment
              information.
            </li>
            <li>
              Usage Data: Details about your interactions with our Platform,
              such as pages visited and features used.
            </li>
            <li>
              Device Information: Information about the device used to access
              the Platform.
            </li>
          </ul>
        </p>

        <p className="mb-2">
          3. How We Use Your Information
          <br />
          We use your information to:
          <br />
          <ul className="list-disc pl-5">
            <li>Facilitate bookings and payments.</li>
            <li>
              Communicate with you regarding your account, bookings, and
              customer support.
            </li>
            <li>Improve the functionality and security of our Platform.</li>
          </ul>
        </p>

        <p className="mb-2">
          4. Data Sharing and Disclosure
          <br />
          We do not sell your personal data. We may share information with:
          <br />
          <ul className="list-disc pl-5">
            <li>Warehouse Owners: For booking and rental purposes.</li>
            <li>
              Service Providers: To assist with payment processing and other
              operational services.
            </li>
            <li>
              Legal Authorities: As required by law or to protect our rights.
            </li>
          </ul>
        </p>

        <p className="mb-4">
          5. Data Security
          <br /> We take appropriate measures to secure your personal
          information but cannot guarantee absolute security.
        </p>

        <p className="mb-4">
          6. Your Rights <br />
          You may access, correct, or delete your information by contacting us
          at [Insert Contact Email].
        </p>

        <p className="mb-4">
          7. Policy Changes <br />
          We may update this Privacy Policy periodically. Changes will be posted
          on our Platform with an updated effective date.
        </p>

        <p className="mb-4">
          8. Contact Us <br />
          For questions regarding this Privacy Policy, contact us at [Insert
          Contact Email]
        </p>
      </div>
    </div>
  );
};

export default Text;
