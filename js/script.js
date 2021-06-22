// $(document).ready(function() {
//     $("#development-icon").click(function() {
//         $("#development-ic").slideDown('1500').hide('1000');
//         $("#development").show('1500');
//     });
//     $("#development").click(function() {
//         $("#development").slideUp('1500');
//         $("#development-ic").slideDown('1500');
//     });
// });
// $(document).ready(function() {
//     $("#design-icon").click(function() {
//         $("#design-ic").slideDown('1500').hide('1000');
//         $("#design").show('1500');
//     });
//     $("#design").click(function() {
//         $("#design").slideUp('1500');
//         $("#design-ic").slideDown('1500');
//     });
// });

// $(document).ready(function() {
//     $("#product-icon").click(function() {
//         $("#product-mgt").slideDown('1500').hide('1000');
//         $("#product").show('1500');
//     });
//     $("#product").click(function() {
//         $("#product").slideUp('1500');
//         $("#product-mgt").slideDown('1500');
//     });
//     $("#submit").click(function() {
//         submit();
//         event.preventDefault();
//     });
// });

// $('.portimg').hover(function() {
//     $('.porttext', this).slideToggle('slow');
// }, function() {
//     $('.porttext', this).slideToggle('slow');
// });

// function submit() {
//     var name = document.getElementById("name").value;
//     var messages = document.getElementById("message").value;
//     if (name, messages == '') {
//         alert("Make sure all field are filled")
//     } else {
//         alert("Thank you for contacting us. we have received your message" + ' ' + name);
//     }
// };

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

barry($("#des"), $("#prac"));
barry($("#assets"), $("#para"));
barry($("#mana"), $("#ment"));

(".class").hover(function() {
    $(this).children(".lay").slideToggle(1000, "linear");
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