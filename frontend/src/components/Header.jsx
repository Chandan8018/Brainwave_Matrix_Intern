import { Button as Btn, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSignOutAlt, FaSun, FaUserCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { IoIosMail } from "react-icons/io";
import { Button } from "./ui/moving-border";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      boxShadow: `0 0 0 2px ${theme}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white md:pl-7'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          ThinkBig's
        </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Btn className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Btn>
      <div className='flex gap-10 md:order-2'>
        <Button
          borderRadius='1.75rem'
          className='bg-tansparent text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full h-10 mr-10'
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <FaSun className='w-5 h-5' />
          ) : (
            <FaMoon className='w-5 h-5' />
          )}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant='dot'
              >
                <Avatar
                  alt={currentUser.username}
                  src={currentUser.profilePicture}
                  sx={{ width: 44, height: 44 }}
                />
              </StyledBadge>
            }
          >
            <Dropdown.Header>
              <div className='flex justify-center items-center gap-2'>
                <StyledBadge
                  overlap='circular'
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant='dot'
                >
                  <Avatar
                    alt={currentUser.username}
                    src={currentUser.profilePicture}
                    sx={{ width: 60, height: 60 }}
                  />
                </StyledBadge>

                <span className='block text-md font-bold text-blue-500 truncate'>
                  @{currentUser.username}
                </span>
              </div>
              <span className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate mt-2 flex justify-center items-center gap-1'>
                <IoIosMail className='w-6 h-6 pt-1' />
                {currentUser.email}
              </span>
            </Dropdown.Header>

            <Link to={"/dashboard?tab=dash"}>
              <Dropdown.Item className='text-blue-500 font-semibold'>
                <ImProfile className='w-4 h-4 mr-2' color='blue' />
                Dashboard
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />

            <Dropdown.Item
              className='text-red-500 font-semibold'
              onClick={() => {
                dispatch(signoutSuccess());
                navigate("/");
              }}
            >
              <FaSignOutAlt className='w-4 h-4 mr-2' color='red' />
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Button
            borderRadius='1.75rem'
            className='bg-transparent border-slate-800 mr-4 text-sm font-semibold text-black dark:text-white'
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
