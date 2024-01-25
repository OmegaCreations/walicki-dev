import style from "./hero.module.css";

// Hero
const Hero: React.FC = () => {
  return (
    <div className={`${style.navBar} flex flex-col justify-center gap-16`}>
      <div className="text-center">
        <h1 className="text-[3em] font-black tracking-widest">
          Walicki Development
        </h1>
        <h2 className="text-lg font-normal pt-6">
          Your international <span className="subText">Web Developer</span>
        </h2>
      </div>
      <div className={`${style.cube} sphere-box`}>
        <div className={`${style.sphereOne} ${style.inner}`}></div>
        <div className={`${style.sphereTwo} ${style.inner}`}></div>
        <div className={`${style.sphereThree} ${style.inner}`}></div>
        <div className={`${style.sphereFour} ${style.inner}`}></div>
        <div className={`${style.sphereFive} ${style.inner}`}></div>
        <div className={`${style.sphereSix} ${style.inner}`}></div>
      </div>
    </div>
  );
};

export default Hero;
