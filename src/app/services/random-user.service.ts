import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  registerData: any;
  userApi = "https://randomuser.me/api/?results=1000"
  followerApi = "https://randomuser.me/api/?results=10"
  storyApi = "https://randomuser.me/api/?results=15"

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(this.userApi)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getFollower() {
    return this.http.get<any>(this.followerApi)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getStory() {
    return this.http.get<any>(this.storyApi)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
