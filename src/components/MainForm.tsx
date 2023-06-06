"use client";
import { useState } from "react";
import Action from "./Action";
import TextField from "./TextField";
import { IFeedBack } from "@/interfaces/feedback";

interface MainFormProps {}

export default function MainForm() {
  const [feedBack, setFeedBack] = useState<IFeedBack>();

  const handleNameChange = () => {};
  const handleEmailChange = () => {};
  const handlePasswordChange = () => {};
  const handleClick = () => {};

  return (
    <>
      <h1 className="mb-3 text-2xl">Valide sua senha</h1>
      <form className="flex flex-col gap-3 w-full h-full">
        <TextField
          type="text"
          placeholder="Nome"
          ariaLabel="Full name"
          onChange={handleNameChange}
        />
        <TextField
          type="text"
          placeholder="Email"
          ariaLabel="Email"
          onChange={handleEmailChange}
        />
        <TextField
          type="text"
          placeholder="Senha"
          ariaLabel="Password"
          onChange={handlePasswordChange}
        />
      </form>
      <div
        className="flex
                      flex-col md:flex-row
                      items-center 
                      justify-end
                      gap-3
                      w-full  
                      mt-auto md:mt-0"
      >
        {!!feedBack?.message && (
          <span className={feedBack.isError ? "text-red-500" : "text-green-500"}>
            {feedBack.message}
          </span>
        )}
        <Action onClick={handleClick}>Enviar</Action>
      </div>
    </>
  );
}
