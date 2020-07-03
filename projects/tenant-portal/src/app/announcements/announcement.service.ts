import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { AnnouncementList } from './announcement-list/announcement-list.interface';
import { Announcement } from './announcement-detail/announcement.interface';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private announcementUrl: string = environment.baseUrl + '/announcements/';
  private announcements$: Observable<AnnouncementList> = null;

  constructor(private http: HttpClient) {}

  fetchAnnouncements(): Observable<AnnouncementList> {
    if (!this.announcements$) {
      this.announcements$ = this.http.get<AnnouncementList>(this.announcementUrl);
    }
    return this.announcements$;
  }

  fetchAnnouncement(url: string): Observable<Announcement> {
    return this.http.get<Announcement>(url);
  }

  clearCache() {
    this.announcements$ = null;
  }
}
