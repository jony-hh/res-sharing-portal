import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'

enum SEARCH_API {
  COMPOSITE_SEARCH = '/search/composite',
  RESOURCE_SEARCH = '/search/resource',
  QA_SEARCH = '/search/qa',
  WIKI_SEARCH = '/search/wiki',
  USER_SEARCH = '/search/user',
}

export enum SEARCH_PARAM_CONSTANT {
  PAGE_SIZE = 4,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const fetchCompositeData = (
  keyword: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(SEARCH_API.COMPOSITE_SEARCH, {
    params: { keyword: keyword },
  })

export const fetchResourceData = (
  keyword: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(SEARCH_API.RESOURCE_SEARCH, {
    params: { keyword: keyword },
  })

export const fetchQaData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.QA_SEARCH, {
    params: { keyword: keyword },
  })

export const fetchWikiData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.WIKI_SEARCH, {
    params: { keyword: keyword },
  })

export const fetchUserData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.USER_SEARCH, {
    params: { keyword: keyword },
  })
