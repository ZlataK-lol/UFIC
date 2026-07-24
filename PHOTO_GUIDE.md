# Photo Guide — Study Abroad Reflection Site

This site auto-loads photos by filename. Drop a matching `.jpg` file into the
right folder and it appears — no code editing required. If a file is missing,
that slot just shows its placeholder frame with an upload button (which also
still works, for a quick one-off preview while running the dev server).

Folders live at the project root: `public/photos/`, `public/photos/gallery/`,
and `public/screenshots/`.

---
## ✅ Already filled in for you
- `public/photos/team-farm.jpg` + `public/photos/gallery/team-farm.jpg`
- `public/photos/program-excursion.jpg` + `public/photos/cape-town-view.jpg` + `public/photos/gallery/chapmans-peak.jpg`
- `public/photos/gallery/client-presentation.jpg`

---
## public/photos/ (direct slots across Home, About Me, Trip Overview, Reflection)

| Filename | Used in | Slot |
|---|---|---|
| cover.jpg | Home | Cover photo |
| arrival.jpg | Home | Arrival / first impression |
| landing-airport.jpg | Home | Landing / airport |
| first-view-sa.jpg | Home | First view of SA |
| portrait.jpg | About Me | Your portrait |
| portrait-2.jpg | About Me | Second portrait |
| before-the-trip.jpg | About Me | Before the trip |
| with-family.jpg | About Me | With family |
| with-friends.jpg | About Me | With friends |
| packing-day.jpg | About Me | Packing / prep day |
| most-meaningful.jpg | Reflection | Most meaningful photo of the trip |
| last-day.jpg | Reflection | Last day in the city |
| goodbyes.jpg | Reflection | Goodbyes with friends |
| arrival-home.jpg | Reflection | Arrival back home |
| final-photo.jpg | Reflection | Final closing photo |
| transformation.jpg | Reflection Summary | Photo representing your transformation |

## public/photos/ — Weekly Lessons (3 photos × 6 weeks = 18 files)
Pattern: `week-{n}-{1|2|3}.jpg`, where n = 1 through 6.
e.g. `week-1-1.jpg`, `week-1-2.jpg`, `week-1-3.jpg`, `week-2-1.jpg`, … `week-6-3.jpg`

| Week | Topic |
|---|---|
| 1 | Kickoff & Environment Setup |
| 2 | Building the AI Assistant |
| 3 | Automation & Visual Redesign |
| 4 | Cloud Infrastructure on Azure |
| 5 | Testing & Iteration |
| 6 | Final Presentations & Client Testing |

## public/photos/ — Abroad section (personal, all still blank)

| Filename | Slot |
|---|---|
| city-neighborhood.jpg | Your city / neighborhood |
| home-away-from-home.jpg | Your home away from home |
| classroom-campus.jpg | Your classroom / campus |
| study-spot.jpg | A study spot you loved |
| academic-event.jpg | Academic event or excursion |
| morning-routine.jpg | Your morning routine spot |
| weekend-adventure.jpg | Weekend adventure |
| friend-group.jpg | Your friend group |
| local-met.jpg | A local you met |
| memorable-gathering.jpg | A memorable gathering |
| favorite-meal.jpg | Favorite meal |
| local-market.jpg | Local market |
| street-food.jpg | Street food |
| cultural-experience.jpg | A cultural experience |
| destination-1.jpg … destination-5.jpg | Travel destinations |
| hidden-gem.jpg | A hidden gem |
| memory-1.jpg, memory-2.jpg, memory-3.jpg, memory-4.jpg | Postcard memories (add more if you expand the count in the UI) |

---
## public/photos/gallery/ (The Photo Gallery section — 16 slots + 1 featured)

| Filename | Label | Status |
|---|---|---|
| table-mountain.jpg | Featured hero photo | Needed |
| chapmans-peak.jpg | Chapman's Peak Drive | ✅ Filled |
| team-farm.jpg | Team at Safe Cities Farm | ✅ Filled |
| group-outing.jpg | Group program outing | Needed |
| client-meeting.jpg | Client interview / kickoff | Needed |
| client-presentation.jpg | Final client presentation | ✅ Filled |
| elsie-demo.jpg | Elsie in action | Needed |
| coding-session.jpg | Coding session | Needed |
| braai.jpg | Braai / local food | Needed |
| cape-malay-food.jpg | Cape Malay cuisine | Needed |
| bo-kaap.jpg | Bo-Kaap houses | Needed |
| farm-site.jpg | Safe Cities farm site | Needed |
| sunset.jpg | Sunrise / sunset | Needed |
| elsies-river.jpg | Elsies River community | Needed |
| favorite-team-moment.jpg | Favorite team moment | Needed |
| one-more-memory.jpg | One more memory | Needed |

---
## public/screenshots/ (Project Walkthrough — real app screens, 2 each + 1 diagram)

| Filename | Screen |
|---|---|
| architecture-diagram.jpg | System architecture diagram |
| home-1.jpg, home-2.jpg | Home screen |
| auth-1.jpg, auth-2.jpg | Login / Auth |
| ai-assistant-1.jpg, ai-assistant-2.jpg | Elsie chat interface |
| task-management-1.jpg, task-management-2.jpg | Task management |
| document-library-1.jpg, document-library-2.jpg | Document library |
| marketplace-1.jpg, marketplace-2.jpg | Marketplace |

---
## Rules
1. File name must match exactly — lowercase, hyphens, `.jpg` extension.
2. Convert `.png` / `.heic` / `.jpeg` images to `.jpg` with the right name before dropping them in.
3. Keep `public/photos/`, `public/photos/gallery/`, and `public/screenshots/` in place relative to the project root — don't move them.
4. Run `npm install` then `npm run dev` to preview locally with your photos in place.
