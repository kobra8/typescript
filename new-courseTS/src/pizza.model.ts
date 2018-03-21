export interface Pizza {
    name: string;
    price: number | string; //Union type czyli typ nymber lub typ string
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

export type SizeKey = keyof typeof Size; // Definicja typu, który tworzy automatycznie UNION na podstawie enuma Size np: "small" | "medium" | "large"


// Wzorzec Dyscriminated Unions
export interface Cash {
    type: 'cash', // wyróżnik
    currency: string
}

export interface DebitCard {
    type: 'debitCard', // wyróżnik
    code: string
}

export interface OnlinePayment {
    type: 'onlinePayment', // wyróżnik
    bankAccount: number
}

export type PaymentMethod = Cash | DebitCard | OnlinePayment; // Payment method to alias we wzorcu Dyscriminated Unions

//koniec wzorca