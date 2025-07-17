import clsx from "clsx";
import styles from "./Contact.module.scss";
import images from "~/assets";
import { Github, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className={clsx(
        styles.contactSection,
        "grid",
        "md:grid-cols-3",
        "gap-4",
        "bg-secondary p-30 text-white border-b-1 border-b-pink-light"
      )}
    >
      <div
        data-aos="fade-up"
        className={clsx(styles.contactContent, "text-white pl-50 col-span-2")}
      >
        <h2
          className={clsx(
            styles.contactTitle,
            "text-3xl font-bold capitalize font-openSans pt-15 pb-25 bg-gradient-to-r from-pink-medium  to-mint-medium bg-clip-text text-transparent"
          )}
        >
          Let’s work together!
        </h2>
        <ul className={clsx(styles.contactList, "text-base font-normal py-20")}>
          <li className="mb-4 flex items-center py-10">
            <Phone className="mr-15" />
            0123456789
          </li>
          <li className="mb-4 flex items-center py-10">
            <MapPin className="mr-15" />
            Ho Chi Minh City, Vietnam
          </li>
          <li className="mb-4 flex items-center py-10">
            <Mail className="mr-15" /> thanhtuyen5134@gmail.com
          </li>
          <li className="mb-4 flex items-center py-10">
            <Github className="mr-15" />
            https://github.com/thanhtuyen3007
          </li>
        </ul>
        <span className="text-pink-light text-xl">Thanks for visiting!👋</span>
      </div>
      <div
        data-aos="fade-up"
        className={clsx(styles.contactImg, "sm:hidden md:block ")}
      >
        <img
          src={images.Mail}
          alt="Mail Image"
          className={clsx(styles.image, "w-full h-auto")}
        />
      </div>
    </section>
  );
};
