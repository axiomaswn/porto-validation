"use strict"
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var eventSchema = new Schema({
  title     : { type: String,  unique: true, required: [true, 'silahkan masukkan judul']},
  eventName : { type: String, required: [true, 'masukkan nama even']},
  date      : { type: String, required: [true, 'masukkan tanggal even'],
              validate: {validator: (data) => {
                return  /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(data)
              },
              message: 'format tanggal tidak valid'  }
            },
  email     : { type    : String,
                required: [true, 'silahkan masukkan email'],
                validate: {
                  validator: (data) => {
                      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data);
                  },
                  message: 'format email tidak valid'  }
              }
},
{
  timestamps : true
})

eventSchema.plugin(uniqueValidator);
module.exports  = mongoose.model('Events', eventSchema)
