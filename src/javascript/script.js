$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })





    $(document).ready(function () {
        const cfg = landingConfig;

        // 🔹 Título da aba
        document.title = cfg.title;

        // 🔹 Navbar
        $("#nav_logo")
            .removeClass()
            .addClass(cfg.logoIcon)
            .html(` ${cfg.logoText}`);

        const colors = cfg.colors;

        for (const [key, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        }

        // 🔹 Home
        $("#home .title").html(cfg.home.title);
        $("#home .description").text(cfg.home.description);
        $("#home .bg-color-cta").html(`${cfg.home.ctaText} <i class="${cfg.home.ctaIcon}"></i>`);
        $("#banner img").attr("src", cfg.home.bannerImage);
        $(document).ready(function () {
            $('.request_quote').on('click', function () {
                const tipo = $(this).data('tipo');
                const text = 'Olá! Gostaria de mais informações sobre os planos da Amil.';
                const url = 'https://api.whatsapp.com/send?phone=' + cfg.home.whatsappNumber + '&text=' + encodeURIComponent(text);
                if (!/Mobi|Android/i.test(navigator.userAgent)) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            });
        });
        $("#phone_button")
            .attr("href", `https://wa.me/${cfg.home.whatsappNumber}`)
            .attr("target", "_blank")
            .html(`<button class="btn-default"><i class="fa-brands fa-whatsapp"></i></button> ${cfg.home.whatsappText}`);

        $("#whatsapp_floating")
            .attr("href", `https://wa.me/${cfg.home.whatsappNumber}`)
            .attr("target", "_blank")

        // 🔹 Menu (planos)
        $("#menu .section-title").text(cfg.menu.sectionTitle);
        $("#menu .section-subtitle").text(cfg.menu.sectionSubtitle);

        const $dishes = $("#dishes").empty();
        cfg.menu.items.forEach(item => {
            const showPriceClass = cfg.menu.showPrice ? "" : "hidden";
            const iconShopping = cfg.menu.iconShopping;
            const iconTop = cfg.menu.iconTop;

            $dishes.append(`
      <div class="dish">
        <div class="dish-heart"><i class="${iconTop}"></i></div>
        <img src="${item.image}" class="dish-image" alt="${item.title}">
        <h3 class="dish-title">${item.title}</h3>
        <span class="dish-description">${item.description}</span>
        <div class="dish-price ${showPriceClass}">
          <h4>R$ ${item.price.toFixed(2)}</h4>
          <button class="btn-default"><i class="${iconShopping}"></i></button>
        </div>
      </div>
    `);
        });

        // 🔹 Depoimentos
        $("#testimonials .section-title").text(cfg.testimonials.title);
        $("#testimonials .section-subtitle").text(cfg.testimonials.subtitle);
        $("#testimonial").attr("src", cfg.testimonials.imageMain);

        const $feedbacks = $("#feedbacks").empty();
        $.each(cfg.testimonials.feedbacks, function (_, fb) {
            const stars = '<i class="fa-solid fa-star"></i>'.repeat(fb.stars);
            $feedbacks.append(`
      <div class="feedback">
        <img src="${fb.avatar}" class="feedback-avatar" alt="${fb.name}">
        <div class="feedback-content">
          <p>${fb.name}<span>${stars}</span></p>
          <p>"${fb.text}"</p>
        </div>
      </div>
    `);
        });

        // 🔹 Rodapé
        $("#copyright").text(cfg.footer.copyright);
        $(".social-media-buttons a").eq(0).attr("href", cfg.footer.social.whatsapp);
        $(".social-media-buttons a").eq(1).attr("href", cfg.footer.social.instagram);
        $(".social-media-buttons a").eq(2).attr("href", cfg.footer.social.facebook);
    });

    $(document).ready(function () {
        var $btn = $('#whatsapp_floating');

        if (/Mobi|Android/i.test(navigator.userAgent)) {

            $btn.css({
                'padding': '10px',
                'gap': '0'
            });
            $btn.find('span').hide();
        }
    });
});

