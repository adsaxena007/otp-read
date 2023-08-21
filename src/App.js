import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [otp, setOtp] = useState();
  const [data, setData] = useState("sad");
  useEffect(() => {
    const ac = new AbortController();
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        setOtp(otp.code)
        setData(JSON.stringify(otp))
      })
      .catch((err) => {
        setData(err.message);
        console.error(err);
      });
  }, [])

  return (
    <div className="App">
      <div>{`otp is = ${otp}`}</div>
      <div>{`data is = ${data}`}</div>
    </div>
  );
}

export default App;
