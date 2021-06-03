import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { HttpClientModule        } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule             } from '@angular/forms';
import { ReactiveFormsModule     } from '@angular/forms';

import { TableModule       } from 'primeng/table';
import { ButtonModule      } from 'primeng/button';
import { TooltipModule     } from 'primeng/tooltip';
import { DropdownModule    } from 'primeng/dropdown';
import { PanelModule       } from 'primeng/panel';
import { DialogModule      } from 'primeng/dialog';
import { InputTextModule   } from 'primeng/inputtext';
import { CalendarModule    } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';


import { AppRoutingModule     } from './app-routing.module';
import { AppComponent         } from './app.component';
import { AuthComponent        } from './auth/auth.component';
import { ItemsListComponent   } from './items-list/items-list.component';
import { EditItemComponent    } from './edit-item/edit-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CreateItemComponent  } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ItemsListComponent,
    EditItemComponent,
    ItemDetailsComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    TableModule,
    ButtonModule,
    TooltipModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
