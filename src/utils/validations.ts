import * as Yup from "yup";

export const passwordSameAdjacents = (value: number) => {
  return value
    .toString()
    .split("")
    .some((char, i, array) => char === array[i - 1] || char === array[i + 1]);
};

export const passwordAscAdjacents = (value: number) => {
  return value
    .toString()
    .split("")
    .every(
      (char, i, array) => +char <= +array[i + 1] || i === array.length - 1
    );
};

export const passwordSixDigits = (value: number) => {
  return value.toString().length === 6;
};

export default Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .required("E-mail é obrigatório")
    .email("Endereço de e-mail inválido"),
  password: Yup.number()
    .required("Senha é obrigatória")
    .typeError("Senha deve conter apenas números")
    .test(
      "passwordSixDigits",
      "Senha deve conter 6 dígitos",
      passwordSixDigits
    )
    .min(184759, "Senha deve ser maior ou igual a 184759")
    .max(856920, "Senha deve ser menor ou igual a 856920")
    .test(
      "passwordSameAdjacents",
      "Senha deve conter 2 dígitos adjacentes iguais",
      passwordSameAdjacents
    )
    .test(
      "passwordAscAdjacents",
      "Senha deve conter dígitos numa sequência crescente ou de mesmo valor",
      passwordAscAdjacents
    ),
});
