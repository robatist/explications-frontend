import { Component, Input, OnInit } from '@angular/core';
import { ExplicationService } from '../../services/explicationsBackend/explication-service.service';
import { Explication } from '../../models/explication';
import { AuthService } from '../../services/auth/auth.service';
import { UserStoreService } from '../../services/userStore/user-store.service';

@Component({
  selector: 'app-explication-list',
  templateUrl: './explication-list.component.html',
  styleUrls: ['./explication-list.component.css']
})
export class ExplicationListComponent implements OnInit {

  constructor(private explicationService: ExplicationService, private authService: AuthService, private userStoreService: UserStoreService) { }

  public explications: Explication[] = [];
  public role!: string;
  public fullName: string = "";

  selectedExplication?: any;

  ngOnInit(): void {
    this.explicationService.getExplicationsList().subscribe(
      {
        next: data => this.explications = data,
        error: e => console.log(e)
      }
    );

    this.userStoreService.getFullNameFromStore().subscribe(
      {
        next: data => {
          const fullNameFromToken = this.authService.getfullNameFromToken();
          this.fullName = data || fullNameFromToken;
        },
        error: e => console.log(e)
      }
    );

    this.userStoreService.getRoleFromStore().subscribe(
      {
        next: data => {
          const roleFromToken = this.authService.getRoleFromToken();
          this.role = data || roleFromToken;
        },
        error: e => console.log(e)
      }
    );
  }

  logout() {
    this.authService.signOut();
  }

}
