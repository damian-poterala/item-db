import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup   } from '@angular/forms';

import { ItemsResourceService      } from '../services/items-resource.service';
import { HelperDataResourceService } from '../services/helper-data-resource.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() dataObj: any;

  editItemForm: FormGroup = new FormGroup({
    itemName                   : new FormControl(''),
    category                   : new FormControl(''),
    numberOfItem               : new FormControl(''),
    purchasePriceOneQuantity   : new FormControl(''),
    sumPurchasingItem          : new FormControl(''),
    priceDayPremiere           : new FormControl(''),
    dayPremiere                : new FormControl(''),
    currentPrice               : new FormControl(''),
    buyingQuality              : new FormControl(''),
    currencyQuality            : new FormControl(''),
    boughtIn                   : new FormControl(''),
    dateOfIssue                : new FormControl(''),
    currentNumberItemOnDisplay : new FormControl(''),
    currentNumberItemSold      : new FormControl(''),
    purchaseCurrency           : new FormControl(''),
    sellingCurrency            : new FormControl(''),
    expirationDate             : new FormControl(''),
    active                     : new FormControl(''),
  });

  itemDetails       : any = [];
  categoriesList    : any = [];
  qualityCategories : any = [];
  currencyList      : any = [];

  constructor(
    private itemsResourceService      : ItemsResourceService,
    private helperDataResourceService : HelperDataResourceService,
  ) { }

  ngOnInit(): void {
    this.getHelperItemDetails(this.dataObj.itemId);
    this.getHelperCategoriesList();
    this.getHelperQualityCategories();
    this.getHelperCurrencyList();
  }


  /** helper functions  */

  getHelperItemDetails(id: number) {
    this.itemsResourceService.getItemDetails(id).subscribe((data) => {
      this.itemDetails = data;
      console.log("%c Edit item details: ", "color: #338333", this.itemDetails);
    });
  }

  getHelperCategoriesList() {
    this.helperDataResourceService.getCategories().subscribe((data: any) => {
      this.categoriesList = data["records"];
      console.log("%c Categories list: ", "color: #338333", this.categoriesList);
    });
  }

  getHelperQualityCategories() {
    this.helperDataResourceService.getQualityCategories().subscribe((data: any) => {
      this.qualityCategories = data["records"];
      console.log("%c Quality categories list: ", "color: #338333", this.qualityCategories);
    });
  }

  getHelperCurrencyList() {
    this.helperDataResourceService.getCurrencyList().subscribe((data: any) => {
      this.currencyList = data["records"];
      console.log("%c Currency list: ", "color: #338333", this.currencyList);
    });
  }

}
