import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersViewerService } from 'src/app/shared/users-viewer.service';

@Component({
  selector: 'app-summary-window',
  templateUrl: './summary-window.component.html',
  styles: [
  ]
})
export class SummaryWindowComponent implements OnInit {

  numOfUsers: number = 0
  numOfActiveUsers: any = 0

  constructor(public service: UsersViewerService, public dialogRef: MatDialogRef<SummaryWindowComponent>) {
    if (service.list != null){
      this.numOfUsers = service.list.length
      this.numOfActiveUsers = service.list.filter(x => x.active == true).length
    }
    
   }

  ngOnInit(): void {
  }


  CloseDialog(){
    this.dialogRef.close();
  }

}
