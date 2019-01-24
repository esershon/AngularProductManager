import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  creationErrors:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {
    this.newProduct={
      title:"",
      price:0,
    }
   }

  ngOnInit() {}

  createProduct() {
    console.log("I've called the createProduct function")
    this._httpService.postProduct(this.newProduct).subscribe(product=>{
      if (product['errors']) {
        this.creationErrors = product;
      }
      else{
        console.log(this.newProduct);
        console.log("I think I made a new product", product)
        this._router.navigate(['/products']);
      }
    })
  }

}
