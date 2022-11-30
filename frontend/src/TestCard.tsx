import { useEffect, useState } from "react";
import "./App.css";

const TestCard = ({
  serverAddress,
  version,
}: {
  serverAddress: string;
  version: string;
}) => {
  const [outstandingRequests, setOutstandingRequests] = useState(0);
  const [showPongText, setShowPongText] = useState(false);
  const addToOutstandingCount = (delta: number) =>
    setOutstandingRequests((prevOutstanding) => prevOutstanding + delta);

  useEffect(() => {
    let pongTextTimeout: number;
    if (showPongText) {
      pongTextTimeout = setTimeout(() => {
        setShowPongText(false);
      }, 1000);
    }
    return () => clearTimeout(pongTextTimeout);
  }, [showPongText]);

  return (
    <div className="card">
      <div className="buttonContainer">
        <button
          onClick={() => {
            addToOutstandingCount(1);
            fetch(`${serverAddress}/delay`).then(() =>
              addToOutstandingCount(-1)
            );
          }}
        >
          Send http {version} request to slow endpoint
        </button>
        <div className="statusText">
          Outstanding requests: {outstandingRequests}
        </div>
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => {
            setShowPongText(false);
            fetch(`${serverAddress}/ping`)
              .then((response) => response.text())
              .then((responseText) => {
                if (responseText === "Pong!") {
                  setShowPongText(true);
                }
              });
          }}
        >
          Ping server
        </button>
        <div
          className="statusText"
          style={{ visibility: showPongText ? "visible" : "hidden" }}
        >
          Pong!
        </div>
      </div>
    </div>
  );
};

export default TestCard;
