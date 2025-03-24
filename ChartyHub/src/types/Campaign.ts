export interface ILocation {
    latitude: number;
    longitude: number;
    address: string;
}

export interface ICampaign {
    _id?: string;
    title: string;
    description: string;
    image?: string;
    goalAmount: number;
    currentAmount?: number;
    currency?: string;
    status?: string;
    startDate?: Date;
    endDate: Date;
    category?: string;
    location: ILocation;
    creator: any;
    donations?: any[];
    beneficiaries?: any[];
    createdAt?: Date;
    updatedAt?: Date;
    isFeatured?: boolean;
    volunteers?: any[];
    tags?: string[];
    isDeleted?: boolean;
    impactReport?: string;
}
