const User  = require('../models/User')
const Show = require('../models/Show')


exports.getAllProfiles = async (req,res) => {
  const allProfiles = await User.find()
  res.status(200).json( { allProfiles } )  
}


//=============LOVE-SHOW=============

exports.addShowLoved = async (req,res) => {
    const { 
        showsLoved 
    } = req.body
    
    
    const { id: userId } = req.user
    
    const user = await User.findByIdAndUpdate(userId, 
        {$push: {showsLoved: showsLoved}},
        {new : true}
        )
        res.status(200).json({user})
}


exports.deleteShowLoved = async (req,res) => {
    const { 
        showsLoved 
    } = req.body
    console.log(req.body)

    const { id: userId } = req.user

    await User.findByIdAndUpdate(userId, {$pull: {showsLoved: showsLoved}}, {new:true})
    res.status(200).json({message: "This show was removed from your loved section"})

}

