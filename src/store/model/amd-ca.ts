import {Store} from './store';

export const AmdCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5458373400/ca',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx7900XT',
      url: 'https://www.amd.com/en/direct-buy/5722619200/ca',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx7900xtx',
      url: 'https://www.amd.com/en/direct-buy/5722619400/ca',
    },
  ],
  name: 'amd-ca',
};
