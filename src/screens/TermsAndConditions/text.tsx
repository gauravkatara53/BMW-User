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
          Terms and Conditions
        </h1>

        <p className="mb-4 ">
          Welcome to Book My Warehouse! We want you to have a great experience
          using our platform, so we’ve laid out some simple terms and conditions
          to make sure everything runs smoothly. By accessing or using our
          website, you agree to these terms, so please read them carefully.
        </p>

        <p className="mb-4">
          1. General Use When you use Book My Warehouse, you're responsible for
          ensuring that any information you provide is accurate, current, and
          truthful. We’re here to help you find the right warehouse space, and
          we expect that you’ll use the platform responsibly.
        </p>

        <p className="mb-4">
          2. Account Responsibility You are responsible for maintaining the
          confidentiality of your account information and ensuring that your
          login details are secure. If you suspect any unauthorized use of your
          account, let us know right away, and we’ll help you sort it out.
        </p>

        <p className="mb-4">
          3. Services Book My Warehouse provides a platform for connecting
          individuals or businesses looking to rent warehouse spaces. While we
          facilitate the connection, we don’t own or manage the properties
          listed. It’s your responsibility to conduct due diligence when
          entering into any rental agreements.
        </p>

        <p className="mb-4">
          4. Payments All payments for warehouse bookings are handled securely
          through our platform. Any fees associated with your rental will be
          clearly stated upfront before confirming the booking. Please ensure
          that you review all payment details carefully.
        </p>

        <p className="mb-4">
          5. Cancellations and Refunds We understand that plans change. If you
          need to cancel a booking, please refer to our cancellation policy,
          which will be communicated at the time of booking. Refunds may be
          processed based on the specific terms of the property owner.
        </p>

        <p className="mb-4">
          6. User Conduct We expect all users to interact respectfully on our
          platform. Any abusive, fraudulent, or inappropriate behavior may
          result in the suspension or termination of your account. Let’s keep
          things professional and fair for everyone.
        </p>

        <p className="mb-4">
          7. Limitation of Liability While we strive to make Book My Warehouse
          as smooth and efficient as possible, we are not liable for any direct
          or indirect damages resulting from your use of the platform or any
          transactions made through it.
        </p>

        <p className="mb-4">
          8. Changes to Terms We may update these terms from time to time. When
          we do, we’ll notify you via email or through the website. It’s a good
          idea to check back now and then to stay informed.
        </p>

        <p>
          9. Contact Us If you have any questions or concerns, feel free to
          reach out to our support team at [Insert contact details]. We’re here
          to help and want to ensure your experience is seamless.
        </p>
      </div>
    </div>
  );
};

export default Text;
