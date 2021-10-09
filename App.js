var nodemailer = require('nodemailer')
var fs = require('fs')
var hbs = require('nodemailer-express-handlebars')

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'test@gmail.com',
        pass:'password'
    }
});

// transporter.use('compile',hbs({
//     viewEngine:'express-handlebars',
//     viewPath:'./'
// }));

var mailOption = {
   from:'test@gmail.com',
    to:'test1@gmail.com',
    subject:'Senindg mail using node.js',
    // template:'index'
    text:'this is temp mail'
};
transporter.sendMail(mailOption,function(err,info){
    if (err){
        console.log("the error is " + err)
        return;
    }
    else{
        console.log("Email sent:" + info.response);
    }
});