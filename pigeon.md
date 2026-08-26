# 🐦 Pigeon Game — Current Ideas

## Core Concept

* Player runs a bird/pigeon delivery operation.
* NPC customers come to the player to rent birds for deliveries.
* Customer chooses:

  * Destination
  * Package/message
  * Weight
* Player assigns one or more birds to the job.
* Birds fly out, deliver, and return.
* Birds need a cooldown/rest period after returning.
* Player can tap/click a flying bird to temporarily increase its speed.
* No need for detailed graphics — simple icons/progress bars are enough.

---

## Birds

* Start with pigeons.
* Each bird can have random/basic specs, e.g.:

  * Speed
  * Carrying capacity / weight limit
  * Reliability
  * Possibly stamina
* Keep bird stats simple; avoid complicated genetics/biology initially.
* Birds become unavailable while:

  * Flying
  * Resting after a delivery
* Bird cooldown represents the need for rest.
* Avoid tracking age/old age/death from aging unless it becomes genuinely fun later.
* Don't add realism just for the sake of realism.

### Cargo & Multiple Birds

* If a package is too heavy for one bird:

  * Player can split the package between 2+ birds.
* Multiple birds can be sent on the same job.
* Possible risks:

  * One bird arrives late.
  * One bird gets delayed.
  * One bird goes missing.
* Delivery may require all birds/package portions to arrive before it is considered complete.
* Bigger/heavier deliveries become part of progression.

---

## Other Bird Types

* Possibly unlock different bird species later.
* Example:

  * Pigeon
  * Owl
  * Other birds
* Different species could have different strengths rather than being direct upgrades.
* Example:

  * Pigeon = cheap/general-purpose
  * Owl = can operate at night
  * Larger bird = higher carrying capacity
* Don't make species unlocks into complicated breeding/genetics systems.
* Different bird types should add variety, not another APICO-style rabbit hole.

---

## Delivery System

* NPC customers generate delivery jobs.
* Start with nearby destinations.
* Gradually unlock destinations farther away.
* Longer/farther deliveries:

  * Take longer
  * Pay more
  * May have greater risks
* Possible delivery progression:

  * Nearby village
  * Nearby town
  * Larger city
  * Other regions
  * International destinations
* Exact travel times/balance TBD.
* Delivery time could represent:

  * Outbound + return trip
  * Or separate outbound/return timers
* Birds need a rest/cooldown after returning.

---

## Tapping / Active Gameplay

* Player can tap/click the bird while it is flying.
* Tapping temporarily increases bird speed.
* Example:

  * Normal speed = 100%
  * Tapping = temporary speed boost
  * Boost gradually falls off when player stops tapping
* Tapping is optional:

  * Active players can speed up deliveries.
  * Idle players can simply let the bird fly normally.
* This gives the player something to do during deliveries without requiring complicated graphics.

---

## Farm

### Starting Farm

* Player starts with a very small farm.
* Initially the farm only produces food for the birds.
* Food is required to maintain/feed birds.
* Farming should remain simple.
* Avoid turning it into a full farming simulator.

### Player Resource Gathering

* Initially player can farm.
* After a few deliveries (e.g. 3), unlock woodcutting.
* Player can then choose between:

  * 🌾 Farming → food
  * 🪓 Chopping wood → building material
* Player cannot perform both activities simultaneously.
* This creates a simple resource decision:

  * "Do I need food?"
  * "Or do I want to build another birdhouse?"
* Farming remains useful after woodcutting is unlocked.

---

## Birdhouses

* Birdhouses provide space for birds.
* Initially:

  * 1 birdhouse = 1 bird
* Player needs wood to build additional houses.
* Possible progression:

  * Basic birdhouse → 1 bird
  * Improved house/coop → more birds
  * Larger aviary → many birds
* Eventually avoid requiring the player to manually build hundreds of individual houses.
* Birdhouses are a physical representation of bird capacity.

---

## Workers

### Early Game

* Initially, player does everything themselves.
* Player farms OR chops wood.
* Houses can be unlocked without needing a worker first.

### Farmhand

* After the player has enough competing tasks, unlock a first farmhand.
* The purpose of the worker is to provide another pair of hands.
* Example:

  * Player farms
  * Farmhand chops wood
* Or:

  * Player chops wood
  * Farmhand farms
* This allows both resources to be produced simultaneously.

### Worker Progression

* Don't simply have:

  * Farmhand I
  * Farmhand II
  * Farmhand III
* Instead, gradually introduce specialized workers.
* Possible workers:

  * 👷 Farmhand
  * 🌾 Farmer
  * 🪓 Woodcutter
  * 🏗️ Builder
  * 🐦 Breeder
  * 📦 Dispatcher
* Worker slots can also increase over time.
* Player chooses how to allocate workers.
* Example:

  * 2 worker slots:

    * Farmer + Woodcutter
    * Farmer + Builder
    * 2 Farmers
* Later unlock more worker slots.

### Overall Worker Progression

* Beginning:

  * Player does everything.
* Early:

  * Player chooses between farming/chopping.
* Later:

  * Hire one helper so two things can happen at once.
* Later:

  * Hire specialized workers.
* Eventually:

  * Basic resource gathering becomes mostly automated.
* Player's attention shifts toward managing the bird/delivery operation.

---

## Breeding

* Breeding may be unlocked later.
* Don't introduce it at the beginning.
* Keep it simple initially.
* Possible purpose:

  * Produce new birds
  * Increase bird population
  * Potentially introduce better/random bird specs
* Avoid complicated genetics unless it becomes genuinely fun.
* Do NOT accidentally turn this into APICO/Frog Game 2.

---

## General Progression Philosophy

* Start with player doing almost everything manually.
* Gradually automate/delegate the boring tasks.
* Things the player manually does early should eventually become automated.
* Player should gradually move from:

  * Farming
  * Chopping
  * Building
  * Basic bird management
* Toward:

  * Choosing jobs
  * Assigning birds
  * Managing larger deliveries
  * Managing multiple bird types
  * Managing workers
  * Expanding the operation

---

## Important Design Rules

* Keep systems simple unless complexity creates actual fun.
* Avoid unnecessary realism.
* Avoid complicated bird aging/retirement/death systems.
* Avoid deep genetics/breeding systems unless needed.
* Farm should support the bird business, not become the main game.
* Bird biology should support gameplay, not become a spreadsheet.
* No need for fancy graphics.
* The game should have things for the player to do while birds are away.
* Avoid making the core loop simply:

  * Send bird → wait → collect reward.
* Active actions should be optional rather than mandatory.
* Still throwing ideas around — nothing is final yet.

---

## Current Core Loop (Very Rough)

1. Receive NPC delivery request.
2. Check destination and package weight.
3. Choose suitable bird(s).
4. Split cargo between birds if necessary.
5. Dispatch bird(s).
6. Tap birds to give temporary speed boosts.
7. While birds are away:

   * Farm food
   * Chop wood
   * Build/upgrade birdhouses
   * Manage workers
   * Prepare next job
8. Bird(s) return.
9. Bird(s) rest/cool down.
10. Receive payment.
11. Use resources/money to expand the operation.
12. Unlock farther destinations, more birds, better infrastructure, workers, and eventually other bird types.

---

## Things Still Undecided

* Exact delivery timing.
* Whether travel time is one-way or includes return.
* Exact bird stats.
* How bird failure/missing birds works.
* Whether birds can be permanently lost.
* How much tapping affects speed.
* Exact farming mechanics.
* How birdhouses upgrade.
* Worker hiring/costs.
* When breeding unlocks.
* How different bird species work.
* Whether/how prestige exists.
* What the long-term endgame is.
* **Most importantly: what makes the game fun enough to keep playing.**
