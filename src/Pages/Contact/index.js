import React from 'react';
import Typography from '@mui/material/Typography';
import contactPage from '../../img/contactPage.jpeg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IoLocationSharp, IoMail } from 'react-icons/io5';

const styles = {
  textField: {
    width: '750px',
  },
};

function Contact() {
  return (
    <>
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '50px' }}
          variant="h4"
          gutterBottom
        >
          Contact Us
        </Typography>
      </div>
      <div className="contactPageSubHeader">
        <Typography
          sx={{ letterSpacing: '1px', marginBottom: '20px' }}
          variant="subtitle2"
          gutterBottom
        >
          We are foodies and technologists. We work across time zones,
          hemispheres, cultures and languages. We share a common interest of
          cooking and trying new dishes whenever we can.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginBottom: '20px' }}
          variant="subtitle2"
          gutterBottom
        >
          Our dream is travel across the globe and try different cuisines each
          country has to offer and make something out of them according to our
          own taste.
        </Typography>
        <div className="contactPageLocation">
          <IoLocationSharp
            style={{ color: 'red', fontSize: '25px', marginRight: '10px' }}
          />
          <p>Weadsmob, 108/1 Madangir Village near Sidewal, New Delhi</p>
        </div>
        <div className="contactPageLocation">
          <IoMail
            style={{ color: 'red', fontSize: '25px', marginRight: '10px' }}
          />
          <p>nimish.prabhakar@numberonemeals.com</p>
        </div>
      </div>
      <div className="contactHome">
        <div className="contactDetails">
          <Typography
            sx={{ letterSpacing: '1px', marginBottom: '20px' }}
            variant="subtitle2"
            gutterBottom
          >
            We value any comments or feedback, so if you would like to get in
            touch with us we would love to hear from you.
          </Typography>
          <div className="contentFields">
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div className="contentFields">
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
            />
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </div>
          <TextField
            sx={styles.textField}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            multiline
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '92%',
              marginTop: '20px',
            }}
          >
            <Button variant="outlined">Send Now</Button>
          </div>
        </div>
        <img
          style={{ height: '600px' }}
          src="https://lh3.googleusercontent.com/A8GYWEzlaX-MYIK098W44DaJ1hlbpwiqlrwSv48po0hKDvBnyfx4U6KC_8yzLU7mw5U=w2400"
          alt="</div>"
        />
      </div>
    </>
  );
}

export default Contact;
