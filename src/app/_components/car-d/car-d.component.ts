import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../../_models/car';

@Component({
  selector: 'app-car-d',
  standalone: false,
  templateUrl: './car-d.component.html',
  styleUrl: './car-d.component.css'
})
export class CarDComponent {
  @Input() car: Car = {model: '', brand: 0, year: '', price: 0, registerDate: ''};
  @Output() viewExpensiveCar = new EventEmitter<Car>();

  openExpensiveCarModal() {
    const expensiveCar = {...this.car, price: this.car.price};
    this.viewExpensiveCar.emit(expensiveCar);
  }
}
