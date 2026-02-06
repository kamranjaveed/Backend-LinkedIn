import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  // destructuring current user from user in state
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="h-20 bg-blue-500 flex justify-between px-20 items-center">
      {/* user image */}
      <div className="flex items-center gap-2">
        <img
          className="w-20"
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          alt="user_profile"
        />
        
        <div>
          <p className="text-white font-semibold">{currentUser?.email}</p>
        </div>
      </div>

      {/* search bar */}

      <div>
        <input
          className="bg-white p-3 border-2 rounded-lg outline-none border-black"
          type="text"
          placeholder="Search.."
        />
      </div>

      {/* linkedin logo */}
      <div className="flex items-center gap-6">
        <div>
          <IoNotificationsOutline className="text-white font-semibold cursor-pointer text-3xl" />
        </div>

        <div>
          <h1 className="text-white font-semibold text-3xl">LinkedIn</h1>
        </div>

        <img
          className="w-24"
          src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
          alt="linkedin_logo"
        />
      </div>
    </div>
  );
};

export default Navbar;