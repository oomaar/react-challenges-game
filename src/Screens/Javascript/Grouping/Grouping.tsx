import { useMemo, useState } from "react";
import {
  Buttons,
  Card,
  CardCarInfo,
  CardCarMakeText,
  CardImg,
  CardInfo,
  CardsContainer,
  GroupedCardCarMakeText,
} from "./styled-Grouping";
import { JavaScriptTitle } from "../styled-Javascript";
import { ArrayOfCars, buildArrayOfCars } from "../Javascript";

type GroupedArrayOfCars = Record<string, ArrayOfCars[]>;

type GroupedArrayOfCarsWithForLoop = { key: string; items: ArrayOfCars[] }[];

export const Grouping = () => {
  const [arrayState, setArrayState] = useState<"flat" | "reduce" | "loop">(
    "flat"
  );

  const resultWithReduce = useMemo(
    () =>
      buildArrayOfCars().reduce(
        (acc: GroupedArrayOfCars, item: ArrayOfCars) => {
          acc[item.make] = acc[item.make] || [];

          acc[item.make].push(item);

          return acc;
        },
        {} as GroupedArrayOfCars
      ),
    []
  );

  const resultWithForLoop = useMemo(() => {
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
  }, []);

  const flatCards = useMemo(
    () =>
      buildArrayOfCars().map((card, index) => (
        <Card key={index}>
          <CardImg src={card.imgUrl} alt={`${card.make}-${card.model}`} />
          <CardInfo>
            <CardCarMakeText>{card.make}</CardCarMakeText>
            <CardCarInfo>
              <p>{card.model}</p>
              <span>{card.year}</span>
            </CardCarInfo>
          </CardInfo>
        </Card>
      )),
    []
  );

  const reduceCards = useMemo(
    () =>
      Object.keys(resultWithReduce).map((key) => (
        <div key={key} style={{ padding: "24px" }}>
          <GroupedCardCarMakeText>{key}</GroupedCardCarMakeText>
          <CardsContainer>
            {Object.values(resultWithReduce).map((item) =>
              item.map(
                (card, index) =>
                  card.make === key && (
                    <Card key={index}>
                      <CardImg
                        src={card.imgUrl}
                        alt={`${card.make}-${card.model}`}
                      />
                      <CardInfo>
                        <CardCarMakeText>{card.make}</CardCarMakeText>
                        <CardCarInfo>
                          <p>{card.model}</p>
                          <span>{card.year}</span>
                        </CardCarInfo>
                      </CardInfo>
                    </Card>
                  )
              )
            )}
          </CardsContainer>
        </div>
      )),
    [resultWithReduce]
  );

  const loopedCards = useMemo(
    () =>
      resultWithForLoop.map((card) => (
        <div key={card.key} style={{ padding: "24px" }}>
          <GroupedCardCarMakeText>{card.key}</GroupedCardCarMakeText>
          <CardsContainer>
            {card.items.map((item, index) => (
              <Card key={index}>
                <CardImg src={item.imgUrl} alt={`${item.make}-${item.model}`} />
                <CardInfo>
                  <CardCarMakeText>{item.make}</CardCarMakeText>
                  <CardCarInfo>
                    <p>{item.model}</p>
                    <span>{item.year}</span>
                  </CardCarInfo>
                </CardInfo>
              </Card>
            ))}
          </CardsContainer>
        </div>
      )),
    [resultWithForLoop]
  );

  return (
    <div>
      <JavaScriptTitle>Array Group By</JavaScriptTitle>
      <Buttons>
        <button onClick={() => setArrayState("flat")}>Flat Array</button>
        <button onClick={() => setArrayState("reduce")}>
          Group: Reduce Array
        </button>
        <button onClick={() => setArrayState("loop")}>
          Group: Loop Over Array
        </button>
      </Buttons>
      <CardsContainer>{arrayState === "flat" && flatCards}</CardsContainer>
      {arrayState === "reduce" && reduceCards}
      {arrayState === "loop" && loopedCards}
    </div>
  );
};
