import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() changeDetectionExample: string;

  menuHidden = true;

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;

    this.cd.detectChanges();
  }

  logout() {}

  get username(): string | null {
    return null;
  }
}
