/** 
 * db.js
 * Leadership Database - Single Source of Truth
 * 
 * ARCHITECTURE NOTES:
 * - `id`: Must be unique. Used internally and for React/Vue keying if upgraded later.
 * - `image`: Deterministically tied to the unique ID. Format must always be `.webp`. 
 *   If two leaders have the same name, use numerical suffixes for ID/Image (e.g., `john-doe-2`, `john-doe-2.webp`).
 * - `group`: 'national' | 'zonal'. Used for section rendering.
 * - `zone`: Set to the specific zone if group is 'zonal', otherwise null.
 */

export const leaders = [
    // --- NATIONAL EXECUTIVE COUNCIL (NEC) ---
    {
        id: "akinniyi-akinleye",
        name: "Comrade Akinniyi Akinleye",
        position: "President",
        group: "national",
        zone: null,
        bio: "Chief executive and official spokesperson for the union on all national and statutory matters.",
        image: "akinniyi-akinleye.webp"
    },
    {
        id: "ekine-beneboye-pakaye",
        name: "Comrade Ekine Beneboye Pakaye",
        position: "Deputy President",
        group: "national",
        zone: null,
        bio: "Assists the President and oversees targeted administrative portfolios.",
        image: "ekine-beneboye-pakaye.webp"
    },
    {
        id: "aminu-anwalu",
        name: "Comrade Dr. Aminu Anwalu",
        position: "National Secretary",
        group: "national",
        zone: null,
        bio: "Coordinates the National Secretariat and manages official correspondence and union records.",
        image: "aminu-anwalu.webp"
    },
    {
        id: "dahiru-gurama",
        name: "Comrade Dahiru Gurama",
        position: "National Deputy Secretary",
        group: "national",
        zone: null,
        bio: "Provides administrative support to the National Secretary.",
        image: "dahiru-gurama.webp"
    },
    {
        id: "baba-ndaliman",
        name: "Comrade Baba Ndaliman",
        position: "National Treasurer",
        group: "national",
        zone: null,
        bio: "Custodian of union funds, ensuring proper disbursement and accounting.",
        image: "baba-ndaliman.webp"
    },
    {
        id: "umar-inuwa-girei",
        name: "Comrade Umar Inuwa Girei",
        position: "National Financial Secretary",
        group: "national",
        zone: null,
        bio: "Maintains accurate financial records and dues collection.",
        image: "umar-inuwa-girei.webp"
    },
    {
        id: "chukwuebuka-obi",
        name: "Comrade Dr. Chukwuebuka Obi",
        position: "National Publicity Secretary",
        group: "national",
        zone: null,
        bio: "Manages internal and external communications and media relations.",
        image: "chukwuebuka-obi.webp"
    },
    {
        id: "obojor-ogar-oyigojar",
        name: "Comrade Obojor-Ogar Oyigojar",
        position: "National Auditor",
        group: "national",
        zone: null,
        bio: "Ensures financial transparency and adherence to constitutional accounting practices.",
        image: "obojor-ogar-oyigojar.webp"
    },
    {
        id: "obi-chioma",
        name: "Comrade Obi Chioma",
        position: "National Woman Leader",
        group: "national",
        zone: null,
        bio: "Champions the welfare, participation, and rights of female members.",
        image: "obi-chioma.webp"
    },
    {
        id: "danladi-ali-msheliza",
        name: "Comrade Danladi Ali Msheliza",
        position: "Ex-Officio I",
        group: "national",
        zone: null,
        bio: "Provides advisory support and serves on special committees within the National Executive Council.",
        image: "danladi-ali-msheliza.webp"
    },
    {
        id: "leo-isioma-nwenyi",
        name: "Comrade Leo Isioma Nwenyi",
        position: "Ex-Officio II",
        group: "national",
        zone: null,
        bio: "Provides advisory support and serves on special committees within the National Executive Council.",
        image: "leo-isioma-nwenyi.webp"
    },

    // --- ZONAL LEADERSHIP ---
    {
        id: "emmanuel-iyashare",
        name: "Comrade Emmanuel Iyashare",
        position: "Vice-President",
        group: "zonal",
        zone: "South-West",
        bio: null,
        image: "emmanuel-iyashare.webp"
    },
    {
        id: "ekene",
        name: "Comrade Ekene",
        position: "Zonal Chairman",
        group: "zonal",
        zone: "South-East",
        bio: null,
        image: "ekene.webp"
    },
    {
        id: "aminu-abudullahi",
        name: "Comrade Aminu Abudullahi",
        position: "Zonal Chairman",
        group: "zonal",
        zone: "North-West",
        bio: null,
        image: "aminu-abudullahi.webp"
    },
    {
        id: "lawan-mustapha-kaffi",
        name: "Lawan Mustapha Kaffi",
        position: "Zonal Chairman",
        group: "zonal",
        zone: "North-East",
        bio: null,
        image: "lawan-mustapha-kaffi.webp"
    },
    {
        id: "nwachukwu-godwin",
        name: "Comrade Nwachukwu Godwin",
        position: "Zonal Chairman",
        group: "zonal",
        zone: "South-South",
        bio: null,
        image: "nwachukwu-godwin.webp"
    },
    {
        id: "abechi-otaekwu",
        name: "Abechi Otaekwu",
        position: "Zonal Chairman",
        group: "zonal",
        zone: "North-Central",
        bio: null,
        image: "abechi-otaekwu.webp"
    }
];
