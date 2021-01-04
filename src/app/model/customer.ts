import {Member} from './member';

export interface Customer {
    customerName: string;
    customerNRC: string;
    customerAddress: string;
    customerPhone: string;
    customerOccupation: string;
    id: number;
    member: Member;
}

