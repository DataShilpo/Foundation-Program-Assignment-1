// Question No. 1: Value Detective
function describeValue(value) {
    let type = typeof value;
    let truthiness = value ? "truthy" : "falsy";
    return type + " | " + truthiness;
}

// Question No. 2: Bangladesh Weekend Machine
function getDayType(day) {
    let normalizedDay = day.toLowerCase();
    switch (normalizedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// Question No. 3: Username Gatekeeper
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

// Question No. 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // The minimum fare for the first 2 km is 50 taka.

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    // Adding waiting charges (2 taka per minute)
    fare += waitingMinutes * 2;

    // A 20% surcharge will be added to the total fare for night-time trips.
    if (isNight) {
        fare += fare * 0.20;
    }

    return fare;
}

// Question No. 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};