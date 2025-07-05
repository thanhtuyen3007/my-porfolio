import clsx from "clsx";
import styles from "./ListProject.module.scss";
import images from "~/assets";
type ItemProjectProps = {
  data: {
    title: string;
    image?: string;
    githubUrl?: string;
    liveDemoUrl?: string;
    description: string;
    features: string[];
    techStack?: string;
  };
};

export const ItemProject = ({ data }: ItemProjectProps) => {
  return (
    <article
      className={clsx(
        styles.itemProject,
        "bg-secondary mx-auto my-35 p-20 grid md:grid-cols-2 gap-10 text-black w-7xl border border-secondary-light rounded-4xl shadow-md"
      )}
    >
      <div className={clsx(styles.itemImg)}>
        <img
          className={clsx(styles.img, "rounded-4xl")}
          src={data.image || images.noImages}
          alt={data.title}
        />
      </div>
      <div
        className={clsx(styles.itemContent, "text-left text-white text-base")}
      >
        <h3
          className={clsx(
            styles.itemTitle,
            "text-xl font-bold capitalize pb-15"
          )}
        >
          {data.title}
        </h3>
        <div className={clsx(styles.itemLinks, "flex")}>
          {data.githubUrl && (
            <a href={data.githubUrl} className={clsx(styles.link, "btn-pink")} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {data.liveDemoUrl && (
            <a href={data.liveDemoUrl} className={clsx(styles.link, "btn-mint")} target="_blank" rel="noopener noreferrer">
              LiveDemo
            </a>
          )}
        </div>
        <p className={clsx(styles.itemDescription)}>
          {data.description}
        </p>
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
