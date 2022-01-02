const express =require("express")
const app = express()
const mongoose = require('mongoose');
const ejs = require("ejs")
const bodyparser = require('body-parser')
app.use(bodyparser.json())
mongoose.connect('mongodb://172.21.2.236:27017/190110910407');
// mongoose.connect('mongodb://localhost/test');

const schema1={
    member:String,
    password:String,
    sex:String,
    major:String,
    birth:Date,
    roomNo:String,
    position:String,
    photo:String,
    statu:Boolean,
    phone:String
}
const violation_schema={
    member:String,
    violation:String,
    violation_time:Date,
    roomNo:String,
    phone:String	 
}
const room_schema={
    roomNo:String,
	waterFee:Number,
	elecFee:Number 
}
const t_member = mongoose.model('t_member',schema1);
const t_violation = mongoose.model('t_violation',violation_schema);
const t_room = mongoose.model('t_room',room_schema);
// const kitty = new mydata({ name: 'testZildjian' });
// kitty.save()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-ww
app.use('/',express.static('public'))

//注册
app.get('/RegAction', function (req, res,next) {
    member = req.query.member;
    password = req.query.password;
    sex = req.query.sex;
    birth = req.query.birth;
    major = req.query.major;
    roomNo = req.query.roomNo;
    position = req.query.position;
    phone = req.query.phone;
    photo = req.query.photo;
    statu = true;

    const members = new t_member({ member:member,password:password,sex:sex,
        birth:birth,major:major,roomNo:roomNo,position:position,
        phone:phone,photo:photo,statu:statu});
    members.save()
    // t_member.find({member:member},(err,data)=>{console.log(data)})
    res.redirect('login.html')
  })
//登陆
app.get('/login', function (req, res,next) {
    member = req.query.member;
    // console.log(member)
    password = req.query.password;
    // t_member.find({member:member},(err,data)=>{console.log(data)})
    t_member.findOne({member: member}, function (err, content) {
        if (err) {
            res.redirect('login.html')
        } else {
            var pwd = content.password;
            var position = content.position;
            // console.log(position);
            if (pwd === password) {
                if(position ==='管理员'){
                    res.redirect('main.html')
                }else{
                    res.redirect('main2.html')
                }
            } else  {
                res.redirect('login.html')
            }
        }
    });
  })
//修改密码
app.get('/uppwd', function (req, res,next) {
    member = req.query.member;
    // console.log(member)
    oldPwd = req.query.oldPwd;
    newPwd = req.query.newPwd;
    renewPwd = req.query.renewPwd;
    if(renewPwd === newPwd){
        t_member.findOne({member: member}, function (err, content) {
            if (err) {
                res.redirect('uppwd.html')
            } else {
                var pwd = content.password;
                // console.log(position);
                if (pwd === oldPwd) {
                    t_member.updateOne({"member" :member},{"password":newPwd})
                    .then(result =>console.log(result))
                    res.redirect('main2.html')
                    
                } else  {
                    res.redirect('uppwd.html')
                }
            }
        });

    }else{
        res.redirect('uppwd.html')
    }
  })
//违规事件登记
app.get('/ViolationAction', function (req, res,next) {
    username = req.query.username;
    message = req.query.message;
    time = req.query.time;
    t_member.findOne({member: username}, function (err, content) {console.log(content)
        var roomNo = content.roomNo;
        var phone = content.phone;
        const violations = new t_violation({ member:username,violation:message,violation_time:time,
            roomNo:roomNo,phone:phone});
            violations.save()
    });
    // t_member.find({member:member},(err,data)=>{console.log(data)})
    res.redirect('violation.html')
  })
//水电费缴纳
app.get('/RoomCoast', function (req, res,next) {
    roomNo = req.query.roomNo;
    waterfee = parseFloat(req.query.waterfee);
    elecfee = parseFloat(req.query.elecfee);

    // console.log(waterfee)
    // console.log(elecfee)
    // const roomcosts = new t_room({ roomNo:roomNo,waterFee:waterfee,elecFee:elecfee});
    // roomcosts.save()
    t_room.findOne({roomNo: roomNo}, function (err, content) {console.log(content)

        var waterFee_be = content.waterFee;
        var elecFee_be = content.elecFee;
        // console.log(waterFee_be)
        // console.log(elecFee_be)
        var waterfees = waterFee_be+waterfee
        var elecfees = elecFee_be+elecfee
        // console.log(waterfees)
        // console.log(elecfees)
        t_room.updateOne({"roomNo" :roomNo},{"waterFee":waterfees,"elecFee":elecfees})
        .then(result =>console.log(result))
    });
    res.redirect('roomcost.html')
  })

// t_violation.find().then((infos) => {
// // 模板渲染
// app.set('views', 'mys');
// app.set('view engine', 'ejs');
// app.get('/ownviolation', (req, res, next) => {
//     res.render('movie', {
//         message: infos
//     });
// });
// })
app.get('/ownviolation', function (req, res,next) {
    member = req.query.member;
    t_member.findOne({member: member}, function (err, content) {console.log(content)
        var roomNo = content.roomNo;
        var phone = content.phone;
        console.log(roomNo)
        console.log(phone)
    t_violation.findOne({member: member}, function (err, data) {console.log(data)
        var violation = data.violation;
        var violation_time = data.violation_time;
        console.log(violation)
                console.log(violation_time)
    const server = http.createServer((req,res)=>{
        // console.log(req);
        const suburl=req.url.split('?')[0]
        const queryurl=req.url.split('?')[1]
        console.log(suburl)
        console.log(queryurl)
        // console.log(typeof(suburl))
        // console.log(firstData.split('=')[1])
        res.statusCode = 200;    
        if(queryurl==='member'){
            ejs.renderFile('ownviolation.html', {member:member,roomNo:roomNo,violation:violation,
                violation_time:violation_time,phone:phone}, function(err, str){
                // str => 输出渲染后的 HTML 字符串
                
                
            })
        }else{console.log("chucuol!")}
    })
        });
    });
})

app.listen(10407)