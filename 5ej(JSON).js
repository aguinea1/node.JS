const   obj = {name: "aitor",  edad: 21}
const   str = JSON.stringify(obj);
console.log(str);
const   final_obj = JSON.parse(str);
for(const key in final_obj){
    console.log(key + ":", final_obj[key]);    
}