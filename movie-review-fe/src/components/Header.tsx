export default function Header(): JSX.Element {
  return (
    <>
      <div className="flex bg-red-600 justify-between p-3 max-w-5xl mx-auto ">
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
            <div className="flex text-white gap-10 ">
              <div className="hover:bg-white rounded-t hover:text-black cursor-pointer relative">
                MOVIES
                <div className="w-full bg-white absolute h-2/6 hidden hover:visible">
                  <ul className="flex justify-between">
                    <li>Movies in Theatre</li>
                    <li>Movies at Home</li>
                    <li>More</li>
                    <li>Certified Fresh picks</li>
                  </ul>
                </div>
              </div>

              <div className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                TV SHOWS
              </div>
              <div className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                MOVIE TRIVIA
              </div>
              <div className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                NEWS
              </div>
              <div className="hover:bg-white rounded-t hover:text-black cursor-pointer">
                SHOWTIMES
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
