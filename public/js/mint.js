var MissionIntelApp = function() {

    /* VARIABLES */
    var selected = null, x_pos = 0, y_pos = 0, x_elem = 0, y_elem = 0;

    /* APP-WIDE FUNCTIONS */
    this.get = function(el) {
        get(el);
        return el;
    };

    this.makeDraggable = function(id) {
        makeDraggable(id);
        return id;
    };

    this.moveDraggable = function(e) {
        moveDraggable(e);
    };

    this.destroyDraggable = function() {
        destroyDraggable();
    };

    function get(el) {
        if (typeof el == 'string') return document.getElementById(el);
        return el;
    }

    function makeDraggable(elem) {
        selected = elem;
        x_elem = x_pos - selected.offsetLeft;
        y_elem = y_pos - selected.offsetTop;
    }

    function moveDraggable(e) {
        x_pos = document.all ? window.event.clientX : e.pageX;
        y_pos = document.all ? window.event.clientY : e.pageY;
        if (selected !== null) {
            selected.style.left = (x_pos - x_elem) + 'px';
            selected.style.top = (y_pos - y_elem) + 'px';
        }
    }

    function destroyDraggable() {
        selected = null;
    }

    /* INITIALIZATIONS */
    var notes = new MissionIntelApp.Notes(this);
    var navigation = new MissionIntelApp.SiteNavigation(this);
    var map = new MissionIntelApp.Map(this);

    // var gui = new MissionIntelApp.GUI(this);
    // var session = new MissionIntelApp.Session(gui);
    // session.initialize();

    /* PUBLIC DECLARATIONS OF THE ABOVE INITIALIZATIONS */
    this.myNotes = notes;
    this.siteNavigation = navigation;
    this.map = map;


    /* EVENTS */
    document.addEventListener("mouseup", function(e) {
        destroyDraggable();
    });

    document.addEventListener("mousemove", function(e) {
        moveDraggable(e);
    });

    get('map-filters-header').onmousedown = function() {
        makeDraggable(get('map-filters-container'));
        return false;
    };
};
