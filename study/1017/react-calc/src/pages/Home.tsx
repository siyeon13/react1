import { FC } from "react";

type HomeProps = {
  title?: string;
};

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <div>
      <p>{title ?? "Home"}</p>
    </div>
  );
};

export default Home;
