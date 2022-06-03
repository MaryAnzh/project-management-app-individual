import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

class CustomValidators {

  static passwordValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const controlValue = control.value;

      const result = {
        numberTest: !/[0-9]+/.test(controlValue),
        letterTest: !/[A-Za-z]+/.test(controlValue),
        upperCaseTest: !/[A-Z]+/.test(controlValue),
        lowerCaseTest: !/[a-z]+/.test(controlValue),
        specSymbolTest: !/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(controlValue),
      }

      const isValid = !result.numberTest
        && !result.letterTest
        && !result.upperCaseTest
        && !result.lowerCaseTest
        && !result.specSymbolTest

      return isValid ? null : result;
    };
  }

  static dateValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.value;

      const result = {
        date: (value: string): boolean => Date.parse(value) > Date.now(),
      }

      const isValid = result.date(controlValue);

      return isValid ? {date: true} : null

    }
  }

}

export { CustomValidators };
