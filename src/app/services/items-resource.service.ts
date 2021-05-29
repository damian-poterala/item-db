import { HttpClient, HttpHeaders     } from '@angular/common/http';
import { Injectable                  } from '@angular/core';
import { Observable, of              } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ItemsResourceService {
    constructor(
        private http: HttpClient
    ) {  }

    getItemsList(): Observable<Object> {
        return this.http.get(`${ environment.itemsUrl }/items-list.php`);
    }

    getItemDetails(id: number): Observable<Object> {
        return this.http.get(`${ environment.itemsUrl }/item-details.php?id=${ id }`);
    }
}