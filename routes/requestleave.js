const express = require('express')
const mysql = require('mysql')
const leaveAPI = express.Router();









const pool = mysql.createPool({
    connectionLimit:10,
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'liondev'
})

leaveAPI.get('/vget/leaveinfo',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err

        connection.query('select * from employeeinfo',(err,rows)=>{
            connection.release()
            if(!err){
                res.send(rows)
            }else(
                res.send(err)
            )

            console.log('leave info :')
        })
    })
})


leaveAPI.post('/vpost/leaveinfo', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const params = req.body
        connection.query('INSERT INTO employeeinfo SET ?', params, (err, rows) => {
        connection.release() // return the connection to pool
        if (!err) {
            res.send(`Successfully submitted`)
        } else {
            console.log(err)
        }
        

        })
    })
});

// Require google from googleapis package.
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '650594091279-1ld0smf4bleun0on81n6k2fv60u89get.apps.googleusercontent.com',
  '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'
  
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04BY59THUYkI9CgYIARAAGAQSNwF-L9Ire_o145xGg0LyVshDfEX5QVSgpO4Uz-kwsWUIVxDvYfKpFmV5Ujq5VBOPY0yOyvuQyQQ',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes())

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with David`,
  location: `3595 California St, San Francisco, CA 94118`,
  description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Africa/Maputo',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Africa/Maputo',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'Africa/Maputo',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)
module.exports = leaveAPI;

