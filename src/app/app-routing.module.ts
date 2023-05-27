import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CockpitComponent } from './cockpit/cockpit.component';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe', component: RecipesComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'server', component: CockpitComponent},
  {path: 'server/:id/:name', component: CockpitComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
