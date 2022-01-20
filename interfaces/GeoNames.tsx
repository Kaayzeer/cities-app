export interface GeoNames {
  geonames: Fetch[];
}
interface Fetch {
  adminCode1: string;
  adminCodes1: insideFetch[];
  adminName1: string;
  countryCode: string;
  countryId: string;
  countryName: string;
  fcl: string;
  fclName: string;
  fcode: string;
  fcodeName: string;
  geonameId: number;
  lat: string;
  lng: string;
  name: string;
  population: number;
  toponymName: string;
}

interface insideFetch {
  ISO3166_2: string;
}
