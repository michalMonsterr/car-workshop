export const mockOrders = [
  {
    id: 1,
    customerName: 'Anna Kowalska',
    customerPhone: '+48 123 456 789',
    customerEmail: 'anna.kowalska@email.com',
    carModel: '2020 Toyota Camry',
    carBrand: 'Toyota',
    carYear: 2020,
    licensePlate: 'WA 12345',
    vin: 'JTNB11HK5L3012345',
    mileage: 45200,
    engineType: '2.5L 4-cylindrowy',
    engineCode: '2AR-FE',
    fuelType: 'Benzyna',
    transmission: 'Automatyczna CVT',
    color: 'Srebrny metalik',
    issue: 'Silnik wydaje dziwne odgłosy podczas przyspieszania. Stuk metaliczny słyszalny przy obrotach powyżej 2000 RPM.',
    priority: 'high',
    dateReported: '2024-01-15',
    estimatedCompletion: '2024-01-18',
    mechanicId: 1,
    status: 'reported',
    serviceType: 'Naprawa silnika',
    estimatedCost: 1200,
    actualCost: null,
    notes: [
      {
        id: 1,
        author: 'System',
        date: '2024-01-15T10:30:00',
        content: 'Zlecenie utworzone automatycznie z formularza online'
      }
    ],
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800',
        caption: 'Silnik - widok ogólny',
        type: 'engine'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
        caption: 'Toyota Camry - całe auto',
        type: 'exterior'
      }
    ],
    inspectionResults: {
      visualInspection: 'Widoczne ślady oleju pod silnikiem',
      diagnosticCodes: ['P0301', 'P0171'],
      testResults: 'Niewłaściwe spalanie w cylindrze #1'
    }
  },
  {
    id: 2,
    customerName: 'Piotr Nowak',
    customerPhone: '+48 987 654 321',
    customerEmail: 'piotr.nowak@email.com',
    carModel: '2019 Honda Civic',
    carBrand: 'Honda',
    carYear: 2019,
    licensePlate: 'KR 67890',
    vin: 'SHHFK7H60JU012345',
    mileage: 78500,
    engineType: '1.5L Turbo',
    engineCode: 'L15B7',
    fuelType: 'Benzyna',
    transmission: 'Manualna 6-biegowa',
    color: 'Czarny',
    issue: 'Klocki hamulcowe wymagają wymiany. Piszczenie podczas hamowania.',
    priority: 'medium',
    dateReported: '2024-01-14',
    estimatedCompletion: '2024-01-16',
    mechanicId: 1,
    status: 'in_repair',
    serviceType: 'Serwis hamulców',
    estimatedCost: 450,
    actualCost: 420,
    notes: [
      {
        id: 1,
        author: 'Jan Kowalski',
        date: '2024-01-14T14:20:00',
        content: 'Rozpoczęto demontaż kół. Grubość klocków: przód 2mm, tył 4mm'
      },
      {
        id: 2,
        author: 'Jan Kowalski',
        date: '2024-01-15T09:15:00',
        content: 'Zamówione nowe klocki Brembo. Przewidywany czas dostawy: 1 dzień'
      }
    ],
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        caption: 'Honda Civic - widok z boku',
        type: 'exterior'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1619642751304-e3ce8fa04fe8?w=800',
        caption: 'Zużyte klocki hamulcowe',
        type: 'parts'
      }
    ],
    inspectionResults: {
      visualInspection: 'Znaczne zużycie klocków przednich',
      diagnosticCodes: [],
      testResults: 'Sprawność hamowania w normie'
    }
  },
  {
    id: 3,
    customerName: 'Katarzyna Wiśniewska',
    customerPhone: '+48 555 123 456',
    customerEmail: 'k.wisniewska@email.com',
    carModel: '2021 Ford F-150',
    carBrand: 'Ford',
    carYear: 2021,
    licensePlate: 'GD 11223',
    vin: '1FTFW1E58MFA12345',
    mileage: 15000,
    engineType: '3.5L V6 EcoBoost',
    engineCode: '35GTDI',
    fuelType: 'Benzyna',
    transmission: 'Automatyczna 10-biegowa',
    color: 'Biały',
    issue: 'Rutynowa wymiana oleju i filtrów zgodnie z harmonogramem serwisowym.',
    priority: 'low',
    dateReported: '2024-01-13',
    estimatedCompletion: '2024-01-13',
    mechanicId: 1,
    status: 'repaired',
    serviceType: 'Wymiana oleju',
    estimatedCost: 180,
    actualCost: 175,
    notes: [
      {
        id: 1,
        author: 'Jan Kowalski',
        date: '2024-01-13T11:00:00',
        content: 'Wymiana oleju 5W-30 Castrol GTX (6.6L) + filtr oleju'
      },
      {
        id: 2,
        author: 'Jan Kowalski',
        date: '2024-01-13T11:45:00',
        content: 'Przeprowadzono podstawowy przegląd. Wszystko w normie'
      },
      {
        id: 3,
        author: 'Jan Kowalski',
        date: '2024-01-13T12:15:00',
        content: 'Usługa zakończona. Auto gotowe do odbioru'
      }
    ],
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800',
        caption: 'Ford F-150 - silnik po wymianie oleju',
        type: 'engine'
      }
    ],
    inspectionResults: {
      visualInspection: 'Stan techniczny bardzo dobry',
      diagnosticCodes: [],
      testResults: 'Wszystkie parametry w normie'
    }
  }
]

export const serviceTypes = [
  'Naprawa silnika',
  'Serwis hamulców',
  'Wymiana oleju',
  'Serwis opon',
  'Naprawa klimatyzacji',
  'Elektrika',
  'Przegląd okresowy',
  'Naprawa zawieszenia',
  'Inne'
]

export const priorityLevels = {
  low: { label: 'Niski', color: '#10b981' },
  medium: { label: 'Średni', color: '#f59e0b' },
  high: { label: 'Wysoki', color: '#ef4444' }
}