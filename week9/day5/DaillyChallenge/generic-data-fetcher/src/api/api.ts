import axios from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
    throw new Error(errorMessage);
  }
};