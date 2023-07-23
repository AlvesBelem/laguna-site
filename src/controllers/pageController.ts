import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';
import {AllItens} from '../models/allItens'



export const home = (req: Request, res: Response) => {

    let list = AllItens.getAll();
    
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Explore nossos Itens !',
            background: './imgNew/banner_all.jpg'
        },
        list
    });
};

export const products = (req: Request, res: Response) => {

    let list = AllItens.getFromType('product');

        res.render('pages/page', {
            menu: createMenuObject('product'),
            banner: {
                title: 'Nossos Produtos !',
                background: './imgNew/mix-products.jpg'
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {

    let list = AllItens.getFromType('fish');
        res.render('pages/page', {
            menu: createMenuObject('fish'),
            banner: {
                title: 'Nossos Peixes !',
                background: './imgNew/fishes_page.jpg'
        },
        list
    });
};

// 