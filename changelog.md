# Virtual Casino Changelog

## V1.11.1 - 2026-06-30 - Stock/Asset Polish and Money Audit Fixes

### Fixed
- Added fresh player lookups to delayed slot and blackjack settlements so animations cannot finish against a stale player object.
- Corrected `applyMoneyResult(..., { bankrollAlreadyAdjusted:true })` so it no longer changes bankroll a second time after the game settlement already did.
- Stopped admin Bankroll Grants from inflating lifetime P/L, and added an admin Lifetime P/L adjustment tool for cleanup cases like mistaken manual grants.

### Stocks and Assets
- Moved Market News out of the top stat tiles into a wide banner so the summary cards stay compact.
- Increased stock market pulse volatility so LCN/BAWSAQ changes feel more alive while still respecting business-hours vs after-hours behavior.
- Added rare market catalyst swings so headline stocks can technically surge or crash up to about 65% in a pulse.
- Expanded portfolio rows to show share count, average buy price, current sell price, current value, and live unrealized P/L.
- Added a detailed Stock Market Field Guide explaining pulses, LCN vs BAWSAQ, portfolio P/L, and trading strategy.
- Made purchased assets disappear from active listings immediately.
- Added live Airplanes and Boats asset markets with helicopters, private jets, airliners, small boats, cruisers, yachts, and superyachts.
- Moved cars, airplanes, and boats into validated JSON asset catalog files with stable IDs.

## V1.11.0 - 2026-06-29 12:00 PM CT - Admin Audit, Casino Tickets, Stocks, and Assets

### Admin
- Added bankroll removal and Casino Ticket grants to admin manual tools.
- Logged admin-created player records, bankroll grants/removals, manual XP/level changes, daily resets, linkage changes, imports, resets, and room failsafes to the System history tab.
- Updated bankroll grant history so player-facing Bank history says the money was granted by the Bank.
- Added self-registration support for Firebase accounts while keeping player profile claiming tied to admin-created player records.

### Casino Tickets and Dailies
- Added Casino Tickets that can be earned from play and occasional slot/blackjack win drops.
- Let players spend Casino Tickets for extra Lucky Wheel spins or extra Scratch-Offs when those rewards are on cooldown.
- Reworked Dailies into larger clickable reward cards for the daily challenge, Lucky Wheel, Scratch-Off, ticket balance, House Coin, Loaded Dice, Mini Vault, Card Draw, and Ticket Booth, added cooldown text to every claimed daily card, then removed the redundant bottom buttons.

### Bank, Stocks, and Assets
- Renamed Bank & Loans to Bank, removed old protected-bank wording, and added an investment snapshot for stocks, owned assets, and tickets.
- Added a 24-company active Stock Market with GTA-inspired LCN/BAWSAQ-style networks, 30-45 second live price pulses, bigger 8 AM-4 PM CT business-hour swings, sector/event movement, market headlines, portfolio tracking, cost basis, and unrealized gain/loss before selling.
- Added an Assets tab with Garage/Properties/Land/Airplanes/Boats categories, a daily 1 PM CT Garage refresh, real-world year/make/model vehicle listings sorted low-to-high, rare vehicle chance, owned assets, resale, and player-card asset viewing.
- Refined Garage cards to a no-image luxury listing design with smaller buy buttons and MSRP-only market pricing.
- Added Stock Market and Assets achievement sets.
- Redesigned the leaderboard into premium ranked cards with net-worth bars, lifetime/status stats, and stronger top-player presentation.
- Made the sidebar easier to live with now that the site has more tabs.

## V1.10.0 - 2026-06-17 08:54 PM CT - Poker Economy, Casino History, Achievements, and Banking

### Poker
- Rebuilt Hold'em around seat order for heads-up and 3-8 player tables.
- Separated bankroll from room chip stacks with configurable $465+ buy-ins, cash-outs, host settlement, recovery, and chip recommendations.
- Corrected legal betting actions, street resets, bet-versus-raise labels, blind rotation, action reopening, and hand audit history.
- Added clearer pot, current bet, current turn, amount owed, seat labels, legal-action controls, and mobile table layout.

### History
- Added structured casino activity events with category icons, amount badges, details, search, filters, and row limits.
- Kept backward-compatible rendering for legacy text logs and removed duplicate result logging from updated games.

### Achievements
- Kept the compact list while adding category filters, search, sorting, progress bars, completion summaries, rarity visuals, hidden achievements, and recent unlocks.
- Added rarity-colored unlock rewards and up to three showcased achievements per player on player cards and leaderboards.

### Bank & Loans
- Redesigned the banking center with bankroll, Bank, lifetime, debt, and net-worth summaries.
- Added deposit, withdrawal, transfer presets, wealth ranking, and recent loan activity.
- Restricted the Loan Center to the logged-in linked player for every account, including admin.

## V1.9.0 - 2026-06-17 08:48 PM CT - Hold'em Flow, Craps, and Version History

### Added
- Added a New Eden style markdown-driven Changelog page with expandable entries and pagination.
- Added solo Craps with pass line, don't pass, field, and hardway bets.
- Added ten Craps achievements.
- Added a new detailed All Players section above the existing leaderboard and old player list.
- Added activity history display controls so the history page defaults to 10 rows and can show more.

### Changed
- Reworked Lucky Wheel rewards so the wheel labels, reward pool, and arrow stop position are generated from the same reward list.
- Changed daily reset timing to 6:00 AM Central Time for dailies, wheel, and scratch-off rewards.
- Removed Achievements from the mobile bottom nav to reduce clutter.

### Poker
- Expanded Texas Hold'em rooms with preflop, flop, turn, river, and showdown phases.
- Added check, call, raise, and fold controls.
- Added hidden hole cards so players only see their own hand before showdown.
- Added blind rotation for heads-up and 3+ player games.
- Added automatic showdown hand evaluation and winner toast.

## V1.8.0 - 2026-06-16 08:48 PM CT - Dailies and Online Room Polish

### Added
- Added the Dailies tab with daily challenge, Lucky Wheel, and scratch-off controls.
- Added an animated Lucky Wheel modal.
- Added Blackjack room ready checks with per-player bets.
- Added basic Hold'em room dealing support.

### Changed
- Moved Export and Import into Admin.
- Updated mobile navigation with Bank and renamed Achievements.
- Updated slot bet presets per machine.

## V1.7.0 - 2026-06-16 01:10 AM CT - Banking and Casino Rewards

### Added
- Added bank deposits and withdrawals.
- Added bankroll transfers.
- Added Lucky Wheel, Daily Scratch-Off, daily challenge tracking, and extra slot machines.

### Changed
- Money rewards now pay bank debt before adding remaining bankroll.
