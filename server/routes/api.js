const express = require('express');// for api's we can initialize it again

const router = express.Router();

const userprofileModel = require('../models/userprofile');

const mongoose = require('mongoose');// after installation initialize the mongoose here

mongoose.connect('mongodb+srv://angularpandu:7P5hu2ctsYWxxx1l@cluster0.k5xvueb.mongodb.net/', { useNewUrlParser: true ,useUnifiedTopology: true})
.then(res => {
  console.log('connected to mongodb');
}).catch(err => {
  console.log('not connected to mongodb');
})

router.get('/', async(req, res) => {
  res.send('im from  API route'); // testing purpose here again we call api
})

router.get('/hello', async(req, res) => {
  res.send('im from hello pandu'); // testing purpose here again we call api
})

router.post('/adduserProfile', async(req, res) => {
  let userData = req.body;
  let userdetails = new userprofileModel(userData);
  const val = await userdetails.save()
  .then((data) => {
    console.log(data);
    res.status(200).json({userdetails:data,status : true, message:"successfully added...!"});
  })
  .catch(err => {
    res.status(400).json({userdetails:data,status : false, message:"successfully not added...!"})
  })
})

router.get('/getuserProfiles', async(req, res) => {
  const val = await userprofileModel.find()
  if(val){
    return res.status(200).send(val);
  }else{
    return res.status(400).json({getusers : val,status : false, message:"not getting..!"})
  }
})

router.put('/updateUserprofiles/:id', async(req, res) => {
  let usersdata = req.body;
  const getProfiles = await userprofileModel.findByIdAndUpdate(req.params.id,usersdata,{new : true})
  if(getProfiles){
    return res.status(200).send(getProfiles);
  }else{
    return res.status(400).json({getProfiles : getProfiles,status : false, message:"not getting..!"})
  }
})

router.delete('/deleteUserprofiles/:id', async(req, res) => {
  let id = req.params.id;
  const deletedata = await userprofileModel.findByIdAndDelete({_id : id})
  if(deletedata){
    return res.status(200).json({deletedata : deletedata,status : true, message:"deleted successfully..!"});
  }else{
    return res.status(400).json({deletedata : deletedata,status : false, message:"not deleted..!"})
  }
})

router.delete('/deleteallprofiles', async(req, res) => {
  const deletedata = await userprofileModel.deleteMany()
  if(deletedata){
    return res.status(200).json({deletedata : deletedata,status : true, message:"all profiles deleted successfully..!"});
  }else{
    return res.status(400).json({deletedata : deletedata,status : false, message:"not deleted..!"})
  }
})

module.exports = router; // we have to exports this route module
