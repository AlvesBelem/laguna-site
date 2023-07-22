import {Request, Response} from 'express';

export const search = (req: Request, res: Response) => {
    res.send('Home do search')
    //res.render('pages/search');
};