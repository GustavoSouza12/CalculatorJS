function setContent(num){
    document.form.textview.value =  document.form.textview.value + num

    }

function equal(){
    var container = document.form.textview.value;
    if(container){
        document.form.textview.value = eval(container)
    }
}    

function clean(){
    document.form.textview.value = '';
}

function backOneNumber(){
    var container = document.form.textview.value;
    document.form.textview.value = container.substring(0, container.length-1)
}