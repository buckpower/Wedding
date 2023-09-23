import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit{
  famousPeople: string[] = [];
  placeHolderName: string = "";
  
  ngOnInit(): void {
    this.importFamousPeople().then(lofp => this.famousPeople = lofp).then(()=> this.changePlaholderName());
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
