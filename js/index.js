function reset(){
  console.log('reloading');
  location.reload();
}

function start(){
  /*document.getElementById("pointer").classList.add('startTiming');*/
  var time = document.getElementById("time").value;
  var pointer = document.getElementById("pointer");
      pointer.style.animation = 'timepass ' + time +'s linear';
  document.getElementsByTagName('body')[0].style.animation = 'timebackground ' + time +'s linear';
  
  var int = setInterval(runtime,1000);
    
  function runtime(){
    if(document.getElementById('time').value<=0){
      clearInterval(int);
    } else {
      document.getElementById('time').value-=1;
    }
  }
  
  setTimeout(function(){
    alert("Time Finished!")
  },time*1000);
  
}