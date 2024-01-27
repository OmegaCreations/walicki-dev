import style from "./experience.module.css";

// Experience
const Experience = ({
  data,
}: {
  data: { title: string; description: string; date: string };
}) => {
  return (
    <div className={style.experienceBox}>
      <div className="flex gap-8 flex-wrap">
        <span>{data.title}</span>
        <p className={style.date}>{data.date}</p>
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default Experience;
