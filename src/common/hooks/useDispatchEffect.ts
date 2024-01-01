import { apiService, HttpVerbs } from "./../services/apiService";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface EffectsActionWithPayload {
  actions: {
    loading: ActionCreatorWithPayload<any, string>;
    success: ActionCreatorWithPayload<any, string>;
    failure: ActionCreatorWithPayload<any, string>;
  };
  httpMethod: HttpVerbs.POST | HttpVerbs.DELETE;
  endPoint: string;
  data?: any;
}

export const useDispatchEffect = () => {
  const http = apiService();
  const dispatch = useDispatch();
  const dispatchEffect = ({
    actions: { loading, success, failure },
    httpMethod,
    endPoint,
    data,
  }: EffectsActionWithPayload) => {
    dispatch(loading(true));
    const onSuccess = (result: any) => dispatch(success(result));
    const onFailure = (error: any) => dispatch(failure(error));
    http[httpMethod](endPoint, data, onSuccess, onFailure);
  };
  return dispatchEffect;
};
