const getters = {
  token: (state) => state.user.token,
  user: (state) => state.user.user,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.user) !== '{}'
  }
}
export default getters
