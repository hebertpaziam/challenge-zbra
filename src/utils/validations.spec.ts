import { faker } from "@faker-js/faker";
import {
  passwordSameAdjacents,
  passwordAscAdjacents,
  passwordSixDigits,
} from "./validations";

test("should validate password same adjacents", () => {
  const differentAdjacents = +[2, 3, 4, 5, 6, 7]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .join("");

  expect(passwordSameAdjacents(differentAdjacents)).toBeFalsy();

  const seed = Array.from({ length: 5 }, () => faker.number.int({ max: 9 }));
  const sameAdjacents = +[seed[0], ...seed].join("");
  expect(passwordSameAdjacents(sameAdjacents)).toBeTruthy();
});

test("should validate password asc adjacents", () => {
  const seed = Array.from({ length: 3 }, () =>
    faker.number.int({ min: 2, max: 7 })
  );

  const descAdjacents = +[...seed, ...seed].sort((a, b) => b - a).join("");
  expect(passwordAscAdjacents(descAdjacents)).toBeFalsy();

  const ascAdjacents = +[...seed, ...seed].sort((a, b) => a - b).join("");
  expect(passwordAscAdjacents(ascAdjacents)).toBeTruthy();
});

test("should validate password six digits", () => {
  const lessThanSix = faker.number.int({ max: 99999 });
  expect(passwordSixDigits(lessThanSix)).toBeFalsy();

  const moreThanSix = faker.number.int({ min: 1000000 });
  expect(passwordSixDigits(moreThanSix)).toBeFalsy();

  const validSix = faker.number.int({ min: 100000, max: 999999 });
  expect(passwordSixDigits(validSix)).toBeTruthy();
});
