export function formatLogin(apiLoginData: any){
 return {
    accessToken: apiLoginData.accessToken,
    user: {
      email: apiLoginData.user.email,
      role: apiLoginData.user.role,
      id: apiLoginData.user.id
    }
 }
}