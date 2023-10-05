import {
  JavaScriptTitle,
  JavvascriptContainer,
  JavascriptSubContainer,
  JavascriptContainerHeader,
  JavascriptContainerHeaderLI,
  JavascriptContainerHeaderUL,
} from "./styled-Javascript";
import { Grouping } from "./Grouping/Grouping";
import { useState } from "react";
import { Mapping } from "./Mapping/Mapping";

export const Javascript = () => {
  type JavascriptExercise = "Grouping" | "Mapping";

  const [javascriptExercise, setJavascriptExercise] =
    useState<JavascriptExercise>("Grouping");

  return (
    <JavvascriptContainer>
      <JavascriptContainerHeader>
        <JavaScriptTitle>Javascript Gym</JavaScriptTitle>
        <JavascriptContainerHeaderUL>
          <JavascriptContainerHeaderLI>
            <button onClick={() => setJavascriptExercise("Grouping")}>
              Grouping
            </button>
          </JavascriptContainerHeaderLI>
          <JavascriptContainerHeaderLI>
            <button onClick={() => setJavascriptExercise("Mapping")}>
              Mapping
            </button>
          </JavascriptContainerHeaderLI>
        </JavascriptContainerHeaderUL>
      </JavascriptContainerHeader>
      <JavascriptSubContainer>
        {javascriptExercise === "Grouping" && <Grouping />}
        {javascriptExercise === "Mapping" && <Mapping />}
      </JavascriptSubContainer>
    </JavvascriptContainer>
  );
};
