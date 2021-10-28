const fs = require('fs');

let rawData = fs.readFileSync('1911067387_NguyenTranTuanTai_AI.json');
let student = JSON.parse(rawData);
student = student.map((value,index)=> {
	return {id:index,...value}
})
fs.writeFileSync("1911067387_NguyenTranTuanTai.json",JSON.stringify(student))
console.log(student);