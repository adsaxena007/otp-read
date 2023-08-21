import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [otp, setOtp] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        setOtp(otp.code)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <div className="App">
      <>{`otp is = ${otp}`}</>
    </div>
  );
}

export default App;
