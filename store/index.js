// state 需要定义成一个函数
// 因为在服务端渲染期间运行的都是同一个实例
// 所以为了防止数据冲突，务必将 state 定义成一个函数，然后返回数据对象
// 确保后续使用 state 的时候，所有数据对象都是最新的。
const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
    return {
        user: null
    }
}
export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转换成 JavaScript 对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}