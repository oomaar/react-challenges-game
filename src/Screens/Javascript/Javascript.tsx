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

export type ArrayOfCars = {
  make: string;
  model: string;
  year: string;
  imgUrl: string;
};

export function buildArrayOfCars(): ArrayOfCars[] {
  return [
    {
      make: "Audi",
      model: "R8",
      year: "2015",
      imgUrl: "/img/cars/corvette.jpg",
    },
    {
      make: "Audi",
      model: "RS7",
      year: "2020",
      imgUrl: "/img/cars/corvette.jpg",
    },
    {
      make: "Ford",
      model: "GT",
      year: "2017",
      imgUrl: "/img/cars/corvette.jpg",
    },
    {
      make: "Ford",
      model: "Mustang",
      year: "2022",
      imgUrl: "/img/cars/corvette.jpg",
    },
    {
      make: "Porsche",
      model: "718",
      year: "2023",
      imgUrl: "/img/cars/corvette.jpg",
    },
    {
      make: "Porsche",
      model: "Macan",
      year: "2023",
      imgUrl: "/img/cars/porsche.jpg",
    },
    {
      make: "Porsche",
      model: "918 Spyder",
      year: "2023",
      imgUrl: "/img/cars/porsche.jpg",
    },
    {
      make: "Porsche",
      model: "911 Turbo S",
      year: "2023",
      imgUrl: "/img/cars/porsche.jpg",
    },
    {
      make: "Tesla",
      model: "Model X",
      year: "2023",
      imgUrl: "/img/cars/porsche.jpg",
    },
  ];
}
