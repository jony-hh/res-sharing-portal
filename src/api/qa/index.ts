import request from '@/utils/request'
import { LocationQueryValue } from 'vue-router'
import videojs from 'video.js'

enum QA_API {
  QA_QUESTION = '/qa/question/pagingQuery',
  QA_QUESTION_ALL = '/qa/question/fetchWhole',
  QA_SINGLE_QUESTION = '/qa/question/single',
  QA_ANSWER_BY_QUESTION_ID = '/qa/answer/byQuestionId',
}

export enum QA_PARAM_CONSTANT {
  PAGE_SIZE = 8,
  PAGE_NUM = 1,
  STATUS = '最新',
}

export const fetchQuestion = (status: number) =>
  request.get<any, any>(QA_API.QA_QUESTION_ALL, { params: { status: status } })

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
