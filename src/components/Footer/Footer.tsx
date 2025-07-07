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
          <a className={clsx(styles.iconLink)} href="https://www.figma.com/files/team/1408357051359792332/recents-and-sharing?fuid=1408357047142682670">
            <Figma color="#fff" fontSize={13} />
          </a>
          <a className={clsx(styles.iconLink)} href="https://github.com/thanhtuyen3007">
            {" "}
            <Github color="#fff" fontSize={13} />
          </a>
        </div>
      </div>
    </footer>
  );
};
