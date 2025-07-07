import clsx from "clsx";
import styles from "./HeroSection.module.scss";
import images from "~/assets";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className={clsx(
        styles.heroSection,
        "grid",
        "md:grid-cols-2",
        "gap-30",
        "bg-primary text-white border-b-2 border-dashed border-b-mint-medium"
      )}
    >
      <div
        data-aos="fade-right"
        className={clsx(
          styles.heroContent,
          "text-white flex flex-col justify-center items-start pl-50"
        )}
      >
        <h2 className={clsx(styles.title, "text-4xl font-medium capitalize")}>
          intermediate
        </h2>
        <h1
          className={clsx(
            styles.jobPosition,
            "text-5xl font-bold capitalize font-openSans pt-15 pb-25 bg-gradient-to-r from-pink-medium  to-mint-medium bg-clip-text text-transparent"
          )}
        >
          front-end developer
        </h1>

        <span
          className={clsx(
            styles.greeting,
            "inline-block w-fit text-base font-normal"
          )}
        >
          Welcome to my portfolio. I enjoy building clean and simple web
          interfaces.
        </span>

        <a
          type="button"
          href="#projects"
          className={clsx(styles.ctaButton, "btn-pink mt-20 w-fit text-base")}
        >
          See my project
        </a>
      </div>
      <div
        data-aos="fade-left"
        className={clsx(styles.heroImage, "hidden md:block")}
      >
        <img
          src={images.CodeTyping}
          alt="Hero Image"
          className={styles.image}
        />
      </div>
    </section>
  );
};
