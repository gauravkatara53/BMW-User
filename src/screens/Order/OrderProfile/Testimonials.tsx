import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Testimonials = () => {
  return (
    <>
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
        <div className="flex flex-col gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://photosbull.com/wp-content/uploads/2024/05/1000060414.jpg"
                alt="User "
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-normal">Sans Jose</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Efficient & Transparent – The platform simplifies warehouse
              booking with a user-friendly interface. It provides clear pricing,
              verified listings, and flexible rental options. Additional
              services like logistics integration enhance the experience.
              <span className="text-purple-600 font-semibold">Read more</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://photosbull.com/wp-content/uploads/2024/05/1000060414.jpg"
                alt="User "
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-normal">Anita Cruz</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Limited Availability – High-demand locations often have fewer
              options, making last-minute bookings difficult. Service quality
              varies between warehouse providers, affecting reliability. Premium
              locations come with significantly higher costs.
              <span className="text-purple-600 font-semibold">Read more</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
