import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRequestService } from "@services/http-request.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  id: any 
  data: any = []
  total: number = 0
  limit: number = 10
  page: number = 0
  listPage: any = []
  totalPage: number = 0
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpRequestService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id']
    })
   }

  ngOnInit(): void {
    this.getData(this.limit, this.page)
  }

  getData(limit: number, page: number) {
    this.http.get("post/" + this.id + "/comment?limit=" + limit + "&page=" + page).then((response: any) => {
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

  previous() {
    let previousePage = this.page - 1;
    if(previousePage >= 0) {
      this.http.get("post/" + this.id + "/comment?limit=" + this.limit + "&page=" + previousePage).then((response: any) => {
        this.listPage = []
        this.data = response.data
        this.total = response.total
        this.totalPage = this.total / this.limit
        this.page = response.page
        for (let index = 0; index < this.totalPage; index++) {
          this.listPage.push(index+1)
        }
      })
    }
  }

  next() {
    let nextPage = this.page + 1;
    if(nextPage < this.totalPage) {
      this.http.get("post/" + this.id + "/comment?limit=" + this.limit + "&page=" + nextPage).then((response: any) => {
        this.listPage = []
        this.data = response.data
        this.total = response.total
        this.totalPage = this.total / this.limit
        this.page = response.page
        for (let index = 0; index < this.totalPage; index++) {
          this.listPage.push(index+1)
        }
      })
    }
  }

}
