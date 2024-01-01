import axios from "axios";

export const BASE_URL: string = "https://jsonplaceholder.typicode.com";

export enum HttpVerbs {
  POST = "POST",
  DELETE = "DELETE",
}

export type HttpVerbsConfig = {
  [HttpVerbs.POST]: (
    endPoint: string,
    body: object,
    onSuccess: (result: any) => void,
    onFailure: (error: Error) => void
  ) => void;
  [HttpVerbs.DELETE]: (
    endpoint: string,
    body: object,
    onSuccess: (result: any) => void,
    onFailure: (error: Error) => void
  ) => void;
};

export const apiService = (): HttpVerbsConfig => {
  const httpRequest: HttpVerbsConfig = {
    [HttpVerbs.POST]: async (
      endPont: string,
      body: object,
      onSuccess,
      onFailure
    ) => {
      const url = `${BASE_URL}/${endPont}`;
      try {
        const result = await axios.post(url, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        onSuccess(result.data);
      } catch (error: any) {
        onFailure(error);
        throw error;
      }
    },
    [HttpVerbs.DELETE]: async (
      endpoint: string,
      body,
      onSuccess,
      onFailure
    ) => {
      const url = `${BASE_URL}/${endpoint}`;
      try {
        const result = await axios.delete(url);
        if (result.status === 200) {
          onSuccess(body);
        }
      } catch (error: any) {
        onFailure(error);
        throw error;
      }
    },
  };
  return httpRequest;
};
