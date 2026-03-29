# Titan Mining Simulator

A browser-based 2D side-scrolling mining game set on Saturn's moon Titan. Pilot a rover across a procedurally generated hydrocarbon landscape, mine resources, and complete three phase objectives to establish a fully operational base.

## Gameplay

- Explore a 6000-unit wide procedural terrain under Titan's orange haze
- Mine four resource types: **Methane (CH₄)**, **Ethane (C₂H₆)**, **Water Ice (H₂O)**, and **Ammonia (NH₃)**
- Haul cargo back to Base Camp to deposit and progress through three phases
- Avoid hazards: boulders, cryo-spikes, and volcanic vents
- Survive methane storms that double hazard damage and push your rover
- Return to base to repair hull damage

## Controls

| Input | Action |
|---|---|
| `← → ` / `A D` | Move rover |
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

Saturn's moon Titan — 1.48× Earth atmospheric pressure · 0.14g surface gravity · liquid hydrocarbon seas · −179 °C surface temperature.