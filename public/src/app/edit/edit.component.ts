import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //VARIABLES
  myProduct: any;
  updateErrors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) { 
    this.myProduct = {
      title: "",
      price: 0,
      imgUrl: ""
    }
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getProduct(params['id']).subscribe(product => {
        this.myProduct = product;
      })
    })
  }

  updateProduct() {
    console.log("Inside the updateProduct function in edit.component.ts")
    console.log(this.myProduct)
    this._httpService.updateProduct(this.myProduct._id, this.myProduct).subscribe(product => {
      if (product['errors']) {
        this.updateErrors = product;
      }
      else{
        this._router.navigate(['/products']);
      }
    })
  }

  deleteProduct(id) {
    this._httpService.deleteProduct(id).subscribe(product => {
      console.log(product)
    })
  }

  goList() {
    this._router.navigate(['/products']);
  }

}
