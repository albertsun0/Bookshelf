import dbConnect from '../auth/lib/connect'
import Users from '../../../models/userModel'
import bcrypt from 'bcrypt'
export default async function handler (email, password) {
    dbConnect(process.env.MONGODB_URI)
    const user = await Users.findOne({ email:email })
    if(!user || !password){
        return res.json({msg:'user does not exist'})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        return res.json({msg: 'invalid password. try again.'})
    }
    return user
}