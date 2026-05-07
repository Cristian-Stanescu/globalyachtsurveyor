document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.main-header .header-inner');

    headers.forEach(function (headerInner) {
        var toggle = headerInner.querySelector('.nav-toggle');
        var nav = headerInner.querySelector('nav.main-nav');

        if (!toggle || !nav) {
            return;
        }

        if (!nav.id) {
            nav.id = 'site-nav';
        }

        toggle.setAttribute('aria-controls', nav.id);

        var setExpanded = function (expanded) {
            toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            nav.classList.toggle('is-open', expanded);
        };

        setExpanded(false);

        toggle.addEventListener('click', function () {
            var isOpen = toggle.getAttribute('aria-expanded') === 'true';
            setExpanded(!isOpen);
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                setExpanded(false);
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 940) {
                setExpanded(false);
            }
        });
    });
});
