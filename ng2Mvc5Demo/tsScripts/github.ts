import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'github-dtls',
    templateUrl: 'Scripts/templates/github.html',
    styleUrls: ['Scripts/css/repo.css']
})

export class GitHubComponent {
    @Input() name: string;
    @Input() avatar: string;
    @Input() showBMbtn: boolean;
    @Output() bmclick: EventEmitter<any> = new EventEmitter<any>();

    handleEvent() {
        this.bmclick.emit({ name: this.name, avatar: this.avatar });
    }

    constructor() {
    }


}