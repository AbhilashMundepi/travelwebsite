const mongoose = require("mongoose");
const getDeepestSubdocumentForPath = require("mongoose/lib/helpers/document/getDeepestSubdocumentForPath");
const { object, setValue, promiseOrCallback } = require("mongoose/lib/utils");
const review = require("./review.js");
const Review = require("./review.js");
 const Schema = mongoose.Schema;
 
 const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:String,
    image:{
        url: String,
        filename: String,  
    },
    price:Number,
    location:String,
    country:String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
 owner : {
    type : Schema.Types.ObjectId,
    ref : "User",
 }

 });

// const listingSchema = new Schema({
//     title:{
//     type:String,
//     required:true,
//     },
//     description: {
//         type:String,
//     },
//     image:{
      
//         type:String,
//         required:true,
     
     
//      default:
//         "https://images.app.goo.gl/RpP1goNFYkkgrtKm7",
//      set: (v)=> v==="" ? "https://images.app.goo.gl/RpP1goNFYkkgrtKm7" : v,
//     },
//     price:{
//         type:Number,
//     },
//     location:{
//         type:String,
//         required:true,
//     },
//     country:{
//         type:String,
//     }
// });

listingSchema.post("findOneAndDelete",async(listing) =>{
    if(listing){
        await Review.deleteMany({ _id :{ $in: listing.reviews}});
    }
})

 const Listing = mongoose.model("Listing",listingSchema);
 module.exports = Listing;