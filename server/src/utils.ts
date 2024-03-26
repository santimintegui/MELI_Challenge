import { AUTHOR_LASTNAME, AUTHOR_NAME } from "./constants";
import { Item, MeliItem } from "./types/items";
import { SearchData } from "./types/search";

const author = {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME
}

const parseSearchData = ({results, filters}: SearchData) => {
    const itemsData = results;
    const categoriesFilter = filters.find(({ id }:any) => id === 'category');

    const items = _parseItemsData(itemsData);
    const categories = _parseCategoriesData(categoriesFilter);

    const parseData = {
        author,
        categories,
        items: items.splice(0, 4) // In this challenge I'm only showing 4 items
    }
    return parseData;
}

const parseItemData = (item: MeliItem, description: string) => {
    const parseItem = _parseItemsData([item]);
    const parseData = {
        author,
        item: {
            ...parseItem[0],
            sold_quantity: item.initial_quantity,
            description: description,
            category_id: item.category_id
            } as Item
        }
        return parseData;
}

const _parseItemsData = (items: MeliItem[]) => {
    return items.map(({ id, title, currency_id, price, thumbnail, condition, shipping, location }) => {
        const city = location?.city?.name;
        const priceParts = price.toString().split('.');
        return {
            id: id,
            title: title,
            price: {
                currency: currency_id,
                amount: priceParts[0],
                decimals: priceParts[1] || '00'
            },
            picture: thumbnail,
            condition: condition,
            free_shipping: shipping.free_shipping,
            location: city
        } as Item;
    });
}

const _parseCategoriesData = (cateogries: any) => {
    if(!cateogries){
        return [];
    }
    const {path_from_root} = cateogries.values[0];
    return path_from_root
    .map(({name}:any) => name);
}

export {
    parseItemData,
    parseSearchData
}