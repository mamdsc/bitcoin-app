import { ValidationError } from 'yup';

interface IValidationErros {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): IValidationErros {
  const validation: IValidationErros = {};
  err.inner.forEach(error => {
    validation[error.path] = error.message;
  });

  return validation;
}
