import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewPersonDialogComponent } from '../new-person-dialog/new-person-dialog.component';

//Table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];
//

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  famousPeople: string[] = [];
  placeHolderName: string = "";
  //table
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  //
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.importFamousPeople().then(lofp => this.famousPeople = lofp).then(()=> this.changePlaholderName());
  }

  openAddPersonDialog(): void {
    this.dialog.open(NewPersonDialogComponent, {
      width: '450px'
    })
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
  email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'Va rog adaugati o adresa e de email';
      }
  
      return this.email.hasError('email') ? 'Adresa de email invalida' : '';
    }
}

