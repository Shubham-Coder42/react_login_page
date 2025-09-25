import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 8;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded-xl bg-gradient-to-b from-stone-600 to-stone-800 shadow-md shadow-stone-900">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="Email"
          type="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex flex-col justify-between gap-4 items-center md:flex-row">
        <button type="button" className="text-amber-500 hover:text-amber-600">Create a new account</button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
