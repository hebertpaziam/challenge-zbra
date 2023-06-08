"use client";

import "./MainForm.styles.scss";

import { useFormik } from "formik";
import validationSchema from "@/utils/validations";
import { useEffect, useState } from "react";
import { fetchPasswordValidation } from "@/api/password.api";
import { IResponse } from "@/interfaces/response.interface";
import { TextField } from "../TextField";

export type MainFormProps = {};

export default function MainForm() {
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

  const highlightPassword = () => {
    if (!!errors.password) return "error";
    else if (!!values.password) return "success";
    else return;
  };

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <h1 className="title">Valide sua senha</h1>

      <fieldset disabled={isSubmitting}>
        <TextField
          id="name"
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          value={values.name}
          error={errors.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        <TextField
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={values.email}
          error={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        <TextField
          id="password"
          type="number"
          label="Senha"
          placeholder="Digite sua senha"
          value={values.password}
          error={errors.password}
          success={!!values.password ? "Senha válida!" : undefined}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </fieldset>

      <div className="actions">
        <div className={`response ${!!response?.ok ? "-success" : "-error"}`}>
          {response?.message}
        </div>
        <button
          className="submitbtn"
          type="submit"
          disabled={!dirty || !isValid || isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
}
