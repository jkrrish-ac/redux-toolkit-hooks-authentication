export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    compnay: ICompany;

}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;

}

export interface IGeo {
    lat : string;
    lng: string
}

export interface ICompany {
    name: string;
    catchPharase: string;
    bs: string;
}


