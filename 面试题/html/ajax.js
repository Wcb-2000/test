/*
 * Author: 吴楚标
 * Date: 2021-07-11 18:53:35
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-12 16:32:31
 * Description: 
*/
const xhr = new XMLHttpRequest();
let response = null;
xhr.open('GET','./data.json',true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      // console.log(JSON.parse(xhr.responseText));
      response = JSON.parse(xhr.responseText);
      // alert(xhr.responseText);
    }else{
      console.log('err');
    }
  }
}
xhr.send(null);
console.log(response);
console.log(response.length);




// 创建个文档片段，此时还没有插入到DOM中
let frag = document.createDocumentFragment();

const lists = document.getElementById('lists');
// 执行插入到文档片段
for(let i =0;i<response.length;i++){
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox';
  checkBox.id = i;
  const li = document.createElement('li');
  li.id = i;
  li.innerHTML = `  ${response[i].label}`; 
  frag.appendChild(checkBox);
  frag.appendChild(li);
}
// 都完成，再插入到DOM中
lists.appendChild(frag);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
  response.push({label:'新增插件'})
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox';
  checkBox.id = response.length -1;
  const li = document.createElement('li');
  li.id = response.length - 1;
  li.innerHTML = `这是第 a 个li,名字是 新增表单`; 
  frag.appendChild(checkBox);
  frag.appendChild(li);
  lists.appendChild(frag);
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    var inputs = document.getElementsByTagName('input');
    var lis = document.getElementsByTagName('li')
    for(let i =0;i<inputs.length;i++){
      if(inputs[i].checked){
        lists.removeChild(inputs[i]);
        lists.removeChild(lis[i]);
        response.splice(i,1);
        console.log(response);
      }
    }
})
