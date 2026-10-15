Donut Mania v20

New reward system:
- Reward is calculated when the correct donut is delivered.
- It depends on the customer's remaining patience:
  * EARLY: 50% or more remaining
  * MID: 25% to under 50%
  * LATE: under 25%
- Topped donuts have a separate, higher reward table from plain donuts.
- The calculated amount is preserved during the 3-second payment delay and shown on the money pile.

Default rewards:
Plain:
  EARLY 50
  MID   40
  LATE  30

Topped:
  EARLY 70
  MID   60
  LATE  50

All balancing values are editable in:
  game_config.js

You can manually change:
- GOAL
- DAY_MS
- MACHINE_MS
- ORDER_DELAY_MS
- PAYMENT_DELAY_MS
- PLAYER_SPEED
- customer patience
- arrival schedule
- patience reward thresholds
- all six reward amounts
