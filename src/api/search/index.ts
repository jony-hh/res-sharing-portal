import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'

enum SEARCH_API {
  SEARCH_URl = 'es/search/searchOnlyByKeyword',
  SEARCH_USER = 'user/center/searchUser',
}

export enum SEARCH_PARAM_CONSTANT {
  PAGE_SIZE = 8,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const fetchCourseData = (
  keyword: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(SEARCH_API.SEARCH_URl, {
    params: { type: 'course', keyword: keyword },
  })

export const fetchDocumentData = (
  keyword: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(SEARCH_API.SEARCH_URl, {
    params: { type: 'document', keyword: keyword },
  })

export const fetchTopicData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.SEARCH_URl, {
    params: { type: 'topic', keyword: keyword },
  })

export const fetchQaData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.SEARCH_URl, {
    params: { type: 'question', keyword: keyword },
  })

export const fetchWikiData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.SEARCH_URl, {
    params: { type: 'wiki', keyword: keyword },
  })

export const fetchUserData = (keyword: string | null | LocationQueryValue[]) =>
  request.get<any, any>(SEARCH_API.SEARCH_USER, {
    params: { type: 'user', keyword: keyword },
  })
