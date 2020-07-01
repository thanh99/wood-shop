const view = {};

view.showComponents = function(name){
    switch(name) {
        case 'main':{
            let app = document.getElementById('admin');
            app.innerHTML = components.header + components.table + components.footer;
        }
    }
} 