// 驼峰转换横杠链接
export const toLine = (value) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
