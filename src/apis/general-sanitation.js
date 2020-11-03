import http from '../utils/http'
// get请求
export default {
  /**
   * sanitation.vue
   */
  getPublicResouceCountByZone(params) {
    return http.post(`/api/powerDistribute/getPublicResouceCountByZone`, params)
  },
  getPublicResouceCountByType(params) {
    return http.post(`/api/powerDistribute/getPublicResouceCountByType`, params)
  },
  /**
   * sanitationVehicle.vue
   */
  getCarCountAbooutType(params) {
    return http.post(`/api/car/getCarCountAbooutType`, params)
  },
  getCarInfoAboutZone(params) {
    return http.post(`/api/car/getCarInfoAboutZone`, params)
  },
  /**
   * roadConditions.vue
   */
  getRoadWordTop5(params) {
    return http.post(`/api/car/getRoadWordTop5`, params)
  },
  /**
   * peakOperationAlarm.vue
   */
  getCarPeakWork(params) {
    return http.post(`/api/car/getCarPeakWork`, params)
  },
  /**
   * publicToilet.vue
   */
  getToiletResouceList(params) {
    return http.post(`/api/powerDistribute/getToiletResouceList`, params)
  },
  getManAndWomanToiletResouceList(params) {
    return http.post(`/api/powerDistribute/getManAndWomanToiletResouceList`, params)
  },
  getPublicToilet(params) {
    return http.post(`/api/powerDistribute/getPublicToilet`, params)
  },
  /**
   * AJCZ.vue
   */
  getEventDisposeCount(params) {
    return http.post(`/api/event/getEventDisposeCount`, params)
  },
  /**
   * MAP.vue
   */
  getEventDisposeCount(params) {
    return http.post(`/api/event/getEventDisposeCount`, params)
  },
  getEventDisposeCount2(params) {
    return http.post(`/api/event/getEventDisposeCount2`, params)
  },
  getCarListByTypeId(params) {
    return http.post(`/api/car/getCarListByTypeId`, params)
  },
  getResouceInfoList(params) {
    return http.post(`/api/powerDistribute/getResouceInfoList`, params)
  },
}
