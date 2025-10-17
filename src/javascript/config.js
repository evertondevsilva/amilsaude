// src/javascript/config.js
const WHATSAPP_NUMBER = "5511947487633";
const WHATSAPP_TEXT = "(11) 94748-7633";

const landingConfig = {

    colors: {
        "primary-1": "#e5f3ffff",
        "primary-2": "#7dbff8ff",
        "primary-3": "#62b6ffff",
        "primary-4": "#42a4faff",
        "primary-5": "#a8d5faff",
        "primary-6": "#3856ffff",
        "neutral-0": "#fff",
        "neutral-1": "#1d1d1d"
    },

    // 🏷️ Informações gerais
    title: "Amil Planos de Saúde",
    logoIcon: "fa-solid fa-truck-medical",
    logoText: "amil",


    // 🏠 Seção inicial
    home: {
        title: "O plano que atende <span>sua família</span>",
        description: "Planos de saúde com cobertura nacional e preços acessíveis.",
        ctaText: "Solicitar Cotação",
        ctaIcon: "fa-solid fa-arrow-right",
        whatsappNumber: WHATSAPP_NUMBER,
        whatsappText: WHATSAPP_TEXT,
        bannerImage: "src/images/hero.png",
    },

    // 🍽️ Seção de planos / cardápio
    menu: {
        sectionTitle: "Planos disponíveis",
        sectionSubtitle: "Temos o plano ideal para você e sua família",
        showPrice: false,
        iconTop: "fa-solid fa-stethoscope",
        iconShopping: "fa-solid fa-basket-shopping",
        items: [
            {
                title: "Amil Bronze",
                description: "Cobertura regional com o melhor custo-benefício.",
                image: "src/images/item1.png",
                price: 200.00, // valor numérico
            },
            {
                title: "Amil Prata",
                description: "Rede ampla e atendimento em todo o Brasil.",
                image: "src/images/item2.png",
                price: 350.00,
            },
            {
                title: "Amil Ouro",
                description: "Cobertura mundial, atendimento VIP.",
                image: "src/images/item3.png",
                price: 0, // se quiser ocultar preço
            },
            {
                title: "Amil Platinium",
                description: "Cobertura mundial, atendimento VIP.",
                image: "src/images/item4.png",
                price: 0, // se quiser ocultar preço
            }
        ]
    },

    // 💬 Depoimentos
    testimonials: {
        title: "Depoimentos",
        subtitle: "O que os clientes falam sobre nós",
        imageMain: "src/images/iconTestimonials.png",
        feedbacks: [
            {
                name: "Maria Silva",
                avatar: "src/images/avatar.png",
                text: "Excelente atendimento e plano com ótimo custo-benefício!",
                stars: 5,
            },
            {
                name: "João Pereira",
                avatar: "src/images/avatar2.png",
                text: "Atendimento rápido e prático. Super recomendo!",
                stars: 5,
            },
        ],
    },

    // 📞 Rodapé
    footer: {
        copyright: "© 2025 Amil Planos de Saúde",
        social: {
            whatsapp: "https://wa.me/${WHATSAPP_NUMBER}",
            instagram: "https://instagram.com/seu_perfil",
            facebook: "https://facebook.com/seu_perfil",
        },
    },
};
