import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPersonDialogComponent } from '../new-person-dialog/new-person-dialog.component';
import { GuestService } from 'src/app/services/guest.service';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/models/Guest';

//Table
export interface PeriodicElement {
  name: string;
  position: number;
  email: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', email: 1.0079, symbol: 'H'}
];
//

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  
  //table
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight',/*, 'demo-symbol'*/];
  dataSource = ELEMENT_DATA;

  guests!: Observable<Guest[]>;
  //
  constructor(private dialog: MatDialog, 
    private guestService: GuestService) {
  }

  ngOnInit(): void {
    this.guests = this.guestService.guests;
    this.guestService.loadAll();
  }

  openAddPersonDialog(): void {
    let dialogRef = this.dialog.open(NewPersonDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    })
  }

  
}

