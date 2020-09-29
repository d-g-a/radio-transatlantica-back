const Guest = require('../models/Guest')
const Show = require('../models/Show')

exports.getShows = async (req,res) => {
  const shows = await Show.find().populate("guest")
  res.status(200).json( { shows } )  
} 

exports.getShow = async (req,res) => {
  const show = await Show.findById(req.params.showId).populate("guest")
  res.status(200).json({show})
}

exports.createShow = async (req,res) => {
    const {
        title,
        image,
        soundFile,
        date,
        location,
        love,
        genre,
        guest
    } = req.body

    const show = await Show.create({
        title,
        image,
        soundFile,
        date,
        location,
        love,
        genre,
        guest: guest
        //guest: req.guest.id
    })
    await Guest.findByIdAndUpdate(guest, {$push: {shows: show._id}})
    res.status(201).json({show})
}

exports.updateShow = async (req,res) => {
     const {
        title,
        image,
        soundFile,
        date,
        location,
        love,
        genre,
        guestId
    } = req.body
    const { showId } = req.params
    const show = await Show.findByIdAndUpdate(
        showId,
        {
            title,
            image,
            soundFile,
            date,
            location,
            love,
            genre,
            guest: guestId
        },
        {new : true}
    )
    res.status(200).json({show})
}

exports.deleteShow = async (req,res) => {
    const {showId} = req.params
    await Show.findByIdAndRemove(showId)
    res.status(200).json({message:"This show is deleted forever"})
}