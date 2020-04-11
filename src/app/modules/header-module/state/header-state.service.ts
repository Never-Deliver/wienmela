import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class HeaderStateService {
    private _tabs:BehaviorSubject<any> = new BehaviorSubject<any>(null);
    get tabs(): Observable<any>{
        return this._tabs.asObservable();
    }
    constructor(){

    }
    setTabs(tabs:any){
        this._tabs.next(tabs);
    }
   
    
}