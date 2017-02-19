"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');

var eventSchema = new Schema({
  title     : { type: String,  unique: true, required: [true, 'Title required']},
  eventName : { type: String, required: [true, 'Event name required']},
  date      : { type: String, required: [true, 'Date event required'],
              validate: {validator: (x) => {
                return  /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(x)
              },
              message: 'Invalid date format'  }
            },
  email     : { type    : String,
                required: [true, 'Email event required'],
                validate: {
                  validator: (x) => {
                      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x);
                  },
                  message: 'Invalid email address'  }
              }
},
{
  timestamps : true
})

// eventSchema.plugin(uniqueValidator);
module.exports  = mongoose.model('Events', eventSchema)
