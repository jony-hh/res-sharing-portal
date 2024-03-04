import request from "@/utils/request";
import { userResponseData } from "@/api/user/type";


//项目用户相关的请求地址
enum WIKI_API {
  WIKI_BOOK = '/sys/wiki',
}
export const querryWikiById = (id:string)=>{
  const param = {
    params:{
      id:id
    }
  }
  return request.get<any, userResponseData>(WIKI_API.WIKI_BOOK,param)
}
