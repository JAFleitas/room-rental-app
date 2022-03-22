export default function getHeaderToken() {
    return {
       headers: {
        Authorization: 'Bearer '+localStorage.tokenRentalApp,
       }
    }
 }