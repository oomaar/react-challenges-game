import {
  JavaScriptTitle,
  JavvascriptContainer,
  JavvascriptSubContainer,
} from "./styled-Javascript";

type ArrayOfCars = {
  make: string;
  model: string;
  year: string;
};

type GroupedArrayOfCars = Record<string, ArrayOfCars[]>;

type GroupedArrayOfCarsWithForLoop = { key: string; items: ArrayOfCars[] }[];

export const Javascript = () => {
  const resultWithReduce = buildArrayOfCars().reduce(
    (acc: GroupedArrayOfCars, item: ArrayOfCars) => {
      acc[item.make] = acc[item.make] || [];

      acc[item.make].push(item);

      return acc;
    },
    {} as GroupedArrayOfCars
  );
  console.log(
    "🚀 ~ file: Javascript.tsx:28 ~ Javascript ~ resultWithReduce:",
    resultWithReduce
  );

  const resultWithForLoop = () => {
    const resultWithForLoop: GroupedArrayOfCarsWithForLoop = [];

    for (const car of buildArrayOfCars()) {
      const key = car.make;

      if (!resultWithForLoop.find((item) => item.key === key)) {
        resultWithForLoop.push({
          key: car.make,
          items: buildArrayOfCars().filter((item) => item.make === key),
        });
      }
    }

    return resultWithForLoop;
  };
  console.log(
    "🚀 ~ file: Javascript.tsx:47 ~ resultWithForLoop ~ resultWithForLoop:",
    resultWithForLoop()
  );

  return (
    <JavvascriptContainer>
      <JavaScriptTitle>Javascript Gym</JavaScriptTitle>
      <JavvascriptSubContainer>
        <JavaScriptTitle>Array Group By</JavaScriptTitle>
      </JavvascriptSubContainer>
    </JavvascriptContainer>
  );
};

function buildArrayOfCars(): ArrayOfCars[] {
  return [
    {
      make: "Audi",
      model: "R8",
      year: "2015",
    },
    {
      make: "Audi",
      model: "RS7",
      year: "2020",
    },
    {
      make: "Ford",
      model: "GT",
      year: "2017",
    },
    {
      make: "Ford",
      model: "Mustang",
      year: "2022",
    },
    {
      make: "Porsche",
      model: "718",
      year: "2023",
    },
    {
      make: "Porsche",
      model: "Macan",
      year: "2023",
    },
    {
      make: "Porsche",
      model: "918 Spyder",
      year: "2023",
    },
    {
      make: "Porsche",
      model: "911 Turbo S",
      year: "2023",
    },
    {
      make: "Tesla",
      model: "Model X",
      year: "2023",
    },
  ];
}
