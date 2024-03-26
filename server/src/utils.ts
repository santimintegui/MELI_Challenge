import { AUTHOR_LASTNAME, AUTHOR_NAME } from "./constants";
import { CATEGORY } from "./types/categories";
import { Item, MELIITEM } from "./types/items";
import { SEARCHDATA } from "./types/search";

const author = {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME
}

const parseSearchData = ({results, available_filters}: SEARCHDATA) => {
    const itemsData = results;
    const categoriesData = available_filters.find(({ id }) => id === 'category')?.values || [];

    const items = _parseItemsData(itemsData);
    const categories = _parseCategoriesData(categoriesData);

    const parseData = {
        author,
        categories,
        items
    }
    return parseData;
}

const parseItemData = (item: MELIITEM, description: string) => {
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

const _parseItemsData = (items: MELIITEM[]) => {
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

const _parseCategoriesData = (cateogries: CATEGORY[]) => {
    return cateogries
    .sort((a, b) => b.results - a.results)
    .map(({id}) => id);
}

export {
    parseItemData,
    parseSearchData
}