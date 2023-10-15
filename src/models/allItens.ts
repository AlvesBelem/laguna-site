

type ItensType = 'product' | 'fish' | 'store';


type AllItens = {
    type: ItensType,
    image: string,
    name: string,
    color: string,
    description: string,
    price: string
    scientific_name: string
    
}


const data: AllItens[] = [
    
        {
            type: 'fish',
            image: './imgNew/acara.jpg',
            name: 'Acará Bandeira',
            color: 'Preto e Branco ',
            description: '(Pterophyllum scalare) - mérica do Sul; bacia do rio Amazonas, ao longo dos rios Ucayali, Solimões e Amazonas; rios do Amapá (Brasil), Rio Oiapoque, na Guiana Francesa; rio Essequibo na Guiana. — Países: Brasil, Colômbia, Guiana Francesa, Guiana e Peru. Introduzido e estabelecido no Fiji e Suriname.',
            price: 'R$ 20,00',
            scientific_name: 'teste'
        },
        // {
        //     type: 'fish',
        //     image: './imgNew/neon.jpg',
        //     name: 'Neon',
        //     color: 'Azul e Vermelho ',
        //     description: '(Pterophyllum scalare) - mérica do Sul; bacia do rio Amazonas, ao longo dos rios Ucayali, Solimões e Amazonas; rios do Amapá (Brasil), Rio Oiapoque, na Guiana Francesa; rio Essequibo na Guiana. — Países: Brasil, Colômbia, Guiana Francesa, Guiana e Peru. Introduzido e estabelecido no Fiji e Suriname.',
        //     price: 'R$ 20,00'
        // },

        // {
        //     type: 'fish',
        //     image: './imgNew/acara.jpg',
        //     name: 'Acará Bandeira',
        //     color: 'Preto e Branco ',
        //     description: '(Pterophyllum scalare) - mérica do Sul; bacia do rio Amazonas, ao longo dos rios Ucayali, Solimões e Amazonas; rios do Amapá (Brasil), Rio Oiapoque, na Guiana Francesa; rio Essequibo na Guiana. — Países: Brasil, Colômbia, Guiana Francesa, Guiana e Peru. Introduzido e estabelecido no Fiji e Suriname.',
        //     price: 'R$ 20,00'
        // },
        // {
        //     type: 'fish',
        //     image: './imgNew/neon.jpg',
        //     name: 'Neon',
        //     color: 'Azul e Vermelho ',
        //     description: '(Pterophyllum scalare) - mérica do Sul; bacia do rio Amazonas, ao longo dos rios Ucayali, Solimões e Amazonas; rios do Amapá (Brasil), Rio Oiapoque, na Guiana Francesa; rio Essequibo na Guiana. — Países: Brasil, Colômbia, Guiana Francesa, Guiana e Peru. Introduzido e estabelecido no Fiji e Suriname.',
        //     price: 'R$ 20,00'
        // },
        

        // {
        //     type: 'product',
        //     image: './imgNew/produto.jpg',
        //     name: 'Ração Peixe Carnívoros de Fundo Poytara |Melhores preços ZoolandPet',
        //     color: '',
        //     description: 'Sugerimos que ofereça Poytara Carnívoros de Fundo de duas a três vezes ao dia, em quantidade suficiente para o completo consumo em poucos minutos, ou até que cesse a voracidade dos peixes. ',
        //     price: 'R$ 40,00'
        // },

        
       
    
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