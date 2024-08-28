import { RiGridFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-white-300 flex justify-between items-center p-5 w-full">
      {/* left part ***************** */}
      <div className="flex justify-center items-center gap-4">
        <p className="links custom-text">About</p>
        <p className="links custom-text">Store</p>
      </div>

      {/* right part **************** */}
      <div className="flex justify-center items-center gap-4">
        <p className="links custom-text">Gmail</p>
        <p className="links custom-text">Images</p>
        <div className="links">
          <RiGridFill size={20} color="#5F6368" />
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
            className="h-10 w-10 rounded-full links"
            alt="Profile Image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
