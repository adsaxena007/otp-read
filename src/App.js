import './App.css';
import { useEffect, useRef } from 'react';
function App() {

  const videoRef = useRef();

  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: { width: 1920, height: 1080 }
    }).then((stream) => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play().then(() => {
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getVideo();
  }, [videoRef])

  return (
    <div className="App">
      <div>
        <video ref={videoRef}></video>
        <button></button>
      </div>
    </div>
  );
}

export default App;
