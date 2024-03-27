import { APIURL } from "../utils/constants";
import { IResponse, ItemsResponse, ItemByIdResponse } from "../types/Responses";

export const getItems = async (searchParams: string):Promise<IResponse<ItemsResponse>> => {
    return fetch(`${APIURL}/items?q=${searchParams}`).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error;
        }
      },
    );
  };

export const getItemById = async (id: string): Promise<IResponse<ItemByIdResponse>> => {
    return fetch(`${APIURL}/items/${id}`).then((response) =>{
        if (response.ok) {
        return response.json();
        }
        else {
        throw new Error;
        }
    }
    );
};