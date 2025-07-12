import React, { useEffect } from "react";
import "./CastleStyle.css";

export default function Castle() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    script1.async = false;

    const script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenMax.min.js";
    script2.async = false;

    const script3 = document.createElement("script");
    script3.src = "/script.js";
    script3.async = false;

    document.body.appendChild(script1);
    script1.onload = () => {
      document.body.appendChild(script2);
      script2.onload = () => {
        document.body.appendChild(script3);
      };
    };

    return () => {
      [script1, script2, script3].forEach((s) => {
    if (s.parentNode) s.parentNode.removeChild(s);
  });
    };
  }, []);

  return (
    <>
      <div className="container bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
        {/* Ảnh nền sáng */}
        <img className="background block dark:hidden" src="/Image/background.jpg" alt="Light Background" />
        {/* Ảnh nền tối */}
        <img className="background hidden dark:block" src="/Image/bg.jpeg" alt="Dark Background" />

        <img className="cloud-bg" src="/Image/cloud-bg.png" alt="" />
        <img className="cloud-bg2" src="/Image/cloud-bg.png" alt="" />

        <div className="castle-container">
          <div className="castle">
            <div className="brleg">
              <img className="brfoot" src="/Image/brfoot.png" alt="" />
              <img className="brbottom" src="/Image/brbottom.png" alt="" />
            </div>
            <div className="frleg">
              <img className="frfoot" src="/Image/frfoot.png" alt="" />
              <img className="frbottom" src="/Image/frbottom.png" alt="" />
            </div>
            <img className="chimney3" src="/Image/chimney3.png" alt="" />
            <img className="treehouse" src="/Image/treehouse.png" alt="" />
            <div className="houses-group">
              <img className="point6" src="/Image/point6.png" alt="" />
              <img className="point5" src="/Image/point5.png" alt="" />
              <img className="point4" src="/Image/point4.png" alt="" />
              <img className="houses" src="/Image/houses.png" alt="" />
            </div>
            <img className="chimney2" src="/Image/chimney2.png" alt="" />
            <img className="chimney1" src="/Image/chimney1.png" alt="" />
            <img className="wing" src="/Image/wing.png" alt="" />
            <div className="mound-group">
              <img className="antenna" src="/Image/antenna.png" alt="" />
              <img className="point3" src="/Image/point3.png" alt="" />
              <img className="point2" src="/Image/point2.png" alt="" />
              <img className="point1" src="/Image/point1.png" alt="" />
              <img className="mound" src="/Image/mound.png" alt="" />
            </div>
            <img className="wind" src="/Image/wind.png" alt="" />
            <img className="cannon" src="/Image/cannon.png" alt="" />
            <img className="main" src="/Image/main.png" alt="" />
            <div className="blleg">
              <div className="blbottom-group">
                <img className="blfoot" src="/Image/flfoot.png" alt="" />
                <img className="blbottom" src="/Image/flbottom.png" alt="" />
              </div>
              <img className="bltop" src="/Image/fltop.png" alt="" />
            </div>
            <img className="blcover" src="/Image/blcover.png" alt="" />
            <img className="knob" src="/Image/knob.png" alt="" />
            <img className="tele" src="/Image/tele.png" alt="" />
            <img className="telecover" src="/Image/telecover.png" alt="" />
            <div className="flleg">
              <div className="flbottom-group">
                <img className="flfoot" src="/Image/flfoot.png" alt="" />
                <img className="flbottom" src="/Image/flbottom.png" alt="" />
              </div>
              <img className="fltop" src="/Image/fltop.png" alt="" />
            </div>
            <img className="flcover" src="/Image/flcover.png" alt="" />
          </div>
        </div>

        <img className="foreground" src="/Image/foreground.png" alt="" />

        <div className="clouds">
          <img className="cloud-shadow1" src="/Image/cloud_shadow-1.png" alt="" />
          <img className="cloud-shadow2" src="/Image/cloud_shadow-1.png" alt="" />
          <img className="cloud-shadow3" src="/Image/cloud_shadow-1.png" alt="" />
          <img className="cloud1" src="/Image/cloud-1.png" alt="" />
          <img className="cloud2" src="/Image/cloud-1.png" alt="" />
          <img className="cloud3" src="/Image/cloud-2.png" alt="" />
          <img className="cloud4" src="/Image/cloud-1.png" alt="" />
          <img className="cloud5" src="/Image/cloud-2.png" alt="" />
        </div>
      </div>

      <div className="control-toggle">Toggle mouse controls</div>
      <div className="load-gate">Loading...</div>
    </>
  );
}
