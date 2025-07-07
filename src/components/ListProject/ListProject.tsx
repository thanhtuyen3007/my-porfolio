import clsx from "clsx";
import styles from "./ListProject.module.scss";
import { ItemProject } from "./ItemProject";
import { useEffect, useState } from "react";
import axios from "axios";

export const ListProject = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching collections:", error);
      });
  }, []);
  console.log(data);

  return (
    <div className={clsx(styles.listProject)}>
      {data.map((itemProject, index) => (
        <ItemProject key={index} data={itemProject} />
      ))}

      <a
        data-aos="zoom-in"
        className={clsx(styles.btnSeeMoreProject, "btn-outline mx-auto")}
        href="https://github.com/thanhtuyen3007"
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on GitHub
      </a>
    </div>
  );
};
