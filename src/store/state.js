export const state = {
    masks: [
        {
            id: 1,
            name: 'anime',
            background: [
                { src: '/assets/img/squad/anime/back/anime.jpg' },
                { src: '/assets/img/squad/anime/back/candyworld.jpg' },
                { src: '/assets/img/squad/anime/back/cartoon.jpg' },
                { src: '/assets/img/squad/anime/back/manga.jpg' },
            ],
            face: [
                {
                    id: 1,
                    src: '/assets/img/squad/anime/face/anime_disturb.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1,
                    scaleHeight: 1,
                    topAdj: 1.6,
                    leftAdj: -0.3
                },
                {
                    id: 2,
                    src: '/assets/img/squad/anime/face/anime_hair.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 3,
                    scaleHeight: 2,
                    topAdj: 0.7,
                    leftAdj: 0.18
                },
                {
                    id: 3,
                    src: '/assets/img/squad/anime/face/anime_hair2.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 2.5,
                    scaleHeight: 2,
                    topAdj: 0.4,
                    leftAdj: -0.04
                },
                {
                    id: 4,
                    src: '/assets/img/squad/anime/face/dipper_cap.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: 0.5,
                    leftAdj: -0.04
                },
                {
                    id: 5,
                    src: '/assets/img/squad/anime/face/anime_shame.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 0.6,
                    scaleHeight: 1,
                    topAdj: 1,
                    leftAdj: 0.47
                },
                {
                    id: 6,
                    src: '/assets/img/squad/anime/face/anime_stars.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: 0.05,
                    leftAdj: -0.04
                },
                {
                    id: 7,
                    src: '/assets/img/squad/anime/face/anime-eyes.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 1.3,
                    scaleHeight: 1.1,
                    topAdj: 0.14,
                    leftAdj: 0.05
                },
                {
                    id: 8,
                    src: '/assets/img/squad/anime/face/cat_ears.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 1.6,
                    scaleHeight: 1.6,
                    topAdj: 0.53,
                    leftAdj: 0.02
                },
                {
                    id: 9,
                    src: '/assets/img/squad/anime/face/elf_ears.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 1.6,
                    scaleHeight: 1.6,
                    topAdj: 0,
                    leftAdj: 0
                },
                {
                    id: 10,
                    src: '/assets/img/squad/anime/face/glasses_cartoon.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 1.6,
                    scaleHeight: 1.2,
                    topAdj: 0.185,
                    leftAdj: 0
                },
                {
                    id: 11,
                    src: '/assets/img/squad/anime/face/hearts.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 1.6,
                    scaleHeight: 1.2,
                    topAdj: 0.475,
                    leftAdj: 0.03
                },
                {
                    id: 12,
                    src: '/assets/img/squad/anime/face/ninja_donatello.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: -0.44,
                    leftAdj: 0.033
                },
                {
                    id: 13,
                    src: '/assets/img/squad/anime/face/ninja_leonardo.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: -0.44,
                    leftAdj: 0.033
                },
                {
                    id: 14,
                    src: '/assets/img/squad/anime/face/ninja_mikelangelo.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: -0.44,
                    leftAdj: 0.033
                },
                {
                    id: 15,
                    src: '/assets/img/squad/anime/face/ninja_rafael.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: -0.44,
                    leftAdj: 0.033
                },
                {
                    id: 16,
                    src: '/assets/img/squad/anime/face/ryuk-hand.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: -0.65,
                    leftAdj: -0.7
                },
                {
                    id: 17,
                    src: '/assets/img/squad/anime/face/superhero_glasses.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: 0.13,
                    leftAdj: 0
                },
                {
                    id: 18,
                    src: '/assets/img/squad/anime/face/unicorn.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2.2,
                    scaleHeight: 2,
                    topAdj: 0.45,
                    leftAdj: -0.05
                },
                
            ]            
        }, 
        {
            id: 2,
            name: 'blog',
            background: [
                { src: '/assets/img/squad/blog/back/badcomedian.jpg' },
                { src: '/assets/img/squad/blog/back/cemojii.jpg' },
                { src: '/assets/img/squad/blog/back/glitch.jpg' },
                { src: '/assets/img/squad/blog/back/navalniy.jpg' },
            ],
            face: [
                {
                    id: 1,
                    src: '/assets/img/squad/blog/face/beauty_makeup.png',
                    maskType: 'half',
                    scale: 1.5,
                    scaleWidth: 1.45,
                    scaleHeight: 1.8,
                    topAdj: 0.809,
                    leftAdj: 0.01
                },
                {
                    id: 2,
                    src: '/assets/img/squad/blog/face/big-russian-boos.png',
                    maskType: 'full',
                    scale: 1.5,
                    scaleWidth: 2.2,
                    scaleHeight: 2,
                    topAdj: 0.05,
                    leftAdj: 0.01
                },
                {
                    id: 3,
                    src: '/assets/img/squad/blog/face/horse-head.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 6,
                    scaleHeight: 2,
                    topAdj: 0.05,
                    leftAdj: 2.1
                },
                {
                    id: 4,
                    src: '/assets/img/squad/blog/face/Ilich_hair.png',
                    maskType: 'half',
                    scale: 2,
                    scaleWidth: 1.1,
                    scaleHeight: 1,
                    topAdj: 1.3,
                    leftAdj: 0
                },
                {
                    id: 5,
                    src: '/assets/img/squad/blog/face/ivleeva_hair.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 2.2,
                    scaleHeight: 1.6,
                    topAdj: 0.1,
                    leftAdj: 0
                },
                {
                    id: 6,
                    src: '/assets/img/squad/blog/face/lebedev_hair.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 1.8,
                    scaleHeight: 1.5,
                    topAdj: 0.3,
                    leftAdj: 0
                },
                {
                    id: 7,
                    src: '/assets/img/squad/blog/face/likes.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 1.8,
                    scaleHeight: 1.5,
                    topAdj: 0.3,
                    leftAdj: 0
                },
                {
                    id: 8,
                    src: '/assets/img/squad/blog/face/morgenshtern-tattoo.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 0.5,
                    scaleHeight: 0.5,
                    topAdj: 1.25,
                    leftAdj: 0.3
                },
                {
                    id: 9,
                    src: '/assets/img/squad/blog/face/morgenstern_hair.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 2,
                    scaleHeight: 1.5,
                    topAdj: -0.02,
                    leftAdj: -0.03
                },
                {
                    id: 10,
                    src: '/assets/img/squad/blog/face/papich.png',
                    maskType: 'full',
                    scale: 2,
                    scaleWidth: 1.9,
                    scaleHeight: 1.4,
                    topAdj: 0.25,
                    leftAdj: 0.05
                },
                {
                    id: 11,
                    src: '/assets/img/squad/blog/face/PinkGuy.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 3.5,
                    scaleHeight: 4,
                    topAdj: 0.3,
                    leftAdj: 0.54
                },
                {
                    id: 12,
                    src: '/assets/img/squad/blog/face/polkovnik_bandau.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 1.4,
                    scaleHeight: 1.4,
                    topAdj: 0.52,
                    leftAdj: 0
                },
                {
                    id: 13,
                    src: '/assets/img/squad/blog/face/thuglife_glasses.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1.4,
                    scaleHeight: 1.4,
                    topAdj: 0.8,
                    leftAdj: 0
                },
                {
                    id: 14,
                    src: '/assets/img/squad/blog/face/vladA4_hair.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 1.7,
                    scaleHeight: 1.7,
                    topAdj: 0.45,
                    leftAdj: 0
                },
            ]            
        },  
        {
            id: 3,
            name: 'rap',
            background: [
                { src: '/assets/img/squad/rap/back/graffity.jpg' },
                { src: '/assets/img/squad/rap/back/money.jpg' },
                { src: '/assets/img/squad/rap/back/vaporwave1.jpg' },
                { src: '/assets/img/squad/rap/back/vaporwave2.jpg' },
            ],
            face: [
                {
                    id: 1,
                    src: '/assets/img/squad/rap/face/6ix9ine_hair.png',
                    maskType: 'full',
                    scale: 1.2,
                    scaleWidth: 2.2,
                    scaleHeight: 1.5,
                    topAdj: 0,
                    leftAdj: 0
                },
                {
                    id: 2,
                    src: '/assets/img/squad/rap/face/21savage.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 0.5,
                    scaleHeight: 0.75,
                    topAdj: 1.1,
                    leftAdj: 0
                },
                {
                    id: 3,
                    src: '/assets/img/squad/rap/face/bigbabytape_glasses.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 1.5,
                    scaleHeight: 1,
                    topAdj: 0.18,
                    leftAdj: 0
                },
                {
                    id: 4,
                    src: '/assets/img/squad/rap/face/bigbabytape_hat.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 1.6,
                    scaleHeight: 1.2,
                    topAdj: 0.5,
                    leftAdj: 0
                },
                {
                    id: 5,
                    src: '/assets/img/squad/rap/face/cardib_style.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 2.5,
                    scaleHeight: 1.5,
                    topAdj: 0.02,
                    leftAdj: 0
                },
                {
                    id: 6,
                    src: '/assets/img/squad/rap/face/face_tattoo.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1,
                    scaleHeight: 1.5,
                    topAdj: 0.42,
                    leftAdj: 0
                },
                {
                    id: 7,
                    src: '/assets/img/squad/rap/face/gold-chain1.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 2.2,
                    scaleHeight: 2.2,
                    topAdj: -1.64,
                    leftAdj: 0.1
                },
                {
                    id: 8,
                    src: '/assets/img/squad/rap/face/gold-chain2.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 2.4,
                    scaleHeight: 2.4,
                    topAdj: -1.55,
                    leftAdj: 0.05
                },
                {
                    id: 9,
                    src: '/assets/img/squad/rap/face/lean.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1.5,
                    scaleHeight: 2,
                    topAdj: -1.1,
                    leftAdj: -0.6
                },
                {
                    id: 10,
                    src: '/assets/img/squad/rap/face/lil_peep.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 0.5,
                    scaleHeight: 0.5,
                    topAdj: 1.5,
                    leftAdj: -0.2
                },
                {
                    id: 11,
                    src: '/assets/img/squad/rap/face/lil-yachty-braids.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 3,
                    scaleHeight: 3,
                    topAdj: 0.08,
                    leftAdj: 0.23
                },
                {
                    id: 12,
                    src: '/assets/img/squad/rap/face/locdog_hair.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 3,
                    scaleHeight: 3,
                    topAdj: 0.95,
                    leftAdj: 0.15
                },
                {
                    id: 13,
                    src: '/assets/img/squad/rap/face/quavo_grillz.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1,
                    scaleHeight: 1.5,
                    topAdj: 0.05,
                    leftAdj: 0
                },
                {
                    id: 14,
                    src: '/assets/img/squad/rap/face/technique.png',
                    maskType: 'full',
                    scale: 1,
                    scaleWidth: 2,
                    scaleHeight: 2,
                    topAdj: 0.17,
                    leftAdj: 0
                },
                {
                    id: 15,
                    src: '/assets/img/squad/rap/face/xxxtentacion_tattoo.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 0.5,
                    scaleHeight: 0.75,
                    topAdj: 1.2,
                    leftAdj: 0
                },
                {
                    id: 16,
                    src: '/assets/img/squad/rap/face/yunglean_tattoo.png',
                    maskType: 'half',
                    scale: 1,
                    scaleWidth: 1,
                    scaleHeight: 1,
                    topAdj: -0.8,
                    leftAdj: 0
                },
            ]            
        }                
    ],
    final: [
        {
            id: 1,
            title: 'Дорогу президенту Галактической Федерации!',
            desc: 'Твои знания культовых мультов – именно то, что было нужно команде! Лови набор суперсил:',
            emoji: 'smile',
            skills: [
                {precent: 13, name:'злой Морти'},
                {precent: 25, name:'персонаж второго плана “Ржем с конем”'},
                {precent: 40, name:'пилот Евангелион-04'},
                {precent: 12, name:'житель Конфетного Королевства'},
                {precent: 10, name:'ветеран Странногедона'},
            ],            
            rule: 'Итак, приключение на 5 минут, туда и обратно! Поделись фото с тэгом <span>#форсимfantola</span> на своей странице и жди — может быть, нейросеть Fantola подарит рарный айтем именно тебе!'         
        },
        {
            id: 2,
            title: 'Больше лайков королю трендов!',
            desc: 'Нейросети не устоят под твоим напором, как телик перед Tik Tok. В скваде давно нужен был человек с твоими скиллами:',
            emoji: 'like',
            skills: [
                {precent: 5, name:'звезда подтанцовки Little&nbsp;Big'},
                {precent: 33, name:'бро Влада А4'},
                {precent: 15, name:'тиктокер из Dream Team House'},
                {precent: 27, name:'DIY-король'},
                {precent: 20, name:'знаток годных лайфхаков'},
            ],
            rule: 'Пришло время первого челленджа: поделись фото с тэгом <span>#форсимfantola</span> на своей странице и жди — может быть, нейросеть Fantola подарит рарный айтем именно тебе!'             
        },
        {
            id: 3,
            title: 'Ты даже выше, чем Фреско!',
            desc: 'Удали злые нейросети как Трилл Пилл удалил грустную песню! В лице тебя гэнг приобрел свежую кровь с уникальным набором талантов:',
            emoji: 'cool',
            skills: [
                {precent: 69, name:'мамбл-рэпер'},
                {precent: 3, name:'Слава Марлов'},
                {precent: 8, name:'опасный МС с блока Чипинкоса'},
                {precent: 10, name:'альтер-эго Boulevard Depo'},
                {precent: 20, name:'свидетель второго пришествия Джизуса'},
            ],
            rule: 'Настало время показать злым нейросетям, кому принадлежит улица! Поделись фото с тэгом <span>#форсимfantola</span> на своей странице и жди — может быть, нейросеть Fantola подарит рарный айтем именно тебе!'             
        }
    ],
    resultImg: 0
}

