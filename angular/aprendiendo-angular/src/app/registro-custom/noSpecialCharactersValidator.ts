import { AbstractControl, ValidatorFn } from '@angular/forms';

// Validador personalizado: no permitir caracteres especiales
export function noSpecialCharactersValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
    return hasSpecialChars ? { 'specialCharacters': true } : null;
  };
}
