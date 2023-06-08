import { faker } from "@faker-js/faker";
import { passwordSameAdjacents, passwordAscAdjacents } from "./validations";

test("should password same adjacents be invalid", () => {
  const value = faker.number.int();
  expect(passwordSameAdjacents(value)).toBeFalsy();
});

test("should password asc adjacents be invalid", () => {
  const value = faker.number.int();
  expect(passwordAscAdjacents(value)).toBeFalsy();
});
