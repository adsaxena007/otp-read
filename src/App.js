import './App.css';
import { useCallback, useRef } from 'react';
import Webcam from "react-webcam";

function App() {

  // const videoRef = useRef();
  const webcamRef = useRef(null);
  const capture = useCallback(
    () => {
      webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );
  // const getVideo = () => {
  //   navigator.mediaDevices.getUserMedia({
  //     video: { width: 1920, height: 1080 }
  //   }).then((stream) => {
  //     let video = videoRef.current;
  //     video.srcObject = stream;
  //     video.play().then(() => {
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef])
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  return (
    <div className="App">
      <div>
        {/* <video ref={videoRef}></video>
        <button></button> */}
        <>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      </div>
    </div>
  );
}

export default App;
