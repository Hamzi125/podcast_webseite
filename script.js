var btn = document.getElementById("btn");
    var light = document.getElementById("light");

    function toggleBtn(){
        btn.classList.toggle("active")
        light.classList.toggle("on")
    }


window.addEventListener("load", function() {
    var loader = document.getElementById('loader');
    
    
        setTimeout(function() {
            loader.classList.add('hidden');

            setTimeout(function() {
                loader.style.display = 'none';
                
                localStorage.setItem('loaderShwon','true')
            }, 4000); 
            
        }, 3000);

});



