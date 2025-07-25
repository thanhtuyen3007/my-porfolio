import skillData from "~/dataSkills.json";
import styles from "./Skills.module.scss";
import clsx from "clsx";

export const Skills = () => {
  return (
    <section
      id="skills"
      className={clsx(
        "flex flex-col items-center justify-center w-full bg-secondary text-white py-30 px-10",
        styles.skillsSection
      )}
    >
      <h2
        className={clsx(
          "text-2xl capitalize font-bold py-15",
          styles.skillsTitle
        )}
      >
        Front-end Technologies I Have Experience
      </h2>
      <>
        {skillData.map((skill, index) => (
          <div
            key={index}
            style={{ backgroundColor: skill.color }}
            className={clsx(
              "max-w-7xl w-full grid grid-cols-12 gap-20 px-10 py-10 md:py-30 my-20 rounded-lg",
              styles.skillGroup
            )}
          >
            {/* title */}
            <div
              className={clsx(
                "col-span-4 flex items-center",
                styles.skillTitle
              )}
            >
              <h3
                className={clsx(
                  "text-black font-bold  lg:pl-20",
                  styles.skillHeading
                )}
              >
                {skill.title}
              </h3>
            </div>
            {/* skills */}
            <ul
              className={clsx(
                "col-span-8 lg:grid-cols-8 gap-5 lg:gap-15 ",
                styles.skillList
              )}
            >
              <span
                key={index}
                className={clsx('text-black',styles.skillItem)}
              >
                {skill.skills}
              </span>
            </ul>
          </div>
        ))}
      </>
    </section>
  );
};
