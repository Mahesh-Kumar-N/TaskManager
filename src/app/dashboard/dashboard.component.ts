import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // {id:"createTask", title: 'Create Task',description:'sample', cols: 2, rows: 1 },
          {id:"inprogressTask", title: 'Inprogress Task',description:'sample', cols: 2, rows: 1 },
          {id:"pendingTask", title: 'Pending Task',description:'sample', cols: 2, rows: 1 },
          {id:"completedTask", title: 'Completed Task',description:'sample', cols: 2, rows: 1}
        ];
      }

      return [
        // {id:"createTask", title: 'Create Task',description:'sample', cols: 2, rows: 1 },
        {id:"inprogressTask", title: 'Inprogress Task',description:'sample', cols: 2, rows: 1 },
        {id:"pendingTask", title: 'Pending Task',description:'sample', cols:2, rows: 1},
        {id:"completedTask", title: 'Completed Task',description:'sample', cols: 2, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  onLogout(){
    this.router.navigate(['/logout']);
  }
}
