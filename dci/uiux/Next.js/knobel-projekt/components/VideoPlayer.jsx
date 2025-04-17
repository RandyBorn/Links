"use client";

import React from "react";

const VideoPlayer = () => {
  return (
    <section className="videoContainer">
      <div className="relative w-full h-110 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/Ford-Mustang-GT500.mp4" type="video/mp4" />
        </video>
        <section className="videoitem">
          <h1>Willkommen!</h1>
          <h3>Viel Spaß bei diesem kleinen Knobelprojekt!</h3>
        </section>
      </div>
    </section>
  );
};

export default VideoPlayer;
