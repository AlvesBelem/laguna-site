import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';
import {AllItens} from '../models/allItens'



export const home = (req: Request, res: Response) => {

    let list = AllItens.getAll();
    
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Explore nossos Itens !',
            background: 'allanimals.jpg'
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
                background: 'banner_cat.jpg'
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
                background: 'banner_fish.jpg'
        },
        list
    });
};

export const store = (req: Request, res: Response) => {

    let list = AllItens.getFromType('store');
        res.render('pages/page', {
            menu: createMenuObject('store'),
            banner: {
                title: 'Nossa Loja !',
                background: 'banner_dog.jpg'
        },
        list
    });
};