const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

function displayMenu(){
    console.log('open <favorite>        : Open a saved favorite.');
    console.log('add <favorite> <url>   : Add a new favorite for some URL.');
    console.log('rm <favorite>          : Remove a saved favorite.');
}

function open(favorite){
    console.log('Opening', favorite);
}

function add(favorite, url){
    console.log('Adding', favorite, 'for', url);
}

function rm(favorite){
    console.log("Removing:", favorite);
}

if(!command || !favorite || command === 'help') {
    displayMenu();
}else{
    switch(command){
        case 'open':
            open(favorite);
            break;
        case 'add':
            if(!url){
                displayMenu();
                break;
            }
            add(favorite, url);
            break;
        case 'rm':
            rm(favorite);
            break;
    }
}