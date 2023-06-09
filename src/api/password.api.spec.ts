import { faker } from "@faker-js/faker";
import { IForm } from "@/interfaces/form.interface";
import {
  ENDPOINT_VALID_PASSWORDS,
  fetchPasswordValidation,
} from "./password.api";

const setupMockFetch = (response: Partial<Response>) => {
  globalThis.fetch = jest.fn(() => Promise.resolve(response as Response));
};

test("should call the api with correct values", async () => {
  setupMockFetch({ ok: true, status: 201 });

  const formValues: IForm = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
  };

  await fetchPasswordValidation(formValues);

  expect(fetch).toHaveBeenCalledWith(ENDPOINT_VALID_PASSWORDS, {
    method: "POST",
    body: JSON.stringify(formValues),
  });
});

test("should return positive message when request respond 201 ", async () => {
  setupMockFetch({ ok: true, status: 201 });

  const response = await fetchPasswordValidation({} as any);

  expect(response).toStrictEqual({
    ok: true,
    message: "Resultado enviado com sucesso!",
  });
});

test("should return negative message when request respond 400 ", async () => {
  setupMockFetch({ ok: false, status: 400 });

  const response = await fetchPasswordValidation({} as any);

  expect(response).toStrictEqual({
    ok: false,
    message: "Falha ao enviar resultado. Tente novamente",
  });
});
