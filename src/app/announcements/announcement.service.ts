import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import { Announcement } from './announcement';;
import { environment } from '../../environments/environment';

@Injectable()
export class AnnouncementService {
  private _announcementUrl: string = environment.baseUrl + '/announcements';
  private _announcements: Observable<any> = null;

  constructor(private http: HttpClient) { }

  getAnnouncements() {
    if (!this._announcements) {
      this._announcements = this.http.get(this._announcementUrl)
        .publishReplay(1)
        .refCount()
    }
    return this._announcements;
  }

  getAnnouncement(id) {
    return this.http.get(this._announcementUrl);
  }

  clearCache() {
    this._announcements = null;
  }
  
}
