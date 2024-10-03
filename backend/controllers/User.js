const User = require("../model/User")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
require('dotenv').config();






const sendVerificationEmail = (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ishk23ishk@gmail.com',
      pass: process.env.GMAIL_PASSWORD, 
    },
  });

  // HTML content
  const mailOptions = {
    from: 'ishk23ishk@gmail.com',
    to: email,
    subject: 'Email Verification', // Subject
    // text:` Please verify your email using this token: http://192.168.1.144:3000/user/verify/${verificationToken}`,
    html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
          <h2>Email Verification</h2>
          <p>Please click the button below to verify your email address:</p>
          <a href="http://192.168.1.144:3000/user/verify/${verificationToken}" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
            Verify Email
          </a>
          <p>If you do not verify your email, your account will not be created.</p>
          <p>Thank you!</p>
        </div>
      `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error sending email:', error);
    }

  });
};


//create user
const createUser = async (req, res) => {

  const { name, email, password } = req.body
  try {

    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(409).json({ message: "User with this email already exists." });


    //const user = await User.create(req.body)
    // res.status(201).json(user)
    const newUser = new User({ name, email, password })
    newUser.verificationToken = crypto.randomBytes(20).toString("hex")
    await newUser.save()

    sendVerificationEmail(newUser.email, newUser.verificationToken)

  } catch (error) {
    res.status(500).json({ message: `error:${error}` })
  }
}


//verify the email
const verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;


    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }


    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email Verificatioion Failed" });
  }
}


//sign in
const signIn = async (req, res) => {
  const { email, password } = req.body
  

console.log( "//",email,password)
  

  try {
    const user = await User.findOne({ email })
    if (!user) {
      console.log("user is not existes")
      return res.status(404).json({ message: "user is not existes" })
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "invalid password" })
    }
    if(!user.verified){
      return res.status(401).json({ message: "Email not verified" })
    }


    //const secretKey = crypto.randomBytes(32).toString("hex")


    const token = jwt.sign({ userId: user._id, }, process.env.JWT_SECRET, { expiresIn: '1w' })

    res.status(200).json({token})

  } catch (error) {
    console.log("error")
    res.status(500).json({ message: error })
  }
}


//verifytoken.if token is valid then user sign in automatically
const verifyToken=async(req,res)=>{
 

  const token=req.params.token

  try {
  

    jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
      if(error){
        //if token expires this part will run
        console.log("2")
        return res.status(401).json({message:error})
      }
      res.status(200).json({message:"Verification is successful",decoded})
    })
    
  } catch (error) {
    console.log("1")  
    res.status(500).json(error)
  }
}
 


module.exports = { createUser, verifyEmail, signIn,verifyToken }





