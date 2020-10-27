import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  isLoading = false;
  userForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    active: new FormControl(false)
  });

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.crudService.readUser({ _id: id })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response) => {
        this.userForm.patchValue(response);
      });
  }

  onSubmit() {
    this.isLoading = true;
    this.crudService.updateUser(this.userForm.value)
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
