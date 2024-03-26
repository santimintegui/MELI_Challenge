import axios from 'axios';
import { API_URL } from '../constants';
import { DescriptionResponse, MeliItem } from '../types/items';
import { SearchData } from '../types/search';

export const fetchItems = async (query: string) => {
    const response: SearchData = await axios.get(`${API_URL}/sites/MLA/search?q=${query}`).then(response => response.data);;
    return response;
}

export const fetchItemById = async (id: string) => {
    const response: MeliItem = await axios.get(`${API_URL}/items/${id}`).then(response => response.data);;
    return response;
}

export const fetchDescriptionByItemId = async (id: string) => {
    const response: DescriptionResponse = await axios.get(`${API_URL}/items/${id}/description`).then(response => response.data);;
    return response;
}
