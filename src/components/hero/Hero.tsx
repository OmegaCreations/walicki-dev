import style from "./hero.module.css";

// Hero
const Hero: React.FC = () => {
  return (
    <div>
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
