/* global MissionIntelApp */
MissionIntelApp.SiteNavigation = function(app) {

    /* TODO IMPLEMENTERE get() I KODEN UNDER! */
    function get(el) {
        if (typeof el == 'string') return document.getElementById(el);
        return el;
    }

    /* MODES: Main Dropdown Menu */
    document.getElementById("menu-root-settings").onclick = function() {
        var height = window.innerHeight;

        if (document.getElementById("menu-mode-dropdown").style.visibility == "visible") {
            document.getElementById("menu-mode-dropdown").style.visibility = "hidden";
            document.getElementById("menu-mode-dropdown").style.maxHeight = "0px";
        } else {
            document.getElementById("menu-mode-dropdown").style.visibility = "visible";
            document.getElementById("menu-mode-dropdown").style.maxHeight = height + "px";
        }
    };

    /* MODES: Notes ON/OFF */
    document.getElementById("menu-root-2").onclick = function() {
          document.getElementById("menu-root-2").classList.toggle("nav-active");
          document.getElementById("mode-notes-wrapper").classList.toggle("block");
          document.getElementById("notes-submenu1").classList.toggle("block");
          app.myNotes.save();
    };

    /* NOTES Submenu */
    document.getElementById("menu-notes-sub-12").onclick = function() {
          app.myNotes.save();
          app.myNotes.addNote();
    };

    /* Window Overrides */
    // window.onclick = function(event) {     // MÅ SKIFTES MED EN addEventListener!!
        //  if(!event.target.matches('menu-mode-button')){
        //    document.getElementById("menu-mode-dropdown").style.display = "none";
        // }
    // }

    /* GUI Element: Clock */
    setInterval(function() {
        var clockElement = document.querySelectorAll('#clock');
        var DateString = new Date().toGMTString();

        for (i = 0; i < clockElement.length; i++) {
            clockElement[i].textContent = DateString;
        }

    }, 1000);
};
