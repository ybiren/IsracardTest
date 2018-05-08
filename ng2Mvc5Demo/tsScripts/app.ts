import { Component } from '@angular/core';
import {Httpsrv} from "./httpSrv";
import { GitHubComponent} from "./github";
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef, ViewChild } from '@angular/core';


@Component({
    selector: 'my-app',
	providers: [Httpsrv],
    templateUrl: 'Scripts/templates/app.html',
    styleUrls: ['Scripts/css/repo.css']
})
export class AppComponent {
    
	   isSpinner:boolean = false;
       srchCrit: string = "";

   	   @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert;
	   constructor(public httpSrv: Httpsrv, private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
	
	   }

      getData() {
         if (this.srchCrit.trim().length > 0) {
            this.isSpinner = true;
            this.dynamicInsert.clear();
            this.httpSrv.getData(this.srchCrit).then((data) => {
                data = JSON.parse(data);
                for (let i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    this.addItemToGallery(item.name, item.owner.avatar_url, true);
                }
                this.isSpinner = false;
            });
         }
      }

      getBookmarks() {
           this.isSpinner = true;
           this.dynamicInsert.clear();
           this.httpSrv.getBookmarks().then((data) => {
               data = JSON.parse(data);
               for (let i = 0; i < data.length; i++) {
                   this.addItemToGallery(data[i].name, data[i].avatarUrl,false);
               }
           });
          this.isSpinner = false;
       }

    private addItemToGallery(name, avatarUrl, showBMbtn) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(GitHubComponent);
        const ref = this.dynamicInsert.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
        let instance: GitHubComponent = ref.instance as GitHubComponent;
        instance.name = name;
        instance.avatar = avatarUrl;
        instance.showBMbtn = showBMbtn;
        instance.bmclick.subscribe(bookMark => this.httpSrv.addBookMark(bookMark).then((data) => {
            alert("Bookmark was added.");
        }));
    }
}