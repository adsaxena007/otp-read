import { useRef } from 'react';
import './App.css';


function App() {
  const liveVideoFeed = useRef(null);
  const canvasRef = useRef(null);

  const getCameraPermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          video: { facingMode: "user" },
        };
        const audioConstraints = { audio: true };
        await navigator?.mediaDevices?.getUserMedia(audioConstraints);
        const videoStream = await navigator?.mediaDevices?.getUserMedia(
          videoConstraints
        );
        console.log("Video stream", videoStream);
        liveVideoFeed.current.srcObject = videoStream;
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("");
    }
  };


  const paintToCanvas = () => {
    const video = liveVideoFeed.current;
    const photo = canvasRef.current;
    const ctx = photo.getContext("2d");
    const width = 335;
    const height = 260;
    photo.width = width;
    photo.height = height;


    return setInterval(function () {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };


  const detectFaces = async () => {
    console.log("Hello");
  };

  const digitalKycDimensions = {
    videoHeight: "332px",
    videoWidth: "248px",
  };

  return (
    <div className="App">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <div>
        {
          <div style={{ display: "flex", justifyContent: "center" }}>
            <video
              ref={liveVideoFeed}
              onCanPlay={paintToCanvas}
              autoPlay
              onPlay={detectFaces}
              playsInline
              webkit-playsInline
              style={{
                width: digitalKycDimensions.videoWidth,
                height: digitalKycDimensions.videoHeight,
                border: '2px solid black',
                borderRadius: "16px",
                margin: "12px",
                display: `block`,
                objectFit: "cover",
                transform: "rotateY(180deg)",
              }}
            ></video>
            <button
              onClick={() => {
                getCameraPermission();
              }}
            >
              Open Camera
            </button>
          </div>
        }
      </div>
    </div >
  );
}

export default App;
