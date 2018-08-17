import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit 
{    
    constructor(private _productService: ProductService) 
    {
        //this.filteredProducts = this.products;
        //this.listFilter = "cart";

    }
    pageTitle: string = 'Product List';

    imageWidth: number = 20;
    imageMargin: number = 2;

    showImage: boolean = true;

    errorMeesage: string;


    filteredProducts: IProduct[];

    products: IProduct[]; // =getProducts();

    _lstFilter: string;
    get listFilter(): string {
        return this._lstFilter;
    }
    set listFilter(value: string) {
        this._lstFilter = value;
        this.filteredProducts = this.performFilter(this.listFilter);
        //this._lstFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //console.log('In OnInit');
        //this.products = this._productService.getProducts();

        this._productService.getProducts()
            .subscribe(products => {
                            this.products = products;
                            this.filteredProducts = this.products;
            },

                error => this.errorMeesage);

        //this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void
    {
        this.pageTitle = 'Product List: ' + message;
    }
}