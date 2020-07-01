const view = {};

view.showComponents = function(name){
    switch(name) {
        case 'main':{
            let app = document.getElementById('app');
            app.innerHTML = components.nav + components.ImageFlex + components.footer;
        }
    }
} 