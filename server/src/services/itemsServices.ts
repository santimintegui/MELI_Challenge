import axios from 'axios';
import { API_URL } from '../constants';
import { DESCRIPTIONRESPONSE, MELIITEM } from '../types/items';
import { SEARCHDATA } from '../types/search';

export const fetchItems = async (query: string) => {
    const response: SEARCHDATA = await axios.get(`${API_URL}/sites/MLA/search?q=${query}`).then(response => response.data);;
    return response;
}

export const fetchItemById = async (id: string) => {
    const response: MELIITEM = await axios.get(`${API_URL}/items/${id}`).then(response => response.data);;
    return response;
}

export const fetchDescriptionByItemId = async (id: string) => {
    const response: DESCRIPTIONRESPONSE = await axios.get(`${API_URL}/items/${id}/description`).then(response => response.data);;
    return response;
}
