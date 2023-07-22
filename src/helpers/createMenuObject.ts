
type MenuOptions = '' | 'all' | 'product' | 'fish' | 'store' ;

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        product: false,
        fish: false,
        store: false
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}