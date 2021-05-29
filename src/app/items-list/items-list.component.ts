import { Component, OnInit } from '@angular/core';

import { ItemsResourceService      } from '../services/items-resource.service';
import { HelperDataResourceService } from '../services/helper-data-resource.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  itemsList             : any = [];
  categoriesList        : any = [];
  qualityCategoriesList : any = [];

  dataObjDetails : any = {};
  dataObjEdit    : any = {};

  showModalItemDetails : boolean = false;
  showModalItemEdit    : boolean = false;
  showModalItemCreate  : boolean = false;

  constructor(
    private itemsResourceService      : ItemsResourceService,
    private helperDataResourceService : HelperDataResourceService,
  ) { }

  ngOnInit(): void {
    this.getHelperItemList();
    this.getHelperCategories();
    this.getHelperQualityCategories();
  }


  /** helper functions */

  getHelperItemList() {
    this.itemsResourceService.getItemsList().subscribe((data: any) => {
      this.itemsList = data["records"];
      console.log("%c Items list: ", "color: #338333", this.itemsList);
    });
  }

  getHelperCategories() {
    this.helperDataResourceService.getCategories().subscribe((data: any) => {
      this.categoriesList = data["records"];
      console.log("%c Categories list: ", "color: #338333", this.categoriesList);
    });
  }

  getHelperQualityCategories() {
    this.helperDataResourceService.getQualityCategories().subscribe((data: any) => {
      this.qualityCategoriesList = data["records"];
      console.log("%c Quality categories list: ", "color: #338333", this.qualityCategoriesList);
    });
  }


  /** buttons event */

  openModalItemDetails(id: number) {
    this.showModalItemDetails = true;

    this.dataObjDetails = {
      itemId: id
    };
  }

  closeModalItemDetails() {
    this.showModalItemDetails = false;
    this.getHelperItemList();
  }

  openModalItemEdit(id: number) {
    this.showModalItemEdit = true;

    this.dataObjEdit = {
      itemId: id
    };
  }

  closeModalItemEdit() {
    this.showModalItemEdit = false;
    this.getHelperItemList();
  }

  openModalItemCreate() {
    this.showModalItemCreate = true;
  }

  closeModalItemCreate() {
    this.showModalItemCreate = false;
    this.getHelperItemList();
  }

}
