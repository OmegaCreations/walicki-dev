import style from "./circlebg.module.css";
// CircleBg
const CircleBg: React.FC = () => {
  return (
    <div className={`hidden md:block ${style.circleBox}`}>
      <div className={style.circleBg}></div>
    </div>
  );
};

export default CircleBg;
