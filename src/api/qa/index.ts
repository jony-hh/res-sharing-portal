import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'
import videojs from 'video.js'
import any = videojs.any

enum QA_API {
  QA_QUESTION = '/qa/question/pagingQuery',
  QA_SINGLE_QUESTION = '/qa/question/single',
  QA_ANSWER_BY_QUESTION_ID = '/qa/answer/byQuestionId',
}

export enum QA_PARAM_CONSTANT {
  PAGE_SIZE = 4,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const fetchQuestion = (
  page_size: number = QA_PARAM_CONSTANT.PAGE_SIZE,
  page_num: number = QA_PARAM_CONSTANT.PAGE_NUM,
  tags: [] = [],
  status: string = QA_PARAM_CONSTANT.STATUS,
) =>
  request.get<any, any>(QA_API.QA_QUESTION, {
    params: {
      page_size: page_size,
      page_num: page_num,
      tags: tags,
      status: status,
    },
  })

export const fetchSingQuestionResource = (
  id: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(QA_API.QA_SINGLE_QUESTION, {
    params: { id: id },
  })

export const fetchAnswerByQuestionId = (
  id: string | null | LocationQueryValue[],
) =>
  request.get<any, any>(QA_API.QA_ANSWER_BY_QUESTION_ID, {
    params: { id: id },
  })
