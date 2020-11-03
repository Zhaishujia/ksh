import http from '../utils/http'
export default{
  //page/evaluate/components/baseCase
 	getEventCountOfMonth(params){
    	return http.get(`/api/event/getEventCountOfMonth`,params)
	},
	getInspectorListAppearCount(params){
    	return http.post(`/api/inspector/getInspectorListAppearCount`,params)
	},
  getZXJK3(params){
    	return http.post(`/api/main/ZXJK3`,params)
  },
  getDepartmentListAppearCount(params){
    	return http.post(`/api/inspector/getDepartmentListAppearCount`,params)
  },
}
