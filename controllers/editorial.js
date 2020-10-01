const Editorial = require('../models/Editorial')

exports.getAllEditorials = async (req,res) => {
    const allEditorials = await Editorial.find()
    res.status(200).json({allEditorials})
}

exports.getOneEditorial = async (req,res) => {
    const oneEditorial = await Editorial.findById(req.params.editorialId)
    res.status(200).json({oneEditorial})
}

exports.createEditorial = async (req,res) => {
    const {
        articleCategory,
        headline,
        headlineSize,
        headlineTypeface,
        headlineWidth,
        headlineAlignment,
        subHeadline,
        subHeadlineSize,
        subHeadlineTypeface,
        subHeadlineWidth,
        subHeadlineAlignment,
        bodyText,
        bannerImage,
        bodyImage1,
        bodyImage2,
        writer,
        writerBio,
        photographer,
        instagram,
        date,
        love
    } = req.body
    const editorial = await Editorial.create({
        articleCategory,
        headline,
        headlineSize,
        headlineTypeface,
        headlineWidth,
        headlineAlignment,
        subHeadline,
        subHeadlineSize,
        subHeadlineTypeface,
        subHeadlineWidth,
        subHeadlineAlignment,
        bodyText,
        bannerImage,
        bodyImage1,
        bodyImage2,
        writer,
        writerBio,
        photographer,
        instagram,
        date,
        love
    })
  res.status(201).json({ editorial })
}

exports.updateEditorial = async (req,res) => {
    const {
        articleCategory,
        headline,
        headlineSize,
        headlineTypeface,
        headlineWidth,
        headlineAlignment,
        subHeadline,
        subHeadlineSize,
        subHeadlineTypeface,
        subHeadlineWidth,
        subHeadlineAlignment,
        bodyImage1,
        bodyImage2,
        bodyText,
        bannerImage,
        writer,
        writerBio,
        photographer,
        instagram,
        date,
        love
    } = req.body
    const { editorialId } = req.params
    const editorial = await Editorial.findByIdAndUpdate( editorialId, 
        {
            articleCategory,
            headline,
            headlineSize,
            headlineTypeface,
            headlineWidth,
            headlineAlignment,
            subHeadline,
            subHeadlineSize,
            subHeadlineTypeface,
            subHeadlineWidth,
            subHeadlineAlignment,
            bodyText,
            bannerImage,
            bodyImage1,
            bodyImage2,
            writer,
            writerBio,
            photographer,
            instagram,
            date,
            love
        }, {new : true}
        )
        res.status(200).json({editorial})
}

exports.deleteEditorial = async (req,res) => {
    const {editorialId} = req.params
    await Editorial.findByIdAndRemove(editorialId)
    res.status(200).json({message: "This editorial was successfully deleted"})

}
