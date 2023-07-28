
const data=[];
// document.findById("data").innerText=data;
const fun=()=>{
    console.log('CALLED');
    data.push(2);
    document.getElementById("data").innerText=data[0];
}