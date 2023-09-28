import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Guest } from '../../../models/Guest';
import { GuestFormComponent } from '../guest-form/guest-form.component';
import { Subject } from 'rxjs';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-new-person-dialog',
  templateUrl: './new-person-dialog.component.html',
  styleUrls: ['./new-person-dialog.component.scss']
})
export class NewPersonDialogComponent implements OnInit{

  guestSubject: Subject<boolean>;
  guest: Guest;
  
  constructor(private dialogRef: MatDialogRef<NewPersonDialogComponent>,
    private guestService: GuestService) {
    this.guest = new Guest();
    this.guestSubject = new Subject<boolean>();
  }

  ngOnInit(): void {
    
  }

  save() {
    //this.dialogRef.close(this.child);
    this.guestSubject.next(true);
    //this.dialogRef.close(this.guest);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getGuest($event: Guest) {
    console.log("in guest", event)
    this.guestService.addGuest($event).then(() => this.dialogRef.close($event));
  }

}
