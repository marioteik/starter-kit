import { Injectable } from '@angular/core';
import { ListExampleModule } from '../list-example.module';

@Injectable({
  providedIn: ListExampleModule, // Tree-Shakeable provider
})
export class ListExampleService {
  constructor() {}
}
