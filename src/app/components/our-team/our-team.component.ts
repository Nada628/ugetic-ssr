import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent  {
  teamImages = [
    { src: '../../../assets/images/home/about-us/team1.jpg', alt: 'Team Member 1' },
    { src: '../../../assets/images/home/about-us/team2.jpg', alt: 'Team Member 2' },
    { src: '../../../assets/images/home/about-us/team3.jpg', alt: 'Team Member 3' },
    { src: '../../../assets/images/home/about-us/team4.jpg', alt: 'Team Member 4' }
  ];
 
}
