
const hiddenBar = document.getElementById('hidden_bar');
const settignsButton = document.getElementById('settings_button');
const settingsContainer = document.getElementById('settings_hidden_bar');




function toggler() {
    if (hiddenBar.style.visibility === 'hidden') {
        hiddenBar.style.visibility = 'visible';
    }else {
        hiddenBar.style.visibility = 'hidden';
    }
}


function settingsToggler() {
    if (settingsContainer.style.visibility === 'hidden') {
        settingsContainer.style.visibility = 'visible';
    }else {
        settingsContainer.style.visibility = 'hidden';
    }
}