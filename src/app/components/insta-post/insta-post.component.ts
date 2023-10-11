import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-insta-post',
  templateUrl: './insta-post.component.html',
  styleUrls: ['./insta-post.component.scss']
})
export class InstaPostComponent implements OnInit {

  postData :any;

  constructor(private followerApi : RandomUserService) { } //Dependency injection

  getAllPost() {
    this.followerApi.getUser().subscribe(res => {
      this.postData = res; // result rakhyo 
      console.log(this.postData); 
    })
  }

  ngOnInit(): void {
    this.getAllPost(); 
  }
}
