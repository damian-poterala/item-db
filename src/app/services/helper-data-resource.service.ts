import { HttpClient, HttpHeaders     } from '@angular/common/http';
import { Injectable                  } from '@angular/core';
import { Observable, of              } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class HelperDataResourceService {
    constructor(
        private http: HttpClient
    ) {  }

    getCategories(): Observable<Object> {
        return this.http.get(`${ environment.helperUrl }/events/categories/categories-list.php`);
    }

    getQualityCategories(): Observable<Object> {
        return this.http.get(`${ environment.helperUrl }/events/quality-items/quality-items-list.php`);
    }

    getCurrencyList(): Observable<Object> {
        return this.http.get(`${ environment.helperUrl }/events/currency/currency-list.php`);
    }
}