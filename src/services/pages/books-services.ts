import { DataItem } from "../../components/books/types";
import { api } from "..";

const bookApi = "/book";

async function searchApi(term: string = ""): Promise<DataItem[]> {
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


async function newBook(book: DataItem) {
  try {
    const url = bookApi;
       
    const response = await api.post<DataItem[]>(url, book);
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
}

export {
  searchApi,
  newBook
}