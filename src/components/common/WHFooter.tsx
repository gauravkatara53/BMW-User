// import { ChevronSVG } from '@/assets/svgs';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// export default function WHFooter() {
//   const propertyLinks = [
//     { href: "#house", label: "House" },
//     { href: "#apartment", label: "Apartment" },
//     { href: "#villa", label: "Villa" },
//   ];

//   const articleLinks = [
//     { href: "#new-article", label: "New Article" },
//     { href: "#popular-article", label: "Popular Article" },
//     { href: "#most-read", label: "Most Read" },
//     { href: "#tips-tricks", label: "Tips & Tricks" },
//   ];

//   const contactLinks = [
//     { href: "#new-delhi", label: "New Delhi" },
//     { href: "#mobile-number", label: "+91 1234567890" },
//     { href: "#mail-id", label: "info@warehouseonhire.com" },
//   ];

//   return (
//     <footer className="relative text-gray-800 px-6 pb-6 pt-6 lg:px-32 md:pb-16 md:pt-8 overflow-hidden">
//       <div className="absolute top-0 right-0 w-32 h-32 md:w-[30rem] md:h-[30rem] bg-no-repeat bg-contain" style={{ backgroundImage: 'url(blur-blob-3.png)' }}></div>
//       <div className="container mx-auto flex flex-col md:flex-row justify-between relative z-10">
//         <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start mt-4 md:mt-[-40px]">
//           <div className="flex flex-col items-center sm:items-start mb-6">
//             <img src="logo1.png" alt="Company Logo" className=" h-16 mb-2" />
//             <p className="text-center md:text-left text-[#8a8ca5] text-base md:text-lg leading-relaxed mt-4">
//               We provide information about properties such <br /> as houses, villas and apartments to help people <br /> find their dream home.
//             </p>
//           </div>
//           <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 justify-center md:justify-start">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <FaFacebook className="text-xl md:text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-200" />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="text-xl md:text-2xl text-gray-800 hover:text-blue-400 transition-colors duration-200" />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="text-xl md:text-2xl text-gray-800 hover:text-pink-500 transition-colors duration-200" />
//             </a>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center md:text-left">
//             <h3 className="text-lg md:text-xl font-semibold mb-4">Property</h3>
//             <ul className="space-y-2 text-[#8a8ca5] hidden md:block">
//               {propertyLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="text-center md:text-left">
//             <h3 className="text-lg md:text-xl font-semibold mb-4">Article</h3>
//             <ul className="space-y-2 text-[#8a8ca5] hidden md:block">
//               {articleLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="text-center md:text-left">
//             <div className=' flex justify-between items-center'>
//             <h3 className="text-lg md:text-xl font-semibold mb-4">Contact</h3>
//             <ChevronSVG direction='down'/>

//             </div>
//             <ul className="space-y-2 text-[#8a8ca5] hidden md:block">
//               {contactLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import WHLinksList from "./WHLinksList";

export default function WHFooter() {
  return (
    <div className="bg-rz-darkgreen lg:px-40 md:px-24 sm:px-16 px-4 sm:pt-24 pt-8 ">
      <div className="grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-16">
        <div className="flex flex-col gap-3 sm:col-span-2">
          <img src="logo1.png" className="w-40" alt="" />
          <h3 className="text-sm">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </h3>
          {/* <div className="flex gap-2 mt-4 sm:mt-8 ">
            <img src="home.png" className="h-6" alt="" />
            <p className=" text-sm">
              FLOOR, P-2,S.NO.150/A/1+2 BHUSARI COLONY KOTHRUD PUNE-411038
            </p>
          </div>
          <div className="flex gap-2">
            <img src="email.png" className="h-6" alt="" />
            <p className=" text-sm">care@ricoz.in</p>
          </div> */}
          {/* <div className="ml-7 -mt-4 text-sm">+91 7011112666</div> */}
        </div>
        <WHLinksList
          heading="Useful Links"
          links={[
            { title: "Home", href: "/" },
            { title: "About", href: "/about" },
            { title: "Contact Us", href: "/contact" },
          ]}
        />
        <WHLinksList
          heading="Policies"
          links={[
            { title: "Terms", href: "/" },
            { title: "Privacy Policy", href: "/about" },
            { title: "Cookie Policy", href: "/contact" },
            { title: "Fraud Disclaimer", href: "/contact" },
          ]}
        />
        <WHLinksList
          heading="Help"
          links={[
            { title: "FAQs", href: "/" },
            { title: "Customer Care", href: "/about" },
          ]}
        />
      </div>
      <div className="mt-4 sm:mt-16 flex flex-col gap-2 py-8 border-b-2 ">
        <h4 className="text-xl">Our Presence</h4>
        <div className="flex gap-4 flex-wrap xs:text-base text-sm">
          <p>India</p>
          <p>US</p>
          <p>UK</p>
          <p>CANADA</p>
          <p>Nigeria</p>
          <p>Australia</p>
        </div>
      </div>
      <p className="text-center py-3 xs:text-base text-sm">
        © 2024 BOOK MY WAREHOUSE PRIVATE LIMITED. All Right Reserved • CIN:
        U72900DL2021PTC384199
      </p>
    </div>
  );
}
