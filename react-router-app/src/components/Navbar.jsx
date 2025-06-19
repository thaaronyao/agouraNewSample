import React from 'react';
import LogoHome from '../assets/Images/logo_home.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LoginIcon from '@mui/icons-material/Login';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const menuItems = [
    { label: 'Home', icon: <HomeIcon fontSize="small" />, link: '/' },
    {
      label: 'About+',
      icon: <InfoIcon fontSize="small" />,
      link: '/about',
      submenu: [
        { label: 'Overview', link: '/about/overview' },
        { label: 'Math Circle', link: '/about/math-circle' },
        { label: 'Engineering Circle', link: '/about/engineering-circle' },
      ],
    },
    {
      label: 'Gallery',
      icon: <PhotoLibraryIcon fontSize="small" />,
      link: '/gallery',
    },
    {
      label: 'Resources',
      icon: <MenuBookIcon fontSize="small" />,
      link: '/resources',
    },
    { label: 'FAQ', icon: <HelpOutlineIcon fontSize="small" />, link: '/faq' },
    {
      label: 'Donate',
      icon: <VolunteerActivismIcon fontSize="small" />,
      link: '/donate',
    },
    { label: 'Login', icon: <LoginIcon fontSize="small" />, link: '/login' },
    {
      label: 'Contact',
      icon: <ContactMailIcon fontSize="small" />,
      link: '/contact',
    },
  ];

  return (
    <div className="navbar">
      <img src={LogoHome} alt="AMC Logo" className="navbar-logo" />

      <ul className="navbar-nav">
        {menuItems.map(({ label, icon, link, submenu }) => (
          <li key={label} className="navbar-item">
            <div
              className="navbar-link"
              onClick={() => {
                navigateTo(link);
              }}
            >
              {icon}
              <span>{label}</span>
            </div>
            {submenu && (
              <ul className="submenu">
                {submenu.map(({ label, link }) => (
                  <li
                    key={label}
                    className="submenu-item"
                    onClick={() => {
                      navigateTo(link);
                    }}
                  >
                    <a>{label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
