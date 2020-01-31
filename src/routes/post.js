
import { consts } from '../consts';
export async function addPost(userToken ,data) {        
    const response = await fetch(`${consts.API}api/post/add-post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }

  export async function getAllPost(userToken) {    
    const response = await fetch(`${consts.API}api/post/get-all-posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
    });        
    return await response.json();
  }

  export async function getPostById(data) {    
    console.log("data", data);
    
    const response = await fetch(`${consts.API}api/post/get-posts-by-user-id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }

  export async function deletePostByID(userToken,postId) {        
    const response = await fetch(`${consts.API}api/post/delete-post-by-id/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`

      },
    });
    return await response.json();
  }