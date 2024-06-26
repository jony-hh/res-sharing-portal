import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'

enum RES_API {
  VIDEO_RESOURCE = '/res/video/pagingQuery',
  VIDEO_RESOURCE_ALL = '/res/video/fetchWhole',
  TOPIC_RESOURCE = '/res/topic/pagingQuery',
  TOPIC_RESOURCE_ALL = '/res/topic/fetchWhole',
  DOCUMENT_RESOURCE = '/res/document/pagingQuery',
  DOCUMENT_RESOURCE_ALL = '/res/document/fetchWhole',

  SINGLE_DOCUMENT_RESOURCE = '/res/document/single',
  SINGLE_VIDEO_RESOURCE = '/res/video/single',
  SINGLE_TOPIC_RESOURCE = '/res/topic/single',

  FETCH_THUMB_NUM = '/res/content/getThumbNum',
  FETCH_STAR_NUM = '/res/content/getStarNum',

  ADD_DOCUMENT = '/res/document/addDocument',
  ADD_COURSE = '/res/video/addCourse',
  ADD_VIDEO = '/res/video/addVideo',

  UPLOAD_FILE = '/file/multi/upload',
  UPLOAD_IMG = '/img/upload',

  FETCH_COURSE_BY_UER_ID = '/res/video/fetchByUserId',
}

export enum RES_PARAM_CONSTANT {
  PAGE_SIZE = 8,
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

export const fetchWholeVideoResource = () =>
  request.get<any, any>(RES_API.VIDEO_RESOURCE_ALL)

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

export const fetchWholeTopicResource = () =>
  request.get<any, any>(RES_API.TOPIC_RESOURCE_ALL)

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

export const fetchWholeDocumentResource = () =>
  request.get<any, any>(RES_API.DOCUMENT_RESOURCE_ALL)

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

export const addDocument = (data: any) =>
  request.post<any, any>(RES_API.ADD_DOCUMENT, data)

export const addCourse = (data: any) =>
  request.post<any, any>(RES_API.ADD_COURSE, data)

export const addVideo = (data: any) =>
  request.post<any, any>(RES_API.ADD_VIDEO, data)

export const uploadFile = (data: FormData) =>
  request.post<any, any>(RES_API.UPLOAD_FILE, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const uploadImage = (data: FormData) =>
  request.post<any, any>(RES_API.UPLOAD_IMG, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const fetchCourseByUserId = (id: number) =>
  request.get<any, any>(RES_API.FETCH_COURSE_BY_UER_ID, {
    params: { userId: id },
  })
