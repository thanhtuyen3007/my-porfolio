import clsx from "clsx";
import styles from "./ListProject.module.scss";
import { ImagesProject } from "../ImagesProject/ImagesProject";
type ItemProjectProps = {
  data: {
    title: string;
    github?: string;
    live?: string;
    description: string;
    features: string[];
    techStack?: string;
    images: string[];
  };
};

export const ItemProject = ({ data }: ItemProjectProps) => {
  return (
    <article
      data-aos="fade-up"
      className={clsx(
        styles.itemProject,
        "bg-secondary w-full max-w-full mx-auto my-35 p-20  md:grid grid-cols-2  gap-x-35 text-black border border-secondary-light rounded-4xl shadow-md"
      )}
    >
      <ImagesProject imagesSlider={data.images} title={data.title}/>
      <div
        className={clsx(
          styles.itemContent,
          "md:basic-1/2 text-left text-white text-base"
        )}
      >
        <h2
          className={clsx(
            styles.itemTitle,
            "text-xl font-bold capitalize pb-15"
          )}
        >
          {data.title}
        </h2>
        <div className={clsx(styles.itemLinks, "flex gap-30 pb-20")}>
          {data.github && (
            <a
              href={data.github}
              className={clsx(styles.link, "btn-pink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {data.live && (
            <a
              href={data.live}
              className={clsx(styles.link, "btn-mint")}
              target="_blank"
              rel="noopener noreferrer"
            >
              LiveDemo
            </a>
          )}
        </div>
        <p className={clsx(styles.itemDescription)}>{data.description}</p>
        <ul className={clsx(styles.itemFeatures, "list-disc pl-10 mt-10")}>
          {data.features.map((feature, idx) => (
            <li key={idx} className={clsx(styles.itemFeature, "py-10")}>
              {feature}
            </li>
          ))}
          {data.techStack && (
            <li className={clsx(styles.itemFeature, "py-10")}>
              Tech stack: {data.techStack}
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};
