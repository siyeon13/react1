import { FC } from "react";
import Calculator from "../components/Calculator";

type HomeProps = {
  title?: string;
};

//const Calc: FC<HomeProps> = ({ title }) => {

function Calc({ title }: HomeProps) {
  console.log(title);
  return (
    <div>
      <p>{title ?? "Calc🟰✖️➕➖➗"}</p>
      <Calculator />
    </div>
  );
}

export default Calc;
