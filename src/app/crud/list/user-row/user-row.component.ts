import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/@shared/entity/User';
import { CrudService } from '@app/crud/service/crud.service';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRowComponent implements OnInit {

  @Input() user: User;
  @Output() userDeleting = new EventEmitter();
  @Output() userDeleted = new EventEmitter();

  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigate([`/crud/${id}`]);
  }

  delete(id: string) {
    if (confirm(`Are you sure yout want to delete user ${id}?`)) {
      this.userDeleting.emit();
      this.crudService.deleteUser({ _id: id })
        .subscribe(() => {
          this.userDeleted.emit();
        });
    }
  }

}
