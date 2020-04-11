import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { HeaderStateService } from '../state/header-state.service';

@Injectable()
export class HeaderFacadeService {
  
    constructor(private http:HttpClient,
                private headerState:HeaderStateService){

    }
    bindTabs(){
        this.loadTabs().subscribe(d=>{
            if(!_.isUndefined(d) && d){
                this.headerState.setTabs(d);
            }
        });
    }
    private loadTabs():Observable<any>{
        return this.http.get<any>('/assets/json/app.tabs.json',{withCredentials:true}).pipe(tap(data=>{

        }));
    }
    
}