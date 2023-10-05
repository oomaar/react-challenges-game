import {
  JavaScriptTitle,
  JavvascriptContainer,
  JavvascriptSubContainer,
} from "./styled-Javascript";
import { Grouping } from "./Grouping/Grouping";

export const Javascript = () => {
  return (
    <JavvascriptContainer>
      <JavaScriptTitle>Javascript Gym</JavaScriptTitle>
      <JavvascriptSubContainer>
        <Grouping />
      </JavvascriptSubContainer>
    </JavvascriptContainer>
  );
};
