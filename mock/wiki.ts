//wiki信息数据
function wikiMockList() {
  return [
    {
      id: '10001',
      msg: 'success',
    },
    {
      id: '10002',
      msg: 'success',
    },
  ]
}

export default [
  // wiki
  {
    url: '/sys/wiki',
    method: 'get',
    response: (request) => {
      //获取请求头携带参数
      // console.log(request)
      const param = request.query.id
      //查看用户信息是否包含有次token用户
      // @ts-ignore
      const wikiBook = wikiMockList().find((item) => item.id === param)
      //没有返回失败的信息
      if (!wikiBook) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      //如果有返回成功信息
      return { code: 200, data: { wikiBook } }
    },
  },
]
