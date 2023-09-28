import { ChangeDetectorRef, OnInit } from '@angular/core';
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
//

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  
  //table
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-email', 'demo-food', 'demo-edit'/*, 'demo-symbol'*/];
  guests!: Observable<Guest[]>;
  //
  constructor(private cdr: ChangeDetectorRef,
    private dialog: MatDialog, 
    private guestService: GuestService) {
  }

  ngOnInit(): void {
    this.guests = this.guestService.guests;
  }

  openGuestDialog(id?:number): void {
    let guest = undefined;
    if (id){
      guest = this.guestService.guestById(id);
    }
    let dialogRef = this.dialog.open(NewPersonDialogComponent, {
      width: '450px', data: guest
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.cdr.detectChanges();
    })
  }
}

