import request from '@/utils/request'

enum QA_API {
  QA_QUESTION = '/qa/question',
}

export enum QA_PARAM_CONSTANT {
  PAGE_SIZE = 4,
  PAGE_NUM = 1,
  tags = [],
  status = '最新',
}

export const feachQuestion = (
  page_size: number = QA_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = QA_PARAM_CONSTANT.PAGE_NUM,
  tags: [] = QA_PARAM_CONSTANT.tags,
  status: string = QA_PARAM_CONSTANT.status,
) =>
  request.get<any, any>(QA_API.QA_QUESTION, {
    params: {
      page_size: page_size,
      page_num: page_num,
      tags: tags,
      status: status,
    },
  })
