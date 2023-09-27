import { Component, OnInit, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { Guest } from 'src/app/models/Guest';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})


export class GuestFormComponent implements OnInit{

  @Output() instance = new EventEmitter<Guest>();
  @Input() getGuestInfo: Subject<boolean> | undefined;
  @Input() guest: Guest | undefined;

  famousPeople: string[] = [];
  placeHolderName: string = "";
  newGuest: Guest;
  
  constructor() {
    this.newGuest = this.guest ?? new Guest();
  }
  ngOnInit(): void {
    this.getGuestInfo?.subscribe(
      {
        next: () => {
        this.emitGuestInfo()
        }
      }
      );
    this.importFamousPeople().then(lofp => this.famousPeople = lofp).then(()=> this.changePlaholderName());
  }

  emitGuestInfo() {
    if (!(this.email.invalid  || this.name.invalid))
    this.instance.emit(this.newGuest);
  }
  async importFamousPeople(): Promise<string[]> {
    return await fetch('../../../../assets/ListOfFamousPeople.txt').then(res => res.text()).then(txt => txt.split('\r\n'));
  }

  getRandomName(): string {
    return this.famousPeople[Math.floor(Math.random() * this.famousPeople.length)];
  }

  changePlaholderName(){
    let currentName = this.placeHolderName;
    do{
      this.placeHolderName = this.getRandomName()
    }while(currentName === this.placeHolderName);
  }
  email = new FormControl('', [Validators.email]);
  name = new FormControl('', [Validators.required]);

  getErrorMessage(control:string) {
    switch(control) { 
      case "email": {
        if (this.email.hasError('email')) {
          return 'Adresa de email invalida.';
        }
        break;
      }
      case "name": { 
        if (this.name.hasError('required')) {
          return 'Va rog sa va adaugati numele.';
        }
        break;
      } 
      default: { 
         return '';
         break; 
      }
   }
   return '';
  }
}
