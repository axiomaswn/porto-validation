const events = require('../models/events')

module.exports = {

  getAll : (req, res) => {
    events.find( {}, {__v : false}, (err, data) =>{
      res.send(data)
    })
  },

  create : (req, res) => {
    let newEvent = events({
      title    : req.body.title,
      eventName: req.body.eventname,
      date     : req.body.date,
      email    : req.body.email
    })
    newEvent.save((err,create) =>{
      if (err) {
        var msg = ""
        if (err.errors.date)      msg += err.errors.date.message + "\n"
        if (err.errors.eventName) msg += err.errors.eventName.message + "\n"
        if (err.errors.email)     msg += err.errors.email.message + "\n"
        if (err.errors.title)     msg += err.errors.title.message + "\n"
        console.log(msg);
        res.send(msg)
      }
      else {
        res.json({create})
      }
    })
  }

}
