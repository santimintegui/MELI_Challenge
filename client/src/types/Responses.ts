import { Item } from "./Item";

export type ItemByIdResponse = {
    author: Author;
    item: Item;
    categories: string[];
};

export type ItemsResponse = {
    author: Author;
    categories: string[];
    items: Item[];
 };

type Author = {
    name: string;
    lastname: string;
};

export interface IResponse<T> {
    data: T;
    message: string;
}