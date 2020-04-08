import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Usuario } from '../models/user';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  userForm: FormGroup;

	@Output() redirect:EventEmitter<any> = new EventEmitter();

	constructor(private formBuilder:FormBuilder) {}

	ngOnInit(): void {
		this.userForm = this.formBuilder.group({
		usuario: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
		nombre: ['',[Validators.required]],
		email: ['',[Validators.required, Validators.email]]
		});
	}

	get usuario() { return this.userForm.get('usuario'); }
	get nombre() { return this.userForm.get('nombre'); }
	get email() { return this.userForm.get('email'); }

	click(formDirective:FormGroupDirective): void{
		let user = new Usuario(this.usuario.value,this.nombre.value,this.email.value);
		this.redirect.emit(user);
		formDirective.resetForm();
		this.userForm.reset();
	}

}
