import request from '@/utils/request'

enum NEWS_API {
  NEWS_SLIDESHOW = '/news/slideshow',
}

export enum PARAM_CONSTANT {
  FEACH_FLAG = 'slideshow',
}

/**
 * @feat 获取轮播图信息
 * @param flag slideshow
 */
export const feachSlideshow = (flag: string) =>
  request.get<any, any>(NEWS_API.NEWS_SLIDESHOW, { params: { flag: flag } })
