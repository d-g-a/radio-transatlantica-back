const { Schema, model } = require('mongoose');


const editorialSchema = new Schema(
  {
    articleCategory:{
        type: String,
        enum: ["Art","Culture","Music"]
    },
    headline: String,
    headlineSize:{
        type: String,
        enum: ["Small","Medium","Large","Extra-Large"]
    },
    headlineTypeface: {
        type: String,
        enum: ["Serif","Sans-Serif"]
    },
    headlineWidth: {
        type: String,
        enum: ["fifty","seventy-five","hundred"]
    },
    headlineAlignment: {
        type: String,
        enum: ["Left","Center"]
    },
    subHeadline: String,
    subHeadlineSize:{
        type: String,
        enum: ["Small","Medium","Large","Extra-Large"]
    },
    subHeadlineTypeface: {
        type: String,
        enum: ["Serif","Sans-Serif"]
    },
    subHeadlineWidth: {
        type: String,
        enum: ["fifty","seventy-five","hundred"]
    },
    subHeadlineAlignment: {
        type: String,
        enum: ["Left","Center"]
    },
    bodyText: String,
    bannerImage: String,
    bodyImage1: String,  
    bodyImage2: String, 
    writer: String,
    writerBio: String,
    photographer: String,
    instagram: String,
    date: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Editorial', editorialSchema);