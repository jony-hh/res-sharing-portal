import request from '@/utils/request'
import { userResponseData } from '@/api/user/type'

//项目用户相关的请求地址
enum WIKI_API {
  WIKI_BOOK_ID = '/wiki/book/id',
  WIKI_BOOK = '/wiki/book',
}

export enum WIKI_PARAM_CONSTANT {
  PAGE_SIZE = 4,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const feachBookById = (id: string) =>
  request.get<any, any>(WIKI_API.WIKI_BOOK_ID + `/${id}`)

export const feachWIkiBooks = (
  page_size: number = WIKI_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = WIKI_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(WIKI_API.WIKI_BOOK, {
    params: {
      page_size: page_size,
      page_num: page_num,
    },
  })
