export type Item = {
    id: string;
    price: Price;
    title: string;
    free_shipping: boolean;
    picture: string;
    // extender esta interface?
    description?: string;
    sold_quantity?: number;
    condition?: string;
    location?: string;
};

export type Price = {
    amount: string;
    decimals: string;
};