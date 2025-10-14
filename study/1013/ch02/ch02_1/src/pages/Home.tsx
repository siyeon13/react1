import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <div>
      <Greeting name="이재희" age={33} />
      <Greeting name="React 입문자" />
    </div>
  );
}