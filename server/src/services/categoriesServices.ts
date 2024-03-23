import axios from 'axios';
import { API_URL } from '../constants';
import { MELICATEGORY } from '../types/categories';

export const fetchCategoryById = async (id: string) => {
    const response : MELICATEGORY = await axios.get(`${API_URL}/categories/${id}`).then(response => response.data);
    return response;
}