import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  id: string;
  request: RequestUpdate;
  constructor(private userService: UserService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe((res) => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: '',
      };
    });
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe((res) => {
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name}, Job: ${res.job}`);
    });
  }
}
