import React from "react";
import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbPremiumRights } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const ProfileSection = () => {
  // currentUser

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="border-2 flex flex-col items-center border-black rounded-lg p-10">

      <NavLink to="/profile">
        <div className="flex items-center gap-2">
          <img
            className="w-17 ml-[-20px]"
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
            alt="user_profile"
          />
          <div>
            <h2 className="font-semibold text-xl">{currentUser?.username}</h2>
            <h4 className="text-gray-500">headline</h4>
          </div>
        </div>
      </NavLink>

      {/* profile menu items */}

      {/* mt - margin top */}
      <div className="mt-6">
        <ul className="text-2xl font-semibold flex flex-col gap-3">
          <li className="cursor-pointer flex items-center gap-2">
            <div>
              <CiUser />
            </div>
            <div>Profile Views</div>{" "}
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            {" "}
            <div>
              <IoIosSettings />
            </div>
            <div>Account settings</div>
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <div>
              <TbPremiumRights />
            </div>
            Upgrade to Premium
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSection;