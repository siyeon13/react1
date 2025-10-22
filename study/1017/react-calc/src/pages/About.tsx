import { FC } from "react";

type AboutProps = {
  title?: string;
};

const About: FC<AboutProps> = ({ title }) => {
  return (
    <div>
      <p>{title ?? "About"}</p>
    </div>
  );
};

export default About;
