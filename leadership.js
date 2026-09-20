
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
