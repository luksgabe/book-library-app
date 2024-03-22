import { DataItem } from "../../components/books/types";
import { api } from "..";

const bookApi = "/book";

export async function searchApi(term: string = ""): Promise<DataItem[]> {
    try {
      let url = `${bookApi}/find`;
      if(term != "") url += "/" + term;
      
      const response = await api.get<DataItem[]>(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  }