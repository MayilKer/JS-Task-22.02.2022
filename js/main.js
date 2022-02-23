function changeColor() {
    let set = document.getElementById('change').value;
    document.body.setAttribute("class", set)
    
}

function Clear() {
    let axr = document.getElementById('sil').value;
    let see = axr.slice(0,axr.length-1);
    document.getElementById('sil').value = see;
}

