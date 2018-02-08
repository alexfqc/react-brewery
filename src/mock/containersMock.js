export const containersMock = [
  {
    id: 0,
    name: 'Pilsner',
    minTemp: 4,
    maxTemp: 6,
    temp: 5,
  },
  {
    id: 1,
    name: 'IPA',
    minTemp: 5,
    maxTemp: 6,
    temp: 7,
  },
  {
    id: 2,
    name: 'Lager',
    minTemp: 4,
    maxTemp: 7,
    temp: 4,
  },
  {
    id: 3,
    name: 'Stout',
    minTemp: 6,
    maxTemp: 8,
    temp: 7,
  },
  {
    id: 4,
    name: 'Wheat beer',
    minTemp: 3,
    maxTemp: 5,
    temp: 5,
  },
  {
    id: 5,
    name: 'Pale Ale',
    minTemp: 4,
    maxTemp: 6,
    temp: 8,
  },
];

const getRandomArbitrary = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const simulateServerDataChange = (containers) => {
  const id = getRandomArbitrary(0, 5);
  const container = containers.find(c => c.id === id);
  const temp = getRandomArbitrary(container.minTemp, container.maxTemp + 2);
  const updatedContainer = {
    ...container,
    temp,
  };

  return [
    ...containers.slice(0, id),
    updatedContainer,
    ...containers.slice(id + 1),
  ];
};
