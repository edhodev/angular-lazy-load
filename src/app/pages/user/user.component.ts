import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "@services/http-request.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data: any = []
  total: number = 0
  limit: number = 10
  constructor(
    private http: HttpRequestService
  ) { }

  ngOnInit(): void {
      this.getData(this.limit)
  }

  getData(limit: number) {
    this.http.get("user?limit=" + limit).then((response: any) => {
      this.data = response.data
      this.total = response.total
    })
  }
  show()
  {
    this.getData(this.limit)
  }

}
