var content = {



    delivery_msk:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды в Москве и области '}    ],

    delivery_mo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды по Московской области '}    ],

    delivery_spb:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды по Санкт-Петербургу и области '}    ],

    delivery_lo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды по Ленинградской области '}    ],

    artezian_msk:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды в Москве и области '}, {selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1'  , content: 'Артезианская вода Eden - источник энергии на весь день'}    ],

    artezian_spb:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды по Санкт-Петербургу и области '} , {selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1'  , content: 'Артезианская вода Eden - источник энергии на весь день'}   ],

    home_lo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды на дом по Ленинградской области '}    ],

    home_spb:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды на дом по Санкт-Петербургу и области '}    ],

    home_msk:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды на дом в Москве и области '}    ],

    home_mo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды на дом по Московской области '}    ],

    office_msk:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды в офис в Москве и области '}    ],

    office_spb:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды в офис по Санкт-Петербургу и области '}    ],

    litr_lo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды 19л по Ленинградской области '}    ],

    litr_spb:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды 19л по Санкт-Петербургу и области '}    ],

    litr_mo:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды 19л по Московской области '}    ],

    litr_msk:  [  {  selector: 'body > main > .main__wrapper .main__block.container > .main__wrap > h1 > .main__title_small'  ,  content:  'Доставка воды 19л в Москве и области '}    ]





};

function replacer(content) {
    let utm = /utm_replace=([^&]*)/g.exec(document.URL)[1];
    if (utm in content) {
        for (i in content[utm]) {
            document.querySelector(content[utm][i]['selector']).innerHTML=content[utm][i]['content'];
        };
    } else {
        console.log("Каталог контента не имеет такой utm метки");
    };
};
replacer(content);