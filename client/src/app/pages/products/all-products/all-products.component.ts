import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  Products: any = [];
  searchProduct
  isVisible: boolean = false;
  selectedFile: File = null;
  constructor(private api: RestApiService, private displayError: NzNotificationService) { }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  ngOnInit(): void {
    this.getProducts()
  }

  // getting all products
  getProducts() {
    this.api.getAllProducts().subscribe(res => {
      this.Products = res;
      this.Products = this.Products.result
      console.log(this.Products)
    }),
      (err => {
        this.displayError.create(
          'error', 'Error', err.message
        )
      })
  }

  // searching product by its name
  searchByName() {
    if (this.searchProduct == "") {
      return this.getProducts()
    } else {
      this.Products = this.Products.filter(res => {
        return res.name.toLowerCase().match(this.searchProduct.toLowerCase())
      })
    }
  }

  // reset after search result found
  resetSearchBox() {
    this.searchProduct = "";
    return this.getProducts();
  }

  // getting selected file and store it
  onSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0]
  }

  // open model
  showModal(): void {
    this.isVisible = true;
  }

  // close model
  handleCancel(): void {
    this.isVisible = false;
  }

  addFile() {
    // uploading file logic
    if (this.selectedFile == null) {
      this.displayError.create(
        'error', 'Error', 'Select file first!',
      )
    }
    else {
      const formData = new FormData();
      formData.append('csv', this.selectedFile, this.selectedFile.name);
      this.api.uploadCsv(formData).subscribe((res: any) => {
        this.displayError.create(
          'success', 'Success', res.message,
        );
        this.handleCancel()
        setTimeout(() => {
          location.reload()
        }, 1000);
      }),
        ((err: any) => {
          this.displayError.create(
            'error', 'Error', err.message,
          )
        })
    }
  }

}
