import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    //Make sure you add the images later
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="dark:border-white border-4 border-stone-900 rounded-md overflow-hidden "
    >
      <div className=" rounded-sm overflow-hidden">
        <img
          src={imgUrl}
          alt="Portfolio Image"
          className="w-full h-36 md:h-48 object-cover object-center cursor-pointer"
        />
        <div className="p-4 w-full">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
