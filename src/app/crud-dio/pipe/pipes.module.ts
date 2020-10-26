import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeUserPIPE } from './typeUser.pipe';
const PIPES = [TypeUserPIPE];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES],
})
export class PipesModule {}
