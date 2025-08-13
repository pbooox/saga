import {AbstractControl, FormGroup} from '@angular/forms';

export class FormUtils {
  static patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static patronClave = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&._-])[A-Za-z\\d@$!%*?&._-]{8,32}$';
  static patronSoloLetras = '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$';

  static mensajesPorCampo: Record<string, Partial<Record<string, string>>> = {
    correo: {
      required: 'El correo es obligatorio',
      email: 'Correo electrónico inválido'
    },
    contrasena: {
      required: 'La contraseña es obligatoria',
      pattern: 'La contraseña debe tener al menos 8 caracteres y contener un número y un carácter especial (también se recomienda usar mayúsculas y minúsculas).'
    },
    nombres: {
      pattern: 'Solo se permiten letras y espacios'
    },
    apellidos: {
      pattern: 'Solo se permiten letras y espacios'
    }
  };

  private static mensaje(campo: string, tipo: string, porDefecto: string): string {
    return this.mensajesPorCampo[campo]?.[tipo] ?? porDefecto;
  }


  static esCampoValido(form: FormGroup, campo: string): boolean | null {
    return (
      !! form.controls[campo].errors && form.controls[campo].touched
    )
  }
  static obtenerCampoError(form: FormGroup, campo: string): string | null {
    const control = form.controls[campo];
    if (!control) return null;

    const errors = control.errors ?? {};

    if (errors['required']) {
      return this.mensaje(campo, 'required', 'Este campo es obligatorio');
    }
    if (errors['minlength']) {
      return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
    }
    if (errors['maxlength']) {
      return `El campo debe tener máximo ${errors['maxlength'].requiredLength} caracteres`;
    }
    if (errors['min']) {
      return `Valor mínimo de ${errors['min'].min}`;
    }
    if (errors['max']) {
      return `Valor máximo de ${errors['max'].max}`;
    }
    if (errors['pattern']) {
      if (campo === 'nombres' || campo === 'apellidos') {
        return 'Solo se permiten letras y espacios';
      }
      if (campo === 'contrasena') {
        return 'Debe tener al menos 8 caracteres, incluir al menos un número y un carácter especial.';
      }
      return this.mensaje(campo, 'pattern', 'El formato ingresado no es válido');
    }

    return null;
  }

  static esCampoUnoIgualCampoDos(campoUno: string, campoDos: string) {
    return (formGroup: AbstractControl) => {
      const campoUnoValue = formGroup.get(campoUno)?.value;
      const campoDosValue = formGroup.get(campoDos)?.value;

      return campoUnoValue === campoDosValue ? null : { noEsIgual: true };
    }
  }

}
