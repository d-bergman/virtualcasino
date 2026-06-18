# Virtual Casino Changelog

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
- Redesigned the banking center with bankroll, Safe Bank, lifetime, debt, and net-worth summaries.
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
- Added safe bank deposits and withdrawals.
- Added bankroll transfers.
- Added Lucky Wheel, Daily Scratch-Off, daily challenge tracking, and extra slot machines.

### Changed
- Money rewards now pay bank debt before adding remaining bankroll.
