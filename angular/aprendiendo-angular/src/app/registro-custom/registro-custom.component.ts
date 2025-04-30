import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noSpecialCharactersValidator } from './noSpecialCharactersValidator';

@Component({
  selector: 'app-registro-custom',
  templateUrl: './registro-custom.component.html',
  styleUrls: ['./registro-custom.component.css']
})
export class RegistroCustomComponent implements OnInit {
  registroForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      nombreUsuario: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        noSpecialCharactersValidator() // Usa el validador personalizado
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  get nombreUsuarioControl() {
    return this.registroForm.get('nombreUsuario');
  }

  get emailControl() {
    return this.registroForm.get('email');
  }

  get passwordControl() {
    return this.registroForm.get('password');
  }
}
