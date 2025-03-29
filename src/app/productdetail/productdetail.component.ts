import { Component, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  @Input() id!:number
  selectedproduct!:any[]
  constructor(private ProductsService:ProductsService){}
ngOnInit(){
  this.ProductsService.getproductbyid(this.id).subscribe((data) => {
    this.selectedproduct =data ;

  });

  
}
}
