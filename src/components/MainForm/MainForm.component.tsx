"use client";

import "./MainForm.styles.scss";

import { useFormik } from "formik";
import validationSchema from "@/utils/validations";
import { useEffect, useState } from "react";
import { fetchPasswordValidation } from "@/api/password.api";
import { IResponse } from "@/interfaces/response.interface";

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
      debugger;
      setResponse(response);
    },
  });

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <h1 className="title">Valide sua senha</h1>

      <fieldset disabled={isSubmitting}>
        <div className={`group ${!!errors.name && "-error"}`}>
          <div className="control">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Digite seu nome"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div className="feedback">{errors.name}</div>
        </div>

        <div className={`group ${!!errors.email && "-error"}`}>
          <div className="control">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="feedback">{errors.email}</div>
        </div>
        <div className={`group ${!!errors.password ? "-error" : "-success"}`}>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Digite sua senha"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div className="feedback">
            {errors.password || (!!values.password && "Senha válida!")}
          </div>
        </div>
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
