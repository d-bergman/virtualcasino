const firebaseConfig = {
  apiKey: "AIzaSyBlflHY3vbaXqzV359wZSQJrE5sJNfkaVw",
  authDomain: "virtual-casino-9154f.firebaseapp.com",
  databaseURL: "https://virtual-casino-9154f-default-rtdb.firebaseio.com",
  projectId: "virtual-casino-9154f",
  storageBucket: "virtual-casino-9154f.firebasestorage.app",
  messagingSenderId: "892722597425",
  appId: "1:892722597425:web:ec3452fda211a542ea0f10"
};

    const firebaseVersion = "12.13.0";
    const firebaseDisabled = new URLSearchParams(window.location.search).has("nofirebase");
    const databasePath = "virtualCasino/familyCardRpg";
    const localKey = "virtualCasinoFamilyCardRpgV1";
    const attachedSaveText = "eyJwbGF5ZXJzIjpbeyJuYW1lIjoiRGFycmVuIiwieHAiOjM0MCwic3RhcnMiOjAsImNoaXBzIjp7IndoaXRlIjoyMywicmVkIjozMSwiYmx1ZSI6MjcsImdyZWVuIjoxOCwiYmxhY2siOjEwfSwibGlmZXRpbWUiOjc3MCwic2Vzc2lvblN0YXJ0IjoxODk4LCJiYW5rcm9sbCI6NzcwLCJzZXNzaW9uQnV5SW4iOjE4OTh9LHsibmFtZSI6IkJodW1pa2EiLCJ4cCI6MCwic3RhcnMiOjAsImNoaXBzIjp7IndoaXRlIjowLCJyZWQiOjAsImJsdWUiOjAsImdyZWVuIjowLCJibGFjayI6MH0sImxpZmV0aW1lIjotMzgwLCJzZXNzaW9uU3RhcnQiOjAsImJhbmtyb2xsIjotMzgwLCJzZXNzaW9uQnV5SW4iOjB9LHsibmFtZSI6Ik1haXRyaSIsInhwIjozMDUsInN0YXJzIjowLCJjaGlwcyI6eyJ3aGl0ZSI6MjIsInJlZCI6MTksImJsdWUiOjMsImdyZWVuIjo2LCJibGFjayI6MH0sImxpZmV0aW1lIjotMzkwLCJzZXNzaW9uU3RhcnQiOjI5NywiYmFua3JvbGwiOi0zOTAsInNlc3Npb25CdXlJbiI6Mjk3fV0sImJpZ2dlc3RQb3QiOnsicGxheWVyIjoiIiwidmFsdWUiOjB9LCJsb2ciOlsiUG9rZXIgc2Vzc2lvbiBlbmRlZC4gU2Vzc2lvbiByZXN1bHRzIGFkZGVkIHRvIGxpZmV0aW1lLiIsIkJodW1pa2EgY2hpcCBjb3VudCBzYXZlZDogJDAiLCJEYXJyZW4gY2hpcCBjb3VudCBzYXZlZDogJDE4OTgiLCJNYWl0cmkgY2hpcCBjb3VudCBzYXZlZDogJDI5NyIsIk1haXRyaSArMjAgWFAg4oCUIFBva2VyOiBUd28gUGFpciIsIkRhcnJlbiArMTAgWFAg4oCUIFBva2VyOiBPbmUgUGFpciIsIk1haXRyaSArNTAgWFAg4oCUIFBva2VyOiBTdHJhaWdodCIsIk1haXRyaSArMTAwIFhQIOKAlCBQb2tlcjogRnVsbCBIb3VzZSIsIkRhcnJlbiArMzUgWFAg4oCUIFBva2VyOiBUaHJlZSBvZiBhIEtpbmQiLCJNYWl0cmkgKzUwIFhQIOKAlCBQb2tlcjogU3RyYWlnaHQiXSwicG9rZXJTZXNzaW9uQWN0aXZlIjpmYWxzZSwidmVyc2lvbiI6NH0=";

    const pokerHandXP = {"High Card":5,"One Pair":10,"Two Pair":20,"Three of a Kind":35,"Straight":50,"Flush":75,"Full House":100,"Four of a Kind":200,"Straight Flush":500,"Royal Flush":1000};
    const blackjackXP = {"Win Hand":10,"Natural Blackjack":50,"Five Card Charlie":50,"Win Session":100,"Biggest Blackjack Win":50};
    const unoXP = {"Win Round":50,"Win Session":200,"Successful Draw 4 Challenge":100,"Uno Denied":50,"Mercy Elimination":100};
    const levels = [{level:1,xp:0},{level:2,xp:100},{level:3,xp:250},{level:4,xp:450},{level:5,xp:700},{level:6,xp:1000},{level:7,xp:1400},{level:8,xp:1900},{level:9,xp:2500},{level:10,xp:3200},{level:11,xp:4100},{level:12,xp:5200},{level:13,xp:6500}];
    const standard = {white:10,red:10,blue:8,green:5,black:2};
    const blank = {white:0,red:0,blue:0,green:0,black:0};
    const colors = ["gold", "blue", "purple"];
    const icons = ["&#9824;", "&#9670;", "&#9829;", "&#9827;"];
    const ACHIEVEMENT_DEFINITIONS = [
      ["poker-first-hand","First Hand","Play your first poker hand","Common","Poker","poker"],
      ["poker-first-victory","First Victory","Win your first poker hand","Common","Poker","poker"],
      ["poker-pocket-pair","Pocket Pair","Receive a pocket pair","Common","Poker","poker"],
      ["poker-showdown-survivor","Showdown Survivor","Win at showdown","Common","Poker","poker"],
      ["poker-bluff-master","Bluff Master","Win a hand without showdown","Uncommon","Poker","poker"],
      ["poker-two-pair-club","Two Pair Club","Win with Two Pair","Common","Poker","poker"],
      ["poker-trip-trouble","Trip Trouble","Win with Three of a Kind","Common","Poker","poker"],
      ["poker-straight-shooter","Straight Shooter","Win with a Straight","Uncommon","Poker","poker"],
      ["poker-flush-fever","Flush Fever","Win with a Flush","Uncommon","Poker","poker"],
      ["poker-full-house-resident","Full House Resident","Win with a Full House","Rare","Poker","poker"],
      ["poker-quads","Quads!","Get Four of a Kind","Epic","Poker","poker"],
      ["poker-steel-wheel","Steel Wheel","A-2-3-4-5 Straight","Rare","Poker","poker"],
      ["poker-straight-flush","Straight Flush","Get a Straight Flush","Legendary","Poker","poker"],
      ["poker-royalty","Royalty","Get a Royal Flush","Mythic","Poker","poker"],
      ["poker-unbelievable","Unbelievable","Get two Straight Flushes","Mythic","Poker","poker"],
      ["poker-hot-streak","Hot Streak","Win 3 hands in a row","Uncommon","Poker","poker"],
      ["poker-heater","Heater","Win 5 hands in a row","Rare","Poker","poker"],
      ["poker-untouchable","Untouchable","Win 10 hands in a row","Legendary","Poker","poker"],
      ["poker-comeback-kid","Comeback Kid","Recover from under $100 bankroll","Rare","Poker","poker"],
      ["poker-chip-leader","Chip Leader","Reach #1 in chips","Uncommon","Poker","poker"],
      ["poker-big-pot-hunter","Big Pot Hunter","Win a $250+ pot","Common","Poker","poker"],
      ["poker-whale-catcher","Whale Catcher","Win a $500+ pot","Rare","Poker","poker"],
      ["poker-high-roller-pot","High Roller","Win a $1,000+ pot","Epic","Poker","poker"],
      ["poker-mountain-mover","Mountain Mover","Win a $2,000+ pot","Legendary","Poker","poker"],
      ["poker-biggest-pot-ever","Biggest Pot Ever","Hold the all-time largest pot record","Legendary","Poker","poker"],
      ["blackjack-lucky-21","Lucky 21","Hit exactly 21","Common","Blackjack","blackjack"],
      ["blackjack-natural-talent","Natural Talent","Get a Natural Blackjack","Rare","Blackjack","blackjack"],
      ["blackjack-first-win","First Win","Win first blackjack hand","Common","Blackjack","blackjack"],
      ["blackjack-dealer-down","Dealer Down","Beat dealer 5 times","Common","Blackjack","blackjack"],
      ["blackjack-dealer-slayer","Dealer Slayer","Beat dealer 25 times","Rare","Blackjack","blackjack"],
      ["blackjack-five-card-charlie","Five Card Charlie","Win with 5 cards","Rare","Blackjack","blackjack"],
      ["blackjack-six-card-miracle","Six Card Miracle","Win with 6 cards","Epic","Blackjack","blackjack"],
      ["blackjack-risk-taker","Risk Taker","Hit on 16 and survive","Uncommon","Blackjack","blackjack"],
      ["blackjack-double-trouble","Double Trouble","Win after doubling down","Rare","Blackjack","blackjack"],
      ["blackjack-perfect-pair","Perfect Pair","Win with matching starting cards","Rare","Blackjack","blackjack"],
      ["blackjack-champion","Blackjack Champion","Win a blackjack session","Rare","Blackjack","blackjack"],
      ["blackjack-lucky-streak","Lucky Streak","Win 5 blackjack hands in a row","Rare","Blackjack","blackjack"],
      ["blackjack-casino-legend","Casino Legend","Win 10 blackjack hands in a row","Legendary","Blackjack","blackjack"],
      ["uno-first-win","First Uno Win","Win first Uno round","Common","Uno","uno"],
      ["uno-session-champion","Session Champion","Win an Uno session","Common","Uno","uno"],
      ["uno-card-shark","Card Shark","Win 10 Uno rounds","Uncommon","Uno","uno"],
      ["uno-veteran","Uno Veteran","Win 50 Uno rounds","Rare","Uno","uno"],
      ["uno-legend","Uno Legend","Win 100 Uno rounds","Legendary","Uno","uno"],
      ["uno-denied","Uno Denied","Stop someone from going out","Uncommon","Uno","uno"],
      ["uno-party-crasher","Party Crasher","Stop 5 Uno attempts","Rare","Uno","uno"],
      ["uno-rule-lawyer","Rule Lawyer","Successfully challenge a Draw Four","Rare","Uno","uno"],
      ["uno-gotcha","Gotcha!","Successfully challenge 10 Draw Fours","Epic","Uno","uno"],
      ["uno-reverse-psychology","Reverse Psychology","Reverse a game-winning move","Epic","Uno","uno"],
      ["uno-executioner","Executioner","Eliminate a player","Uncommon","Uno","uno"],
      ["uno-merciless","Merciless","Eliminate 5 players","Rare","Uno","uno"],
      ["uno-no-survivors","No Survivors","Eliminate all opponents in one session","Legendary","Uno","uno"],
      ["level-2","Level 2","Reach Level 2","Common","Progression","progression"],
      ["level-5","Level 5","Reach Level 5","Rare","Progression","progression"],
      ["level-10","Level 10","Reach Level 10","Legendary","Progression","progression"],
      ["first-prestige","First Prestige","Earn first Prestige Star","Legendary","Progression","progression"],
      ["double-prestige","Double Prestige","Earn two Prestige Stars","Mythic","Progression","progression"],
      ["triple-prestige","Triple Prestige","Earn three Prestige Stars","Mythic","Progression","progression"],
      ["xp-1000","1,000 XP Earned","Earn 1,000 XP","Common","Progression","progression"],
      ["xp-5000","5,000 XP Earned","Earn 5,000 XP","Rare","Progression","progression"],
      ["xp-10000","10,000 XP Earned","Earn 10,000 XP","Epic","Progression","progression"],
      ["xp-25000","25,000 XP Earned","Earn 25,000 XP","Legendary","Progression","progression"],
      ["xp-50000","50,000 XP Earned","Earn 50,000 XP","Mythic","Progression","progression"],
      ["activity-dedicated-player","Dedicated Player","Play 10 sessions","Common","Activity","activity"],
      ["activity-regular","Regular","Play 25 sessions","Uncommon","Activity","activity"],
      ["activity-addicted","Addicted","Play 50 sessions","Rare","Activity","activity"],
      ["activity-casino-resident","Casino Resident","Play 100 sessions","Legendary","Activity","activity"],
      ["wealth-first-fortune","First Fortune","Reach $500 bankroll","Common","Wealth","wealth"],
      ["wealth-four-digits","Four Digits","Reach $1,000 bankroll","Rare","Wealth","wealth"],
      ["wealth-high-roller","High Roller","Reach $2,500 bankroll","Epic","Wealth","wealth"],
      ["wealth-tycoon","Tycoon","Reach $5,000 bankroll","Legendary","Wealth","wealth"],
      ["wealth-casino-king","Casino King","Reach $10,000 bankroll","Mythic","Wealth","wealth"],
      ["debt-borrower","Borrower","Take first loan","Common","Debt","debt"],
      ["debt-deep","Deep in Debt","Owe $500+","Rare","Debt","debt"],
      ["debt-recovery","Financial Recovery","Pay off all debt","Rare","Debt","debt"],
      ["debt-destroyer","Debt Destroyer","Repay $1,000+ total debt","Epic","Debt","debt"],
      ["debt-brink","Back From The Brink","Recover from negative lifetime profit/loss","Legendary","Debt","debt"],
      ["rivalry-crown-holder","Crown Holder","Hold #1 rank for 10 sessions","Rare","Family Rivalry","rivalry"],
      ["rivalry-queens-return","Queen's Return","Win a session after busting","Epic","Family Rivalry","rivalry"],
      ["rivalry-underdog","Underdog","Win a session while ranked last","Rare","Family Rivalry","rivalry"],
      ["rivalry-family-champion","Family Champion","Win Poker, Blackjack, and Uno","Legendary","Family Rivalry","rivalry"],
      ["rivalry-triple-threat","Triple Threat","Earn XP in Poker, Blackjack, and Uno on the same day","Epic","Family Rivalry","rivalry"],
      ["rivalry-marathon-night","Marathon Night","Play all three games in a single session","Epic","Family Rivalry","rivalry"],
      ["rivalry-house-favorite","House Favorite","Reach #1 in total XP","Rare","Family Rivalry","rivalry"],
      ["rivalry-legend","Legend of the Casino","Unlock 50 achievements","Mythic","Family Rivalry","rivalry"],
      ["hidden-royal-road","The Royal Road","Get a Royal Flush","Mythic","Hidden","hidden",true],
      ["hidden-impossible-odds","Impossible Odds","Recover from zero chips and finish positive","Mythic","Hidden","hidden",true],
      ["hidden-phoenix","Phoenix","Bust, borrow money, and finish profitable","Mythic","Hidden","hidden",true],
      ["hidden-collector","The Collector","Unlock every achievement category","Mythic","Hidden","hidden",true],
      ["hidden-lucky-devil","Lucky Devil","Win three different games in a row","Mythic","Hidden","hidden",true],
      ["hidden-family-legend","Family Legend","Reach Prestige *****","Mythic","Hidden","hidden",true]
    ].map(([id, name, requirement, rarity, category, game, hidden = false]) => ({id, name, requirement, rarity, category, game, hidden}));

    function createEmptyBlackjackGame() {
      return {
        deck: [],
        playerHand: [],
        dealerHand: [],
        bet: 0,
        phase: "idle",
        message: "Place a bet and deal a hand.",
        revealDealer: false
      };
    }

    const defaultState = normalize(decodeSave(attachedSaveText));
    let state = normalize(JSON.parse(localStorage.getItem(localKey) || "null") || structuredClone(defaultState));
    let activeView = "overview";
    let activeGame = "poker";
    let skipNextCloudWrite = false;
    let cloudWriteTimer = null;
    let localTestSignedIn = false;
    let activeAchievementTab = "unlocked";
    let achievementCheckTimer = null;
    let activeOnlineGame = "";
    let blackjackMode = "solo";
    let soloBlackjack = createEmptyBlackjackGame();
    let localProfile = JSON.parse(localStorage.getItem("virtualCasinoProfileV1") || "null") || {
      email: "local@test",
      displayName: "Champion",
      playerName: "Darren"
    };

    const firebaseState = {
      ready: false,
      user: null,
      profile: null,
      modules: null,
      db: null,
      auth: null,
      unsubscribe: null
    };

    const $ = (id) => document.getElementById(id);
    const els = {
      appLoader: $("appLoader"),
      signInForm: $("signInForm"),
      signInEmail: $("signInEmail"),
      signInPassword: $("signInPassword"),
      signInMessage: $("signInMessage"),
      toast: $("toast"),
      profileDialog: $("profileDialog"),
      profileEmail: $("profileEmail"),
      profileDisplayName: $("profileDisplayName"),
      profilePlayerName: $("profilePlayerName"),
      profilePassword: $("profilePassword"),
      profileMessage: $("profileMessage"),
      blackjackRoomDialog: $("blackjackRoomDialog"),
      roomName: $("roomName"),
      roomRole: $("roomRole"),
      roomMessage: $("roomMessage")
    };

    function decodeSave(text) {
      const json = decodeURIComponent(escape(atob(text.trim())));
      return JSON.parse(json);
    }

    function normalize(input) {
      const data = input && typeof input === "object" ? structuredClone(input) : {};
      if (!Array.isArray(data.players)) data.players = [];
      if (!data.players.length) {
        data.players = [
          {name:"Darren",xp:340,stars:0,chips:{white:23,red:31,blue:27,green:18,black:10},lifetime:770,bankDebt:0,sessionBuyIn:1898},
          {name:"Maitri",xp:305,stars:0,chips:{white:22,red:19,blue:3,green:6,black:0},lifetime:-390,bankDebt:0,sessionBuyIn:297},
          {name:"Bhumika",xp:0,stars:0,chips:{...blank},lifetime:-380,bankDebt:0,sessionBuyIn:0}
        ];
      }
      data.players = data.players.map((player) => {
        const chips = {...blank, ...(player.chips || {})};
        const lifetime = Number.isFinite(Number(player.lifetime)) ? Number(player.lifetime) : Number(player.bankroll || 0);
        return {
          name: String(player.name || "Player").trim(),
          xp: Number(player.xp || 0),
          stars: Number(player.stars || 0),
          chips,
          lifetime,
          bankDebt: Number(player.bankDebt || 0),
          sessionBuyIn: Number(player.sessionBuyIn || player.sessionStart || 0),
          gamesPlayed: Number(player.gamesPlayed || 0)
        };
      });
      data.version = 7;
      data.updatedAt = data.updatedAt || Date.now();
      data.pokerSessionActive = Boolean(data.pokerSessionActive);
      data.biggestPot = data.biggestPot || {player:"", value:0};
      data.log = Array.isArray(data.log) ? data.log.slice(0, 30) : [];
      data.unlockedAchievements = data.unlockedAchievements && !Array.isArray(data.unlockedAchievements) ? data.unlockedAchievements : {};
      if (Array.isArray(data.achievements)) {
        data.achievements.forEach((item) => {
          const found = ACHIEVEMENT_DEFINITIONS.find((def) => item.message && item.message.includes(def.name));
          if (found && !data.unlockedAchievements[found.id]) {
            data.unlockedAchievements[found.id] = {at: item.at || Date.now(), player: item.player || "", source: "legacy"};
          }
        });
      }
      data.achievements = [];
      data.counters = data.counters || {};
      data.counters.sessionsPlayed = Number(data.counters.sessionsPlayed || 0);
      data.counters.loansTaken = Number(data.counters.loansTaken || 0);
      data.counters.debtRepaid = Number(data.counters.debtRepaid || 0);
      data.counters.pokerHandsWon = Number(data.counters.pokerHandsWon || 0);
      data.counters.blackjackWins = Number(data.counters.blackjackWins || 0);
      data.counters.unoWins = Number(data.counters.unoWins || 0);
      data.counters.gamesWithXpToday = data.counters.gamesWithXpToday || {};
      data.onlineRooms = data.onlineRooms && typeof data.onlineRooms === "object" && !Array.isArray(data.onlineRooms) ? data.onlineRooms : {};
      data.gameStats = data.gameStats || {
        poker: {played: 42, wins: 0, profit: 235, biggest: 1250},
        blackjack: {played: 18, wins: 3, profit: 120, biggest: 0},
        uno: {played: 15, wins: 8, profit: 60, biggest: 0}
      };
      return data;
    }

    function stackValue(chips) {
      return Number(chips.white || 0) + Number(chips.red || 0) * 5 + Number(chips.blue || 0) * 10 + Number(chips.green || 0) * 25 + Number(chips.black || 0) * 100;
    }

    function money(value) {
      const n = Number(value || 0);
      return `${n < 0 ? "-" : ""}$${Math.abs(n).toLocaleString()}`;
    }

    function signedMoney(value) {
      const n = Number(value || 0);
      return `${n >= 0 ? "+" : "-"}$${Math.abs(n).toLocaleString()}`;
    }

    function chipText(c) {
      return `${c.white || 0}W / ${c.red || 0}R / ${c.blue || 0}B / ${c.green || 0}G / ${c.black || 0}Black`;
    }

    function chipSetup(amount) {
      let n = Math.max(0, Math.floor(Number(amount) || 0));
      const c = {...blank};
      c.black = Math.floor(n / 100); n %= 100;
      c.green = Math.floor(n / 25); n %= 25;
      c.blue = Math.floor(n / 10); n %= 10;
      c.red = Math.floor(n / 5); n %= 5;
      c.white = n;
      return c;
    }

    function addChips(a, b) {
      return {
        white: Number(a.white || 0) + Number(b.white || 0),
        red: Number(a.red || 0) + Number(b.red || 0),
        blue: Number(a.blue || 0) + Number(b.blue || 0),
        green: Number(a.green || 0) + Number(b.green || 0),
        black: Number(a.black || 0) + Number(b.black || 0)
      };
    }

    function levelFromXP(xp) {
      let current = levels[0];
      levels.forEach((row) => { if (xp >= row.xp) current = row; });
      return current.level;
    }

    function levelXP(level) {
      return levels.find((row) => row.level === Number(level))?.xp || 0;
    }

    function nextLevelXP(xp) {
      return levels.find((row) => xp < row.xp)?.xp || 7600;
    }

    function levelProgress(xp) {
      const level = levelFromXP(xp);
      const prev = levelXP(level);
      const next = nextLevelXP(xp);
      return Math.max(0, Math.min(100, ((xp - prev) / Math.max(1, next - prev)) * 100));
    }

    function familyXP() {
      return state.players.reduce((sum, player) => sum + Number(player.xp || 0), 0);
    }

    function rankedPlayers() {
      return [...state.players].sort((a, b) => stackValue(b.chips) - stackValue(a.chips));
    }

    function playerByName(name) {
      return state.players.find((player) => player.name === name);
    }

    function currentProfile() {
      if (firebaseDisabled) return localProfile;
      return firebaseState.profile || {
        email: firebaseState.user?.email || "",
        displayName: firebaseState.user?.displayName || firebaseState.user?.email?.split("@")[0] || "Player",
        playerName: ""
      };
    }

    function currentPlayer() {
      const profile = currentProfile();
      if (profile.playerName) {
        const linked = playerByName(profile.playerName);
        if (linked) return linked;
      }
      return null;
    }

    function log(message) {
      state.log.unshift(message);
      state.log = state.log.slice(0, 30);
    }

    function unlockAchievement(id, player = "", source = "tracker") {
      const linkedPlayer = currentPlayer();
      if (!linkedPlayer) return false;
      const definition = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id);
      if (!definition || state.unlockedAchievements[id]) return false;
      const owner = player || linkedPlayer.name;
      if (owner !== linkedPlayer.name) return false;
      state.unlockedAchievements[id] = {at: Date.now(), player: owner, source};
      log(`Achievement unlocked: ${definition.name} by ${owner}`);
      toast(`Achievement unlocked: ${definition.name}`);
      return true;
    }

    function save({cloud = true} = {}) {
      state.updatedAt = Date.now();
      state = normalize(state);
      evaluateAchievementUnlocks();
      localStorage.setItem(localKey, JSON.stringify(state));
      render();
      if (cloud) queueCloudWrite();
    }

    function runAchievementSweep({cloud = true, showNoUnlock = false} = {}) {
      state = normalize(state);
      const unlockedCount = evaluateAchievementUnlocks();
      if (unlockedCount > 0) {
        state.updatedAt = Date.now();
        localStorage.setItem(localKey, JSON.stringify(state));
        render();
        if (cloud) queueCloudWrite();
      } else if (showNoUnlock) {
        toast(currentPlayer() ? "Profile linked. No new achievements yet." : "Link a player before achievements can unlock.");
      }
      return unlockedCount;
    }

    function startAchievementChecker() {
      clearInterval(achievementCheckTimer);
      achievementCheckTimer = setInterval(() => {
        if (isSignedIn() && currentPlayer()) runAchievementSweep({cloud: true});
      }, 15000);
      if (isSignedIn() && currentPlayer()) runAchievementSweep({cloud: true});
    }

    function queueCloudWrite() {
      if (skipNextCloudWrite || firebaseDisabled || !firebaseState.ready || !firebaseState.user) return;
      clearTimeout(cloudWriteTimer);
      cloudWriteTimer = setTimeout(async () => {
        try {
          const {dbRef, set, serverTimestamp} = firebaseState.modules;
          await set(dbRef(firebaseState.db, `${databasePath}/state`), {
            ...state,
            updatedAtServer: serverTimestamp(),
            updatedByUid: firebaseState.user.uid,
            updatedByEmail: firebaseState.user.email || ""
          });
          setSync("Live sync saved", true);
        } catch (error) {
          console.warn(error);
          setSync("Live sync failed", false);
          toast("Firebase save failed. Check database rules and config.");
        }
      }, 300);
    }

    function setSync(text, on) {
      $("syncText").textContent = text;
      $("syncDot").classList.toggle("on", Boolean(on));
    }

    function fillSelect(id) {
      const element = $(id);
      if (!element) return;
      const current = element.value;
      element.innerHTML = state.players.map((p) => `<option value="${escapeAttr(p.name)}">${escapeHtml(p.name)}</option>`).join("");
      if (current && state.players.some((p) => p.name === current)) element.value = current;
    }

    function fillStaticSelects() {
      $("handType").innerHTML = Object.entries(pokerHandXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("blackjackEvent").innerHTML = Object.entries(blackjackXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("unoEvent").innerHTML = Object.entries(unoXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("manualLevel").innerHTML = levels.slice(0, 10).map((row) => `<option value="${row.level}">Level ${row.level}</option>`).join("");
    }

    function render() {
      document.body.classList.toggle("auth-locked", !isSignedIn() && !document.body.classList.contains("auth-checking"));
      document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
      document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${activeView}View`));
      document.querySelectorAll("[data-game]").forEach((button) => button.classList.toggle("active", button.dataset.game === activeGame));
      document.querySelectorAll("[data-achievement-tab]").forEach((button) => button.classList.toggle("active", button.dataset.achievementTab === activeAchievementTab));
      document.querySelectorAll("[data-blackjack-mode]").forEach((button) => button.classList.toggle("active", button.dataset.blackjackMode === blackjackMode));
      ["borrowPlayer","bankBorrowPlayer","manualPlayer","buyinPlayer","chipPlayer","handPlayer","potPlayer","blackjackPlayer","unoPlayer","blackjackMoneyPlayer"].forEach(fillSelect);
      fillSelect("profilePlayerName");

      const ranked = rankedPlayers();
      const champion = ranked[0] || state.players[0];
      $("championName").innerHTML = `${escapeHtml(champion?.name || "Champion")} ${champion ? playerSymbol(champion.name) : ""}`;
      const fxp = familyXP();
      const fl = levelFromXP(fxp);
      $("familyLevel").textContent = fl;
      $("familyXpLabel").textContent = `${fxp.toLocaleString()} / ${nextLevelXP(fxp).toLocaleString()} XP`;
      $("familyXpFill").style.width = `${levelProgress(fxp)}%`;
      $("familyPrestige").textContent = state.players.reduce((sum, p) => sum + Number(p.stars || 0), 0) || 1;

      $("crewGrid").innerHTML = ranked.map(renderPlayerCard).join("");
      $("leaderboard").innerHTML = ranked.map((p, i) => renderListRow(`#${i + 1}`, p.name, `${money(stackValue(p.chips))} bankroll`, signedMoney(p.lifetime))).join("");
      $("debtBoard").innerHTML = ranked.map((p) => renderListRow("&#9878;", p.name, `Debt ${money(p.bankDebt)}`, `Lifetime ${signedMoney(p.lifetime)}`)).join("");
      $("bankStatus").innerHTML = [
        renderListRow("&#9878;", "Total Loans Outstanding", "", money(state.players.reduce((sum, p) => sum + p.bankDebt, 0))),
        renderListRow("&#9888;", "Players In Debt", "", state.players.filter((p) => p.bankDebt > 0).length)
      ].join("");
      $("recentActivity").innerHTML = (state.log.length ? state.log : ["No activity yet."]).slice(0, 5).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      $("historyBoard").innerHTML = (state.log.length ? state.log : ["No session history yet."]).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      const unlocked = unlockedAchievementRows();
      $("recentAchievements").innerHTML = unlocked.length
        ? unlocked.slice(0, 3).map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No achievements unlocked yet", "Complete tracked milestones to unlock achievements.", "");
      renderAchievementBoards();
      renderCurrentPlayerStats();
      $("gameGrid").innerHTML = ["poker","blackjack","uno"].map(renderGameCard).join("");
      document.querySelectorAll("[data-game-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.gamePanel === activeGame));
      $("blackjackOnlineArea").hidden = activeOnlineGame !== "blackjack";
      $("blackjackSoloPanel").classList.toggle("active", blackjackMode === "solo");
      $("blackjackSoloPanel").hidden = blackjackMode !== "solo";
      $("blackjackMultiPanel").classList.toggle("active", blackjackMode === "multi");
      $("blackjackMultiPanel").hidden = blackjackMode !== "multi";
      renderBlackjackTable();
      renderBlackjackRooms();
      renderSessionOverview();
    }

    function renderPlayerCard(player, index) {
      const rank = rankedPlayers().findIndex((p) => p.name === player.name) + 1;
      const level = levelFromXP(player.xp);
      const next = nextLevelXP(player.xp);
      const color = colors[(rank - 1) % colors.length];
      const lifetimeClass = player.lifetime >= 0 ? "money" : "loss";
      const symbol = playerSymbol(player.name);
      return `
        <article class="player-card ${color}">
          <div class="rank-badge">#${rank}</div>
          <div class="player-icon" aria-hidden="true">${symbol}</div>
          <div>
            <div class="player-name"><span>${escapeHtml(player.name)} ${rank === 1 ? "&#9819;" : ""}</span><span>${symbol}</span></div>
            <div class="stats-list">
              <div class="stat-line"><span>Current Bankroll</span><strong class="money">${money(stackValue(player.chips))}</strong></div>
              <div class="stat-line"><span>Lifetime P/L</span><strong class="${lifetimeClass}">${signedMoney(player.lifetime)}</strong></div>
              <div class="stat-line"><span>Bank Debt</span><strong>${money(player.bankDebt)}</strong></div>
            </div>
            <div class="xp-row">
              <span>Level ${level}</span>
              <div class="progress-track"><span class="progress-fill" style="width:${levelProgress(player.xp)}%"></span></div>
              <span>&#9733; ${player.stars}</span>
            </div>
            <div class="chip-text">Achievements: ${achievementCompletionText(player.name)}</div>
            <div class="chip-text" title="${escapeAttr(chipText(player.chips))}">Chips: ${escapeHtml(chipText(player.chips))}</div>
          </div>
        </article>`;
    }

    function unlockedAchievementRows() {
      return Object.entries(state.unlockedAchievements || {})
        .map(([id, unlock]) => ({definition: ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id), unlock}))
        .filter((item) => item.definition)
        .sort((a, b) => Number(b.unlock.at || 0) - Number(a.unlock.at || 0));
    }

    function renderAchievementRow(definition, unlock) {
      const isUnlocked = Boolean(unlock);
      const concealed = shouldConcealAchievement(definition, isUnlocked);
      const title = concealed ? `${definition.rarity} Mystery` : definition.name;
      const requirement = concealed ? "Requirement hidden for surprise." : definition.requirement;
      const meta = isUnlocked ? `${definition.rarity} - Unlocked ${timeAgo(unlock.at || Date.now())}` : `${definition.rarity} - ${definition.category}`;
      const value = isUnlocked ? (unlock.player || "Unlocked") : achievementProgress(definition);
      return renderListRow(rarityIcon(definition.rarity), title, requirement ? `${meta} - ${requirement}` : meta, value);
    }

    function renderAchievementBoards() {
      const unlocked = unlockedAchievementRows();
      const unlockedIds = new Set(unlocked.map((item) => item.definition.id));
      const locked = ACHIEVEMENT_DEFINITIONS.filter((definition) => !unlockedIds.has(definition.id) && !shouldConcealAchievement(definition, false));
      $("achievementUnlockedBoard").hidden = activeAchievementTab !== "unlocked";
      $("achievementLockedBoard").hidden = activeAchievementTab !== "locked";
      $("achievementUnlockedBoard").innerHTML = unlocked.length
        ? unlocked.map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No achievements unlocked yet", "Earn XP, record pots, issue loans, and play sessions to unlock achievements.", "");
      $("achievementLockedBoard").innerHTML = locked.length
        ? locked.map((definition) => renderAchievementRow(definition, null)).join("")
        : renderListRow("&#9733;", "Everything unlocked", "The family has cleared the board.", "");
    }

    function shouldConcealAchievement(definition, isUnlocked) {
      if (isUnlocked) return false;
      return definition.hidden || ["Rare", "Epic", "Legendary", "Mythic"].includes(definition.rarity);
    }

    function renderCurrentPlayerStats() {
      const player = currentPlayer();
      if (!player) {
        $("currentPlayerStats").innerHTML = renderListRow("&#9881;", "No linked player yet", "Open Profile Settings and link this login to a player.", "");
        return;
      }
      $("currentPlayerStats").innerHTML = [
        renderListRow(playerSymbol(player.name), player.name, "Linked to this login", money(stackValue(player.chips))),
        renderListRow("&#8597;", "Lifetime Profit / Loss", "All tracked play", signedMoney(player.lifetime)),
        renderListRow("&#9878;", "Bank Debt", "Outstanding loans", money(player.bankDebt))
      ].join("");
    }

    function achievementCompletionText(playerName) {
      const total = ACHIEVEMENT_DEFINITIONS.length;
      const unlockedForPlayer = Object.values(state.unlockedAchievements || {}).filter((item) => !item.player || item.player === playerName).length;
      return `${unlockedForPlayer}/${total}`;
    }

    function achievementProgress(definition) {
      const totalXp = familyXP();
      const maxBankroll = Math.max(0, ...state.players.map((player) => stackValue(player.chips)));
      const maxDebt = Math.max(0, ...state.players.map((player) => player.bankDebt || 0));
      const progressMap = {
        "xp-1000": `${Math.min(totalXp, 1000)} / 1,000 XP`,
        "xp-5000": `${Math.min(totalXp, 5000)} / 5,000 XP`,
        "xp-10000": `${Math.min(totalXp, 10000)} / 10,000 XP`,
        "xp-25000": `${Math.min(totalXp, 25000)} / 25,000 XP`,
        "xp-50000": `${Math.min(totalXp, 50000)} / 50,000 XP`,
        "wealth-first-fortune": `${money(Math.min(maxBankroll, 500))} / $500`,
        "wealth-four-digits": `${money(Math.min(maxBankroll, 1000))} / $1,000`,
        "wealth-high-roller": `${money(Math.min(maxBankroll, 2500))} / $2,500`,
        "wealth-tycoon": `${money(Math.min(maxBankroll, 5000))} / $5,000`,
        "wealth-casino-king": `${money(Math.min(maxBankroll, 10000))} / $10,000`,
        "debt-deep": `${money(Math.min(maxDebt, 500))} / $500`,
        "activity-dedicated-player": `${Math.min(state.counters.sessionsPlayed, 10)} / 10 sessions`,
        "activity-regular": `${Math.min(state.counters.sessionsPlayed, 25)} / 25 sessions`,
        "activity-addicted": `${Math.min(state.counters.sessionsPlayed, 50)} / 50 sessions`,
        "activity-casino-resident": `${Math.min(state.counters.sessionsPlayed, 100)} / 100 sessions`
      };
      return progressMap[definition.id] || "Locked";
    }

    function rarityIcon(rarity) {
      return {
        Common: "C",
        Uncommon: "U",
        Rare: "R",
        Epic: "E",
        Legendary: "L",
        Mythic: "M"
      }[rarity] || "Star";
    }

    function renderGameCard(game) {
      const meta = {
        poker: ["Poker", "PLAY POKER", "#0b5a28", "rgba(16, 190, 82, 0.18)", "Biggest Pot", money(state.gameStats.poker.biggest || 1250)],
        blackjack: ["Blackjack", "PLAY BLACKJACK", "#0d457c", "rgba(26, 132, 255, 0.18)", "Blackjacks", state.gameStats.blackjack.wins || 3],
        uno: ["Uno", "PLAY UNO", "#68128c", "rgba(202, 53, 255, 0.18)", "Wins", state.gameStats.uno.wins || 8]
      }[game];
      return `
        <article class="game-card" style="--game-line:${meta[2]};--game-glow:${meta[3]};">
          <h3>${meta[0]}</h3>
          <div class="game-art" aria-hidden="true">
            <span class="big-card one">A&#9824;</span>
            <span class="big-card two ${game === "uno" ? "red" : ""}">${game === "uno" ? "+4" : "K&#9824;"}</span>
            <span class="big-card three">${game === "uno" ? "7" : "J&#9824;"}</span>
            <span class="chip-stack left"></span>
            <span class="chip-stack right"></span>
          </div>
          <button class="primary-btn" style="width:100%;" type="button" data-game="${game}">${meta[1]}</button>
          <div class="game-stats" style="margin-top:12px;">
            <div><span>Session Stats</span><strong>${meta[0]}</strong></div>
            <div><span>Games Played</span><strong>${state.gameStats[game].played || 0}</strong></div>
            <div><span>${meta[4]}</span><strong>${meta[5]}</strong></div>
            <div><span>Session Profit</span><strong class="${state.gameStats[game].profit >= 0 ? "money" : "loss"}">${signedMoney(state.gameStats[game].profit || 0)}</strong></div>
          </div>
        </article>`;
    }

    function renderBlackjackTable() {
      $("dealerHand").innerHTML = soloBlackjack.dealerHand.length
        ? soloBlackjack.dealerHand.map((card, index) => renderPlayingCard(card, index === 1 && !soloBlackjack.revealDealer && soloBlackjack.phase === "playing")).join("")
        : `<div class="sync-pill">No dealer hand</div>`;
      $("playerHand").innerHTML = soloBlackjack.playerHand.length
        ? soloBlackjack.playerHand.map((card) => renderPlayingCard(card)).join("")
        : `<div class="sync-pill">No player hand</div>`;
      $("dealerTotal").textContent = soloBlackjack.dealerHand.length
        ? (soloBlackjack.revealDealer || soloBlackjack.phase !== "playing" ? handValue(soloBlackjack.dealerHand) : handValue([soloBlackjack.dealerHand[0]]))
        : "0";
      $("playerTotal").textContent = soloBlackjack.playerHand.length ? handValue(soloBlackjack.playerHand) : "0";
      $("blackjackStatus").textContent = soloBlackjack.message;
    }

    function renderPlayingCard(card, hidden = false) {
      if (hidden) return `<span class="playing-card hidden-card">?</span>`;
      const red = card.suit === "♥" || card.suit === "♦";
      return `<span class="playing-card ${red ? "red" : ""}">${escapeHtml(card.rank)}${escapeHtml(card.suit)}</span>`;
    }

    function renderBlackjackRooms() {
      const rooms = Object.values(state.onlineRooms || {})
        .filter((room) => room.game === "blackjack" && room.status === "open")
        .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
      $("blackjackRooms").innerHTML = rooms.length
        ? rooms.map((room) => renderRoomRow(room)).join("")
        : renderListRow("&#127922;", "No open blackjack rooms", "Start a room so someone else can join.", "");
    }

    function renderRoomRow(room) {
      const seats = Object.values(room.seats || {}).map((seat) => `${seat.name} (${seat.role})`).join(", ") || "No seats yet";
      return `<div class="list-row"><span class="medal">&#9827;</span><div><strong>${escapeHtml(room.name)}</strong><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(seats)}</div></div><button class="mini-btn" type="button" data-room-id="${escapeAttr(room.id)}" data-action="join-blackjack-room">Join</button></div>`;
    }

    function createDeck() {
      const suits = ["♠", "♥", "♦", "♣"];
      const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      return suits.flatMap((suit) => ranks.map((rank) => ({rank, suit}))).sort(() => Math.random() - 0.5);
    }

    function drawCard(game) {
      if (!game.deck.length) game.deck = createDeck();
      return game.deck.pop();
    }

    function handValue(hand) {
      let total = 0;
      let aces = 0;
      hand.forEach((card) => {
        if (card.rank === "A") {
          total += 11;
          aces += 1;
        } else if (["K", "Q", "J"].includes(card.rank)) {
          total += 10;
        } else {
          total += Number(card.rank);
        }
      });
      while (total > 21 && aces > 0) {
        total -= 10;
        aces -= 1;
      }
      return total;
    }

    function selectedBet() {
      const preset = Number($("soloBetPreset").value || 0);
      const manual = Number($("soloBetAmount").value || 0);
      return Math.max(0, preset || manual);
    }

    function startSoloBlackjack() {
      const player = currentPlayer();
      const bet = selectedBet();
      if (!player) return toast("Link your profile to a player before playing blackjack.");
      if (bet <= 0) return toast("Enter a bet or choose a standard bet.");
      if (stackValue(player.chips) < bet) return toast("Not enough bankroll for that bet.");
      soloBlackjack = createEmptyBlackjackGame();
      soloBlackjack.deck = createDeck();
      soloBlackjack.bet = bet;
      soloBlackjack.phase = "playing";
      soloBlackjack.playerHand = [drawCard(soloBlackjack), drawCard(soloBlackjack)];
      soloBlackjack.dealerHand = [drawCard(soloBlackjack), drawCard(soloBlackjack)];
      soloBlackjack.revealDealer = false;
      const playerTotal = handValue(soloBlackjack.playerHand);
      const dealerTotal = handValue(soloBlackjack.dealerHand);
      if (playerTotal === 21 || dealerTotal === 21) {
        settleSoloBlackjack();
      } else {
        soloBlackjack.message = `Bet ${money(bet)}. Hit or stand.`;
      }
      render();
    }

    function hitSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      soloBlackjack.playerHand.push(drawCard(soloBlackjack));
      if (handValue(soloBlackjack.playerHand) > 21) settleSoloBlackjack();
      else soloBlackjack.message = "Card dealt. Hit or stand.";
      render();
    }

    function standSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      while (handValue(soloBlackjack.dealerHand) < 17) {
        soloBlackjack.dealerHand.push(drawCard(soloBlackjack));
      }
      settleSoloBlackjack();
      render();
    }

    function settleSoloBlackjack() {
      const player = currentPlayer();
      if (!player) return;
      soloBlackjack.phase = "done";
      soloBlackjack.revealDealer = true;
      const playerTotal = handValue(soloBlackjack.playerHand);
      const dealerTotal = handValue(soloBlackjack.dealerHand);
      let delta = 0;
      let message = "";
      if (playerTotal > 21) {
        delta = -soloBlackjack.bet;
        message = `Bust. You lost ${money(soloBlackjack.bet)}.`;
      } else if (dealerTotal > 21 || playerTotal > dealerTotal) {
        delta = soloBlackjack.bet;
        message = `You won ${money(soloBlackjack.bet)}.`;
        addXP(player.name, blackjackXP["Win Hand"], "Blackjack: Win Hand", {persist: false});
        if (soloBlackjack.playerHand.length >= 5 && playerTotal <= 21) {
          addXP(player.name, blackjackXP["Five Card Charlie"], "Blackjack: Five Card Charlie", {persist: false, toast: false});
        }
      } else if (playerTotal === dealerTotal) {
        message = "Push. Bet returned.";
      } else {
        delta = -soloBlackjack.bet;
        message = `Dealer wins. You lost ${money(soloBlackjack.bet)}.`;
      }
      adjustPlayerBankroll(player, delta);
      if (delta !== 0) applyMoneyResult(player, delta, "solo blackjack");
      state.gameStats.blackjack.played = Number(state.gameStats.blackjack.played || 0) + 1;
      if (delta > 0) state.gameStats.blackjack.wins = Number(state.gameStats.blackjack.wins || 0) + 1;
      soloBlackjack.message = `${message} Dealer ${dealerTotal}, you ${playerTotal}.`;
      log(`${player.name} played solo blackjack: ${message}`);
      save();
    }

    function currentProfileKey() {
      if (firebaseState.user?.uid) return firebaseState.user.uid;
      const profile = currentProfile();
      const keyBase = profile.playerName || profile.displayName || profile.email || "local";
      return `local-${String(keyBase).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "player"}`;
    }

    function currentSeat(role = "player") {
      const profile = currentProfile();
      const player = currentPlayer();
      return {
        name: profile.displayName || player?.name || "Player",
        playerName: player?.name || profile.playerName || "",
        role,
        joinedAt: Date.now()
      };
    }

    function openBlackjackRoomDialog() {
      els.roomName.value = `${currentProfile().displayName || currentPlayer()?.name || "Family"} Blackjack`;
      els.roomRole.value = "player";
      els.roomMessage.textContent = "Create a live room for family blackjack.";
      els.blackjackRoomDialog.showModal();
    }

    function closeBlackjackRoomDialog() {
      els.blackjackRoomDialog.close();
    }

    function createBlackjackRoom() {
      if (!currentPlayer()) return toast("Link your profile to a player before creating a room.");
      const name = els.roomName.value.trim() || "Family Blackjack";
      const id = `blackjack-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      state.onlineRooms[id] = {
        id,
        game: "blackjack",
        name,
        status: "open",
        createdAt: Date.now(),
        seats: {
          [currentProfileKey()]: currentSeat(els.roomRole.value)
        }
      };
      log(`${currentSeat().name} opened blackjack room ${name}.`);
      closeBlackjackRoomDialog();
      blackjackMode = "multi";
      activeOnlineGame = "blackjack";
      activeView = "online";
      save();
      toast(`Room created: ${name}`);
    }

    function joinBlackjackRoom(roomId) {
      if (!currentPlayer()) return toast("Link your profile to a player before joining a room.");
      const room = state.onlineRooms[roomId];
      if (!room || room.status !== "open") return toast("That room is no longer open.");
      const occupiedDealer = Object.values(room.seats || {}).some((seat) => seat.role === "dealer");
      const preferredRole = occupiedDealer ? "player" : "dealer";
      room.seats = room.seats || {};
      room.seats[currentProfileKey()] = currentSeat(preferredRole);
      log(`${currentSeat().name} joined blackjack room ${room.name}.`);
      save();
      toast(`Joined ${room.name} as ${preferredRole}.`);
    }

    function adjustPlayerBankroll(player, delta) {
      const total = Math.max(0, stackValue(player.chips) + Number(delta || 0));
      player.chips = chipSetup(total);
    }

    function renderSessionOverview() {
      const totalProfit = state.players.reduce((sum, p) => sum + Number(p.lifetime || 0), 0);
      const totalGames = Object.values(state.gameStats).reduce((sum, game) => sum + Number(game.played || 0), 0);
      const biggest = Math.max(state.biggestPot.value || 0, state.gameStats.poker.biggest || 0);
      $("sessionOverview").innerHTML = [
        renderListRow("Up", "Total Profit", "All games", signedMoney(totalProfit)),
        renderListRow("Cards", "Games Played", "All sessions", totalGames),
        renderListRow("Cup", "Biggest Win", "Recorded pot", money(biggest)),
        renderListRow("Star", "Total XP Earned", "Family", `+${familyXP()} XP`)
      ].join("");
    }

    function renderListRow(icon, title, sub, value) {
      return `<div class="list-row"><span class="medal ${medalClass(icon)}">${medalMarkup(icon)}</span><div><strong>${escapeHtml(String(title))}</strong><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(String(sub || ""))}</div></div><strong>${escapeHtml(String(value || ""))}</strong></div>`;
    }

    function medalClass(icon) {
      const value = String(icon);
      if (/♠|9824|Spade|Poker|Cards|Cup/.test(value)) return "medal-spade";
      if (/♦|9670|Diamond|Bank|Vault|Scale|9878/.test(value)) return "medal-diamond";
      if (/♥|9829|Heart|Star|9733|Trophy|Up/.test(value)) return "medal-heart";
      if (/♣|9827|Club|Blackjack|Users|Dice/.test(value)) return "medal-club";
      return "medal-crown";
    }

    function medalMarkup(icon) {
      const value = String(icon);
      const named = {
        Up: "↟",
        Cards: "A♠",
        Cup: "♛",
        Star: "★",
        Bank: "♜",
        Vault: "$",
        Scale: "⚖",
        Users: "♚",
        Dice: "⚂",
        Trophy: "♕"
      };
      return named[value] || value;
    }

    function playerSymbol(name) {
      if (/darren/i.test(name)) return "&#9824;";
      if (/maitri/i.test(name)) return "&#9670;";
      if (/bhumika/i.test(name)) return "&#9829;";
      return icons[Math.abs(hashCode(name)) % icons.length];
    }

    function hashCode(value) {
      return String(value).split("").reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0);
    }

    function addXP(name, amount, reason, options = {}) {
      const player = playerByName(name);
      if (!player) return;
      player.xp += Number(amount);
      trackGameXp(reason);
      unlockByXpReason(player, reason);
      while (player.xp >= 7600) {
        player.xp -= 7600;
        player.stars += 1;
        unlockAchievement("first-prestige", player.name);
      }
      log(`${player.name} +${amount} XP - ${reason}`);
      if (options.persist === false) {
        if (options.toast !== false) toast(`${player.name} gained ${amount} XP.`);
        return;
      }
      save();
      if (options.toast !== false) toast(`${player.name} gained ${amount} XP.`);
    }

    function trackGameXp(reason) {
      const today = new Date().toISOString().slice(0, 10);
      state.counters.gamesWithXpToday[today] = state.counters.gamesWithXpToday[today] || {};
      if (reason.startsWith("Poker:")) state.counters.gamesWithXpToday[today].poker = true;
      if (reason.startsWith("Blackjack:")) state.counters.gamesWithXpToday[today].blackjack = true;
      if (reason.startsWith("Uno:")) state.counters.gamesWithXpToday[today].uno = true;
    }

    function unlockByXpReason(player, reason) {
      const event = reason.replace(/^(Poker|Blackjack|Uno):\s*/, "");
      if (reason.startsWith("Poker:")) {
        state.counters.pokerHandsWon += 1;
        unlockAchievement("poker-first-hand", player.name);
        unlockAchievement("poker-first-victory", player.name);
        const pokerMap = {
          "Two Pair": "poker-two-pair-club",
          "Three of a Kind": "poker-trip-trouble",
          "Straight": "poker-straight-shooter",
          "Flush": "poker-flush-fever",
          "Full House": "poker-full-house-resident",
          "Four of a Kind": "poker-quads",
          "Straight Flush": "poker-straight-flush",
          "Royal Flush": "poker-royalty"
        };
        if (pokerMap[event]) unlockAchievement(pokerMap[event], player.name);
        if (event === "Royal Flush") unlockAchievement("hidden-royal-road", player.name);
        if (event === "Straight Flush" && state.counters.pokerHandsWon >= 2) unlockAchievement("poker-unbelievable", player.name);
      }
      if (reason.startsWith("Blackjack:")) {
        if (/Win Hand|Natural Blackjack|Five Card Charlie|Win Session|Biggest Blackjack Win/.test(event)) {
          state.counters.blackjackWins += 1;
          unlockAchievement("blackjack-first-win", player.name);
        }
        if (event === "Natural Blackjack") {
          unlockAchievement("blackjack-lucky-21", player.name);
          unlockAchievement("blackjack-natural-talent", player.name);
        }
        if (event === "Five Card Charlie") unlockAchievement("blackjack-five-card-charlie", player.name);
        if (event === "Win Session") unlockAchievement("blackjack-champion", player.name);
      }
      if (reason.startsWith("Uno:")) {
        if (event === "Win Round" || event === "Win Session") {
          state.counters.unoWins += 1;
          unlockAchievement("uno-first-win", player.name);
        }
        if (event === "Win Session") unlockAchievement("uno-session-champion", player.name);
        if (event === "Uno Denied") unlockAchievement("uno-denied", player.name);
        if (event === "Successful Draw 4 Challenge") unlockAchievement("uno-rule-lawyer", player.name);
        if (event === "Mercy Elimination") unlockAchievement("uno-executioner", player.name);
      }
    }

    function evaluateAchievementUnlocks() {
      const linkedPlayer = currentPlayer();
      if (!linkedPlayer) return 0;
      let unlockedCount = 0;
      const unlock = (id, player = linkedPlayer.name) => {
        if (unlockAchievement(id, player)) unlockedCount += 1;
      };
      const totalXp = familyXP();
      const maxStars = Math.max(0, ...state.players.map((player) => Number(player.stars || 0)));
      const topByChips = rankedPlayers()[0];
      const topByXp = [...state.players].sort((a, b) => b.xp - a.xp)[0];
      const level = levelFromXP(linkedPlayer.xp);
      const bankroll = stackValue(linkedPlayer.chips);
      if (level >= 2) unlock("level-2");
      if (level >= 5) unlock("level-5");
      if (level >= 10) unlock("level-10");
      if (linkedPlayer.stars >= 1) unlock("first-prestige");
      if (linkedPlayer.stars >= 2) unlock("double-prestige");
      if (linkedPlayer.stars >= 3) unlock("triple-prestige");
      if (linkedPlayer.stars >= 5) unlock("hidden-family-legend");
      if (bankroll >= 500) unlock("wealth-first-fortune");
      if (bankroll >= 1000) unlock("wealth-four-digits");
      if (bankroll >= 2500) unlock("wealth-high-roller");
      if (bankroll >= 5000) unlock("wealth-tycoon");
      if (bankroll >= 10000) unlock("wealth-casino-king");
      if (linkedPlayer.bankDebt >= 500) unlock("debt-deep");
      if (linkedPlayer.bankDebt === 0 && state.counters.loansTaken > 0) unlock("debt-recovery");
      if (linkedPlayer.lifetime >= 0) unlock("debt-brink");
      if (topByChips?.name === linkedPlayer.name) unlock("poker-chip-leader");
      if (topByXp?.name === linkedPlayer.name) unlock("rivalry-house-favorite");
      if (totalXp >= 1000) unlock("xp-1000");
      if (totalXp >= 5000) unlock("xp-5000");
      if (totalXp >= 10000) unlock("xp-10000");
      if (totalXp >= 25000) unlock("xp-25000");
      if (totalXp >= 50000) unlock("xp-50000");
      if (state.counters.sessionsPlayed >= 10) unlock("activity-dedicated-player");
      if (state.counters.sessionsPlayed >= 25) unlock("activity-regular");
      if (state.counters.sessionsPlayed >= 50) unlock("activity-addicted");
      if (state.counters.sessionsPlayed >= 100) unlock("activity-casino-resident");
      if (state.counters.debtRepaid >= 1000) unlock("debt-destroyer");
      if (state.counters.blackjackWins >= 5) unlock("blackjack-dealer-down");
      if (state.counters.blackjackWins >= 25) unlock("blackjack-dealer-slayer");
      if (state.counters.unoWins >= 10) unlock("uno-card-shark");
      if (state.counters.unoWins >= 50) unlock("uno-veteran");
      if (state.counters.unoWins >= 100) unlock("uno-legend");
      if (maxStars >= 1) unlock("first-prestige");
      if (unlockedAchievementRows().length >= 50) unlock("rivalry-legend");
      const today = new Date().toISOString().slice(0, 10);
      const todayGames = state.counters.gamesWithXpToday[today] || {};
      if (todayGames.poker && todayGames.blackjack && todayGames.uno) unlock("rivalry-triple-threat");
      return unlockedCount;
    }

    function applyMoneyResult(player, amount, reason) {
      const value = Number(amount || 0);
      if (value > 0) {
        const debtPay = Math.min(player.bankDebt, value);
        player.bankDebt -= debtPay;
        state.counters.debtRepaid += debtPay;
        const remaining = value - debtPay;
        player.lifetime += remaining;
        log(`${player.name} ${reason}: +$${value}. Paid bank $${debtPay}. Lifetime gained $${remaining}.`);
      } else if (value < 0) {
        player.lifetime += value;
        log(`${player.name} ${reason}: -$${Math.abs(value)}.`);
      } else {
        log(`${player.name} ${reason}: $0.`);
      }
    }

    function handleAction(action, target = null) {
      if (action === "open-profile") {
        openProfileDialog();
        return;
      }
      if (action === "close-profile") {
        closeProfileDialog();
        return;
      }
      if (action === "save-profile") {
        saveProfileSettings();
        return;
      }
      if (action === "sign-out") {
        closeProfileDialog();
        signOutUser();
        return;
      }
      if (action === "open-online-blackjack") {
        activeView = "online";
        activeOnlineGame = "blackjack";
        blackjackMode = "solo";
        render();
        setTimeout(() => $("blackjackOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "solo-blackjack-deal") {
        startSoloBlackjack();
        return;
      }
      if (action === "solo-blackjack-hit") {
        hitSoloBlackjack();
        return;
      }
      if (action === "solo-blackjack-stand") {
        standSoloBlackjack();
        return;
      }
      if (action === "solo-blackjack-reset") {
        soloBlackjack = createEmptyBlackjackGame();
        render();
        toast("Blackjack table cleared.");
        return;
      }
      if (action === "open-blackjack-room-modal") {
        openBlackjackRoomDialog();
        return;
      }
      if (action === "close-blackjack-room-modal") {
        closeBlackjackRoomDialog();
        return;
      }
      if (action === "create-blackjack-room") {
        createBlackjackRoom();
        return;
      }
      if (action === "refresh-blackjack-rooms") {
        renderBlackjackRooms();
        toast("Open rooms refreshed.");
        return;
      }
      if (action === "join-blackjack-room") {
        joinBlackjackRoom(target?.dataset.roomId || "");
        return;
      }
      if (action === "borrow") {
        const player = playerByName($("borrowPlayer").value);
        const amount = Number($("borrowAmount").value || 0);
        if (!player || amount <= 0) return toast("Enter a loan amount.");
        const chips = chipSetup(amount);
        player.bankDebt += amount;
        player.chips = addChips(player.chips, chips);
        state.counters.loansTaken += 1;
        unlockAchievement("debt-borrower", player.name);
        log(`${player.name} borrowed $${amount} from the bank.`);
        save();
        toast(`${player.name} borrowed ${money(amount)}. Chips added: ${chipText(chips)}.`);
      }
      if (action === "bank-borrow") {
        const player = playerByName($("bankBorrowPlayer").value);
        const amount = Number($("bankBorrowAmount").value || 0);
        if (!player || amount <= 0) return toast("Enter a loan amount.");
        const chips = chipSetup(amount);
        player.bankDebt += amount;
        player.chips = addChips(player.chips, chips);
        state.counters.loansTaken += 1;
        unlockAchievement("debt-borrower", player.name);
        log(`${player.name} borrowed $${amount} from the bank.`);
        save();
        toast(`${player.name} borrowed ${money(amount)}. Chips added: ${chipText(chips)}.`);
      }
      if (action === "add-player") {
        const name = $("newPlayerName").value.trim();
        if (!name) return toast("Enter a player name.");
        if (state.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) return toast("That player already exists.");
        state.players.push({name, xp:0, stars:0, chips:{...blank}, lifetime:0, bankDebt:0, sessionBuyIn:0, gamesPlayed:0});
        $("newPlayerName").value = "";
        log(`${name} joined the casino.`);
        save();
      }
      if (action === "manual-xp") addXP($("manualPlayer").value, Number($("manualXP").value || 0), "Manual catch-up adjustment");
      if (action === "manual-level") {
        const player = playerByName($("manualPlayer").value);
        if (!player) return;
        player.xp = levelXP(Number($("manualLevel").value));
        player.stars = Math.max(0, Number($("manualStars").value || 0));
        log(`${player.name} manually set to Level ${$("manualLevel").value} with ${player.stars} star(s).`);
        save();
      }
      if (action === "new-session") {
        state.players.forEach((p) => { p.sessionBuyIn = 0; p.chips = {...blank}; });
        state.pokerSessionActive = true;
        state.biggestPot = {player:"", value:0};
        state.counters.sessionsPlayed += 1;
        log("New poker session started. Players now need to buy in.");
        save();
      }
      if (action === "end-session") {
        state.players.forEach((p) => { p.lifetime += stackValue(p.chips); p.sessionBuyIn = 0; });
        state.pokerSessionActive = false;
        log("Poker session ended. Current stacks added to lifetime profit/loss.");
        save();
      }
      if (action === "standard-buyin") applyBuyIn($("buyinPlayer").value, 465, {...standard});
      if (action === "custom-buyin") {
        const amount = Number($("buyinAmount").value || 0);
        if (amount <= 0) return toast("Enter a buy-in amount.");
        applyBuyIn($("buyinPlayer").value, amount, chipSetup(amount));
      }
      if (action === "save-chips") {
        const player = playerByName($("chipPlayer").value);
        if (!player) return;
        player.chips = {white:Number($("w").value || 0), red:Number($("r").value || 0), blue:Number($("b").value || 0), green:Number($("g").value || 0), black:Number($("k").value || 0)};
        ["w","r","b","g","k"].forEach((id) => $(id).value = "");
        log(`${player.name} chip count saved: ${money(stackValue(player.chips))}`);
        save();
      }
      if (action === "poker-xp") addXP($("handPlayer").value, pokerHandXP[$("handType").value], `Poker: ${$("handType").value}`);
      if (action === "blackjack-xp") addXP($("blackjackPlayer").value, blackjackXP[$("blackjackEvent").value], `Blackjack: ${$("blackjackEvent").value}`);
      if (action === "uno-xp") addXP($("unoPlayer").value, unoXP[$("unoEvent").value], `Uno: ${$("unoEvent").value}`);
      if (action === "bonus") {
        addXP($("handPlayer").value, 100, "Poker Tournament Winner");
        unlockAchievement("poker-first-victory", $("handPlayer").value);
      }
      if (action === "record-pot") {
        const player = $("potPlayer").value;
        const value = Number($("potValue").value || 0);
        if (value <= 0) return toast("Enter a pot value.");
        if (value > Number(state.biggestPot.value || 0)) {
          state.biggestPot = {player, value};
          unlockAchievement("poker-biggest-pot-ever", player);
        }
        if (value >= 250) unlockAchievement("poker-big-pot-hunter", player);
        if (value >= 500) unlockAchievement("poker-whale-catcher", player);
        if (value >= 1000) unlockAchievement("poker-high-roller-pot", player);
        if (value >= 2000) unlockAchievement("poker-mountain-mover", player);
        $("potValue").value = "";
        log(`${player} won a poker pot worth $${value}.`);
        save();
      }
      if (action === "blackjack-money") {
        const player = playerByName($("blackjackMoneyPlayer").value);
        if (!player) return;
        applyMoneyResult(player, Number($("blackjackNetAmount").value || 0), "blackjack result");
        $("blackjackNetAmount").value = "";
        save();
      }
      if (action === "export") {
        $("saveText").value = btoa(unescape(encodeURIComponent(JSON.stringify(state))));
        toast("Save text exported.");
      }
      if (action === "import") {
        try {
          state = normalize(decodeSave($("saveText").value));
          log("Imported save text.");
          save();
          toast("Import complete.");
        } catch (error) {
          toast("Import failed. Check the save text.");
        }
      }
      if (action === "seed-save") {
        state = normalize(decodeSave(attachedSaveText));
        log("Loaded attached Canada save.");
        save();
      }
      if (action === "reset") {
        state = structuredClone(defaultState);
        log("Tracker reset to attached Canada save.");
        save();
      }
    }

    function applyBuyIn(name, amount, chips) {
      const player = playerByName(name);
      if (!player) return;
      player.lifetime -= Number(amount);
      player.sessionBuyIn += Number(amount);
      player.chips = addChips(player.chips, chips);
      state.pokerSessionActive = true;
      $("chipRecommendation").textContent = `${player.name} buy-in ${money(amount)}. Assigned chips: ${chipText(chips)}.`;
      log(`${player.name} bought in for $${amount}.`);
      save();
    }

    function setView(view) {
      activeView = view;
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    function openProfileDialog() {
      const profile = currentProfile();
      fillSelect("profilePlayerName");
      els.profileEmail.value = profile.email || firebaseState.user?.email || "local@test";
      els.profileDisplayName.value = profile.displayName || "";
      els.profilePlayerName.value = playerByName(profile.playerName) ? profile.playerName : currentPlayer()?.name || "";
      els.profilePassword.value = "";
      els.profileMessage.textContent = "Link this login to the player record used for bankroll and achievements.";
      els.profileDialog.showModal();
    }

    function closeProfileDialog() {
      els.profileDialog.close();
    }

    async function saveProfileSettings() {
      const displayName = els.profileDisplayName.value.trim() || els.profilePlayerName.value || "Player";
      const playerName = els.profilePlayerName.value;
      const newPassword = els.profilePassword.value;
      if (firebaseDisabled) {
        localProfile = {email: "local@test", displayName, playerName};
        localStorage.setItem("virtualCasinoProfileV1", JSON.stringify(localProfile));
        els.profileMessage.textContent = "Profile saved for local test mode.";
        toast("Profile saved.");
        render();
        runAchievementSweep({cloud: false, showNoUnlock: true});
        closeProfileDialog();
        return;
      }
      if (!firebaseState.ready || !firebaseState.user) {
        els.profileMessage.textContent = "Sign in before saving profile settings.";
        return;
      }
      try {
        const {dbRef, update, updateProfile, updatePassword, serverTimestamp} = firebaseState.modules;
        await updateProfile(firebaseState.user, {displayName});
        if (newPassword) await updatePassword(firebaseState.user, newPassword);
        firebaseState.profile = {
          ...(firebaseState.profile || {}),
          email: firebaseState.user.email || "",
          displayName,
          playerName
        };
        await update(dbRef(firebaseState.db, `${databasePath}/users/${firebaseState.user.uid}`), {
          email: firebaseState.user.email || "",
          displayName,
          playerName,
          updatedAt: serverTimestamp()
        });
        els.profilePassword.value = "";
        els.profileMessage.textContent = "Profile saved.";
        toast("Profile saved.");
        render();
        runAchievementSweep({cloud: true, showNoUnlock: true});
        closeProfileDialog();
      } catch (error) {
        console.warn(error);
        els.profileMessage.textContent = profileErrorMessage(error);
      }
    }

    function isSignedIn() {
      return firebaseDisabled ? localTestSignedIn : Boolean(firebaseState.user);
    }

    function hideAppLoader() {
      els.appLoader.classList.add("is-hidden");
      setTimeout(() => els.appLoader.remove(), 540);
    }

    function toast(message) {
      els.toast.textContent = message;
      els.toast.classList.add("show");
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => els.toast.classList.remove("show"), 3200);
    }

    function firebaseConfigured() {
      return firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("PASTE_");
    }

    async function initFirebase() {
      if (firebaseDisabled) {
        document.body.classList.remove("auth-checking");
        document.body.classList.add("auth-locked");
        els.signInMessage.textContent = "Test mode: use password neweden.";
        setSync("Local test mode", false);
        render();
        hideAppLoader();
        return;
      }

      if (!firebaseConfigured()) {
        document.body.classList.remove("auth-checking");
        document.body.classList.add("auth-locked");
        els.signInMessage.textContent = "Paste your Firebase web config in js/app.js first.";
        setSync("Firebase config needed", false);
        render();
        hideAppLoader();
        return;
      }

      try {
        setSync("Connecting", false);
        const [appModule, authModule, databaseModule] = await Promise.all([
          import(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-app.js`),
          import(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-auth.js`),
          import(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-database.js`)
        ]);
        firebaseState.modules = {
          initializeApp: appModule.initializeApp,
          getAuth: authModule.getAuth,
          onAuthStateChanged: authModule.onAuthStateChanged,
          signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
          updateProfile: authModule.updateProfile,
          updatePassword: authModule.updatePassword,
          signOut: authModule.signOut,
          getDatabase: databaseModule.getDatabase,
          dbRef: databaseModule.ref,
          get: databaseModule.get,
          set: databaseModule.set,
          update: databaseModule.update,
          onValue: databaseModule.onValue,
          onDisconnect: databaseModule.onDisconnect,
          child: databaseModule.child,
          serverTimestamp: databaseModule.serverTimestamp
        };
        const app = appModule.initializeApp(firebaseConfig);
        firebaseState.auth = authModule.getAuth(app);
        firebaseState.db = databaseModule.getDatabase(app);
        firebaseState.ready = true;
        setSync("Auth ready", false);

        authModule.onAuthStateChanged(firebaseState.auth, async (user) => {
          firebaseState.user = user;
          if (!user) {
            if (firebaseState.unsubscribe) firebaseState.unsubscribe();
            document.body.classList.remove("auth-checking");
            document.body.classList.add("auth-locked");
            setSync("Sign in required", false);
            render();
            hideAppLoader();
            return;
          }
          document.body.classList.remove("auth-checking", "auth-locked");
          els.signInPassword.value = "";
          els.signInMessage.textContent = "Signed in.";
          await prepareUser(user);
          startRealtime();
          startAchievementChecker();
          render();
          hideAppLoader();
        });
      } catch (error) {
        console.warn(error);
        document.body.classList.remove("auth-checking");
        document.body.classList.add("auth-locked");
        els.signInMessage.textContent = "Firebase could not load. Check network and config.";
        setSync("Firebase offline", false);
        render();
        hideAppLoader();
      }
    }

    async function prepareUser(user) {
      const {dbRef, get, update, serverTimestamp, onDisconnect} = firebaseState.modules;
      const profileRef = dbRef(firebaseState.db, `${databasePath}/users/${user.uid}`);
      const existing = await get(profileRef).catch(() => null);
      const existingProfile = existing?.val?.() || {};
      const displayName = existingProfile.displayName || user.displayName || user.email?.split("@")[0] || "Player";
      const playerName = existingProfile.playerName || "";
      firebaseState.profile = {
        ...existingProfile,
        email: user.email || "",
        displayName,
        playerName
      };
      await update(profileRef, {
        email: user.email || "",
        displayName,
        playerName,
        lastLoginAt: serverTimestamp(),
        online: true
      }).catch(() => {});
      onDisconnect(profileRef).update({online:false, lastSeenAt: serverTimestamp()}).catch(() => {});
    }

    async function startRealtime() {
      const {dbRef, get, set, onValue, serverTimestamp} = firebaseState.modules;
      const stateRef = dbRef(firebaseState.db, `${databasePath}/state`);
      const snapshot = await get(stateRef);
      if (!snapshot.exists()) {
        await set(stateRef, {...state, updatedAtServer: serverTimestamp()});
      }
      if (firebaseState.unsubscribe) firebaseState.unsubscribe();
      firebaseState.unsubscribe = onValue(stateRef, (snap) => {
        if (!snap.exists()) return;
        skipNextCloudWrite = true;
        state = normalize(snap.val());
        localStorage.setItem(localKey, JSON.stringify(state));
        setSync("Live sync loaded", true);
        runAchievementSweep({cloud: false});
        render();
        setTimeout(() => { skipNextCloudWrite = false; }, 50);
      }, (error) => {
        console.warn(error);
        setSync("Database blocked", false);
      });
    }

    async function signIn(email, password) {
      if (firebaseDisabled && password === "neweden") {
        localTestSignedIn = true;
        document.body.classList.remove("auth-checking", "auth-locked");
        els.signInMessage.textContent = "Signed in.";
        setSync("Local test mode", false);
        startAchievementChecker();
        render();
        return;
      }

      if (!firebaseState.ready) {
        els.signInMessage.textContent = firebaseConfigured() ? "Firebase is still loading." : "Firebase config is missing.";
        return;
      }

      try {
        await firebaseState.modules.signInWithEmailAndPassword(firebaseState.auth, email, password);
      } catch (error) {
        els.signInMessage.textContent = firebaseErrorMessage(error);
      }
    }

    function firebaseErrorMessage(error) {
      const code = String(error?.code || "");
      if (code.includes("invalid-credential") || code.includes("wrong-password")) return "Email or password is incorrect.";
      if (code.includes("user-not-found")) return "No user exists for that email.";
      if (code.includes("too-many-requests")) return "Too many attempts. Wait a bit and try again.";
      if (code.includes("network-request-failed")) return "Network error. Check connection.";
      if (code.includes("permission-denied")) return "Firebase rules blocked this account.";
      return "Sign in failed. Check Firebase auth settings.";
    }

    function profileErrorMessage(error) {
      const code = String(error?.code || "");
      if (code.includes("requires-recent-login")) return "Sign out and sign back in before changing password.";
      if (code.includes("weak-password")) return "Password should be at least 6 characters.";
      if (code.includes("permission-denied")) return "Firebase rules blocked profile saving.";
      return "Profile save failed. Check the fields and try again.";
    }

    async function signOutUser() {
      clearInterval(achievementCheckTimer);
      if (firebaseState.user && firebaseState.ready) {
        await firebaseState.modules.update(firebaseState.modules.dbRef(firebaseState.db, `${databasePath}/users/${firebaseState.user.uid}`), {
          online: false,
          lastSeenAt: firebaseState.modules.serverTimestamp()
        }).catch(() => {});
        await firebaseState.modules.signOut(firebaseState.auth);
        firebaseState.profile = null;
      } else if (firebaseDisabled) {
        localTestSignedIn = false;
        document.body.classList.add("auth-locked");
        render();
      }
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(value) {
      return escapeHtml(value).replaceAll("`", "&#096;");
    }

    function timeAgo(ms) {
      const minutes = Math.max(1, Math.round((Date.now() - ms) / 60000));
      if (minutes < 60) return `${minutes}m ago`;
      const hours = Math.round(minutes / 60);
      if (hours < 24) return `${hours}h ago`;
      return `${Math.round(hours / 24)}d ago`;
    }

    document.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-action]");
      if (actionButton) handleAction(actionButton.dataset.action, actionButton);
      const viewButton = event.target.closest("[data-view]");
      if (viewButton) setView(viewButton.dataset.view);
      const gameButton = event.target.closest("[data-game]");
      if (gameButton) {
        activeGame = gameButton.dataset.game;
        if (!gameButton.closest(".game-tabs")) activeView = "sessions";
        render();
        window.scrollTo({top: 0, behavior: "smooth"});
      }
      const achievementTab = event.target.closest("[data-achievement-tab]");
      if (achievementTab) {
        activeAchievementTab = achievementTab.dataset.achievementTab;
        render();
      }
      const blackjackTab = event.target.closest("[data-blackjack-mode]");
      if (blackjackTab) {
        blackjackMode = blackjackTab.dataset.blackjackMode;
        activeOnlineGame = "blackjack";
        render();
      }
    });

    els.signInForm.addEventListener("submit", (event) => {
      event.preventDefault();
      signIn(els.signInEmail.value.trim(), els.signInPassword.value);
    });
    els.profileDialog.addEventListener("click", (event) => {
      if (event.target === els.profileDialog) closeProfileDialog();
    });
    els.blackjackRoomDialog.addEventListener("click", (event) => {
      if (event.target === els.blackjackRoomDialog) closeBlackjackRoomDialog();
    });
    $("soloBetPreset").addEventListener("change", () => {
      if ($("soloBetPreset").value) $("soloBetAmount").value = $("soloBetPreset").value;
    });
    fillStaticSelects();
    render();
    initFirebase();

