
import { consts } from '../consts';
export async function addFollower(userToken, toFollowId) {        
    const response = await fetch(`${consts.API}api/follower/add-follower`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
      body: JSON.stringify({ f_user_id: toFollowId })
    });    
    return await response.json();
  }

  export async function getMyFollowers(userToken) {    
    const response = await fetch(`${consts.API}api/follower/get-my-followers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
    });        
    return await response.json();
  }

  export async function getFollowersById(userToken) {        
    const response = await fetch(`${consts.API}api/follower/get-followers-by-user-id`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      }
        });    
    return await response.json();
  }