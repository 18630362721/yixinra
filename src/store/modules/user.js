import { login } from '@/api/sys'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { TOKEN, MENU, USER } from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    menu: getItem(MENU),
    user: getItem(USER)
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setMenu(state, menu) {
      state.menu = menu
      setItem(MENU, menu)
    },
    setUser(state, user) {
      state.user = user
      setItem(USER, user)
    }
  },
  actions: {
    login(context, userInfo) {
      const { mobile, pwd } = userInfo
      return new Promise((resolve, reject) => {
        login({
          mobile,
          pwd
        })
          .then((data) => {
            this.commit('user/setToken', data.token)
            this.commit('user/setMenu', data.menu)
            this.commit('user/setUser', data.user)
            // 跳转
            router.push('/')
            // 保存登录时间
            // setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * 退出登录
     */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUser', {})
      //   removeAllItem()
      removeItem('user')
      removeItem('token')
      router.push('/login')
    }
  }
}
