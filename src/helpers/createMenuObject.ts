
type MenuOptions = '' | 'all' | 'product' | 'fish'  ;

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        product: false,
        fish: false,
        
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}