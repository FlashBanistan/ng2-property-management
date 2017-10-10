export class Maintenance {
  constructor() {
    this.permission_to_enter = true;
  }
  description: string;
  permission_to_enter: boolean;
  created_on: string;
  created_by: string;
  lease: any;
  url: string;
}