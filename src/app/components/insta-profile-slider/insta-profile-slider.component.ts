import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-insta-profile-slider',
  templateUrl: './insta-profile-slider.component.html',
  styleUrls: ['./insta-profile-slider.component.scss']
})
export class InstaProfileSliderComponent implements OnInit {
  storyData: any;

  constructor(private storyApi: RandomUserService) { }

  getUserStory() {
    this.storyApi.getStory().subscribe(res => {
      this.storyData = res;
    })
  }

  ngOnInit(): void {
    this.getUserStory()
  }

}
