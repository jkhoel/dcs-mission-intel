/* global MissionIntelApp */
MissionIntelApp.Notes = function() {

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
        var noteID = new Date().getTime();
        var parentID = '';

        var notes = document.getElementById('mode-notes-content');
        var node = document.createElement("LI");


        node.innerHTML = "<div><textarea class='note-title' id='note-title' placeholder='Untitled' maxlength='10'></textarea>" +
            "<textarea class='note-content' id='note-content' placeholder='Your content here'/></textarea>" +
            "<a href='#' id='mode-notes-controls-remove' noteID='" + noteID + "C'>×</a></div>";

        notes.appendChild(node);

        if (title) {
            notes.lastChild.childNodes[0].childNodes[0].value = title;
        };
        if (content) {
            notes.lastChild.childNodes[0].childNodes[1].value = content
        };

        // Add custom attributes and html to the new node (note)
        notes.lastChild.setAttribute("noteID", noteID);
        // notes.lastChild.childNodes[0].childNodes[2].setAttribute("noteID",noteID+'C');

        //  console.log(notes.querySelector('[noteID="' + noteID + '"]'))

        // EVENT: Delete note if X is pressed:
        notes.querySelector('[noteID="' + noteID + 'C"]').onclick = function() {
            parentID = this.parentElement.parentElement.getAttribute("noteID");
            console.log(parentID + '//' + notes.querySelector('[noteID="' + noteID + 'C"]').getAttribute("noteID"));

            notes.removeChild(notes.querySelector('[noteID="' + parentID + '"]'));
            saveNotes();
        };

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
