import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../_services/car.service';

@Component({
  selector: 'app-register-car',
  standalone: false,
  templateUrl: './register-car.component.html',
  styleUrl: './register-car.component.css'
})
export class RegisterCarComponent implements OnInit{
  ngOnInit(): void {
    this.initializeForm();
  }

  carForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder, private carService: CarService){}
  
  initializeForm(){
    this.carForm = this.fb.group({
      brand: ['', [Validators.required, this.brandValidator]],
      model: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      year: [0, [Validators.required, Validators.min(1800), Validators.max(2030)]],
      price: [0, [Validators.required, Validators.min(0), Validators.max(1000000000)]],
      displacement: ["", [Validators.required]],
      carType: ["", [Validators.required]]
    })
  }

  brandValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === '' ? { 'invalidBrand': true } : null;
  }

  SubmitForm(){
    if(this.carForm.valid){
      this.carService.addCar(this.carForm.value).subscribe();
      this.carForm.reset();
    }
  }
    
}
