const locations = [
  // {
  //   name: 'Oslo S',
  //   lat: 59.91118742182961,
  //   lon: 10.752489585188401,
  // },
  {
    name: 'Nationaltheatret',
    lat: 59.91483673354232,
    lon: 10.730321741009059,
  },
  {
    name: 'Skøyen',
    lat: 59.923075998191905,
    lon: 10.678425417494934,
  },
  {
    name: 'Lysaker',
    lat: 59.913503329272345,
    lon: 10.637423071696157,
  },
  {
    name: 'Stabekk',
    lat: 59.908212402493234,
    lon: 10.607301112172943,
  },
  {
    name: 'Høvik',
    lat: 59.90073277009802,
    lon: 10.58168538518807,
  },
  {
    name: 'Blommenholm',
    lat: 59.8973723462906,
    lon: 10.555001414023895,
  },
  {
    name: 'Sandvika',
    lat: 59.892929953892875,
    lon: 10.52583974285958,
  },
  {
    name: 'Slependen',
    lat: 59.88570872607813,
    lon: 10.502796642859375,
  },
  {
    name: 'Billingstad',
    lat: 59.87528058254205,
    lon: 10.48401977169493,
  },
  {
    name: 'Hvalstad',
    lat: 59.858558228796014,
    lon: 10.46212364285855,
  },
  {
    name: 'Vakås',
    lat: 59.85120213646761,
    lon: 10.46712821696901,
  },
  {
    name: 'Høn',
    lat: 59.843941776125554,
    lon: 10.45631562566322,
  },
  {
    name: 'Asker',
    lat: 59.833711,
    lon: 10.434370,
  },
  {
    name: 'Bondivann',
    lat: 59.820477,
    lon: 10.433099,
  },
  {
    name: 'Gullhella',
    lat: 59.807084,
    lon: 10.436414,
  },
  {
    name: 'Heggedal',
    lat: 59.786980,
    lon: 10.430847,
  },
  {
    name: 'Røyken',
    lat: 59.74734135535502,
    lon: 10.390010339014358,
  },
  {
    name: 'Spikkestad',
    lat: 59.745297087166136,
    lon: 10.343193486201088,
  },
  {
    name: 'Lier',
    lat: 59.763425,
    lon: 10.290003,
  },
  {
    name: 'Lierbyen',
    lat: 59.787702271139224,
    lon: 10.24589477132096,
  },
  {
    name: 'Drammen',
    lat: 59.740370427507955,
    lon: 10.203717340940054,
  },
];

/**
 * Each key is the same as the query parameter used in Finn.no URLs. Add new query parameters freely :)
 */
const query = {
  radius: 3000, // i meter
  lifecycle: [1, 3], // 1 = til salgs, 3 = kommer for salg
  property_type: [1, 2, 3, 4], // 1 = enebolig, 2 = tomannsbolig, 3 = leilighet, 4 = rekkehus
  ownership_type: [2, 3, 4], // 2 = aksje, 3 = selveier, 4 = andel
  // price_collective_from: 0, // Totalpris fra
  // price_collective_to: 0, // Totalpris til
  area_from: 90,
  // plot_area_from: 10,
  no_of_bedrooms_from: 2,
  // facilities: 23, // 23 = parkering,
  // is_new_property: true, // Brukt- eller nysalg (nysalg er stort sett uferdige boliger)
  // floor_navigator: 1, // Første etasje (merk: hus har ofte ikke oppgitt etasje i annonsen)
};

module.exports = {
  locations,
  query,
};
