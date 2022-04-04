export function authToken(id, password){
    const authToken= id+":"+password;
    const base64token= btoa(authToken);
    return "Basic "+base64token;

}

