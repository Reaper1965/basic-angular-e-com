import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products:any;
  constructor(private service:ProductsService,private route:Router){}
  delete(product:any){this.service.deletecart(product)}
  ngOnInit(){this.service.viewcart().subscribe((res)=>{this.products=res})}

  buy(){
    this.route.navigateByUrl("/Checkout")
  }


}
