import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PaginatedResponse } from '../shared/interfaces/paginated-response.interface';
import { Announcement } from './announcement-detail/announcement.interface';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private announcementUrl: string = environment.baseUrl + '/announcements/';
  private announcements$: Observable<PaginatedResponse<Announcement>>;

  constructor(private http: HttpClient) {}

  fetchAnnouncements(): Observable<PaginatedResponse<Announcement>> {
    if (!this.announcements$) {
      this.announcements$ = this.http
        .get<PaginatedResponse<Announcement>>(`${this.announcementUrl}`)
        .pipe(shareReplay(1));
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
