import clsx from "clsx";
import styles from "./Projects.module.scss";
import { ListProject } from "~/components/ListProject/ListProject.tsx";
export const Projects = () => {
  return (
    <section id="projects"
      className={clsx(
        styles.projectsSection,
        "bg-primary text-white text-center p-30"
      )}
    >
      <h2
        className={clsx(styles.title, "lg:text-3xl text-xl font-openSans font-bold lg:mb-20")}
      >
        Here are a few of my favorite projects:
      </h2>
      <div className={clsx(styles.content)}>
        <ListProject />
      </div>
    </section>
  );
};
