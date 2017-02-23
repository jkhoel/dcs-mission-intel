/* global MissionIntelApp */
MissionIntelApp.Notes = function(app) {

    this.save = function() {
        saveNotes();
    }

    var notes, count = 0;
    loadNotes();

    /* FUNCTION: SAVES notes */
    function saveNotes() {
        var notesArray = [];

        var index = 0;

        // get all <li>'s from the <ul>
        var notesCollection = document.getElementById('mode-notes-content').childNodes;

        // .. and for each <li> - get the content of the two textboxes
        notesCollection.forEach(function(value, key, listobj) {
            var title = value.childNodes[0].childNodes[0].value;
            var content = value.childNodes[0].childNodes[1].value;

            // .. and add this to the array notesArray
            notesArray.push({
                Index: key,
                Title: title,
                Content: content
            });
        });

        // Lastly, stringify to JSON and store in browser
        var jsonStr = JSON.stringify(notesArray);
        localStorage.setItem("mint-notes", jsonStr);
    };

    /* FUNCTION: ADDS notes */
    function addNote(title, content) {
        var ident = new Date().getTime();
        var parentID = '';

        var notes = document.getElementById('mode-notes-content');
        var node = document.createElement("LI");

        node.innerHTML = "<div><textarea class='note-title' id='note-title' placeholder='Untitled' maxlength='10' ident='" + ident + "TLE'></textarea>" +
            "<textarea class='note-content' id='note-content' placeholder='Your content here' ident='" + ident + "CON'/></textarea>" +
            "<a href='#' id='mode-notes-controls-remove' ident='" + ident + "DEL'>×</a></div>";

        notes.appendChild(node);

        if (title) {
            notes.lastChild.childNodes[0].childNodes[0].value = title;
        };
        if (content) {
            notes.lastChild.childNodes[0].childNodes[1].value = content
        };

        // Add custom attributes and html to the new node (note)
        notes.lastChild.setAttribute("ident", ident);

        // EVENT: Delete note if X is pressed:
        notes.querySelector('[ident="' + ident + 'DEL"]').onclick = function() {
            parentID = this.parentElement.parentElement.getAttribute("ident");
            console.log(parentID + '//' + notes.querySelector('[ident="' + ident + 'DEL"]').getAttribute("ident"));       // This apperantly has to be here in order for this to work!
            notes.removeChild(notes.querySelector('[ident="' + parentID + '"]'));
            saveNotes();
        };

        // EVENT: Save on lost focus of the TITLE field
        notes.querySelector('[ident="' + ident + 'TLE"]').onblur = function() {
            saveNotes();
        }

        // EVENT: Save on lost focus of the CONTENT field
        notes.querySelector('[ident="' + ident + 'CON"]').onblur = function() {
            saveNotes();
        }

        saveNotes();
    };

    /* FUNCTION: ADDS notes */
    function loadNotes() {
        var storedNotes = localStorage.getItem("mint-notes");

        if (storedNotes) {
            var notesArray = JSON.parse(storedNotes);
            count = notesArray.length;

            for (i = 0; i < count; i++) {
                var storedNote = notesArray[i];
                addNote(storedNote.Title, storedNote.Content);
            }
        }
    };

    /* EVENT: Add Note */
    document.getElementById("mode-notes-controls-add").onclick = function() {
        addNote();
    }
};
