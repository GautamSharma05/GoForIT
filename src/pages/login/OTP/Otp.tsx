import { useState } from 'react';
import OtpInput from 'react18-input-otp';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };
  return (
    <>
      <h1>Hello</h1>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    </>
  );
}
