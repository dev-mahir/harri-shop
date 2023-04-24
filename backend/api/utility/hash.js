import bcrypt,{ hashSync } from 'bcrypt';



/**
 * Create a hash password
 */


export const hash = (password) => {
    //salt gen
    const salt = bcrypt.genSaltSync(12);
    const hashPass = hashSync(password, salt);
    return hashPass;
}



/**
 * Password match
 */


export const passwordVarify = (password, hash) => {
    //salt gen
    return bcrypt.compareSync(password, hash);
   
}