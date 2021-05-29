import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() dataObj: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataObj);
  }

}
