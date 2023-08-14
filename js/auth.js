function signIn(username, password, remember) {
    const list = context.split("\n");
    for (const line of list) {
        if (line === `${username}:${password}`) {
            if (remember) {
                localStorage.setItem("signIn", username);
            }
            return true;
        }
    }

    return false;
}

function checkSignIn() {
    const signInUser = localStorage.getItem("signIn");
    const list = context.split("\n");
    for (const line of list) {
        if (line.startsWith(`${signInUser}:`)) {
            return true;
        }
    }

    return false;
}

if (!checkSignIn()) {
    $("#sign-in").show();
    $("#sign-in-error-box").hide();
} else {
    $("#sign-in").hide();
}

$(".sign-in-submit-btn").click(() => {
    const username = $("#sign-in-username").val();
    const password = $("#sign-in-password").val();
    const remember = $('#sign-in-remember').is(":checked");
    if (signIn(username, password, remember)) {
        $("#sign-in-error-box").hide();
        $("#sign-in").fadeOut();
        $("#sign-in-username").val("");
    } else {
        $("#sign-in-error-box").show();
    }
    $("#sign-in-password").val("");
});

$("#sign-out").click(() => {
    localStorage.removeItem("signIn");
    $("#sign-in-error-box").hide();
    $("#sign-in").fadeIn();
});
