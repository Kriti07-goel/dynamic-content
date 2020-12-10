import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../../widgets/material/material.module';
import { GeneralEffects } from './general.effects';


@NgModule({
    imports: [
        MaterialModule,
        EffectsModule.forFeature([ GeneralEffects ])
    ]
})
export class GeneralModule {

}
