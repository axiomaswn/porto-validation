const events = require('../models/event')

module.exports = {

  // GET all users
  getAllEvents : (req, res) => {
    events.find( {}, {__v : false}, (err, data) =>{
      res.send(data)
    })
  },

  // CREATE a user
  createEvent : (req, res) => {
    let newEvent = events({
      title    : req.body.title,
      eventName: req.body.eventname,
      date     : req.body.date,
      email    : req.body.email
    })
    newEvent.save((err,create) =>{
      if (err) {
        var errMsg = ""
        if (err.errors.email)     errMsg += err.errors.email.message + "\n"
        if (err.errors.date)      errMsg += err.errors.date.message + "\n"
        if (err.errors.eventName) errMsg += err.errors.eventName.message + "\n"
        if (err.errors.title)     errMsg += err.errors.title.message + "\n"
        console.log(errMsg);
        res.send(errMsg)
      }
      else {
        res.json({create})
      }
    })
  }

}
