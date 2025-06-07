
export interface Country {
  name: string;
  code: string;
  phoneCode: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    name: "India",
    code: "IN",
    phoneCode: "+91",
    cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Coimbatore", "Agra", "Madurai", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali"]
  },
  {
    name: "United States",
    code: "US",
    phoneCode: "+1",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington DC", "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore"]
  },
  {
    name: "United Kingdom",
    code: "GB",
    phoneCode: "+44",
    cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Newcastle", "Sheffield", "Bristol", "Edinburgh", "Leicester", "Leeds", "Cardiff", "Coventry", "Bradford", "Nottingham", "Kingston upon Hull", "Belfast", "Plymouth", "Stoke-on-Trent", "Wolverhampton", "Derby", "Swansea", "Southampton", "Salford", "Aberdeen", "Westminster", "Portsmouth", "York", "Peterborough", "Dundee"]
  },
  {
    name: "Canada",
    code: "CA",
    phoneCode: "+1",
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Victoria", "Halifax", "Oshawa", "Windsor", "Saskatoon", "St. Catharines", "Regina", "Sherbrooke", "Barrie", "Kelowna", "Abbotsford", "Kingston", "Sudbury", "Saguenay", "Thunder Bay", "Kamloops", "Saint John", "Moncton", "Brantford"]
  },
  {
    name: "Australia",
    code: "AU",
    phoneCode: "+61",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong", "Geelong", "Hobart", "Townsville", "Cairns", "Darwin", "Toowoomba", "Ballarat", "Bendigo", "Albury", "Launceston", "Mackay", "Rockhampton", "Bunbury", "Bundaberg", "Coffs Harbour", "Wagga Wagga", "Hervey Bay", "Mildura", "Shepparton", "Port Macquarie"]
  },
  {
    name: "Germany",
    code: "DE",
    phoneCode: "+49",
    cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen"]
  },
  {
    name: "France",
    code: "FR",
    phoneCode: "+33",
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Angers", "Villeurbanne", "Le Mans", "Aix-en-Provence", "Clermont-Ferrand", "Brest", "Tours", "Limoges", "Amiens", "Annecy", "Perpignan", "Boulogne-Billancourt", "Metz"]
  },
  {
    name: "Japan",
    code: "JP",
    phoneCode: "+81",
    cities: ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama", "Hiroshima", "Sendai", "Kitakyushu", "Chiba", "Sakai", "Niigata", "Hamamatsu", "Kumamoto", "Sagamihara", "Shizuoka", "Okayama", "Ichikawa", "Kagoshima", "Matsuyama", "Utsunomiya", "Matsudo", "Kawaguchi", "Kanazawa", "Tokorozawa", "Oita"]
  },
  {
    name: "Brazil",
    code: "BR",
    phoneCode: "+55",
    cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia", "Belém", "Porto Alegre", "Guarulhos", "Campinas", "São Luís", "São Gonçalo", "Maceió", "Duque de Caxias", "Natal", "Teresina", "Campo Grande", "Nova Iguaçu", "São Bernardo do Campo", "João Pessoa", "Santo André", "Osasco", "Jaboatão dos Guararapes", "São José dos Campos", "Ribeirão Preto", "Uberlândia"]
  },
  {
    name: "China",
    code: "CN",
    phoneCode: "+86",
    cities: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu", "Tianjin", "Hangzhou", "Wuhan", "Xi'an", "Suzhou", "Zhengzhou", "Chongqing", "Changsha", "Dongguan", "Shenyang", "Qingdao", "Nanjing", "Dalian", "Xiamen", "Ningbo", "Kunming", "Harbin", "Fuzhou", "Jinan", "Changchun", "Shijiazhuang", "Hefei", "Urumqi", "Nanchang", "Taiyuan"]
  }
];

export const getAllCities = (): string[] => {
  const allCities = countries.flatMap(country => country.cities);
  return [...new Set(allCities)].sort();
};

export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};
