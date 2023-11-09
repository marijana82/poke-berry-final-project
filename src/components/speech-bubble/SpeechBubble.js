import "./SpeechBubble.css";
import React from "react";


function SpeechBubble({bubbleMessage, dynamicData, children}) {
    return(
            <div className="speech-bubble">
                {children}
                <p>{bubbleMessage}</p>
                <p>{dynamicData}</p>
            </div>
    );
}

export default SpeechBubble;