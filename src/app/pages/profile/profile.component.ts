import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRequestService } from "@services/http-request.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: any 
  data: any = []
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpRequestService
  ) { 
    this.activateRoute.params.subscribe(params => {
      this.id = params['id']
  })
  }

  ngOnInit(): void {
    this.http.get("user/" + this.id).then((response: any) => {
      this.data = response
    })
  }

}
