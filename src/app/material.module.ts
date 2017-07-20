import { NgModule } from '@angular/core';
import {
    MdIconModule,
    MdSidenavModule,
    MdDialogModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MdIconModule,
        MdSidenavModule,
        MdDialogModule,
        MdListModule,
        MdInputModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSlideToggleModule,
        MdProgressSpinnerModule
    ],
    exports: [
        MdIconModule,
        MdSidenavModule,
        MdDialogModule,
        MdListModule,
        MdInputModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSlideToggleModule,
        MdProgressSpinnerModule
    ],
})
export class MaterialModule { }
