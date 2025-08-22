import axios, { type Method, AxiosError, AxiosHeaders } from 'axios';

import { useGlobalStore } from '@/stores/global';

interface RequestParams {
  method: Method;
  basicUrl: string;
  url: string;
  param?: object;
  showGlobalError?: boolean;
  headers?: AxiosHeaders;
}

interface ApiResponse {
  status: 'success' | 'fail' | 'error';
  data: object | null;
  errorCode: number;
}

/**
 * Request
 * http code
 * 200 get 回應成功, 201 新增回應成功, 204 編輯回應成功
 * 409 回應重複資訊
 * 5xx 回應私服器錯誤
 *
 * @param method 請求方式
 * @param basicUrl 連線來源
 * @param url Api 來源
 * @param param 請求參數
 * @param showGlobalError 是否顯示全局錯誤
 * @param headers 請求頭
 * @return ApiResponse - API 回應物件
 * status: success 回應成功, fail 客戶端錯誤, error 伺服器錯誤
 */
const request = async ({
  method,
  basicUrl,
  url,
  param = {},
  showGlobalError = true,
  headers,
}: RequestParams): Promise<ApiResponse> => {
  const options: {
    method: string;
    url: string;
    params?: object;
    data?: object;
    headers?: AxiosHeaders;
  } = {
    method,
    url: basicUrl + url,
  };

  const globalStore = useGlobalStore();

  if (options.method.toUpperCase() === 'GET') {
    options.params = param;
  } else {
    options.data = param;
  }

  if (headers) {
    options.headers = headers;
  }

  try {
    const res = await axios(options);
    const errorCode = Number(res?.data?.status ?? 500) ?? res.status;
    const is4xx = Math.floor(errorCode / 100) === 4;
    const isSuccess = [200, 201, 204].includes(errorCode);

    if (isSuccess) {
      return {
        status: 'success',
        data: res.data || null,
        errorCode,
      };
    }

    if (showGlobalError) {
      globalStore.errorCode = errorCode;
    }

    return {
      status: is4xx ? 'fail' : 'error',
      data: null,
      errorCode,
    };
  } catch (err) {
    const errorCode = Number((err as AxiosError)?.response?.status) ?? 500;
    const is4xx = Math.floor(errorCode / 100) === 4;
    const returnData: ApiResponse = {
      status: is4xx ? 'fail' : 'error',
      data: null,
      errorCode,
    };

    if (showGlobalError) {
      globalStore.errorCode = errorCode;
    }

    return returnData;
  }
};

export default request;
