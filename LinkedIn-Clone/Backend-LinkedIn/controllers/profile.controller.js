// create controller for profile
const Profile = require("../modules/Profile.module");

// create profile

const createProfile = async(req, res) => {
    try{
       // req.body
       const {headline, userId, summary, experience, skills = [], education} = req.body;

       // create profile

       const profile = new Profile({
        headline, userId, summary, skills
       })

       // save profile
       await profile.save();

        // experience and education:
        profile.experiences.push(experience);
        profile.education.push(education);

        await profile.save();

       return res.status(201).json({message : "Profile created successfully", profile})

    }catch(err){
        console.log("err", err.message)
    }
}

module.exports = {createProfile}