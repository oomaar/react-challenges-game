import { HomeContainer } from "./styledHome";

export const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to React Challenge</h1>
      <p>
        In this project I will complete some challenges to improve my skills.{" "}
        <br /> Resourse is:
        <a
          href="https://www.fastcomet.com/blog/what-can-i-build-with-react-js"
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>
      </p>
    </HomeContainer>
  );
};
