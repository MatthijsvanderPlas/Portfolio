let list = document.getElementsByTagName('a');

for (let i of list){
    i.addEventListener('click', function(e) {
        e.preventDefault(); 
        if (i.outerText === 'Home') {
            document.getElementById('text').innerHTML = 'this is home';
        }
        if (i.outerText === 'Projects') {
            document.getElementById('text').innerHTML = 'this is projects';
        }
       
    });
}