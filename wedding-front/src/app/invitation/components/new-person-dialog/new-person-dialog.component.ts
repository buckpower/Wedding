import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Guest } from '../../../models/Guest';

@Component({
  selector: 'app-new-person-dialog',
  templateUrl: './new-person-dialog.component.html',
  styleUrls: ['./new-person-dialog.component.scss']
})
export class NewPersonDialogComponent implements OnInit{

  guest: Guest;
  constructor(private dialogRef: MatDialogRef<NewPersonDialogComponent>) {
    this.guest = new Guest();
  }

  ngOnInit(): void {
    
  }

  save() {
    this.dialogRef.close(this.guest);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
