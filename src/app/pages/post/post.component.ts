import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "@services/http-request.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: any = ""
  data: any = []
  total: number = 0
  limit: number = 10
  page: number = 0
  listPage: any = []
  totalPage: number = 0

  constructor(
    private http: HttpRequestService,
    private activateRoute: ActivatedRoute,
  ) { 
    this.activateRoute.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getData(this.limit, this.page)
  }

  getData(limit: number, page: number) {
    let url = "" 
    if(this.id == undefined) {
      url = 'post?limit=' + limit + "&page=" + page
    } else {
      url = 'user/' + this.id + '/post?limit=' + limit + "&page=" + page
    }
    this.http.get(url).then((response: any) => {
      this.listPage = []
      this.data = response.data
      this.total = response.total
      this.totalPage = this.total / limit
      this.page = response.page
      for (let index = 0; index < this.totalPage; index++) {
        this.listPage.push(index+1)
      }
    })
  }
  

  show()
  {
    this.getData(this.limit, 0)
  }

  changePage(item: number) {
    this.getData(this.limit, item-1)
  }

}
