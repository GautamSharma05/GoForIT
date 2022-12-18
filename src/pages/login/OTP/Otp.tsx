import { useState } from 'react';
import OtpInput from 'react18-input-otp';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };
  return (
    <div className="login-form">
      <div className="login-card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e83e8c"
            fillOpacity="1"
            d="M0,0L16,10.7C32,21,64,43,96,48C128,53,160,43,192,80C224,117,256,203,288,245.3C320,288,352,288,384,245.3C416,203,448,117,480,80C512,43,544,53,576,53.3C608,53,640,43,672,69.3C704,96,736,160,768,160C800,160,832,96,864,106.7C896,117,928,203,960,229.3C992,256,1024,224,1056,181.3C1088,139,1120,85,1152,85.3C1184,85,1216,139,1248,154.7C1280,171,1312,149,1344,128C1376,107,1408,85,1424,74.7L1440,64L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
        <div className="login-card-title">
          <h2>Log in or create an account </h2>
        </div>
        <div className="login-card-body">
          <div className="login-container">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
        </div>
        <div className="login-button">
          <button aria-label="Continue" type="submit" disabled>
            Continue
          </button>
        </div>
        <div className="opt-desc">
          We will send you a 6-digit code via SMS to verify your number
        </div>
      </div>
    </div>
  );
}
