import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Figma, Github } from "lucide-react";
export const Footer = () => {
  return (
    <footer>
      <div
        className={clsx(
          styles.footer,
          " bg-secondary text-white flex justify-between"
        )}
      >
        <div className={clsx(styles.footerContent)}>
          <p className={clsx(styles.footerAuthor)}>
            2025, Designed & built by Thanh Tuyen
          </p>
        </div>
        <div className={clsx(styles.footerIcons, "flex gap-15")}>
          <Figma  color="#fff" fontSize={13} />
          <Github color="#fff" fontSize={13} />
        </div>
      </div>
    </footer>
  );
};
