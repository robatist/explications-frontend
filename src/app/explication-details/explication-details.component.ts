import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplicationService } from '../services/explication-service.service';
import { Explication } from '../explication';

@Component({
  selector: 'app-explication-details',
  templateUrl: './explication-details.component.html',
  styleUrls: ['./explication-details.component.css']
})
export class ExplicationDetailsComponent implements OnInit {
  
  route: ActivatedRoute = inject(ActivatedRoute);

  explicationIdToGet = -1;

  explication!: Explication;

  constructor(private explicationService: ExplicationService) {
    this.explicationIdToGet = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.explicationService.getExplicationById(this.explicationIdToGet).subscribe(
      {
        next: data => this.explication = data,
        error: e => console.log(e)
      }
    )
  }

}
