import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Announcement } from './announcement';;
import { environment } from '../../environments/environment';

@Injectable()
export class AnnouncementService {
  private announcementUrl: string = environment.baseUrl + '/announcements';

  constructor(private http: HttpClient) { }

  getAnnouncements() {
    return this.http.get(this.announcementUrl, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getAnnouncement(id) {
    return this.http.get(this.announcementUrl, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        params: new HttpParams().set('id', id),
    });
  }
  
}
