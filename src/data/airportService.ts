const BASE_URL = "https://airportgap.com/api/airports";

export interface Airport {
  icao?: string;
  iata: string;
  name: string;
  city: string;
  country: string;
}

const INDONESIAN_AIRPORTS: Airport[] = [
  {
    iata: "YIA",
    icao: "WAHI",
    name: "Yogyakarta International Airport",
    city: "Yogyakarta",
    country: "Indonesia",
  },
  {
    iata: "BDO",
    icao: "WICC",
    name: "Husein Sastranegara Airport",
    city: "Bandung",
    country: "Indonesia",
  },
  {
    iata: "CGK",
    icao: "WIII",
    name: "Soekarno–Hatta International Airport",
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    iata: "HLP",
    icao: "WIHH",
    name: "Halim Perdanakusuma Airport",
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    iata: "SUB",
    icao: "WARR",
    name: "Juanda International Airport",
    city: "Surabaya",
    country: "Indonesia",
  },
  {
    iata: "DPS",
    icao: "WADD",
    name: "Ngurah Rai International Airport",
    city: "Bali",
    country: "Indonesia",
  },
  {
    iata: "KNO",
    icao: "WIMM",
    name: "Kualanamu International Airport",
    city: "Medan",
    country: "Indonesia",
  },
  {
    iata: "UPG",
    icao: "WAAA",
    name: "Sultan Hasanuddin International Airport",
    city: "Makassar",
    country: "Indonesia",
  },
  {
    iata: "BPN",
    icao: "WALL",
    name: "Sultan Aji Muhammad Sulaiman Sepinggan Airport",
    city: "Balikpapan",
    country: "Indonesia",
  },
];

export const fetchAirports = async (query: string): Promise<Airport[]> => {
  if (!query || query.trim().length < 2) return [];
  const searchKey = query.trim().toLowerCase();

  // 1. Filter dari data lokal Indonesia dulu (prioritas utama)
  const localFiltered = INDONESIAN_AIRPORTS.filter(
    (item) =>
      item.city.toLowerCase().includes(searchKey) ||
      item.name.toLowerCase().includes(searchKey) ||
      item.iata.toLowerCase().includes(searchKey),
  );

  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return localFiltered; // Jika API luar gagal/offline, tetap kembalikan data lokal
    }

    const jsonResult = await response.json();

    if (jsonResult && Array.isArray(jsonResult.data)) {
      const apiAirports = jsonResult.data.map((item: any) => ({
        iata: item.attributes.iata,
        icao: item.attributes.icao,
        name: item.attributes.name,
        city: item.attributes.city || "Unknown City",
        country: item.attributes.country,
      }));

      // Filter hasil dari API luar
      const apiFiltered = apiAirports.filter(
        (item: Airport) =>
          item.city.toLowerCase().includes(searchKey) ||
          item.name.toLowerCase().includes(searchKey) ||
          item.iata.toLowerCase().includes(searchKey),
      );

      // Gabungkan data Indonesia + Data Internasional dari API
      const combined = [...localFiltered, ...apiFiltered];

      // Hilangkan duplikasi jika ada data yang sama berdasarkan kode IATA
      return combined.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.iata === value.iata),
      );
    }

    return localFiltered;
  } catch (error) {
    console.warn("AirportGap Fetch Warning:", error);
    return localFiltered;
  }
};
