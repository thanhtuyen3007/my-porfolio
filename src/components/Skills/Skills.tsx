import skillData from "~/dataSkills.json";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full bg-secondary text-white py-30"
    >
      <h2 className="text-2xl capitalize font-bold py-15">
        Front-end Technologies I Have Experience
      </h2>
      <>
        {skillData.map((skill, index) => (
          <div
            key={index}
            style={{ backgroundColor: skill.color }}
            className="max-w-7xl w-full grid grid-cols-12 gap-20 px-10 py-30  my-20 rounded-lg"
          >
            {/* title */}
            <div className="col-span-4 flex items-center">
              <h3 className="text-black max-w-135 pl-20">{skill.title}</h3>
            </div>
            {/* skills */}
            <ul className="col-span-8 grid grid-cols-8 gap-15 items-center justify-center">
              {skill.skills.map((item, index) => (
                <li key={index} className="item-skill">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    </section>
  );
};
