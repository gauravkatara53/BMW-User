import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../../../public/image1.jpg';
import image2 from '../../../../public/image2.jpg';
import image3 from '../../../../public/image3.jpg';
import image4 from '../../../../public/image4.jpg';

const NewsAndUpdates = () => {
  const newsItems = [
    { title: "Headline 1", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image1 },
    { title: "Headline 2", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image2 },
    { title: "Headline 3", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image3 },
    { title: "Headline 4", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image4 },
    { title: "Headline 5", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image1 },
    { title: "Headline 6", content: "Sed imperdiet enim ligula, vitae viverra justo.", image: image1 }
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center overflow-hidden">
      <h1 className="text-5xl font-bold mb-8">News and Updates</h1>
      <p className="text-[#212121] mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo <br /> euismod condimentum.
      </p>
      <div className="my-8">
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg p-6 h-96 flex flex-col justify-start overflow-hidden">
                <img src={item.image} alt={item.title} className="mb-4 h-48 w-full object-cover rounded-2xl" />
                <h2 className="text-lg mb-2 text-left text-gray-400">{item.title}</h2>
                <p className="text-left text-lg leading-snug">{item.content}</p>
                <a href="#" className="mt-4 text-blue-500 hover:text-blue-700 text-left self-start">Read More</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
