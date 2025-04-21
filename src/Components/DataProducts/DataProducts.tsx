// src/Components/DataProducts/DataProducts.ts
export interface Product {
    id: number;
    name: string;
    description?: string;
    price?: number;
    // oldPrice?: number;
    discount?: string;
    imageUrl?: string;
    secondaryImageUrl?: string;
    gallery?: string[]; // Alterado para string[] pois você está usando require
    chocolateType?: string;
    productInfo?: string;
    ingredients: string[];
    category: string;
}

export const DataProducts: Product[] = [
    {
        id: 1,
        name: 'Ovo de Páscoa Recheado Lollo® Nestlé® 370g',
        description: 'Ovo de chocolate ao leite com recheio de mousse de chocolate em parceria com a Nestlé. O Sabor mais nostálgico e icônico amado pelos Brasileiros.',
        price: 69.99,
        category: 'ovo de páscoa',
        // oldPrice: 129.99,
        discount: '-4%',
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoLolloNestlé370g_5.png"),

        ],
        chocolateType: 'Ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de mousse de chocolate ao leite.',
        ingredients: [
            "• Ingredientes: açúcar, manteiga de cacau, marshmallow (açúcar, xarope de glicose, clara de ovo desidratada, estabilizante goma xantana, regulador de acidez tartarato monopotássico, aromatizante e conservador sorbato de potássio), pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, creme vegetal, estabilizante sorbitol, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, conservador sorbato de potássio e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN.",
        ],
    },
    {
        id: 2,
        name: 'Ovo de Páscoa Recheado KitKat® Nestlé® 370g',
        description: 'O Ovo de Páscoa KitKat® é a forma mais deliciosa de saborear seu chocolate favorito da Brasil Cacau. Feito em chocolate ao leite, conta com um recheio maravilhoso do favorito KitKat®. Parceria exclusiva que fará sucesso nessa Páscoa com os amantes de chocolate.',
        price: 59.90,
        category: 'ovo de páscoa',
        discount: '-50%',

        // oldPrice: 129.99,
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoKitKatNestlé370g_6.png")
        ],
        chocolateType: 'Chocolate com wafer',
        productInfo: 'Ovo de chocolate ao leite com pasta sabor chocolate com pedaços de wafer recheado e wafer recheado.',
        ingredients: [
            "• Ingredientes: chocolate ao leite (açúcar, leite em pó, manteiga de cacau, massa de cacau, gordura vegetal, gordura anidra de leite, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizante), pasta Sabor Chocolate com pedaços de wafer recheado (açúcar, leite em pó integral, gordura anidra de leite, massa de cacau, gordura vegetal, wafer recheado, emulsificante lecitina de soja e aromatizante) e wafer recheado (açúcar, farinha de trigo enriquecida com ferro, ácido fólico, tiamina, riboflavina, niacina e zinco, gordura vegetal, cacau em pó, leite em pó, massa de cacau, manteiga de cacau, gordura anidra de leite, sal, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, fermento químico bicarbonato de sódio, melhorador de farinha sulfato de cálcio e aromatizante). ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, SOJA E TRIGO. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVO E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN."
        ],
    },
    {
        id: 3,
        name: 'Ovo de Páscoa Recheado Meio a Meio Ovomaltine® 370g',
        price: 69.90,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Recheado Ovomaltine® 370g da Brasil Cacau é uma deliciosa colaboração que combina a expertise da renomada marca brasileira com a crocância e sabor característicos do Ovomaltine. Uma opção irresistível para os apreciadores de chocolate e fãs do Ovomaltine®.",
        // oldPrice: 129.99,
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMeioaMeioOvomaltine370g_6.png")
        ],
        chocolateType: 'Chocolate com wafer',
        productInfo: 'Ovo de chocolate ao leite com pasta sabor chocolate com pedaços de wafer recheado e wafer recheado.',
        ingredients: [
            "• Ingredientes: chocolate ao leite (açúcar, leite em pó, manteiga de cacau, massa de cacau, gordura vegetal, gordura anidra de leite, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizante), pasta Sabor Chocolate com pedaços de wafer recheado (açúcar, leite em pó integral, gordura anidra de leite, massa de cacau, gordura vegetal, wafer recheado, emulsificante lecitina de soja e aromatizante) e wafer recheado (açúcar, farinha de trigo enriquecida com ferro, ácido fólico, tiamina, riboflavina, niacina e zinco, gordura vegetal, cacau em pó, leite em pó, massa de cacau, manteiga de cacau, gordura anidra de leite, sal, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, fermento químico bicarbonato de sódio, melhorador de farinha sulfato de cálcio e aromatizante). ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, SOJA E TRIGO. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVO E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN."
        ],
    },
    {
        id: 4,
        name: 'Ovo de Páscoa Recheado Prestígio® Nestlé® 370g',
        price: 59.90,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo Recheado Prestígio em parceria com a Nestlé, da Brasil Cacau, é uma opção irresistível para os amantes de chocolate celebrarem a Páscoa. Com um generoso peso de 370g, este ovo traz a combinação perfeita de chocolate ao leite e um recheio delicioso inspirado no sabor clássico do Prestígio.",
        // oldPrice: 129.99,
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoPrestígio®Nestlé®370g_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de coco',
        ingredients: [
            "Açúcar, manteiga de cacau, pasta de cacau, coco ralado, xarope de glicose, leite em pó integral, água, soro de leite em pó parcialmente desmineralizado, creme vegetal, coco ralado desidratado, álcool de cereais, estabilizantes: sorbitol e carboximetilcelulose sódica, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, conservador sorbato de potássio e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 5,
        name: 'Ovo de Páscoa Recheado Chokito® Nestlé® 370g',
        price: 59.90,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Chokito® certamente é a parceria mais recheada da Brasil Cacau. Produzido com chocolate ao lete, o Ovo Chokito® conta com uma casca crocante com o inconfundível flocos de arroz Chokito® e um delicioso recheio de caramelo. Edição Limitada. Aproveite!",        // oldPrice: 129.99,
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoChokito®Nestlé®370g_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de coco',
        ingredients: [
            "Açúcar, manteiga de cacau, pasta de cacau, coco ralado, xarope de glicose, leite em pó integral, água, soro de leite em pó parcialmente desmineralizado, creme vegetal, coco ralado desidratado, álcool de cereais, estabilizantes: sorbitol e carboximetilcelulose sódica, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, conservador sorbato de potássio e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 6,
        name: 'Combo Páscoa Recheio Duo',
        price: 79.90,
        category: 'ovo de páscoa',
        discount: '-40%',
        description: "Contém: 1 Ovo de Páscoa Recheado Gato Mia Duo 410g, 1 Tablete Recheado Duo Gato Mia 90g, 2 Canudos Duo Turma da Mônica 20g e 2 Trufas Duo 30g.",
        imageUrl: require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_1.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_2.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_3.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_4.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Recheados',
        productInfo: 'Ovo de chocolate ao leite com recheio de coco',
        ingredients: [
            "Contém: 1 Ovo de Páscoa Recheado Gato Mia Duo 410g, 1 Tablete Recheado Duo Gato Mia 90g, 2 Canudos Duo Turma da Mônica 20g e 2 Trufas Duo 30g."],
    },
    {
        id: 7,
        name: 'Combo Páscoa Recheada Bem me Faz',
        price: 69.90,
        category: 'combo de páscoa',
        discount: '-50%',
        description: "Contém: 1 Ovo de Páscoa Recheado Trufado Bem me Faz 370g, 1 Gato Mia Bem me Faz 70g e 3 Bombons Bem me Faz Gato Mia 20g.",
        imageUrl: require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_1.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_2.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_4.png"),
            require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Recheados',
        productInfo: 'Zero Açúcar e Zero Lactose',
        ingredients: [
            "Contém: 1 Ovo de Páscoa Recheado Trufado Bem me Faz 370g, 1 Gato Mia Bem me Faz 70g e 3 Bombons Bem me Faz Gato Mia 20g."
        ],
    },
    {
        id: 8,
        name: 'Tablete Recheado Serenata de Amor® Garoto® 90g',
        category: 'barra de chocolate',
        price: 5.99,
        discount: '-20%',
        description: "Tablete Recheado Serenata de Amor® Garoto® 90g",
        imageUrl: require("../../Assets/ProductsImg/TableteRecheadoSerenatadeAmor®Garoto®90g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TableteRecheadoSerenatadeAmor®Garoto®90g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TableteRecheadoSerenatadeAmor®Garoto®90g_1.png"),
            require("../../Assets/ProductsImg/TableteRecheadoSerenatadeAmor®Garoto®90g_2.png"),
            require("../../Assets/ProductsImg/TableteRecheadoSerenatadeAmor®Garoto®90g_3.png"),

            // require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Tablete de chocolate ao leite com recheio de castanha de caju e caramelo crocante Serenata de Amor®.',
        ingredients: [
            "Açúcar, manteiga de cacau, pasta de cacau, leite em pó integral, pasta de castanha-de-caju, soro de leite em pó parcialmente desmineralizado, gordura vegetal, castanha-de-caju, creme de leite em pó, caramelo crocante, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizante. ALÉRGICOS: CONTÉM CASTANHA-DE-CAJU E DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."
        ],
    },
    {
        id: 9,
        name: 'Ovo de Páscoa Delírios de Pistache 558g ',
        price: 59.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "Ovo de chocolate ao leite com duplo recheio, sendo um recheio sabor brigadeiro branco e outro recheio de pistache + 4 unidade de minitrufa pistache. Uma explosão de sabor incomparável",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdePistache558g_6.png"),


            // require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Tablete de chocolate ao leite com recheio de castanha de caju e caramelo crocante Serenata de Amor®.',
        ingredients: [
            "o Ovo de chocolate ao leite com recheio branco sabor leite condensado e recheio de pistache Ingredientes: açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, pasta de cacau, soro de leite em pó parcialmente desmineralizado, creme vegetal, pistache, açúcar invertido, creme de leite em pó, cacau em pó, concentrado de espirulina, corante curcumina, estabilizante sorbitol, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato, aromatizantes e conservador sorbato de potássio. ALÉRGICOS: CONTÉM PISTACHE E DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN. o Minitrufa com pistache coberta com chocolate ao leite Ingredientes: açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, pasta de cacau, soro de leite em pó parcialmente desmineralizado, creme de leite em pó, pistache, cacau em pó, concentrado de espirulina, corante curcumina, emulsificantes: triestearato de sorbitana, lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM PISTACHE E DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA E NOZES. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."
        ],
    },
    {
        id: 10,
        name: 'Ovo de Páscoa Delírios de Dinda 555g',
        price: 59.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Delírios de Dinda apresenta um recheio irresistível de marshmallow, criando uma combinação de sabores que vai encantar os amantes de doces.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaDelíriosdeDinda555g_6.png"),


            // require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Chocolate ao leite',
        ingredients: [
            "o Ovo de chocolate ao leite com recheio de chocolate ao leite com pedaços de wafer e marshmallow Ingredientes: açúcar, manteiga de cacau, água, gordura vegetal, xarope de glicose, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, cacau em pó, farinha de trigo enriquecida com ferro e ácido fólico, creme de leite em pó, clara de ovos, amido modificado, óleo de soja, gema de ovos, sal, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato, aromatizantes, estabilizantes: ágar e carboximetilcelulose sódica, conservador sorbato de potássio, acidulante ácido cítrico e fermento químico bicarbonato de sódio. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, SOJA, OVO E TRIGO. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN. o Bombom de chocolate ao leite com recheio de marshmallow Ingredientes: açúcar, manteiga de cacau, leite em pó integral, água, xarope de glicose, pasta de cacau, soro de leite em pó parcialmente desmineralizado, clara de ovos, amido modificado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, estabilizantes: ágar e carboximetilcelulose sódica, aromatizantes, conservador sorbato de potássio e acidulante ácido cítrico. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."
        ],
    },
    {
        id: 11,
        name: 'Ovo de Páscoa Puro Recheio Dinda Chocolate 260g',
        price: 15.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Puro Recheio Dinda Chocolate possui 100% do irresistível recheio do nosso clássico marshmallow Dinda de chocolate e casca de chocolate ao Leite. Surpreenda-se a cada mordida!",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_5.png"),


            // require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de mousse de chocolate ao leite.',
        ingredients: [
            "Açúcar, marshmallow (açúcar, xarope de glicose, clara de ovo desidratada, estabilizante goma xantana, regulador de acidez tartarato monopotássico, aromatizante e conservador sorbato de potássio), manteiga de cacau, pasta de cacau, creme vegetal, leite em pó integral, soro de leite em pó parcialmente desmineralizado, estabilizante sorbitol, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, conservador sorbato de potássio e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, SOJA E OVO. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."
        ],

    },
    {
        id: 12,
        name: 'Ovo de Páscoa Clássico ao Leite 300g ',
        price: 15.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "Ovo de chocolate ao leite e 5 bombons de chocolate ao leite com recheio de chocolate ao leite.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaPuroRecheioDindaChocolate260g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_4.png"),
            // require("../../Assets/ProductsImg/OvodePáscoaClássicoaoLeite300g_5.png"),


            // require("../../Assets/ProductsImg/ComboPáscoaRecheadaBemmeFaz_5.png"),
            // require("../../Assets/ProductsImg/ComboPáscoaRecheioDuo_6.png")
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de mousse de chocolate ao leite.',
        ingredients: [
            "Açúcar, marshmallow (açúcar, xarope de glicose, clara de ovo desidratada, estabilizante goma xantana, regulador de acidez tartarato monopotássico, aromatizante e conservador sorbato de potássio), manteiga de cacau, pasta de cacau, creme vegetal, leite em pó integral, soro de leite em pó parcialmente desmineralizado, estabilizante sorbitol, emulsificantes: lecitina de soja e poliglicerol polirricinoleato, conservador sorbato de potássio e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, SOJA E OVO. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."
        ],

    },
    {
        id: 13,
        name: 'Ovo de Páscoa Clássico Gato Mia Chocolate Branco 300g',
        price: 15.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "1 Ovo de chocolate branco e 6 linguetas de chocolate branco.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaChocolateBranco300g_4.png"),
        ],
        chocolateType: 'Chocolate Branco',
        productInfo: '1 Ovo de chocolate branco e 6 linguetas de chocolate branco.',
        ingredients: [
            "O Ovo de chocolate ao leite Ingredientes: açúcar, manteiga de cacau, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizante. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. o Bombom de chocolate ao leite com recheio de chocolate ao leite Ingredientes: açúcar, manteiga de cacau, pasta de cacau, gordura vegetal, leite em pó integral, soro de leite em pó parcialmente desmineralizado, cacau em pó, creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."
        ],

    },
    {
        id: 14,
        name: 'Ovo de Páscoa Recheado Mousse de Maracujá 370g',
        price: 59.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Recheado Mousse de Maracujá possui uma combinação equilibrada entre a doçura do chocolate e a acidez suave do maracujá, garantindo uma experiência saborosa e refrescante. Uma explosão de sabores em cada mordida.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoMoussedeMaracujá370g_4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite com recheio de leite condensado e maracujá.',
        ingredients: [
            "Açúcar, leite condensado (leite integral, açúcar e lactose), manteiga de cacau, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, gordura vegetal, maracujá liofilizado em pó (maracujá e maltodextrina), creme de leite em pó, água, álcool de cereais, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato, conservador sorbato de potássio, aromatizantes, acidulante ácido cítrico e estabilizante carboximetilcelulose sódica. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN.",
        ],

    },
    {
        id: 15,
        name: 'Ovo de Páscoa Clássico Bem me Faz 134g',
        price: 49.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo Clássico Bem me Faz se destaca por ser uma alternativa sem adição de açúcar, atendendo àqueles que buscam opções mais equilibradas e com menor teor de açúcar, sem perder a experiência de degustar o melhor chocolate ao leite da Brasil Cacau!",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoBemmeFaz134g_4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite para dietas com restrição de lactose e 3 bombons de chocolate ao leite para dietas com restrição de lactose.',
        ingredients: [
            "O Ovo de chocolate ao leite para dietas com restrição de lactose Ingredientes: manteiga de cacau, pasta de cacau, cacau em pó, leite em pó integral instantâneo para dietas com restrição de lactose (leite integral, enzima lactase, vitaminas A, C, D e emulsificante lecitina de soja), edulcorante natural maltitol e emulsificante lecitina de soja. ALÉRGICOS: CONTÉM DERIVA-DOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTA-NHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. NÃO CONTÉM GLÚTEN. o Bombom de chocolate ao leite para dietas com restrição de lactose Ingredientes: manteiga de cacau, pasta de cacau, cacau em pó, leite em pó integral instantâneo para dietas com res-trição de lactose (leite integral, enzima lactase, vitaminas A, C, D e emulsificante lecitina de soja), edulcorante natural maltitol e emulsificante lecitina de soja. ALÉRGICOS: CONTÉM DERIVA-DOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTA-NHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. NÃO CONTÉM GLÚTEN.",],

    },
    {
        id: 16,
        name: 'Ovo de Páscoa Clássico Gato Mia ao Leite 300g',
        price: 49.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Clássico Gato Mia é a escolha perfeita para quem busca a experiência de desfrutar do mais saboroso chocolate ao leite. A temática Gato Mia adiciona um toque de charme e diversão, que o torna ideal para presentear ou desfrutar em momentos especiais.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_1.png"),

        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaaoLeite300g_4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite para dietas com restrição de lactose e 3 bombons de chocolate ao leite para dietas com restrição de lactose.',
        ingredients: [
            "O Ovo de chocolate ao leite para dietas com restrição de lactose Ingredientes: manteiga de cacau, pasta de cacau, cacau em pó, leite em pó integral instantâneo para dietas com restrição de lactose (leite integral, enzima lactase, vitaminas A, C, D e emulsificante lecitina de soja), edulcorante natural maltitol e emulsificante lecitina de soja. ALÉRGICOS: CONTÉM DERIVA-DOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTA-NHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. NÃO CONTÉM GLÚTEN. o Bombom de chocolate ao leite para dietas com restrição de lactose Ingredientes: manteiga de cacau, pasta de cacau, cacau em pó, leite em pó integral instantâneo para dietas com res-trição de lactose (leite integral, enzima lactase, vitaminas A, C, D e emulsificante lecitina de soja), edulcorante natural maltitol e emulsificante lecitina de soja. ALÉRGICOS: CONTÉM DERIVA-DOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTA-NHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. NÃO CONTÉM GLÚTEN.",],

    },
    {
        id: 17,
        name: 'Ovo de Páscoa Clássico Gato Mia Duo 300g',
        price: 49.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "Pensando nos amantes de chocolate Branco e ao Leite trouxemos essa novidade super democrática que não tem erro! O Ovo de Páscoa Gato Mia Duo. Produzido com meia casca de chocolate ao leite e meia casca de chocolate branco. Experimente!",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoGatoMiaDuo300g_ 4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'CONTÉM: 1 Ovo metade de chocolate ao leite e metade chocolate branco, 3 linguetas de chocolate ao leite e 3 linguetas de chocolate branco.',
        ingredients: [
            "O Ovo de chocolate ao leite Ingredientes: açúcar, manteiga de cacau, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizante. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. o Chocolate branco Ingredientes: açúcar, manteiga de cacau, soro de leite em pó parcialmente desmineralizado, leite em pó integral, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. o Lingueta de chocolate ao leite Ingredientes: açúcar, manteiga de cacau, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. o Lingueta de chocolate branco Ingredientes: açúcar, manteiga de cacau, soro de leite em pó parcialmente desmineralizado, leite em pó integral, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",],

    },
    {
        id: 18,
        name: 'Ovo de Páscoa Clássico Cookies 300g',
        price: 49.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "O Ovo de Páscoa Clássico Cookies é a escolha perfeita para quem busca a experiência de desfrutar do mais saboroso chocolate ao leite crocante. Ideal para presentear ou degustar nessa páscoa.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássicoCookies300g_4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: '1 ovo de chocolate ao leite com pedaços de biscoito doce e 5 bombons de chocolate ao leite com pedaços de biscoito doce.',
        ingredients: [
            "o Ovo de chocolate ao leite com pedaços de biscoito doce Ingredientes: açúcar, manteiga de cacau, pasta de cacau, pedaços de biscoito doce (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura de palma, fécula de mandioca, açúcar invertido, sal, emulsificante lecitina de soja, fermentos químicos (bicarbonato de sódio e bicarbonato de amônio) e acidulante ácido cítrico), leite em pó integral, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN. o Bombom de chocolate ao leite com pedaços de biscoito doce Ingredientes: açúcar, manteiga de cacau, pasta de cacau, pedaços de biscoito doce (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura de palma, fécula de mandioca, açúcar invertido, sal, emulsificante lecitina de soja, fermentos químicos (bicarbonato de sódio e bicarbonato de amônio) e acidulante ácido cítrico), leite em pó integral, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN.",]
    },
    {
        id: 19,
        name: 'Ovo de Páscoa Clássico 70% Cacau 300g ',
        category: 'ovo de páscoa',
        price: 49.99,
        discount: '-50%',
        description: "O Ovo Clássico 70% Cacau da Brasil Cacau é uma escolha sofisticada para os apreciadores de chocolate mais intensos. Com um peso de 300g, este ovo é cuidadosamente elaborado com um chocolate de alta qualidade, atingindo um teor de cacau de 70%.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaClássico70_Cacau300g_4.png"),
        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate 70% cacau e 6 bombons de chocolate 70% cacau.',
        ingredients: [
            "O Ovo de chocolate 70% cacau Ingredientes: pasta de cacau, açúcar, manteiga de cacau, emulsificante lecitina de soja e aromatizante. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, LEITE, MACADÂMIA, NO-ZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. o Bombom de chocolate 70% cacau Ingredientes: pasta de cacau, açúcar, manteiga de cacau, emulsificante lecitina de soja e aromatizante. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, LEITE, MACADÂMIA, NO-ZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."],
    },
    {
        id: 20,
        name: 'Ovo de Páscoa Recheado Avelã 370g',
        price: 49.99,
        category: 'ovo de páscoa',
        discount: '-50%',
        description: "Uma explosão de sabor para quem não abre mão de um incrível Ovo de Páscoa com sabor marcante e inesquecível de Avelã. Produzido em chocolate ao leite, e recheio delicioso de creme de avelã",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_5.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoAvelã370g_6.png"),

        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate ao leite recheado com avelã.',
        ingredients: [
            "Açúcar, manteiga de cacau, gordura vegetal, pasta de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, cacau em pó, avelã, creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM AVELÃ E DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN.",],
    },
    {
        id: 21,
        name: 'Ovo de Páscoa Recheado Cookies & Cream 370g',
        category: 'ovo de páscoa',
        price: 49.99,
        discount: '-50%',
        description: "Ovo de Páscoa Recheado Cookies &amp; Cream combina a doçura do chocolate branco com a crocância dos cookies. A mistura de texturas e sabores que certamente conquistará seu palada",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_4.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheadoCookies&Cream370g_5.png"),

        ],
        chocolateType: 'Chocolate Branco',
        productInfo: 'Ovo de chocolate branco com gotas de biscoito sabor chocolate e recheio cremoso com gotas de biscoito sabor chocolate.',
        ingredients: [
            "Açúcar, manteiga de cacau, leite em pó integral, gordura vegetal, soro de leite em pó parcialmente desmineralizado, gotas de biscoito sabor chocolate (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura de palma, cacau em pó, sal, emulsificante lecitina de soja, fermentos químicos: pirofosfato ácido de sódio e bicarbonato de sódio e corante caramelo IV), creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVO E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 22,
        name: 'Combo Páscoa Brigadeiro ',
        category: 'ovo de páscoa',
        price: 59.99,
        discount: '-50%',
        description: "Contém: 1 Ovo de Páscoa Recheado Brigadeirão 370g, 1 Tablete Recheado Brigadeiro 90g e 3 Trufas Brigadeiro 30g.",
        imageUrl: require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_4.png"),
        gallery: [
            require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_1.png"),
            require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_2.png"),
            require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_4.png"),
            require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_5.png"),
            require("../../Assets/ProductsImg/ComboPáscoaBrigadeiro_3.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Contém: 1 Ovo de Páscoa Recheado Brigadeirão 370g, 1 Tablete Recheado Brigadeiro 90g e 3 Trufas Brigadeiro 30g.',
        ingredients: [
            "Açúcar, manteiga de cacau, leite em pó integral, gordura vegetal, soro de leite em pó parcialmente desmineralizado, gotas de biscoito sabor chocolate (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura de palma, cacau em pó, sal, emulsificante lecitina de soja, fermentos químicos: pirofosfato ácido de sódio e bicarbonato de sódio e corante caramelo IV), creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVO E PISTACHE. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },

    {
        id: 23,
        name: 'Ovo de Páscoa Recheado 60% Cacau 37',
        category: 'ovo de páscoa',
        price: 59.99,
        discount: '-50%',
        description: "O Ovo de Páscoa Recheado 60% Cacau possui a combinação do chocolate ao leite com um recheio 60% que conquistará seu paladar já na primeira mordida. Perfeito para quem aprecia a intensidade e a sofisticação do cacau.",
        imageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_1.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_2.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_3.png"),
            require("../../Assets/ProductsImg/OvodePáscoaRecheado60Cacau37_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate amargo com recheio trufado.',
        ingredients: [
            "Pasta de cacau, açúcar, gordura vegetal, cacau em pó, manteiga de cacau, leite em pó integral, creme de leite em pó, soro de leite em pó parcialmente desmineralizado, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, CEVADA, MACADÂMIA, NOZES, OVOS, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 24,
        name: 'Combo Páscoa Especial Avelã',
        category: 'combo de páscoa',
        price: 79.99,
        discount: '-50%',
        description: "Contém: 1 Ovo de Páscoa Recheado Avelã 370g, 4 Canudos Recheado Avelã 20g e 4 Trufas Avelã 30g.",
        imageUrl: require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_1.png"),
            require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_2.png"),
            require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_3.png"),
            require("../../Assets/ProductsImg/ComboPáscoaEspecialAvelã_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Ovo de chocolate amargo com recheio trufado.',
        ingredients: [
            "Contém: 1 Ovo de Páscoa Recheado Avelã 370g, 4 Canudos Recheado Avelã 20g e 4 Trufas Avelã 30g"],
    },

    {
        id: 25,
        name: 'Combo Páscoa Cookies & Cream ',
        price: 79.99,
        category: 'combo de páscoa',
        discount: '-50%',
        description: "Contém: 1 Ovo de Páscoa Recheado Cookies & Cream 370g, 1 Tablete Branco Cookies And Cream 100g e 3 Tabletes Branco Cookies And Cream 20g.",
        imageUrl: require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_1.png"),
            require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_2.png"),
            require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_3.png"),
            require("../../Assets/ProductsImg/ComboPáscoaCookiesCream_4.png"),


        ],
        chocolateType: 'Crocante e Nuts',
        productInfo: 'Ovo de chocolate amargo com recheio trufado.',
        ingredients: [
            "Contém: 1 Ovo de Páscoa Recheado Cookies & Cream 370g, 1 Tablete Branco Cookies And Cream 100g e 3 Tabletes Branco Cookies And Cream 20g."],
    },

    {
        id: 26,
        name: 'Mini Ovinhos de Páscoa Ovomaltine® 210g ',
        category: 'ovo de páscoa',
        price: 1.99,
        discount: '-50%',
        description: "Mini ovinhos de chocolate ao leite com Recheio Crocante com Ovomaltine® (alimento com extrato de cereal (cevada e malte) sabor chocolate) e avelã.",
        imageUrl: require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_1.png"),
            require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_2.png"),
            require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_3.png"),
            require("../../Assets/ProductsImg/MiniOvinhosdePáscoaOvomaltine®210g_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: 'Mini ovinhos de chocolate ao leite com recheio Crocante com Ovomaltine® (alimento com extrato de cereal (cevada e malte) sabor chocolate) e avelã.',
        ingredients: [
            "Açúcar, manteiga de cacau, recheio crocante com ovomaltine® e avelã (sacarose, óleo de canola, Ovomaltine® Suíço (extrato de cereal (cevada e malte), glucose, soro de leite em pó, cacau em pó, leite em pó integral, sal, mel, emulsificante lecitina de soja, antiumectante fosfato tricálcico, reguladores de acidez bicarbonato de sódio e carbonato de sódio e aromatizante), Ovomaltine® Flocos Crocantes (açúcar, extrato de cereal (cevada e malte), glucose, cacau em pó, sal, canela, emulsificante lecitina de soja, antiumectante fosfato tricálcico, regulador de acidez carbonato de sódio e aromatizante), leite em pó desnatado, pasta de avelãs, cacau em pó, fosfato tricálcico, emulsificantes: lecitina de soja e mono e diglicerídios de ácidos graxos e propilenoglicol, aromatizante e antioxidantes: palmitato de ascorbila e alfatocoferol), pasta de cacau, leite em pó integral, gordura vegetal, soro de leite em pó parcialmente desmineralizado, cacau em pó, extrato de malte de cevada, creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM CEVADA, AVELÃ E DERIVADOS DE CEVADA, LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, MACADÂMIA, NOZES, OVO, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 27,
        name: 'Trufa Morango 30g',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa 30g sabor morango coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        imageUrl: require("../../Assets/ProductsImg/TrufaMorango30g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaMorango30g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaMorango30g_1.png"),
            require("../../Assets/ProductsImg/TrufaMorango30g_2.png"),
            require("../../Assets/ProductsImg/TrufaMorango30g_3.png"),
            require("../../Assets/ProductsImg/TrufaMorango30g_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: "Trufa 30g sabor morango coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        ingredients: [
            "Ingredientes: açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, pasta de cacau, soro de leite desmineralizado, creme de leite em pó, morango desidratado, álcool de cereais, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato, aromatizantes, acidulantes: ácido cítrico e ácido lático e corante artificial vermelho allura AC. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."],
    },
    {
        id: 28,
        name: 'Trufa Maracujá Brasilidades 30g ',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa 30g sabor maracujá coberta com chocolate ao leite.",
        imageUrl: require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_1.png"),
            require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_2.png"),
            require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_3.png"),
            require("../../Assets/ProductsImg/TrufaMaracujáBrasilidades30g_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: "Trufa 30g sabor maracujá coberta com chocolate ao leite.",
        ingredients: [
            "Açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, pasta de cacau, soro de leite em pó parcialmente desmineralizado, creme de leite em pó, álcool de cereais, água, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato, aromatizantes, acidulantes: ácido cítrico e ácido láctico, corante tartrazina e estabilizante carboximetilcelulose sódica. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",]
    },
    {
        id: 29,
        name: 'Trufa Ovomaltine® 30g',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa coberta com chocolate ao leite e recheio crocante de Ovomaltine®. Imagem Meramente Ilustrativa.",
        imageUrl: require("../../Assets/ProductsImg/TrufaOvomaltine®30g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaOvomaltine®30g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaOvomaltine®30g_1.png"),
            require("../../Assets/ProductsImg/TrufaOvomaltine®30g_2.png"),
            require("../../Assets/ProductsImg/TrufaOvomaltine®30g_3.png"),
            require("../../Assets/ProductsImg/TrufaOvomaltine®30g_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: "Trufa coberta com chocolate ao leite e recheio crocante de Ovomaltine®. Imagem Meramente Ilustrativa.",
        ingredients: [
            "Ingredientes: açúcar, recheio crocante Ovomaltine® e avelãs (sacarose, óleo de canola, Ovomaltine® Suíço (extrato de cereal (cevada e malte), glucose, soro de leite em pó, cacau em pó, leite em pó integral, sal, mel, emulsificante lecitina de soja, antiumectante fosfato tricálcico, reguladores de acidez: bicarbonato de sódio e carbonato de sódio e aromatizante), Ovomaltine® Flocos Crocantes (açúcar, extrato de cereal (cevada e malte), glucose, cacau em pó, sal, canela, emulsificante lecitina de soja, antiumectante fosfato tricálcico, regulador de acidez carbonato de sódio e aromatizante), leite em pó desnatado, pasta de avelãs, cacau em pó, fosfato tricálcico, emulsificantes: lecitina de soja, mono e diglicerídeos de ácidos graxos e propilenoglicol, aromatizante e antioxidantes: palmitato de ascorbila e alfatocoferol), manteiga de cacau, leite em pó integral, gordura vegetal, pasta de cacau, soro de leite desmineralizado, cacau em pó, extrato de malte de cevada, creme de leite em pó, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM CEVADA, AVELÃ E DERIVADOS DE CEVADA, LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVEIA, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, CENTEIO, MACADÂMIA, NOZES, PISTACHE E TRIGO. CONTÉM LACTOSE. CONTÉM GLÚTEN."],
    },
    {
        id: 30,
        name: 'Trufa Duo 30g ',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa 30g sabor artificial de chocolate branco coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        imageUrl: require("../../Assets/ProductsImg/TrufaDuo30g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaDuo30g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaDuo30g_1.png"),
            require("../../Assets/ProductsImg/TrufaDuo30g_2.png"),
            require("../../Assets/ProductsImg/TrufaDuo30g_3.png"),
            require("../../Assets/ProductsImg/TrufaDuo30g_4.png"),


        ],
        chocolateType: 'Sabores Brasileiros',
        productInfo: "Trufa 30g sabor artificial de chocolate branco coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        ingredients: [
            "Ingredientes: açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, pasta de cacau, soro de leite desmineralizado, creme de leite em pó, álcool de cereais, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN"]
        ,
    },
    {
        id: 31,
        name: 'Trufa Avelã 30g',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa 30g sabor avelã coberta com chocolate ao leite.",
        imageUrl: require("../../Assets/ProductsImg/TrufaAvelã30g_1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaAvelã30g_2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaAvelã30g_1.png"),
            require("../../Assets/ProductsImg/TrufaAvelã30g_2.png"),
            require("../../Assets/ProductsImg/TrufaAvelã30g_3.png"),
            require("../../Assets/ProductsImg/TrufaAvelã30g_4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: "Trufa 30g sabor avelã coberta com chocolate ao leite",
        ingredients: [
            "Ingredientes: açúcar, gordura vegetal, leite em pó integral, manteiga de cacau, cacau em pó, pasta de cacau, soro de leite desmineralizado, creme de leite em pó, avelã, álcool de cereais, emulsificantes: lecitina de soja, triestearato de sorbitana e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM AVELÃ E DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."],
    },
    {
        id: 32,
        name: 'Trufa Gato Mia 30g ',
        category: 'trufa',
        price: 1.99,
        discount: '-50%',
        description: "Trufa 30g tradicional coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        imageUrl: require("../../Assets/ProductsImg/TrufaGatoMia30g_ 1.png"),
        secondaryImageUrl: require("../../Assets/ProductsImg/TrufaGatoMia30g_ 2.png"),
        gallery: [
            require("../../Assets/ProductsImg/TrufaGatoMia30g_ 1.png"),
            require("../../Assets/ProductsImg/TrufaGatoMia30g_ 2.png"),
            require("../../Assets/ProductsImg/TrufaGatoMia30g_ 3.png"),
            require("../../Assets/ProductsImg/TrufaGatoMia30g_ 4.png"),


        ],
        chocolateType: 'Chocolate ao Leite',
        productInfo: "Trufa 30g tradicional coberta com chocolate ao leite. Imagem Meramente Ilustrativa.",
        ingredients: [
            "Ingredientes: açúcar, gordura vegetal, leite em pó integral, cacau em pó, manteiga de cacau, pasta de cacau, soro de leite desmineralizado, creme de leite em pó, emulsificantes: triestearato de sorbitana, lecitina de soja e poliglicerol polirricinoleato e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER AMENDOIM, AMÊNDOAS, AVELÃ, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL, MACADÂMIA, NOZES E PISTACHE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",]
    }


];

export default DataProducts;
