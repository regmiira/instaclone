import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-insta-fllower',
  templateUrl: './insta-fllower.component.html',
  styleUrls: ['./insta-fllower.component.scss']
})
export class InstaFllowerComponent implements OnInit {
  UserData :any;

  constructor(private followerApi : RandomUserService) { }

  getAllFollower() {
    this.followerApi.getFollower().subscribe(res => {
      this.UserData = res;
      console.log(this.UserData);
    })
  }

  ngOnInit(): void {
    this.getAllFollower();
  }

}
