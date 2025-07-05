import clsx from "clsx";
import styles from "./AboutMe.module.scss";
export const AboutMe = () => {
  return (
    <section
      className={clsx(
        styles.aboutSection,
        "bg-primary text-white text-center py-30"
      )}
    >
      <h2
        className={clsx(styles.title, "text-3xl font-openSans font-bold mb-20")}
      >
        Nice to meet you!
      </h2>
      <div className={clsx(styles.content)}>
        <p className={clsx(styles.text)}>
          Hi, I’m Thanh Tuyen – a{" "}
          <span className="text-pink-medium">Front-End Developer</span>{" "}
          passionate about building clean and responsive web interfaces.
        </p>
      </div>
      <div className={clsx(styles.content)}>
        <p className={clsx(styles.text)}>
          With a background in{" "}
          <span className="text-pink-medium">
            Electronics and Telecommunications
          </span>
          , I’ve developed strong analytical and technical thinking. I’m
          currently focused on front-end development using{" "}
          <span className="text-mint-medium">React</span>, and always strive to
          deliver user-friendly, high-performance products.
        </p>
      </div>
      <p className={clsx(styles.description, "text-gray-medium")}>
        "Curiosity drives me to keep learning and building better digital
        experiences."
      </p>
    </section>
  );
};
