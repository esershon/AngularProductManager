import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService 
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    })
    this.displayAllProducts();
  }

  displayAllProducts(){
    this._httpService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id){
    this._httpService.deleteProduct(id).subscribe(product => {
      console.log(product)
      this.displayAllProducts();
    })
  }

  goEdit(id) {
    this._router.navigate(['/products/edit/'+id]);
  }
 
}
