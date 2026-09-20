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
```eof

```javascript:leadership.js
/**
 * leadership.js
 * Handles the dynamic rendering of the leadership profiles from db.js
 */

import { leaders } from './db.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNationalLeaders();
    renderZonalLeaders();
});

function renderNationalLeaders() {
    const container = document.getElementById('national-grid');
    if (!container) return;

    const nationalLeaders = leaders.filter(leader => leader.group === 'national');

    // Empty state handling
    if (nationalLeaders.length === 0) {
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <i class="fa-solid fa-users-slash text-4xl text-gray-300 mb-4"></i>
                <p class="text-lg text-gray-500 font-medium">Leadership profiles are currently being updated.</p>
            </div>`;
        return;
    }

    // Dynamic rendering
    const html = nationalLeaders.map(leader => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1" data-id="${leader.id}">
            <div class="aspect-square bg-gray-100 relative overflow-hidden flex-shrink-0">
                <img src="${leader.image}" 
                     alt="${leader.name}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                     onerror="this.src='https://placehold.co/400x400/f1f5f9/94a3b8?text=Image+Unavailable';">
                <div class="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6 text-center flex-grow flex flex-col justify-between bg-white relative z-10">
                <div>
                    <h3 class="text-lg font-bold text-dark mb-1">${leader.name}</h3>
                    <p class="text-sm font-bold text-primary mb-3">${leader.position}</p>
                    ${leader.bio ? `<p class="text-xs text-muted mb-4 line-clamp-3 leading-relaxed">${leader.bio}</p>` : ''}
                </div>
                <div class="mt-auto pt-4">
                    <button class="text-xs font-bold text-dark hover:text-accent transition-colors uppercase tracking-wider border-b-2 border-transparent hover:border-accent pb-1 inline-flex items-center gap-1 focus:outline-none">
                        View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function renderZonalLeaders() {
    const container = document.getElementById('zonal-grid');
    if (!container) return;

    // Standardized organizational zones
    const organizationalZones = [
        { id: "North-Central", name: "North-Central Zone", abbr: "NC" },
        { id: "North-East", name: "North-East Zone", abbr: "NE" },
        { id: "North-West", name: "North-West Zone", abbr: "NW" },
        { id: "South-East", name: "South-East Zone", abbr: "SE" },
        { id: "South-South", name: "South-South Zone", abbr: "SS" },
        { id: "South-West", name: "South-West Zone", abbr: "SW" },
    ];

    const html = organizationalZones.map(zone => {
        const zoneLeaders = leaders.filter(l => l.group === 'zonal' && l.zone === zone.id);

        let leadersHtml = '';
        if (zoneLeaders.length > 0) {
            leadersHtml = zoneLeaders.map(leader => `
                <li class="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-white transition-colors duration-200">
                    <div class="mt-1">
                        <img src="${leader.image}" alt="${leader.name}" class="w-10 h-10 rounded-full object-cover border-2 border-gray-100" onerror="this.src='https://placehold.co/100x100/f1f5f9/94a3b8?text=NA';">
                    </div>
                    <div>
                        <p class="text-[10px] text-muted uppercase tracking-wider font-bold mb-0.5">${leader.position}</p>
                        <p class="text-sm font-bold text-dark group-hover:text-primary transition-colors">${leader.name}</p>
                    </div>
                </li>
            `).join('');
        } else {
            leadersHtml = `
                <li class="py-3 text-sm text-gray-400 italic flex items-center gap-2">
                    <i class="fa-solid fa-clock-rotate-left"></i> Appointments pending...
                </li>`;
        }

        return `
            <div class="bg-light p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200/60">
                    <div class="w-10 h-10 bg-white shadow-sm text-primary rounded-lg flex items-center justify-center font-bold text-sm tracking-widest border border-gray-100">
                        ${zone.abbr}
                    </div>
                    <h3 class="text-xl font-bold text-dark">${zone.name}</h3>
                </div>
                <ul class="space-y-1">
                    ${leadersHtml}
                </ul>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}
