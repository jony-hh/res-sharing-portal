import request from '@/utils/request'

enum RES_API {
  VIDEO_RESOURCE = '/res/video/pagingQuery',
  TOPIC_RESOURCE = '/res/topic/pagingQuery',
  DOCUMENT_RESOURCE = '/res/document/pagingQuery',
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
export const feachVideoResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.VIDEO_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })

export const feachTopicResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.TOPIC_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })

export const feachDocumentResource = (
  page_size: number = RES_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = RES_PARAM_CONSTANT.PAGE_NUM,
) =>
  request.get<any, any>(RES_API.DOCUMENT_RESOURCE, {
    params: { page_size: page_size, page_num: page_num },
  })
