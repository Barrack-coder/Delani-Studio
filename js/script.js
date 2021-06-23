function barry(a,b) {
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
barry($("#mana"), $("#ment"));

$('.lay').hover(function() {
    $(this).children('.wonger').slideToggle(1000, 'linear');
});

$("button").click(function(barry) {
    alert(' Dear ' + 'customer' + ' Thank you for contacting us. We have received your message ' + ' we are there for you');
    barry.preventDefault();
});

$("button").on('click', function() {
    $('form').each(function() {
        this.reset();
    });
});