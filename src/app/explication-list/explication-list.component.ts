import { Component, Input, OnInit } from '@angular/core';
import { ExplicationService } from '../services/explication-service.service';
import { Explication } from '../explication';

@Component({
  selector: 'app-explication-list',
  templateUrl: './explication-list.component.html',
  styleUrls: ['./explication-list.component.css']
})
export class ExplicationListComponent implements OnInit{
  
  explications: Explication[] = [];
  
  selectedExplication?: any;

  constructor(private explicationService: ExplicationService) {}

  ngOnInit(): void {
    this.explicationService.getExplicationsList().subscribe(
      {
        next: data => this.explications = data,
        error: e => console.log(e)
      }
    );
  }
}
