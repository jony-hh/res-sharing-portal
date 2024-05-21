import request from "@/utils/request";

//项目用户相关的请求地址
enum WIKI_API {
  WIKI_BOOK_ID = '/wiki/book/single',
  WIKI_BOOK = '/wiki/book/pagingQuery',
}

export enum WIKI_PARAM_CONSTANT {
  PAGE_SIZE = 8,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const fetchBookById = (id: string) =>
  request.get<any, any>(WIKI_API.WIKI_BOOK_ID, { params: { id: id } })

export const fetchWIkiBooks = (
  page_size: number = WIKI_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = WIKI_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(WIKI_API.WIKI_BOOK, {
    params: {
      page_size: page_size,
      page_num: page_num,
    },
  })
