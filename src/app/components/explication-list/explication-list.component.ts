import { Component, Input, OnInit } from '@angular/core';
import { ExplicationService } from '../../services/explication-service.service';
import { Explication } from '../../explication';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-explication-list',
  templateUrl: './explication-list.component.html',
  styleUrls: ['./explication-list.component.css']
})
export class ExplicationListComponent implements OnInit{
  
  constructor(private explicationService: ExplicationService, private authService: AuthService) {}

  explications: Explication[] = [];
  
  selectedExplication?: any;

  ngOnInit(): void {
    this.explicationService.getExplicationsList().subscribe(
      {
        next: data => this.explications = data,
        error: e => console.log(e)
      }
    );
  }

  logout() {
    this.authService.signOut();
  }

}
