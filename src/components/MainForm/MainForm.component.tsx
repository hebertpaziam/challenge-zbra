"use client";

import "./MainForm.styles.scss";

import { useState } from "react";
import { useFormik } from "formik";

import validationSchema from "@/utils/validations";
import { fetchPasswordValidation } from "@/api/password.api";
import { IResponse } from "@/interfaces/response.interface";

import { TextField } from "../TextField";
import { AlertBox } from "../AlertBox";
import { ActionButton } from "../ActionButton";

export type MainFormProps = {};

export default function MainForm({}: MainFormProps) {
  const [response, setResponse] = useState<IResponse>();

  const {
    dirty,
    errors,
    isSubmitting,
    isValid,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema,
    initialValues: { name: "", email: "", password: "" },
    onSubmit: async () => {
      setResponse(undefined);

      const formValues = await new Promise<any>((resolve) =>
        setTimeout(() => resolve(values), 3000)
      );

      const response = await fetchPasswordValidation(formValues);
      setResponse(response);
    },
  });

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <h1 className="title">Valide sua senha</h1>

      <fieldset disabled={isSubmitting}>
        <TextField
          id="name"
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          disabled={isSubmitting}
          error={errors.name}
          value={values.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        <TextField
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          disabled={isSubmitting}
          error={errors.email}
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        <TextField
          id="password"
          type="number"
          label="Senha"
          placeholder="Digite sua senha"
          disabled={isSubmitting}
          error={errors.password}
          value={values.password}
          success={!!values.password ? "Senha válida!" : undefined}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </fieldset>

      <div className="footer">
        {response && <AlertBox response={response} />}

        <ActionButton
          type="submit"
          disabled={!dirty || !isValid || isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </ActionButton>
      </div>
    </form>
  );
}
