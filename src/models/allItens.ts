

type ItensType = 'product' | 'fish' | 'store';


type AllItens = {
    type: ItensType,
    image: string,
    name: string,
    color: string,
    description: string
    
}


const data: AllItens[] = [
    
        {
            type: 'product',
            image: 'pastor-alemao.jpg',
            name: 'Pastor-alemão',
            color: 'Amarelo e Preto',
            description: 'teste descrição'
        },
        {
            type: 'fish',
            image: 'labrador.jpg',
            name: 'Labrador-retriever',
            color: 'Branco',
            description: 'teste descrição'
        },
        {
            type: 'store',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            description: 'teste descrição'
        },
        {
            type: 'store',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            description: 'teste descrição'
        },
        {
            type: 'product',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            description: 'teste descrição'
        },
        {
            type: 'store',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            description: 'teste descrição'
        },
        {
            type: 'store',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            description: 'teste descrição'
        },
       
    
]

export const AllItens = {
    getAll: (): AllItens[] => {
        return data;
    },

    getFromType: (type: ItensType ): AllItens[] => {
        return data.filter(item => item.type === type);
        
    },

    getFromName: (name: string): AllItens[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
            
    }
};