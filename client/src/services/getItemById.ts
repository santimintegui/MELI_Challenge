import { APIURL } from "../constants";
import { IResponse, ItemByIdResponse } from "../types/Responses";

export const getItemById = async (id: string): Promise<IResponse<ItemByIdResponse>> => {
    return fetch(`${APIURL}/items/${id}`).then((response) =>
      response.json()
    );
  };