function signIn(username, password) {
    const list = context.split("\n");
    for (const line of list) {
        if (line === `${username}:${password}`) {
            localStorage.setItem("signIn", username);
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
    if (signIn(username, password)) {
        $("#sign-in-error-box").hide();
        $("#sign-in").fadeOut();
        $("#sign-in-username").val("");
    } else {
        $("#sign-in-error-box").show();
    }
    $("#sign-in-password").val("");
});

