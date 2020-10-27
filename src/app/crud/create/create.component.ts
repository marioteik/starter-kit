import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  isLoading = false;
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    active: new FormControl(false)
  });

  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    this.crudService.createUser(this.userForm.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response: any) => {
        this.router.navigate(['/crud']);
      });
  }

}
