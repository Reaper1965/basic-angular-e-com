import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  productid:any;
  productname:any;
  productimage:any;
  productdetails:any;
  productcost:any;
  productobj:any

  constructor(private service:ProductsService, private route:Router){}
  addproduct()
  {
    this.productobj={
      productid:this.productid,
      productname:this.productname,
      productimage:this.productimage,
      productdetails:this.productdetails,
      productcost:this.productcost
    }
    this.service.addproduct(this.productobj);
    this.route.navigateByUrl("/user/products")
  }

}
