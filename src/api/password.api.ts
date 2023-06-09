import { IForm } from "@/interfaces/form.interface";
import { IResponse } from "@/interfaces/response.interface";

export const ENDPOINT_VALID_PASSWORDS =
  "https://61e036950f3bdb0017934eb0.mockapi.io/api/valid-passwords/results";

export const fetchPasswordValidation = async (
  formValues: IForm
): Promise<IResponse> => {
  try {
    const response = await fetch(ENDPOINT_VALID_PASSWORDS, {
      method: "POST",
      body: JSON.stringify(formValues),
    });

    if (!response.ok) throw new Error("Erro ao se comunicar com a API");

    return {
      ok: true,
      message: "Resultado enviado com sucesso!",
    } as IResponse;
  } catch (error) {
    return {
      ok: false,
      message: "Falha ao enviar resultado. Tente novamente",
    } as IResponse;
  }
};
