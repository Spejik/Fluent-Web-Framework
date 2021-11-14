// Switch between Light and Dark themes

function SwitchTheme ()
{
    var myElement = document.documentElement;

    if (getComputedStyle(myElement).getPropertyValue("--dark-color") == "rgb(30, 30, 30)") // Is dark theme?
    {
        SetLightTheme();
    }
    else
    {
        SetDarkTheme();
    }
}

// Set Dark theme

function SetDarkTheme ()
{
    var myElement = document.documentElement;

    myElement.style.setProperty("--dark-color", "rgb(30, 30, 30)");
    myElement.style.setProperty("--light-color", "rgb(40, 40, 40)");
    myElement.style.setProperty("--light-hover-color", "rgb(45, 45, 45)");
    myElement.style.setProperty("--light-border-color", "rgb(47, 47, 47)");
    myElement.style.setProperty("--focus-color", "rgba(45, 45, 45, 0.5)");
    myElement.style.setProperty("--text-color", "white");
    myElement.style.setProperty("--text-color-focus", "rgba(255, 255, 255, 0.75)");
    myElement.style.setProperty("--text-color-nobg", "rgb(185, 185, 185)");
    myElement.style.setProperty("--textbox-border-bottom", "rgb(180, 180, 180)");
    myElement.style.setProperty("--light-dark-color", "rgb(33, 33, 33)");
}

// Set Light theme

function SetLightTheme ()
{
    var myElement = document.documentElement;

    myElement.style.setProperty("--dark-color", "rgb(238, 238, 238)");
    myElement.style.setProperty("--light-color", "rgb(255, 255, 255)");
    myElement.style.setProperty("--light-hover-color", "rgb(250, 250, 250)");
    myElement.style.setProperty("--light-border-color", "rgb(203, 203, 203)");
    myElement.style.setProperty("--focus-color", "rgba(255, 255, 255, 0.5)");
    myElement.style.setProperty("--text-color", "black");
    myElement.style.setProperty("--text-color-focus", "rgba(0, 0, 0, 0.75)");
    myElement.style.setProperty("--text-color-nobg", "rgb(50, 50, 50)");
    myElement.style.setProperty("--textbox-border-bottom", "rgb(110, 110, 110)");
    myElement.style.setProperty("--light-dark-color", "rgb(248, 248, 248)");
}