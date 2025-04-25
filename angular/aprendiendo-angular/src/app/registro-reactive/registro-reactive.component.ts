import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-reactive',
  templateUrl: './registro-reactive.component.html',
  styleUrls: ['./registro-reactive.component.css']
})
export class RegistroReactiveComponent implements OnInit {
  registroForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
      // Aquí podrías enviar los datos del formulario al servidor
    } else {
      console.log('Formulario inválido');
    }
  }

  get nombreControl() {
    return this.registroForm.get('nombre');
  }

  get emailControl() {
    return this.registroForm.get('email');
  }

  get passwordControl() {
    return this.registroForm.get('password');
  }
}
