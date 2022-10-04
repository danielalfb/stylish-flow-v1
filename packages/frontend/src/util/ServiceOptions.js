export const DefaultTasks = () => {
  return [
    {
      id: 1,
      status: 'NOT_INITIATED',
      service: 'Aguardando',
      location: 0
    },
    {
      id: 2,
      status: 'NOT_INITIATED',
      service: 'Lavagem',
      location: 0
    },
    {
      id: 3,
      status: 'NOT_INITIATED',
      service: 'Acabamento',
      location: 0
    },
    {
      id: 4,
      status: 'NOT_INITIATED',
      service: 'Especial',
      location: 0
    }
  ];
};

export const serviceOptions = [
  {
    id: 1,
    description: 'Lavagem EXPRESS',
    price: 20.0
  },
  {
    id: 2,
    description: 'Lavagem INTERMEDIÁRIA (Interior OU Exterior)',
    price: 28.0
  },
  {
    id: 3,
    description: 'Lavagem PREMIUM (mais acabamento)',
    price: 38.0
  },
  {
    id: 4,
    description: 'Lavagem MASTER (sujidade pesada)',
    price: 55.0
  },
  {
    id: 5,
    description: 'Polimento PONTUAL',
    price: 180.0
  },
  {
    id: 6,
    description: 'Polimento TOTAL',
    price: 500.0
  },
  {
    id: 7,
    description: 'Tratamento dos VIDROS/CROMADOS',
    price: 60.0
  },
  {
    id: 8,
    description: 'Limpeza técnica do MOTOR',
    price: 60.0
  },
  {
    id: 9,
    description: 'Higienização dos ESTOFOS',
    price: 58.0
  },
  {
    id: 10,
    description: 'Higienização de PORTAS E PAINEIS',
    price: 45.0
  },
  {
    id: 11,
    description: 'Higienização MALA',
    price: 50.0
  },
  {
    id: 12,
    description: 'Higienização COMPLETA',
    price: 290.0
  }
];
