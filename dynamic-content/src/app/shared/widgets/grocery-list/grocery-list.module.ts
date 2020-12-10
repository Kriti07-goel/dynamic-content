import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { GroceryListComponent } from './grocery-list.component';

@NgModule({
    declarations: [
        GroceryListComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        GroceryListComponent
    ]
})
export class GroceryListModule {

}