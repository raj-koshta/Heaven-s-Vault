$('#mobileSearchIcon').click(function () {
    $('#megaSearch').slideToggle();
});

// Chevron toggle
$('.custom-select select').on('focus', function () {
    $(this).closest('.custom-select').addClass('open');
}).on('blur', function () {
    $(this).closest('.custom-select').removeClass('open');
});

$(function () {
    // Open Offcanvas
    $('.bi.bi-list').click(function () {
        $('#mobileSidebar').addClass('open');
        $('#sidebarBackdrop').addClass('show');
    });

    // Close Offcanvas
    $('#closeSidebar, #sidebarBackdrop').click(function () {
        $('#mobileSidebar').removeClass('open');
        $('#sidebarBackdrop').removeClass('show');
    });

    // Dropdown toggle (slide in-flow below)
    $('.has-dropdown > .dropdown-toggle').click(function (e) {
        e.preventDefault();
        var parent = $(this).closest('.has-dropdown');
        var submenu = parent.find('.dropdown-menu');

        if (parent.hasClass('open')) {
            submenu.slideUp(200);
            parent.removeClass('open');
        } else {
            submenu.slideDown(200);
            parent.addClass('open');
        }
    });
});
