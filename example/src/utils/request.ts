import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

class Request {
  private static axiosInstance = axios.create(defaultConfig)

  constructor () {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 请求拦截
  private httpInterceptorsRequest () {
    Request.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse () {
    Request.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  // get 请求
  public get<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return Request.axiosInstance.get(url, params).then(resp => resp.data).catch()
  }

  // post 请求
  public post<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return Request.axiosInstance.post(url, params).then(resp => resp.data).catch()
  }
}

export const request = new Request()
