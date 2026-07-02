# Virtual Casino Changelog

## V1.4.4 - 2026-07-02 - Stock UI and Record Reset Hotfix

### Stocks
- Fixed stock card popovers painting over every market card by scoping top-row CSS to the sector wrapper and keeping info panels hidden unless the `(i)` icon is active.
- Moved the stock high/low reset into its own Admin Stock Record Tool next to the room failsafe tools.
- Added a stock record reset timestamp so old Firebase/local snapshots cannot resurrect inherited or bad historical highs/lows after an admin reset.
- Confirmed stock highs/lows are stored per company and updated from that company’s own price/previous price, not fund totals or market cap values.

### Admin / MOTD
- Prevented Admin MOTD title/body inputs from being overwritten by render/sync while Darren is actively editing them.
- Kept MOTD dismissal session-local so each player sees a published message until their own browser session dismisses it.

## V1.4.3 - 2026-07-02 - Firebase Persistence Emergency Patch

### Firebase
- Replaced whole-state cloud write skipping with a safer merge-before-write path so newer snapshots cannot erase protected local gameplay changes.
- Realtime sync now merges incoming cloud snapshots with local state instead of blindly applying or ignoring the entire app state.
- Added protection for player bankroll/bank balances, portfolios, fund holdings, gold bars, achievements, XP, chat messages, history, dailies, stock highs/lows, and limit orders.
- Added per-player update timestamps for money, banking, asset, stock, ticket, and XP changes to keep player financial snapshots atomic during sync.

### Stocks
- Fixed stock info popovers so they only open from the `(i)` info icon instead of the whole stock card.
- Added Sector Fund quantity input so players can buy or sell multiple fund units at once.
- Updated Sector Funds to support weighted ETF-style holdings from `data/stock-funds.json`.
- Changed dividends to pay on an hourly cycle, lengthened market phases, and slightly reduced random crash frequency per the new balance notes.
- Added an admin action to reset stock recorded highs/lows to current prices.

### Overview / Admin
- Added an editable Message of the Day banner on Overview with a three-minute per-session auto-dismiss.
- Added Admin controls to publish or delete the MOTD.

## V1.4.2 - 2026-07-02 - Stock Card Cleanup and Watchlist Hotfix

### Stocks
- Reduced stock card clutter by moving risk, market cap, dividend, moon/crash chance, and tags into a hover/click info popover.
- Shrunk the Watch button and kept only low/high ranges on the main card body.
- Added per-player watchlist timestamps and cloud merge protection so watched stocks do not reset after sync.
- Added Delete/Clear and Edit-load controls for limit orders.
- Tightened Limit Orders and Sector Funds side-panel alignment.
- Audited and tuned stock movement math to avoid double-volatility scaling while keeping rare spikes possible.

## V1.4.1 - 2026-07-02 - Loader Hotfix

### Hotfix
- Fixed the stock market phase initialization order so the app no longer gets stuck on the premium loader.
- Verified the local app boots past the loader with no browser console errors.

## V1.4.0 - 2026-07-02 - Chat Controls, Prestige Loop, Gold Bars, and Stock Traits

### Chat
- Added chat message delete controls restricted to the message owner.
- Added chat edit controls restricted to the current player's newest message only.
- Added an unread-message red dot on the collapsed Global Chat dock.
- Preserved edited chat metadata through the 72-hour chat pruning cycle.

### UI Polish
- Reworked the app loader with premium casino-floor wording, animated accents, and market-sync flavor text.
- Fixed a startup crash where market phases could be referenced before initialization.

### Progression
- Redesigned player XP into a Level 1-10 prestige loop with `totalXpEarned` migration for existing saves.
- Family level now loops from Level 1-10 and Family Prestige is derived from cumulative family lifetime XP.
- Updated XP rewards and admin manual level/star tools to keep current-cycle XP and lifetime XP synchronized.

### Performance
- Reduced unnecessary hidden-view rendering when opening Achievements and added a per-render achievement progress cache for faster filters.

### Bank and Gold Bars
- Added Gold Bars as a premium store-of-value currency on the Bank page.
- Gold Bars buy for $100,000 and sell for $90,000, with Bank history entries.
- Moved the Gold Bars controls into the lower Bank stack so the Banking Center layout no longer creates a large empty side panel.

### Stocks
- Added stock traits to `data/stocks.json`: dividend yield, crash chance, moon chance, risk tier, and tags.
- Added market capitalization tiers to all stock companies and wired those tiers into price movement, with a Total Listings summary card on the Stocks page.
- Added market phases, insider rumors, dividend payout cycles, and the Casino Financial Times newspaper panel.
- Added player stock watchlists with watched-stock filtering and watched stocks sorted first.
- Added Limit Orders for auto-buy and auto-sell rules that execute during stock pulses and log history.
- Added editable sector funds in `data/stock-funds.json`, including buy/sell support and portfolio value tracking.
- Upgraded `data/market-news.json` to weighted events with severity, phase metadata, exact sector names, and explicit movement ranges while preserving saved recorded highs/lows.
- Expanded the Stock Market Field Guide to cover market phases, market cap tiers, dividends, rumors, watchlists, limit orders, and sector funds.

### Firebase
- Added `firebase.rules.json` as the tracked source-of-truth rules file to publish in Firebase.

## V1.3.0 - 2026-07-02 - Chat, Achievement Validation, and Daily/Market Expansion

### Blackjack
- Tightened multiplayer blackjack responsiveness for smaller panes with compact in-table seats/cards and stronger overflow containment.
- Added the multiplayer blackjack bankroll/debt/ticket strip so the room view mirrors the solo blackjack player status better.

### Dailies and Tickets
- Restored Ticket Booth as a permanent daily card outside the rotating clickable pool.
- Ticket Booth now rolls 0-10 Casino Tickets every reset instead of being part of the five rotating activities.
- Added wheel/scratch ticket quality-of-life controls for using one more ticket or spending all available tickets without repeatedly closing modals.

### Chat
- Added a global public chat dock with expandable/collapsible desktop and mobile-friendly layouts.
- Chat messages show display name and timestamp, save with the app state, and are pruned after 72 hours.

### Achievements
- Added admin achievement validation for a selected player to backfill missed unlocks after manual bankroll/local-session changes.
- Expanded achievements with new wealth, stock market, asset, daily, and slot milestones.
- Updated achievement unlock storage/display to support per-player achievements while still tolerating legacy global unlocks.

### Stocks
- Moved market news into `data/market-news.json` with 40 editable event templates.
- Market news events now apply company, sector, and network impact multipliers during stock pulses.

### Admin
- Polished the Manual Level / XP admin panel and improved Account Linkage card containment for long account lists.
- Bumped cache versions for app and style refresh.

## V1.2.0 - 2026-07-01 - Blackjack Layout Fixes, Audio, and Share Transfers

### Blackjack
- Reworked multiplayer blackjack to mirror the solo blackjack layout more closely, with player actions below the table and the right rail reserved for stats, bet controls, and game messages.
- Tightened multiplayer blackjack table sizing so the side rail stays inside the page instead of forcing horizontal scrolling.
- Added synthesized card/shuffle audio hooks for solo and multiplayer blackjack deals, hits, splits, doubles, and dealer reveals.

### Slots and Audio
- Added lightweight synthesized slot audio for reel spins, regular wins, jackpots, and achievement unlocks without adding third-party audio files.

### Stocks
- Added Share Transfer to the stock side rail so players can send owned shares to another player without selling them.
- Share transfers preserve proportional cost basis for portfolio gain/loss tracking and log to Stocks history.
- Extended stock market business hours to 8:00 AM-6:00 PM Central.

### Admin
- Reworked Account Linkage cards so long email/account rows wrap cleanly instead of spilling into a horizontal-scroll strip.

## V1.11.4 - 2026-07-01 - Premium Slots, Farkle, and Daily Challenge Rotation

### Casino Games
- Redesigned all slot machines into a premium cabinet layout with a generated casino background, animated winning symbols, richer side stats, chip-style bet controls, and machine-specific history details.
- Added solo Farkle as a new online casino game with six-dice scoring, bankroll betting, result history, XP hooks, daily challenge progress, and Casino Vault loss tracking.
- Harmonized multiplayer blackjack's right-side stats, chip buttons, bet stepper, and player action controls with the solo blackjack UI.

### Stocks
- Added Aurelius Aerospace, CruzLux Beverages, and Synapse Robotics AI to the stock catalog.
- Added a single-row Stock Market filter bar for network and sector/category filtering.

### Dailies
- Added `data/daily-challenges.json` with a rotating three-challenge daily set, broader challenge types, and larger randomized completion rewards.
- Added a daily rotation timer banner so players can see when clickables and challenges refresh.

### Admin and History
- Added admin reset tools for Scratch-Offs, rotating daily clickables, and full daily reset.
- Polished Admin and History styling, added scroll containment for long admin player/linkage lists, and made the room failsafe module compact.
- Removed the old Export / Import admin module now that Firebase is the normal persistence path.

### Progression
- Moved family level thresholds into `data/family-levels.json` for easier future tuning.

## V1.11.3 - 2026-07-01 - Firebase Rollback Guard and JSON Catalogs

### Fixed
- Added an `updatedAt` guard to Firebase realtime sync so older cloud snapshots cannot overwrite newer local state after bank withdrawals, stock purchases, or other fresh transactions.
- Added a cloud-write guard so an older local write will not clobber a newer Firebase state.
- Added a missing achievement toast handler and wrapped achievement sweeps so achievement errors cannot interrupt saving.

### Data and Dailies
- Moved stock company definitions to `data/stocks.json` while preserving live recorded low/high prices from saved stock-market state.
- Moved achievement definitions to `data/achievements.json`.
- Expanded `data/dailies.json` to include rotating daily activities, Lucky Wheel rewards, and Scratch-Off rewards.
- Restored Ticket Booth as a guaranteed daily card and raised its possible reward to 1-10 Casino Tickets.

### Casino Vault
- Added a Casino Vault lifetime stat on the Bank page for money the house earns from player losses.
- Casino Vault now increases from blackjack, slots, craps, and future roulette losses, but ignores stocks, assets, bank movement, player transfers, loans, and local poker.

## V1.11.2 - 2026-06-30 - Multiplayer Blackjack, Dailies, and Performance Polish

### Changed
- Removed the old Poker Session and Poker Chip Counter panels from Local Sessions while keeping Poker XP and Pots in the newer local desk styling.
- Removed the Dashboard Overview loan panel so Recent Achievements and Recent Activity sit higher on the page.
- Migrated multiplayer blackjack into the premium blackjack table layout with the right-side table controls, action controls, and game message rail.
- Reduced blackjack deal timing and card compositing flicker during solo and multiplayer hands.
- Moved Dailies into a JSON-backed rotating catalog of 30 daily activities and raised the daily challenge reward to feel more worthwhile.
- Added a casino favicon and optimized large table/mobile art with WebP fallbacks to cut initial page weight.
- Included stock market low/high history in targeted Firebase room-settlement saves so recorded extremes are preserved across multiplayer writes.

## V1.11.1 - 2026-06-30 - Stock/Asset Polish and Money Audit Fixes

### Fixed
- Added fresh player lookups to delayed slot and blackjack settlements so animations cannot finish against a stale player object.
- Corrected `applyMoneyResult(..., { bankrollAlreadyAdjusted:true })` so it no longer changes bankroll a second time after the game settlement already did.
- Stopped admin Bankroll Grants from inflating lifetime P/L, and added an admin Lifetime P/L adjustment tool for cleanup cases like mistaken manual grants.

### Stocks and Assets
- Added a true one-second Stock Market countdown display so the Next Pulse timer no longer jumps in 10-second chunks.
- Reworked stock buy/sell persistence to avoid the full-page save/render path so portfolio updates land much faster after clicking Buy or Sell.
- Added recorded low/high prices to every stock card.
- Moved Market News out of the top stat tiles into a wide banner so the summary cards stay compact.
- Increased stock market pulse volatility so LCN/BAWSAQ changes feel more alive while still respecting business-hours vs after-hours behavior.
- Added rare market catalyst swings so headline stocks can technically surge or crash up to about 65% in a pulse.
- Expanded portfolio rows to show share count, average buy price, current sell price, current value, and live unrealized P/L.
- Added more Stock Market achievements for share count, whale portfolio value, unrealized gains, and big profitable exits.
- Added Stocks and Assets filters/categories to History for new market and asset events.
- Added a detailed Stock Market Field Guide explaining pulses, LCN vs BAWSAQ, portfolio P/L, and trading strategy.
- Made purchased assets disappear from active listings immediately.
- Added live Airplanes and Boats asset markets with helicopters, private jets, airliners, small boats, cruisers, yachts, and superyachts.
- Moved cars, airplanes, and boats into validated JSON asset catalog files with stable IDs.
- Added JSON-backed Properties and Gemstones asset markets, with Land renamed to Gemstones.
- Redesigned the player asset viewer into a bragging-rights collection vault with summary stats.

### Blackjack
- Added a generated premium blackjack table background and redesigned the solo blackjack table surface, card placement, and action buttons around the new casino-table concept.
- Replaced the solo blackjack preset dropdown with casino chip buttons, a custom bet stepper, a right-side stats/bet/message rail, more realistic card faces, and a non-flashing deal animation.
- Moved the solo dealer zone higher on the felt, added visible bet chip stacks under player hands, and arranged multiplayer blackjack seats for two- and three-player tables.

### Local Sessions
- Added a Local Session Settlement Desk for Poker, Blackjack, and custom local games with Low/Mid/High/Elite/Custom stake modes.
- Added per-player settlement rows, chip-count totals, blackjack chaining fields, review-before-submit bankroll previews, poker imbalance warnings with override, and clear/reset controls.
- Added a standalone quick chip calculator based on Sarge's phone concept, upgraded to share the same stake-mode chip values.
- Local settlements now apply only net profit/loss to virtual bankrolls and track local buy-ins, winnings, losses, net, and game-specific stats.

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
