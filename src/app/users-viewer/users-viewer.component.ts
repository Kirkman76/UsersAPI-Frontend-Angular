import { Component, OnInit } from '@angular/core';
import { UsersViewer } from '../shared/users-viewer.model';
import { UsersViewerService } from '../shared/users-viewer.service';

import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SummaryWindowComponent } from './summary-window/summary-window.component';


@Component({
  selector: 'app-users-viewer',
  templateUrl: './users-viewer.component.html',
  styles: [
  ]
})
export class UsersViewerComponent implements OnInit {

  constructor(public service: UsersViewerService, private dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.service.loadList();
  }

  ActiveChange(user: UsersViewer){
    user.active = !user.active
    this.service.UpdateUser(user).subscribe(
      res => console.log(res)
    )
  }

  TotalPopup(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "30%"
    dialogConfig.position = {
      // top: '5%',
      left: '25%'
    };
    const dr = this.dialog.open(SummaryWindowComponent, dialogConfig);

    dr.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
