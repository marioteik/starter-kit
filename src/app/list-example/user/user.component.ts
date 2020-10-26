import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '@app/models/user';
import { ExampleService, formData } from '../services/example.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  userEdit: IUser;
  userId: number;
  constructor(
    private exampleService: ExampleService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userForm = this.formBuilder.group({
      id: '',
      name: '',
      avatarUrl: '',
      followers: '',
      following: '',
      htmlUrl: '',
      login: '',
      type: '',
      siteAdmin: '',
      location: '',
      createdAt: '',
      updatedAt: '',
    });
  }

  ngOnInit(): void {
    if (1 <= this.userId) {
      this.exampleService.getUser(this.userId).subscribe(
        (user: formData) => this.userForm.setValue(user),
        (error) => console.warn(error)
      );
    }
  }

  onSubmit(formData: formData) {
    if (1 <= formData.id) {
      this.exampleService.updateUser(formData).subscribe(
        (user) => this.userForm.reset(),
        (error) => console.warn(error)
      );
    } else {
      this.exampleService.addUser(formData).subscribe(
        (user) => this.userForm.reset(),
        (error) => console.warn(error)
      );
    }
    history.back();
  }

  onGoBack() {
    this.router.navigate(['/list-example']);
  }
}
