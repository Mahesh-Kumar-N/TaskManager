import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatTable) table1: MatTable<any>;
  @Input() item:string
  
  CompletedTask = [

    { id: 3, name: 'create datasource', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'to create a datasource'},
    { id: 4, name: 'create workbook', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'to create a workbook'},
    { id: 5, name: 'add report', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'add report to the created workbook'},
   
  ];
  inprogressTask = [
    { id: 1, name: 'export datasource', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm', description:'export the created datasource'},
    { id: 2, name: 'schedule datasource', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'schedule the created datasource'},
    { id: 3, name: 'process the data', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'process the data before export'},
    
  ];

  pendingTask = [
    { id: 1, name: 'choose algorithm', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm', description:'choose the required algorithm to process data'},
    { id: 2, name: 'run the selected algorithm', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'run the algorithm to process the data'},
    { id: 5, name: 'verify the result', duration: '24/Jan/2021 9.00 am to 25/Jan/2021 1.00 pm' , description:'verify the result generated'},
    
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'name', 'description','duration'];
  displayedInProgressTaskColumns = [ 'name', 'description', 'completeTask'];
  displayedPendingTaskColumns = [ 'name', 'description', 'duration','moveToInprogress', 'deleteTask'];

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
  }

  calculateRemainingTime(time){
    const splitedTime = time.split("to");
  }

  deleteTask(row){
    const index = this.pendingTask.findIndex(data => data.id == row.id);
    this.pendingTask.splice(index,1);
    this.table1.renderRows();
    }

    moveToInprogress(row){     
      this.inprogressTask.push(row)
      this.deleteTask(row);
      this.changeDetectorRefs.detectChanges();
    }

    completeTask(row){
      this.CompletedTask.push(row);
     const index = this.inprogressTask.findIndex(data => data.id == row.id);
      this.inprogressTask.splice(index,1);
      this.table.renderRows();
      
    }
}
