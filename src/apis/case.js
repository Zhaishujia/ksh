//page/case
import http from '../utils/http'

export default {
  /**
   *components/ZXL
   * */
  getTodayEventAndOnTimeCount(params) {
    return http.post(`/api/event/getTodayEventAndOnTimeCount`, params)
  },
  getTodayFinishEventAndOnTimeCount(params) {
    return http.post(`/api/event/getTodayFinishEventAndOnTimeCount`, params)
  },
  getTitleData(params) {
    return http.post(`/api/main/titleData`, params)
  },
  /**
   * components/MAP
   * */
  getEventListByType(params) {
    return http.post(`/api/event/getEventListByType`, params)
  },

  /**
   * components/ranking
   * */

}
