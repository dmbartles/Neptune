import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class CreativeService {

  private apiurl = environment.apiurl;

  constructor(private http:HttpClient) { }

  listCreatives(){
    return this.http.get(this.apiurl + 'api/creatives');
  }

  getCreative(id){
    return this.http.get(this.apiurl + 'api/creatives/' + id);
  }

  deleteCreative(id){
    return this.http.delete(this.apiurl + 'api/creatives/' + id);
  }

  createCreative(creative){
     return this.http.post(this.apiurl + 'api/creatives/submitcreative', creative);
  }

  updateCreative(id, creative){
     return this.http.put(this.apiurl + 'api/creatives/' + id, creative);
  }
}
