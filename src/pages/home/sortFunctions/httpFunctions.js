import postRedeem from '../../../services/postRedeem';
import postPoints from '../../../services/postPoints';

export const postRedeemAction = (productId) =>{
    return postRedeem(productId)
        .then( data => {
            console.log(data)
        })
        .catch( err => {
            console.log(err)
        })

} 

export const postPointsAction = (amount) => {
    return postPoints(amount)
        .then( res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
}