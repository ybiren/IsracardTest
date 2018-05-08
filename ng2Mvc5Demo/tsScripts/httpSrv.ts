import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class Httpsrv {

	constructor(private http: Http) { }

	getData(srchCrit) {
        let url = "https://api.github.com/search/repositories?q=" + srchCrit;
		return this.sendReq(url);
	}

	getBookmarks() {
        let url = `/BookMark/Get`;
		return this.sendReq(url);
	}

    addBookMark(bookMark) {
        let url = `/BookMark/Add?name=${bookMark.name}&avatarUrl=${bookMark.avatar}`;
        return this.sendReq(url);
    }

    private sendReq(url) {
        return this.http.get(url).toPromise().then(this.extractData).catch(this.handleErrorPromise);
  }
	
  private extractData(res: Response | any) {
      let body = res._body;
	  return body;
	}

	private handleErrorPromise(error: Response | any) {
		console.log(error);
		alert(error.status);
		console.error(error.message || error);
		return Observable.throw(error.message || error);
	}

}