import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Login } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router';

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      {/* Left - Program Links */}
      <ul className="topbar-left">
        <li>
          <a href="mathcircle.html">Math Circle</a>
        </li>
        <li>
          <a href="engineering-circle.html">Engineering Circle</a>
        </li>
        <li>
          <a href="test-preparation.html">Test Preparation</a>
        </li>
        <li>
          <a href="satellite-program.html">Satellite Program</a>
        </li>
        <li
          onClick={() => {
            navigate('/pStudyWare');
          }}
        >
          <span style={{ color: 'white' }}>Fake Login: click me</span>
        </li>
      </ul>

      {/* Right - Social + Login + Donate */}
      <ul className="topbar-right">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100010784343153"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Agouramathcirle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCWK2w-BVGps-Y9c08B5pRgA/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/agouramathcircle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/agouramathcircle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="icon" />
          </a>
        </li>
        <li>
          <Login className="icon" />
          <a href="login.aspx">LOGIN</a>
        </li>
        <li>
          <AttachMoneyIcon className="icon" />
          <a href="donate.aspx">DONATE</a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
