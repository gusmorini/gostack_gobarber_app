import { ValidationError } from "yup";

interface PersonalErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError
): PersonalErrors {
  const validationErrors: PersonalErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
