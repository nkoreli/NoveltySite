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
    handleResize()
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", ()=>{console.log('sds')});
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: windowDimensions.width,
         height: '280vh',
        flex:1,
        overscrollBehavior:'fixed',
        overflow:'clip'
        //alignItems: "center",
      }}
    >

        <BackgroundMain src={"./images/Background.png"} alt={"Background"} />
        <PhoneImg1 src={"./images/Phone_Img1.png"} alt={"Phone_Img1"} />
        <NoveltyGlasses src={"./images/Glasses.png"} alt={"Glasses"} />
        <NoveltyText />
        <NoveltyPhrase />
        <NoveltyTodayApp />
        <PhoneImg2 src={"./images/Phone_Img2.png"} alt={"PhoneImg2"} />
        <PhoneImg3 src={"./images/Phone_Img3.png"} alt={"PhoneImg3"} />
        <NoveltyText2 />
        <NoveltyText3 />
        <NoveltyText4 />
        <CopyRight />
        <NoveltyDevelopment />
        <AppStoreFrame1
          src={"./images/AppStoreFrame1.png"}
          alt={"AppStoreFrame1"}
        />
        <AppStoreFrame2
          src={"./images/AppStoreFrame2.png"}
          alt={"AppStoreFrame2"}
        />
        <GoogleStoreFrame1
          src={"./images/GoogleStoreFrame1.png"}
          alt={"GoogleStoreFrame1"}
        />
        <GoogleStoreFrame2
          src={"./images/GoogleStoreFrame2.png"}
          alt={"GoogleStoreFrame2"}
        />

    </div>
  );
};



const BackgroundMain = ({ src, alt }) => {
  return <img className="BackgroundMain" src={src} alt={alt} />;
};
const PhoneImg1 = ({ src, alt }) => {
  return <img className="PhoneImg1" src={src} alt={alt} />;
};

const PhoneImg2 = ({ src, alt }) => {
  return <img className="PhoneImg2" src={src} alt={alt} />;
};

const PhoneImg3 = ({ src, alt }) => {
  return <img className="PhoneImg3" src={src} alt={alt} />;
};

const NoveltyGlasses = ({ src, alt }) => {
  return <img className="NoveltyGlasses" src={src} alt={alt} />;
};

// const text = ({style,text})=>{
//   return (
//     <h1 className={style}>{text} </h1>
//   );
// }

const NoveltyText = () => {
  return <h1 className="NoveltyText">novelty</h1>;
};

const NoveltyText2 = () => {
  return (
    <h2 className="NoveltyText2">
      Build meaningful relationships through giving and receiving authentic
      feedback.
    </h2>
  );
};

const NoveltyText3 = () => {
  return (
    <div>
      <h1 className="NoveltyText3">
        {" "}
        <span style={{ color: " #FFB000" }}>Track&nbsp;</span>your&nbsp;
        <span style={{ color: "#ff28b9" }}>relationship&nbsp;</span>
      </h1>
    </div>
  );
};
const NoveltyDevelopment = () => {
  return <h1 className="NoveltyDevelopment">development</h1>;
};
const NoveltyText4 = () => {
  return (
    <div>
      <h4 className="NoveltyText4">
        From&nbsp;
        <span style={{ color: "#FF8C00" }}>connections&nbsp;</span>
        to&nbsp;
        <span style={{ color: "#9932CC" }}>BFF&nbsp;</span>
      </h4>
    </div>
  );
};

const NoveltyPhrase = () => {
  return <h1 className="NoveltyPhrase">Meet people who share your passion</h1>;
};
const NoveltyTodayApp = () => {
  return <h6 className="NoveltyTodayApp">novelty today app</h6>;
};
const CopyRight = () => {
  return <h6 className="CopyRight">© 2021 Novelty</h6>;
};

const AppStoreFrame1 = ({ src, alt }) => {
  return (
    <a
      href="https://apps.apple.com/us/app/novelty-today/id1563260378"
      target="_blank"
      rel="noreferrer"
    >
      <img className="AppStoreFrame1" src={src} alt={alt} />
    </a>
  );
};

const AppStoreFrame2 = ({ src, alt }) => {
  return (
    <a
      href="https://apps.apple.com/us/app/novelty-today/id1563260378"
      target="_blank"
      rel="noreferrer"
    >
      <img className="AppStoreFrame2" src={src} alt={alt} />
    </a>
  );
};

const GoogleStoreFrame1 = ({ src, alt }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.test.novelty"
      target="_blank"
      rel="noreferrer"
    >
      <img className="GoogleStoreFrame1" src={src} alt={alt} />
    </a>
  );
};

const GoogleStoreFrame2 = ({ src, alt }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.test.novelty"
      target="_blank"
      rel="noreferrer"
    >
      <img className="GoogleStoreFrame2" src={src} alt={alt} />
    </a>
  );
};

export default App;
