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
      <div className="md:pt-28 pt-28 md:pb-4 text-[#626687] md:pr-28">
        <h1 className="text-3xl sm:text-3xl font-medium mb-6">
          Terms and Conditions
        </h1>

        <p className="mb-4">
          Welcome to Book My Warehouse! We want you to have a great experience
          using our platform, so we’ve laid out some simple terms and conditions
          to make sure everything runs smoothly. By accessing or using our
          website, you agree to these terms, so please read them carefully.
        </p>

        <p className="mb-4">
          1. <strong>Acceptance of Terms</strong>
          <br />
          By accessing or using the BookMyWarehouse platform, you agree to
          comply with and be bound by these terms and conditions. If you do not
          agree, you may not use the platform.
        </p>

        <p className="mb-4">
          2. <strong>Eligibility</strong>
          <br />
          You must be at least 18 years old and capable of entering into a
          legally binding agreement to use the platform.
        </p>

        <p className="mb-4">
          3. <strong>Platform Usage</strong>
          <br />
          The platform is designed for facilitating warehouse buying, selling,
          and related services. Users must provide accurate and complete
          information when listing or transacting on the platform. Unauthorized
          use of the platform for fraudulent, illegal, or unethical activities
          is strictly prohibited.
        </p>

        <p className="mb-4">
          4. <strong>Information Accuracy</strong>
          <br />
          While we strive to ensure the accuracy of all information,
          BookMyWarehouse does not guarantee the completeness or reliability of
          listings, market insights, or user-provided data. Users are advised to
          conduct their due diligence.
        </p>

        <p className="mb-4">
          5. <strong>Transaction Liability</strong>
          <br />
          BookMyWarehouse acts as a facilitator and is not directly involved in
          transactions. All agreements, payments, and disputes between buyers
          and sellers are their sole responsibility.
        </p>

        <p className="mb-4">
          6. <strong>Technology and Data Usage</strong>
          <br />
          Users must not misuse the platform's technology or interfere with its
          operations. Market insights and analytics provided by BookMyWarehouse
          are for informational purposes and should not be construed as
          professional advice.
        </p>

        <p className="mb-4">
          7. <strong>Intellectual Property</strong>
          <br />
          All content, technology, and branding on the platform are the
          exclusive property of BookMyWarehouse and protected by applicable
          laws. Unauthorized use is prohibited.
        </p>

        <p className="mb-4">
          8. <strong>Privacy and Data Security</strong>
          <br />
          BookMyWarehouse is committed to protecting user data. Refer to our
          Privacy Policy for detailed information. Users are responsible for
          maintaining the confidentiality of their login credentials.
        </p>

        <p className="mb-4">
          9. <strong>Payment and Refund Policy</strong>
          <br />
          Payments for platform services, subscriptions, or premium listings
          must be made through the authorized payment methods provided by
          BookMyWarehouse. Refunds will only be issued under specific
          conditions:
          <ul className="list-disc ml-6">
            <li>Service not rendered as promised due to platform error.</li>
            <li>
              Refund requests must be submitted within 7 days of the
              transaction.
            </li>
            <li>
              Refunds for premium listings or services are subject to the
              platform’s review and discretion.
            </li>
            <li>
              Refunds will not be provided for user error or negligence during
              transactions.
            </li>
            <li>
              Refunds will not be provided for situations beyond the platform's
              control, such as user disputes with third parties.
            </li>
          </ul>
        </p>

        <p className="mb-4">
          10. <strong>Limitation of Liability</strong>
          <br />
          BookMyWarehouse is not liable for any direct, indirect, incidental, or
          consequential damages arising from the use of the platform.
        </p>

        <p className="mb-4">
          11. <strong>Amendments</strong>
          <br />
          We reserve the right to update these terms at any time. Continued use
          of the platform constitutes acceptance of revised terms.
        </p>

        <p className="mb-4">
          12. <strong>Governing Law</strong>
          <br />
          These terms shall be governed by and construed in accordance with the
          laws of the jurisdiction where BookMyWarehouse operates.
        </p>

        <p className="mb-4">
          13. <strong>Termination</strong>
          <br />
          BookMyWarehouse reserves the right to suspend or terminate user
          accounts for violations of these terms or misuse of the platform.
        </p>

        <p>
          14. <strong>Contact Us</strong>
          <br />
          If you have any questions or concerns, feel free to reach out to our
          support team at{" "}
          <a
            href="mailto:care@bookmywarehouse.co?subject=Support Request"
            className="underline"
          >
            care@bookmywarehouse.co
          </a>
          . We’re here to help and want to ensure your experience is seamless.
        </p>
      </div>
    </div>
  );
};

export default Text;
