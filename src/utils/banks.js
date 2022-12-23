const banks = {
  '9mobile 9Payment Service Bank': {
    id: 302,
    name: '9mobile 9Payment Service Bank',
    slug: '9mobile-9payment-service-bank-ng',
    code: '120001',
    longcode: '120001',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-31T06:50:27.000Z',
    updatedAt: '2022-06-23T09:33:55.000Z',
  },
  'Abbey Mortgage Bank': {
    id: 174,
    name: 'Abbey Mortgage Bank',
    slug: 'abbey-mortgage-bank',
    code: '801',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-12-07T16:19:09.000Z',
    updatedAt: '2020-12-07T16:19:19.000Z',
  },
  'Above Only MFB': {
    id: 188,
    name: 'Above Only MFB',
    slug: 'above-only-mfb',
    code: '51204',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-10-13T20:35:17.000Z',
    updatedAt: '2021-10-13T20:35:17.000Z',
  },
  'Abulesoro MFB': {
    id: 627,
    name: 'Abulesoro MFB',
    slug: 'abulesoro-mfb-ng',
    code: '51312',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-08-31T08:26:20.000Z',
    updatedAt: '2022-08-31T08:26:20.000Z',
  },
  'Access Bank': {
    id: 1,
    name: 'Access Bank',
    slug: 'access-bank',
    code: '044',
    longcode: '044150149',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T08:06:44.000Z',
  },
  'Access Bank (Diamond)': {
    id: 3,
    name: 'Access Bank (Diamond)',
    slug: 'access-bank-diamond',
    code: '063',
    longcode: '063150162',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T08:06:48.000Z',
  },
  'Accion Microfinance Bank': {
    id: 495,
    name: 'Accion Microfinance Bank',
    slug: 'accion-microfinance-bank-ng',
    code: '602',
    longcode: '',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-07-28T14:22:56.000Z',
    updatedAt: '2022-09-19T07:48:37.000Z',
  },
  'Ahmadu Bello University Microfinance Bank': {
    id: 676,
    name: 'Ahmadu Bello University Microfinance Bank',
    slug: 'ahmadu-bello-university-microfinance-bank-ng',
    code: '50036',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-11-14T13:35:42.000Z',
    updatedAt: '2022-11-14T13:35:42.000Z',
  },
  'Airtel Smartcash PSB': {
    id: 300,
    name: 'Airtel Smartcash PSB',
    slug: 'airtel-smartcash-psb-ng',
    code: '120004',
    longcode: '120004',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-30T14:03:00.000Z',
    updatedAt: '2022-05-31T06:58:22.000Z',
  },
  'ALAT by WEMA': {
    id: 27,
    name: 'ALAT by WEMA',
    slug: 'alat-by-wema',
    code: '035A',
    longcode: '035150103',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2017-11-15T12:21:31.000Z',
    updatedAt: '2022-05-31T15:54:34.000Z',
  },
  'Amju Unique MFB': {
    id: 179,
    name: 'Amju Unique MFB',
    slug: 'amju-unique-mfb',
    code: '50926',
    longcode: '511080896',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-07-07T13:45:57.000Z',
    updatedAt: '2021-07-07T13:45:57.000Z',
  },
  'Aramoko MFB': {
    id: 614,
    name: 'Aramoko MFB',
    slug: 'aramoko-mfb',
    code: '50083',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-08-10T09:48:24.000Z',
    updatedAt: '2022-08-10T09:48:24.000Z',
  },
  'ASO Savings and Loans': {
    id: 63,
    name: 'ASO Savings and Loans',
    slug: 'asosavings',
    code: '401',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2018-09-23T05:52:38.000Z',
    updatedAt: '2019-01-30T09:38:57.000Z',
  },
  'Astrapolaris MFB LTD': {
    id: 297,
    name: 'Astrapolaris MFB LTD',
    slug: 'astrapolaris-mfb',
    code: 'MFB50094',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-25T10:46:17.000Z',
    updatedAt: '2022-05-25T10:46:17.000Z',
  },
  'Bainescredit MFB': {
    id: 181,
    name: 'Bainescredit MFB',
    slug: 'bainescredit-mfb',
    code: '51229',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-07-12T14:41:18.000Z',
    updatedAt: '2021-07-12T14:41:18.000Z',
  },
  'Bowen Microfinance Bank': {
    id: 108,
    name: 'Bowen Microfinance Bank',
    slug: 'bowen-microfinance-bank',
    code: '50931',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-02-11T15:38:57.000Z',
    updatedAt: '2020-02-11T15:38:57.000Z',
  },
  Carbon: {
    id: 82,
    name: 'Carbon',
    slug: 'carbon',
    code: '565',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-06-16T08:15:31.000Z',
    updatedAt: '2021-08-05T15:25:01.000Z',
  },
  'CEMCS Microfinance Bank': {
    id: 74,
    name: 'CEMCS Microfinance Bank',
    slug: 'cemcs-microfinance-bank',
    code: '50823',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-03-23T15:06:13.000Z',
    updatedAt: '2020-03-23T15:06:28.000Z',
  },
  'Chanelle Microfinance Bank Limited': {
    id: 284,
    name: 'Chanelle Microfinance Bank Limited',
    slug: 'chanelle-microfinance-bank-limited-ng',
    code: '50171',
    longcode: '50171',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-02-10T13:28:38.000Z',
    updatedAt: '2022-02-10T13:28:38.000Z',
  },
  'Citibank Nigeria': {
    id: 2,
    name: 'Citibank Nigeria',
    slug: 'citibank-nigeria',
    code: '023',
    longcode: '023150005',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:24:02.000Z',
  },
  'Corestep MFB': {
    id: 283,
    name: 'Corestep MFB',
    slug: 'corestep-mfb',
    code: '50204',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-02-09T14:33:06.000Z',
    updatedAt: '2022-02-09T14:33:06.000Z',
  },
  'Coronation Merchant Bank': {
    id: 173,
    name: 'Coronation Merchant Bank',
    slug: 'coronation-merchant-bank',
    code: '559',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-11-24T10:25:07.000Z',
    updatedAt: '2020-11-24T10:25:07.000Z',
  },
  'Crescent MFB': {
    id: 366,
    name: 'Crescent MFB',
    slug: 'crescent-mfb',
    code: '51297',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-07-18T12:39:03.000Z',
    updatedAt: '2022-07-18T12:39:03.000Z',
  },
  'Dot Microfinance Bank': {
    id: 637,
    name: 'Dot Microfinance Bank',
    slug: 'dot-microfinance-bank-ng',
    code: '50162',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-11-03T14:39:09.000Z',
    updatedAt: '2022-11-03T14:39:09.000Z',
  },
  'Ecobank Nigeria': {
    id: 4,
    name: 'Ecobank Nigeria',
    slug: 'ecobank-nigeria',
    code: '050',
    longcode: '050150010',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:23:53.000Z',
  },
  'Ekimogun MFB': {
    id: 628,
    name: 'Ekimogun MFB',
    slug: 'ekimogun-mfb-ng',
    code: '50263',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-08-31T08:26:39.000Z',
    updatedAt: '2022-08-31T08:26:39.000Z',
  },
  'Ekondo Microfinance Bank': {
    id: 64,
    name: 'Ekondo Microfinance Bank',
    slug: 'ekondo-microfinance-bank-ng',
    code: '098',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2018-09-23T05:55:06.000Z',
    updatedAt: '2022-09-21T15:09:51.000Z',
  },
  Eyowo: {
    id: 167,
    name: 'Eyowo',
    slug: 'eyowo',
    code: '50126',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-09-07T13:52:22.000Z',
    updatedAt: '2020-11-24T10:03:21.000Z',
  },
  'Fairmoney Microfinance Bank': {
    id: 677,
    name: 'Fairmoney Microfinance Bank',
    slug: 'fairmoney-microfinance-bank-ng',
    code: '51318',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-11-15T12:33:47.000Z',
    updatedAt: '2022-11-15T12:37:44.000Z',
  },
  'Fidelity Bank': {
    id: 6,
    name: 'Fidelity Bank',
    slug: 'fidelity-bank',
    code: '070',
    longcode: '070150003',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2021-08-27T09:15:29.000Z',
  },
  'Firmus MFB': {
    id: 177,
    name: 'Firmus MFB',
    slug: 'firmus-mfb',
    code: '51314',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-06-01T15:33:26.000Z',
    updatedAt: '2021-06-01T15:33:26.000Z',
  },
  'First Bank of Nigeria': {
    id: 7,
    name: 'First Bank of Nigeria',
    slug: 'first-bank-of-nigeria',
    code: '011',
    longcode: '011151003',
    gateway: 'ibank',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2021-03-25T14:22:52.000Z',
  },
  'First City Monument Bank': {
    id: 8,
    name: 'First City Monument Bank',
    slug: 'first-city-monument-bank',
    code: '214',
    longcode: '214150018',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T08:06:46.000Z',
  },
  'FSDH Merchant Bank Limited': {
    id: 112,
    name: 'FSDH Merchant Bank Limited',
    slug: 'fsdh-merchant-bank-limited',
    code: '501',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-08-20T09:37:04.000Z',
    updatedAt: '2020-11-24T10:03:22.000Z',
  },
  'Gateway Mortgage Bank LTD': {
    id: 287,
    name: 'Gateway Mortgage Bank LTD',
    slug: 'gateway-mortgage-bank',
    code: '812',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-02-24T06:04:39.000Z',
    updatedAt: '2022-02-24T06:04:39.000Z',
  },
  'Globus Bank': {
    id: 70,
    name: 'Globus Bank',
    slug: 'globus-bank',
    code: '00103',
    longcode: '103015001',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-02-11T15:38:57.000Z',
    updatedAt: '2020-02-11T15:38:57.000Z',
  },
  GoMoney: {
    id: 183,
    name: 'GoMoney',
    slug: 'gomoney',
    code: '100022',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-08-04T11:49:46.000Z',
    updatedAt: '2021-11-12T13:32:14.000Z',
  },
  'Goodnews Microfinance Bank': {
    id: 635,
    name: 'Goodnews Microfinance Bank',
    slug: 'goodnews-microfinance-bank-ng',
    code: '50739',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-29T09:14:18.000Z',
    updatedAt: '2022-10-18T14:59:07.000Z',
  },
  'Greenwich Merchant Bank': {
    id: 633,
    name: 'Greenwich Merchant Bank',
    slug: 'greenwich-merchant-bank-ng',
    code: '562',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-16T15:23:58.000Z',
    updatedAt: '2022-09-16T15:23:58.000Z',
  },
  'Guaranty Trust Bank': {
    id: 9,
    name: 'Guaranty Trust Bank',
    slug: 'guaranty-trust-bank',
    code: '058',
    longcode: '058152036',
    gateway: 'ibank',
    pay_with_bank: true,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2022-06-14T06:59:27.000Z',
  },
  'Hackman Microfinance Bank': {
    id: 111,
    name: 'Hackman Microfinance Bank',
    slug: 'hackman-microfinance-bank',
    code: '51251',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-08-20T09:32:48.000Z',
    updatedAt: '2020-11-24T10:03:24.000Z',
  },
  'Hasal Microfinance Bank': {
    id: 81,
    name: 'Hasal Microfinance Bank',
    slug: 'hasal-microfinance-bank',
    code: '50383',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-02-11T15:38:57.000Z',
    updatedAt: '2020-02-11T15:38:57.000Z',
  },
  'Heritage Bank': {
    id: 10,
    name: 'Heritage Bank',
    slug: 'heritage-bank',
    code: '030',
    longcode: '030159992',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:24:23.000Z',
  },
  HopePSB: {
    id: 301,
    name: 'HopePSB',
    slug: 'hopepsb-ng',
    code: '120002',
    longcode: '120002',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-30T14:03:18.000Z',
    updatedAt: '2022-05-30T14:03:18.000Z',
  },
  'Ibile Microfinance Bank': {
    id: 168,
    name: 'Ibile Microfinance Bank',
    slug: 'ibile-mfb',
    code: '51244',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-10-21T10:54:20.000Z',
    updatedAt: '2020-10-21T10:54:33.000Z',
  },
  'Ikoyi Osun MFB': {
    id: 615,
    name: 'Ikoyi Osun MFB',
    slug: 'ikoyi-osun-mfb',
    code: '50439',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-08-10T09:48:24.000Z',
    updatedAt: '2022-08-10T09:48:24.000Z',
  },
  'Ilaro Poly Microfinance Bank': {
    id: 636,
    name: 'Ilaro Poly Microfinance Bank',
    slug: 'ilaro-poly-microfinance-bank-ng',
    code: '50442',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-10-12T09:15:26.000Z',
    updatedAt: '2022-10-12T09:15:26.000Z',
  },
  'Infinity MFB': {
    id: 172,
    name: 'Infinity MFB',
    slug: 'infinity-mfb',
    code: '50457',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-11-24T10:23:37.000Z',
    updatedAt: '2020-11-24T10:23:37.000Z',
  },
  'Jaiz Bank': {
    id: 22,
    name: 'Jaiz Bank',
    slug: 'jaiz-bank',
    code: '301',
    longcode: '301080020',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-10-10T17:26:29.000Z',
    updatedAt: '2016-10-10T17:26:29.000Z',
  },
  'Kadpoly MFB': {
    id: 187,
    name: 'Kadpoly MFB',
    slug: 'kadpoly-mfb',
    code: '50502',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-09-27T11:59:42.000Z',
    updatedAt: '2021-09-27T11:59:42.000Z',
  },
  'Keystone Bank': {
    id: 11,
    name: 'Keystone Bank',
    slug: 'keystone-bank',
    code: '082',
    longcode: '082150017',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:23:45.000Z',
  },
  'Kredi Money MFB LTD': {
    id: 184,
    name: 'Kredi Money MFB LTD',
    slug: 'kredi-money-mfb',
    code: '50200',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-08-11T09:54:03.000Z',
    updatedAt: '2021-08-11T09:54:03.000Z',
  },
  'Kuda Bank': {
    id: 67,
    name: 'Kuda Bank',
    slug: 'kuda-bank',
    code: '50211',
    longcode: '',
    gateway: 'digitalbankmandate',
    pay_with_bank: true,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2019-11-15T17:06:54.000Z',
    updatedAt: '2022-04-08T17:07:53.000Z',
  },
  'Lagos Building Investment Company Plc.': {
    id: 109,
    name: 'Lagos Building Investment Company Plc.',
    slug: 'lbic-plc',
    code: '90052',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-08-10T15:07:44.000Z',
    updatedAt: '2020-08-10T15:07:44.000Z',
  },
  'Links MFB': {
    id: 180,
    name: 'Links MFB',
    slug: 'links-mfb',
    code: '50549',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-07-12T14:41:18.000Z',
    updatedAt: '2021-07-12T14:41:18.000Z',
  },
  'Living Trust Mortgage Bank': {
    id: 296,
    name: 'Living Trust Mortgage Bank',
    slug: 'living-trust-mortgage-bank',
    code: '031',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-25T10:46:17.000Z',
    updatedAt: '2022-05-25T10:46:17.000Z',
  },
  'Lotus Bank': {
    id: 233,
    name: 'Lotus Bank',
    slug: 'lotus-bank',
    code: '303',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-12-06T14:39:51.000Z',
    updatedAt: '2021-12-06T14:39:51.000Z',
  },
  'Mayfair MFB': {
    id: 175,
    name: 'Mayfair MFB',
    slug: 'mayfair-mfb',
    code: '50563',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-02-02T08:28:38.000Z',
    updatedAt: '2021-02-02T08:28:38.000Z',
  },
  'Mint MFB': {
    id: 178,
    name: 'Mint MFB',
    slug: 'mint-mfb',
    code: '50304',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-06-01T16:07:29.000Z',
    updatedAt: '2021-06-01T16:07:29.000Z',
  },
  'MTN Momo PSB': {
    id: 303,
    name: 'MTN Momo PSB',
    slug: 'mtn-momo-psb-ng',
    code: '120003',
    longcode: '120003',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-31T06:52:07.000Z',
    updatedAt: '2022-06-23T09:33:55.000Z',
  },
  Paga: {
    id: 185,
    name: 'Paga',
    slug: 'paga',
    code: '100002',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-08-31T08:10:00.000Z',
    updatedAt: '2021-08-31T08:10:00.000Z',
  },
  PalmPay: {
    id: 169,
    name: 'PalmPay',
    slug: 'palmpay',
    code: '999991',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-11-24T09:58:37.000Z',
    updatedAt: '2020-11-24T10:03:19.000Z',
  },
  'Parallex Bank': {
    id: 26,
    name: 'Parallex Bank',
    slug: 'parallex-bank',
    code: '104',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2017-03-31T13:54:29.000Z',
    updatedAt: '2021-10-29T08:00:19.000Z',
  },
  'Parkway - ReadyCash': {
    id: 110,
    name: 'Parkway - ReadyCash',
    slug: 'parkway-ready-cash',
    code: '311',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-08-10T15:07:44.000Z',
    updatedAt: '2020-08-10T15:07:44.000Z',
  },
  Paycom: {
    id: 171,
    name: 'Paycom',
    slug: 'paycom',
    code: '999992',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-11-24T10:20:45.000Z',
    updatedAt: '2020-11-24T10:20:54.000Z',
  },
  'Petra Mircofinance Bank Plc': {
    id: 170,
    name: 'Petra Mircofinance Bank Plc',
    slug: 'petra-microfinance-bank-plc',
    code: '50746',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-11-24T10:03:06.000Z',
    updatedAt: '2020-11-24T10:03:06.000Z',
  },
  'Polaris Bank': {
    id: 13,
    name: 'Polaris Bank',
    slug: 'polaris-bank',
    code: '076',
    longcode: '076151006',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2016-07-14T10:04:29.000Z',
  },
  'Polyunwana MFB': {
    id: 626,
    name: 'Polyunwana MFB',
    slug: 'polyunwana-mfb-ng',
    code: '50864',
    longcode: 'null',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-08-17T17:27:23.000Z',
    updatedAt: '2022-08-17T17:27:23.000Z',
  },
  'PremiumTrust Bank': {
    id: 304,
    name: 'PremiumTrust Bank',
    slug: 'premiumtrust-bank-ng',
    code: '105',
    longcode: '000031',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-06-01T14:16:02.000Z',
    updatedAt: '2022-08-17T08:13:08.000Z',
  },
  'Providus Bank': {
    id: 25,
    name: 'Providus Bank',
    slug: 'providus-bank',
    code: '101',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2017-03-27T16:09:29.000Z',
    updatedAt: '2021-02-09T17:50:06.000Z',
  },
  'QuickFund MFB': {
    id: 232,
    name: 'QuickFund MFB',
    slug: 'quickfund-mfb',
    code: '51293',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-10-29T08:43:35.000Z',
    updatedAt: '2021-10-29T08:43:35.000Z',
  },
  'Rand Merchant Bank': {
    id: 176,
    name: 'Rand Merchant Bank',
    slug: 'rand-merchant-bank',
    code: '502',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-02-11T17:33:20.000Z',
    updatedAt: '2021-02-11T17:33:20.000Z',
  },
  'Refuge Mortgage Bank': {
    id: 295,
    name: 'Refuge Mortgage Bank',
    slug: 'refuge-mortgage-bank',
    code: '90067',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-05-25T10:46:17.000Z',
    updatedAt: '2022-05-25T10:46:17.000Z',
  },
  'Rubies MFB': {
    id: 69,
    name: 'Rubies MFB',
    slug: 'rubies-mfb',
    code: '125',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-01-25T09:49:59.000Z',
    updatedAt: '2020-01-25T09:49:59.000Z',
  },
  'Safe Haven MFB': {
    id: 286,
    name: 'Safe Haven MFB',
    slug: 'safe-haven-mfb-ng',
    code: '51113',
    longcode: '51113',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-02-18T13:11:59.000Z',
    updatedAt: '2022-02-18T13:11:59.000Z',
  },
  'Safe Haven Microfinance Bank Limited': {
    id: 609,
    name: 'Safe Haven Microfinance Bank Limited',
    slug: 'safe-haven-microfinance-bank-limited-ng',
    code: '951113',
    longcode: '',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-07-28T14:22:56.000Z',
    updatedAt: '2022-12-02T10:51:53.000Z',
  },
  'Shield MFB': {
    id: 632,
    name: 'Shield MFB',
    slug: 'shield-mfb-ng',
    code: '50582',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-16T15:16:47.000Z',
    updatedAt: '2022-09-16T15:16:47.000Z',
  },
  'Solid Rock MFB': {
    id: 365,
    name: 'Solid Rock MFB',
    slug: 'solid-rock-mfb',
    code: '50800',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-06-27T10:24:28.000Z',
    updatedAt: '2022-06-27T10:24:28.000Z',
  },
  'Sparkle Microfinance Bank': {
    id: 72,
    name: 'Sparkle Microfinance Bank',
    slug: 'sparkle-microfinance-bank',
    code: '51310',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-02-11T18:43:14.000Z',
    updatedAt: '2020-02-11T18:43:14.000Z',
  },
  'Stanbic IBTC Bank': {
    id: 14,
    name: 'Stanbic IBTC Bank',
    slug: 'stanbic-ibtc-bank',
    code: '221',
    longcode: '221159522',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:24:17.000Z',
  },
  'Standard Chartered Bank': {
    id: 15,
    name: 'Standard Chartered Bank',
    slug: 'standard-chartered-bank',
    code: '068',
    longcode: '068150015',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:23:40.000Z',
  },
  'Stellas MFB': {
    id: 285,
    name: 'Stellas MFB',
    slug: 'stellas-mfb',
    code: '51253',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-02-17T14:54:01.000Z',
    updatedAt: '2022-02-17T14:54:01.000Z',
  },
  'Sterling Bank': {
    id: 16,
    name: 'Sterling Bank',
    slug: 'sterling-bank',
    code: '232',
    longcode: '232150016',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2022-05-27T08:56:01.000Z',
  },
  'Suntrust Bank': {
    id: 23,
    name: 'Suntrust Bank',
    slug: 'suntrust-bank',
    code: '100',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-10-10T17:26:29.000Z',
    updatedAt: '2016-10-10T17:26:29.000Z',
  },
  'Supreme MFB': {
    id: 631,
    name: 'Supreme MFB',
    slug: 'supreme-mfb-ng',
    code: '50968',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-16T15:16:29.000Z',
    updatedAt: '2022-09-16T15:16:29.000Z',
  },
  'TAJ Bank': {
    id: 68,
    name: 'TAJ Bank',
    slug: 'taj-bank',
    code: '302',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-01-20T11:20:32.000Z',
    updatedAt: '2020-01-20T11:20:32.000Z',
  },
  'Tanadi Microfinance Bank': {
    id: 634,
    name: 'Tanadi Microfinance Bank',
    slug: 'tanadi-microfinance-bank-ng',
    code: '090560',
    longcode: '',
    gateway: 'ibank',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-22T09:14:25.000Z',
    updatedAt: '2022-09-22T09:14:25.000Z',
  },
  'Tangerine Money': {
    id: 186,
    name: 'Tangerine Money',
    slug: 'tangerine-money',
    code: '51269',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2021-09-17T13:25:16.000Z',
    updatedAt: '2021-09-17T13:25:16.000Z',
  },
  'TCF MFB': {
    id: 75,
    name: 'TCF MFB',
    slug: 'tcf-mfb',
    code: '51211',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-04-03T09:34:35.000Z',
    updatedAt: '2020-04-03T09:34:35.000Z',
  },
  'Titan Bank': {
    id: 73,
    name: 'Titan Bank',
    slug: 'titan-bank',
    code: '102',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-03-10T11:41:36.000Z',
    updatedAt: '2020-03-23T15:06:29.000Z',
  },
  'Titan Paystack': {
    id: 629,
    name: 'Titan Paystack',
    slug: 'titan-paystack',
    code: '100039',
    longcode: '',
    gateway: '',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-02T08:51:15.000Z',
    updatedAt: '2022-09-06T09:40:48.000Z',
  },
  'Uhuru MFB': {
    id: 630,
    name: 'Uhuru MFB',
    slug: 'uhuru-mfb-ng',
    code: 'MFB51322',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-09-14T12:58:20.000Z',
    updatedAt: '2022-09-14T12:58:20.000Z',
  },
  'Unaab Microfinance Bank Limited': {
    id: 678,
    name: 'Unaab Microfinance Bank Limited',
    slug: 'unaab-microfinance-bank-limited-ng',
    code: '50870',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-11-24T13:47:10.000Z',
    updatedAt: '2022-11-24T13:49:16.000Z',
  },
  'Unical MFB': {
    id: 282,
    name: 'Unical MFB',
    slug: 'unical-mfb',
    code: '50871',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-01-10T09:52:47.000Z',
    updatedAt: '2022-01-10T09:52:47.000Z',
  },
  'Unilag Microfinance Bank': {
    id: 638,
    name: 'Unilag Microfinance Bank',
    slug: 'unilag-microfinance-bank-ng',
    code: '51316',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2022-11-07T07:41:50.000Z',
    updatedAt: '2022-11-07T07:41:50.000Z',
  },
  'Union Bank of Nigeria': {
    id: 17,
    name: 'Union Bank of Nigeria',
    slug: 'union-bank-of-nigeria',
    code: '032',
    longcode: '032080474',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2020-02-18T20:22:54.000Z',
  },
  'United Bank For Africa': {
    id: 18,
    name: 'United Bank For Africa',
    slug: 'united-bank-for-africa',
    code: '033',
    longcode: '033153513',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2022-03-09T10:28:57.000Z',
  },
  'Unity Bank': {
    id: 19,
    name: 'Unity Bank',
    slug: 'unity-bank',
    code: '215',
    longcode: '215154097',
    gateway: 'emandate',
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2019-07-22T12:44:02.000Z',
  },
  'VFD Microfinance Bank Limited': {
    id: 71,
    name: 'VFD Microfinance Bank Limited',
    slug: 'vfd',
    code: '566',
    longcode: '',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2020-02-11T15:44:11.000Z',
    updatedAt: '2020-10-28T09:42:08.000Z',
  },
  'Wema Bank': {
    id: 20,
    name: 'Wema Bank',
    slug: 'wema-bank',
    code: '035',
    longcode: '035150103',
    gateway: null,
    pay_with_bank: false,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2021-02-09T17:49:59.000Z',
  },
  'Zenith Bank': {
    id: 21,
    name: 'Zenith Bank',
    slug: 'zenith-bank',
    code: '057',
    longcode: '057150013',
    gateway: 'emandate',
    pay_with_bank: true,
    active: true,
    country: 'Nigeria',
    currency: 'NGN',
    type: 'nuban',
    is_deleted: false,
    createdAt: '2016-07-14T10:04:29.000Z',
    updatedAt: '2022-09-28T10:42:23.000Z',
  },
};

module.exports = banks;
