/*隐藏为空的标签*/
let mya=$(".dangao-li .biaoqian a");
// console.log(mya.innerText);
for (var i=0;i<mya.length;i++) {
    if (mya[i].innerText==""){
        $(mya[i]).css({
            display:"none"
        })
    }
}