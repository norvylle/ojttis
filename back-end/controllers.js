'use strict';
var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'companyrecords'
});


exports.search = (req,res,next) => {
	var que = 'select * from '+req.query.database+' where '+req.query.pk+'= "'+req.query.value+'"';
	c.query(que,[],(err,result) =>{
		res.send(result);
	});
}


exports.view = (req,res,next) => {
	var que = 'select * from '+req.query.database;
	c.query(que,[],(err,result) => {
		res.send(result);
	});
}

exports.view_candidates = (req,res,next) =>{
	var que = 'select * from student where student_no in (select student_no from candidate)';
	c.query(que,[],(err,result) => {
		res.send(result);
	});
}

exports.view_ojthandled = (req,res,next) =>{
	c.query('select company_name,address,count(company_name) as e from intern natural join company group by company_name',[],(err,result) =>{
		res.send(result);
	});
}

exports.view_two = (req,res,next) =>{
	c.query('select * from intern right join student on intern.student_no=student.student_no',[],(err,result)=>{
		res.send(result);
	})
}

exports.delete = (req,res,next) => {
	var data = JSON.parse(req.query.state);
	if(data.database === 'intern'){
		c.query('delete from intern where student_no=?',[data.studno],(err,result) =>{
			res.send(result);
		});
	}
	if(data.database === 'student'){
		c.query('delete from student where student_no=?',[data.studno],(err,result) =>{
			res.send(result);
		});
	}
	if(data.database === 'company'){
		c.query('delete from company where company_name=?',[data.company_name],(err,result) =>{
			res.send(result);
		});
	}
}

exports.insert = (req,res,next) => {
	var data = JSON.parse(req.query.state);

	if(data.database === 'intern'){
		c.query('insert into intern values(?,?,?,?,?)',[data.date_started,data.hrsworked,data.hrsreq,data.studno,data.company_name],(err,result) =>{
				res.send(result);
			});
		}
	if(data.database === 'student'){
		c.query('insert into student values(?,?,?,?,?,?,?)',[data.studno,data.lname,data.fname,data.school,data.course,data.units,data.scholarship],(err,result) =>{
		res.send(result);
	});
	}
	if(data.database === 'company'){
		c.query('insert into company values(?,?)',[data.company_name,data.address],(err,result) =>{
		res.send(result);
	});
	}
		
}

exports.edit = (req,res,next) => {
	var data = JSON.parse(req.query.state);
	console.log(data);
	var que = 'update '+data.database+" set "+data.update+"='"+data.value+"' where "+data.key+"='"+data.search+"'";
	c.query(que,[],(err,result) => {
		res.send(result);
	});
}