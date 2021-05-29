import { Component, Input, OnInit } from '@angular/core';

import { ItemsResourceService } from '../services/items-resource.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() dataObj: any;

  constructor(
    private itemsResourceService : ItemsResourceService,
  ) { }

  ngOnInit(): void {
    this.getHelperItemDetails(this.dataObj.itemId);
  }

  getHelperItemDetails(id: number) {
    this.itemsResourceService.getItemDetails(id).subscribe((data: any) => {
      console.log("%c Item details: ", "color: #338333", data);
    });
  }

}
