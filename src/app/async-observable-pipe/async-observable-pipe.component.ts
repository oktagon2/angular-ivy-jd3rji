import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, } from 'rxjs' 
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  vehicles =   interval(2200).pipe( map(i=> [{name: 'car ' + i},{name: 'car ' + ( i+1) }]));


}