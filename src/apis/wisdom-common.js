  //page/wisdomCommon/
import http from '../utils/http'
export default{
  getList(params){
    	return http.get(`/api/powerDistribute/list`,params)
  },
  getPublicList(params){
    	return http.post(`/api/powerDistribute/getPublicList`,params)
  },
 	getWuShuiResouceList(params){
    	return http.post(`/api/powerDistribute/getWuShuiResouceList`,params)
	},
  getShuiWuResouceList(params){
    	return http.post(`/api/powerDistribute/getShuiWuResouceList`,params)
  },
  getGongQiResouceList(params){
    	return http.post(`/api/powerDistribute/getGongQiResouceList`,params)
  },
  getGongReResouceList(params){
    	return http.post(`/api/powerDistribute/getGongReResouceList`,params)
  },
  getGongShuiResouceList(params){
    	return http.post(`/api/powerDistribute/getGongShuiResouceList`,params)
  },

}
