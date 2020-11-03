import http from '../utils/http'

export default {
  /**
   *page/case/components/ZXL
   *page/case/components/left
   * */
  getTitleData(params) {
    return http.post(`/api/main/titleData`, params)
  },

  /**
   *page/case/components/JRSSSJ
   *page/case/components//right
   * */
  getZjaj(params) {
    return http.get(`/api/main/ZJAJ`, params)
  },
  /**
   * page/case/components/ranking
   * page/case/components/AJGF
   * page/components/AJGF
   * */
  getSJGFQS(params) {
    return http.post(`/api/main/SJGFQS`, params)
  },
  getGFBWQS(params) {
    return http.post(`/api/main/GFBWQS`, params)
  },
  getGFSDQS(params) {
    return http.post(`/api/main/GFSDQS2`, params)
  },
  /*
   *page/components/ResourceData
   */
  getModuleData(params) {
    return http.get(`/api/main/module1Data`, params)
  },

  /**
   *page/components/ZXJK
   * */
  getZXJK4(params) {
    return http.post(`/api/main/ZXJK3`, params)
  },
  /**
   *page/components/AJLY
   * */
  getAJLY(params) {
    return http.post(`/api/main/AJLY`, params)
  },
  /**
   *page/components/AJCZS
   * */
  getAJCZS(params) {
    return http.post(`/api/main/AJCZS`, params)
  },
}
