/* ===================================
   COMMUNITY EVENT PORTAL JAVASCRIPT
=================================== */

/* ===================================
   PAGE LOAD
=================================== */

window.onload = function ()
{
    console.log("Welcome to the Community Portal");

    alert("Page Loaded Successfully!");

    loadPreference();

    displayEvents();

    const { name, date } = events[0];
    console.log(name, date);

    const copiedEvents = [...events];
    console.log(copiedEvents);

    Object.entries(events[0]).forEach(
        ([key, value]) =>
        {
            console.log(key, value);
        }
    );

    let eventNames =
    events.map(event =>
    `Workshop on ${event.name}`);

    console.log(eventNames);
};

/* ===================================
   EVENT CLASS & PROTOTYPE
=================================== */

class Event
{
    constructor(name, date, seats, category)
    {
        this.name = name;
        this.date = date;
        this.seats = seats;
        this.category = category;
    }
}

Event.prototype.checkAvailability =
function ()
{
    return this.seats > 0;
};

/* ===================================
   EVENT DATA
=================================== */

const events = [

{
    name: "Music Festival",
    date: "2026-06-15",
    seats: 50,
    category: "Music"
},

{
    name: "Sports Meet",
    date: "2026-07-01",
    seats: 30,
    category: "Sports"
},

{
    name: "Workshop",
    date: "2026-06-25",
    seats: 20,
    category: "Education"
},
{
    name: "Dance Show",
    date: "2026-06-15",
    seats: 50,
    category: "Dance"
},
{
    name: "Food Festival",
    date: "2026-06-15",
    seats: 50,
    category: "Food"
},
{
    name: "Art Exhibition",
    date: "2026-06-15",
    seats: 50,
    category: "Art"
}

];

/* ===================================
   ADD EVENT
=================================== */

function addEvent(name, date, seats, category)
{
    events.push({
        name,
        date,
        seats,
        category
    });

    displayEvents();
}

/* ===================================
   CLOSURE
=================================== */

function registrationTracker()
{
    let total = 0;

    return function ()
    {
        total++;
        return total;
    };
}

const trackRegistration =
registrationTracker();

/* ===================================
   DISPLAY EVENTS
=================================== */

function displayEvents()
{
    let eventContainer =
    document.querySelector("#eventList");

    if(eventContainer)
    {
        eventContainer.innerHTML = "";

        events.forEach(function(event,index)
        {
            if(
                event.seats > 0 &&
                new Date(event.date) >= new Date()
            )
            {
                let card =
                document.createElement("div");

                card.className = "eventCard";

                card.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date : ${event.date}</p>
                <p>Category : ${event.category}</p>

                <p>
                Available Seats :
                <span id="seat${index}">
                ${event.seats}
                </span>
                </p>

                <button onclick="registerUser(${index})">
                Register
                </button>
                `;

                eventContainer.appendChild(card);
            }
        });
    }
}

/* ===================================
   REGISTER USER
=================================== */

function registerUser(index)
{
    try
    {
        if(events[index].seats > 0)
        {
            events[index].seats--;

            document.getElementById(
            "seat" + index
            ).innerHTML =
            events[index].seats;

            alert(
            "Registration Successful for " +
            events[index].name +
            "\nTotal Registrations : " +
            trackRegistration()
            );
        }
        else
        {
            throw "No Seats Available";
        }
    }

    catch(error)
    {
        alert(error);
    }
}

/* ===================================
   PHONE VALIDATION
=================================== */

function validatePhone()
{
    let phone =
    document.getElementById("phone").value;

    let pattern =
    /^[0-9]{10}$/;

    if(pattern.test(phone))
    {
        document.getElementById("phoneMsg")
        .innerHTML =
        "Valid Number";

        document.getElementById("phoneMsg")
        .style.color =
        "green";
    }
    else
    {
        document.getElementById("phoneMsg")
        .innerHTML =
        "Enter Valid 10-digit Number";

        document.getElementById("phoneMsg")
        .style.color =
        "red";
    }
}

/* ===================================
   SHOW EVENT FEE
=================================== */

function showFee(fee)
{
    document.getElementById("fee")
    .innerHTML =
    "Event Fee : ₹" + fee;
}

/* ===================================
   CHARACTER COUNTER
=================================== */

function countCharacters()
{
    let feedback =
    document.getElementById("feedback")
    .value;

    document.getElementById("count")
    .innerHTML =
    feedback.length;
}

/* ===================================
   IMAGE ENLARGE
=================================== */

function enlargeImage(img)
{
    if(img.style.width === "300px")
    {
        img.style.width = "200px";
        img.style.height = "150px";
    }
    else
    {
        img.style.width = "300px";
        img.style.height = "200px";
    }
}

/* ===================================
   FORM VALIDATION
=================================== */

function validateForm(event)
{
    event.preventDefault();

    let form =
    document.getElementById("eventForm");

    if(form.checkValidity())
    {
        document.getElementById("message")
        .innerHTML =
        "Registration Successful!";

        document.getElementById("message")
        .style.color =
        "green";

        submitRegistration();
    }

    return false;
}

/* ===================================
   SAVE USER PREFERENCE
=================================== */

function savePreference()
{
    let event =
    document.getElementById("eventType")
    .value;

    localStorage.setItem(
    "preferredEvent",
    event
    );

    sessionStorage.setItem(
    "currentEvent",
    event
    );

    alert("Preference Saved");
}

/* ===================================
   LOAD PREFERENCE
=================================== */

function loadPreference()
{
    let savedEvent =
    localStorage.getItem(
    "preferredEvent"
    );

    if(savedEvent)
    {
        document.getElementById(
        "eventType"
        ).value =
        savedEvent;
    }
}

/* ===================================
   CLEAR PREFERENCE
=================================== */

function clearPreference()
{
    localStorage.clear();

    sessionStorage.clear();

    document.getElementById(
    "eventType"
    ).value = "";

    alert(
    "Preferences Cleared"
    );
}

/* ===================================
   VIDEO READY
=================================== */

function videoReady()
{
    alert(
    "Video Ready To Play"
    );
}

/* ===================================
   GEOLOCATION
=================================== */

function findLocation()
{
    navigator.geolocation
    .getCurrentPosition(

        function(position)
        {
            document.getElementById(
            "location"
            ).innerHTML =

            "Latitude : " +
            position.coords.latitude +

            "<br>Longitude : " +
            position.coords.longitude;
        },

        function()
        {
            alert(
            "Location Access Denied"
            );
        },

        {
            enableHighAccuracy:true,
            timeout:5000
        }
    );
}

/* ===================================
   FILTER EVENTS
=================================== */

function filterEventsByCategory(category)
{
    let filtered =
    events.filter(event =>
    event.category === category);

    console.log(filtered);

    return filtered;
}

/* ===================================
   FETCH USING THEN/CATCH
=================================== */

function fetchEventsUsingPromise()
{
    fetch(
    "https://jsonplaceholder.typicode.com/posts"
    )
    .then(response =>
    response.json())
    .then(data =>
    console.log(data))
    .catch(error =>
    console.log(error));
}

/* ===================================
   FETCH USING ASYNC/AWAIT
=================================== */

async function fetchEvents()
{
    try
    {
        let response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        let data =
        await response.json();

        console.log(data);
    }

    catch(error)
    {
        console.log(
        "Error Fetching Data"
        );
    }
}

/* ===================================
   AJAX SIMULATION
=================================== */

function submitRegistration()
{
    setTimeout(() =>
    {
        console.log(
        "Registration Submitted"
        );

    }, 2000);
}

/* ===================================
   KEYBOARD EVENT
=================================== */

document.addEventListener(

"keydown",

function(event)
{
    console.log(
    "Key Pressed : " +
    event.key
    );
}

);

/* ===================================
   BEFORE UNLOAD
=================================== */

window.onbeforeunload =
function()
{
    return "Are you sure you want to leave?";
};

/* ===================================
   JQUERY EXAMPLE
=================================== */

/*
$('#registerBtn').click(function()
{
    $('.eventCard').fadeIn();
});

Benefit of React/Vue:
Reusable components and easier UI updates.
*/