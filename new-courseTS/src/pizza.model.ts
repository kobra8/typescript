export interface Pizza {
    name: string;
    price: number;
    size: string;
    status: Status
}

export enum Status {
    Ordered, //0
    Baked, //1
    Sold //2
}

export enum Size {
    small = "small",
    medium = "medium",
    large = "large"
}