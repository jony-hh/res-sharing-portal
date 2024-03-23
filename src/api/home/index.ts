import request from '@/utils/request'

enum NEWS_API {
  NEWS_SLIDESHOW = '/news/slideshow',
  NEWS_GRID = '/news/grid',
  NEWS_DEFAULT = '/news/default',
}

export enum NEWS_PARAM_CONSTANT {
  FETCH_SLIDESHOW_FLAG = 'slideshow',
  FETCH_GRiD_FLAG = 'grid',
  FEATCH_DEFAULT_FLAG = 'default',
}

/**
 * @feat 获取轮播图信息
 * @param flag slideshow
 */
export const fetchSlideshow = (flag: string) =>
  request.get<any, any>(NEWS_API.NEWS_SLIDESHOW, { params: { flag: flag } })

export const fetchGrid = (flag: string) =>
  request.get<any, any>(NEWS_API.NEWS_GRID, { params: { flag: flag } })

export const fetchDefault = (flag: string) =>
  request.get<any, any>(NEWS_API.NEWS_DEFAULT, { params: { flag: flag } })
