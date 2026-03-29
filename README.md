# Titan Mining Simulator

A browser-based 2D side-scrolling mining game set on Saturn's moon Titan. Pilot a rover across a procedurally generated hydrocarbon landscape, mine resources, survive methane storms, and complete three phase objectives to establish a fully operational base.

## Gameplay

- Explore a 6000-unit wide procedural terrain under Titan's orange haze
- Mine four resource types: **Methane (CH₄)**, **Ethane (C₂H₆)**, **Water Ice (H₂O)**, and **Ammonia (NH₃)**
- Haul cargo back to Base Camp to deposit and progress through three phases
- Jump over terrain hazards: **boulders**, **ice spikes**, and **cryo-vents**
- Survive periodic **methane storms** — they push your rover, double hazard damage, and erode your hull and cargo while exposed to rain
- Find **shelters** scattered across the terrain to wait out storms safely
- Return to base to repair hull damage

## Hazards

| Hazard | How to handle |
|---|---|
| Boulder | Jump over |
| Ice spike | Jump over |
| Cryo-vent | Jump or wait — only damages when the gas plume is active |
| Methane storm | Seek a SHELTER — rain damages hull and strips cargo each tick |

Storms deal **2× damage** on hazard hits. During storm rain exposure without shelter: hull takes periodic damage and cargo is lost.

## Controls

| Input | Action |
|---|---|
| `← →` / `A D` | Move rover |
| `↑` / `W` / `Space` | Jump (0.14g — floaty!) |
| `Z` / `X` / `↓` | Mine (hold near a deposit) |
| Walk into BASE | Deposit cargo & repair hull |
| `R` | Restart (from dead/win screen) |

## Getting Started

### Open directly

Open `index.html` in any modern browser — no build step required.

### Local dev server

```bash
node server.js
```

Then navigate to <http://localhost:3000>.

## Project Structure

```
index.html   # Self-contained game (HTML + CSS + JS)
server.js    # Minimal Node.js static file server
```

## Setting

Saturn's moon Titan — 1.48× Earth atmospheric pressure · 0.14g surface gravity · liquid methane/ethane seas · subsurface water-ice ocean · −179 °C surface temperature.