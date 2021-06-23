function barry(a, b) {
    $(document).ready(function() {
        a.click(function() {
            a.toggle();
            b.toggle();
        });
        b.click(function() {
            a.toggle();
            b.toggle();
        });
    });
}

barry($('.des'), $('.prac'));
barry($(".assets"), $("#para"));
barry($("#mana"), $("#ment"))



function barrack() {
    let message = document.getElementById("message");
    let info = document.getElementById('message').value;
    if (info == "") {
        alert("invalid response")
        $(".button").on('click', function() {
            $('form').each(function() {
                this.reset();
            });
        });
    } else {
        alert("we have received your message")
    }
};