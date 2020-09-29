const User  = require('../models/User')
const Show = require('../models/Show')


exports.getAllProfiles = async (req,res) => {
  const allProfiles = await User.find().populate("showsLoved")
  res.status(200).json( { allProfiles } )  
}

exports.addShowLoved = async (req,res) => {
    const { 
        showsLoved 
    } = req.body
    
    
    const { id: userId } = req.user
    
    const user = await User.findByIdAndUpdate(userId, 
        {$push: {showsLoved: showsLoved}},
        {new : true}
        ).populate("showsLoved")
        res.status(200).json({user})
}


exports.deleteShowLoved = async (req,res) => {
    const {showId} = req.params
    await User.findByIdAndRemove(showId)
    res.status(200).json({message: "This show was removed from your loved section"})

}

