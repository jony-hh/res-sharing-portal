import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'

enum RES_API {
  VIDEO_RESOURCE = '/res/video/pagingQuery',
  TOPIC_RESOURCE = '/res/topic/pagingQuery',
  DOCUMENT_RESOURCE = '/res/document/pagingQuery',
  SINGLE_DOCUMENT_RESOURCE = '/res/document/single',
  SINGLE_VIDEO_RESOURCE = '/res/video/single',
  SINGLE_TOPIC_RESOURCE = '/res/topic/single',

  FETCH_THUMB_NUM = '/res/content/getThumbNum',
  FETCH_STAR_NUM = '/res/content/getStarNum',
}

export enum RES_PARAM_CONSTANT {
  PAGE_SIZE = 4,
  PAGE_NUM = 1,
}

/**
 * @feat 获取轮播图信息
 * @param page_size 分页大小
 * @param page_num 页面号码
 */
export const fetchVideoResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.VIDEO_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })

export const fetchSingVideoResource = (
  id: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(RES_API.SINGLE_VIDEO_RESOURCE, {
    params: { id: id },
  })

export const fetchTopicResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.TOPIC_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })

export const fetchSingTopicResource = (
  id: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(RES_API.SINGLE_TOPIC_RESOURCE, {
    params: { id: id },
  })

export const fetchDocumentResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.DOCUMENT_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })

export const fetchSingDocumentResource = (
  id: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(RES_API.SINGLE_DOCUMENT_RESOURCE, {
    params: { id: id },
  })

export const fetchThumbNum = (id: number) =>
  request.get<any, any>(RES_API.FETCH_THUMB_NUM, {
    params: { contentId: id },
  })

export const fetchStarNum = (id: number) =>
  request.get<any, any>(RES_API.FETCH_STAR_NUM, {
    params: { contentId: id },
  })
