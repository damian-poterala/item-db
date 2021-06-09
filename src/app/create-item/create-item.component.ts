import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

import { ItemsResourceService      } from '../services/items-resource.service';
import { HelperDataResourceService } from '../services/helper-data-resource.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  createItemForm: FormGroup = new FormGroup({
    itemName                   : new FormControl('', [ Validators.required ]),
    category                   : new FormControl('', [ Validators.required ]),
    numberOfItem               : new FormControl('', [ Validators.required ]),
    purchasePriceOneQuantity   : new FormControl('', [ Validators.required ]),
    sumPurchasingItem          : new FormControl('', [ Validators.required ]),
    priceDayPremiere           : new FormControl('', [ Validators.required ]),
    dayPremiere                : new FormControl('', [ Validators.required ]),
    currentPrice               : new FormControl('', [ Validators.required ]),
    buyingQuality              : new FormControl('', [ Validators.required ]),
    currencyQuality            : new FormControl('', [ Validators.required ]),
    boughtIn                   : new FormControl('', [ Validators.required ]),
    dateOfIssue                : new FormControl('', [ Validators.required ]),
    currentNumberItemOnDisplay : new FormControl('', [ Validators.required ]),
    currentNumberItemSold      : new FormControl('', [ Validators.required ]),
    purchaseCurrency           : new FormControl('', [ Validators.required ]),
    sellingCurrency            : new FormControl('', [ Validators.required ]),
    expirationDate             : new FormControl('', [ Validators.required ]),
    active                     : new FormControl('', [ Validators.required ]),
  });

  itemDetails       : any = [];
  categoriesList    : any = [];
  qualityCategories : any = [];
  currencyList      : any = [];

  constructor(
    private itemsResourceService      : ItemsResourceService,
    private helperDataResourceService : HelperDataResourceService,
    private messageService            : MessageService,
  ) { }

  ngOnInit(): void {
    this.getHelperCategoriesList();
    this.getHelperQualityCategories();
    this.getHelperCurrencyList();
  }


  /** helper functions  */

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


  /** events on buttons */

  save() {
    if(this.createItemForm?.invalid) {
      this.messageService.add({ key: 'error', severity: 'error', summary: 'Błąd danych formularza', detail: 'Uzupełnij poprawnie formularz!' });
      return;
    }
  }

}
