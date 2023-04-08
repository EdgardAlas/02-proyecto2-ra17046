import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  IMAGE_CLOUDINARY,
  VIDEO_YOUTUBE,
} from '@constants/routes/directivas.const';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent implements OnInit {
  isError = false;
  msg = 'Resultado';
  dato = 'video';
  image = IMAGE_CLOUDINARY;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  get video() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_YOUTUBE);
  }
}
