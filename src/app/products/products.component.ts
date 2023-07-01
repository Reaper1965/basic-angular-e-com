import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;

  editcontent(product:any){product.isEdit=true}
  deletecontent(product:any){this.service.deleteproduct(product)}
  update(product:any){product.isEdit=false;this.service.updateproduct(product)}
  cart(product:any){this.service.addtocart(product);
  this.route.navigateByUrl("/user/cart")}
  constructor(private service:ProductsService,private route:Router){}
  ngOnInit()
  {
    this.service.viewproducts().subscribe((res)=>{this.products=res})
  }

}
