import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pop-up-offers',
  templateUrl: './pop-up-offers.component.html',
  styleUrls: ['./pop-up-offers.component.css']
})
export class PopUpOffersComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  targetDate: Date = new Date('2025-05-30T23:59:59');
  isPopupVisible: boolean = true;
  private intervalId: any;

  ngOnInit(): void {

    const lastShown = localStorage.getItem('popupLastShown');
    const today = new Date().toDateString(); 

    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);

    if (lastShown === today) {
    this.isPopupVisible = false;
  } else {
    this.isPopupVisible = true;
    localStorage.setItem('popupLastShown', today);
  }

  if (this.isPopupVisible) {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();               
    const distance = this.targetDate.getTime() - now; 

    if (distance > 0) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
  closePopup() {
    this.isPopupVisible = false; 
  }

}
