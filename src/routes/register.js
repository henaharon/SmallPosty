
import { consts } from '../consts';
export async function registerRequest(data) {    
    console.log("data", data);
    
    const response = await fetch(`${consts.API}api/usr/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }