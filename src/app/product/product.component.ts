import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

type NewType = Product;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) {

  }
  
  title = "Ürün Listesi";
  filterText = ""
  products!: Product[];//| undefined // eğer ürün hiç yazmasaydık any[] | undefined şeklinde yazacaktık.

  //benim bu yolumu globalleştirdim.
  //datamınız product türünde bir dizi olduğunu belirtmek için <Product[]> şeklinde kullandım.
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      })
    })
    

  };

  addToCard(product: NewType) {
    this.alertifyService.success(product.name + " added ")
  }

}
