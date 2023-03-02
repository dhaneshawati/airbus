import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../firebase";
import { onSignOut } from "../../redux/actions/actionCreator";

const Navbar = () => {
  const currentUser = useAuth();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [photoURL, setPhotoURL] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.user);

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
      console.log(currentUser);
    }
  }, [currentUser]);

  const handleLogOut = async () => {
    try {
      // console.log("Inside Navbar")
      await signOut(auth);

      dispatch(onSignOut());
      navigate("/");
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className=" text-2xl logo">Airbus</span>
        <div className="navItems">
          {!user && (
            <>
              <button className="navButton" onClick={() => navigate("/signup")}>
                Register
              </button>
              <button className="navButton" onClick={() => navigate("/login")}>
                Log In
              </button>
            </>
          )}
          {user && (
            <>
              <div className="flex userInfo">
                <div className="flex -space-x-1 overflow-hidden user-img">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white profileImg"
                    src={photoURL}
                    alt="profile"
                  />
                </div>
                <span className="user">
                  {user?.displayName ? user.displayName : user.email}
                </span>

                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="logout-btn"
                  onClick={() => handleLogOut()}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
