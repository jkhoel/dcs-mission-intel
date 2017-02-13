/* global MissionIntelApp */
MissionIntelApp.SiteNavigation = function() {

    /* MODES: Main Dropdown Menu */
    document.getElementById("menu-mode-button").onclick = function() {
        var height = window.innerHeight;

        if (document.getElementById("menu-mode-dropdown").style.visibility == "visible") {
            document.getElementById("menu-mode-dropdown").style.visibility = "hidden";
            document.getElementById("menu-mode-dropdown").style.maxHeight = "0px";
        } else {
            document.getElementById("menu-mode-dropdown").style.visibility = "visible";
            document.getElementById("menu-mode-dropdown").style.maxHeight = height + "px";
        };
    }

    /* MODES: Notes ON/OFF */
    document.getElementById("menu-mode-notes").onclick = function() {
        if (document.getElementById("mode-notes-wrapper").style.visibility == "visible") {
            document.getElementById("mode-notes-wrapper").style.visibility = "hidden";
            document.getElementById("menu-mode-notes").innerHTML = "NOTES";
            document.getElementById("menu-mode-notes").style.color = "#777777";
            app.myNotes.save();
        } else {
            document.getElementById("mode-notes-wrapper").style.visibility = "visible";
            document.getElementById("menu-mode-notes").innerHTML = "SAVE & EXIT";
            document.getElementById("menu-mode-notes").style.color = "#2FA1D6";
        };
    }

    /* Window Overrides */
    window.onclick = function(event) {
        //  if(!event.target.matches('menu-mode-button')){
        //    document.getElementById("menu-mode-dropdown").style.display = "none";
        // }
    }

    /* GUI Element: Clock */
    setInterval(function() {
        var clockElement = document.querySelectorAll('#clock');
        var DateString = new Date().toGMTString();

        for (i = 0; i < clockElement.length; i++) {
            clockElement[i].textContent = DateString;
        }

    }, 1000);
};
