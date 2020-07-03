import { Announcement } from '../announcement-detail/announcement.interface';

export interface AnnouncementList {
  count: number;
  next: string;
  previous: string;
  results: Announcement[];
}
