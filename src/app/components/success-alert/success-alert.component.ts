import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  number = 10;
  letter = 'winner';
  constructor() {
    setTimeout(() => {
      this.letter = 'loser';
    }, 2000);
  }

  onPotaPeteh() {
    console.log('im called');
    this.number = this.number + 100;
  }
  whatIsthisEvent(event: any) {
    console.log(event.target.value);
    this.letter = event.target.value;
    if (this.letter === '') {
      this.letter = 'loser';
    }
  }
}
