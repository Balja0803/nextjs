import { useState } from "react";

export default function Header(): JSX.Element {
  const [dropdown, setDropDown] = useState(false);
  return (
    <>
      <div className="flex bg-red-500 justify-between p-3 ">
        <div>
          <picture>
            <img
              src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
              alt="sample"
              width={161}
              height={50}
            />
          </picture>
        </div>
        <div className="flex w-3/6 justify-center">
          <input
            className="flex-auto m-3 rounded-full justify-center align-center border-white p-5 h-2/3"
            type="text"
            placeholder="search movies, TV, actors, more..."
          />
        </div>
        <div className="flex-col">
          <div>
            <ul className="flex text-white justify-between">
              <li>Whats the Tomatometer@?</li>
              <li>Critics</li>
              <li>LOGIN/SIGNUP</li>
            </ul>
          </div>
          <div className="content-between">
            <ul className="flex text-white gap-10 ">
              <li
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="hover:bg-white rounded-t hover:text-black cursor-pointer hover:relative"
              >
                MOVIES
              </li>

              <li className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                TV SHOWS
              </li>
              <li className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                MOVIE TRIVIA
              </li>
              <li className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                NEWS
              </li>
              <li className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                SHOWTIMES
              </li>
            </ul>
          </div>
        </div>
      </div>
      {dropdown ? (
        <div className="w-full bg-white -mt-3 absolute h-2/6">
          <ul className="flex justify-between">
            <li>Movies in Theatre</li>
            <li>Movies at Home</li>
            <li>More</li>
            <li>Certified Fresh picks</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
