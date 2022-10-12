import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .upperElement {
      color: white;
    }
  `]
})
export class AppComponent {
  showValue = true;
  passwordMessage = 'Secret Password = tuna';
  clicks = [];
  numberOfClicks = 0;
  toggleValue() {
    this.showValue = !this.showValue;
    if(this.showValue) {
      this.passwordMessage = 'Secret Password = tuna';
    } else {
      this.passwordMessage = 'Secret Password = ****';
    }
    this.numberOfClicks++;
    this.clicks.push(this.numberOfClicks);
  }
}
