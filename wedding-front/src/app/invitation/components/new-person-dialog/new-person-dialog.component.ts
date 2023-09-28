import { Component, OnInit, Inject, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  
  constructor(
    public dialogRef: MatDialogRef<NewPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Guest,
    private guestService: GuestService,
    private cdr: ChangeDetectorRef
    ) 
    {
      this.guest = data ?? new Guest();
      this.guestSubject = new Subject<boolean>();
  }

  ngOnInit(): void {
    console.log("Guest on init:", this.guest)
  }
  save() {
    //this.dialogRef.close(this.child);
    this.guestSubject.next(true);
    //this.dialogRef.close(this.guest);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  upsertGuest($event: Guest) {
    console.log("in guest", $event)
    this.guestService.upsertGuest($event).then(() => this.dialogRef.close($event));
  }

}
