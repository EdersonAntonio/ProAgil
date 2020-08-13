import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos()
  {
    this.http.get('http://localhost:5003/api/values').subscribe( Response => {
        this.eventos = Response;
        console.log(Response);
      },
      Error => {
        console.log(Error);
      }
    );
  }

}
