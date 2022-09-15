import {
  HeroIconContainer,
  HeroTextContainer,
  HomeContainer,
} from "./styledHome";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroTextContainer>
        <h1>
          Welcome to <span>React Challenge</span>
        </h1>
        <p>
          In this project I will complete some challenges to improve my skills.{" "}
          <br /> Resourse is:{" "}
          <a
            href="https://www.fastcomet.com/blog/what-can-i-build-with-react-js"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
        </p>
      </HeroTextContainer>
      <HeroIconContainer>
        <img src="/react.png" alt="" />
      </HeroIconContainer>
    </HomeContainer>
  );
};
