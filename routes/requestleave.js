const express = require('express')
const mysql = require('mysql')
const leaveAPI = express.Router();


// Require google from googleapis package.
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  'userID',
  'secret'
  
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
            // Create event  for our calendar
              const event = {
                summary: `leave request for `+ params.firstName + ' '+ params.lastName,
                location: `2 Luis Road, pretoria`,
                description: `leave Reason:` + params.leaveReason,
                colorId: 1,
                start: {
                  dateTime: params.leaveStart,
                  timeZone: 'Africa/Maputo',
                },
                end: {
                  dateTime: params.leaveEnd,
                  timeZone: 'Africa/Maputo',
                },
              }

                  calendar.events.insert(
                      { calendarId: 'primary', resource: event },
                      err => {
                        // Check for errors and log them if they exist.
                        if (err) return console.error('Error Creating Calender Event:', err)
                        // Else log that the event was created.
                        return console.log('Calendar event successfully created.')
                      }
                    )
        } else {
            console.log(err)
        }
        

        })
    })
});



  

module.exports = leaveAPI;

