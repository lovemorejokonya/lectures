const getUserWithId = (userId, userDB) => {
    for(let user of userDB){
        if(user.id == userId){
            return user
        } 
    }
    return null
}

const authenticated = (userObj, userDB) => {
    const {email, password } = userObj
    for(let user of userDB) {
        if(user.email === email){
            if(user.password === password){
                return {data: user, error: null}
            } else {
                return {data: null, error: "wrong password"}
            } 
        }
    } 
    return {data: null, error: "email not found"}
}

module.exports = {authenticated, getUserWithId}