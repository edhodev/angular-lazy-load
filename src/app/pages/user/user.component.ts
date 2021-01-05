import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "@services/http-request.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data: any = []
  constructor(
    private http: HttpRequestService
  ) { }

  ngOnInit(): void {
      this.http.get("user").then((response: any) => {
        this.data = response.data
        console.log(this.data)
      })
  }

}
