import './App.css';
import { useState } from 'react';
import { useReadOTP } from "react-read-otp";
function App() {

  const [otp, setOtp] = useState("");
  useReadOTP(setOtp);
  return (
    <div className="App">
      <>{`otp is = ${otp}`}</>
    </div>
  );
}

export default App;
