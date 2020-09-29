const Guest = require('../models/Guest')

exports.getGuests = async (req,res) =>{
    const allGuests = await Guest.find()
    res.status(200).json({allGuests})
}

exports.getGuest = async (req,res) =>{
    const oneGuest = await Guest.findById(req.params.guestId).populate("shows")
    res.status(200).json({oneGuest})
}

exports.createGuest = async (req,res) =>{
    const {
        name,
        image,
        bio
    } = req.body
    const guest = await Guest.create({
        name,
        image,
        bio,
        //shows: req.show.id
    })
    res.status(201).json({guest})
}

exports.updateGuest = async (req,res) =>{
    const{
        name,
        image,
        bio 
    } = req.body
    const { guestId } = req.params
    const guest = await Guest.findByIdAndUpdate( guestId,
        {
            name,
            image,
            bio
        },{new : true}
        )
        res.status(200).json({guest})
}

exports.deleteGuest = async (req,res) =>{
    const {guestId} = req.params
    await Guest.findByIdAndRemove(guestId)
    res.status(200).json({message: "This guest is long gone!"})

}


