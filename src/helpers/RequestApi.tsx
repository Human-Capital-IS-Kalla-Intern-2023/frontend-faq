// Library & Package Import
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_DEV_URL_API;

const handleErrorResponse = (error: any, action: string) => {
  console.error(`Error: saat ${action}`, error);
  throw error;
};

const RequestApi = async (
  method: string,
  url: string,
  data: any = {},
  headers: any = {},
  action: string
) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}/${url}`,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    return handleErrorResponse(error, action);
  }
};

export { RequestApi };
