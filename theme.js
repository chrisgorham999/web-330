// if local storage doesn't have a default, it sets it to light
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// sets the theme to whatever the user selects; if they haven't selected one, it sets it to light
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}