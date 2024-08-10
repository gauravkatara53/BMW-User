import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../../public/image1.jpg";
import image2 from "../../../../public/image2.jpg";
import image3 from "../../../../public/image3.jpg";
import image4 from "../../../../public/image4.jpg";

const NewsAndUpdates = () => {
  const newsItems = [
    {
      title: "New Locations",
      content: "Explore expanded warehouse options in major cities.",
      image: image1,
    },
    {
      title: "Upgraded Features",
      content: "Advanced filters and real-time updates",
      image: image2,
    },
    {
      title: " Rental Discounts",
      content: "Limited-time savings on long-term bookings.",
      image: image3,
    },
    {
      title: " Mobile App",
      content: "Easily manage bookings with our new app.",
      image: image4,
    },
    {
      title: " Logistics Partners",
      content: "Enhanced solutions through new partnerships.",
      image: image1,
    },
    {
      title: "Streamlined Booking",
      content: "Experience faster and simpler booking with our latest updates.",
      image: image1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center overflow-hidden">
      <h1 className="text-5xl font-bold mb-8">News and Updates</h1>
      <div className="flex items-center justify-center ">
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
          <div className="w-24 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
        </div>
      </div>
      <p className="text-[#212121] mb-8 mt-6">
        Stay tuned for the latest updates and innovations in warehouse solutions
        and booking <br />
        services, industry trends, and more.
      </p>
      <div className="my-8">
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg p-6 h-96 flex flex-col justify-start overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-48 w-full object-cover rounded-2xl"
                />
                <h2 className="text-lg mb-2 text-left text-gray-400">
                  {item.title}
                </h2>
                <p className="text-left text-lg leading-snug">{item.content}</p>
                <a
                  href="#"
                  className="mt-4 text-blue-500 hover:text-blue-700 text-left self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Slider>
        <style>{`
        .slick-dots li button:before {
          font-size: 16px;
          color: #D1C4E9;
        }
        .slick-dots li.slick-active button:before {
          color: #F8BBD0;
        }
        .slick-dots li {
          margin: 0 3px;
        }
        .slick-dots li button {
          width: 20px;
          height: 20px;
        }
        .slick-dots {
          bottom: -35px;
        }
      `}</style>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
