import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/recipes/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() ingredientAdd = new EventEmitter<Ingredient>();
  onAddItem() {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdd.emit(newIngredient);
  }
}
