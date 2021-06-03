import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup   } from '@angular/forms';

import { ItemsResourceService      } from '../services/items-resource.service';
import { HelperDataResourceService } from '../services/helper-data-resource.service';

import * as moment from 'moment';

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
    // this.getHelperCategoriesList();
    // this.getHelperQualityCategories();
    // this.getHelperCurrencyList();
  }


  /** helper functions  */

  getHelperItemDetails(id: number) {
    this.itemsResourceService.getItemDetails(id).subscribe((data) => {
      this.itemDetails = data;
      console.log("%c Edit item details: ", "color: #338333", this.itemDetails);

      this.getHelperCategoriesList   (this.itemDetails.category)
      this.getHelperQualityCategories(this.itemDetails.buying_quality   , this.itemDetails.currency_quality);
      this.getHelperCurrencyList     (this.itemDetails.purchase_currency, this.itemDetails.selling_currency);

      this.editItemForm.get('itemName')                  ?.setValue(this.itemDetails.item_name);
      this.editItemForm.get('priceDayPremiere')          ?.setValue(this.itemDetails.price_day_premiere);
      this.editItemForm.get('numberOfItem')              ?.setValue(this.itemDetails.number_of_item);
      this.editItemForm.get('purchasePriceOneQuantity')  ?.setValue(this.itemDetails.purchase_price_one_quantity);
      this.editItemForm.get('sumPurchasingItem')         ?.setValue(this.itemDetails.sum_purchasing_item);
      this.editItemForm.get('currentPrice')              ?.setValue(this.itemDetails.current_price);
      this.editItemForm.get('boughtIn')                  ?.setValue(this.itemDetails.bought_in);
      this.editItemForm.get('currentNumberItemOnDisplay')?.setValue(this.itemDetails.current_number_item_on_display);
      this.editItemForm.get('currentNumberItemSold')     ?.setValue(this.itemDetails.current_number_item_sold);
      this.editItemForm.get('dayPremiere')               ?.setValue(moment(this.itemDetails.day_premiere)   .format('YYYY-MM-DD'));
      this.editItemForm.get('expirationDate')            ?.setValue(moment(this.itemDetails.expiration_date).format('YYYY-MM-DD'));
      this.editItemForm.get('dateOfIssue')               ?.setValue(moment(this.itemDetails.date_of_issue)  .format('YYYY-MM-DD'));
    });
  }

  getHelperCategoriesList(categoryName: string) {
    this.helperDataResourceService.getCategories().subscribe((data: any) => {
      this.categoriesList = data["records"];
      console.log("%c Categories list: ", "color: #338333", this.categoriesList);

      const category = this.categoriesList.filter((filter: any) => filter.name_pl == categoryName);
      this.editItemForm.get('category')?.setValue(category[0]);
    });
  }

  getHelperQualityCategories(buyingQuality: number, currQuality: number) {
    this.helperDataResourceService.getQualityCategories().subscribe((data: any) => {
      this.qualityCategories = data["records"];
      console.log("%c Quality categories list: ", "color: #338333", this.qualityCategories);

      const buyQuality     = this.qualityCategories.filter((filter: any) => filter.name_pl == buyingQuality); 
      const currentQuality = this.qualityCategories.filter((filter: any) => filter.name_pl == currQuality);
    
      this.editItemForm.get('buyingQuality')?.setValue(buyQuality[0]);
      this.editItemForm.get('currencyQuality')?.setValue(currentQuality[0]);
    });
  }

  getHelperCurrencyList(purchase: string, sale: string) {
    this.helperDataResourceService.getCurrencyList().subscribe((data: any) => {
      this.currencyList = data["records"];
      console.log("%c Currency list: ", "color: #338333", this.currencyList);

      const purchaseCurrency = this.currencyList.filter((filter: any) => filter.name == purchase);
      const sellingCurrency  = this.currencyList.filter((filter: any) => filter.name == sale);

      this.editItemForm.get('purchaseCurrency')?.setValue(purchaseCurrency[0]);
      this.editItemForm.get('sellingCurrency')?.setValue(sellingCurrency[0]);
    });
  }

}
