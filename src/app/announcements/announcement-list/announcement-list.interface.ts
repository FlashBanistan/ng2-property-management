import { Announcement } from '../announcement.interface';

export interface AnnouncementList {
  count: number;
  next: string;
  previous: string;
  results: Announcement[];
}
