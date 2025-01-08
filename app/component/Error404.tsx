import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="ontainer px-5 py-24 mx-auto">
      <div className="flex flex-col text-start w-full mb-20">
      <h1 className=" font-medium title-font mb-2 text-gray-300 leading-tight">
      Home / <span className="text-Text2 leading-tight">Error 404</span>
      </h1>
      
    </div>

      <div className="lg:w-2/3 w-full mx-auto overflow-auto text-center">
        <h1 className="text-[110px] 3% font-inter font-medium text-Text2 pb-5">
          404 Not Found
        </h1>
        <p className="font-poppins text-[16px] pb-20">
          Your visited page not found. You may go home page.
        </p>
        <Link href={"/"}>
          <button className="bg-Button2 text-primary rounded-[4px] text-center py-2 px-4">
            Go Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
