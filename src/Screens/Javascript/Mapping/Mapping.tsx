import { ArrayOfCars, buildArrayOfCars } from "../Javascript";
import { MappingContainer } from "./styled-Mapping";

export const Mapping = () => {
  /*
    ! methods
    * set
    * get
    * delete
    * clear
    * has
    ! Properties
    * size
    */
  const myMap = new Map<"Yes" | "No", ArrayOfCars>();

  for (let i = 0; i < buildArrayOfCars().length; i++) {
    if (buildArrayOfCars()[i].year === "2023") {
      myMap.set("Yes", buildArrayOfCars()[i]);
    } else {
      myMap.set("No", buildArrayOfCars()[i]);
    }
  }

  console.log(myMap);
  console.log(myMap.entries());

  return <MappingContainer>Mapping</MappingContainer>;
};
