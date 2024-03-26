export type Item = {
    id: string;
    title: string;
    price: PRICE;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
}

export type MELIITEM = {
    id: string;
    title: string;
    currency_id: string;
    price: number;
    thumbnail: string;
    condition: string;
    shipping: {
        free_shipping: boolean;
    }
    initial_quantity: number;
    category_id: string;
    location: {city:{id: string, name: string}};
}

export type DESCRIPTIONRESPONSE = {
    plain_text: string;

}

type PRICE = {
    currency: string;
    amount: string;
    decimals: string;
}