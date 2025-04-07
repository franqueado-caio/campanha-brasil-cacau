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
}

const DataProducts: Product[] = [
    {
        id: 1,
        name: 'Ovo de Páscoa Recheado Lollo® Nestlé® 370g',
        description: 'Ovo de chocolate ao leite com recheio de mousse de chocolate em parceria com a Nestlé. O Sabor mais nostálgico e icônico amado pelos Brasileiros.',
        price: 114.99,
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
        price: 99.90,
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
        price: 99.90,
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
];

export default DataProducts;