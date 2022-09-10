import React, { useEffect } from 'react';
import Logo from '../../img/logo.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BsInstagram, BsTwitter, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function LinkTab(props) {
  const navigate = useNavigate();
  const link = props.link;
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(link);
      }}
      {...props}
    />
  );
}

const styles = {
  serachField: {
    width: '300px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '225px',
    },
  },
  navLinks: {
    fontSize: '20px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '15px',
    },
  },
};

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const navigate = useNavigate();

  useEffect(() => {
    let currentTab = window.location.href;
    if (currentTab.includes('asia')) {
      setValue(1);
    } else if (
      currentTab.includes('north-america') ||
      currentTab.includes('northAmerica')
    ) {
      setValue(2);
    } else if (currentTab.includes('south-america')) {
      setValue(3);
    } else if (currentTab.includes('africa')) {
      setValue(4);
    } else if (currentTab.includes('europe')) {
      setValue(5);
    } else if (currentTab.includes('about')) {
      setValue(6);
    } else if (currentTab.includes('contact')) {
      setValue(7);
    } else {
      setValue(0);
    }
  });

  return (
    <>
      <div className="navUpper">
        <div className="iconFlex">
          <BsInstagram className="socialIcons" />
          <BsTwitter className="socialIcons" />
          <BsWhatsapp className="socialIcons" />
          <BsFacebook className="socialIcons" />
        </div>
        <img
          onClick={() => navigate('/')}
          className="logoImg"
          src={Logo}
          alt="logo"
        />

        <div className="searchFlex">
          <SearchIcon
            sx={{
              color: 'action.active',
              mr: 1.5,
              marginTop: '18px',
              fontSize: '30px',
            }}
          />
          <TextField
            id="input-with-sx"
            label="Search your favourite meals"
            variant="standard"
            sx={styles.serachField}
          />
        </div>
      </div>
      <div className="navLinks">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab sx={styles.navLinks} label="Home" link="/" />
          <LinkTab sx={styles.navLinks} label="Asia" link="/asia" />
          <LinkTab
            sx={styles.navLinks}
            label="North America"
            link="/north-america"
          />
          <LinkTab
            sx={styles.navLinks}
            label="South America"
            link="/south-america"
          />
          <LinkTab sx={styles.navLinks} label="Africa" link="/africa" />
          <LinkTab sx={styles.navLinks} label="Europe" link="/europe" />
          <LinkTab sx={styles.navLinks} label="About Us" link="/about" />
          <LinkTab sx={styles.navLinks} label="Contact" link="/contact" />
        </Tabs>
      </div>
    </>
  );
}

export default NavBar;
