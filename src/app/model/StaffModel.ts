export interface StaffModel{
  id?: number;
  staffName: string;
  staffNRCNo: string;
  password?: string;
  staffEmail: string;
  staffPhone: string;
  staffAddress: string;
  role: string;
}

export const ROLES: string[] = ['USER', 'ADMIN'];
