import{request}  from '@/plugins/request'
// 获取公共文章列表
export const getArticleList = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
      })
}
// 获取关注的文章列表
export const getFeedArticleList = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}
// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论列表
export const getArticleComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}