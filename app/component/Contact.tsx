import { LuPhone } from "react-icons/lu";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col mx-auto border-b pb-10 mb-10 border-gray-800">
          {/* Icon and Title Section */}
          <div className="flex flex-row items-center mb-4">
            <div className="w-10 h-10  mr-3 sm:mr-6 flex items-center justify-center rounded-full text-primary bg-secondary2 flex-shrink-0">
              <LuPhone className="w-6 h-6" />
            </div>
            <h2 className="text-Text2 text-lg title-font font-medium">
              Call To Us
            </h2>
          </div>

          {/* Text and Phone Section */}
          <div className="flex flex-col sm:text-left text-center">
            <p className="leading-relaxed text-base text-Text2">
              We are available 24/7, 7 days a week.
            </p>
            <h3 className="mt-3 text-Text2 inline-flex items-center">
              Phone: +8801611112222
            </h3>
          </div>
        </div>

        {/* Mail */}
        <div className="flex flex-col  mx-auto border-b pb-10 mb-10 border-gray-800">
          {/* Icon and Title Section */}
          <div className="flex flex-row items-center mb-4">
            <div className="w-10 h-10  mr-3 sm:mr-6 flex items-center justify-center rounded-full text-primary bg-secondary2 flex-shrink-0">
              <GoMail className="w-6 h-6" />
            </div>
            <h2 className="text-Text2 text-lg title-font font-medium">
              Write To US
            </h2>
          </div>

          {/* Text and Phone Section */}
          <div className="flex flex-col sm:text-left text-center">
            <p className="leading-relaxed text-base text-Text2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <h3 className="mt-3 text-Text2 inline-flex items-center">
              Emails: customer@exclusive.com
            </h3>
            <h3 className="mt-3 text-Text2 inline-flex items-center">
              Emails: support@exclusive.com
            </h3>
          </div>
        </div>
      </div>
      {/*Contact us */}
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name *"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/3 flex-row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email *"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/3 flex-row">
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Your Phone *"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <div className="items-end">
              <button className="flex mx-auto text-primary bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
