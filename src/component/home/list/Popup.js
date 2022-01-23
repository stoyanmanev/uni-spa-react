import React from "react";
// todo



export default function Popup(props) {
    console.log('ex2')

  return (
    <div id="ligth-box-container">
      <div className="full-screen-container">
        <div className="content-box">
          <div id="content-text"></div>
          <div id="resource">
              <iframe src={props.dataSrc} title={props.title} allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <button
        type="button"
        id="close-button"
        aria-label="Close"
        className="close-light-box-button"
      >
        <svg width="30" height="30">
          <g stroke="rgb(160,160,160)" strokeWidth="2">
            <line x1="5" y1="5" x2="25" y2="25"></line>
            <line x1="5" y1="25" x2="25" y2="5"></line>
          </g>
        </svg>
      </button>
    </div>
  );
}
