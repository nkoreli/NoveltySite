import React, { useState, useEffect } from "react";
import "./App.css";

// NoveltyTodayApp

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}



const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    setTimeout(() => {      
      handleResize()
    }, 500);
    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", () => { console.log('sds') });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: '100%',
        // height: '300vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >

      <BackgroundMain windowDimensions={windowDimensions} src={"./images/Background.png"} alt={"Background"} />
      <PhoneImg1 windowDimensions={windowDimensions} src={"./images/Phone_Img1.png"} alt={"Phone_Img1"} />
      <NoveltyGlasses windowDimensions={windowDimensions} src={"./images/Glasses.png"} alt={"Glasses"} />
      <NoveltyText windowDimensions={windowDimensions} />
      <NoveltyPhrase windowDimensions={windowDimensions} />
      <NoveltyTodayApp windowDimensions={windowDimensions} />
      <PhoneImg2 windowDimensions={windowDimensions} src={"./images/Phone_Img2.png"} alt={"PhoneImg2"} />
      <PhoneImg3 windowDimensions={windowDimensions} src={"./images/Phone_Img3.png"} alt={"PhoneImg3"} />
      <NoveltyText2 windowDimensions={windowDimensions} />
      <NoveltyText3 windowDimensions={windowDimensions} />
      <NoveltyText4 windowDimensions={windowDimensions} />
      <CopyRight windowDimensions={windowDimensions} />
      <NoveltyDevelopment windowDimensions={windowDimensions} />
      <AppStoreFrame1
        windowDimensions={windowDimensions}
        src={"./images/AppStoreFrame1.png"}
        alt={"AppStoreFrame1"}
      />
      <AppStoreFrame2
        windowDimensions={windowDimensions}
        src={"./images/AppStoreFrame2.png"}
        alt={"AppStoreFrame2"}
      />
      <GoogleStoreFrame1
        windowDimensions={windowDimensions}
        src={"./images/GoogleStoreFrame1.png"}
        alt={"GoogleStoreFrame1"}
      />
      <GoogleStoreFrame2
        windowDimensions={windowDimensions}
        src={"./images/GoogleStoreFrame2.png"}
        alt={"GoogleStoreFrame2"}
      />

    </div>
  );
};



const BackgroundMain = ({ windowDimensions, src, alt }) => {
  return <img style={{ width: windowDimensions.width - 20 }} className="BackgroundMain" src={src} alt={alt} />;
};
const PhoneImg1 = ({ windowDimensions, src, alt }) => {
  return <img style={{ left: windowDimensions.width / 3 - 700 }} className="PhoneImg1" src={src} alt={alt} />;
};

const PhoneImg2 = ({ windowDimensions, src, alt }) => {
  return <img style={{ left: windowDimensions.width / 3 + 250 }} className="PhoneImg2" src={src} alt={alt} />;
};

const PhoneImg3 = ({ windowDimensions, src, alt }) => {
  return <img style={{ left: windowDimensions.width / 3 - 200 }} className="PhoneImg3" src={src} alt={alt} />;
};

const NoveltyGlasses = ({ windowDimensions, src, alt }) => {
  return <img style={{ left: windowDimensions.width / 2 - 130 }} className="NoveltyGlasses" src={src} alt={alt} />;
};

// const text = ({style,text})=>{
//   return (
//     <h1 className={style}>{text} </h1>
//   );
// }

const NoveltyText = ({ windowDimensions }) => {
  return <h1 style={{ left: windowDimensions.width / 2  }} className="NoveltyText">novelty</h1>;
};

const NoveltyText2 = ({ windowDimensions }) => {
  return (
    <h2 style={{ left: windowDimensions.width / 3 - 200 }} className="NoveltyText2">
      Build meaningful relationships through giving and receiving authentic
      feedback.
    </h2>
  );
};

const NoveltyText3 = ({ windowDimensions }) => {
  return (
    <div >
      <h1 style={{ left: windowDimensions.width / 3 + 100, width:windowDimensions.width/2 }} className="NoveltyText3">
        <span style={{ color: " #FFB000" }}>Track&nbsp;</span>your&nbsp;
        <span style={{ color: "#ff28b9" }}>relationship&nbsp;</span>
      </h1>
    </div>
  );
};
const NoveltyDevelopment = ({ windowDimensions }) => {
  return <h1 style={{ left: windowDimensions.width / 3 + 100 }} className="NoveltyDevelopment">development</h1>;
};
const NoveltyText4 = ({ windowDimensions }) => {
  return (
    <div >
      <h4 style={{ left: windowDimensions.width / 3 + 100 }} className="NoveltyText4">
        From&nbsp;
        <span style={{ color: "#FF8C00" }}>connections&nbsp;</span>
        to&nbsp;
        <span style={{ color: "#9932CC" }}>BFF&nbsp;</span>
      </h4>
    </div>
  );
};

const NoveltyPhrase = ({ windowDimensions }) => {
  return <h1 style={{ left: windowDimensions.width / 3 + 100 }} className="NoveltyPhrase">Meet people who share your passion</h1>;
};
const NoveltyTodayApp = ({ windowDimensions }) => {
  return <h6 style={{ left: windowDimensions.width / 3 + 100 }} className="NoveltyTodayApp">novelty today app</h6>;
};
const CopyRight = ({ windowDimensions }) => {
  return <h6 style={{ left: windowDimensions.width / 2 - 45 }} className="CopyRight">© 2021 Novelty</h6>;
};

const AppStoreFrame1 = ({ windowDimensions, src, alt }) => {
  return (
    <a
      href="https://apps.apple.com/us/app/novelty-today/id1563260378"
      target="_blank"
      rel="noreferrer"
    >
      <img style={{ left: windowDimensions.width / 3 + 100 }} className="AppStoreFrame1" src={src} alt={alt} />
    </a>
  );
};

const AppStoreFrame2 = ({ windowDimensions, src, alt }) => {
  return (
    <a
      href="https://apps.apple.com/us/app/novelty-today/id1563260378"
      target="_blank"
      rel="noreferrer"
    >
      <img style={{ left: windowDimensions.width / 2 - 133 }} className="AppStoreFrame2" src={src} alt={alt} />
    </a>
  );
};

const GoogleStoreFrame1 = ({ windowDimensions, src, alt }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.test.novelty"
      target="_blank"
      rel="noreferrer"
    >
      <img style={{ left: windowDimensions.width / 3 + 250 }} className="GoogleStoreFrame1" src={src} alt={alt} />
    </a>
  );
};

const GoogleStoreFrame2 = ({ windowDimensions, src, alt }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.test.novelty"
      target="_blank"
      rel="noreferrer"
    >
      <img style={{ left: windowDimensions.width / 2 + 20 }} className="GoogleStoreFrame2" src={src} alt={alt} />
    </a>
  );
};

export default App;
