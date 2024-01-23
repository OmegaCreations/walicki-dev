import style from "./hero.module.css";

// Hero
const Hero: React.FC = () => {
  return (
    <div>
      <div className={style.cube}>
        <div className={(style.left, style.item)}></div>
        <div className={(style.right, style.item)}></div>
        <div className={(style.bottom, style.item)}></div>
        <div className={(style.top, style.item)}></div>
        <div className={(style.back, style.item)}></div>
        <div className={(style.front, style.item)}></div>
        <div className={(style.sphereOne, style.inner, style.item)}></div>
        <div className={(style.sphereTwo, style.inner, style.item)}></div>
        <div className={(style.sphereThree, style.inner, style.item)}></div>
        <div className={(style.sphereFour, style.inner, style.item)}></div>
        <div className={(style.sphereFive, style.inner, style.item)}></div>
        <div className={(style.sphereSix, style.inner, style.item)}></div>
      </div>
    </div>
  );
};

export default Hero;
