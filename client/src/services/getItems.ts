import { APIURL } from "../constants";
import { IResponse, ItemsResponse } from "../types/Responses";

export const getItems = async (searchParams: string):Promise<IResponse<ItemsResponse>> => {
    return fetch(`${APIURL}/items?q=${searchParams}`).then(
      (response) => response.json()
    );
  };