import { useState, useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

export function useFormAndValidation() {
    
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const message = {
    name: "Введите корректное имя",
    email: "Введите корректный email",
    password: "Введите корректный пароль",
    movie: "Введите корректное название фильма",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (
      e.target.value === "" ||
      (e.target.value.match(/\s/g) !== null &&
        e.target.value.match(/\s/g).length === e.target.value.length)
    ) {
      e.target.setCustomValidity(message[name]);
    } else {
      e.target.setCustomValidity("");
    }

    if (name === "email") {
      if (!isEmail(value)) {
        e.target.setCustomValidity(message[name]);
      } else {
        e.target.setCustomValidity("");
      }
    }

    setErrors({ ...errors, [name]: e.target.validationMessage });

    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
