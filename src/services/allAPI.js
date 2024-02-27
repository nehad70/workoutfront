//register api

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


 export const registerAPI = async(user)=>{

    return await commonAPI ("POST",`${BASE_URL}/user/register`,user,"")

}




//Login Api

export const loginAPI =async(user)=>{
    return await commonAPI("POST", `${BASE_URL}/user/login`,user,"") 
}

// add workout

export const addAPI = async(reqbody,reqheader)=>{

    return await commonAPI ("POST",`${BASE_URL}/plans/add`,reqbody,reqheader)

}

export const allplan=async(reqheader)=>{
    //query parameter=path?key
      return  await commonAPI('GET',`${BASE_URL}/plan/allplan`,"",reqheader)
    }

    export const details=async(id,reqheader)=>{
        //query parameter=path?key
          return  await commonAPI('GET',`${BASE_URL}/plan/details/${id}`,"",reqheader)
        }


        export const deleteplan=async(id,reqheader)=>{
          //query parameter=path?key
            return  await commonAPI('DELETE',`${BASE_URL}/plans/deleteplay/${id}`,{},reqheader)
          }
      
          export const updateProfileAPI = async(userID,reqBody,reqheader)=>{
            //project id is passed as path parameter
            return await commonAPI('PUT',`${BASE_URL}/user/update/${userID}`,reqBody,reqheader)
         }  


         export const allUsersAPI=async(reqheader)=>{
          //query parameter=path?key
            return  await commonAPI('GET',`${BASE_URL}/users/allusers`,"",reqheader)
          }