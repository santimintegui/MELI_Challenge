import axios from 'axios';
import { API_URL } from '../constants';
import { MeliCategory } from '../types/categories';

export const fetchCategoryById = async (id: string) => {
    const response : MeliCategory = await axios.get(`${API_URL}/categories/${id}`).then(response => response.data);
    return response;
}