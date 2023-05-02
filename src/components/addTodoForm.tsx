import React, { useEffect, useState } from "react";
import ButtonFilled from "./buttonFilled";

function AddTodoForm({ handleSubmitForm }: { handleSubmitForm: Function }) {
  const [todoInput, setTodoInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    validateInput(todoInput);
  }, [todoInput]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setTodoInput(event.target.value);
  }

  function validateInput(text: any) {
    if (!text) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    handleSubmitForm(todoInput);
    setTodoInput("");
  }

  return (
    <div className="flex w-full justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex w-full gap-4">
        <input
          onChange={handleInputChange}
          type="text"
          className="mt-1 flex flex-auto px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  invalid:border-pink-500 invalid:text-pink-600  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <ButtonFilled title="Add Todo" disabled={buttonDisabled} />
      </form>
    </div>
  );
}

export default AddTodoForm;
