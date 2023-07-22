import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    res.send('Home do controller')
    //res.render('pages/page');
};

export const products = (req: Request, res: Response) => {
    res.send('Home do produtos')
    //res.render('pages/page');
};

export const fishes = (req: Request, res: Response) => {
    res.send('Home de peixes')
    //res.render('pages/page');
};

export const store = (req: Request, res: Response) => {
    res.send('Home da Loja')
    //res.render('pages/page');
};