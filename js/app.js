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
    const activeRoomStorageKey = "virtualCasinoActiveRoomV1";
    const attachedSaveText = "eyJwbGF5ZXJzIjpbeyJuYW1lIjoiRGFycmVuIiwieHAiOjM0MCwic3RhcnMiOjAsImNoaXBzIjp7IndoaXRlIjoyMywicmVkIjozMSwiYmx1ZSI6MjcsImdyZWVuIjoxOCwiYmxhY2siOjEwfSwibGlmZXRpbWUiOjc3MCwic2Vzc2lvblN0YXJ0IjoxODk4LCJiYW5rcm9sbCI6NzcwLCJzZXNzaW9uQnV5SW4iOjE4OTh9LHsibmFtZSI6IkJodW1pa2EiLCJ4cCI6MCwic3RhcnMiOjAsImNoaXBzIjp7IndoaXRlIjowLCJyZWQiOjAsImJsdWUiOjAsImdyZWVuIjowLCJibGFjayI6MH0sImxpZmV0aW1lIjotMzgwLCJzZXNzaW9uU3RhcnQiOjAsImJhbmtyb2xsIjotMzgwLCJzZXNzaW9uQnV5SW4iOjB9LHsibmFtZSI6Ik1haXRyaSIsInhwIjozMDUsInN0YXJzIjowLCJjaGlwcyI6eyJ3aGl0ZSI6MjIsInJlZCI6MTksImJsdWUiOjMsImdyZWVuIjo2LCJibGFjayI6MH0sImxpZmV0aW1lIjotMzkwLCJzZXNzaW9uU3RhcnQiOjI5NywiYmFua3JvbGwiOi0zOTAsInNlc3Npb25CdXlJbiI6Mjk3fV0sImJpZ2dlc3RQb3QiOnsicGxheWVyIjoiIiwidmFsdWUiOjB9LCJsb2ciOlsiUG9rZXIgc2Vzc2lvbiBlbmRlZC4gU2Vzc2lvbiByZXN1bHRzIGFkZGVkIHRvIGxpZmV0aW1lLiIsIkJodW1pa2EgY2hpcCBjb3VudCBzYXZlZDogJDAiLCJEYXJyZW4gY2hpcCBjb3VudCBzYXZlZDogJDE4OTgiLCJNYWl0cmkgY2hpcCBjb3VudCBzYXZlZDogJDI5NyIsIk1haXRyaSArMjAgWFAg4oCUIFBva2VyOiBUd28gUGFpciIsIkRhcnJlbiArMTAgWFAg4oCUIFBva2VyOiBPbmUgUGFpciIsIk1haXRyaSArNTAgWFAg4oCUIFBva2VyOiBTdHJhaWdodCIsIk1haXRyaSArMTAwIFhQIOKAlCBQb2tlcjogRnVsbCBIb3VzZSIsIkRhcnJlbiArMzUgWFAg4oCUIFBva2VyOiBUaHJlZSBvZiBhIEtpbmQiLCJNYWl0cmkgKzUwIFhQIOKAlCBQb2tlcjogU3RyYWlnaHQiXSwicG9rZXJTZXNzaW9uQWN0aXZlIjpmYWxzZSwidmVyc2lvbiI6NH0=";

    const pokerHandXP = {"High Card":5,"One Pair":10,"Two Pair":20,"Three of a Kind":35,"Straight":50,"Flush":75,"Full House":100,"Four of a Kind":200,"Straight Flush":500,"Royal Flush":1000};
    const blackjackXP = {"Win Hand":10,"Natural Blackjack":50,"Five Card Charlie":50,"Win Session":100,"Biggest Blackjack Win":50};
    const unoXP = {"Win Round":50,"Win Session":200,"Successful Draw 4 Challenge":100,"Uno Denied":50,"Mercy Elimination":100};
    const crapsXP = {"First Roll":10,"Pass Line Win":20,"Field Hit":15,"Hardway Hit":35,"Point Made":50};
    const dailyRewardConfig = await loadDailyRewardConfig();
    const LUCKY_WHEEL_REWARDS = dailyRewardConfig.luckyWheel;
    const SCRATCH_OFF_REWARDS = dailyRewardConfig.scratchOff;
    const STOCK_TICK_MIN_MS = 30 * 1000;
    const STOCK_TICK_MAX_MS = 45 * 1000;
    const STOCK_COMPANIES = await loadStockCompanies();
    const loadedAssetCatalogs = await loadAssetCatalogs();
    const VEHICLE_CATALOG = loadedAssetCatalogs.garage;
    const AIRCRAFT_CATALOG = loadedAssetCatalogs.airplanes;
    const BOAT_CATALOG = loadedAssetCatalogs.boats;
    const PROPERTY_CATALOG = loadedAssetCatalogs.properties;
    const GEMSTONE_CATALOG = loadedAssetCatalogs.gemstones;
    const ASSET_CATALOGS = {garage: VEHICLE_CATALOG, properties: PROPERTY_CATALOG, gemstones: GEMSTONE_CATALOG, airplanes: AIRCRAFT_CATALOG, boats: BOAT_CATALOG};
    const ASSET_CATEGORY_LABELS = {garage:"Garage", properties:"Properties", gemstones:"Gemstones", airplanes:"Airplanes", boats:"Boats"};
    const ASSET_MARKET_TITLES = {garage:"Vehicle Market", properties:"Property Market", gemstones:"Gemstone Exchange", airplanes:"Aircraft Market", boats:"Boat Market"};
    const DAILY_CHALLENGE_CONFIG = await loadDailyChallengeConfig();
    const DAILY_CLICKABLES = dailyRewardConfig.activities;
    const levels = await loadFamilyLevels();
    const standard = {white:10,red:10,blue:8,green:5,black:2};
    const blank = {white:0,red:0,blue:0,green:0,black:0};
    const CHIP_COLORS = ["white", "red", "blue", "green", "black"];
    const CHIP_LABELS = {white:"White", red:"Red", blue:"Blue", green:"Green", black:"Black"};
    const CARD_DEAL_DELAY_MS = 260;
    const CARD_DEAL_SETTLE_MS = 900;
    const STAKE_MODES = {
      low: {label:"Low Stakes", values:{white:1, red:5, blue:10, green:25, black:100}},
      mid: {label:"Mid Stakes", values:{white:100, red:500, blue:1000, green:2500, black:10000}},
      high: {label:"High Stakes", values:{white:1000, red:5000, blue:10000, green:25000, black:100000}},
      elite: {label:"Elite Stakes", values:{white:10000, red:50000, blue:100000, green:250000, black:1000000}},
      custom: {label:"Custom", values:{white:1, red:5, blue:10, green:25, black:100}}
    };
    const colors = ["gold", "blue", "purple"];
    const icons = ["&#9824;", "&#9670;", "&#9829;", "&#9827;"];
    const ACHIEVEMENT_DEFINITIONS = await loadAchievementDefinitions();

    function createEmptyBlackjackGame() {
      return {
        deck: [],
        playerHands: [],
        playerHand: [],
        dealerHand: [],
        bet: 0,
        activeHand: 0,
        splits: 0,
        animateCards: false,
        dealerAnimateIndexes: [],
        dealerFlipIndexes: [],
        playerAnimateIndexes: {},
        phase: "idle",
        message: "Place a bet and deal a hand.",
        revealDealer: false
      };
    }

    function createEmptyMultiplayerBlackjackTable() {
      return {
        deck: [],
        dealerHand: [],
        hands: {},
        bet: 0,
        activeSeatKey: "",
        phase: "waiting",
        revealDealer: false,
        dealerAnimateIndexes: [],
        dealerFlipIndexes: [],
        handAnimateIndexes: {},
        message: "Start a shared round when players have joined."
      };
    }

    function createEmptyPokerTable() {
      return {
        deck: [],
        community: [],
        hands: {},
        stacks: {},
        folded: {},
        bets: {},
        committed: {},
        acted: {},
        phase: "waiting",
        dealerButton: "",
        dealerIndex: 0,
        smallBlindKey: "",
        bigBlindKey: "",
        activeSeatKey: "",
        currentBet: 0,
        minRaise: 0,
        pot: 0,
        winnerKey: "",
        winningHand: "",
        handNumber: 0,
        lastAggressorKey: "",
        actionLog: [],
        message: "Waiting for players to sit down.",
        animateCommunityIndexes: [],
        handAnimateIndexes: {}
      };
    }

    function createEmptyCrapsGame() {
      return {
        phase: "comeout",
        point: 0,
        message: "Place a bet and roll the come-out.",
        lastRoll: [],
        lastTotal: 0,
        betType: "pass",
        betAmount: 5,
        wins: 0
      };
    }

    function createEmptyFarkleGame() {
      return {
        dice: [1, 1, 1, 1, 1, 1],
        score: 0,
        combo: "Ready to roll",
        message: "Place a bet and roll six dice.",
        lastNet: 0
      };
    }

    function createEmptySlotMachine() {
      return {
        machine: "crownLine",
        reels: Array.from({length: 5}, () => Array.from({length: 3}, () => "blank")),
        spinning: false,
        message: "Choose a bet per line and spin.",
        lastWin: 0,
        lastWager: 0,
        winningLines: [],
        jackpot: false
      };
    }

    const slotPaylines = [
      [1,1,1,1,1],
      [0,0,0,0,0],
      [2,2,2,2,2],
      [0,1,2,1,0],
      [2,1,0,1,2],
      [1,0,0,0,1],
      [1,2,2,2,1],
      [0,0,1,2,2],
      [2,2,1,0,0]
    ];

    const slotMachines = {
      crownLine: {name:"Crown Line Slots", reels:5, rows:3, lines:slotPaylines, fast:false},
      lucky7s: {name:"Lucky 7s Classic", reels:3, rows:3, lines:[[1,1,1]], fast:true},
      treasureVault: {name:"Treasure Vault", reels:5, rows:3, lines:slotPaylines, fast:false, progressive:true},
      familyFortune: {name:"Family Fortune", reels:5, rows:3, lines:slotPaylines, fast:false, family:true}
    };

    const slotSymbols = [
      {id:"crown", label:"Crown", display:"&#9819;", weight:1, pays:{3:50,4:200,5:1000}},
      {id:"seven", label:"Seven", display:"7", weight:2, pays:{3:25,4:100,5:500}},
      {id:"bar", label:"BAR", display:"BAR", weight:4, pays:{3:12,4:50,5:200}},
      {id:"diamond", label:"Diamond", display:"&#9670;", weight:5, pays:{3:15,4:75,5:300}},
      {id:"bell", label:"Bell", display:"&#9830;", weight:7, pays:{3:8,4:25,5:100}},
      {id:"chip", label:"Chip", display:"&#9679;", weight:10, pays:{3:5,4:15,5:50}},
      {id:"cherry", label:"Cherry", display:"&#9829;", weight:14, pays:{3:3,4:8,5:25}},
      {id:"card", label:"Card", display:"A", weight:18, pays:{3:2,4:5,5:15}},
      {id:"wild", label:"Wild", display:"W", weight:3, pays:{3:10,4:40,5:150}, wild:true},
      {id:"scatter", label:"Scatter", display:"&#9733;", weight:5, scatter:true}
    ];

    async function loadAssetCatalogs() {
      const catalogs = await Promise.all([
        loadAssetCatalog("data/assets/cars.json", "garage"),
        loadAssetCatalog("data/assets/airplanes.json", "airplanes"),
        loadAssetCatalog("data/assets/boats.json", "boats"),
        loadAssetCatalog("data/assets/properties.json", "properties"),
        loadAssetCatalog("data/assets/gemstones.json", "gemstones")
      ]);
      return {garage:catalogs[0], airplanes:catalogs[1], boats:catalogs[2], properties:catalogs[3], gemstones:catalogs[4]};
    }

    async function loadAssetCatalog(path, category) {
      try {
        const response = await fetch(path, {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        return validateAssetCatalog(await response.json(), category, path);
      } catch (error) {
        console.error(`Could not load ${category} asset catalog from ${path}.`, error);
        return [];
      }
    }

    function validateAssetCatalog(items, category, path) {
      if (!Array.isArray(items)) throw new Error(`${path} must be a JSON array.`);
      const seen = new Set();
      return items.map((item, index) => {
        const id = String(item?.id || "").trim();
        const name = String(item?.name || "").trim();
        if (!id || !name) throw new Error(`${path} item ${index + 1} is missing id or name.`);
        if (seen.has(id)) throw new Error(`${path} has duplicate id ${id}.`);
        seen.add(id);
        return {
          id,
          category,
          name,
          rarity:String(item.rarity || "Common"),
          type:String(item.type || "Asset"),
          location:String(item.location || ""),
          price:Math.max(1, Math.round(Number(item.price || 0))),
          resaleRate:Math.max(0.05, Math.min(1, Number(item.resaleRate || 0.7))),
          icon:item.icon || ""
        };
      });
    }

    async function loadStockCompanies() {
      const fallback = [
        {symbol:"NOVA", name:"Nova Pharmaceuticals", sector:"Health", base:84, volatility:1.65, network:"BAWSAQ"}
      ];
      try {
        const response = await fetch("data/stocks.json", {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const items = await response.json();
        return validateStockCompanies(items);
      } catch (error) {
        console.warn("Could not load stock company catalog.", error);
        return fallback;
      }
    }

    function validateStockCompanies(items) {
      if (!Array.isArray(items)) throw new Error("data/stocks.json must be an array.");
      const seen = new Set();
      return items.map((item, index) => {
        const symbol = String(item.symbol || "").trim().toUpperCase();
        const name = String(item.name || "").trim();
        if (!symbol || !name) throw new Error(`data/stocks.json item ${index + 1} is missing symbol or name.`);
        if (seen.has(symbol)) throw new Error(`data/stocks.json has duplicate symbol ${symbol}.`);
        seen.add(symbol);
        return {
          symbol,
          name,
          sector:String(item.sector || "General"),
          base:Math.max(1, Number(item.base || 1)),
          volatility:Math.max(0.1, Number(item.volatility || 1)),
          network:String(item.network || (index % 2 === 0 ? "LCN" : "BAWSAQ")).toUpperCase() === "BAWSAQ" ? "BAWSAQ" : "LCN"
        };
      });
    }

    async function loadAchievementDefinitions() {
      try {
        const response = await fetch("data/achievements.json", {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const items = await response.json();
        if (!Array.isArray(items)) throw new Error("data/achievements.json must be an array.");
        return items.map((item, index) => {
          const id = String(item.id || "").trim();
          const name = String(item.name || "").trim();
          if (!id || !name) throw new Error(`data/achievements.json item ${index + 1} is missing id or name.`);
          return {
            id,
            name,
            requirement:String(item.requirement || ""),
            rarity:String(item.rarity || "Common"),
            category:String(item.category || "General"),
            game:String(item.game || item.icon || "general"),
            hidden:Boolean(item.hidden || item.secret)
          };
        });
      } catch (error) {
        console.error("Could not load achievement definitions.", error);
        return [];
      }
    }

    async function loadDailyRewardConfig() {
      const fallback = {
        activities:[
          {id:"coin", icon:"🪙", title:"House Coin", description:"Call the gold coin flip.", reward:{type:"money", min:35, max:160}, chance:0.58},
          {id:"dice", icon:"🎲", title:"Loaded Dice", description:"Roll casino dice for a bankroll bump.", reward:{type:"money", min:45, max:220}, chance:0.5},
          {id:"vault", icon:"🔐", title:"Mini Vault", description:"Crack a tiny vault for money or XP.", reward:{type:"mixed", min:60, max:260}, chance:0.45},
          {id:"cards", icon:"🃏", title:"Card Draw", description:"Draw a lucky card for XP.", reward:{type:"xp", min:45, max:180}, chance:0.62},
          {id:"ticket", icon:"🎟️", title:"Ticket Booth", description:"Try for a bundle of Casino Tickets.", reward:{type:"ticket", min:1, max:10}, chance:0.34}
        ],
        luckyWheel:[
          {label:"$10", type:"money", value:10, weight:22},
          {label:"10 XP", type:"xp", value:10, weight:20}
        ],
        scratchOff:[
          {label:"Nothing", value:0, weight:45},
          {label:"$25", value:25, weight:25},
          {label:"$50", value:50, weight:16},
          {label:"$100", value:100, weight:10},
          {label:"$250", value:250, weight:4}
        ]
      };
      try {
        const response = await fetch("data/dailies.json", {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const raw = await response.json();
        const config = Array.isArray(raw) ? {...fallback, activities:raw} : {...fallback, ...raw};
        return {
          activities:validateDailyActivities(config.activities),
          luckyWheel:validateWeightedRewards(config.luckyWheel, fallback.luckyWheel),
          scratchOff:validateWeightedRewards(config.scratchOff, fallback.scratchOff)
        };
      } catch (error) {
        console.warn("Could not load daily reward config.", error);
        return fallback;
      }
    }

    function validateDailyActivities(items) {
      if (!Array.isArray(items)) throw new Error("data/dailies.json activities must be an array.");
      return items.map((item, index) => ({
        id:String(item.id || `daily-${index}`).trim(),
        icon:String(item.icon || "🎲"),
        title:String(item.title || "Daily Activity"),
        description:String(item.description || "Try your luck."),
        reward:{
          type:String(item.reward?.type || "money"),
          min:Math.max(0, Number(item.reward?.min || 0)),
          max:Math.max(0, Number(item.reward?.max || item.reward?.min || 0))
        },
        chance:Math.max(0, Math.min(1, Number(item.chance ?? 0.5)))
      })).filter((item) => item.id);
    }

    function validateWeightedRewards(items, fallback) {
      const source = Array.isArray(items) && items.length ? items : fallback;
      return source.map((item) => ({
        label:String(item.label || (item.type === "xp" ? `${Number(item.value || 0)} XP` : money(Number(item.value || 0)))),
        type:String(item.type || "money"),
        value:Math.max(0, Number(item.value || 0)),
        weight:Math.max(0, Number(item.weight || 0)),
        golden:Boolean(item.golden)
      })).filter((item) => item.weight > 0 || item.value === 0);
    }

    async function loadDailyChallengeConfig() {
      const fallback = {
        reward:{type:"money", min:1500, max:3500},
        count:3,
        challenges:[
          {id:"blackjack-win-5", title:"Win 5 Blackjack Hands", description:"Beat the dealer five times today.", metric:"blackjackWins", target:5},
          {id:"slots-spin-10", title:"Spin Any Slots 10 Times", description:"Run any slot machine ten times.", metric:"slotSpins", target:10},
          {id:"earn-xp-500", title:"Earn 500 XP", description:"Gain 500 XP from games and dailies.", metric:"xpEarned", target:500}
        ]
      };
      try {
        const response = await fetch("data/daily-challenges.json", {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const raw = await response.json();
        const config = {...fallback, ...raw};
        return {
          reward:config.reward || fallback.reward,
          count:Math.max(1, Math.min(6, Number(config.count || fallback.count))),
          challenges:validateDailyChallenges(config.challenges || fallback.challenges)
        };
      } catch (error) {
        console.warn("Could not load daily challenge config.", error);
        return fallback;
      }
    }

    function validateDailyChallenges(items) {
      if (!Array.isArray(items)) throw new Error("data/daily-challenges.json challenges must be an array.");
      return items.map((item, index) => ({
        id:String(item.id || `challenge-${index}`).trim(),
        title:String(item.title || "Daily Challenge"),
        description:String(item.description || ""),
        metric:String(item.metric || "xpEarned"),
        target:Math.max(1, Number(item.target || 1))
      })).filter((item) => item.id);
    }

    async function loadFamilyLevels() {
      const fallback = [{level:1,xp:0},{level:2,xp:100},{level:3,xp:250},{level:4,xp:450},{level:5,xp:700},{level:6,xp:1000},{level:7,xp:1400},{level:8,xp:1900},{level:9,xp:2500},{level:10,xp:3200},{level:11,xp:4100},{level:12,xp:5200},{level:13,xp:6500},{level:14,xp:8100},{level:15,xp:10000}];
      try {
        const response = await fetch("data/family-levels.json", {cache:"no-store"});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const items = await response.json();
        if (!Array.isArray(items)) throw new Error("data/family-levels.json must be an array.");
        const rows = items.map((row) => ({level:Number(row.level || 1), xp:Number(row.xp || 0)})).filter((row) => row.level > 0).sort((a, b) => a.xp - b.xp);
        return rows.length ? rows : fallback;
      } catch (error) {
        console.warn("Could not load family level table.", error);
        return fallback;
      }
    }

    const defaultState = normalize(decodeSave(attachedSaveText));
    let state = normalize(JSON.parse(localStorage.getItem(localKey) || "null") || structuredClone(defaultState));
    let activeView = "overview";
    let activeGame = "poker";
    let skipNextCloudWrite = false;
    let realtimeSnapshotApplied = false;
    const hadLocalSaveAtBoot = Boolean(localStorage.getItem(localKey));
    let cloudWriteTimer = null;
    let localTestSignedIn = false;
    let activeAchievementTab = "unlocked";
    let achievementCategory = "all";
    let achievementSearch = "";
    let achievementSort = "unlocked";
    let stockNetworkFilter = "all";
    let stockSectorFilter = "all";
    let achievementCheckTimer = null;
    let roomPollTimer = null;
    let activeOnlineGame = "";
    let activeRoomId = localStorage.getItem(activeRoomStorageKey) || "";
    let lastClosedRoomId = "";
    let roomNoticePrimed = false;
    let seenOpenRoomIds = new Set();
    let linkPromptDismissed = sessionStorage.getItem("virtualCasinoLinkPromptDismissed") === "1";
    let relinkUnlocked = false;
    let pendingDeletePlayer = "";
    let blackjackMode = "solo";
    let lastRoomResultToastKey = "";
    let activityHistoryLimit = 10;
    let historyFilter = "all";
    let historySearch = "";
    let pendingTicketUse = "";
    let assetViewPlayerName = "";
    let activeAssetCategory = "garage";
    let localSettlement = {selectedPlayers: [], reviews: [], overrideImbalance: false};
    let changelogEntries = [];
    let changelogPage = 1;
    const changelogRowsPerPage = 5;
    let soloBlackjack = createEmptyBlackjackGame();
    let slotMachine = createEmptySlotMachine();
    let crapsGame = createEmptyCrapsGame();
    let farkleGame = createEmptyFarkleGame();
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
      unsubscribe: null,
      roomsUnsubscribe: null
    };

    const $ = (id) => document.getElementById(id);
    const els = {
      appLoader: $("appLoader"),
      signInForm: $("signInForm"),
      signInEmail: $("signInEmail"),
      signInPassword: $("signInPassword"),
      signInMessage: $("signInMessage"),
      toast: $("toast"),
      mobileNavDrawer: $("mobileNavDrawer"),
      profileDialog: $("profileDialog"),
      profileEmail: $("profileEmail"),
      profileDisplayName: $("profileDisplayName"),
      profilePlayerName: $("profilePlayerName"),
      profileRelinkPass: $("profileRelinkPass"),
      profileRelinkHelp: $("profileRelinkHelp"),
      profilePassword: $("profilePassword"),
      profileMessage: $("profileMessage"),
      confirmDialog: $("confirmDialog"),
      confirmTitle: $("confirmTitle"),
      confirmBody: $("confirmBody"),
      blackjackRoomDialog: $("blackjackRoomDialog"),
      blackjackModeDialog: $("blackjackModeDialog"),
      slotMachineDialog: $("slotMachineDialog"),
      roomName: $("roomName"),
      roomMessage: $("roomMessage"),
      blackjackGuideDialog: $("blackjackGuideDialog"),
      pokerRoomDialog: $("pokerRoomDialog"),
      pokerRoomName: $("pokerRoomName"),
      pokerSmallBlind: $("pokerSmallBlind"),
      pokerBigBlind: $("pokerBigBlind"),
      pokerBuyIn: $("pokerBuyIn"),
      pokerMaxPlayers: $("pokerMaxPlayers"),
      pokerBuyInPreview: $("pokerBuyInPreview"),
      pokerRoomMessage: $("pokerRoomMessage"),
      pokerGuideDialog: $("pokerGuideDialog"),
      luckyWheelDialog: $("luckyWheelDialog"),
      ticketUseDialog: $("ticketUseDialog"),
      assetViewDialog: $("assetViewDialog"),
      crapsGuideDialog: $("crapsGuideDialog"),
      linkProfileDialog: $("linkProfileDialog")
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
        const name = String(player.name || "Player").trim();
        return {
          id: player.id || `player-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || Math.random().toString(36).slice(2, 9)}`,
          name,
          xp: Number(player.xp || 0),
          stars: Number(player.stars || 0),
          chips,
          bankroll: Number.isFinite(Number(player.bankroll)) ? Number(player.bankroll) : stackValue(chips),
          lifetime,
          bankBalance: Number(player.bankBalance || 0),
          bankDebt: Number(player.bankDebt || 0),
          casinoTickets: Number(player.casinoTickets || 0),
          portfolio: player.portfolio && typeof player.portfolio === "object" && !Array.isArray(player.portfolio) ? player.portfolio : {},
          portfolioCost: player.portfolioCost && typeof player.portfolioCost === "object" && !Array.isArray(player.portfolioCost) ? player.portfolioCost : {},
          ownedAssets: Array.isArray(player.ownedAssets) ? player.ownedAssets : [],
          sessionBuyIn: Number(player.sessionBuyIn || player.sessionStart || 0),
          localStats: {
            lifetimeLocalGamesPlayed: Number(player.localStats?.lifetimeLocalGamesPlayed || 0),
            lifetimeLocalBuyIns: Number(player.localStats?.lifetimeLocalBuyIns || 0),
            lifetimeLocalWinnings: Number(player.localStats?.lifetimeLocalWinnings || 0),
            lifetimeLocalLosses: Number(player.localStats?.lifetimeLocalLosses || 0),
            lifetimeLocalNet: Number(player.localStats?.lifetimeLocalNet || 0),
            pokerGamesPlayed: Number(player.localStats?.pokerGamesPlayed || 0),
            pokerNet: Number(player.localStats?.pokerNet || 0),
            blackjackGamesPlayed: Number(player.localStats?.blackjackGamesPlayed || 0),
            blackjackNet: Number(player.localStats?.blackjackNet || 0),
            customGamesPlayed: Number(player.localStats?.customGamesPlayed || 0),
            customNet: Number(player.localStats?.customNet || 0)
          },
          gamesPlayed: Number(player.gamesPlayed || 0),
          favoriteAchievements: Array.isArray(player.favoriteAchievements) ? player.favoriteAchievements.slice(0, 3) : []
        };
      });
      data.version = 11;
      data.updatedAt = data.updatedAt || Date.now();
      data.casinoVault = Math.max(0, Number(data.casinoVault || 0));
      data.pokerSessionActive = Boolean(data.pokerSessionActive);
      data.biggestPot = data.biggestPot || {player:"", value:0};
      data.log = Array.isArray(data.log) ? data.log.slice(0, 30) : [];
      data.history = Array.isArray(data.history) ? data.history.map(normalizeHistoryItem).slice(0, 250) : data.log.map((item, index) => normalizeHistoryItem(item, index));
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
      Object.values(data.onlineRooms).forEach((room) => {
        if (!room || typeof room !== "object") return;
        room.seats = room.seats && typeof room.seats === "object" ? room.seats : {};
        Object.values(room.seats).forEach((seat, index) => {
          const linked = playerByNameFromList(data.players, seat.playerName);
          seat.playerId = seat.playerId || linked?.id || "";
          seat.seatNumber = Number(seat.seatNumber || index + 1);
          if (room.game === "poker") {
            seat.buyIn = Number(seat.buyIn || room.buyIn || 465);
            seat.stack = Number(seat.stack ?? seat.buyIn);
          }
        });
        if (room.game === "poker") {
          room.maxPlayers = Math.min(8, Math.max(2, Number(room.maxPlayers || 8)));
          room.buyIn = Math.max(465, Number(room.buyIn || 465));
          room.handHistory = Array.isArray(room.handHistory) ? room.handHistory.slice(0, 50) : [];
        }
      });
      data.linkages = data.linkages && typeof data.linkages === "object" && !Array.isArray(data.linkages) ? data.linkages : {};
      data.gameStats = data.gameStats || {
        poker: {played: 42, wins: 0, profit: 235, biggest: 1250},
        blackjack: {played: 18, wins: 3, profit: 120, biggest: 0},
        uno: {played: 15, wins: 8, profit: 60, biggest: 0}
      };
      data.gameStats.poker = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.poker || {})};
      data.gameStats.blackjack = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.blackjack || {})};
      data.gameStats.uno = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.uno || {})};
      data.gameStats.slots = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.slots || {})};
      data.gameStats.craps = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.craps || {})};
      data.gameStats.custom = {...{played:0,wins:0,profit:0,biggest:0}, ...(data.gameStats.custom || {})};
      data.daily = data.daily && typeof data.daily === "object" && !Array.isArray(data.daily) ? data.daily : {};
      data.daily.challenges = data.daily.challenges && typeof data.daily.challenges === "object" && !Array.isArray(data.daily.challenges) ? data.daily.challenges : {};
      data.daily.wheel = data.daily.wheel && typeof data.daily.wheel === "object" && !Array.isArray(data.daily.wheel) ? data.daily.wheel : {};
      data.daily.scratch = data.daily.scratch && typeof data.daily.scratch === "object" && !Array.isArray(data.daily.scratch) ? data.daily.scratch : {};
      data.daily.activities = data.daily.activities && typeof data.daily.activities === "object" && !Array.isArray(data.daily.activities) ? data.daily.activities : {};
      data.daily.wheelHistory = Array.isArray(data.daily.wheelHistory) ? data.daily.wheelHistory.slice(0, 12) : [];
      data.stockMarket = normalizeStockMarket(data.stockMarket);
      data.assetMarket = normalizeAssetMarket(data.assetMarket, data.players);
      data.jackpots = data.jackpots && typeof data.jackpots === "object" && !Array.isArray(data.jackpots) ? data.jackpots : {};
      data.jackpots.treasureVault = {
        mini: Number(data.jackpots.treasureVault?.mini || 250),
        major: Number(data.jackpots.treasureVault?.major || 2500),
        grand: Number(data.jackpots.treasureVault?.grand || 25000)
      };
      return data;
    }

    function normalizeStockMarket(input) {
      const market = input && typeof input === "object" && !Array.isArray(input) ? structuredClone(input) : {};
      market.lastTick = Number(market.lastTick || Date.now());
      market.nextTick = Number(market.nextTick || Date.now() + stockTickDelay());
      market.tickNumber = Number(market.tickNumber || 0);
      market.news = Array.isArray(market.news) ? market.news.slice(0, 8) : [];
      market.companies = market.companies && typeof market.companies === "object" && !Array.isArray(market.companies) ? market.companies : {};
      STOCK_COMPANIES.forEach((company, index) => {
        const existing = market.companies[company.symbol] || {};
        const start = Math.max(1, Number(existing.price || company.base + (index % 5) * 3));
        market.companies[company.symbol] = {
          ...company,
          price: Number(start.toFixed(2)),
          previous: Number(existing.previous || start),
          recordedHigh: Number(existing.recordedHigh || Math.max(start, Number(existing.previous || start))),
          recordedLow: Number(existing.recordedLow || Math.min(start, Number(existing.previous || start))),
          trend: Number(existing.trend || 0),
          network: existing.network || company.network,
          event: existing.event || ""
        };
      });
      return market;
    }

    function normalizeAssetMarket(input, players = []) {
      const market = input && typeof input === "object" && !Array.isArray(input) ? structuredClone(input) : {};
      market.categories = market.categories && typeof market.categories === "object" && !Array.isArray(market.categories) ? market.categories : {};
      if (Array.isArray(market.listings) && market.listings.length && !market.categories.garage) {
        market.categories.garage = {lastRefresh:Number(market.lastRefresh || 0), listings:market.listings};
      }
      Object.keys(ASSET_CATALOGS).forEach((category) => {
        const categoryMarket = market.categories[category] && typeof market.categories[category] === "object" && !Array.isArray(market.categories[category])
          ? market.categories[category]
          : {};
        categoryMarket.lastRefresh = Number(categoryMarket.lastRefresh || 0);
        categoryMarket.listings = Array.isArray(categoryMarket.listings) ? categoryMarket.listings : [];
        const catalog = assetCatalogForCategory(category);
        const validIds = new Set(catalog.map((item) => item.id));
        const minimumListings = category === "garage" ? 10 : 8;
        const hasLegacyListings = categoryMarket.listings.some((listing) => !validIds.has(listing.vehicleId));
        const missingFeaturedCamry = category === "garage" && !categoryMarket.listings.some((listing) => listing.vehicleId === "2025-toyota-camry-xse");
        if (!categoryMarket.listings.length || categoryMarket.listings.length < minimumListings || hasLegacyListings || missingFeaturedCamry) {
          market.categories[category] = categoryMarket;
          refreshAssetCategoryMarket(market, category, true, players);
        } else {
          categoryMarket.listings = categoryMarket.listings.map((listing) => ({...listing, category:listing.category || category}));
          market.categories[category] = categoryMarket;
        }
      });
      removeOwnedAssetListings(market, players);
      market.lastRefresh = Number(market.categories.garage?.lastRefresh || market.lastRefresh || 0);
      market.listings = Array.isArray(market.categories.garage?.listings) ? market.categories.garage.listings : [];
      return market;
    }

    function maybeAdvanceMarkets() {
      const now = Date.now();
      if (!state?.stockMarket) return;
      let changed = false;
      let guard = 0;
      while (now >= Number(state.stockMarket.nextTick || 0) && guard < 20) {
        advanceStockMarketTick(now);
        changed = true;
        guard += 1;
      }
      Object.keys(ASSET_CATALOGS).forEach((category) => {
        const lastRefresh = Number(activeAssetMarket(category)?.lastRefresh || 0);
        if (now >= nextAssetRefreshTime(lastRefresh).getTime()) {
          refreshAssetCategoryMarket(state.assetMarket, category, false, state.players);
          changed = true;
        }
      });
      if (changed) {
        state.updatedAt = Date.now();
        localStorage.setItem(localKey, JSON.stringify(state));
        queueCloudWrite();
      }
    }

    function stockTickDelay() {
      return STOCK_TICK_MIN_MS + Math.floor(Math.random() * (STOCK_TICK_MAX_MS - STOCK_TICK_MIN_MS + 1));
    }

    function isStockBusinessHours(date = new Date()) {
      const parts = centralParts(date);
      return parts.hour >= 8 && parts.hour < 16;
    }

    function advanceStockMarketTick(now = Date.now()) {
      const market = state.stockMarket;
      market.tickNumber += 1;
      market.lastTick = now;
      market.nextTick = now + stockTickDelay();
      const companies = Object.values(market.companies);
      const eventCompany = companies[Math.floor(Math.random() * companies.length)] || STOCK_COMPANIES[Math.floor(Math.random() * STOCK_COMPANIES.length)];
      const eventDirection = Math.random() > 0.48 ? 1 : -1;
      const openHours = isStockBusinessHours(new Date(now));
      const networkText = eventCompany.network === "BAWSAQ" ? "BAWSAQ online activity" : "LCN local market event";
      const eventText = eventDirection > 0 ? `${networkText}: buying pressure` : `${networkText}: selloff pressure`;
      companies.forEach((company) => {
        const sectorMood = company.sector === eventCompany.sector ? eventDirection * (0.75 + Math.random() * 2.2) : 0;
        const networkMood = company.network === eventCompany.network ? eventDirection * (0.42 + Math.random() * 1.35) : 0;
        const rareCatalyst = company.symbol === eventCompany.symbol && Math.random() < 0.07 ? eventDirection * (18 + Math.random() * 42) : 0;
        const shock = company.symbol === eventCompany.symbol ? eventDirection * (3.5 + Math.random() * 11.5) : 0;
        const drift = (Math.random() - 0.47) * Number(company.volatility || 1) * 2.05;
        const pullToBase = ((Number(company.base || company.price) - Number(company.price || company.base)) / Math.max(1, Number(company.price || 1))) * 0.48;
        const multiplier = openHours ? 2.15 : 1.08;
        const percent = Math.max(-65, Math.min(65, ((drift + shock + sectorMood + networkMood + pullToBase) * multiplier) + rareCatalyst));
        company.previous = Number(company.price || company.base);
        company.price = Number(Math.max(1, company.previous * (1 + percent / 100)).toFixed(2));
        company.trend = Number(((company.price - company.previous) / company.previous * 100).toFixed(2));
        company.recordedHigh = Number(Math.max(Number(company.recordedHigh || 0), company.price, company.previous).toFixed(2));
        company.recordedLow = Number(Math.min(Number(company.recordedLow || company.price), company.price, company.previous).toFixed(2));
        company.event = company.symbol === eventCompany.symbol ? eventText : "";
      });
      market.news.unshift(`${eventCompany.network} / ${eventCompany.name} moved on ${eventDirection > 0 ? "buying pressure" : "selloff pressure"}${openHours ? " during business hours" : " after hours"}.`);
      market.news = market.news.slice(0, 8);
    }

    function assetCatalogForCategory(category = "garage") {
      return ASSET_CATALOGS[category] || VEHICLE_CATALOG;
    }

    function activeAssetMarket(category = activeAssetCategory) {
      state.assetMarket = state.assetMarket || {};
      state.assetMarket.categories = state.assetMarket.categories || {};
      return state.assetMarket.categories[category] || {lastRefresh:0, listings:[]};
    }

    function ownedAssetVehicleIds(players = state?.players || [], category = "") {
      const ids = new Set();
      (players || []).forEach((player) => {
        (player.ownedAssets || []).forEach((asset) => {
          const assetCategory = asset.category || "garage";
          if ((!category || assetCategory === category) && asset.vehicleId) ids.add(asset.vehicleId);
        });
      });
      return ids;
    }

    function removeOwnedAssetListings(market = state.assetMarket, players = state?.players || []) {
      if (!market?.categories) return;
      Object.entries(market.categories).forEach(([category, categoryMarket]) => {
        const ownedIds = ownedAssetVehicleIds(players, category);
        categoryMarket.listings = (categoryMarket.listings || []).filter((listing) => !ownedIds.has(listing.vehicleId));
      });
      market.listings = market.categories.garage?.listings || [];
      market.lastRefresh = Number(market.categories.garage?.lastRefresh || market.lastRefresh || 0);
    }

    function refreshAssetMarket(market = state.assetMarket, initial = false) {
      refreshAssetCategoryMarket(market, "garage", initial, state?.players || []);
    }

    function refreshAssetCategoryMarket(market = state.assetMarket, category = "garage", initial = false, players = state?.players || []) {
      const now = Date.now();
      const catalog = assetCatalogForCategory(category);
      const ownedIds = ownedAssetVehicleIds(players, category);
      const commonPool = catalog.filter((item) => !ownedIds.has(item.id) && !["Legendary", "Mythic"].includes(item.rarity));
      const listings = [];
      const used = new Set();
      const featuredCamry = category === "garage" && !ownedIds.has("2025-toyota-camry-xse") ? VEHICLE_CATALOG.find((item) => item.id === "2025-toyota-camry-xse") : null;
      if (featuredCamry) {
        used.add(featuredCamry.id);
        listings.push(createAssetListing(featuredCamry, false, category));
      }
      const targetCount = category === "garage" ? 10 : 8;
      while (listings.length < targetCount && used.size < commonPool.length + (featuredCamry ? 1 : 0)) {
        const item = commonPool[Math.floor(Math.random() * commonPool.length)];
        if (!item || used.has(item.id)) continue;
        used.add(item.id);
        listings.push(createAssetListing(item, false, category));
      }
      if (initial || Math.random() < 0.38) {
        const rarePool = catalog.filter((item) => ["Rare", "Epic", "Legendary", "Mythic"].includes(item.rarity) && !ownedIds.has(item.id) && !used.has(item.id));
        const item = rarePool[Math.floor(Math.random() * rarePool.length)];
        if (item && !used.has(item.id)) listings.push(createAssetListing(item, true, category));
      }
      market.categories = market.categories || {};
      market.categories[category] = {
        lastRefresh: now,
        listings: listings.sort((a, b) => Number(a.price || 0) - Number(b.price || 0))
      };
      if (category === "garage") {
        market.lastRefresh = now;
        market.listings = market.categories.garage.listings;
      }
    }

    function nextAssetRefreshTime(fromMs = Date.now()) {
      const from = new Date(Number(fromMs || Date.now()));
      const central = centralParts(from);
      const centralOnePmUtc = Date.UTC(central.year, central.month - 1, central.day, 13, 0) - centralOffsetMs(from);
      const refresh = new Date(centralOnePmUtc);
      return from.getTime() < refresh.getTime() ? refresh : new Date(refresh.getTime() + 24 * 60 * 60 * 1000);
    }

    function createAssetListing(vehicle, rareDrop = false, category = "garage") {
      const premium = rareDrop ? 1.08 + Math.random() * 0.22 : 0.88 + Math.random() * 0.22;
      return {
        listingId:`asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        vehicleId:vehicle.id,
        category,
        name:vehicle.name,
        rarity:vehicle.rarity,
        type:vehicle.type,
        location:vehicle.location || "",
        icon:vehicle.icon,
        price:Math.round(vehicle.price * premium),
        resaleRate:vehicle.resaleRate,
        listedAt:Date.now()
      };
    }

    function playerByNameFromList(players, name) {
      return players.find((player) => player.name === name);
    }

    function stackValue(chips) {
      return Number(chips.white || 0) + Number(chips.red || 0) * 5 + Number(chips.blue || 0) * 10 + Number(chips.green || 0) * 25 + Number(chips.black || 0) * 100;
    }

    function bankrollValue(player) {
      if (!player) return 0;
      return Number.isFinite(Number(player.bankroll)) ? Number(player.bankroll) : stackValue(player.chips || blank);
    }

    function setPlayerBankroll(player, amount) {
      const value = Math.max(0, Math.round(Number(amount || 0)));
      player.bankroll = value;
      player.chips = chipSetup(value);
      return value;
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
      return [...state.players].sort((a, b) => netBankroll(b) - netBankroll(a));
    }

    function netBankroll(player) {
      return bankrollValue(player) + Number(player.bankBalance || 0) - Number(player.bankDebt || 0);
    }

    function playerByName(name) {
      return state.players.find((player) => player.name === name);
    }

    function playerById(id) {
      return state.players.find((player) => player.id === id);
    }

    function freshPlayer(player) {
      if (!player) return null;
      return playerById(player.id) || playerByName(player.name);
    }

    function currentProfile() {
      if (firebaseDisabled) {
        const localLink = state.linkages?.["local-test"];
        return {...localProfile, ...(localLink || {})};
      }
      const base = firebaseState.profile || {
        email: firebaseState.user?.email || "",
        displayName: firebaseState.user?.displayName || firebaseState.user?.email?.split("@")[0] || "Player",
        playerName: ""
      };
      const linked = firebaseState.user?.uid ? state.linkages?.[firebaseState.user.uid] : null;
      return {...base, ...(linked || {})};
    }

    function currentPlayer() {
      const profile = currentProfile();
      if (profile.playerName) {
        const linked = playerByName(profile.playerName);
        if (linked) return linked;
      }
      return null;
    }

    function displayNameForPlayer(playerName) {
      const profile = currentProfile();
      if (profile.playerName === playerName && profile.displayName) return profile.displayName;
      return playerName;
    }

    function currentDisplayName() {
      const profile = currentProfile();
      return profile.displayName || currentPlayer()?.name || "Champion";
    }

    function isDarrenAdmin() {
      return currentPlayer()?.name === "Darren";
    }

    function activeRoom() {
      return activeRoomId ? state.onlineRooms[activeRoomId] : null;
    }

    function isRoomHost(room = activeRoom()) {
      return Boolean(room && room.hostKey === currentProfileKey());
    }

    function log(message) {
      state.log.unshift(message);
      state.log = state.log.slice(0, 30);
    }

    function normalizeHistoryItem(item, index = 0) {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        return {
          id: item.id || `event-${item.createdAt || Date.now()}-${index}`,
          type: item.type || "system",
          category: item.category || "System",
          player: item.player || "",
          title: item.title || "Activity",
          description: item.description || "",
          amount: item.amount ?? null,
          amountKind: item.amountKind || "",
          details: item.details && typeof item.details === "object" ? item.details : {},
          createdAt: Number(item.createdAt || Date.now())
        };
      }
      const description = String(item || "Activity");
      const lower = description.toLowerCase();
      const category = lower.includes("slot") ? "Slots"
        : lower.includes("farkle") ? "Farkle"
        : lower.includes("poker") || lower.includes("hold'em") ? "Poker"
        : lower.includes("blackjack") ? "Blackjack"
        : lower.includes("bank") || lower.includes("loan") || lower.includes("debt") ? "Bank"
        : lower.includes("achievement") ? "Achievements"
        : lower.includes("wheel") || lower.includes("scratch") || lower.includes("daily") ? "Dailies"
        : lower.includes("craps") ? "Craps"
        : "System";
      return {
        id:`legacy-${Date.now()}-${index}`,
        type:"legacy",
        category,
        player:"",
        title:category === "System" ? "Activity" : `${category} Activity`,
        description,
        amount:null,
        amountKind:"",
        details:{},
        createdAt:Date.now() - index
      };
    }

    function addHistoryEvent(event, {legacyLog = false} = {}) {
      const normalized = normalizeHistoryItem({...event, id:event.id || `event-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, createdAt:event.createdAt || Date.now()});
      state.history = Array.isArray(state.history) ? state.history : [];
      state.history.unshift(normalized);
      state.history = state.history.slice(0, 250);
      if (legacyLog) log(normalized.description);
      return normalized;
    }

    function addSystemHistory(title, description, details = {}) {
      return addHistoryEvent({
        type:"admin-system",
        category:"System",
        player:currentDisplayName() || "Admin",
        title,
        description,
        details
      });
    }

    function awardCasinoTickets(player, amount, reason) {
      const tickets = Math.max(0, Math.round(Number(amount || 0)));
      if (!player || tickets <= 0) return 0;
      player.casinoTickets = Number(player.casinoTickets || 0) + tickets;
      trackDailyProgress(player.name, "ticketsEarned", tickets);
      addHistoryEvent({
        type:"casino-ticket",
        category:"Dailies",
        player:player.name,
        title:"Casino Ticket Earned",
        description:`${player.name} earned ${tickets} Casino Ticket${tickets === 1 ? "" : "s"} from ${reason}.`,
        amount:tickets,
        amountKind:"ticket",
        details:{reason}
      });
      return tickets;
    }

    function maybeDropCasinoTicket(player, chance, reason) {
      if (!player || Math.random() >= Number(chance || 0)) return 0;
      return awardCasinoTickets(player, 1, reason);
    }

    function unlockAchievement(id, player = "", source = "tracker") {
      const linkedPlayer = currentPlayer();
      if (!linkedPlayer) return false;
      const definition = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id);
      if (!definition || state.unlockedAchievements[id]) return false;
      const owner = player || linkedPlayer.name;
      if (owner !== linkedPlayer.name) return false;
      state.unlockedAchievements[id] = {at: Date.now(), player: owner, source};
      const rewardXP = achievementRewardXP(definition.rarity);
      linkedPlayer.xp += rewardXP;
      addHistoryEvent({
        type:"achievement-unlocked",
        category:"Achievements",
        player:owner,
        title:"Achievement Unlocked",
        description:`${owner} unlocked ${definition.name}.`,
        amount:rewardXP,
        amountKind:"xp",
        details:{achievementId:id, rarity:definition.rarity, requirement:definition.requirement}
      });
      achievementToast(definition, rewardXP);
      return true;
    }

    function achievementRewardXP(rarity) {
      return {Common:10, Uncommon:25, Rare:50, Epic:100, Legendary:250, Mythic:500}[rarity] || 10;
    }

    function achievementToast(definition, rewardXP = 0) {
      if (!definition) return;
      resultToast("Achievement Unlocked", `${definition.name} (+${rewardXP} XP)`);
    }

    function snapshotUpdatedAt(value) {
      return Math.max(0, Number(value?.updatedAt || 0));
    }

    function isIncomingSnapshotOlder(incoming, local = state) {
      const incomingAt = snapshotUpdatedAt(incoming);
      const localAt = snapshotUpdatedAt(local);
      return incomingAt > 0 && localAt > 0 && incomingAt < localAt;
    }

    function isIncomingSnapshotNewer(incoming, local = state) {
      const incomingAt = snapshotUpdatedAt(incoming);
      const localAt = snapshotUpdatedAt(local);
      return incomingAt > 0 && localAt > 0 && incomingAt > localAt;
    }

    function save({cloud = true} = {}) {
      state.updatedAt = Date.now();
      state = normalize(state);
      safeEvaluateAchievementUnlocks();
      localStorage.setItem(localKey, JSON.stringify(state));
      render();
      if (cloud) queueCloudWrite();
    }

    function saveFast(renderFn = null, {cloud = true} = {}) {
      state.updatedAt = Date.now();
      localStorage.setItem(localKey, JSON.stringify(state));
      if (typeof renderFn === "function") renderFn();
      if (cloud) queueCloudWrite();
    }

    function runAchievementSweep({cloud = true, showNoUnlock = false} = {}) {
      state = normalize(state);
      const unlockedCount = safeEvaluateAchievementUnlocks();
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

    function safeEvaluateAchievementUnlocks() {
      try {
        return evaluateAchievementUnlocks();
      } catch (error) {
        console.error("Achievement sweep failed without blocking save.", error);
        toast("Achievement check had an error, but your save still went through.");
        return 0;
      }
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
          const {dbRef, get, set, serverTimestamp} = firebaseState.modules;
          const stateRef = dbRef(firebaseState.db, `${databasePath}/state`);
          const latest = await get(stateRef).catch(() => null);
          const latestValue = latest?.val?.();
          if (isIncomingSnapshotNewer(latestValue, state)) {
            setSync("Newer cloud state exists; local write skipped", false);
            return;
          }
          const latestRooms = latestValue?.onlineRooms;
          await set(dbRef(firebaseState.db, `${databasePath}/state`), {
            ...state,
            onlineRooms: latestRooms && typeof latestRooms === "object" ? latestRooms : state.onlineRooms,
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

    async function refreshRoomFromCloud(roomId) {
      if (!roomId || firebaseDisabled || !firebaseState.ready || !firebaseState.user) return state.onlineRooms?.[roomId] || null;
      const {dbRef, get} = firebaseState.modules;
      const snap = await get(dbRef(firebaseState.db, `${databasePath}/state/onlineRooms/${roomId}`)).catch(() => null);
      const room = snap?.val?.();
      if (room) {
        state.onlineRooms = state.onlineRooms || {};
        state.onlineRooms[roomId] = room;
        localStorage.setItem(localKey, JSON.stringify(state));
        render();
      }
      return room || state.onlineRooms?.[roomId] || null;
    }

    async function saveRoom(room) {
      if (!room?.id) return;
      state.onlineRooms = state.onlineRooms || {};
      state.onlineRooms[room.id] = room;
      state.updatedAt = Date.now();
      localStorage.setItem(localKey, JSON.stringify(state));
      render();
      if (firebaseDisabled || !firebaseState.ready || !firebaseState.user) return;
      const {dbRef, update, serverTimestamp} = firebaseState.modules;
      await update(dbRef(firebaseState.db, `${databasePath}/state`), {
        [`onlineRooms/${room.id}`]: room,
        updatedAt: state.updatedAt,
        updatedAtServer: serverTimestamp(),
        updatedByUid: firebaseState.user.uid,
        updatedByEmail: firebaseState.user.email || ""
      }).catch((error) => {
        console.warn(error);
        toast("Room sync failed. Check Firebase rules and try again.");
      });
    }

    async function clearAllRooms() {
      if (!isDarrenAdmin()) return toast("Only Darren can clear rooms.");
      state.onlineRooms = {};
      activeRoomId = "";
      activeOnlineGame = "";
      addSystemHistory("Rooms Cleared", "All online rooms were cleared by admin.");
      localStorage.setItem(localKey, JSON.stringify(state));
      render();
      if (!firebaseDisabled && firebaseState.ready && firebaseState.user) {
        const {dbRef, update, serverTimestamp} = firebaseState.modules;
        await update(dbRef(firebaseState.db, `${databasePath}/state`), {
          onlineRooms: null,
          updatedAt: Date.now(),
          updatedAtServer: serverTimestamp(),
          updatedByUid: firebaseState.user.uid,
          updatedByEmail: firebaseState.user.email || ""
        }).catch((error) => {
          console.warn(error);
          toast("Room clear failed. Check Firebase rules.");
        });
      }
      toast("All online rooms cleared.");
    }

    function applyRoomsSnapshot(rooms) {
      const nextRooms = rooms && typeof rooms === "object" && !Array.isArray(rooms) ? rooms : {};
      const before = JSON.stringify(state.onlineRooms || {});
      const after = JSON.stringify(nextRooms);
      if (before === after) return false;
      announceNewRooms(nextRooms);
      state.onlineRooms = nextRooms;
      localStorage.setItem(localKey, JSON.stringify(state));
      setSync("Room sync live", true);
      handleActiveRoomClosure();
      render();
      return true;
    }

    function announceNewRooms(nextRooms) {
      const openRooms = Object.values(nextRooms || {}).filter((room) => room?.status === "open");
      if (!roomNoticePrimed) {
        seenOpenRoomIds = new Set(openRooms.map((room) => room.id));
        roomNoticePrimed = true;
        return;
      }
      openRooms.forEach((room) => {
        if (seenOpenRoomIds.has(room.id)) return;
        seenOpenRoomIds.add(room.id);
        const gameName = room.game === "poker" ? "Texas Hold'em" : room.game === "blackjack" ? "Blackjack" : room.game || "Game";
        toast(`${gameName} room opened: ${room.name}`);
      });
      Object.keys(nextRooms || {}).forEach((id) => seenOpenRoomIds.add(id));
    }

    function startRoomPoller() {
      clearInterval(roomPollTimer);
      if (firebaseDisabled || !firebaseState.ready || !firebaseState.user) return;
      const {dbRef, get} = firebaseState.modules;
      const roomsRef = dbRef(firebaseState.db, `${databasePath}/state/onlineRooms`);
      roomPollTimer = setInterval(async () => {
        const snap = await get(roomsRef).catch(() => null);
        if (snap) applyRoomsSnapshot(snap.val() || {});
      }, 3000);
    }

    function setSync(text, on) {
      $("syncText").textContent = text;
      $("syncDot").classList.toggle("on", Boolean(on));
    }

    function fillSelect(id) {
      const element = $(id);
      if (!element) return;
      const current = element.value;
      const players = state.players;
      element.innerHTML = players.map((p) => `<option value="${escapeAttr(p.name)}">${escapeHtml(displayNameForPlayer(p.name))}</option>`).join("");
      if (current && state.players.some((p) => p.name === current)) element.value = current;
    }

    function fillStaticSelects() {
      $("handType").innerHTML = Object.entries(pokerHandXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("blackjackEvent").innerHTML = Object.entries(blackjackXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("unoEvent").innerHTML = Object.entries(unoXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("manualLevel").innerHTML = levels.slice(0, 10).map((row) => `<option value="${row.level}">Level ${row.level}</option>`).join("");
    }

    function stakeModeValues(mode, prefix = "local") {
      const selected = STAKE_MODES[mode] ? mode : "low";
      if (selected !== "custom") return {...STAKE_MODES[selected].values};
      return CHIP_COLORS.reduce((values, color) => {
        const id = `${prefix}Stake${color[0].toUpperCase()}${color.slice(1)}`;
        values[color] = Math.max(0, Number($(id)?.value || STAKE_MODES.low.values[color] || 0));
        return values;
      }, {});
    }

    function chipStackValue(chips, values = STAKE_MODES.low.values) {
      return CHIP_COLORS.reduce((sum, color) => sum + Number(chips?.[color] || 0) * Number(values[color] || 0), 0);
    }

    function chipStackFromPrefix(prefix) {
      return CHIP_COLORS.reduce((chips, color) => {
        const id = `${prefix}${color[0].toUpperCase()}${color.slice(1)}`;
        chips[color] = Math.max(0, Number($(id)?.value || 0));
        return chips;
      }, {});
    }

    function renderStakeValues(prefix = "local") {
      const mode = $(`${prefix}StakeMode`)?.value || "low";
      const values = stakeModeValues(mode, prefix);
      const customPanel = $(`${prefix}CustomStakeValues`);
      if (customPanel) customPanel.hidden = mode !== "custom";
      const target = $(`${prefix}StakeValues`);
      if (!target) return;
      target.innerHTML = CHIP_COLORS.map((color) => `
        <span class="chip-value-pill chip-value-${color}">
          <b>${escapeHtml(CHIP_LABELS[color])}</b>
          <strong>${money(values[color])}</strong>
        </span>
      `).join("");
    }

    function renderLocalSettlementDesk() {
      renderStakeValues("local");
      renderStakeValues("manual");
      const selected = new Set(localSettlement.selectedPlayers || []);
      const picker = $("localSettlementPlayers");
      if (picker) {
        picker.innerHTML = state.players.map((player) => `
          <label class="player-picker-card ${selected.has(player.name) ? "active" : ""}">
            <input type="checkbox" data-action="toggle-local-player" data-player="${escapeAttr(player.name)}" ${selected.has(player.name) ? "checked" : ""} />
            <span class="medal">${playerSymbol(player.name)}</span>
            <span><strong>${escapeHtml(displayNameForPlayer(player.name))}</strong><small>Bankroll ${money(bankrollValue(player))}</small></span>
          </label>
        `).join("");
      }
      const rows = $("localSettlementRows");
      if (rows) {
        rows.innerHTML = localSettlement.selectedPlayers.length
          ? localSettlement.selectedPlayers.map((name) => renderLocalSettlementRow(name)).join("")
          : `<div class="blackjack-status">Select at least one player to create settlement rows.</div>`;
      }
      const submitButton = document.querySelector('[data-action="submit-local-settlement"]');
      if (submitButton) submitButton.disabled = !(localSettlement.reviews || []).length;
      const overrideButton = document.querySelector('[data-action="override-local-imbalance"]');
      if (overrideButton) overrideButton.hidden = true;
    }

    function renderLocalSettlementRow(playerName) {
      const safe = safeKey(playerName);
      return `
        <article class="settlement-player-card" data-settlement-player="${escapeAttr(playerName)}">
          <div class="settlement-card-head">
            <span class="medal">${playerSymbol(playerName)}</span>
            <div><strong>${escapeHtml(displayNameForPlayer(playerName))}</strong><small>Net result only is applied to bankroll</small></div>
          </div>
          <div class="form-grid">
            <div><label for="localBuyIn-${safe}">Buy-In / Ante</label><input id="localBuyIn-${safe}" data-local-field="buyIn" type="number" inputmode="numeric" placeholder="455" /></div>
            <div><label for="localStarting-${safe}">Starting Value Before Blackjack</label><input id="localStarting-${safe}" data-local-field="starting" type="number" inputmode="numeric" placeholder="Optional" /></div>
            <div><label for="localEndingTotal-${safe}">Ending Total After Blackjack</label><input id="localEndingTotal-${safe}" data-local-field="endingTotal" type="number" inputmode="numeric" placeholder="Optional" /></div>
            <div><label for="localOriginalBuyIn-${safe}">Original Night Buy-In</label><input id="localOriginalBuyIn-${safe}" data-local-field="originalBuyIn" type="number" inputmode="numeric" placeholder="Optional" /></div>
          </div>
          <div class="form-grid chip-count-grid">
            ${CHIP_COLORS.map((color) => `<div><label for="local-${safe}-${color}">${escapeHtml(CHIP_LABELS[color])} Chips</label><input id="local-${safe}-${color}" data-chip-color="${color}" type="number" inputmode="numeric" value="0" /></div>`).join("")}
          </div>
          <div class="field-note">Poker/custom uses Ending Chips - Buy-In. Blackjack can use Ending Total - Starting Value for chained sessions.</div>
        </article>
      `;
    }

    function safeKey(value) {
      return String(value || "player").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "player";
    }

    function localRowData(playerName, values) {
      const card = document.querySelector(`[data-settlement-player="${CSS.escape(playerName)}"]`);
      if (!card) return null;
      const field = (name) => Number(card.querySelector(`[data-local-field="${name}"]`)?.value || 0);
      const chips = CHIP_COLORS.reduce((next, color) => {
        next[color] = Math.max(0, Number(card.querySelector(`[data-chip-color="${color}"]`)?.value || 0));
        return next;
      }, {});
      return {
        playerName,
        buyIn: field("buyIn"),
        starting: field("starting"),
        endingTotal: field("endingTotal"),
        originalBuyIn: field("originalBuyIn"),
        chips,
        endingChipValue: chipStackValue(chips, values)
      };
    }

    function calculateLocalSettlement() {
      const gameType = $("localGameType")?.value || "poker";
      const stakeMode = $("localStakeMode")?.value || "low";
      const values = stakeModeValues(stakeMode, "local");
      if (!localSettlement.selectedPlayers.length) return toast("Select at least one player.");
      const reviews = [];
      for (const playerName of localSettlement.selectedPlayers) {
        const player = playerByName(playerName);
        const row = localRowData(playerName, values);
        if (!player || !row) return toast("A selected player row is missing.");
        if ([row.buyIn, row.starting, row.endingTotal, row.originalBuyIn, row.endingChipValue].some((value) => !Number.isFinite(value) || value < 0)) {
          return toast("Numbers cannot be negative or invalid.");
        }
        let sessionResult = row.endingChipValue - row.buyIn;
        let formula = `${money(row.endingChipValue)} ending chips - ${money(row.buyIn)} buy-in`;
        let overallNightResult = null;
        if (gameType === "blackjack" && row.starting > 0 && row.endingTotal > 0) {
          sessionResult = row.endingTotal - row.starting;
          formula = `${money(row.endingTotal)} ending total - ${money(row.starting)} starting total`;
          if (row.originalBuyIn > 0) overallNightResult = row.endingTotal - row.originalBuyIn;
        }
        const oldBankroll = bankrollValue(player);
        reviews.push({
          ...row,
          gameType,
          stakeMode,
          stakeLabel: STAKE_MODES[stakeMode]?.label || "Custom",
          chipValues: values,
          sessionResult,
          overallNightResult,
          oldBankroll,
          newBankroll: oldBankroll + sessionResult,
          lifetimePreview: Number(player.lifetime || 0) + sessionResult,
          formula
        });
      }
      const imbalance = gameType === "poker" ? reviews.reduce((sum, row) => sum + Number(row.sessionResult || 0), 0) : 0;
      localSettlement.reviews = reviews;
      localSettlement.overrideImbalance = false;
      renderLocalSettlementReview(reviews, imbalance);
      toast("Local settlement calculated. Review before submitting.");
    }

    function renderLocalSettlementReview(reviews = localSettlement.reviews || [], imbalance = 0) {
      const target = $("localSettlementReview");
      if (!target) return;
      const gameType = $("localGameType")?.value || reviews[0]?.gameType || "poker";
      const needsOverride = gameType === "poker" && Math.abs(imbalance) > 1 && !localSettlement.overrideImbalance;
      const overrideButton = document.querySelector('[data-action="override-local-imbalance"]');
      if (overrideButton) overrideButton.hidden = !needsOverride;
      const submitButton = document.querySelector('[data-action="submit-local-settlement"]');
      if (submitButton) submitButton.disabled = !reviews.length || needsOverride;
      if (!reviews.length) {
        target.innerHTML = "Choose players, enter buy-ins and chip counts, then calculate.";
        return;
      }
      target.innerHTML = `
        ${needsOverride ? `<div class="settlement-warning">Poker results are ${signedMoney(imbalance)} out of balance. Fix chip counts or click Override Poker Imbalance if this reflects real added/removed money.</div>` : ""}
        <div class="settlement-review-grid">
          ${reviews.map((row) => `
            <article class="settlement-review-card ${row.sessionResult >= 0 ? "win" : "loss"}">
              <h3>${escapeHtml(displayNameForPlayer(row.playerName))}</h3>
              <p>${escapeHtml(row.gameType.toUpperCase())} / ${escapeHtml(row.stakeLabel)}</p>
              <div><span>Buy-In / Ante</span><strong>${money(row.buyIn)}</strong></div>
              <div><span>Ending Chip Value</span><strong>${money(row.endingChipValue)}</strong></div>
              <div><span>Profit/Loss</span><strong class="${row.sessionResult >= 0 ? "money" : "loss"}">${signedMoney(row.sessionResult)}</strong></div>
              ${row.overallNightResult !== null ? `<div><span>Overall Night Result</span><strong class="${row.overallNightResult >= 0 ? "money" : "loss"}">${signedMoney(row.overallNightResult)}</strong></div>` : ""}
              <div><span>Bankroll Preview</span><strong>${money(row.oldBankroll)} → ${money(row.newBankroll)}</strong></div>
              <div><span>Lifetime P/L Preview</span><strong class="${row.lifetimePreview >= 0 ? "money" : "loss"}">${signedMoney(row.lifetimePreview)}</strong></div>
              <small>${escapeHtml(row.formula)}</small>
            </article>
          `).join("")}
        </div>
      `;
    }

    function submitLocalSettlement() {
      const reviews = localSettlement.reviews || [];
      if (!reviews.length) return toast("Calculate a settlement before submitting.");
      reviews.forEach((row) => {
        const player = playerByName(row.playerName);
        if (!player) return;
        adjustPlayerBankroll(player, row.sessionResult);
        player.lifetime = Number(player.lifetime || 0) + Number(row.sessionResult || 0);
        player.chips = chipSetup(Math.max(0, row.endingChipValue));
        player.gamesPlayed = Number(player.gamesPlayed || 0) + 1;
        const stats = player.localStats || {};
        stats.lifetimeLocalGamesPlayed = Number(stats.lifetimeLocalGamesPlayed || 0) + 1;
        stats.lifetimeLocalBuyIns = Number(stats.lifetimeLocalBuyIns || 0) + Number(row.buyIn || 0);
        stats.lifetimeLocalWinnings = Number(stats.lifetimeLocalWinnings || 0) + Math.max(Number(row.sessionResult || 0), 0);
        stats.lifetimeLocalLosses = Number(stats.lifetimeLocalLosses || 0) + Math.abs(Math.min(Number(row.sessionResult || 0), 0));
        stats.lifetimeLocalNet = Number(stats.lifetimeLocalNet || 0) + Number(row.sessionResult || 0);
        const gameKey = row.gameType === "blackjack" ? "blackjack" : row.gameType === "custom" ? "custom" : "poker";
        stats[`${gameKey}GamesPlayed`] = Number(stats[`${gameKey}GamesPlayed`] || 0) + 1;
        stats[`${gameKey}Net`] = Number(stats[`${gameKey}Net`] || 0) + Number(row.sessionResult || 0);
        player.localStats = stats;
        state.gameStats[gameKey] = state.gameStats[gameKey] || {played:0,wins:0,profit:0,biggest:0};
        state.gameStats[gameKey].played = Number(state.gameStats[gameKey].played || 0) + 1;
        state.gameStats[gameKey].profit = Number(state.gameStats[gameKey].profit || 0) + Number(row.sessionResult || 0);
        if (row.sessionResult > 0) state.gameStats[gameKey].wins = Number(state.gameStats[gameKey].wins || 0) + 1;
        addHistoryEvent({
          type:"local-session-settlement",
          category:row.gameType === "blackjack" ? "Blackjack" : row.gameType === "custom" ? "System" : "Poker",
          player:player.name,
          title:"Local Session Settlement",
          description:`${player.name} settled a local ${row.gameType} session for ${signedMoney(row.sessionResult)}.`,
          amount:row.sessionResult,
          details:{gameType:row.gameType, stakeMode:row.stakeMode, buyIn:row.buyIn, endingChipValue:row.endingChipValue, oldBankroll:row.oldBankroll, newBankroll:row.newBankroll, overallNightResult:row.overallNightResult}
        }, {legacyLog:true});
      });
      state.counters.sessionsPlayed = Number(state.counters.sessionsPlayed || 0) + 1;
      localSettlement = {selectedPlayers: [], reviews: [], overrideImbalance: false};
      save();
      toast("Local session settlement submitted to bankrolls.");
    }

    function clearLocalSettlement() {
      localSettlement = {selectedPlayers: [], reviews: [], overrideImbalance: false};
      if ($("localSettlementReview")) $("localSettlementReview").innerHTML = "Choose players, enter buy-ins and chip counts, then calculate.";
      renderLocalSettlementDesk();
      toast("Local settlement desk cleared.");
    }

    function calculateManualChipTool() {
      const values = stakeModeValues($("manualStakeMode")?.value || "low", "manual");
      const chips = chipStackFromPrefix("manual");
      const endingValue = chipStackValue(chips, values);
      const buyIn = Math.max(0, Number($("manualBuyIn")?.value || 0));
      const bet = Math.max(0, Number($("manualBjBet")?.value || 0));
      const sessionResult = endingValue - buyIn;
      const blackjackProfit = bet * 1.5;
      const blackjackReturn = bet + blackjackProfit;
      $("manualChipResult").innerHTML = `
        <div>Ending Value: <strong>${money(endingValue)}</strong></div>
        <div>Buy-In: <strong>${money(buyIn)}</strong></div>
        <div>Profit/Loss: <strong class="${sessionResult >= 0 ? "money" : "loss"}">${signedMoney(sessionResult)}</strong></div>
        ${bet > 0 ? `<div>3:2 Blackjack Profit: <strong class="money">${money(blackjackProfit)}</strong></div><div>Total Return With Original Bet: <strong>${money(blackjackReturn)}</strong></div>` : ""}
      `;
    }

    function clearManualChipTool() {
      ["manualBjBet","manualBuyIn"].forEach((id) => { if ($(id)) $(id).value = ""; });
      ["manualWhite","manualRed","manualBlue","manualGreen","manualBlack"].forEach((id) => { if ($(id)) $(id).value = 0; });
      if ($("manualChipResult")) $("manualChipResult").textContent = "Enter chips or a blackjack bet to calculate.";
    }

    function render() {
      document.body.classList.toggle("auth-locked", !isSignedIn() && !document.body.classList.contains("auth-checking"));
      if (isSignedIn()) maybeAdvanceMarkets();
      handleActiveRoomClosure();
      if (activeView === "admin" && !isDarrenAdmin()) activeView = "players";
      document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
      document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${activeView}View`));
      document.querySelectorAll("[data-game]").forEach((button) => button.classList.toggle("active", button.dataset.game === activeGame));
      document.querySelectorAll("[data-achievement-tab]").forEach((button) => button.classList.toggle("active", button.dataset.achievementTab === activeAchievementTab));
      document.querySelectorAll("[data-blackjack-mode]").forEach((button) => button.classList.toggle("active", button.dataset.blackjackMode === blackjackMode));
      ["manualPlayer","handPlayer","potPlayer","blackjackPlayer","unoPlayer","blackjackMoneyPlayer","transferToPlayer"].forEach(fillSelect);
      fillSelect("profilePlayerName");

      const ranked = rankedPlayers();
      const champion = ranked[0] || state.players[0];
      const linked = currentPlayer();
      $("championName").innerHTML = `${escapeHtml(linked ? currentDisplayName() : displayNameForPlayer(champion?.name || "Champion"))} ${linked ? playerSymbol(linked.name) : (champion ? playerSymbol(champion.name) : "")}`;
      const fxp = familyXP();
      const fl = levelFromXP(fxp);
      $("familyLevel").textContent = fl;
      $("familyXpLabel").textContent = `${fxp.toLocaleString()} / ${nextLevelXP(fxp).toLocaleString()} XP`;
      $("familyXpFill").style.width = `${levelProgress(fxp)}%`;
      $("familyPrestige").textContent = state.players.reduce((sum, p) => sum + Number(p.stars || 0), 0);

      $("crewGrid").innerHTML = ranked.slice(0, 3).map(renderPlayerCard).join("");
      $("allPlayersDetailedBoard").innerHTML = state.players.map(renderDetailedPlayerCard).join("");
      $("leaderboard").innerHTML = ranked.map((p, i) => renderLeaderboardRow(p, i)).join("");
      $("playerAdminBoard").innerHTML = state.players.map((p) => renderAdminPlayerRow(p)).join("");
      document.querySelectorAll(".admin-link").forEach((item) => item.hidden = !isDarrenAdmin());
      if (activeView === "admin") renderLinkageAdminBoard();
      $("recentActivity").innerHTML = (state.log.length ? state.log : ["No activity yet."]).slice(0, 5).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      if (activeView === "history") renderHistoryBoard();
      const unlocked = unlockedAchievementRows();
      $("recentAchievements").innerHTML = unlocked.length
        ? unlocked.slice(0, 3).map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No achievements unlocked yet", "Complete tracked milestones to unlock achievements.", "");
      if (activeView === "achievements") renderAchievementBoards();
      if (activeView === "bank") renderBankDashboard();
      if (activeView === "stocks") renderStockMarket();
      if (activeView === "assets") renderAssets();
      if (activeView === "sessions") renderLocalSettlementDesk();
      if (activeView === "online") renderBlackjackBankroll();
      $("gameGrid").innerHTML = ["poker","blackjack","uno"].map(renderGameCard).join("");
      document.querySelectorAll("[data-game-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.gamePanel === activeGame));
      const room = activeRoom();
      const onlineTilePage = $("onlineTilePage");
      if (onlineTilePage) onlineTilePage.hidden = Boolean(activeOnlineGame || room);
      $("blackjackOnlineArea").hidden = activeOnlineGame !== "blackjack" || Boolean(room);
      $("pokerOnlineArea").hidden = activeOnlineGame !== "poker" || Boolean(room);
      $("slotsOnlineArea").hidden = activeOnlineGame !== "slots" || Boolean(room);
      $("crapsOnlineArea").hidden = activeOnlineGame !== "craps" || Boolean(room);
      $("farkleOnlineArea").hidden = activeOnlineGame !== "farkle" || Boolean(room);
      $("blackjackRoomArea").hidden = !(room && room.game === "blackjack");
      $("pokerRoomArea").hidden = !(room && room.game === "poker");
      $("blackjackSoloPanel").classList.toggle("active", blackjackMode === "solo");
      $("blackjackSoloPanel").hidden = blackjackMode !== "solo";
      $("blackjackMultiPanel").classList.toggle("active", blackjackMode === "multi");
      $("blackjackMultiPanel").hidden = blackjackMode !== "multi";
      if (activeView === "online") {
        renderBlackjackTable();
        renderBlackjackControls();
        renderBlackjackRooms();
        renderPokerRooms();
        renderActiveRoom();
        renderSlots();
        renderCraps();
        renderFarkle();
      }
      if (activeView === "dailies") {
        renderDailyRewards();
        renderLuckyWheel();
      }
      renderSessionOverview();
      if (activeView === "changelog") renderChangelog();
      maybePromptProfileLink();
    }

    function renderHistoryBoard() {
      const items = (state.history || []).map(normalizeHistoryItem).filter((item) => {
        const categoryMatch = historyFilter === "all" || item.category.toLowerCase() === historyFilter;
        const haystack = `${item.player} ${item.category} ${item.title} ${item.description}`.toLowerCase();
        return categoryMatch && (!historySearch || haystack.includes(historySearch));
      });
      const visible = items.slice(0, activityHistoryLimit);
      $("historyBoard").innerHTML = visible.length ? visible.map(renderHistoryEvent).join("") : `<div class="blackjack-status">No activity matches these filters.</div>`;
      const select = $("historyLimit");
      if (select) select.value = String(activityHistoryLimit);
      document.querySelectorAll("[data-history-filter]").forEach((button) => button.classList.toggle("active", button.dataset.historyFilter === historyFilter));
    }

    function renderHistoryEvent(item) {
      const meta = historyCategoryMeta(item.category);
      const amount = item.amount;
      const amountClass = item.amountKind === "xp" || item.amountKind === "ticket" ? "xp" : item.type.includes("achievement") ? "achievement" : Number(amount || 0) < 0 ? "loss" : Number(amount || 0) > 0 ? "win" : "";
      const amountNumber = Number(amount || 0);
      const amountText = amount === null || amount === undefined ? ""
        : item.amountKind === "xp" ? `+${Number(amount).toLocaleString()} XP`
        : item.amountKind === "ticket" ? `${amountNumber > 0 ? "+" : ""}${amountNumber.toLocaleString()} 🎟️`
        : signedMoney(amount);
      const details = Object.entries(item.details || {}).filter(([, value]) => value !== "" && value !== null && value !== undefined).slice(0, 4)
        .map(([key, value]) => `<span><b>${escapeHtml(historyDetailLabel(key))}</b> ${typeof value === "number" && /amount|wager|payout|net|debt|buyIn|cashOut|pot/i.test(key) ? money(value) : escapeHtml(value)}</span>`).join("");
      return `<article class="history-event history-${escapeAttr(meta.key)}">
        <span class="history-icon">${meta.icon}</span>
        <div>
          <div class="history-meta">${escapeHtml(item.category)}${item.player ? ` / ${escapeHtml(item.player)}` : ""}</div>
          <div class="history-title">${escapeHtml(item.title)}</div>
          <div class="history-description">${escapeHtml(item.description)}</div>
          ${details ? `<div class="history-details">${details}</div>` : ""}
        </div>
        <div class="history-side">
          ${amountText ? `<span class="history-amount ${amountClass}">${escapeHtml(amountText)}</span>` : ""}
          <time>${escapeHtml(timeAgo(item.createdAt))}</time>
        </div>
      </article>`;
    }

    function historyCategoryMeta(category) {
      return {
        Poker:{key:"poker",icon:"&#9824;"},
        Blackjack:{key:"blackjack",icon:"&#9827;"},
        Slots:{key:"slots",icon:"&#127920;"},
        Farkle:{key:"farkle",icon:"&#9861;"},
        Craps:{key:"craps",icon:"&#127922;"},
        Bank:{key:"bank",icon:"&#9878;"},
        Stocks:{key:"stocks",icon:"&#128200;"},
        Assets:{key:"assets",icon:"&#128663;"},
        Achievements:{key:"achievements",icon:"&#127942;"},
        Dailies:{key:"dailies",icon:"&#127873;"},
        System:{key:"system",icon:"&#9881;"}
      }[category] || {key:"system",icon:"&#9881;"};
    }

    function historyDetailLabel(key) {
      return String(key).replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
    }

    function renderChangelog() {
      const totalPages = Math.max(1, Math.ceil(changelogEntries.length / changelogRowsPerPage));
      changelogPage = Math.min(Math.max(1, changelogPage), totalPages);
      const start = (changelogPage - 1) * changelogRowsPerPage;
      const visible = changelogEntries.slice(start, start + changelogRowsPerPage);
      $("versionTimeline").innerHTML = visible.length ? visible.map((entry, index) => `
        <details class="changelog-entry" ${changelogPage === 1 && index === 0 ? "open" : ""}>
          <summary>
            <time>${escapeHtml(entry.date)}</time>
            <span><strong>${escapeHtml(entry.version)}</strong><em>${escapeHtml(entry.title)}</em></span>
            <span class="chevron">&#9662;</span>
          </summary>
          <div class="changelog-body">${markdownToHtml(entry.body)}</div>
        </details>
      `).join("") : renderListRow("&#9997;", "No changelog loaded", "changelog.md could not be loaded yet.", "");
      $("versionPagination").innerHTML = changelogEntries.length > changelogRowsPerPage ? `
        <button class="mini-btn" type="button" data-action="changelog-page" data-page="${Math.max(1, changelogPage - 1)}" ${changelogPage === 1 ? "disabled" : ""}>Prev</button>
        <span class="sync-pill">Page ${changelogPage} / ${totalPages}</span>
        <button class="mini-btn" type="button" data-action="changelog-page" data-page="${Math.min(totalPages, changelogPage + 1)}" ${changelogPage === totalPages ? "disabled" : ""}>Next</button>
      ` : "";
    }

    async function loadChangelog() {
      try {
        const response = await fetch("changelog.md", {cache:"no-store"});
        if (!response.ok) throw new Error(`Unable to load changelog.md (${response.status})`);
        changelogEntries = parseChangelog(await response.text());
      } catch (error) {
        console.warn("Changelog load failed.", error);
        changelogEntries = [];
      }
      renderChangelog();
    }

    function parseChangelog(markdown) {
      const entries = [];
      let current = null;
      markdown.split(/\r?\n/).forEach((line) => {
        const heading = line.match(/^##\s+(V[\d.]+)\s+-\s+(.+?)\s+-\s+(.+)$/i);
        if (heading) {
          if (current) entries.push(current);
          current = {version:heading[1], date:heading[2], title:heading[3], body:""};
        } else if (current) {
          current.body += `${line}\n`;
        }
      });
      if (current) entries.push(current);
      return entries;
    }

    function markdownToHtml(markdown) {
      const lines = markdown.trim().split(/\r?\n/);
      let html = "";
      let inList = false;
      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) {
          if (inList) {
            html += "</ul>";
            inList = false;
          }
          return;
        }
        if (trimmed.startsWith("### ")) {
          if (inList) {
            html += "</ul>";
            inList = false;
          }
          html += `<h4>${escapeHtml(trimmed.slice(4))}</h4>`;
        } else if (trimmed.startsWith("- ")) {
          if (!inList) {
            html += "<ul>";
            inList = true;
          }
          html += `<li>${escapeHtml(trimmed.slice(2))}</li>`;
        } else {
          if (inList) {
            html += "</ul>";
            inList = false;
          }
          html += `<p>${escapeHtml(trimmed)}</p>`;
        }
      });
      if (inList) html += "</ul>";
      return html;
    }

    function renderPlayerCard(player, index) {
      const rank = rankedPlayers().findIndex((p) => p.name === player.name) + 1;
      const level = levelFromXP(player.xp);
      const next = nextLevelXP(player.xp);
      const color = colors[(rank - 1) % colors.length];
      const lifetimeClass = player.lifetime >= 0 ? "money" : "loss";
      const bankrollClass = player.bankDebt > 0 ? "loss" : "money";
      const symbol = playerSymbol(player.name);
      return `
        <article class="player-card ${color}">
          <div class="rank-badge">#${rank}</div>
          <div class="player-icon" aria-hidden="true">${symbol}</div>
          <div>
            <div class="player-name"><span>${escapeHtml(displayNameForPlayer(player.name))} ${rank === 1 ? "&#9819;" : ""}</span><span>${symbol}</span></div>
            <div class="stats-list">
              <div class="stat-line"><span>Current Bankroll</span><strong class="${bankrollClass}">${money(bankrollValue(player))}</strong></div>
              <div class="stat-line"><span>Lifetime P/L</span><strong class="${lifetimeClass}">${signedMoney(player.lifetime)}</strong></div>
              <div class="stat-line"><span>Bank Debt</span><strong>${money(player.bankDebt)}</strong></div>
              <div class="stat-line"><span>Casino Tickets</span><strong>🎟️ ${Number(player.casinoTickets || 0)}</strong></div>
            </div>
            <div class="xp-row">
              <span>Level ${level}</span>
              <div class="progress-track"><span class="progress-fill" style="width:${levelProgress(player.xp)}%"></span></div>
              <span>&#9733; ${player.stars}</span>
            </div>
            <div class="chip-text">Achievements: ${achievementCompletionText(player.name)}</div>
            ${achievementShowcaseMarkup(player)}
            <button class="mini-btn asset-mini-btn" type="button" data-action="view-player-assets" data-player-name="${escapeAttr(player.name)}">View Assets (${player.ownedAssets?.length || 0})</button>
            <div class="chip-text" title="${escapeAttr(chipText(player.chips))}">Chips: ${escapeHtml(chipText(player.chips))}</div>
          </div>
        </article>`;
    }

    function renderAdminPlayerRow(player) {
      const protectedPlayer = player.name === "Darren";
      return `<div class="list-row">
        <span class="medal">${playerSymbol(player.name)}</span>
        <div><strong>${escapeHtml(displayNameForPlayer(player.name))}</strong><div style="color:var(--muted);font-size:.82rem;">Player record: ${escapeHtml(player.name)}</div></div>
        <button class="mini-btn danger-mini" type="button" data-player-name="${escapeAttr(player.name)}" data-action="delete-player" ${protectedPlayer ? "disabled" : ""}>Delete</button>
      </div>`;
    }

    function renderDetailedPlayerCard(player) {
      const bankroll = bankrollValue(player);
      const level = levelFromXP(player.xp);
      const achievements = achievementCompletionText(player.name);
      const debtClass = player.bankDebt > 0 ? "loss" : "";
      return `<article class="all-player-card">
        <div class="all-player-hero">
          <span class="medal ${medalClass(player.name)}">${playerSymbol(player.name)}</span>
          <div><strong>${escapeHtml(displayNameForPlayer(player.name))}</strong><span>Level ${level} / Prestige ${player.stars || 0}</span></div>
        </div>
        <div class="all-player-stats">
          <div><span>Bankroll</span><strong class="${player.bankDebt > 0 ? "loss" : "money"}">${money(bankroll)}</strong></div>
          <div><span>Bank</span><strong>${money(player.bankBalance || 0)}</strong></div>
          <div><span>Lifetime P/L</span><strong class="${player.lifetime >= 0 ? "money" : "loss"}">${signedMoney(player.lifetime)}</strong></div>
          <div><span>Bank Debt</span><strong class="${debtClass}">${money(player.bankDebt || 0)}</strong></div>
          <div><span>Tickets</span><strong>🎟️ ${Number(player.casinoTickets || 0)}</strong></div>
          <div><span>Achievements</span><strong>${achievements}</strong></div>
          <div><span>XP</span><strong>${Number(player.xp || 0).toLocaleString()}</strong></div>
        </div>
        ${achievementShowcaseMarkup(player)}
        <button class="mini-btn asset-mini-btn" type="button" data-action="view-player-assets" data-player-name="${escapeAttr(player.name)}">View Owned Assets (${player.ownedAssets?.length || 0})</button>
      </article>`;
    }

    function renderLeaderboardRow(player, index) {
      const net = netBankroll(player);
      const maxNet = Math.max(1, ...state.players.map((candidate) => Math.max(0, netBankroll(candidate))));
      const width = Math.max(4, Math.round(Math.max(0, net) / maxNet * 100));
      const debtText = player.bankDebt > 0 ? `Debt ${money(player.bankDebt)}` : "No debt";
      const rankTone = index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : "standard";
      return `<article class="leaderboard-row leaderboard-${rankTone}">
        <div class="leaderboard-rank"><span>#${index + 1}</span></div>
        <div class="leaderboard-profile">
          <strong>${escapeHtml(displayNameForPlayer(player.name))}</strong>
          <span>Level ${levelFromXP(player.xp)} • ${achievementCompletionText(player.name)} achievements</span>
          ${achievementShowcaseMarkup(player)}
        </div>
        <div class="leaderboard-bar"><span style="width:${width}%"></span></div>
        <div class="leaderboard-money">
          <div><span>Net Worth</span><strong>${signedMoney(net)}</strong></div>
          <div><span>Lifetime</span><strong class="${player.lifetime >= 0 ? "money" : "loss"}">${signedMoney(player.lifetime)}</strong></div>
          <div><span>Status</span><strong>${escapeHtml(debtText)}</strong></div>
        </div>
      </article>`;
    }

    function renderPlayerSummaryRow(player) {
      return renderListRow(playerSymbol(player.name), displayNameForPlayer(player.name), `Bankroll ${money(bankrollValue(player))} / Debt ${money(player.bankDebt)}`, `Net ${signedMoney(netBankroll(player))}`);
    }

    function renderDebtRow(player) {
      const value = player.bankDebt > 0 ? `<span class="loss">${money(player.bankDebt)}</span>` : money(0);
      return `<div class="list-row"><span class="medal medal-diamond">⚖</span><div><strong>${escapeHtml(displayNameForPlayer(player.name))}</strong><div style="color:var(--muted);font-size:.82rem;">Net ${signedMoney(netBankroll(player))} / Lifetime ${signedMoney(player.lifetime)}</div></div><strong>${value}</strong></div>`;
    }

    function renderLinkageAdminBoard() {
      const entries = Object.entries(state.linkages || {});
      $("linkageAdminBoard").innerHTML = entries.length
        ? entries.map(([key, link]) => `<div class="list-row linkage-row"><span class="medal medal-crown">⚙</span><div><strong>${escapeHtml(link.email || link.displayName || key)}</strong><div style="color:var(--muted);font-size:.82rem;">Linked to ${escapeHtml(link.playerName || "none")} / Display ${escapeHtml(link.displayName || "")}</div><select data-link-select="${escapeAttr(key)}">${state.players.map((p) => `<option value="${escapeAttr(p.name)}" ${p.name === link.playerName ? "selected" : ""}>${escapeHtml(p.name)}</option>`).join("")}</select></div><div class="linkage-actions"><button class="mini-btn" type="button" data-link-key="${escapeAttr(key)}" data-action="set-linkage">Save Link</button><button class="mini-btn" type="button" data-link-key="${escapeAttr(key)}" data-action="clear-linkage">Clear Link</button></div></div>`).join("")
        : renderListRow("⚙", "No linked accounts saved yet", "Users appear here after saving profile settings.", "");
    }

    function unlockedAchievementRows() {
      const linkedName = currentPlayer()?.name || "";
      return Object.entries(state.unlockedAchievements || {})
        .map(([id, unlock]) => ({definition: ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id), unlock}))
        .filter((item) => item.definition)
        .filter((item) => !linkedName || item.unlock.player === linkedName)
        .sort((a, b) => Number(b.unlock.at || 0) - Number(a.unlock.at || 0));
    }

    function renderAchievementRow(definition, unlock) {
      const isUnlocked = Boolean(unlock);
      const concealed = shouldConcealAchievement(definition, isUnlocked);
      const title = concealed ? "???" : definition.name;
      const requirement = concealed ? "Hidden Achievement. Unlock condition unknown." : definition.requirement;
      const progress = isUnlocked ? {text:`Unlocked ${timeAgo(unlock.at || Date.now())}`, value:100} : achievementProgressData(definition);
      const player = currentPlayer();
      const showcased = Boolean(player?.favoriteAchievements?.includes(definition.id));
      return `<article class="achievement-row rarity-${definition.rarity.toLowerCase()} ${isUnlocked ? "unlocked" : "locked"}">
        <span class="achievement-rarity">${rarityIcon(definition.rarity)}</span>
        <div class="achievement-copy">
          <div class="achievement-title-line"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(definition.category)}</span></div>
          <p>${escapeHtml(requirement)}</p>
          <div class="achievement-progress"><span style="width:${progress.value}%"></span></div>
          <small>${escapeHtml(progress.text)}</small>
        </div>
        <div class="achievement-row-side">
          <span class="rarity-label">${escapeHtml(definition.rarity)}</span>
          ${isUnlocked ? `<button class="mini-btn ${showcased ? "active" : ""}" type="button" data-action="toggle-achievement-showcase" data-achievement-id="${escapeAttr(definition.id)}">${showcased ? "Pinned" : "Showcase"}</button>` : ""}
        </div>
      </article>`;
    }

    function renderAchievementBoards() {
      const unlocked = unlockedAchievementRows();
      const linkedName = currentPlayer()?.name || "";
      const linkedUnlockedIds = new Set(Object.entries(state.unlockedAchievements || {})
        .filter(([, unlock]) => linkedName && unlock.player === linkedName)
        .map(([id]) => id));
      const matches = (definition) => {
        const category = String(definition.category || "").toLowerCase();
        const categoryMatch = achievementCategory === "all"
          || category.includes(achievementCategory)
          || (achievementCategory === "rpg" && /activity|family|debt|banking/i.test(category))
          || (achievementCategory === "dailies" && /daily/i.test(category));
        const searchMatch = !achievementSearch || `${definition.name} ${definition.requirement} ${definition.category}`.toLowerCase().includes(achievementSearch);
        return categoryMatch && searchMatch;
      };
      const sorter = (a, b) => {
        const definitionA = a.definition || a;
        const definitionB = b.definition || b;
        const unlockA = a.unlock || null;
        const unlockB = b.unlock || null;
        const rarityRank = {Common:1, Uncommon:2, Rare:3, Epic:4, Legendary:5, Mythic:6};
        if (achievementSort === "newest") return Number(unlockB?.at || 0) - Number(unlockA?.at || 0);
        if (achievementSort === "oldest") return Number(unlockA?.at || Infinity) - Number(unlockB?.at || Infinity);
        if (achievementSort === "progress") return achievementProgressData(definitionB).value - achievementProgressData(definitionA).value;
        if (achievementSort === "rarity") return rarityRank[definitionB.rarity] - rarityRank[definitionA.rarity];
        if (achievementSort === "alphabetical") return definitionA.name.localeCompare(definitionB.name);
        return 0;
      };
      const filteredUnlocked = unlocked.filter((item) => matches(item.definition)).sort(sorter);
      const locked = ACHIEVEMENT_DEFINITIONS.filter((definition) => !linkedUnlockedIds.has(definition.id) && matches(definition)).sort(sorter);
      const combined = [
        ...filteredUnlocked.map((item) => ({...item, unlocked:true})),
        ...locked.map((definition) => ({definition, unlock:null, unlocked:false}))
      ];
      if (achievementSort === "locked") combined.sort((a, b) => Number(a.unlocked) - Number(b.unlocked));
      if (achievementSort === "unlocked") combined.sort((a, b) => Number(b.unlocked) - Number(a.unlocked) || Number(b.unlock?.at || 0) - Number(a.unlock?.at || 0));
      $("achievementUnlockedBoard").hidden = activeAchievementTab !== "unlocked";
      $("achievementLockedBoard").hidden = activeAchievementTab !== "locked";
      $("achievementRecentBoard").hidden = activeAchievementTab !== "recent";
      $("achievementUnlockedBoard").innerHTML = filteredUnlocked.length
        ? filteredUnlocked.map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No achievements unlocked yet", "Earn XP, record pots, issue loans, and play sessions to unlock achievements.", "");
      $("achievementLockedBoard").innerHTML = locked.length
        ? locked.map((definition) => renderAchievementRow(definition, null)).join("")
        : renderListRow("&#9733;", "Everything unlocked", "The family has cleared the board.", "");
      $("achievementRecentBoard").innerHTML = filteredUnlocked.length
        ? filteredUnlocked.slice(0, 12).map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No recent unlocks", "New achievements will appear here.", "");
      renderAchievementSummary(combined);
      document.querySelectorAll("[data-achievement-category]").forEach((button) => button.classList.toggle("active", button.dataset.achievementCategory === achievementCategory));
    }

    function shouldConcealAchievement(definition, isUnlocked) {
      if (isUnlocked) return false;
      return definition.hidden;
    }

    function achievementShowcaseMarkup(player) {
      const ids = Array.isArray(player?.favoriteAchievements) ? player.favoriteAchievements : [];
      const definitions = ids.map((id) => ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id)).filter(Boolean);
      return definitions.length ? `<div class="achievement-showcase">${definitions.map((definition) => `<span title="${escapeAttr(definition.name)}">${rarityIcon(definition.rarity)} ${escapeHtml(definition.name)}</span>`).join("")}</div>` : "";
    }

    function renderAchievementSummary() {
      const unlocked = unlockedAchievementRows().map((item) => ({...item, unlocked:true}));
      const unlockedIds = new Set(unlocked.map((item) => item.definition.id));
      const items = [
        ...unlocked,
        ...ACHIEVEMENT_DEFINITIONS.filter((definition) => !unlockedIds.has(definition.id)).map((definition) => ({definition, unlock:null, unlocked:false}))
      ];
      const total = ACHIEVEMENT_DEFINITIONS.length;
      const completion = Math.round(unlocked.length / Math.max(1, total) * 100);
      const rarityOrder = ["Common","Uncommon","Rare","Epic","Legendary","Mythic"];
      const rarityRank = Object.fromEntries(rarityOrder.map((rarity, index) => [rarity, index]));
      const highest = unlocked.map((item) => item.definition.rarity).sort((a, b) => rarityRank[b] - rarityRank[a])[0] || "None";
      const recent = unlocked.sort((a, b) => Number(b.unlock?.at || 0) - Number(a.unlock?.at || 0))[0];
      const closest = items.filter((item) => !item.unlocked).sort((a, b) => achievementProgressData(b.definition).value - achievementProgressData(a.definition).value)[0];
      const rarityBreakdown = rarityOrder.map((rarity) => {
        const rarityTotal = ACHIEVEMENT_DEFINITIONS.filter((definition) => definition.rarity === rarity).length;
        const rarityUnlocked = unlocked.filter((item) => item.definition.rarity === rarity).length;
        return `<span>${rarityIcon(rarity)} ${escapeHtml(rarity)} <b>${rarityUnlocked}/${rarityTotal}</b></span>`;
      }).join("");
      $("achievementSummary").innerHTML = `
        <div class="achievement-completion"><strong>${unlocked.length} / ${total}</strong><span>Unlocked</span><b>${completion}%</b></div>
        <div class="achievement-quick-stats">
          <span>Highest rarity <b>${escapeHtml(highest)}</b></span>
          <span>Recent unlock <b>${escapeHtml(recent?.definition.name || "None")}</b></span>
          <span>Closest <b>${escapeHtml(closest?.definition.name || "All complete")} ${closest ? `${achievementProgressData(closest.definition).value}%` : ""}</b></span>
        </div>
        <div class="achievement-rarity-breakdown">${rarityBreakdown}</div>`;
    }

    function renderBankDashboard() {
      const player = currentPlayer();
      if (!player) {
        $("bankSummaryGrid").innerHTML = `<div class="blackjack-status">Link your profile to use banking and loans.</div>`;
        $("loanPlayerCard").innerHTML = `<div class="blackjack-status">No linked player.</div>`;
        $("transferFromPlayer").textContent = "No linked player";
        $("bankInvestmentSnapshot").innerHTML = `<div class="blackjack-status">Link your profile to see investments.</div>`;
        return;
      }
      const bankroll = bankrollValue(player);
      const banked = Number(player.bankBalance || 0);
      const debt = Number(player.bankDebt || 0);
      const netWorth = bankroll + banked - debt;
      $("bankSummaryGrid").innerHTML = [
        ["bankroll","&#128179;","Bankroll",money(bankroll),"Available to play"],
        ["safe","&#9878;","Bank",money(banked),"Stored balance"],
        ["lifetime","&#8599;","Lifetime Profit / Loss",signedMoney(player.lifetime),"All time net"],
        ["debt","&#9888;","Bank Debt",money(debt),"Outstanding loans"],
        ["worth","&#9670;","Net Worth",signedMoney(netWorth),"Bankroll + Bank - Debt"],
        ["vault","&#128142;","Casino Vault",money(state.casinoVault || 0),"Lifetime house earnings"]
      ].map(([tone, icon, label, value, note]) => `<article class="bank-summary-card ${tone}"><span class="bank-summary-icon">${icon}</span><div><span>${label}</span><strong>${value}</strong><small>${note}</small></div></article>`).join("");
      $("transferFromPlayer").innerHTML = `<strong>${escapeHtml(currentDisplayName())}</strong><span>${money(bankroll)} available</span>`;
      const transferSelect = $("transferToPlayer");
      const currentTransfer = transferSelect.value;
      transferSelect.innerHTML = state.players.filter((candidate) => candidate.id !== player.id).map((candidate) => `<option value="${escapeAttr(candidate.name)}">${escapeHtml(displayNameForPlayer(candidate.name))} - ${money(bankrollValue(candidate))}</option>`).join("");
      if ([...transferSelect.options].some((option) => option.value === currentTransfer)) transferSelect.value = currentTransfer;
      $("loanPlayerCard").innerHTML = `<div class="loan-player-identity"><span class="medal ${medalClass(player.name)}">${playerSymbol(player.name)}</span><div><strong>${escapeHtml(currentDisplayName())}</strong><span>Bankroll ${money(bankroll)} / Debt ${money(debt)}</span></div></div><span class="debt-status ${debt > 0 ? "has-debt" : ""}">${debt > 0 ? `${money(debt)} owed` : "No debt"}</span>`;
      const maxWorth = Math.max(1, ...state.players.map((candidate) => Math.max(0, netBankroll(candidate))));
      $("familyWealthRanking").innerHTML = rankedPlayers().map((candidate, index) => {
        const worth = netBankroll(candidate);
        const width = Math.max(3, Math.round(Math.max(0, worth) / maxWorth * 100));
        return `<div class="wealth-row"><span class="wealth-rank">${index + 1}</span><strong>${escapeHtml(displayNameForPlayer(candidate.name))}</strong><div class="wealth-bar"><span style="width:${width}%"></span></div><b>${signedMoney(worth)}</b></div>`;
      }).join("");
      const loanEvents = (state.history || []).filter((event) => event.category === "Bank" && /loan|debt/i.test(`${event.type} ${event.title} ${event.description}`)).slice(0, 5);
      $("loanActivity").innerHTML = loanEvents.length ? loanEvents.map(renderHistoryEvent).join("") : `<div class="blackjack-status">No recent loan activity.</div>`;
      $("bankInvestmentSnapshot").innerHTML = renderInvestmentSnapshot(player);
    }

    function portfolioValue(player) {
      return Object.entries(player?.portfolio || {}).reduce((sum, [symbol, shares]) => {
        const stock = state.stockMarket?.companies?.[symbol];
        return sum + Number(shares || 0) * Number(stock?.price || 0);
      }, 0);
    }

    function portfolioCost(player) {
      return Object.entries(player?.portfolio || {}).reduce((sum, [symbol, shares]) => {
        const stored = Number(player?.portfolioCost?.[symbol] || 0);
        if (stored > 0) return sum + stored;
        const stock = state.stockMarket?.companies?.[symbol];
        return sum + Number(shares || 0) * Number(stock?.previous || stock?.price || 0);
      }, 0);
    }

    function assetValue(player) {
      return (player?.ownedAssets || []).reduce((sum, asset) => sum + Math.round(Number(asset.pricePaid || 0) * Number(asset.resaleRate || 0.7)), 0);
    }

    function checkStockAchievements(player) {
      if (!player) return;
      const holdingCount = Object.values(player.portfolio || {}).filter((shares) => Number(shares || 0) > 0).length;
      const totalShares = Object.values(player.portfolio || {}).reduce((sum, shares) => sum + Number(shares || 0), 0);
      const value = portfolioValue(player);
      const cost = portfolioCost(player);
      const gainPercent = cost > 0 ? (value - cost) / cost * 100 : 0;
      if (totalShares > 0) unlockAchievement("stock-first-buy", player.name);
      if (totalShares >= 100) unlockAchievement("stock-100-shares", player.name);
      if (holdingCount >= 5) unlockAchievement("stock-diversified", player.name);
      if (value >= 1000) unlockAchievement("stock-portfolio-1000", player.name);
      if (value >= 10000) unlockAchievement("stock-portfolio-10000", player.name);
      if (value >= 100000) unlockAchievement("stock-portfolio-100000", player.name);
      if (gainPercent >= 25) unlockAchievement("stock-gain-25", player.name);
      if (gainPercent >= 50) unlockAchievement("stock-gain-50", player.name);
    }

    function checkAssetAchievements(player) {
      if (!player) return;
      const assets = player.ownedAssets || [];
      const rarityRank = {Starter:0, Common:1, Uncommon:2, Rare:3, Epic:4, Legendary:5, Mythic:6};
      if (assets.length > 0) unlockAchievement("asset-first-car", player.name);
      if (assets.length >= 5) unlockAchievement("asset-garage-5", player.name);
      if (assets.length >= 10) unlockAchievement("asset-garage-10", player.name);
      if (assets.some((asset) => Number(rarityRank[asset.rarity] || 0) >= rarityRank.Rare)) unlockAchievement("asset-rare-vehicle", player.name);
      if (assets.some((asset) => asset.rarity === "Mythic" && /hypercar/i.test(String(asset.type || "")))) unlockAchievement("asset-hypercar", player.name);
      if (assetValue(player) >= 1000000) unlockAchievement("asset-million-garage", player.name);
    }

    function renderInvestmentSnapshot(player) {
      const stocks = portfolioValue(player);
      const assets = assetValue(player);
      return [
        renderListRow("📈", "Stock Portfolio", "Current market value", money(stocks)),
        renderListRow("🚗", "Owned Assets", `${player.ownedAssets?.length || 0} acquired`, money(assets)),
        renderListRow("🎟️", "Casino Tickets", "Wheel and scratch-off passes", Number(player.casinoTickets || 0))
      ].join("");
    }

    function renderStockMarket() {
      const player = currentPlayer();
      const market = state.stockMarket;
      if (!market) return;
      const portfolio = player ? portfolioValue(player) : 0;
      const cost = player ? portfolioCost(player) : 0;
      const gain = portfolio - cost;
      $("stockSummaryGrid").innerHTML = [
        ["bankroll","💵","Bankroll",player ? money(bankrollValue(player)) : "Link profile","Cash available"],
        ["lifetime","📈","Portfolio",money(portfolio),"Current value"],
        ["safe","📊","Unrealized P/L",signedMoney(gain),cost > 0 ? `${gain >= 0 ? "Up" : "Down"} ${Math.abs(gain / cost * 100).toFixed(1)}%` : "No positions"],
        ["worth","⏱️","Next Pulse",`<span id="stockNextPulseValue">${marketCountdown(market.nextTick)}</span>`,"LCN/BAWSAQ 30-45s"]
      ].map(([tone, icon, label, value, note]) => `<article class="bank-summary-card ${tone}"><span class="bank-summary-icon">${icon}</span><div><span>${label}</span><strong>${value}</strong><small>${note}</small></div></article>`).join("");
      if ($("marketNewsBanner")) $("marketNewsBanner").innerHTML = `<span class="market-news-icon">📰</span><div><span>Market News</span><strong>${escapeHtml(market.news?.[0] || "Quiet trading day across LCN and BAWSAQ.")}</strong><small>${isStockBusinessHours() ? "Business hours: heavier swings, stronger sector reactions, faster volatility." : "After hours: lighter liquidity, but shocks can still move a favorite stock."}</small></div>`;
      $("marketClock").textContent = `Next ${marketCountdown(market.nextTick)} • ${isStockBusinessHours() ? "8A-4P CT active" : "after hours"}`;
      renderStockFilters();
      const currentSymbol = $("stockSymbol")?.value;
      $("stockSymbol").innerHTML = Object.values(market.companies).map((stock) => `<option value="${stock.symbol}">${stock.symbol} - ${escapeHtml(stock.name)} (${money(stock.price)})</option>`).join("");
      if (currentSymbol && market.companies[currentSymbol]) $("stockSymbol").value = currentSymbol;
      const stocks = filteredStocks();
      $("stockMarketBoard").innerHTML = stocks.length ? stocks.map(renderStockCard).join("") : `<div class="blackjack-status">No stocks match those filters.</div>`;
      $("portfolioBoard").innerHTML = player ? renderPortfolioRows(player) : `<div class="blackjack-status">Link your profile to trade.</div>`;
      updateTradePreview();
      updateStockCountdownDisplay();
    }

    function renderStockFilters() {
      const networkSelect = $("stockNetworkFilter");
      const sectorSelect = $("stockSectorFilter");
      if (!networkSelect || !sectorSelect) return;
      networkSelect.value = stockNetworkFilter;
      const currentSector = stockSectorFilter;
      const sectors = [...new Set(Object.values(state.stockMarket?.companies || {}).map((stock) => stock.sector).filter(Boolean))].sort();
      const sectorHtml = [`<option value="all">All Sectors</option>`, ...sectors.map((sector) => `<option value="${escapeAttr(sector)}">${escapeHtml(sector)}</option>`)].join("");
      if (sectorSelect.innerHTML !== sectorHtml) sectorSelect.innerHTML = sectorHtml;
      sectorSelect.value = sectors.includes(currentSector) ? currentSector : "all";
      stockSectorFilter = sectorSelect.value;
    }

    function filteredStocks() {
      return Object.values(state.stockMarket?.companies || {}).filter((stock) => {
        const networkOk = stockNetworkFilter === "all" || stock.network === stockNetworkFilter;
        const sectorOk = stockSectorFilter === "all" || stock.sector === stockSectorFilter;
        return networkOk && sectorOk;
      });
    }

    function updateStockCountdownDisplay() {
      const market = state.stockMarket;
      if (!market) return;
      const countdown = marketCountdown(market.nextTick);
      if ($("stockNextPulseValue")) $("stockNextPulseValue").textContent = countdown;
      if ($("marketClock")) $("marketClock").textContent = `Next ${countdown} • ${isStockBusinessHours() ? "8A-4P CT active" : "after hours"}`;
    }

    function renderStockCard(stock) {
      const trendClass = Number(stock.trend || 0) >= 0 ? "money" : "loss";
      const movement = Number(stock.price || 0) - Number(stock.previous || stock.price || 0);
      return `<article class="market-card ${trendClass === "money" ? "stock-up" : "stock-down"}">
        <div><strong>${escapeHtml(stock.symbol)} • ${escapeHtml(stock.network || "LCN")}</strong><span>${escapeHtml(stock.sector)}</span></div>
        <h3>${escapeHtml(stock.name)}</h3>
        <div class="market-price">${money(stock.price)}</div>
        <p class="${trendClass}">${Number(stock.trend || 0) >= 0 ? "+" : ""}${Number(stock.trend || 0).toFixed(2)}% (${signedMoney(movement)})</p>
        <div class="stock-range"><span>Low ${money(stock.recordedLow || stock.price)}</span><span>High ${money(stock.recordedHigh || stock.price)}</span></div>
        ${stock.event ? `<small>${escapeHtml(stock.event)}</small>` : ""}
      </article>`;
    }

    function renderPortfolioRows(player) {
      const entries = Object.entries(player.portfolio || {}).filter(([, shares]) => Number(shares || 0) > 0);
      return entries.length ? entries.map(([symbol, shares]) => {
        const stock = state.stockMarket.companies[symbol];
        const value = Number(shares) * Number(stock?.price || 0);
        const cost = Number(player.portfolioCost?.[symbol] || 0);
        const gain = value - cost;
        const avgBuy = Number(shares) > 0 && cost > 0 ? cost / Number(shares) : 0;
        const sellPrice = Number(stock?.price || 0);
        const gainText = cost > 0 ? `P/L ${signedMoney(gain)} (${gain >= 0 ? "+" : ""}${(gain / cost * 100).toFixed(1)}%)` : "P/L tracking starts after a new buy";
        return renderListRow(symbol, stock?.name || symbol, `${shares} share${Number(shares) === 1 ? "" : "s"} • Bought @ ${money(avgBuy)} • Sell @ ${money(sellPrice)} • ${gainText}`, money(value));
      }).join("") : `<div class="blackjack-status">No stock holdings yet.</div>`;
    }

    function marketCountdown(target) {
      const ms = Math.max(0, Number(target || Date.now()) - Date.now());
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor((ms % 86400000) / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      if (days > 0) return `${days}d ${hours}h`;
      if (hours > 0) return `${hours}h ${String(minutes).padStart(2, "0")}m`;
      return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
    }

    function updateTradePreview() {
      const stock = state.stockMarket?.companies?.[$("stockSymbol")?.value];
      const shares = Math.max(1, Math.round(Number($("stockShares")?.value || 1)));
      if ($("tradePreview")) $("tradePreview").textContent = stock ? `${shares} share(s) of ${stock.name}: ${money(shares * stock.price)}` : "Pick a stock and shares.";
    }

    function renderAssets() {
      const player = currentPlayer();
      const market = state.assetMarket;
      if (!market) return;
      removeOwnedAssetListings(market, state.players);
      document.querySelectorAll("[data-asset-category]").forEach((button) => button.classList.toggle("active", button.dataset.assetCategory === activeAssetCategory));
      if (!ASSET_CATALOGS[activeAssetCategory]) {
        const label = ASSET_CATEGORY_LABELS[activeAssetCategory] || "Assets";
        $("assetCategoryPanels").innerHTML = `<article class="panel panel-pad asset-coming-soon">
          <div class="asset-showroom-badge">Coming Soon</div>
          <h3>${escapeHtml(label)}</h3>
          <p>This category is staged for the next asset expansion. Garage vehicles, aircraft, and boats are live now; ${escapeHtml(label.toLowerCase())} will plug into the same buy, flex, and sell system later.</p>
        </article>`;
        return;
      }
      const categoryMarket = activeAssetMarket();
      if (!categoryMarket.listings?.length) refreshAssetCategoryMarket(market, activeAssetCategory, true);
      const activeMarket = activeAssetMarket();
      const marketTitle = ASSET_MARKET_TITLES[activeAssetCategory] || "Asset Market";
      const ownedTitle = {garage:"Your Garage", properties:"Your Portfolio", gemstones:"Your Gem Vault", airplanes:"Your Hangar", boats:"Your Marina"}[activeAssetCategory] || "Your Assets";
      $("assetCategoryPanels").innerHTML = `<article class="panel panel-pad asset-market-panel">
        <div class="section-title"><span>${escapeHtml(marketTitle)}</span><span id="assetMarketClock" class="sync-pill">Refreshing soon</span></div>
        <div id="assetMarketBoard" class="asset-grid"></div>
      </article>
      <aside class="stock-side">
        <article class="panel panel-pad owned-garage-panel">
          <div class="section-title"><span>${escapeHtml(ownedTitle)}</span></div>
          <div id="ownedAssetsBoard" class="leaderboard-list"></div>
        </article>
      </aside>`;
      $("assetMarketClock").textContent = `Refresh ${marketCountdown(nextAssetRefreshTime(Number(activeMarket.lastRefresh || 0)).getTime())}`;
      $("assetMarketBoard").innerHTML = activeMarket.listings.slice().sort((a, b) => Number(a.price || 0) - Number(b.price || 0)).map(renderAssetListing).join("");
      $("ownedAssetsBoard").innerHTML = player ? renderOwnedAssets(player, true, activeAssetCategory) : `<div class="blackjack-status">Link your profile to buy assets.</div>`;
    }

    function renderAssetListing(listing) {
      return `<article class="asset-card asset-listing-card rarity-${String(listing.rarity).toLowerCase()}">
        <div class="asset-card-copy">
          <span class="asset-kicker">${escapeHtml(listing.rarity)}${listing.type ? ` • ${escapeHtml(listing.type)}` : ""}</span>
          <h3>${escapeHtml(listing.name)}</h3>
          ${listing.location ? `<p class="asset-location">${escapeHtml(listing.location)}</p>` : ""}
          <p class="asset-msrp"><span>MSRP</span><strong>${money(listing.price)}</strong></p>
        </div>
        <button class="mini-btn asset-buy-btn" type="button" data-action="buy-asset" data-listing-id="${escapeAttr(listing.listingId)}">Buy</button>
      </article>`;
    }

    function renderOwnedAssets(player, includeSell = false, category = "") {
      const assets = (player.ownedAssets || []).filter((asset) => !category || (asset.category || "garage") === category);
      return assets.length ? assets.map((asset) => `<article class="asset-card owned">
        <div class="asset-card-copy">
          <span class="asset-kicker">${escapeHtml(asset.rarity || "Owned")}${asset.type ? ` • ${escapeHtml(asset.type)}` : ""}</span>
          <h3>${escapeHtml(asset.name)}</h3>
          ${asset.location ? `<p class="asset-location">${escapeHtml(asset.location)}</p>` : ""}
          <p>Paid ${money(asset.pricePaid)} / sell value ${money(Math.round(Number(asset.pricePaid || 0) * Number(asset.resaleRate || 0.7)))}</p>
        </div>
        ${includeSell ? `<button class="mini-btn asset-buy-btn" type="button" data-action="sell-asset" data-asset-id="${escapeAttr(asset.assetId)}">Sell</button>` : ""}
      </article>`).join("") : `<div class="blackjack-status">No owned assets yet.</div>`;
    }

    function buyStock() {
      const player = currentPlayer();
      const symbol = $("stockSymbol").value;
      const stock = state.stockMarket.companies[symbol];
      const shares = Math.max(1, Math.round(Number($("stockShares").value || 1)));
      const cost = Math.round(shares * Number(stock?.price || 0));
      if (!player || !stock) return toast("Link your profile and choose a stock.");
      if (bankrollValue(player) < cost) return toast(`You need ${money(cost)} bankroll to buy those shares.`);
      adjustPlayerBankroll(player, -cost);
      player.portfolioCost = player.portfolioCost || {};
      player.portfolio[symbol] = Number(player.portfolio[symbol] || 0) + shares;
      player.portfolioCost[symbol] = Number(player.portfolioCost[symbol] || 0) + cost;
      trackDailyProgress(player.name, "stockSharesBought", shares);
      checkStockAchievements(player);
      addHistoryEvent({
        type:"stock-buy",
        category:"Stocks",
        player:player.name,
        title:"Stock Purchase",
        description:`${player.name} bought ${shares} share${shares === 1 ? "" : "s"} of ${stock.name}.`,
        amount:-cost,
        details:{symbol, shares, price:stock.price}
      });
      saveFast(renderStockMarket);
      toast(`Bought ${shares} ${symbol} share${shares === 1 ? "" : "s"}.`);
    }

    function sellStock() {
      const player = currentPlayer();
      const symbol = $("stockSymbol").value;
      const stock = state.stockMarket.companies[symbol];
      const shares = Math.max(1, Math.round(Number($("stockShares").value || 1)));
      if (!player || !stock) return toast("Link your profile and choose a stock.");
      if (Number(player.portfolio[symbol] || 0) < shares) return toast(`You do not own ${shares} ${symbol} shares.`);
      const payout = Math.round(shares * Number(stock.price || 0));
      const ownedShares = Number(player.portfolio[symbol] || 0);
      const oldCost = Number(player.portfolioCost?.[symbol] || 0);
      const costSold = ownedShares > 0 ? Math.round(oldCost * (shares / ownedShares)) : 0;
      player.portfolio[symbol] -= shares;
      if (player.portfolio[symbol] <= 0) {
        delete player.portfolio[symbol];
        if (player.portfolioCost) delete player.portfolioCost[symbol];
      } else if (player.portfolioCost) {
        player.portfolioCost[symbol] = Math.max(0, oldCost - costSold);
      }
      adjustPlayerBankroll(player, payout);
      const realizedGain = payout - costSold;
      trackDailyProgress(player.name, "stockSharesSold", shares);
      if (realizedGain > 0) trackDailyProgress(player.name, "stockProfit", realizedGain);
      if (realizedGain > 0) unlockAchievement("stock-profit-sale", player.name);
      if (realizedGain >= 1000) unlockAchievement("stock-profit-sale-1000", player.name);
      checkStockAchievements(player);
      addHistoryEvent({
        type:"stock-sell",
        category:"Stocks",
        player:player.name,
        title:"Stock Sale",
        description:`${player.name} sold ${shares} share${shares === 1 ? "" : "s"} of ${stock.name}.`,
        amount:payout,
        details:{symbol, shares, price:stock.price, gain:realizedGain}
      });
      saveFast(renderStockMarket);
      toast(`Sold ${shares} ${symbol} share${shares === 1 ? "" : "s"}.`);
    }

    function buyAsset(listingId) {
      const player = currentPlayer();
      const categoryMarket = activeAssetMarket();
      const listing = categoryMarket.listings.find((item) => item.listingId === listingId);
      if (!player || !listing) return toast("Choose a listed asset.");
      if (bankrollValue(player) < Number(listing.price || 0)) return toast(`You need ${money(listing.price)} bankroll to buy this asset.`);
      adjustPlayerBankroll(player, -listing.price);
      const asset = {
        ...listing,
        assetId:`owned-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        owner:player.name,
        pricePaid:listing.price,
        acquiredAt:Date.now()
      };
      player.ownedAssets.push(asset);
      checkAssetAchievements(player);
      categoryMarket.listings = categoryMarket.listings.filter((item) => item.listingId !== listingId && item.vehicleId !== listing.vehicleId);
      state.assetMarket.categories[activeAssetCategory] = categoryMarket;
      if (activeAssetCategory === "garage") state.assetMarket.listings = categoryMarket.listings;
      addHistoryEvent({
        type:"asset-buy",
        category:"Assets",
        player:player.name,
        title:"Asset Purchased",
        description:`${player.name} bought ${asset.name}.`,
        amount:-asset.pricePaid,
        details:{category:asset.category || "garage", rarity:asset.rarity, resaleValue:Math.round(asset.pricePaid * asset.resaleRate)}
      });
      save();
      toast(`${asset.name} acquired.`);
    }

    function sellAsset(assetId) {
      const player = currentPlayer();
      const asset = player?.ownedAssets?.find((item) => item.assetId === assetId);
      if (!player || !asset) return toast("Choose one of your owned assets.");
      const payout = Math.round(Number(asset.pricePaid || 0) * Number(asset.resaleRate || 0.7));
      player.ownedAssets = player.ownedAssets.filter((item) => item.assetId !== assetId);
      adjustPlayerBankroll(player, payout);
      addHistoryEvent({
        type:"asset-sell",
        category:"Assets",
        player:player.name,
        title:"Asset Sold",
        description:`${player.name} sold ${asset.name}.`,
        amount:payout,
        details:{paid:asset.pricePaid, resaleRate:asset.resaleRate}
      });
      save();
      toast(`${asset.name} sold for ${money(payout)}.`);
    }

    function showPlayerAssets(playerName) {
      const player = playerByName(playerName);
      if (!player) return toast("Player not found.");
      assetViewPlayerName = player.name;
      $("assetViewTitle").textContent = `${displayNameForPlayer(player.name)}'s Assets`;
      const assets = player.ownedAssets || [];
      const totalValue = assetValue(player);
      const rareCount = assets.filter((asset) => ["Rare", "Epic", "Legendary", "Mythic"].includes(asset.rarity)).length;
      const categories = [...new Set(assets.map((asset) => ASSET_CATEGORY_LABELS[asset.category || "garage"] || "Assets"))].join(" • ") || "No categories yet";
      $("assetViewSummary").innerHTML = [
        ["Collection", `${assets.length} owned`],
        ["Sell Value", money(totalValue)],
        ["Rare+", rareCount],
        ["Categories", categories]
      ].map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("");
      $("assetViewBoard").innerHTML = renderOwnedAssets(player, false);
      els.assetViewDialog.showModal();
    }

    function renderBlackjackBankroll() {
      const player = currentPlayer();
      $("blackjackBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(bankrollValue(player))}</span><span>Debt ${money(player.bankDebt)}</span>`
        : `<span>Link your profile to show bankroll here.</span>`;
    }

    function todayKey() {
      return centralDailyKey();
    }

    function dailyRecord(playerName = currentPlayer()?.name || "") {
      const key = todayKey();
      state.daily.challenges[playerName] = state.daily.challenges[playerName] || {};
      if (state.daily.challenges[playerName].date !== key) {
        state.daily.challenges[playerName] = {date:key, blackjackWins:0, blackjackHands:0, slotSpins:0, xpEarned:0, casinoProfit:0, stockSharesBought:0, stockSharesSold:0, stockProfit:0, dailyActivities:0, ticketsEarned:0, crapsRolls:0, farkleRounds:0, slotMachines:{}, claimed:false};
      }
      state.daily.challenges[playerName].slotMachines = state.daily.challenges[playerName].slotMachines || {};
      return state.daily.challenges[playerName];
    }

    function dailyActivityRecord(playerName = currentPlayer()?.name || "") {
      const key = todayKey();
      state.daily.activities[playerName] = state.daily.activities[playerName] || {};
      if (state.daily.activities[playerName].date !== key) {
        state.daily.activities[playerName] = {date:key, played:{}};
      }
      state.daily.activities[playerName].played = state.daily.activities[playerName].played || {};
      return state.daily.activities[playerName];
    }

    function dailyClickablePool(count = 5) {
      const catalog = DAILY_CLICKABLES.length ? DAILY_CLICKABLES : [];
      const seed = hashCode(`${todayKey()}-daily-clickables`);
      const ticketBooth = catalog.find((activity) => activity.id === "ticket");
      const remainingCount = Math.max(0, count - (ticketBooth ? 1 : 0));
      const selected = catalog
        .filter((activity) => activity.id !== "ticket")
        .map((activity, index) => ({activity, sort: seededSortValue(seed, index, activity.id)}))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, Math.min(remainingCount, catalog.length))
        .map((item) => item.activity);
      return ticketBooth ? [ticketBooth, ...selected].slice(0, count) : selected;
    }

    function activeDailyChallenges() {
      const catalog = DAILY_CHALLENGE_CONFIG.challenges || [];
      const count = Math.min(Number(DAILY_CHALLENGE_CONFIG.count || 3), catalog.length);
      const seed = hashCode(`${todayKey()}-daily-challenges`);
      return [...catalog]
        .map((challenge, index) => ({challenge, sort: seededSortValue(seed, index, challenge.id)}))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, count)
        .map((item) => item.challenge);
    }

    function dailyChallengeProgress(record, challenge) {
      const target = Math.max(1, Number(challenge.target || 1));
      let value = 0;
      if (challenge.metric.startsWith("slotMachine:")) {
        const key = challenge.metric.split(":")[1] || "";
        value = Number(record.slotMachines?.[key] || 0);
      } else {
        value = Number(record[challenge.metric] || 0);
      }
      return {value, target, done:value >= target};
    }

    function dailyChallengeRewardAmount(playerName = "") {
      const reward = DAILY_CHALLENGE_CONFIG.reward || {min:1500, max:3500};
      const min = Number(reward.min || 0);
      const max = Number(reward.max || reward.min || 0);
      const roll = seededSortValue(hashCode(`${todayKey()}-${playerName}-daily-reward`), 0, "reward");
      return Math.round(min + roll * Math.max(0, max - min));
    }

    function seededSortValue(seed, index, id) {
      const value = Math.sin((seed + index + 1) * 999 + hashCode(id)) * 10000;
      return value - Math.floor(value);
    }

    function renderDailyActivityCards(player) {
      const record = dailyActivityRecord(player.name);
      const reset = dailyResetText();
      return dailyClickablePool(5).map((activity) => {
        const done = Boolean(record.played[activity.id]);
        return `<button class="daily-card bonus-card ${done ? "cooldown" : "ready"}" type="button" data-action="play-daily-activity" data-daily-activity="${escapeAttr(activity.id)}">
          <span>${activity.icon}</span>
          <strong>${escapeHtml(activity.title)}</strong>
          <small>${done ? `Cooldown: ${reset.countdown}` : escapeHtml(activity.description)}</small>
        </button>`;
      }).join("");
    }

    function playDailyActivity(activityId) {
      const player = currentPlayer();
      const activity = dailyClickablePool(5).find((item) => item.id === activityId) || DAILY_CLICKABLES.find((item) => item.id === activityId);
      if (!player || !activity) return toast("Choose a daily activity.");
      const record = dailyActivityRecord(player.name);
      if (record.played[activity.id]) return toast(`${activity.title} is already claimed today.`);
      record.played[activity.id] = true;
      const won = Math.random() < Number(activity.chance || 0);
      let result = "No reward this time.";
      let amount = 0;
      let amountKind = "";
      if (won) {
        const reward = activity.reward;
        amount = Math.round(Number(reward.min || 0) + Math.random() * Math.max(0, Number(reward.max || 0) - Number(reward.min || 0)));
        if (reward.type === "money" || (reward.type === "mixed" && Math.random() > 0.45)) {
          grantDailyMoney(player, amount, `${activity.title} reward`);
          result = `${money(amount)} bankroll reward`;
        } else if (reward.type === "ticket") {
          awardCasinoTickets(player, amount, activity.title);
          amountKind = "ticket";
          result = `${amount} Casino Ticket${amount === 1 ? "" : "s"}`;
        } else {
          addXP(player.name, amount, activity.title, {persist:false, toast:false});
          amountKind = "xp";
          result = `${amount} XP`;
        }
      }
      addHistoryEvent({
        type:"daily-clickable",
        category:"Dailies",
        player:player.name,
        title:activity.title,
        description:`${player.name} played ${activity.title}: ${result}.`,
        amount:won ? amount : 0,
        amountKind,
        details:{activity:activity.id}
      });
      state.daily.wheelHistory.unshift(`${player.name} played ${activity.title}: ${result}.`);
      state.daily.wheelHistory = state.daily.wheelHistory.slice(0, 12);
      trackDailyProgress(player.name, "dailyActivities", 1);
      save();
      resultToast(activity.title, result);
    }

    function renderDailyRewards() {
      const player = currentPlayer();
      if (!player) {
        $("dailyChallengeBoard").innerHTML = renderListRow("&#9733;", "Link profile for daily rewards", "Daily challenge, wheel, and scratch card unlock after linking.", "");
        $("dailyRewardHistory").innerHTML = "";
        return;
      }
      const record = dailyRecord(player.name);
      const wheelDone = state.daily.wheel[player.name] === todayKey();
      const scratchDone = state.daily.scratch[player.name] === todayKey();
      const challenges = activeDailyChallenges();
      const complete = challenges.every((challenge) => dailyChallengeProgress(record, challenge).done);
      const rewardAmount = dailyChallengeRewardAmount(player.name);
      const reset = dailyResetText();
      $("dailyChallengeBoard").innerHTML = `
        <div class="daily-rotation-note">
          <span>Daily lineup refreshes in <strong>${reset.countdown}</strong></span>
          <span>Clickables and challenges rotate from JSON pools.</span>
        </div>
        <div class="daily-card-grid">
          <button class="daily-card ${complete && !record.claimed ? "ready" : ""}" type="button" data-action="claim-daily-challenge">
            <span>👑</span><strong>Daily Challenge</strong><small>${record.claimed ? "Claimed" : complete ? `Reward ready: ${money(rewardAmount)}` : "Complete all tasks"}</small>
          </button>
          <button class="daily-card ${wheelDone ? "cooldown" : "ready"}" type="button" data-action="spin-lucky-wheel">
            <span>🎡</span><strong>Lucky Wheel</strong><small>${wheelDone ? `Cooldown: ${reset.countdown}` : "Ready to spin"}</small>
          </button>
          <button class="daily-card ${scratchDone ? "cooldown" : "ready"}" type="button" data-action="scratch-daily-card">
            <span>🎫</span><strong>Scratch-Off</strong><small>${scratchDone ? `Cooldown: ${reset.countdown}` : "Ready to scratch"}</small>
          </button>
          <div class="daily-card ticket-card">
            <span>🎟️</span><strong>Casino Tickets</strong><small>${Number(player.casinoTickets || 0)} available for extra plays</small>
          </div>
          ${renderDailyActivityCards(player)}
        </div>
        <div class="leaderboard-list daily-task-list">
          ${challenges.map((challenge) => {
            const progress = dailyChallengeProgress(record, challenge);
            return renderListRow(challenge.icon || "&#9733;", challenge.title, challenge.description || "Daily Challenge", `${Math.min(progress.value, progress.target).toLocaleString()} / ${progress.target.toLocaleString()}`);
          }).join("")}
        </div>`;
      $("dailyRewardHistory").innerHTML = "";
    }

    function renderLuckyWheel() {
      const wheel = $("luckyWheel");
      if (!wheel) return;
      const segment = 360 / LUCKY_WHEEL_REWARDS.length;
      wheel.style.setProperty("--wheel-segments", LUCKY_WHEEL_REWARDS.length);
      wheel.style.background = `conic-gradient(${LUCKY_WHEEL_REWARDS.map((reward, index) => {
        const start = index * segment;
        const end = (index + 1) * segment;
        const color = reward.golden ? "#d49a12" : reward.type === "money" ? (index % 2 ? "#17131e" : "#a56a10") : (index % 2 ? "#251739" : "#6d23d9");
        return `${color} ${start}deg ${end}deg`;
      }).join(",")})`;
      wheel.innerHTML = LUCKY_WHEEL_REWARDS.map((reward, index) => {
        const rotation = index * segment + segment / 2;
        return `<span style="--wheel-label-rotation:${rotation}deg">${escapeHtml(reward.label)}</span>`;
      }).join("");
    }

    function dailyResetText() {
      const now = new Date();
      const reset = nextCentralReset();
      const ms = Math.max(0, reset - now);
      const hours = Math.floor(ms / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      return {
        countdown: `${hours}h ${String(minutes).padStart(2, "0")}m`,
        unlock: `${reset.toLocaleTimeString([], {hour:"numeric", minute:"2-digit", timeZone:"America/Chicago"})} CT`
      };
    }

    function centralParts(date = new Date()) {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Chicago",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).formatToParts(date).reduce((acc, part) => {
        if (part.type !== "literal") acc[part.type] = part.value;
        return acc;
      }, {});
      return {
        year: Number(parts.year),
        month: Number(parts.month),
        day: Number(parts.day),
        hour: Number(parts.hour),
        minute: Number(parts.minute)
      };
    }

    function centralDailyKey(date = new Date()) {
      const shifted = new Date(date.getTime() - 6 * 60 * 60 * 1000);
      return new Intl.DateTimeFormat("en-CA", {timeZone:"America/Chicago", year:"numeric", month:"2-digit", day:"2-digit"}).format(shifted);
    }

    function centralOffsetMs(date = new Date()) {
      const parts = centralParts(date);
      const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute);
      return asUtc - date.getTime();
    }

    function nextCentralReset() {
      const now = new Date();
      const parts = centralParts(now);
      let resetUtc = Date.UTC(parts.year, parts.month - 1, parts.day, 6, 0) - centralOffsetMs(now);
      if (resetUtc <= now.getTime()) {
        resetUtc = Date.UTC(parts.year, parts.month - 1, parts.day + 1, 6, 0) - centralOffsetMs(new Date(now.getTime() + 24 * 60 * 60 * 1000));
      }
      return new Date(resetUtc);
    }

    function renderActiveRoom() {
      const room = activeRoom();
      if (!room) return;
      const playersMarkup = Object.values(room.seats || {}).map((seat) => `
        <div class="room-player-card">
          <span class="medal ${medalClass("Spade")}">♠</span>
          <div><strong>${escapeHtml(seat.name)}</strong><div>${escapeHtml(seat.playerName || "Unlinked")} - Player${room.game === "blackjack" ? ` / ${seat.ready ? `Ready ${money(seat.readyBet || 0)}` : "Not ready"}` : ""}</div></div>
        </div>`).join("") || `<div class="blackjack-status">No players seated.</div>`;
      const hostText = isRoomHost(room) ? "You are host" : "Host controlled";
      if (room.game === "blackjack") {
        $("blackjackRoomTitle").textContent = `♣ ${room.name}`;
        $("blackjackRoomHostBadge").textContent = hostText;
        $("blackjackRoomPlayers").innerHTML = playersMarkup;
        $("closeBlackjackRoomBtn").hidden = !isRoomHost(room);
        renderBlackjackRoomTable(room);
      }
      if (room.game === "poker") {
        $("pokerRoomTitle").textContent = `♠ ${room.name}`;
        $("pokerRoomHostBadge").textContent = hostText;
        $("pokerRoomPlayers").innerHTML = playersMarkup;
        const table = room.table || {};
        $("pokerRoomRules").innerHTML = `<span>Phase ${escapeHtml(table.phase || "waiting")}</span><span>Pot ${money(table.pot || 0)}</span><span>Current bet ${money(table.currentBet || 0)}</span><span>Small blind ${money(room.smallBlind || 0)}</span><span>Big blind ${money(room.bigBlind || 0)}</span>`;
        $("closePokerRoomBtn").hidden = !isRoomHost(room);
        renderPokerRoomTable(room);
      }
    }

    function renderPokerRoomTable(room) {
      const table = room.table && typeof room.table === "object" ? room.table : createEmptyPokerTable();
      room.table = table;
      table.stacks = table.stacks && typeof table.stacks === "object" ? table.stacks : Object.fromEntries(Object.entries(room.seats || {}).map(([key, seat]) => [key, Number(seat.stack || 0)]));
      const community = Array.isArray(table.community) ? table.community : [];
      const visibleCommunity = visiblePokerCommunity(table);
      $("pokerCommunityBoard").innerHTML = community.length
        ? community.map((card, index) => index < visibleCommunity ? renderPlayingCard(card, false, table.animateCommunityIndexes?.includes(index), false, Math.max(0, table.animateCommunityIndexes?.indexOf(index) || 0) * 800) : `<span class="playing-card hidden-card">?</span>`).join("")
        : `<span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span>`;
      $("pokerRoomStatus").textContent = table.message || "Texas Hold'em room is open.";
      const currentKey = currentProfileKey();
      const mySeat = room.seats?.[currentKey];
      const myHand = table.hands?.[currentKey] || [];
      const myFolded = Boolean(table.folded?.[currentKey]);
      $("pokerMySeatBadge").textContent = mySeat ? `Seat ${mySeat.seatNumber} / ${money(table.stacks?.[currentKey] ?? mySeat.stack ?? 0)}` : "Spectating";
      $("pokerMyHand").innerHTML = myFolded
        ? `<span class="sync-pill">Folded - hand hidden</span>`
        : myHand.length
          ? myHand.map((card, index) => renderPlayingCard(card, false, table.handAnimateIndexes?.[currentKey]?.includes(index), false, index * 800)).join("")
          : `<span class="sync-pill">Waiting for deal</span>`;
      $("pokerRoomPlayers").innerHTML = pokerSeatEntries(room).map(([key, seat]) => {
        const folded = Boolean(table.folded?.[key]);
        const labels = [
          key === table.dealerButton ? "Dealer" : "",
          key === table.smallBlindKey ? "SB" : "",
          key === table.bigBlindKey ? "BB" : "",
          folded ? "Folded" : "",
          key === table.activeSeatKey ? "Current Turn" : ""
        ].filter(Boolean);
        return `<article class="poker-seat ${key === table.activeSeatKey ? "active" : ""} ${folded ? "folded" : ""}">
          <span class="medal ${medalClass(seat.playerName || seat.name)}">${playerSymbol(seat.playerName || seat.name)}</span>
          <div class="poker-seat-copy">
            <strong>Seat ${seat.seatNumber}: ${escapeHtml(seat.name)}</strong>
            <span>${labels.length ? escapeHtml(labels.join(" / ")) : "Waiting"}</span>
            <small>Stack ${money(table.stacks?.[key] ?? seat.stack ?? 0)} / Street ${money(table.bets?.[key] || 0)} / Pot ${money(table.committed?.[key] || 0)}</small>
          </div>
          <div class="chip-visual-row compact">${renderChipVisuals(chipSetup(table.stacks?.[key] ?? seat.stack ?? 0))}</div>
        </article>`;
      }).join("") || `<div class="blackjack-status">No players seated.</div>`;
      const activePhase = ["preflop","flop","turn","river"].includes(table.phase);
      const canDeal = isRoomHost(room) && Object.keys(room.seats || {}).length >= 2 && !activePhase;
      const myTurn = table.activeSeatKey === currentKey && activePhase && !table.folded?.[currentKey];
      const owed = Math.max(0, Number(table.currentBet || 0) - Number(table.bets?.[currentKey] || 0));
      const activeSeatName = room.seats?.[table.activeSeatKey]?.name || "Waiting";
      $("pokerTableMetrics").innerHTML = `
        <div><span>Pot</span><strong>${money(table.pot || 0)}</strong></div>
        <div><span>Current Bet</span><strong>${money(table.currentBet || 0)}</strong></div>
        <div><span>Current Turn</span><strong>${escapeHtml(activeSeatName)}</strong></div>
        <div><span>You Owe</span><strong>${money(owed)}</strong></div>`;
      const reason = !mySeat ? "You are spectating this room."
        : myFolded ? "You folded and are spectating until the next hand."
        : !activePhase ? (isRoomHost(room) ? "Deal a new hand when at least two funded seats are ready." : "Waiting for the host to deal.")
        : !myTurn ? `Waiting for ${activeSeatName} to act.`
        : owed > 0 ? `You must call ${money(owed)}, raise, or fold.`
        : Number(table.currentBet || 0) > 0 ? "You have matched the bet. Check or raise."
        : "No bet is open. Check or place the first bet.";
      $("pokerActionReason").textContent = reason;
      const dealButton = $("pokerDealButton");
      const checkButton = $("pokerCheckButton");
      const callButton = $("pokerCallButton");
      const wagerButton = $("pokerWagerButton");
      const foldButton = $("pokerFoldButton");
      dealButton.hidden = !canDeal;
      dealButton.disabled = !canDeal;
      checkButton.hidden = !(myTurn && owed === 0);
      checkButton.disabled = !myTurn || owed > 0;
      callButton.hidden = !(myTurn && owed > 0);
      callButton.disabled = !myTurn || owed <= 0;
      callButton.textContent = `Call ${money(owed)}`;
      callButton.setAttribute("aria-label", `Call ${owed} dollars`);
      wagerButton.hidden = !myTurn;
      wagerButton.disabled = !myTurn;
      wagerButton.textContent = Number(table.currentBet || 0) > 0 ? "Raise" : "Bet";
      wagerButton.setAttribute("aria-label", Number(table.currentBet || 0) > 0 ? "Raise poker bet" : "Place poker bet");
      foldButton.hidden = !(myTurn && owed > 0);
      foldButton.disabled = !myTurn || owed <= 0;
    }

    function visiblePokerCommunity(table) {
      return {waiting:0, preflop:0, flop:3, turn:4, river:5, showdown:5, done:5}[table.phase] || 0;
    }

    function renderBlackjackRoomTable(room) {
      const table = normalizeBlackjackRoomTable(room.table);
      room.table = table;
      const seats = room.seats || {};
      const hideDealerHole = table.dealerHand.length > 1 && !table.revealDealer && ["player", "dealer"].includes(table.phase);
      $("multiDealerHand").innerHTML = table.dealerHand.length
        ? table.dealerHand.map((card, index) => renderPlayingCard(
          card,
          index === 1 && hideDealerHole,
          table.dealerAnimateIndexes?.includes(index),
          table.dealerFlipIndexes?.includes(index),
          Math.max(0, table.dealerAnimateIndexes?.indexOf(index) || 0) * CARD_DEAL_DELAY_MS
        )).join("")
        : `<div class="sync-pill">No dealer hand</div>`;
      $("multiDealerTotal").textContent = table.dealerHand.length
        ? (hideDealerHole ? handValue([table.dealerHand[0]]) : handValue(table.dealerHand))
        : "0";
      const activeSeat = seats[table.activeSeatKey];
      $("multiActiveSeat").textContent = activeSeat ? `${activeSeat.name}'s turn` : "Waiting";
      $("multiBlackjackStatus").textContent = table.message || "Start a shared round when players have joined.";
      const hands = table.hands || {};
      const seatEntries = Object.entries(seats);
      $("multiBlackjackHands").innerHTML = seatEntries.length ? `<div class="multi-blackjack-seat-grid count-${Math.min(3, seatEntries.length)}">` + seatEntries.map(([key, seat], seatIndex) => {
        const hand = hands[key];
        const animated = table.handAnimateIndexes?.[key] || [];
        const seatHands = multiSeatHands(hand);
        const cardHtml = seatHands.length
          ? seatHands.map((seatHand, handIndex) => {
            const animatedKey = `${handIndex}`;
            const indexes = animated[animatedKey] || [];
            const cards = seatHand.cards.map((card, index) => renderPlayingCard(card, false, indexes.includes(index), false, Math.max(0, indexes.indexOf(index)) * CARD_DEAL_DELAY_MS)).join("");
            const status = seatHand.result || (seatHand.stood ? "Stand" : key === table.activeSeatKey && handIndex === Number(hand?.activeHand || 0) ? "Active" : "Queued");
            return `<div class="blackjack-hand ${key === table.activeSeatKey && handIndex === Number(hand?.activeHand || 0) ? "active" : ""}">
              <div class="blackjack-hand-meta"><strong>Hand ${handIndex + 1}</strong><span>${money(seatHand.bet || table.bet)} - ${escapeHtml(status)}${seatHand.doubled ? " / Double" : ""}${seatHand.delta ? ` / ${signedMoney(seatHand.delta)}` : ""}</span></div>
              <div class="playing-card-row compact">${cards}</div>
              ${renderBetChipStack(seatHand.bet || table.bet)}
            </div>`;
          }).join("")
          : `<span class="sync-pill">Waiting for round</span>`;
        const total = activeMultiSeatHand(hand) ? handValue(activeMultiSeatHand(hand).cards) : 0;
        const status = multiSeatSummary(hand, key === table.activeSeatKey ? "Active" : table.phase === "waiting" ? "Waiting" : "Queued");
        return `<div class="multi-blackjack-seat seat-${seatIndex + 1} ${key === table.activeSeatKey ? "active-room-hand" : ""}">
          <span class="medal ${medalClass(seat.playerName || seat.name)}">${playerSymbol(seat.playerName || seat.name)}</span>
          <div>
            <strong>${escapeHtml(seat.name)}</strong>
            ${cardHtml}
            <div style="color:var(--muted);font-size:.82rem;">Total ${total} - ${escapeHtml(status)}${hand?.delta ? ` - ${signedMoney(hand.delta)}` : ""}</div>
          </div>
        </div>`;
      }).join("") + `</div>` : `<div class="blackjack-status">No players seated.</div>`;
      const currentKey = currentProfileKey();
      const isActive = table.phase === "player" && table.activeSeatKey === currentKey;
      const activeHand = isActive ? activeMultiSeatHand(table.hands?.[currentKey]) : null;
      const canSplit = Boolean(activeHand && activeHand.cards.length === 2 && activeHand.cards[0]?.rank === activeHand.cards[1]?.rank && Number(table.hands?.[currentKey]?.splits || 0) < 3 && multiSeatHands(table.hands?.[currentKey]).length < 4);
      const canDouble = Boolean(activeHand && activeHand.cards.length === 2);
      const readyEntries = Object.values(seats).filter((seat) => seat.ready && Number(seat.readyBet || 0) > 0);
      const canReady = !["player", "dealer"].includes(table.phase) && Boolean(seats[currentKey]);
      const canStart = isRoomHost(room) && !["player", "dealer"].includes(table.phase) && Object.keys(seats).length > 0 && readyEntries.length === Object.keys(seats).length;
      const multiStats = $("multiBlackjackQuickStats");
      if (multiStats) {
        const totalWager = Object.values(seats).reduce((sum, seat) => sum + Number(seat.readyBet || table.bet || 0), 0);
        const dealerTotal = table.dealerHand?.length ? handValue(table.dealerHand) : 0;
        multiStats.innerHTML = `
          <div><span>Players Seated</span><strong>${Object.keys(seats).length}</strong></div>
          <div><span>Ready Players</span><strong>${readyEntries.length}</strong></div>
          <div><span>Round Phase</span><strong>${escapeHtml(table.phase || "waiting")}</strong></div>
          <div><span>Dealer Total</span><strong>${dealerTotal || "-"}</strong></div>
          <div><span>Table Wager</span><strong>${money(totalWager)}</strong></div>`;
      }
      document.querySelectorAll('[data-action="multi-blackjack-ready"]').forEach((button) => button.disabled = !canReady);
      document.querySelectorAll('[data-action="multi-blackjack-deal"]').forEach((button) => button.disabled = !canStart);
      document.querySelectorAll('[data-action="multi-blackjack-hit"]').forEach((button) => button.disabled = !isActive);
      document.querySelectorAll('[data-action="multi-blackjack-stand"]').forEach((button) => button.disabled = !isActive);
      document.querySelectorAll('[data-action="multi-blackjack-split"]').forEach((button) => button.disabled = !canSplit);
      document.querySelectorAll('[data-action="multi-blackjack-double"]').forEach((button) => button.disabled = !canDouble);
      const myHand = table.hands?.[currentProfileKey()];
      if (table.phase === "done" && myHand?.result) {
        const resultKey = `${room.id}:${table.roundId || 0}:${myHand.result}:${myHand.delta}`;
        if (resultKey !== lastRoomResultToastKey) {
          lastRoomResultToastKey = resultKey;
          const dealerTotal = handValue(table.dealerHand);
          const firstHand = multiSeatHands(myHand)[0];
          const total = firstHand ? handValue(firstHand.cards || []) : 0;
          const title = Number(myHand.delta || 0) > 0
            ? `${currentDisplayName()} wins: ${total}`
            : Number(myHand.delta || 0) < 0
              ? `Dealer wins: ${dealerTotal}`
              : `Push: ${dealerTotal}`;
          setTimeout(() => resultToast(title, signedMoney(myHand.delta || 0)), 80);
        }
      }
    }

    function normalizeBlackjackRoomTable(table) {
      const base = createEmptyMultiplayerBlackjackTable();
      const input = table && typeof table === "object" ? table : {};
      return {
        ...base,
        ...input,
        deck: Array.isArray(input.deck) ? input.deck : [],
        dealerHand: Array.isArray(input.dealerHand) ? input.dealerHand : [],
        hands: input.hands && typeof input.hands === "object" && !Array.isArray(input.hands) ? input.hands : {},
        dealerAnimateIndexes: Array.isArray(input.dealerAnimateIndexes) ? input.dealerAnimateIndexes : [],
        dealerFlipIndexes: Array.isArray(input.dealerFlipIndexes) ? input.dealerFlipIndexes : [],
        handAnimateIndexes: input.handAnimateIndexes && typeof input.handAnimateIndexes === "object" && !Array.isArray(input.handAnimateIndexes) ? input.handAnimateIndexes : {}
      };
    }

    function multiSeatHands(hand) {
      if (!hand) return [];
      if (Array.isArray(hand.playerHands)) return hand.playerHands;
      if (Array.isArray(hand.cards)) return [{cards: hand.cards, bet: hand.bet || 0, stood: hand.stood || false, result: hand.result || "", delta: hand.delta || 0, doubled: false}];
      return [];
    }

    function activeMultiSeatHand(hand) {
      const hands = multiSeatHands(hand);
      return hands[Number(hand?.activeHand || 0)] || hands[0] || null;
    }

    function multiSeatSummary(hand, fallback) {
      const hands = multiSeatHands(hand);
      if (!hands.length) return fallback;
      if (hands.every((item) => item.result)) return hands.map((item) => item.result).join(" / ");
      return fallback;
    }

    function achievementCompletionText(playerName) {
      const total = ACHIEVEMENT_DEFINITIONS.length;
      const unlockedForPlayer = Object.values(state.unlockedAchievements || {}).filter((item) => item.player === playerName).length;
      return `${unlockedForPlayer}/${total}`;
    }

    function achievementProgress(definition) {
      return achievementProgressData(definition).text;
    }

    function achievementProgressData(definition) {
      const totalXp = Number(currentPlayer()?.xp || 0);
      const player = currentPlayer();
      const bankroll = Math.max(0, bankrollValue(player));
      const debt = Math.max(0, Number(player?.bankDebt || 0));
      const stockPortfolio = Math.max(0, portfolioValue(player));
      const stockCost = Math.max(0, portfolioCost(player));
      const stockCompanies = Object.values(player?.portfolio || {}).filter((shares) => Number(shares || 0) > 0).length;
      const stockShares = Object.values(player?.portfolio || {}).reduce((sum, shares) => sum + Number(shares || 0), 0);
      const stockGainPercent = stockCost > 0 ? Math.max(0, (stockPortfolio - stockCost) / stockCost * 100) : 0;
      const ownedAssets = player?.ownedAssets?.length || 0;
      const garageValue = assetValue(player);
      const progress = (current, target, suffix = "") => ({
        text:`${suffix === "$" ? money(Math.min(current, target)) : Math.min(current, target).toLocaleString()} / ${suffix === "$" ? money(target) : `${target.toLocaleString()}${suffix}`}`,
        value:Math.min(100, Math.round(current / Math.max(1, target) * 100))
      });
      const progressMap = {
        "xp-1000": progress(totalXp, 1000, " XP"),
        "xp-5000": progress(totalXp, 5000, " XP"),
        "xp-10000": progress(totalXp, 10000, " XP"),
        "xp-25000": progress(totalXp, 25000, " XP"),
        "xp-50000": progress(totalXp, 50000, " XP"),
        "wealth-first-fortune": progress(bankroll, 500, "$"),
        "wealth-four-digits": progress(bankroll, 1000, "$"),
        "wealth-high-roller": progress(bankroll, 2500, "$"),
        "wealth-tycoon": progress(bankroll, 5000, "$"),
        "wealth-casino-king": progress(bankroll, 10000, "$"),
        "debt-deep": progress(debt, 500, "$"),
        "stock-diversified": progress(stockCompanies, 5, " companies"),
        "stock-100-shares": progress(stockShares, 100, " shares"),
        "stock-portfolio-1000": progress(stockPortfolio, 1000, "$"),
        "stock-portfolio-10000": progress(stockPortfolio, 10000, "$"),
        "stock-portfolio-100000": progress(stockPortfolio, 100000, "$"),
        "stock-gain-25": progress(stockGainPercent, 25, "% gain"),
        "stock-gain-50": progress(stockGainPercent, 50, "% gain"),
        "asset-garage-5": progress(ownedAssets, 5, " vehicles"),
        "asset-garage-10": progress(ownedAssets, 10, " vehicles"),
        "asset-million-garage": progress(garageValue, 1000000, "$"),
        "activity-dedicated-player": progress(state.counters.sessionsPlayed, 10, " sessions"),
        "activity-regular": progress(state.counters.sessionsPlayed, 25, " sessions"),
        "activity-addicted": progress(state.counters.sessionsPlayed, 50, " sessions"),
        "activity-casino-resident": progress(state.counters.sessionsPlayed, 100, " sessions"),
        "blackjack-dealer-down": progress(state.counters.blackjackWins, 5, " wins"),
        "blackjack-dealer-slayer": progress(state.counters.blackjackWins, 25, " wins"),
        "uno-card-shark": progress(state.counters.unoWins, 10, " wins"),
        "uno-veteran": progress(state.counters.unoWins, 50, " wins"),
        "uno-legend": progress(state.counters.unoWins, 100, " wins")
      };
      return progressMap[definition.id] || {text:"Locked", value:0};
    }

    function rarityIcon(rarity) {
      return {
        Common: "⚪",
        Uncommon: "🟢",
        Rare: "🔵",
        Epic: "🟣",
        Legendary: "🟠",
        Mythic: "👑"
      }[rarity] || "⭐";
    }

    function renderGameCard(game) {
      const meta = {
        poker: ["Poker", "PLAY POKER", "#0b5a28", "rgba(16, 190, 82, 0.18)", "Biggest Pot", money(state.gameStats.poker.biggest || 1250)],
        blackjack: ["Blackjack", "PLAY BLACKJACK", "#0d457c", "rgba(26, 132, 255, 0.18)", "Blackjacks", state.gameStats.blackjack.wins || 3],
        uno: ["Uno", "PLAY UNO", "#68128c", "rgba(202, 53, 255, 0.18)", "Wins", state.gameStats.uno.wins || 8]
      }[game];
      const onlineAction = game === "poker" ? "open-online-poker" : game === "blackjack" ? "open-online-blackjack" : "";
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
          <div class="action-grid">
            <button class="primary-btn" type="button" data-game="${game}">PLAY LOCAL</button>
            <button class="ghost-btn" type="button" ${onlineAction ? `data-action="${onlineAction}"` : "disabled"}>${onlineAction ? "PLAY ONLINE" : "COMING SOON"}</button>
          </div>
          <div class="game-stats" style="margin-top:12px;">
            <div><span>Session Stats</span><strong>${meta[0]}</strong></div>
            <div><span>Games Played</span><strong>${state.gameStats[game].played || 0}</strong></div>
            <div><span>${meta[4]}</span><strong>${meta[5]}</strong></div>
            <div><span>Session Profit</span><strong class="${state.gameStats[game].profit >= 0 ? "money" : "loss"}">${signedMoney(state.gameStats[game].profit || 0)}</strong></div>
          </div>
        </article>`;
    }

    function renderBlackjackTable() {
      const hands = blackjackHands();
      const hideDealerHole = soloBlackjack.dealerHand.length > 1 && !soloBlackjack.revealDealer && (soloBlackjack.phase === "playing" || soloBlackjack.phase === "dealing");
      $("dealerHand").innerHTML = soloBlackjack.dealerHand.length
        ? soloBlackjack.dealerHand.map((card, index) => renderPlayingCard(
          card,
          index === 1 && hideDealerHole,
          soloBlackjack.dealerAnimateIndexes?.includes(index),
          soloBlackjack.dealerFlipIndexes?.includes(index),
          Math.max(0, soloBlackjack.dealerAnimateIndexes?.indexOf(index) || 0) * CARD_DEAL_DELAY_MS
        )).join("")
        : `<div class="sync-pill">No dealer hand</div>`;
      $("playerHand").innerHTML = hands.length
        ? hands.map((hand, index) => renderBlackjackHand(hand, index)).join("")
        : `<div class="sync-pill">No player hand</div>`;
      $("dealerTotal").textContent = soloBlackjack.dealerHand.length
        ? (hideDealerHole ? handValue([soloBlackjack.dealerHand[0]]) : handValue(soloBlackjack.dealerHand))
        : "0";
      $("playerTotal").textContent = hands.length ? hands.map((hand, index) => `H${index + 1}: ${handValue(hand.cards)}`).join(" / ") : "0";
      $("blackjackStatus").textContent = soloBlackjack.message;
      renderBlackjackQuickStats();
    }

    function renderBlackjackQuickStats() {
      if (!$("blackjackQuickStats")) return;
      const stats = state.gameStats.blackjack || {};
      const played = Number(stats.played || 0);
      const wins = Number(stats.wins || 0);
      const winRate = played > 0 ? `${(wins / played * 100).toFixed(1)}%` : "0%";
      $("blackjackQuickStats").innerHTML = [
        ["Hands Played", played],
        ["Hands Won", wins],
        ["Win Rate", winRate],
        ["Best Win", money(stats.biggest || 0)]
      ].map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("");
    }

    function renderBlackjackControls() {
      const phase = soloBlackjack.phase;
      const playing = phase === "playing";
      const locked = phase === "playing" || phase === "dealing";
      const hand = activeBlackjackHand();
      const canSplit = playing && hand?.cards?.length === 2 && hand.cards[0]?.rank === hand.cards[1]?.rank && soloBlackjack.splits < 3 && blackjackHands().length < 4;
      const canDouble = playing && hand?.cards?.length === 2;
      const set = (action, disabled) => {
        document.querySelectorAll(`[data-action="${action}"]`).forEach((button) => button.disabled = disabled);
      };
      set("solo-blackjack-deal", locked);
      set("solo-blackjack-reset", locked);
      set("solo-blackjack-hit", !playing);
      set("solo-blackjack-stand", !playing);
      set("solo-blackjack-split", !canSplit);
      set("solo-blackjack-double", !canDouble);
    }

    function blackjackHands() {
      if (Array.isArray(soloBlackjack.playerHands) && soloBlackjack.playerHands.length) return soloBlackjack.playerHands;
      if (soloBlackjack.playerHand?.length) return [{cards: soloBlackjack.playerHand, bet: soloBlackjack.bet, doubled: false, stood: false}];
      return [];
    }

    function activeBlackjackHand() {
      return blackjackHands()[soloBlackjack.activeHand] || null;
    }

    function renderBetChipStack(amount) {
      let remaining = Math.max(0, Math.round(Number(amount || 0)));
      if (!remaining) return "";
      const denominations = [
        {value:500, className:"chip-500"},
        {value:100, className:"chip-100"},
        {value:25, className:"chip-25"},
        {value:5, className:"chip-5"},
        {value:1, className:"chip-1"}
      ];
      const chips = [];
      denominations.forEach((chip) => {
        const count = Math.floor(remaining / chip.value);
        remaining -= count * chip.value;
        for (let index = 0; index < Math.min(count, 4); index += 1) chips.push(chip);
        if (count > 4) chips.push({...chip, extra: count - 4});
      });
      return `<div class="table-bet-stack" title="Bet ${money(amount)}">
        <div class="table-chip-pile">
          ${chips.slice(0, 9).map((chip, index) => `<span class="casino-chip table-chip ${chip.className}" style="--chip-offset:${index};">${chip.extra ? `+${chip.extra}` : chip.value}</span>`).join("")}
        </div>
        <strong>${money(amount)}</strong>
      </div>`;
    }

    function renderBlackjackHand(hand, index) {
      const active = soloBlackjack.phase === "playing" && index === soloBlackjack.activeHand;
      const animated = soloBlackjack.playerAnimateIndexes?.[index] || [];
      const cards = hand.cards.map((card, cardIndex) => renderPlayingCard(card, false, animated.includes(cardIndex), false, Math.max(0, animated.indexOf(cardIndex)) * CARD_DEAL_DELAY_MS)).join("");
      const flags = [
        active ? "Active" : "",
        hand.doubled ? "Double" : "",
        hand.stood ? "Stand" : "",
        hand.result || ""
      ].filter(Boolean).join(" / ");
      return `<div class="blackjack-hand ${active ? "active" : ""}">
        <div class="blackjack-hand-meta"><strong>Hand ${index + 1}</strong><span>${money(hand.bet || soloBlackjack.bet)} ${flags ? "- " + escapeHtml(flags) : ""}</span></div>
        <div class="playing-card-row compact">${cards}</div>
        ${renderBetChipStack(hand.bet || soloBlackjack.bet)}
      </div>`;
    }

    function renderPlayingCard(card, hidden = false, animate = false, flip = false, delayMs = 0) {
      const animationClass = [animate ? "dealt-card" : "", flip ? "flip-card" : ""].filter(Boolean).join(" ");
      const style = animate && delayMs ? ` style="--deal-delay:${delayMs}ms"` : "";
      if (hidden) return `<span class="playing-card hidden-card ${animationClass}"${style}><span class="card-back-mark">♠</span></span>`;
      const red = card.suit === "♥" || card.suit === "♦";
      return `<span class="playing-card ${animationClass} ${red ? "red" : ""}"${style}>
        <span class="card-corner top"><b>${escapeHtml(card.rank)}</b><i>${escapeHtml(card.suit)}</i></span>
        <span class="card-suit-center">${escapeHtml(card.suit)}</span>
        <span class="card-corner bottom"><b>${escapeHtml(card.rank)}</b><i>${escapeHtml(card.suit)}</i></span>
      </span>`;
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
      const seats = Object.values(room.seats || {}).map((seat) => seat.name).join(", ") || "No seats yet";
      return `<div class="list-row"><span class="medal">&#9827;</span><div><strong>${escapeHtml(room.name)}</strong><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(seats)}</div></div><button class="mini-btn" type="button" data-room-id="${escapeAttr(room.id)}" data-action="join-blackjack-room">Join</button></div>`;
    }

    function renderPokerRooms() {
      const rooms = Object.values(state.onlineRooms || {})
        .filter((room) => room.game === "poker" && room.status === "open")
        .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
      $("pokerRooms").innerHTML = rooms.length
        ? rooms.map((room) => renderPokerRoomRow(room)).join("")
        : renderListRow("&#9824;", "No open Hold'em rooms", "Start a multiplayer room with blinds.", "");
    }

    function renderPokerRoomRow(room) {
      const seats = Object.values(room.seats || {}).map((seat) => `${seat.name} (${seat.role})`).join(", ") || "No seats yet";
      const blinds = `Small blind ${money(room.smallBlind || 0)} / Big blind ${money(room.bigBlind || 0)} - Kickers enabled`;
      return `<div class="list-row"><span class="medal">&#9824;</span><div><strong>${escapeHtml(room.name)}</strong><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(blinds)}<br>${escapeHtml(seats)}</div></div><button class="mini-btn" type="button" data-room-id="${escapeAttr(room.id)}" data-action="join-poker-room">Join</button></div>`;
    }

    function renderSlots() {
      const player = currentPlayer();
      const machine = currentSlotMachine();
      syncSlotBetPresets(machine);
      const lineBet = selectedSlotLineBet();
      const totalWager = lineBet * machine.lines.length;
      $("slotsTitle").innerHTML = `&#127922; ${escapeHtml(machine.name)}`;
      if ($("slotMachineMarquee")) $("slotMachineMarquee").textContent = machine.name;
      $("slotLineText").textContent = `${machine.lines.length} payline${machine.lines.length === 1 ? "" : "s"}`;
      $("slotsBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(bankrollValue(player))}</span><span>Wager ${money(totalWager)} (${money(lineBet)} x ${machine.lines.length})</span>${machine.progressive ? `<span>Mini ${money(state.jackpots.treasureVault.mini)} / Major ${money(state.jackpots.treasureVault.major)} / Grand ${money(state.jackpots.treasureVault.grand)}</span>` : ""}`
        : `<span>Link your profile to play slots.</span>`;
      const winningPositions = slotWinningPositions();
      $("slotReels").innerHTML = slotMachine.reels.map((reel, reelIndex) => `
        <div class="slot-reel ${slotMachine.spinning ? "spinning" : ""}">
          ${reel.map((symbolId, rowIndex) => renderSlotSymbol(symbolId, winningPositions.has(`${reelIndex}-${rowIndex}`))).join("")}
        </div>
      `).join("");
      if ($("slotLastWin")) $("slotLastWin").textContent = money(slotMachine.lastWin || 0);
      if ($("slotTotalBet")) $("slotTotalBet").textContent = money(totalWager);
      if ($("slotCredits")) $("slotCredits").textContent = player ? money(bankrollValue(player)) : "$0";
      if ($("slotMachineHint")) $("slotMachineHint").textContent = `${machine.name} • ${machine.lines.length} line${machine.lines.length === 1 ? "" : "s"}`;
      if ($("slotStatsPanel")) $("slotStatsPanel").innerHTML = renderSlotStatsPanel();
      if ($("slotPresetButtons")) $("slotPresetButtons").innerHTML = slotBetPresets(machine).map((amount) => `<button class="chip-btn ${Number($("slotBetAmount")?.value || 0) === amount ? "active" : ""}" type="button" data-slot-preset-button="${amount}">${money(amount)}</button>`).join("");
      $("slotStatus").innerHTML = `${escapeHtml(slotMachine.message)}${slotMachine.lastWin ? ` <strong class="${slotMachine.lastWin >= slotMachine.lastWager ? "money" : "loss"}">Paid ${money(slotMachine.lastWin)}</strong>` : ""}`;
      document.querySelectorAll('[data-action="slots-spin"]').forEach((button) => button.disabled = slotMachine.spinning);
      document.querySelectorAll('[data-action="slots-reset"]').forEach((button) => button.disabled = slotMachine.spinning);
    }

    function renderSlotStatsPanel() {
      const stats = state.gameStats.slots || {};
      const played = Number(stats.played || 0);
      const wins = Number(stats.wins || 0);
      const wagered = (state.history || []).filter((event) => event.category === "Slots").reduce((sum, event) => sum + Number(event.details?.wager || 0), 0);
      const won = (state.history || []).filter((event) => event.category === "Slots").reduce((sum, event) => sum + Number(event.details?.payout || 0), 0);
      const winRate = played ? wins / played * 100 : 0;
      const rtp = wagered ? won / wagered * 100 : 0;
      return [
        ["Spins Played", played],
        ["Total Wins", wins],
        ["Win Rate", `${winRate.toFixed(1)}%`],
        ["Biggest Win", money(stats.biggest || 0)],
        ["Total Wagered", money(wagered)],
        ["Return to Player", `${rtp.toFixed(1)}%`]
      ].map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("");
    }

    function slotWinningPositions() {
      const positions = new Set();
      if (slotMachine.spinning) return positions;
      const machine = currentSlotMachine();
      (slotMachine.winningLines || []).forEach((win) => {
        if (typeof win.line === "number") {
          const line = machine.lines[win.line - 1] || [];
          line.slice(0, Number(win.count || 0)).forEach((row, reel) => positions.add(`${reel}-${row}`));
        } else if (win.symbol === "scatter") {
          slotMachine.reels.forEach((reel, reelIndex) => reel.forEach((symbol, rowIndex) => {
            if (symbol === "scatter") positions.add(`${reelIndex}-${rowIndex}`);
          }));
        }
      });
      return positions;
    }

    function renderCraps() {
      const player = currentPlayer();
      const bankroll = player ? bankrollValue(player) : 0;
      $("crapsBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(bankroll)}</span><span>Point ${crapsGame.point || "Off"}</span>`
        : `<span>Link your profile to play craps.</span>`;
      $("crapsDice").innerHTML = crapsGame.lastRoll.length
        ? crapsGame.lastRoll.map((die) => `<span>${die}</span>`).join("")
        : `<span>?</span><span>?</span>`;
      $("crapsPoint").textContent = crapsGame.point || "Off";
      $("crapsStatus").textContent = crapsGame.message;
    }

    function rollCraps() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to a player before playing craps.");
      const amount = Math.max(1, Math.round(Number($("crapsBetAmount").value || 0)));
      const betType = $("crapsBetType").value;
      if (bankrollValue(player) < amount) return toast(`You need ${money(amount)} bankroll for that craps bet.`);
      const roll = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
      const total = roll[0] + roll[1];
      crapsGame.lastRoll = roll;
      crapsGame.lastTotal = total;
      crapsGame.betType = betType;
      crapsGame.betAmount = amount;
      trackDailyProgress(player.name, "crapsRolls", 1);
      let net = 0;
      let settled = true;
      let message = `Rolled ${total}.`;
      unlockAchievement("craps-first-roll", player.name);
      if (amount >= 100) unlockAchievement("craps-high-roller", player.name);
      if (betType === "field") {
        const payout = {2:2,3:1,4:1,9:1,10:1,11:1,12:3}[total] || 0;
        net = payout ? amount * payout : -amount;
        message = payout ? `Field wins on ${total}.` : `Field loses on ${total}.`;
        if (payout) unlockAchievement("craps-field-day", player.name);
      } else if (betType.startsWith("hard")) {
        const hardPoint = Number(betType.replace("hard", ""));
        const hard = roll[0] === roll[1] && total === hardPoint;
        const easy = total === hardPoint && roll[0] !== roll[1];
        if (hard) {
          net = amount * (hardPoint === 4 || hardPoint === 10 ? 7 : 9);
          message = `Hard ${hardPoint} hits!`;
          unlockAchievement("craps-hardway", player.name);
        } else if (easy || total === 7) {
          net = -amount;
          message = total === 7 ? `Seven out. Hardway loses.` : `Easy ${hardPoint}. Hardway loses.`;
        } else {
          settled = false;
          message = `Hard ${hardPoint} stays up after ${total}.`;
        }
      } else if (crapsGame.phase === "comeout") {
        if (betType === "pass") {
          if ([7, 11].includes(total)) {
            net = amount;
            message = `Pass Line wins on ${total}.`;
            unlockAchievement("craps-pass-line", player.name);
          } else if ([2, 3, 12].includes(total)) {
            net = -amount;
            message = `Pass Line craps out on ${total}.`;
          } else {
            crapsGame.point = total;
            crapsGame.phase = "point";
            settled = false;
            message = `Point is ${total}. Roll ${total} before 7.`;
          }
        } else {
          if ([2, 3].includes(total)) {
            net = amount;
            message = `Don't Pass wins on ${total}.`;
          } else if ([7, 11].includes(total)) {
            net = -amount;
            message = `Don't Pass loses on ${total}.`;
          } else if (total === 12) {
            net = 0;
            message = "Don't Pass pushes on 12.";
          } else {
            crapsGame.point = total;
            crapsGame.phase = "point";
            settled = false;
            message = `Point is ${total}. Don't Pass wins if 7 comes first.`;
          }
        }
      } else {
        if (total === crapsGame.point) {
          net = betType === "pass" ? amount : -amount;
          message = betType === "pass" ? `Point made: ${total}!` : `Point made: ${total}. Don't Pass loses.`;
          if (betType === "pass") unlockAchievement("craps-point-maker", player.name);
          crapsGame.phase = "comeout";
          crapsGame.point = 0;
        } else if (total === 7) {
          net = betType === "pass" ? -amount : amount;
          message = betType === "pass" ? "Seven out. Pass Line loses." : "Seven out. Don't Pass wins.";
          unlockAchievement("craps-seven-out", player.name);
          crapsGame.phase = "comeout";
          crapsGame.point = 0;
        } else {
          settled = false;
          message = `${total}. Point remains ${crapsGame.point}.`;
        }
      }
      crapsGame.message = message;
      if (settled) {
        adjustPlayerBankroll(player, net);
        if (net !== 0) applyMoneyResult(player, net, "craps", {silent:true, bankrollAlreadyAdjusted:true});
        state.gameStats.craps.played += 1;
        state.gameStats.craps.profit += net;
        if (net > 0) {
          crapsGame.wins += 1;
          state.gameStats.craps.wins += 1;
          state.gameStats.craps.biggest = Math.max(state.gameStats.craps.biggest || 0, net);
          addXP(player.name, crapsXP["First Roll"], "Craps: First Roll", {persist:false, toast:false});
          if (net >= 100) unlockAchievement("craps-table-profit", player.name);
          if (crapsGame.wins >= 3) unlockAchievement("craps-hot-dice", player.name);
          if (bankrollValue(player) < 50) unlockAchievement("craps-comeback", player.name);
        }
        addHistoryEvent({
          type:net > 0 ? "craps-win" : net < 0 ? "craps-loss" : "craps-push",
          category:"Craps",
          player:player.name,
          title:net > 0 ? "Craps Win" : net < 0 ? "Craps Loss" : "Craps Push",
          description:`${player.name} ${message}`,
          amount:net,
          details:{bet:amount, betType, roll:total}
        });
        resultToast("Craps Result", signedMoney(net), 5000);
      }
      save();
    }

    function resetCraps() {
      crapsGame = createEmptyCrapsGame();
      render();
      toast("Craps table reset.");
    }

    function renderFarkle() {
      if (!$("farkleDice")) return;
      const player = currentPlayer();
      $("farkleBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(bankrollValue(player))}</span><span>Bet ${money(Number($("farkleBetAmount")?.value || 25))}</span>`
        : `<span>Link your profile to play Farkle.</span>`;
      $("farkleDice").innerHTML = (farkleGame.dice || []).map((die) => `<span class="farkle-die">${dieFace(die)}</span>`).join("");
      $("farkleCombo").textContent = farkleGame.combo || "Ready";
      $("farkleScore").textContent = Number(farkleGame.score || 0).toLocaleString();
      $("farkleNet").textContent = signedMoney(farkleGame.lastNet || 0);
      $("farkleStatus").textContent = farkleGame.message || "Place a bet and roll.";
    }

    function dieFace(value) {
      return ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][Number(value || 1)] || "?";
    }

    function rollFarkle() {
      const player = currentPlayer();
      const bet = Math.max(1, Math.round(Number($("farkleBetAmount")?.value || 0)));
      if (!player) return toast("Link your profile to play Farkle.");
      if (bankrollValue(player) < bet) return toast(`You need ${money(bet)} bankroll for that Farkle roll.`);
      const dice = Array.from({length:6}, () => 1 + Math.floor(Math.random() * 6));
      const result = scoreFarkleRoll(dice);
      const multiplier = farklePayoutMultiplier(result.score);
      const payout = Math.round(bet * multiplier);
      const net = payout - bet;
      farkleGame = {dice, score:result.score, combo:result.combo, message:result.score > 0 ? `${result.combo}. Paid ${money(payout)}.` : "Farkle! No scoring dice.", lastNet:net};
      adjustPlayerBankroll(player, net);
      if (net !== 0) applyMoneyResult(player, net, "farkle", {silent:true, bankrollAlreadyAdjusted:true});
      trackDailyProgress(player.name, "farkleRounds", 1);
      if (net > 0) trackDailyProgress(player.name, "casinoProfit", net);
      addHistoryEvent({
        type:net > 0 ? "farkle-win" : net < 0 ? "farkle-loss" : "farkle-push",
        category:"Farkle",
        player:player.name,
        title:net > 0 ? "Farkle Win" : net < 0 ? "Farkle Loss" : "Farkle Push",
        description:`${player.name} rolled ${dice.join("-")} for ${result.score} points: ${result.combo}.`,
        amount:net,
        details:{bet, payout, net, dice, score:result.score, combo:result.combo}
      });
      save();
      resultToast("Farkle Result", signedMoney(net));
    }

    function scoreFarkleRoll(dice) {
      const counts = [0,0,0,0,0,0,0];
      dice.forEach((die) => counts[die] += 1);
      if ([1,2,3,4,5,6].every((die) => counts[die] === 1)) return {score:1500, combo:"Straight 1-6"};
      if (counts.filter((count) => count === 2).length === 3) return {score:1500, combo:"Three pairs"};
      if (counts.some((count) => count === 6)) return {score:3000, combo:"Six of a kind"};
      if (counts.some((count) => count === 5)) {
        const face = counts.findIndex((count) => count === 5);
        const leftover = counts[1] ? 100 : counts[5] ? 50 : 0;
        return {score:2000 + leftover, combo:`Five ${face}s`};
      }
      if (counts.some((count) => count === 4)) {
        const face = counts.findIndex((count) => count === 4);
        const leftover = (counts[1] - (face === 1 ? 4 : 0)) * 100 + (counts[5] - (face === 5 ? 4 : 0)) * 50;
        return {score:1000 + Math.max(0, leftover), combo:`Four ${face}s`};
      }
      let score = 0;
      const comboParts = [];
      for (let face = 1; face <= 6; face += 1) {
        if (counts[face] >= 3) {
          const triple = face === 1 ? 1000 : face * 100;
          score += triple;
          counts[face] -= 3;
          comboParts.push(`Triple ${face}s`);
        }
      }
      if (counts[1] > 0) {
        score += counts[1] * 100;
        comboParts.push(`${counts[1]} single 1${counts[1] === 1 ? "" : "s"}`);
      }
      if (counts[5] > 0) {
        score += counts[5] * 50;
        comboParts.push(`${counts[5]} single 5${counts[5] === 1 ? "" : "s"}`);
      }
      return {score, combo:comboParts.join(" + ") || "Farkle"};
    }

    function farklePayoutMultiplier(score) {
      if (score <= 0) return 0;
      if (score >= 3000) return 8;
      if (score >= 2000) return 5;
      if (score >= 1500) return 3;
      if (score >= 1000) return 2;
      if (score >= 500) return 1.35;
      return 0.75;
    }

    function slotBetPresets(machine = currentSlotMachine()) {
      const presets = {
        crownLine: [1, 2, 5, 10, 25],
        lucky7s: [5, 10, 25, 50, 100],
        treasureVault: [10, 25, 50, 100, 250],
        familyFortune: [1, 5, 10, 20, 50]
      };
      return presets[slotMachine.machine] || presets.crownLine;
    }

    function syncSlotBetPresets(machine = currentSlotMachine()) {
      const select = $("slotBetPreset");
      if (!select) return;
      const current = select.value;
      const options = slotBetPresets(machine);
      const label = machine.lines.length === 1 ? "1 line" : `${machine.lines.length} lines`;
      const nextHtml = [`<option value="">Select preset</option>`, ...options.map((amount) => `<option value="${amount}">${money(amount)} x ${label}</option>`)].join("");
      if (select.innerHTML !== nextHtml) select.innerHTML = nextHtml;
      select.value = options.includes(Number(current)) ? current : "";
    }

    function renderSlotSymbol(symbolId, winning = false) {
      const symbol = currentSlotSymbols().find((item) => item.id === symbolId) || slotSymbols.find((item) => item.id === symbolId) || slotSymbols[0];
      const classes = ["slot-symbol", symbol.wild ? "wild" : "", symbol.scatter ? "scatter" : "", winning ? "win" : ""].filter(Boolean).join(" ");
      return `<span class="${classes}" title="${escapeAttr(symbol.label)}">${symbol.display}</span>`;
    }

    function selectedSlotLineBet() {
      const preset = Number($("slotBetPreset")?.value || 0);
      const manual = Number($("slotBetAmount")?.value || 0);
      return Math.max(0, Math.round(preset || manual));
    }

    function currentSlotMachine() {
      return slotMachines[slotMachine.machine] || slotMachines.crownLine;
    }

    function currentSlotSymbols() {
      if (slotMachine.machine === "lucky7s") {
        return slotSymbols.filter((symbol) => ["cherry","bell","seven","diamond","scatter","crown"].includes(symbol.id));
      }
      if (slotMachine.machine === "familyFortune") {
        return [
          {id:"darren", label:"Darren", display:"D", weight:8, pays:{3:8,4:30,5:160}},
          {id:"bhumika", label:"Bhumika", display:"B", weight:8, pays:{3:8,4:30,5:160}},
          {id:"maitri", label:"Maitri", display:"M", weight:8, pays:{3:8,4:30,5:160}},
          ...slotSymbols.filter((symbol) => ["wild","scatter","crown","chip","cherry"].includes(symbol.id))
        ];
      }
      return slotSymbols;
    }

    function weightedSlotSymbol() {
      const symbols = currentSlotSymbols();
      const total = symbols.reduce((sum, symbol) => sum + symbol.weight, 0);
      let roll = Math.random() * total;
      for (const symbol of symbols) {
        roll -= symbol.weight;
        if (roll <= 0) return symbol.id;
      }
      return symbols[symbols.length - 1].id;
    }

    function spinSlotGrid() {
      const machine = currentSlotMachine();
      return Array.from({length: machine.reels}, () => Array.from({length: machine.rows}, weightedSlotSymbol));
    }

    function evaluateSlots(reels, lineBet) {
      const machine = currentSlotMachine();
      const wins = [];
      let totalWin = 0;
      machine.lines.forEach((line, index) => {
        const symbols = line.map((row, reel) => reels[reel][row]);
        const result = evaluateSlotLine(symbols, lineBet);
        if (result.win > 0) {
          totalWin += result.win;
          wins.push({line:index + 1, ...result});
        }
      });
      const scatterCount = reels.flat().filter((symbol) => symbol === "scatter").length;
      if (scatterCount >= 3) {
        const scatterWin = Math.round(lineBet * machine.lines.length * ({3:5,4:20,5:100}[Math.min(scatterCount, 5)] || 0));
        totalWin += scatterWin;
        wins.push({line:"Scatter", symbol:"scatter", count:scatterCount, win:scatterWin});
      }
      if (machine.progressive) {
        const roll = Math.random();
        const pools = state.jackpots.treasureVault;
        if (roll < 0.0005) {
          totalWin += Math.round(pools.grand);
          wins.push({line:"Grand", symbol:"crown", count:5, win:Math.round(pools.grand), jackpot:"grand"});
          pools.grand = 25000;
        } else if (roll < 0.003) {
          totalWin += Math.round(pools.major);
          wins.push({line:"Major", symbol:"crown", count:4, win:Math.round(pools.major), jackpot:"major"});
          pools.major = 2500;
        } else if (roll < 0.015) {
          totalWin += Math.round(pools.mini);
          wins.push({line:"Mini", symbol:"crown", count:3, win:Math.round(pools.mini), jackpot:"mini"});
          pools.mini = 250;
        }
      }
      return {totalWin: Math.round(totalWin), wins};
    }

    function evaluateSlotLine(symbols, lineBet) {
      const regularSymbols = currentSlotSymbols().filter((symbol) => !symbol.scatter && !symbol.wild);
      let best = {win:0, symbol:"", count:0};
      regularSymbols.forEach((candidate) => {
        let count = 0;
        for (const symbol of symbols) {
          if (symbol === candidate.id || symbol === "wild") count += 1;
          else break;
        }
        const multiplier = candidate.pays[count] || 0;
        const win = Math.round(lineBet * multiplier);
        if (win > best.win) best = {win, symbol:candidate.id, count};
      });
      if (symbols.every((symbol) => symbol === "wild")) {
        const wild = slotSymbols.find((symbol) => symbol.id === "wild");
        const win = Math.round(lineBet * wild.pays[5]);
        if (win > best.win) best = {win, symbol:"wild", count:5};
      }
      return best;
    }

    function spinSlots() {
      const player = currentPlayer();
      const lineBet = selectedSlotLineBet();
      const machine = currentSlotMachine();
      const wager = lineBet * machine.lines.length;
      if (slotMachine.spinning) return;
      if (!player) return toast("Link your profile to a player before playing slots.");
      if (lineBet <= 0) return toast("Enter a bet per line or choose a preset.");
      if (bankrollValue(player) < wager) return toast(`You need ${money(wager)} for 9 active lines.`);
      slotMachine.spinning = true;
      slotMachine.lastWin = 0;
      slotMachine.lastWager = wager;
      slotMachine.winningLines = [];
      slotMachine.jackpot = false;
      slotMachine.message = `Spinning ${money(lineBet)} across ${machine.lines.length} line${machine.lines.length === 1 ? "" : "s"}...`;
      render();
      let ticks = 0;
      const animation = setInterval(() => {
        slotMachine.reels = spinSlotGrid();
        ticks += 1;
        renderSlots();
        if (ticks >= 8) {
          clearInterval(animation);
          finishSlotSpin(player, lineBet, wager);
        }
      }, 120);
    }

    function finishSlotSpin(player, lineBet, wager) {
      player = freshPlayer(player);
      if (!player) {
        slotMachine.spinning = false;
        slotMachine.message = "Spin cancelled because the linked player could not be found.";
        renderSlots();
        return;
      }
      slotMachine.reels = spinSlotGrid();
      const result = evaluateSlots(slotMachine.reels, lineBet);
      const machine = currentSlotMachine();
      const net = result.totalWin - wager;
      if (machine.progressive) {
        state.jackpots.treasureVault.mini += Math.round(wager * 0.02);
        state.jackpots.treasureVault.major += Math.round(wager * 0.01);
        state.jackpots.treasureVault.grand += Math.round(wager * 0.005);
      }
      slotMachine.spinning = false;
      slotMachine.lastWin = result.totalWin;
      slotMachine.winningLines = result.wins;
      slotMachine.jackpot = result.wins.some((win) => win.symbol === "crown" && win.count === 5);
      slotMachine.message = result.totalWin > 0
        ? `${result.wins.length} winning line${result.wins.length === 1 ? "" : "s"}. Net ${signedMoney(net)}.`
        : `No winning lines. Net ${signedMoney(net)}.`;
      adjustPlayerBankroll(player, net);
      if (net !== 0) applyMoneyResult(player, net, "slots", {silent:true, bankrollAlreadyAdjusted:true});
      state.gameStats.slots.played = Number(state.gameStats.slots.played || 0) + 1;
      trackDailyProgress(player.name, "slotSpins", 1);
      trackDailyProgress(player.name, `slotMachine:${slotMachine.machine}`, 1);
      if (net > 0) trackDailyProgress(player.name, "casinoProfit", net);
      if (result.totalWin > wager) state.gameStats.slots.wins = Number(state.gameStats.slots.wins || 0) + 1;
      state.gameStats.slots.profit = Number(state.gameStats.slots.profit || 0) + net;
      state.gameStats.slots.biggest = Math.max(Number(state.gameStats.slots.biggest || 0), result.totalWin);
      if (net > 0) maybeDropCasinoTicket(player, slotMachine.jackpot ? 1 : 0.08, slotMachine.jackpot ? "slots jackpot" : "slots win");
      addHistoryEvent({
        type:net > 0 ? "slots-win" : "slots-loss",
        category:"Slots",
        player:player.name,
        title:net > 0 ? "Slots Win" : "Slots Loss",
        description:net > 0 ? `${player.name} won ${money(result.totalWin)} on ${machine.name} from a ${money(wager)} spin.` : `${player.name} spun ${money(wager)} on ${machine.name} and won ${money(result.totalWin)}.`,
        amount:net,
        details:{machine:slotMachine.machine, machineName:machine.name, wager, payout:result.totalWin, net}
      });
      unlockAchievement("slots-first-spin", player.name);
      if (result.totalWin > 0) unlockAchievement("slots-first-win", player.name);
      if (slotMachine.jackpot) unlockAchievement("slots-jackpot-hunter", player.name);
      if (result.wins.some((win) => win.jackpot === "grand")) unlockAchievement("slots-grand-vault", player.name);
      if (slotMachine.machine === "familyFortune" && result.wins.some((win) => ["darren","bhumika","maitri"].includes(win.symbol))) {
        unlockAchievement("slots-family-fortune", player.name);
        slotMachine.message += " Family Fortune bonus!";
      }
      save();
      const title = result.totalWin > 0
        ? slotMachine.jackpot ? `${player.name} hits Jackpot!` : `${player.name} wins on slots`
        : `Slots miss`;
      resultToast(title, signedMoney(net));
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

    function isNaturalBlackjack(hand) {
      return Boolean(hand && !hand.fromSplit && Array.isArray(hand.cards) && hand.cards.length === 2 && handValue(hand.cards) === 21);
    }

    function blackjackWinPayout(hand, dealerNatural = false) {
      if (dealerNatural) return Number(hand.bet || 0);
      return isNaturalBlackjack(hand) ? Math.round(Number(hand.bet || 0) * 1.5) : Number(hand.bet || 0);
    }

    function selectedBet() {
      const manual = Number($("soloBetAmount").value || 0);
      return Math.max(0, manual);
    }

    function setSoloBetAmount(amount) {
      const next = Math.max(1, Math.round(Number(amount || 0)));
      if ($("soloBetAmount")) $("soloBetAmount").value = String(next);
    }

    function adjustSoloBet(delta) {
      setSoloBetAmount(Number($("soloBetAmount")?.value || 0) + Number(delta || 0));
    }

    function startSoloBlackjack() {
      const player = currentPlayer();
      const bet = selectedBet();
      if (soloBlackjack.phase === "playing" || soloBlackjack.phase === "dealing") return toast("Finish the current blackjack hand first.");
      if (!player) return toast("Link your profile to a player before playing blackjack.");
      if (bet <= 0) return toast("Enter a bet or choose a standard bet.");
      if (bankrollValue(player) < bet) return toast("Not enough bankroll for that bet.");
      soloBlackjack = createEmptyBlackjackGame();
      soloBlackjack.deck = createDeck();
      soloBlackjack.bet = bet;
      soloBlackjack.phase = "dealing";
      soloBlackjack.playerHands = [{cards: [drawCard(soloBlackjack), drawCard(soloBlackjack)], bet, doubled: false, stood: false, result: ""}];
      soloBlackjack.playerHand = soloBlackjack.playerHands[0].cards;
      soloBlackjack.activeHand = 0;
      soloBlackjack.splits = 0;
      soloBlackjack.dealerHand = [drawCard(soloBlackjack), drawCard(soloBlackjack)];
      soloBlackjack.revealDealer = false;
      soloBlackjack.dealerAnimateIndexes = [0, 1];
      soloBlackjack.dealerFlipIndexes = [];
      soloBlackjack.playerAnimateIndexes = {0: [0, 1]};
      soloBlackjack.message = `Dealing ${money(bet)} hand...`;
      render();
      const playerTotal = handValue(activeBlackjackHand().cards);
      const dealerTotal = handValue(soloBlackjack.dealerHand);
      setTimeout(() => {
        if (playerTotal === 21 || dealerTotal === 21) {
          settleSoloBlackjack();
        } else {
          soloBlackjack.phase = "playing";
          clearBlackjackAnimations();
          soloBlackjack.message = `Bet ${money(bet)}. Hit, stand, split a pair, or double down.`;
          render();
        }
      }, CARD_DEAL_SETTLE_MS);
    }

    function hitSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      const hand = activeBlackjackHand();
      if (!hand) return;
      hand.cards.push(drawCard(soloBlackjack));
      soloBlackjack.playerAnimateIndexes = {[soloBlackjack.activeHand]: [hand.cards.length - 1]};
      soloBlackjack.dealerAnimateIndexes = [];
      soloBlackjack.dealerFlipIndexes = [];
      if (handValue(hand.cards) > 21) {
        hand.stood = true;
        hand.result = "Bust";
        advanceBlackjackHand();
      } else {
        soloBlackjack.message = `Hand ${soloBlackjack.activeHand + 1}: card dealt.`;
      }
      if (soloBlackjack.phase !== "dealing") render();
    }

    function standSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      const hand = activeBlackjackHand();
      if (hand) hand.stood = true;
      advanceBlackjackHand();
      if (soloBlackjack.phase !== "dealing") render();
    }

    function splitSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      const hand = activeBlackjackHand();
      const player = currentPlayer();
      if (!hand || hand.cards.length !== 2 || hand.cards[0].rank !== hand.cards[1].rank) return toast("Split is only available on matching pairs.");
      if (soloBlackjack.splits >= 3 || blackjackHands().length >= 4) return toast("Split limit reached: four hands maximum.");
      if (bankrollValue(player) < totalBlackjackExposure() + hand.bet) return toast("Not enough bankroll to cover the split.");
      unlockAchievement("blackjack-perfect-pair", player.name);
      const splitCard = hand.cards.pop();
      hand.fromSplit = true;
      hand.cards.push(drawCard(soloBlackjack));
      const newHand = {cards: [splitCard, drawCard(soloBlackjack)], bet: hand.bet, doubled: false, stood: false, result: "", fromSplit: true};
      soloBlackjack.playerHands.splice(soloBlackjack.activeHand + 1, 0, newHand);
      soloBlackjack.splits += 1;
      soloBlackjack.playerAnimateIndexes = {
        [soloBlackjack.activeHand]: [1],
        [soloBlackjack.activeHand + 1]: [1]
      };
      soloBlackjack.message = `Pair split. Playing hand ${soloBlackjack.activeHand + 1} of ${blackjackHands().length}.`;
      render();
    }

    function doubleSoloBlackjack() {
      if (soloBlackjack.phase !== "playing") return toast("Deal a hand first.");
      const hand = activeBlackjackHand();
      const player = currentPlayer();
      if (!hand || hand.cards.length !== 2) return toast("Double down is only available on your first two cards.");
      if (bankrollValue(player) < totalBlackjackExposure() + hand.bet) return toast("Not enough bankroll to double down.");
      hand.bet *= 2;
      hand.doubled = true;
      hand.cards.push(drawCard(soloBlackjack));
      soloBlackjack.playerAnimateIndexes = {[soloBlackjack.activeHand]: [hand.cards.length - 1]};
      hand.stood = true;
      if (handValue(hand.cards) > 21) hand.result = "Bust";
      soloBlackjack.message = `Hand ${soloBlackjack.activeHand + 1} doubled down.`;
      advanceBlackjackHand();
      if (soloBlackjack.phase !== "dealing") render();
    }

    function advanceBlackjackHand() {
      const hands = blackjackHands();
      const next = hands.findIndex((hand, index) => index > soloBlackjack.activeHand && !hand.stood && handValue(hand.cards) <= 21);
      if (next >= 0) {
        soloBlackjack.activeHand = next;
        soloBlackjack.message = `Playing hand ${next + 1} of ${hands.length}.`;
        return;
      }
      if (hands.some((hand) => handValue(hand.cards) <= 21)) {
        revealDealerAndSettle();
        return;
      }
      settleSoloBlackjack();
    }

    function revealDealerAndSettle() {
      soloBlackjack.phase = "dealing";
      soloBlackjack.revealDealer = true;
      soloBlackjack.dealerAnimateIndexes = [];
      soloBlackjack.dealerFlipIndexes = [1];
      soloBlackjack.playerAnimateIndexes = {};
      soloBlackjack.message = "Dealer reveals and draws to 17.";
      render();
      setTimeout(() => {
        const animatedIndexes = [];
        while (handValue(soloBlackjack.dealerHand) < 17) {
          soloBlackjack.dealerHand.push(drawCard(soloBlackjack));
          animatedIndexes.push(soloBlackjack.dealerHand.length - 1);
        }
        soloBlackjack.dealerFlipIndexes = [];
        soloBlackjack.dealerAnimateIndexes = animatedIndexes;
        render();
        setTimeout(() => {
          clearBlackjackAnimations();
          settleSoloBlackjack();
        }, Math.max(650, animatedIndexes.length * CARD_DEAL_DELAY_MS + 360));
      }, 500);
    }

    function clearBlackjackAnimations() {
      soloBlackjack.animateCards = false;
      soloBlackjack.dealerAnimateIndexes = [];
      soloBlackjack.dealerFlipIndexes = [];
      soloBlackjack.playerAnimateIndexes = {};
    }

    function totalBlackjackExposure() {
      return blackjackHands().reduce((sum, hand) => sum + Number(hand.bet || 0), 0);
    }

    function settleSoloBlackjack() {
      const player = freshPlayer(currentPlayer());
      if (!player) return;
      soloBlackjack.phase = "done";
      soloBlackjack.revealDealer = true;
      const hands = blackjackHands();
      while (hands.some((hand) => handValue(hand.cards) <= 21) && handValue(soloBlackjack.dealerHand) < 17) {
        soloBlackjack.dealerHand.push(drawCard(soloBlackjack));
      }
      clearBlackjackAnimations();
      const dealerTotal = handValue(soloBlackjack.dealerHand);
      const dealerNatural = soloBlackjack.dealerHand.length === 2 && dealerTotal === 21;
      let totalDelta = 0;
      let wins = 0;
      let losses = 0;
      let pushes = 0;
      hands.forEach((hand) => {
        const playerTotal = handValue(hand.cards);
        const playerNatural = isNaturalBlackjack(hand);
        let delta = 0;
        if (playerTotal > 21) {
          delta = -hand.bet;
          losses += 1;
          hand.result = "Bust";
        } else if (playerNatural && dealerNatural) {
          pushes += 1;
          hand.result = "Push";
        } else if (playerNatural || dealerTotal > 21 || playerTotal > dealerTotal) {
          delta = blackjackWinPayout(hand, dealerNatural);
          wins += 1;
          trackDailyProgress(player.name, "blackjackWins", 1);
          hand.result = playerNatural ? "Blackjack" : "Win";
        } else if (dealerNatural) {
          delta = -hand.bet;
          losses += 1;
          hand.result = "Loss";
        } else if (playerTotal === dealerTotal) {
          pushes += 1;
          hand.result = "Push";
        } else {
          delta = -hand.bet;
          losses += 1;
          hand.result = "Loss";
        }
        totalDelta += delta;
        if (delta > 0) {
          addXP(player.name, blackjackXP["Win Hand"], "Blackjack: Win Hand", {persist: false, toast: false});
          if (playerNatural) addXP(player.name, blackjackXP["Natural Blackjack"], "Blackjack: Natural Blackjack", {persist: false, toast: false});
          if (hand.doubled) unlockAchievement("blackjack-double-trouble", player.name);
          if (hand.cards.length >= 5 && playerTotal <= 21) addXP(player.name, blackjackXP["Five Card Charlie"], "Blackjack: Five Card Charlie", {persist: false, toast: false});
          if (hand.cards.length >= 6 && playerTotal <= 21) unlockAchievement("blackjack-six-card-miracle", player.name);
        }
      });
      adjustPlayerBankroll(player, totalDelta);
      if (totalDelta !== 0) applyMoneyResult(player, totalDelta, "solo blackjack", {silent:true, bankrollAlreadyAdjusted:true});
      state.gameStats.blackjack.played = Number(state.gameStats.blackjack.played || 0) + hands.length;
      trackDailyProgress(player.name, "blackjackHands", hands.length);
      state.gameStats.blackjack.wins = Number(state.gameStats.blackjack.wins || 0) + wins;
      state.gameStats.blackjack.profit = Number(state.gameStats.blackjack.profit || 0) + totalDelta;
      if (totalDelta > 0) maybeDropCasinoTicket(player, 0.12, "blackjack win");
      soloBlackjack.message = `Dealer ${dealerTotal}. ${wins} win, ${losses} loss, ${pushes} push. Net ${signedMoney(totalDelta)}.`;
      addHistoryEvent({
        type:totalDelta > 0 ? "blackjack-win" : totalDelta < 0 ? "blackjack-loss" : "blackjack-push",
        category:"Blackjack",
        player:player.name,
        title:totalDelta > 0 ? "Blackjack Win" : totalDelta < 0 ? "Blackjack Loss" : "Blackjack Push",
        description:`${player.name} played solo blackjack. ${soloBlackjack.message}`,
        amount:totalDelta,
        details:{dealer:dealerTotal, wins, losses, pushes}
      });
      save();
      const firstHand = hands[0];
      const playerTotal = firstHand ? handValue(firstHand.cards) : 0;
      const natural = firstHand?.cards?.length === 2 && playerTotal === 21;
      const resultTitle = hands.length > 1
        ? `${player.name} results: ${wins} win, ${losses} loss`
        : totalDelta > 0
          ? `${player.name} wins: ${natural ? "Blackjack" : playerTotal}`
          : totalDelta < 0
            ? `Dealer wins: ${dealerTotal}`
            : `Push: ${dealerTotal}`;
      resultToast(resultTitle, signedMoney(totalDelta));
    }

    function currentProfileKey() {
      if (firebaseState.user?.uid) return firebaseState.user.uid;
      if (firebaseDisabled) return "local-test";
      const profile = currentProfile();
      const keyBase = profile.playerName || profile.displayName || profile.email || "local";
      return `local-${String(keyBase).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "player"}`;
    }

    function currentSeat(role = "player") {
      const profile = currentProfile();
      const player = currentPlayer();
      return {
        name: profile.displayName || player?.name || "Player",
        playerId: player?.id || "",
        playerName: player?.name || profile.playerName || "",
        role,
        ready: false,
        readyBet: 0,
        joinedAt: Date.now()
      };
    }

    function openBlackjackRoomDialog() {
      els.roomName.value = `${currentProfile().displayName || currentPlayer()?.name || "Family"} Blackjack`;
      els.roomMessage.textContent = "Create a live room. Everyone joins as a player against the computer dealer.";
      els.blackjackRoomDialog.showModal();
    }

    function closeBlackjackRoomDialog() {
      els.blackjackRoomDialog.close();
    }

    async function createBlackjackRoom() {
      if (!currentPlayer()) return toast("Link your profile to a player before creating a room.");
      const name = els.roomName.value.trim() || "Family Blackjack";
      const id = `blackjack-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const room = {
        id,
        game: "blackjack",
        name,
        status: "open",
        hostKey: currentProfileKey(),
        closedReason: "",
        createdAt: Date.now(),
        maxPlayers: 4,
        table: createEmptyMultiplayerBlackjackTable(),
        seats: {
          [currentProfileKey()]: currentSeat("player")
        }
      };
      state.onlineRooms[id] = room;
      log(`${currentSeat().name} opened blackjack room ${name}.`);
      closeBlackjackRoomDialog();
      blackjackMode = "multi";
      activeOnlineGame = "blackjack";
      activeRoomId = id;
      activeView = "online";
      await saveRoom(room);
      toast(`Room created: ${name}`);
    }

    async function joinBlackjackRoom(roomId) {
      if (!currentPlayer()) return toast("Link your profile to a player before joining a room.");
      const room = await refreshRoomFromCloud(roomId);
      if (!room || room.status !== "open") return toast("That room is no longer open.");
      room.seats = room.seats || {};
      if (!room.seats[currentProfileKey()] && Object.keys(room.seats).length >= 4) return toast("That blackjack room is full.");
      room.seats[currentProfileKey()] = currentSeat("player");
      room.table = room.table || createEmptyMultiplayerBlackjackTable();
      log(`${currentSeat().name} joined blackjack room ${room.name}.`);
      activeRoomId = roomId;
      activeOnlineGame = "blackjack";
      activeView = "online";
      await saveRoom(room);
      toast(`Joined ${room.name}.`);
    }

    function openPokerRoomDialog() {
      els.pokerRoomName.value = `${currentProfile().displayName || currentPlayer()?.name || "Family"} Hold'em`;
      els.pokerSmallBlind.value = "5";
      els.pokerBigBlind.value = "10";
      els.pokerBuyIn.value = "465";
      els.pokerMaxPlayers.value = "8";
      renderPokerBuyInPreview();
      els.pokerRoomMessage.textContent = "Create a Texas Hold'em multiplayer room.";
      els.pokerRoomDialog.showModal();
    }

    function recommendedPokerChips(amount) {
      const value = Math.max(465, Math.round(Number(amount || 465)));
      if (value === 465) {
        const chips = {white:10, red:10, blue:8, green:5, black:2};
        return {chips, text:chipText(chips)};
      }
      const chips = {white:10, red:10, blue:8, green:5, black:2};
      let remaining = value - 465;
      [["black",100],["green",25],["blue",10],["red",5],["white",1]].forEach(([color, denomination]) => {
        const count = Math.floor(remaining / denomination);
        chips[color] += count;
        remaining -= count * denomination;
      });
      return {chips, text: chipText(chips)};
    }

    function renderPokerBuyInPreview() {
      if (!els.pokerBuyInPreview) return;
      const amount = Math.max(465, Math.round(Number(els.pokerBuyIn?.value || 465)));
      const recommendation = recommendedPokerChips(amount);
      els.pokerBuyInPreview.innerHTML = `<strong>${money(amount)} recommended stack</strong><span>${escapeHtml(recommendation.text)}</span><div class="chip-visual-row">${renderChipVisuals(recommendation.chips)}</div>`;
    }

    function renderChipVisuals(chips) {
      return Object.entries({white:1,red:5,blue:10,green:25,black:100}).map(([color, value]) => {
        const count = Number(chips[color] || 0);
        return count ? `<span class="chip-visual chip-${color}" title="${count} x ${money(value)}"><b>${count}</b><small>${money(value)}</small></span>` : "";
      }).join("");
    }

    function closePokerRoomDialog() {
      els.pokerRoomDialog.close();
    }

    async function createPokerRoom() {
      if (!currentPlayer()) return toast("Link your profile to a player before creating a room.");
      const name = els.pokerRoomName.value.trim() || "Family Hold'em";
      const smallBlind = Math.max(1, Number(els.pokerSmallBlind.value || 0));
      const bigBlind = Math.max(smallBlind * 2, Number(els.pokerBigBlind.value || 0));
      const buyIn = Math.max(465, Math.round(Number(els.pokerBuyIn.value || 465)));
      const maxPlayers = Math.min(8, Math.max(2, Number(els.pokerMaxPlayers.value || 8)));
      const hostPlayer = currentPlayer();
      if (bankrollValue(hostPlayer) < buyIn) return toast(`You need ${money(buyIn)} bankroll for this buy-in.`);
      const id = `poker-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const hostSeat = {...currentSeat("player"), seatNumber:1, buyIn, stack:buyIn, joinedAt:Date.now()};
      const room = {
        id,
        game: "poker",
        variant: "texas-holdem",
        name,
        status: "open",
        hostKey: currentProfileKey(),
        closedReason: "",
        smallBlind,
        bigBlind,
        buyIn,
        maxPlayers,
        kickerRules: true,
        xpAuto: true,
        createdAt: Date.now(),
        table: createEmptyPokerTable(),
        handHistory: [],
        seats: {
          [currentProfileKey()]: hostSeat
        }
      };
      adjustPlayerBankroll(hostPlayer, -buyIn);
      state.onlineRooms[id] = room;
      addHistoryEvent({
        type:"poker-buyin",
        category:"Poker",
        player:hostPlayer.name,
        title:"Poker Buy-In",
        description:`${hostSeat.name} opened ${name} and bought in for ${money(buyIn)}.`,
        amount:-buyIn,
        details:{roomId:id, smallBlind, bigBlind, buyIn}
      });
      closePokerRoomDialog();
      activeOnlineGame = "poker";
      activeRoomId = id;
      localStorage.setItem(activeRoomStorageKey, id);
      activeView = "online";
      await saveRoom(room);
      await persistSettledRoomState(room);
      toast(`Poker room created: ${name}`);
    }

    async function joinPokerRoom(roomId) {
      if (!currentPlayer()) return toast("Link your profile to a player before joining a room.");
      const room = await refreshRoomFromCloud(roomId);
      if (!room || room.status !== "open") return toast("That poker room is no longer open.");
      room.seats = room.seats || {};
      const key = currentProfileKey();
      if (room.seats[key]) {
        activeRoomId = roomId;
        activeOnlineGame = "poker";
        activeView = "online";
        localStorage.setItem(activeRoomStorageKey, roomId);
        render();
        return;
      }
      if (Object.keys(room.seats).length >= Number(room.maxPlayers || 8)) return toast("That poker room is full.");
      const player = currentPlayer();
      const buyIn = Math.max(465, Number(room.buyIn || 465));
      if (bankrollValue(player) < buyIn) return toast(`You need ${money(buyIn)} bankroll to join this table.`);
      const usedSeats = new Set(Object.values(room.seats).map((seat) => Number(seat.seatNumber || 0)));
      let seatNumber = 1;
      while (usedSeats.has(seatNumber)) seatNumber += 1;
      room.seats[key] = {...currentSeat("player"), seatNumber, buyIn, stack:buyIn, joinedAt:Date.now()};
      adjustPlayerBankroll(player, -buyIn);
      room.table = room.table || createEmptyPokerTable();
      addHistoryEvent({
        type:"poker-buyin",
        category:"Poker",
        player:player.name,
        title:"Poker Buy-In",
        description:`${currentSeat().name} joined ${room.name} for ${money(buyIn)}.`,
        amount:-buyIn,
        details:{roomId, buyIn, seatNumber}
      });
      activeRoomId = roomId;
      localStorage.setItem(activeRoomStorageKey, roomId);
      activeOnlineGame = "poker";
      activeView = "online";
      await saveRoom(room);
      await persistSettledRoomState(room);
      toast(`Joined ${room.name}.`);
    }

    async function dealPokerHand() {
      const room = await refreshRoomFromCloud(activeRoomId);
      if (!room || room.game !== "poker") return toast("Open a poker room first.");
      if (!isRoomHost(room)) return toast("Only the host can deal Hold'em.");
      const entries = pokerSeatEntries(room);
      if (entries.length < 2) return toast("Hold'em needs at least 2 players.");
      const brokeSeat = entries.find(([, seat]) => {
        return Number(seat.stack || 0) < Number(room.bigBlind || 0);
      });
      if (brokeSeat) return toast(`${brokeSeat[1].name} needs at least the big blind in table chips.`);
      const handNumber = Number(room.pokerHandNumber || 0);
      const dealerIndex = handNumber % entries.length;
      const smallIndex = entries.length === 2 ? dealerIndex : (dealerIndex + 1) % entries.length;
      const bigIndex = entries.length === 2 ? (dealerIndex + 1) % entries.length : (dealerIndex + 2) % entries.length;
      const firstActionIndex = entries.length === 2 ? smallIndex : (bigIndex + 1) % entries.length;
      const table = createEmptyPokerTable();
      table.deck = createDeck();
      table.phase = "preflop";
      table.handNumber = handNumber + 1;
      table.dealerIndex = dealerIndex;
      table.dealerButton = entries[dealerIndex][0];
      table.smallBlindKey = entries[smallIndex][0];
      table.bigBlindKey = entries[bigIndex][0];
      table.activeSeatKey = entries[firstActionIndex][0];
      table.currentBet = Number(room.bigBlind || 0);
      table.minRaise = Number(room.bigBlind || 0);
      table.pot = 0;
      table.hands = {};
      table.stacks = {};
      table.folded = {};
      table.bets = {};
      table.committed = {};
      table.acted = {};
      table.handAnimateIndexes = {};
      entries.forEach(([key]) => {
        table.hands[key] = [drawCard(table), drawCard(table)];
        table.stacks[key] = Number(room.seats[key].stack || 0);
        table.handAnimateIndexes[key] = [0, 1];
        table.bets[key] = 0;
        table.committed[key] = 0;
        table.acted[key] = false;
      });
      postPokerBlind(room, entries[smallIndex][0], Number(room.smallBlind || 0), table);
      postPokerBlind(room, entries[bigIndex][0], Number(room.bigBlind || 0), table);
      table.community = [drawCard(table), drawCard(table), drawCard(table), drawCard(table), drawCard(table)];
      table.animateCommunityIndexes = [];
      table.message = `Preflop. Dealer: ${entries[dealerIndex][1].name}. Blinds posted ${money(room.smallBlind)} / ${money(room.bigBlind)}. ${room.seats[table.activeSeatKey].name} acts first.`;
      recordPokerAction(room, `Hand #${table.handNumber}`, `${entries[dealerIndex][1].name} is dealer. ${entries[smallIndex][1].name} posts ${money(room.smallBlind)}. ${entries[bigIndex][1].name} posts ${money(room.bigBlind)}.`);
      room.table = table;
      room.pokerHandNumber = handNumber + 1;
      await saveRoom(room);
      setTimeout(() => {
        const latest = state.onlineRooms[room.id];
        if (!latest?.table) return;
        latest.table.handAnimateIndexes = {};
        saveRoom(latest);
      }, CARD_DEAL_SETTLE_MS);
    }

    function pokerSeatEntries(room) {
      return Object.entries(room.seats || {}).sort((a, b) => Number(a[1].seatNumber || 99) - Number(b[1].seatNumber || 99));
    }

    function postPokerBlind(room, key, amount, table) {
      if (!room.seats?.[key] || amount <= 0) return;
      commitPokerChips(room, table, key, amount);
    }

    function commitPokerChips(room, table, key, amount) {
      const value = Math.max(0, Math.round(Number(amount || 0)));
      if (!room.seats?.[key] || value <= 0) return;
      table.stacks[key] = Math.max(0, Number(table.stacks?.[key] ?? room.seats[key].stack ?? 0) - value);
      room.seats[key].stack = table.stacks[key];
      table.bets[key] = Number(table.bets[key] || 0) + value;
      table.committed[key] = Number(table.committed[key] || 0) + value;
      table.pot += value;
    }

    async function pokerPlayerAction(kind) {
      const room = await refreshRoomFromCloud(activeRoomId);
      const table = room?.table;
      const key = currentProfileKey();
      if (!room || room.game !== "poker" || !table) return toast("Open a poker room first.");
      if (table.activeSeatKey !== key || !["preflop","flop","turn","river"].includes(table.phase)) return toast("It is not your turn.");
      const seat = room.seats?.[key];
      const owed = Math.max(0, Number(table.currentBet || 0) - Number(table.bets?.[key] || 0));
      if (kind === "check") {
        if (owed > 0) return toast(`Call ${money(owed)} or fold.`);
        table.acted[key] = true;
        table.message = `${seat.name} checks.`;
      }
      if (kind === "call") {
        if (owed <= 0) return toast("Nothing to call. Check or raise.");
        if (Number(table.stacks?.[key] || 0) < owed) return toast(`You need ${money(owed)} in table chips to call.`);
        commitPokerChips(room, table, key, owed);
        table.acted[key] = true;
        table.message = `${seat.name} calls ${money(owed)}.`;
      }
      if (kind === "raise") {
        const openingBet = Number(table.currentBet || 0) === 0;
        const raiseBy = Math.max(Number(table.minRaise || room.bigBlind || 1), Math.round(Number($("pokerRaiseAmount").value || 0)));
        const totalNeeded = owed + raiseBy;
        if (Number(table.stacks?.[key] || 0) < totalNeeded) return toast(`You need ${money(totalNeeded)} in table chips to raise.`);
        commitPokerChips(room, table, key, totalNeeded);
        table.currentBet = table.bets[key];
        table.minRaise = raiseBy;
        table.lastAggressorKey = key;
        table.acted = Object.fromEntries(Object.keys(room.seats || {}).map((seatKey) => [seatKey, false]));
        table.acted[key] = true;
        table.message = openingBet ? `${seat.name} bets ${money(table.currentBet)}.` : `${seat.name} raises to ${money(table.currentBet)}.`;
      }
      if (kind === "fold") {
        table.folded[key] = true;
        table.acted[key] = true;
        table.message = `${seat.name} folds.`;
      }
      recordPokerAction(room, table.phase, table.message);
      advancePokerAfterAction(room);
      await saveRoom(room);
    }

    function advancePokerAfterAction(room) {
      const table = room.table;
      const active = activePokerKeys(room);
      if (active.length === 1) {
        awardPokerPot(room, active[0], "All others folded");
        return;
      }
      const next = nextPokerActor(room);
      if (next) {
        table.activeSeatKey = next;
        table.message += ` ${room.seats[next].name} to act.`;
        return;
      }
      advancePokerStreet(room);
    }

    function activePokerKeys(room) {
      return pokerSeatEntries(room).map(([key]) => key).filter((key) => !room.table?.folded?.[key]);
    }

    function nextPokerActor(room) {
      const table = room.table;
      const entries = pokerSeatEntries(room).map(([key]) => key);
      const start = Math.max(0, entries.indexOf(table.activeSeatKey));
      for (let step = 1; step <= entries.length; step += 1) {
        const key = entries[(start + step) % entries.length];
        if (table.folded?.[key]) continue;
        const needsCall = Number(table.bets?.[key] || 0) < Number(table.currentBet || 0);
        if (!table.acted?.[key] || needsCall) return key;
      }
      return "";
    }

    function firstPostFlopActor(room) {
      const table = room.table;
      const entries = pokerSeatEntries(room).map(([key]) => key);
      for (let step = 1; step <= entries.length; step += 1) {
        const key = entries[(Number(table.dealerIndex || 0) + step) % entries.length];
        if (!table.folded?.[key]) return key;
      }
      return activePokerKeys(room)[0] || "";
    }

    function advancePokerStreet(room) {
      const table = room.table;
      const streets = ["preflop", "flop", "turn", "river"];
      const index = streets.indexOf(table.phase);
      if (index >= streets.length - 1) {
        settlePokerShowdown(room);
        return;
      }
      table.phase = streets[index + 1];
      table.currentBet = 0;
      table.minRaise = Number(room.bigBlind || 1);
      table.lastAggressorKey = "";
      table.bets = Object.fromEntries(Object.keys(room.seats || {}).map((key) => [key, 0]));
      table.acted = Object.fromEntries(Object.keys(room.seats || {}).map((key) => [key, false]));
      table.activeSeatKey = firstPostFlopActor(room);
      table.animateCommunityIndexes = table.phase === "flop" ? [0, 1, 2] : table.phase === "turn" ? [3] : [4];
      table.message = `${table.phase[0].toUpperCase()}${table.phase.slice(1)} revealed. ${room.seats[table.activeSeatKey]?.name || "Player"} to act.`;
    }

    function settlePokerShowdown(room) {
      const table = room.table;
      table.phase = "showdown";
      table.activeSeatKey = "";
      table.animateCommunityIndexes = [];
      const contenders = activePokerKeys(room);
      const ranked = contenders.map((key) => ({key, result: evaluatePokerHand([...(table.hands[key] || []), ...(table.community || [])])}))
        .sort((a, b) => comparePokerScores(b.result.score, a.result.score));
      const winner = ranked[0];
      if (!winner) return;
      awardPokerPot(room, winner.key, winner.result.name);
    }

    function awardPokerPot(room, winnerKey, handName) {
      const table = room.table;
      const seat = room.seats?.[winnerKey];
      const player = seat?.playerName ? playerByName(seat.playerName) : null;
      const pot = Number(table.pot || 0);
      if (seat) {
        seat.stack = Number(seat.stack || 0) + pot;
        table.stacks[winnerKey] = seat.stack;
      }
      if (player) {
        addXP(player.name, pokerHandXP[handName] || pokerHandXP["High Card"], `Poker: ${handName}`, {persist:false, toast:false});
        unlockAchievement("poker-first-victory", player.name);
      }
      table.phase = "done";
      table.winnerKey = winnerKey;
      table.winningHand = handName;
      table.activeSeatKey = "";
      table.message = `${seat?.name || "Player"} wins ${money(pot)} with ${handName}.`;
      state.gameStats.poker.played = Number(state.gameStats.poker.played || 0) + 1;
      state.gameStats.poker.wins = Number(state.gameStats.poker.wins || 0) + 1;
      state.gameStats.poker.biggest = Math.max(Number(state.gameStats.poker.biggest || 0), pot);
      recordPokerAction(room, "showdown", `${seat?.name || "Player"} wins ${money(pot)} with ${handName}.`);
      room.handHistory = Array.isArray(room.handHistory) ? room.handHistory : [];
      room.handHistory.unshift({
        handNumber:table.handNumber,
        dealerKey:table.dealerButton,
        smallBlindKey:table.smallBlindKey,
        bigBlindKey:table.bigBlindKey,
        winnerKey,
        winningHand:handName,
        pot,
        actions:[...(table.actionLog || [])],
        completedAt:Date.now()
      });
      room.handHistory = room.handHistory.slice(0, 50);
      addHistoryEvent({
        type:"poker-pot",
        category:"Poker",
        player:seat?.playerName || seat?.name || "",
        title:"Poker Pot",
        description:`${seat?.name || "Player"} won a ${money(pot)} pot with ${handName}.`,
        amount:pot,
        details:{roomId:room.id, handNumber:table.handNumber, winningHand:handName}
      });
      resultToast(`${seat?.name || "Player"} wins the pot`, `${money(pot)} / ${handName}`, 5000);
    }

    function recordPokerAction(room, street, description) {
      const table = room.table;
      table.actionLog = Array.isArray(table.actionLog) ? table.actionLog : [];
      table.actionLog.push({street, description, at:Date.now()});
      table.actionLog = table.actionLog.slice(-100);
    }

    function evaluatePokerHand(cards) {
      const combos = combinations(cards, 5);
      return combos.map(scoreFivePokerCards).sort((a, b) => comparePokerScores(b.score, a.score))[0] || {name:"High Card", score:[0]};
    }

    function combinations(items, size) {
      const out = [];
      const walk = (start, combo) => {
        if (combo.length === size) {
          out.push(combo);
          return;
        }
        for (let i = start; i <= items.length - (size - combo.length); i += 1) walk(i + 1, combo.concat(items[i]));
      };
      walk(0, []);
      return out;
    }

    function pokerRankValue(rank) {
      return {A:14,K:13,Q:12,J:11,"10":10,"9":9,"8":8,"7":7,"6":6,"5":5,"4":4,"3":3,"2":2}[rank] || 0;
    }

    function scoreFivePokerCards(cards) {
      const values = cards.map((card) => pokerRankValue(card.rank)).sort((a, b) => b - a);
      const counts = values.reduce((acc, value) => {
        acc[value] = Number(acc[value] || 0) + 1;
        return acc;
      }, {});
      const groups = Object.entries(counts).map(([value, count]) => ({value:Number(value), count})).sort((a, b) => b.count - a.count || b.value - a.value);
      const flush = cards.every((card) => card.suit === cards[0].suit);
      const unique = [...new Set(values)].sort((a, b) => b - a);
      const wheel = unique.join(",") === "14,5,4,3,2";
      const straightHigh = wheel ? 5 : unique.length === 5 && unique[0] - unique[4] === 4 ? unique[0] : 0;
      if (flush && straightHigh === 14) return {name:"Royal Flush", score:[9, 14]};
      if (flush && straightHigh) return {name:"Straight Flush", score:[8, straightHigh]};
      if (groups[0]?.count === 4) return {name:"Four of a Kind", score:[7, groups[0].value, groups[1].value]};
      if (groups[0]?.count === 3 && groups[1]?.count === 2) return {name:"Full House", score:[6, groups[0].value, groups[1].value]};
      if (flush) return {name:"Flush", score:[5, ...values]};
      if (straightHigh) return {name:"Straight", score:[4, straightHigh]};
      if (groups[0]?.count === 3) return {name:"Three of a Kind", score:[3, groups[0].value, ...groups.slice(1).map((group) => group.value).sort((a, b) => b - a)]};
      if (groups[0]?.count === 2 && groups[1]?.count === 2) return {name:"Two Pair", score:[2, groups[0].value, groups[1].value, groups[2].value]};
      if (groups[0]?.count === 2) return {name:"One Pair", score:[1, groups[0].value, ...groups.slice(1).map((group) => group.value).sort((a, b) => b - a)]};
      return {name:"High Card", score:[0, ...values]};
    }

    function comparePokerScores(a, b) {
      const length = Math.max(a.length, b.length);
      for (let i = 0; i < length; i += 1) {
        const diff = Number(a[i] || 0) - Number(b[i] || 0);
        if (diff !== 0) return diff;
      }
      return 0;
    }

    async function setMultiplayerBlackjackReady() {
      const room = await refreshRoomFromCloud(activeRoomId);
      if (!room || room.game !== "blackjack") return toast("Join a blackjack room first.");
      const key = currentProfileKey();
      const seat = room.seats?.[key];
      if (!seat) return toast("You are not seated in this room.");
      const table = normalizeBlackjackRoomTable(room.table);
      if (["player", "dealer"].includes(table.phase)) return toast("Finish the current round first.");
      const bet = Math.max(1, Math.round(Number($("multiBjBetAmount").value || 0)));
      const player = seat.playerName ? playerByName(seat.playerName) : null;
      if (!player || bankrollValue(player) < bet) return toast(`You need ${money(bet)} bankroll to ready up.`);
      seat.ready = true;
      seat.readyBet = bet;
      room.table = table;
      table.message = `${seat.name} is ready for ${money(bet)}.`;
      await saveRoom(room);
      toast(`Ready for ${money(bet)}.`);
    }

    async function startMultiplayerBlackjackRound() {
      const room = await refreshRoomFromCloud(activeRoomId);
      if (!room || room.game !== "blackjack") return;
      if (!isRoomHost(room)) return toast("Only the host can start the shared round.");
      const seats = room.seats || {};
      const entries = Object.entries(seats);
      if (!entries.length) return toast("No players are seated.");
      const notReady = entries.find(([, seat]) => !seat.ready || Number(seat.readyBet || 0) <= 0);
      if (notReady) return toast(`${notReady[1].name} needs to ready up first.`);
      const brokeSeat = entries.find(([, seat]) => {
        const player = playerByName(seat.playerName);
        return !player || bankrollValue(player) < Number(seat.readyBet || 0);
      });
      if (brokeSeat) return toast(`${brokeSeat[1].name} needs enough linked bankroll for ${money(brokeSeat[1].readyBet || 0)}.`);
      const table = createEmptyMultiplayerBlackjackTable();
      table.deck = createDeck();
      table.bet = Math.max(...entries.map(([, seat]) => Number(seat.readyBet || 0)));
      table.roundId = Date.now();
      table.phase = "player";
      table.activeSeatKey = entries[0][0];
      table.dealerHand = [drawCard(table), drawCard(table)];
      table.dealerAnimateIndexes = [0, 1];
      table.hands = {};
      table.handAnimateIndexes = {};
      entries.forEach(([key, seat]) => {
        const seatBet = Number(seat.readyBet || table.bet);
        table.hands[key] = {
          playerHands: [{cards: [drawCard(table), drawCard(table)], bet: seatBet, stood: false, result: "", delta: 0, doubled: false, fromSplit: false}],
          activeHand: 0,
          splits: 0,
          delta: 0
        };
        table.handAnimateIndexes[key] = {"0": [0, 1]};
        seat.ready = false;
      });
      table.message = `Round started. ${seats[table.activeSeatKey].name} acts first.`;
      room.table = table;
      await saveRoom(room);
      setTimeout(() => {
        const latest = state.onlineRooms[room.id];
        if (!latest?.table || latest.table.phase !== "player") return;
        latest.table.dealerAnimateIndexes = [];
        latest.table.handAnimateIndexes = {};
        saveRoom(latest);
      }, CARD_DEAL_SETTLE_MS);
    }

    async function hitMultiplayerBlackjack() {
      const room = await refreshRoomFromCloud(activeRoomId);
      const table = room?.table;
      const key = currentProfileKey();
      if (!room || !table || table.phase !== "player" || table.activeSeatKey !== key) return toast("It is not your turn.");
      const seatHand = table.hands?.[key];
      const hand = activeMultiSeatHand(seatHand);
      if (!seatHand || !hand) return;
      hand.cards.push(drawCard(table));
      table.handAnimateIndexes = {[key]: {[String(seatHand.activeHand || 0)]: [hand.cards.length - 1]}};
      table.dealerAnimateIndexes = [];
      table.dealerFlipIndexes = [];
      if (handValue(hand.cards) > 21) {
        hand.stood = true;
        hand.result = "Bust";
        advanceMultiplayerBlackjack(room);
      } else {
        table.message = `${room.seats[key].name} drew a card.`;
      }
      await saveRoom(room);
    }

    async function standMultiplayerBlackjack() {
      const room = await refreshRoomFromCloud(activeRoomId);
      const table = room?.table;
      const key = currentProfileKey();
      if (!room || !table || table.phase !== "player" || table.activeSeatKey !== key) return toast("It is not your turn.");
      const hand = activeMultiSeatHand(table.hands?.[key]);
      if (hand) hand.stood = true;
      advanceMultiplayerBlackjack(room);
      await saveRoom(room);
    }

    async function splitMultiplayerBlackjack() {
      const room = await refreshRoomFromCloud(activeRoomId);
      const table = room?.table;
      const key = currentProfileKey();
      if (!room || !table || table.phase !== "player" || table.activeSeatKey !== key) return toast("It is not your turn.");
      const player = currentPlayer();
      const seatHand = table.hands?.[key];
      const hand = activeMultiSeatHand(seatHand);
      if (!seatHand || !hand || hand.cards.length !== 2 || hand.cards[0].rank !== hand.cards[1].rank) return toast("Split is only available on matching pairs.");
      if (Number(seatHand.splits || 0) >= 3 || multiSeatHands(seatHand).length >= 4) return toast("Split limit reached: four hands maximum.");
      const totalExposure = multiSeatHands(seatHand).reduce((sum, item) => sum + Number(item.bet || table.bet || 0), 0);
      if (!player || bankrollValue(player) < totalExposure + Number(hand.bet || table.bet || 0)) return toast("Not enough bankroll to cover the split.");
      const splitCard = hand.cards.pop();
      hand.fromSplit = true;
      hand.cards.push(drawCard(table));
      const newHand = {cards: [splitCard, drawCard(table)], bet: hand.bet || table.bet, stood: false, result: "", delta: 0, doubled: false, fromSplit: true};
      seatHand.playerHands.splice(Number(seatHand.activeHand || 0) + 1, 0, newHand);
      seatHand.splits = Number(seatHand.splits || 0) + 1;
      table.handAnimateIndexes = {[key]: {[String(seatHand.activeHand || 0)]: [1], [String(Number(seatHand.activeHand || 0) + 1)]: [1]}};
      table.message = `${room.seats[key].name} split a pair.`;
      await saveRoom(room);
    }

    async function doubleMultiplayerBlackjack() {
      const room = await refreshRoomFromCloud(activeRoomId);
      const table = room?.table;
      const key = currentProfileKey();
      if (!room || !table || table.phase !== "player" || table.activeSeatKey !== key) return toast("It is not your turn.");
      const player = currentPlayer();
      const seatHand = table.hands?.[key];
      const hand = activeMultiSeatHand(seatHand);
      if (!seatHand || !hand || hand.cards.length !== 2) return toast("Double down is only available on your first two cards.");
      const totalExposure = multiSeatHands(seatHand).reduce((sum, item) => sum + Number(item.bet || table.bet || 0), 0);
      if (!player || bankrollValue(player) < totalExposure + Number(hand.bet || table.bet || 0)) return toast("Not enough bankroll to double down.");
      hand.bet = Number(hand.bet || table.bet || 0) * 2;
      hand.doubled = true;
      hand.cards.push(drawCard(table));
      table.handAnimateIndexes = {[key]: {[String(seatHand.activeHand || 0)]: [hand.cards.length - 1]}};
      hand.stood = true;
      if (handValue(hand.cards) > 21) hand.result = "Bust";
      table.message = `${room.seats[key].name} doubled down.`;
      advanceMultiplayerBlackjack(room);
      await saveRoom(room);
    }

    function advanceMultiplayerBlackjack(room) {
      const table = room.table;
      const activeSeatHand = table.hands?.[table.activeSeatKey];
      const activeHands = multiSeatHands(activeSeatHand);
      const nextHandIndex = activeHands.findIndex((hand, index) => index > Number(activeSeatHand?.activeHand || 0) && !hand.stood && handValue(hand.cards) <= 21);
      if (nextHandIndex >= 0) {
        activeSeatHand.activeHand = nextHandIndex;
        table.handAnimateIndexes = {};
        table.message = `${room.seats[table.activeSeatKey].name}'s hand ${nextHandIndex + 1}.`;
        return;
      }
      const entries = Object.keys(room.seats || {});
      const currentIndex = entries.indexOf(table.activeSeatKey);
      const next = entries.slice(currentIndex + 1).find((key) => {
        const seatHand = table.hands?.[key];
        return multiSeatHands(seatHand).some((hand) => !hand.stood && handValue(hand.cards) <= 21);
      });
      if (next) {
        table.activeSeatKey = next;
        table.hands[next].activeHand = 0;
        table.handAnimateIndexes = {};
        table.message = `${room.seats[next].name}'s turn.`;
        return;
      }
      revealMultiplayerDealer(room);
    }

    function revealMultiplayerDealer(room) {
      const table = room.table;
      table.phase = "dealer";
      table.revealDealer = true;
      table.dealerFlipIndexes = [1];
      table.dealerAnimateIndexes = [];
      table.handAnimateIndexes = {};
      table.message = "Dealer reveals and draws to 17.";
      saveRoom(room);
      setTimeout(() => {
        const latest = state.onlineRooms[room.id];
        if (!latest?.table || latest.table.phase !== "dealer") return;
        const latestTable = latest.table;
        const animated = [];
        while (handValue(latestTable.dealerHand) < 17) {
          latestTable.dealerHand.push(drawCard(latestTable));
          animated.push(latestTable.dealerHand.length - 1);
        }
        latestTable.dealerFlipIndexes = [];
        latestTable.dealerAnimateIndexes = animated;
        saveRoom(latest);
        setTimeout(() => settleMultiplayerBlackjack(latest), Math.max(650, animated.length * CARD_DEAL_DELAY_MS + 360));
      }, 500);
    }

    function settleMultiplayerBlackjack(room) {
      room = room?.id ? (state.rooms || []).find((item) => item.id === room.id) || room : room;
      const table = room.table;
      if (!table || table.phase === "done") return;
      table.phase = "done";
      table.revealDealer = true;
      table.dealerAnimateIndexes = [];
      table.dealerFlipIndexes = [];
      table.handAnimateIndexes = {};
      const dealerTotal = handValue(table.dealerHand);
      const dealerNatural = table.dealerHand.length === 2 && dealerTotal === 21;
      let winners = 0;
      Object.entries(table.hands || {}).forEach(([key, hand]) => {
        const seat = room.seats?.[key];
        const player = seat?.playerName ? freshPlayer(playerByName(seat.playerName)) : null;
        let seatDelta = 0;
        multiSeatHands(hand).forEach((playerHand) => {
          const total = handValue(playerHand.cards);
          const playerNatural = isNaturalBlackjack(playerHand);
          let delta = 0;
          if (total > 21) {
            delta = -Number(playerHand.bet || table.bet || 0);
            playerHand.result = "Bust";
          } else if (playerNatural && dealerNatural) {
            playerHand.result = "Push";
          } else if (playerNatural || dealerTotal > 21 || total > dealerTotal) {
            delta = blackjackWinPayout(playerHand, dealerNatural);
            playerHand.result = "Win";
            winners += 1;
            if (playerNatural) playerHand.result = "Blackjack";
          } else if (dealerNatural) {
            delta = -Number(playerHand.bet || table.bet || 0);
            playerHand.result = "Loss";
          } else if (total === dealerTotal) {
            playerHand.result = "Push";
          } else {
            delta = -Number(playerHand.bet || table.bet || 0);
            playerHand.result = "Loss";
          }
          playerHand.delta = delta;
          seatDelta += delta;
        });
        hand.delta = seatDelta;
        hand.result = multiSeatHands(hand).map((playerHand) => playerHand.result).join(" / ");
        if (player) {
          adjustPlayerBankroll(player, seatDelta);
          if (seatDelta !== 0) applyMoneyResult(player, seatDelta, `online blackjack room ${room.name}`, {silent:true, bankrollAlreadyAdjusted:true});
          if (seatDelta > 0) maybeDropCasinoTicket(player, 0.12, "multiplayer blackjack win");
          addHistoryEvent({
            type:seatDelta > 0 ? "blackjack-win" : seatDelta < 0 ? "blackjack-loss" : "blackjack-push",
            category:"Blackjack",
            player:player.name,
            title:seatDelta > 0 ? "Multiplayer Blackjack Win" : seatDelta < 0 ? "Multiplayer Blackjack Loss" : "Multiplayer Blackjack Push",
            description:`${player.name} finished ${room.name} with ${signedMoney(seatDelta)}.`,
            amount:seatDelta,
            details:{roomId:room.id}
          });
          if (seatDelta > 0) addXP(player.name, blackjackXP["Win Hand"], "Online Blackjack: Win Hand", {persist: false, toast: false});
          trackDailyProgress(player.name, "blackjackHands", multiSeatHands(hand).length || 1);
          multiSeatHands(hand).forEach((playerHand) => {
            if (["Win", "Blackjack"].includes(playerHand.result)) trackDailyProgress(player.name, "blackjackWins", 1);
          });
          if (multiSeatHands(hand).some((playerHand) => playerHand.result === "Blackjack")) addXP(player.name, blackjackXP["Natural Blackjack"], "Online Blackjack: Natural Blackjack", {persist: false, toast: false});
        }
      });
      state.gameStats.blackjack.played = Number(state.gameStats.blackjack.played || 0) + Object.keys(table.hands || {}).length;
      state.gameStats.blackjack.wins = Number(state.gameStats.blackjack.wins || 0) + winners;
      state.gameStats.blackjack.profit = Number(state.gameStats.blackjack.profit || 0) + Object.values(table.hands || {}).reduce((sum, hand) => sum + Number(hand.delta || 0), 0);
      table.message = `Dealer ${dealerTotal}. Round settled for ${Object.keys(table.hands || {}).length} player(s).`;
      state.onlineRooms[room.id] = room;
      save({cloud: false});
      persistSettledRoomState(room);
    }

    async function persistSettledRoomState(room) {
      if (firebaseDisabled || !firebaseState.ready || !firebaseState.user) return;
      const {dbRef, update, serverTimestamp} = firebaseState.modules;
      await update(dbRef(firebaseState.db, `${databasePath}/state`), {
        players: state.players,
        gameStats: state.gameStats,
        counters: state.counters,
        stockMarket: state.stockMarket,
        casinoVault: state.casinoVault,
        log: state.log,
        history: state.history,
        [`onlineRooms/${room.id}`]: room,
        updatedAt: Date.now(),
        updatedAtServer: serverTimestamp(),
        updatedByUid: firebaseState.user.uid,
        updatedByEmail: firebaseState.user.email || ""
      }).catch((error) => {
        console.warn(error);
        toast("Settlement sync failed. Check the room before continuing.");
      });
    }

    async function closeActiveRoom() {
      const room = activeRoom();
      if (!room) return;
      if (!isRoomHost(room)) return toast("Only the host can close this room.");
      if (room.game === "poker") {
        refundOpenPokerPot(room);
        Object.keys(room.seats || {}).forEach((key) => cashOutPokerSeat(room, key, "Host closed room"));
      }
      room.status = "closed";
      room.closedReason = "host";
      room.closedAt = Date.now();
      room.seats = {};
      addHistoryEvent({
        type:"room-closed",
        category:room.game === "poker" ? "Poker" : "System",
        player:currentPlayer()?.name || "",
        title:"Room Closed",
        description:`${currentSeat().name} closed ${room.name}.`
      });
      activeRoomId = "";
      localStorage.removeItem(activeRoomStorageKey);
      activeOnlineGame = "";
      await saveRoom(room);
      await persistSettledRoomState(room);
      toast("Room closed. Players were disconnected.");
    }

    async function leaveActiveRoom() {
      const room = activeRoom();
      if (!room) return;
      const key = currentProfileKey();
      if (isRoomHost(room)) {
        closeActiveRoom();
        return;
      }
      if (room.game === "poker") {
        const table = room.table || createEmptyPokerTable();
        if (["preflop","flop","turn","river"].includes(table.phase) && !table.folded?.[key]) {
          table.folded[key] = true;
          table.acted[key] = true;
          table.message = `${room.seats[key]?.name || "Player"} leaves and folds.`;
          recordPokerAction(room, table.phase, table.message);
          advancePokerAfterAction(room);
        }
        cashOutPokerSeat(room, key, "Left poker room");
      }
      if (room.seats) delete room.seats[key];
      activeRoomId = "";
      localStorage.removeItem(activeRoomStorageKey);
      activeOnlineGame = room.game;
      await saveRoom(room);
      await persistSettledRoomState(room);
      toast("You left the session.");
    }

    function refundOpenPokerPot(room) {
      const table = room.table;
      if (!table || !["preflop","flop","turn","river"].includes(table.phase)) return;
      Object.entries(table.committed || {}).forEach(([key, amount]) => {
        if (!room.seats?.[key]) return;
        room.seats[key].stack = Number(room.seats[key].stack || 0) + Number(amount || 0);
      });
      table.pot = 0;
      table.phase = "cancelled";
      table.activeSeatKey = "";
      table.message = "Hand cancelled. Committed chips returned before cash-out.";
    }

    function cashOutPokerSeat(room, key, reason) {
      const seat = room.seats?.[key];
      if (!seat || seat.cashedOutAt) return;
      const player = seat.playerId ? playerById(seat.playerId) : playerByName(seat.playerName);
      const stack = Math.max(0, Number(seat.stack ?? room.table?.stacks?.[key] ?? 0));
      const buyIn = Number(seat.buyIn || room.buyIn || 0);
      const result = stack - buyIn;
      if (player) {
        adjustPlayerBankroll(player, stack);
        player.lifetime += result;
      }
      seat.cashedOutAt = Date.now();
      seat.cashOut = stack;
      seat.sessionResult = result;
      addHistoryEvent({
        type:"poker-cashout",
        category:"Poker",
        player:seat.playerName || seat.name,
        title:"Poker Cash-Out",
        description:`${seat.name} cashed out ${money(stack)} from ${room.name}.`,
        amount:result,
        details:{roomId:room.id, buyIn, cashOut:stack, reason}
      });
    }

    function handleActiveRoomClosure() {
      if (!activeRoomId) return;
      const room = state.onlineRooms[activeRoomId];
      const key = currentProfileKey();
      if (!room || room.status === "closed") {
        if (lastClosedRoomId !== activeRoomId) {
          lastClosedRoomId = activeRoomId;
          toast("Host closed session.");
        }
        activeRoomId = "";
        localStorage.removeItem(activeRoomStorageKey);
        activeOnlineGame = "";
        activeView = "online";
        return;
      }
      if (!room.seats?.[key]) {
        activeRoomId = "";
        localStorage.removeItem(activeRoomStorageKey);
        activeOnlineGame = room.game;
        activeView = "online";
        toast("You are no longer in that session.");
      }
    }

    function openBlackjackGuide() {
      els.blackjackGuideDialog.showModal();
    }

    function closeBlackjackGuide() {
      els.blackjackGuideDialog.close();
    }

    function openPokerGuide() {
      els.pokerGuideDialog.showModal();
    }

    function closePokerGuide() {
      els.pokerGuideDialog.close();
    }

    function adjustPlayerBankroll(player, delta) {
      return setPlayerBankroll(player, bankrollValue(player) + Number(delta || 0));
    }

    function depositToBank() {
      const player = currentPlayer();
      const amount = Math.round(Number($("bankDepositAmount").value || 0));
      if (!player) return toast("Link your profile to a player before banking.");
      if (amount <= 0) return toast("Enter a deposit amount.");
      if (bankrollValue(player) < amount) return toast("Not enough on-hand bankroll to deposit.");
      adjustPlayerBankroll(player, -amount);
      player.bankBalance = Number(player.bankBalance || 0) + amount;
      unlockAchievement("bank-first-deposit", player.name);
      if (player.bankBalance >= 10000) unlockAchievement("bank-safe-stack", player.name);
      $("bankDepositAmount").value = "";
      addHistoryEvent({
        type:"bank-deposit",
        category:"Bank",
        player:player.name,
        title:"Bank Deposit",
        description:`${player.name} deposited ${money(amount)} into the Bank.`,
        amount,
        details:{bankBalance:player.bankBalance}
      });
      save();
      toast(`Deposited ${money(amount)} into the Bank.`);
    }

    function withdrawFromBank() {
      const player = currentPlayer();
      const amount = Math.round(Number($("bankWithdrawAmount").value || 0));
      if (!player) return toast("Link your profile to a player before banking.");
      if (amount <= 0) return toast("Enter a withdrawal amount.");
      if (Number(player.bankBalance || 0) < amount) return toast("Not enough bank balance.");
      player.bankBalance -= amount;
      adjustPlayerBankroll(player, amount);
      $("bankWithdrawAmount").value = "";
      addHistoryEvent({
        type:"bank-withdrawal",
        category:"Bank",
        player:player.name,
        title:"Bank Withdrawal",
        description:`${player.name} withdrew ${money(amount)} from the Bank.`,
        amount:-amount,
        details:{bankBalance:player.bankBalance}
      });
      save();
      toast(`Withdrew ${money(amount)} to bankroll.`);
    }

    function transferBankroll() {
      const from = currentPlayer();
      const to = playerByName($("transferToPlayer").value);
      const amount = Math.round(Number($("transferAmount").value || 0));
      if (!from || !to) return toast("Choose a linked sender and recipient.");
      if (from.name === to.name) return toast("Choose another player to transfer to.");
      if (amount <= 0) return toast("Enter a transfer amount.");
      if (bankrollValue(from) < amount) return toast("Not enough on-hand bankroll. Withdraw from bank first if needed.");
      adjustPlayerBankroll(from, -amount);
      const debtPay = Math.min(Number(to.bankDebt || 0), amount);
      to.bankDebt -= debtPay;
      state.counters.debtRepaid += debtPay;
      const remainder = amount - debtPay;
      if (remainder > 0) adjustPlayerBankroll(to, remainder);
      $("transferAmount").value = "";
      unlockAchievement("bankroll-transfer", from.name);
      if (debtPay > 0) unlockAchievement("debt-recovery", to.name);
      addHistoryEvent({
        type:"bankroll-transfer",
        category:"Bank",
        player:from.name,
        title:"Bankroll Transfer",
        description:`${from.name} transferred ${money(amount)} to ${to.name}.`,
        amount:-amount,
        details:{recipient:to.name, debtPaid:debtPay, bankrollAdded:remainder}
      });
      save();
      toast(`Transferred ${money(amount)}. Debt paid ${money(debtPay)}, bankroll added ${money(remainder)}.`);
    }

    function settleLocalBlackjack() {
      const player = playerByName($("localBjPlayer").value);
      if (!player) return toast("Choose a player.");
      const start = Number($("localBjStart").value || bankrollValue(player) || 0);
      const endingChips = {
        white: Number($("localBjWhite").value || 0),
        red: Number($("localBjRed").value || 0),
        blue: Number($("localBjBlue").value || 0),
        green: Number($("localBjGreen").value || 0),
        black: Number($("localBjBlack").value || 0)
      };
      const endingValue = stackValue(endingChips);
      if (endingValue < 0 || start < 0) return toast("Enter valid bankroll values.");
      const profit = endingValue - start;
      const debtPay = Math.min(Number(player.bankDebt || 0), endingValue);
      player.bankDebt -= debtPay;
      state.counters.debtRepaid += debtPay;
      player.chips = chipSetup(Math.max(0, endingValue - debtPay));
      player.lifetime += profit;
      state.gameStats.blackjack.played = Number(state.gameStats.blackjack.played || 0) + 1;
      state.gameStats.blackjack.profit = Number(state.gameStats.blackjack.profit || 0) + profit;
      if (profit > 0) {
        state.gameStats.blackjack.wins = Number(state.gameStats.blackjack.wins || 0) + 1;
        addXP(player.name, blackjackXP["Win Session"], "Blackjack: Win Session", {persist: false, toast: false});
      }
      ["localBjWhite","localBjRed","localBjBlue","localBjGreen","localBjBlack"].forEach((id) => $(id).value = "");
      $("localBjPreview").textContent = `${player.name}: final ${money(endingValue)}, profit ${signedMoney(profit)}, debt paid ${money(debtPay)}, bankroll now ${money(bankrollValue(player))}.`;
      log(`${player.name} local blackjack settled: final ${money(endingValue)}, profit ${signedMoney(profit)}, debt paid ${money(debtPay)}.`);
      save();
      toast(`${player.name} local blackjack settled: ${signedMoney(profit)}.`);
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
      trackDailyProgress(player.name, "xpEarned", Number(amount || 0));
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
      const maxStars = Math.max(0, ...state.players.map((player) => Number(player.stars || 0)));
      const topByChips = rankedPlayers()[0];
      const topByXp = [...state.players].sort((a, b) => b.xp - a.xp)[0];
      const level = levelFromXP(linkedPlayer.xp);
      const bankroll = bankrollValue(linkedPlayer);
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
      if (linkedPlayer.xp >= 1000) unlock("xp-1000");
      if (linkedPlayer.xp >= 5000) unlock("xp-5000");
      if (linkedPlayer.xp >= 10000) unlock("xp-10000");
      if (linkedPlayer.xp >= 25000) unlock("xp-25000");
      if (linkedPlayer.xp >= 50000) unlock("xp-50000");
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
      const beforeMarketAssetSweep = Object.keys(state.unlockedAchievements || {}).length;
      checkStockAchievements(linkedPlayer);
      checkAssetAchievements(linkedPlayer);
      unlockedCount += Math.max(0, Object.keys(state.unlockedAchievements || {}).length - beforeMarketAssetSweep);
      return unlockedCount;
    }

    function applyMoneyResult(player, amount, reason, options = {}) {
      player = freshPlayer(player);
      if (!player) return;
      const value = Number(amount || 0);
      if (value > 0) {
        const debtPay = Math.min(Number(player.bankDebt || 0), value);
        player.bankDebt = Number(player.bankDebt || 0) - debtPay;
        state.counters.debtRepaid += debtPay;
        const remaining = value - debtPay;
        if (!options.bankrollAlreadyAdjusted && remaining > 0) {
          adjustPlayerBankroll(player, remaining);
        }
        player.lifetime += remaining;
        if (!options.silent) log(`${player.name} ${reason}: +$${value}. Paid bank $${debtPay}. Lifetime gained $${remaining}.`);
      } else if (value < 0) {
        if (!options.bankrollAlreadyAdjusted) adjustPlayerBankroll(player, value);
        trackCasinoVaultLoss(Math.abs(value), reason, player);
        player.lifetime += value;
        if (!options.silent) log(`${player.name} ${reason}: -$${Math.abs(value)}.`);
      } else {
        if (!options.silent) log(`${player.name} ${reason}: $0.`);
      }
    }

    function trackCasinoVaultLoss(amount, reason = "", player = null) {
      const value = Math.max(0, Math.round(Number(amount || 0)));
      if (!value || !isCasinoHouseLossReason(reason)) return;
      state.casinoVault = Math.max(0, Number(state.casinoVault || 0)) + value;
      if (player?.name) {
        addHistoryEvent({
          type:"casino-vault",
          category:"System",
          player:player.name,
          title:"Casino Vault",
          description:`The Casino Vault gained ${money(value)} from ${player.name}'s ${reason} loss.`,
          amount:value,
          details:{reason}
        });
      }
    }

    function isCasinoHouseLossReason(reason = "") {
      const text = String(reason).toLowerCase();
      return text.includes("blackjack") || text.includes("slots") || text.includes("craps") || text.includes("roulette") || text.includes("farkle");
    }

    function trackDailyProgress(playerName, field, amount = 1) {
      if (!playerName) return;
      const record = dailyRecord(playerName);
      if (String(field).startsWith("slotMachine:")) {
        const machineId = String(field).split(":")[1] || "unknown";
        record.slotMachines = record.slotMachines || {};
        record.slotMachines[machineId] = Number(record.slotMachines[machineId] || 0) + Number(amount || 0);
        return;
      }
      record[field] = Number(record[field] || 0) + Number(amount || 0);
    }

    function grantDailyMoney(player, amount, label) {
      const value = Math.round(Number(amount || 0));
      const debtPay = Math.min(Number(player.bankDebt || 0), value);
      player.bankDebt -= debtPay;
      state.counters.debtRepaid += debtPay;
      const remaining = value - debtPay;
      if (remaining > 0) adjustPlayerBankroll(player, remaining);
      player.lifetime += remaining;
      log(`${player.name} ${label}: +$${value}. Paid bank $${debtPay}. Bankroll gained $${remaining}.`);
    }

    function claimDailyChallenge() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to claim daily rewards.");
      const record = dailyRecord(player.name);
      if (record.claimed) return toast("Daily challenge already claimed.");
      const challenges = activeDailyChallenges();
      const complete = challenges.every((challenge) => dailyChallengeProgress(record, challenge).done);
      if (!complete) return toast("Finish all daily challenge tasks first.");
      record.claimed = true;
      const reward = dailyChallengeRewardAmount(player.name);
      unlockAchievement("daily-first-clear", player.name);
      grantDailyMoney(player, reward, "daily challenge reward");
      addHistoryEvent({
        type:"daily-challenge",
        category:"Dailies",
        player:player.name,
        title:"Daily Challenge Complete",
        description:`${player.name} completed today's daily challenge set for ${money(reward)}.`,
        amount:reward,
        details:{challenges:challenges.map((challenge) => challenge.id)}
      });
      log(`${player.name} claimed the daily challenge for ${money(reward)}.`);
      save();
      resultToast("Daily challenge claimed", `+${money(reward)}`);
    }

    function spinLuckyWheel() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to spin the wheel.");
      if (state.daily.wheel[player.name] === todayKey()) return openTicketUseDialog("wheel");
      $("wheelResult").textContent = "Spin once per day.";
      $("wheelSpinButton").disabled = false;
      $("luckyWheel").classList.remove("spinning");
      $("luckyWheel").style.setProperty("--wheel-rotation", "0deg");
      els.luckyWheelDialog.showModal();
    }

    function awardLuckyWheel() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to spin the wheel.");
      if (state.daily.wheel[player.name] === todayKey() && pendingTicketUse !== "wheel-active") return openTicketUseDialog("wheel");
      $("wheelSpinButton").disabled = true;
      const reward = weightedReward(LUCKY_WHEEL_REWARDS);
      const segment = LUCKY_WHEEL_REWARDS.findIndex((item) => item === reward);
      const segmentSize = 360 / LUCKY_WHEEL_REWARDS.length;
      const segmentCenter = segment * segmentSize + segmentSize / 2;
      const rotation = 1800 + (360 - segmentCenter) + Math.floor(Math.random() * 18) - 9;
      $("luckyWheel").style.setProperty("--wheel-rotation", `${rotation}deg`);
      $("luckyWheel").classList.add("spinning");
      $("wheelResult").textContent = "Wheel spinning...";
      setTimeout(() => {
      if (pendingTicketUse === "wheel-active") {
        player.casinoTickets = Math.max(0, Number(player.casinoTickets || 0) - 1);
        addHistoryEvent({
          type:"casino-ticket-spent",
          category:"Dailies",
          player:player.name,
          title:"Casino Ticket Used",
          description:`${player.name} used 1 Casino Ticket for an extra Lucky Wheel spin.`,
          amount:-1,
          amountKind:"ticket",
          details:{reward:"Lucky Wheel"}
        });
        pendingTicketUse = "";
      } else {
        state.daily.wheel[player.name] = todayKey();
      }
      unlockAchievement("daily-wheel-spin", player.name);
      if (reward.type === "money") {
        grantDailyMoney(player, reward.value, "lucky wheel reward");
      } else {
        addXP(player.name, reward.value, "Lucky Wheel", {persist:false, toast:false});
      }
      const text = `${player.name} spun Lucky Wheel: ${reward.type === "money" ? money(reward.value) : `${reward.value} XP`}${reward.golden ? " GOLDEN JACKPOT" : ""}`;
      state.daily.wheelHistory.unshift(text);
      state.daily.wheelHistory = state.daily.wheelHistory.slice(0, 12);
      log(text);
      save();
      $("wheelResult").textContent = `${reward.golden ? "Golden Jackpot" : "Reward"}: ${reward.type === "money" ? money(reward.value) : `${reward.value} XP`}`;
      resultToast(reward.golden ? "Golden Wheel Jackpot!" : "Lucky Wheel Reward", reward.type === "money" ? `+$${reward.value}` : `+${reward.value} XP`);
      setTimeout(() => {
        if (els.luckyWheelDialog.open) els.luckyWheelDialog.close();
      }, 2000);
      }, 3400);
    }

    function scratchDailyCard() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to scratch.");
      if (state.daily.scratch[player.name] === todayKey()) return openTicketUseDialog("scratch");
      const reward = weightedReward(SCRATCH_OFF_REWARDS);
      state.daily.scratch[player.name] = todayKey();
      unlockAchievement("daily-scratch-card", player.name);
      if (reward.value > 0) grantDailyMoney(player, reward.value, "daily scratch reward");
      const text = `${player.name} scratched daily card: ${reward.value > 0 ? money(reward.value) : "Nothing"}.`;
      state.daily.wheelHistory.unshift(text);
      state.daily.wheelHistory = state.daily.wheelHistory.slice(0, 12);
      log(text);
      save();
      resultToast("Daily Scratch-Off", reward.value > 0 ? `+$${reward.value}` : "$0");
    }

    function openTicketUseDialog(type) {
      const player = currentPlayer();
      const label = type === "wheel" ? "Lucky Wheel" : "Daily Scratch-Off";
      if (!player) return toast(`Link your profile to use ${label}.`);
      if (Number(player.casinoTickets || 0) <= 0) return toast(`${label} already used today and you have no Casino Tickets.`);
      pendingTicketUse = type;
      $("ticketUseTitle").textContent = `Use Ticket for ${label}?`;
      $("ticketUseBody").textContent = `Spend 1 Casino Ticket for an extra ${label} play. You have ${player.casinoTickets}.`;
      $("ticketUseButton").textContent = `Use 1 Ticket (${player.casinoTickets})`;
      els.ticketUseDialog.showModal();
    }

    function confirmUseTicket() {
      const type = pendingTicketUse;
      const player = currentPlayer();
      if (!player || Number(player.casinoTickets || 0) <= 0) return toast("You have no Casino Tickets.");
      if (els.ticketUseDialog.open) els.ticketUseDialog.close();
      if (type === "wheel") {
        pendingTicketUse = "wheel-active";
        $("wheelResult").textContent = "Ticket play ready.";
        $("wheelSpinButton").disabled = false;
        $("luckyWheel").classList.remove("spinning");
        $("luckyWheel").style.setProperty("--wheel-rotation", "0deg");
        els.luckyWheelDialog.showModal();
        return;
      }
      if (type === "scratch") {
        player.casinoTickets = Math.max(0, Number(player.casinoTickets || 0) - 1);
        pendingTicketUse = "";
        addHistoryEvent({
          type:"casino-ticket-spent",
          category:"Dailies",
          player:player.name,
          title:"Casino Ticket Used",
          description:`${player.name} used 1 Casino Ticket for an extra Scratch-Off.`,
          amount:-1,
          amountKind:"ticket",
          details:{reward:"Scratch-Off"}
        });
        const original = state.daily.scratch[player.name];
        delete state.daily.scratch[player.name];
        scratchDailyCard();
        state.daily.scratch[player.name] = original || todayKey();
        save();
      }
    }

    function weightedReward(rewards) {
      const total = rewards.reduce((sum, item) => sum + item.weight, 0);
      let roll = Math.random() * total;
      for (const reward of rewards) {
        roll -= reward.weight;
        if (roll <= 0) return reward;
      }
      return rewards[0];
    }

    function handleAction(action, target = null) {
      if (action === "toggle-mobile-nav") {
        toggleMobileNav();
        return;
      }
      if (action === "open-profile") {
        openProfileDialog();
        return;
      }
      if (action === "close-profile") {
        closeProfileDialog();
        return;
      }
      if (action === "changelog-page") {
        changelogPage = Math.max(1, Number(target?.dataset.page || 1));
        renderChangelog();
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
      if (action === "register-account") {
        registerAccount();
        return;
      }
      if (action === "close-ticket-dialog") {
        pendingTicketUse = "";
        if (els.ticketUseDialog?.open) els.ticketUseDialog.close();
        return;
      }
      if (action === "confirm-use-ticket") {
        confirmUseTicket();
        return;
      }
      if (action === "play-daily-activity") {
        playDailyActivity(target?.dataset.dailyActivity || "");
        return;
      }
      if (action === "buy-stock") {
        buyStock();
        return;
      }
      if (action === "sell-stock") {
        sellStock();
        return;
      }
      if (action === "buy-asset") {
        buyAsset(target?.dataset.listingId || "");
        return;
      }
      if (action === "sell-asset") {
        sellAsset(target?.dataset.assetId || "");
        return;
      }
      if (action === "asset-category") {
        activeAssetCategory = target?.dataset.assetCategory || "garage";
        renderAssets();
        return;
      }
      if (action === "view-player-assets") {
        showPlayerAssets(target?.dataset.playerName || "");
        return;
      }
      if (action === "close-assets-dialog") {
        if (els.assetViewDialog?.open) els.assetViewDialog.close();
        return;
      }
      if (action === "open-online-blackjack") {
        activeView = "online";
        if (els.blackjackModeDialog) {
          els.blackjackModeDialog.showModal();
        } else {
          activeOnlineGame = "blackjack";
          blackjackMode = "solo";
        }
        render();
        return;
      }
      if (action === "choose-blackjack-mode") {
        if (els.blackjackModeDialog) els.blackjackModeDialog.showModal();
        return;
      }
      if (action === "close-blackjack-mode") {
        if (els.blackjackModeDialog?.open) els.blackjackModeDialog.close();
        return;
      }
      if (action === "open-blackjack-solo") {
        activeView = "online";
        activeOnlineGame = "blackjack";
        activeRoomId = "";
        blackjackMode = "solo";
        if (els.blackjackModeDialog?.open) els.blackjackModeDialog.close();
        render();
        setTimeout(() => $("blackjackOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "open-blackjack-multi") {
        activeView = "online";
        activeOnlineGame = "blackjack";
        activeRoomId = "";
        blackjackMode = "multi";
        if (els.blackjackModeDialog?.open) els.blackjackModeDialog.close();
        render();
        setTimeout(() => $("blackjackOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "open-online-poker") {
        activeView = "online";
        activeOnlineGame = "poker";
        render();
        setTimeout(() => $("pokerOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "open-online-slots") {
        activeView = "online";
        els.slotMachineDialog?.showModal();
        render();
        return;
      }
      if (action === "open-online-craps") {
        activeView = "online";
        activeOnlineGame = "craps";
        activeRoomId = "";
        render();
        setTimeout(() => $("crapsOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "choose-slot-machine") {
        els.slotMachineDialog?.showModal();
        return;
      }
      if (action === "close-slot-machine") {
        if (els.slotMachineDialog?.open) els.slotMachineDialog.close();
        return;
      }
      if (action === "back-online-games") {
        activeView = "online";
        activeOnlineGame = "";
        activeRoomId = "";
        render();
        window.scrollTo({top: 0, behavior: "smooth"});
        return;
      }
      if (action === "solo-blackjack-deal") {
        startSoloBlackjack();
        return;
      }
      if (action === "set-solo-bet") {
        setSoloBetAmount(target?.dataset.bet || 25);
        return;
      }
      if (action === "adjust-solo-bet") {
        adjustSoloBet(target?.dataset.delta || 0);
        return;
      }
      if (action === "set-multi-bet") {
        const input = $("multiBjBetAmount");
        if (input) input.value = Math.max(1, Math.round(Number(target?.dataset.bet || 5)));
        return;
      }
      if (action === "adjust-multi-bet") {
        const input = $("multiBjBetAmount");
        if (input) input.value = Math.max(1, Math.round(Number(input.value || 1) + Number(target?.dataset.delta || 0)));
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
      if (action === "solo-blackjack-split") {
        splitSoloBlackjack();
        return;
      }
      if (action === "solo-blackjack-double") {
        doubleSoloBlackjack();
        return;
      }
      if (action === "solo-blackjack-reset") {
        if (soloBlackjack.phase === "playing" || soloBlackjack.phase === "dealing") return toast("Finish the current blackjack hand first.");
        soloBlackjack = createEmptyBlackjackGame();
        render();
        toast("Blackjack table cleared.");
        return;
      }
      if (action === "slots-spin") {
        spinSlots();
        return;
      }
      if (action === "slot-bet-minus" || action === "slot-bet-plus") {
        const input = $("slotBetAmount");
        const delta = action === "slot-bet-plus" ? 1 : -1;
        input.value = Math.max(1, Math.round(Number(input.value || 1)) + delta);
        $("slotBetPreset").value = "";
        renderSlots();
        return;
      }
      if (action === "slots-reset") {
        if (slotMachine.spinning) return toast("Wait for the reels to stop.");
        slotMachine = createEmptySlotMachine();
        render();
        toast("Slots cleared.");
        return;
      }
      if (action === "craps-roll") {
        rollCraps();
        return;
      }
      if (action === "craps-reset") {
        resetCraps();
        return;
      }
      if (action === "open-online-farkle") {
        activeOnlineGame = "farkle";
        activeView = "online";
        render();
        setTimeout(() => $("farkleOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
        return;
      }
      if (action === "farkle-roll") {
        rollFarkle();
        return;
      }
      if (action === "farkle-reset") {
        farkleGame = createEmptyFarkleGame();
        render();
        toast("Farkle table reset.");
        return;
      }
      if (action === "farkle-bet-minus" || action === "farkle-bet-plus") {
        const input = $("farkleBetAmount");
        const step = 25;
        input.value = Math.max(1, Math.round(Number(input.value || step)) + (action === "farkle-bet-plus" ? step : -step));
        renderFarkle();
        return;
      }
      if (action === "claim-daily-challenge") {
        claimDailyChallenge();
        return;
      }
      if (action === "spin-lucky-wheel") {
        spinLuckyWheel();
        return;
      }
      if (action === "confirm-lucky-wheel") {
        awardLuckyWheel();
        return;
      }
      if (action === "close-lucky-wheel") {
        if (els.luckyWheelDialog.open) els.luckyWheelDialog.close();
        return;
      }
      if (action === "scratch-daily-card") {
        scratchDailyCard();
        return;
      }
      if (action === "open-blackjack-guide") {
        openBlackjackGuide();
        return;
      }
      if (action === "close-blackjack-guide") {
        closeBlackjackGuide();
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
      if (action === "multi-blackjack-deal") {
        startMultiplayerBlackjackRound();
        return;
      }
      if (action === "multi-blackjack-ready") {
        setMultiplayerBlackjackReady();
        return;
      }
      if (action === "multi-blackjack-hit") {
        hitMultiplayerBlackjack();
        return;
      }
      if (action === "multi-blackjack-stand") {
        standMultiplayerBlackjack();
        return;
      }
      if (action === "multi-blackjack-split") {
        splitMultiplayerBlackjack();
        return;
      }
      if (action === "multi-blackjack-double") {
        doubleMultiplayerBlackjack();
        return;
      }
      if (action === "open-poker-room-modal") {
        openPokerRoomDialog();
        return;
      }
      if (action === "close-poker-room-modal") {
        closePokerRoomDialog();
        return;
      }
      if (action === "create-poker-room") {
        createPokerRoom();
        return;
      }
      if (action === "refresh-poker-rooms") {
        renderPokerRooms();
        toast("Open poker rooms refreshed.");
        return;
      }
      if (action === "join-poker-room") {
        joinPokerRoom(target?.dataset.roomId || "");
        return;
      }
      if (action === "poker-deal-hand") {
        dealPokerHand();
        return;
      }
      if (action === "poker-check") {
        pokerPlayerAction("check");
        return;
      }
      if (action === "poker-call") {
        pokerPlayerAction("call");
        return;
      }
      if (action === "poker-raise") {
        pokerPlayerAction("raise");
        return;
      }
      if (action === "poker-fold") {
        pokerPlayerAction("fold");
        return;
      }
      if (action === "close-active-room") {
        closeActiveRoom();
        return;
      }
      if (action === "leave-active-room") {
        leaveActiveRoom();
        return;
      }
      if (action === "clear-all-rooms") {
        clearAllRooms();
        return;
      }
      if (action === "open-poker-guide") {
        openPokerGuide();
        return;
      }
      if (action === "close-poker-guide") {
        closePokerGuide();
        return;
      }
      if (action === "open-craps-guide") {
        els.crapsGuideDialog.showModal();
        return;
      }
      if (action === "close-craps-guide") {
        els.crapsGuideDialog.close();
        return;
      }
      if (action === "dismiss-link-profile") {
        linkPromptDismissed = true;
        sessionStorage.setItem("virtualCasinoLinkPromptDismissed", "1");
        if (els.linkProfileDialog.open) els.linkProfileDialog.close();
        return;
      }
      if (action === "cancel-confirm") {
        pendingDeletePlayer = "";
        if (els.confirmDialog.open) els.confirmDialog.close();
        return;
      }
      if (action === "confirm-delete-player") {
        if (!isDarrenAdmin()) return toast("Only Darren can delete players.");
        const name = pendingDeletePlayer;
        if (!name || name === "Darren") return toast("Darren cannot be deleted.");
        state.players = state.players.filter((player) => player.name !== name);
        Object.values(state.linkages || {}).forEach((link) => {
          if (link.playerName === name) link.playerName = "";
        });
        addSystemHistory("Player Removed", `${name} was removed from the casino.`, {player:name});
        pendingDeletePlayer = "";
        if (els.confirmDialog.open) els.confirmDialog.close();
        save();
        return;
      }
      if (action === "bank-borrow") {
        const player = currentPlayer();
        const amount = Number($("bankBorrowAmount").value || 0);
        if (!player || amount <= 0) return toast("Enter a loan amount.");
        const chips = chipSetup(amount);
        player.bankDebt += amount;
        adjustPlayerBankroll(player, amount);
        state.counters.loansTaken += 1;
        unlockAchievement("debt-borrower", player.name);
        addHistoryEvent({
          type:"bank-loan",
          category:"Bank",
          player:player.name,
          title:"Bank Loan",
          description:`${player.name} borrowed ${money(amount)} from the bank.`,
          amount,
          details:{debt:player.bankDebt, chips:chipText(chips)}
        });
        save();
        toast(`${player.name} borrowed ${money(amount)}. Chips added: ${chipText(chips)}.`);
      }
      if (action === "toggle-achievement-showcase") {
        const player = currentPlayer();
        const id = target?.dataset.achievementId || "";
        if (!player || !id || !state.unlockedAchievements?.[id]) return toast("Only unlocked achievements can be showcased.");
        player.favoriteAchievements = Array.isArray(player.favoriteAchievements) ? player.favoriteAchievements : [];
        if (player.favoriteAchievements.includes(id)) {
          player.favoriteAchievements = player.favoriteAchievements.filter((item) => item !== id);
          toast("Achievement removed from showcase.");
        } else {
          if (player.favoriteAchievements.length >= 3) return toast("You can showcase up to three achievements.");
          player.favoriteAchievements.push(id);
          toast("Achievement added to your showcase.");
        }
        save();
        return;
      }
      if (action === "bank-deposit") {
        depositToBank();
        return;
      }
      if (action === "bank-withdraw") {
        withdrawFromBank();
        return;
      }
      if (action === "bankroll-transfer") {
        transferBankroll();
        return;
      }
      if (action === "add-player") {
        if (!isDarrenAdmin()) return toast("Only Darren can add players.");
        const name = $("newPlayerName").value.trim();
        if (!name) return toast("Enter a player name.");
        if (state.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) return toast("That player already exists.");
        state.players.push({name, xp:0, stars:0, chips:{...blank}, bankroll:0, lifetime:0, bankBalance:0, bankDebt:0, casinoTickets:0, portfolio:{}, portfolioCost:{}, ownedAssets:[], sessionBuyIn:0, gamesPlayed:0});
        $("newPlayerName").value = "";
        addSystemHistory("Player Created", `${name} was created by admin.`, {player:name});
        save();
      }
      if (action === "delete-player") {
        if (!isDarrenAdmin()) return toast("Only Darren can delete players.");
        const name = target?.dataset.playerName || "";
        if (!name || name === "Darren") return toast("Darren cannot be deleted.");
        pendingDeletePlayer = name;
        els.confirmTitle.textContent = "Delete Player";
        els.confirmBody.textContent = `Delete ${name}? This removes their player record from the tracker.`;
        els.confirmDialog.showModal();
      }
      if (action === "manual-xp") {
        if (!isDarrenAdmin()) return toast("Only Darren can set XP.");
        addSystemHistory("Manual XP", `${$("manualPlayer").value} received ${Number($("manualXP").value || 0)} manual XP.`, {player:$("manualPlayer").value});
        addXP($("manualPlayer").value, Number($("manualXP").value || 0), "Manual catch-up adjustment");
      }
      if (action === "manual-level") {
        if (!isDarrenAdmin()) return toast("Only Darren can set levels and stars.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return;
        player.xp = levelXP(Number($("manualLevel").value));
        player.stars = Math.max(0, Number($("manualStars").value || 0));
        addSystemHistory("Manual Level", `${player.name} manually set to Level ${$("manualLevel").value} with ${player.stars} star(s).`, {player:player.name, level:$("manualLevel").value, stars:player.stars});
        save();
      }
      if (action === "grant-bankroll") {
        if (!isDarrenAdmin()) return toast("Only Darren can grant bankroll.");
        const player = playerByName($("manualPlayer").value);
        const amount = Number($("grantMoneyAmount").value || 0);
        if (!player || amount === 0) return toast("Choose a player and amount.");
        adjustPlayerBankroll(player, amount);
        addHistoryEvent({
          type:"bank-grant",
          category:"Bank",
          player:player.name,
          title:"Bank Grant",
          description:`${player.name} was granted ${money(amount)} by the Bank.`,
          amount,
          details:{source:"Admin Bank Grant"}
        });
        addSystemHistory("Bankroll Granted", `${player.name} was granted ${money(amount)} by admin.`, {player:player.name, amount});
        save();
        toast(`${player.name} bankroll updated by ${signedMoney(amount)}.`);
      }
      if (action === "adjust-lifetime") {
        if (!isDarrenAdmin()) return toast("Only Darren can adjust lifetime P/L.");
        const player = playerByName($("manualPlayer").value);
        const amount = Number($("lifetimeAdjustAmount").value || 0);
        if (!player || amount === 0) return toast("Choose a player and lifetime adjustment amount.");
        player.lifetime = Number(player.lifetime || 0) + amount;
        addSystemHistory("Lifetime P/L Adjusted", `${player.name}'s lifetime P/L was adjusted by ${signedMoney(amount)}.`, {player:player.name, amount, lifetime:player.lifetime});
        save();
        toast(`${player.name} lifetime P/L adjusted by ${signedMoney(amount)}.`);
      }
      if (action === "remove-bankroll") {
        if (!isDarrenAdmin()) return toast("Only Darren can remove bankroll.");
        const player = playerByName($("manualPlayer").value);
        const amount = Math.max(0, Number($("removeMoneyAmount").value || 0));
        if (!player || amount <= 0) return toast("Choose a player and amount.");
        const removed = Math.min(bankrollValue(player), amount);
        adjustPlayerBankroll(player, -removed);
        addSystemHistory("Bankroll Removed", `${money(removed)} was removed from ${player.name}'s bankroll.`, {player:player.name, amount:removed});
        save();
        toast(`${money(removed)} removed from ${player.name}.`);
      }
      if (action === "grant-tickets") {
        if (!isDarrenAdmin()) return toast("Only Darren can grant tickets.");
        const player = playerByName($("manualPlayer").value);
        const amount = Math.max(0, Math.round(Number($("grantTicketsAmount").value || 0)));
        if (!player || amount <= 0) return toast("Choose a player and ticket amount.");
        awardCasinoTickets(player, amount, "admin grant");
        addSystemHistory("Tickets Granted", `${player.name} received ${amount} Casino Ticket${amount === 1 ? "" : "s"} from admin.`, {player:player.name, amount});
        save();
        toast(`${amount} ticket${amount === 1 ? "" : "s"} granted to ${player.name}.`);
      }
      if (action === "reset-daily-wheel") {
        if (!isDarrenAdmin()) return toast("Only Darren can reset daily spins.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return toast("Choose a player.");
        delete state.daily.wheel[player.name];
        addSystemHistory("Wheel Cooldown Reset", `${player.name}'s Lucky Wheel cooldown was reset by admin.`, {player:player.name});
        save();
        toast(`${player.name} can spin the wheel again.`);
      }
      if (action === "reset-daily-scratch") {
        if (!isDarrenAdmin()) return toast("Only Darren can reset scratch-offs.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return toast("Choose a player.");
        delete state.daily.scratch[player.name];
        addSystemHistory("Scratch-Off Cooldown Reset", `${player.name}'s Scratch-Off cooldown was reset by admin.`, {player:player.name});
        save();
        toast(`${player.name} can scratch again.`);
      }
      if (action === "reset-daily-clickables") {
        if (!isDarrenAdmin()) return toast("Only Darren can reset daily clickables.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return toast("Choose a player.");
        delete state.daily.activities[player.name];
        addSystemHistory("Daily Clickables Reset", `${player.name}'s rotating daily clickables were reset by admin.`, {player:player.name});
        save();
        toast(`${player.name}'s clickables are ready again.`);
      }
      if (action === "reset-daily-all") {
        if (!isDarrenAdmin()) return toast("Only Darren can reset dailies.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return toast("Choose a player.");
        delete state.daily.wheel[player.name];
        delete state.daily.scratch[player.name];
        delete state.daily.activities[player.name];
        delete state.daily.challenges[player.name];
        addSystemHistory("All Dailies Reset", `${player.name}'s daily wheel, scratch-off, clickables, and challenges were reset by admin.`, {player:player.name});
        save();
        toast(`${player.name}'s full daily set was reset.`);
      }
      if (action === "settle-local-blackjack") {
        return toast("Use the Local Session Settlement Desk for blackjack settlements.");
      }
      if (action === "clear-linkage") {
        if (!isDarrenAdmin()) return toast("Only Darren can edit linkages.");
        const key = target?.dataset.linkKey || "";
        if (state.linkages[key]) {
          state.linkages[key].playerName = "";
          state.linkages[key].displayName = state.linkages[key].displayName || "";
          state.linkages[key].updatedAt = Date.now();
          addSystemHistory("Linkage Cleared", `Cleared player linkage for ${state.linkages[key].email || key}.`, {key});
          save();
        }
      }
      if (action === "set-linkage") {
        if (!isDarrenAdmin()) return toast("Only Darren can edit linkages.");
        const key = target?.dataset.linkKey || "";
        const select = document.querySelector(`[data-link-select="${CSS.escape(key)}"]`);
        if (state.linkages[key] && select?.value) {
          state.linkages[key].playerName = select.value;
          state.linkages[key].displayName = select.value;
          state.linkages[key].updatedAt = Date.now();
          addSystemHistory("Linkage Updated", `Updated player linkage for ${state.linkages[key].email || key} to ${select.value}.`, {key, player:select.value});
          save();
        }
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
      if (action === "toggle-local-player") {
        const name = target?.dataset.player || "";
        if (!playerByName(name)) return;
        const selected = new Set(localSettlement.selectedPlayers || []);
        if (target.checked) selected.add(name);
        else selected.delete(name);
        localSettlement.selectedPlayers = [...selected];
        localSettlement.reviews = [];
        localSettlement.overrideImbalance = false;
        renderLocalSettlementDesk();
      }
      if (action === "calculate-local-settlement") calculateLocalSettlement();
      if (action === "submit-local-settlement") submitLocalSettlement();
      if (action === "clear-local-settlement") clearLocalSettlement();
      if (action === "override-local-imbalance") {
        localSettlement.overrideImbalance = true;
        const imbalance = (localSettlement.reviews || []).reduce((sum, row) => sum + Number(row.sessionResult || 0), 0);
        renderLocalSettlementReview(localSettlement.reviews, imbalance);
        toast("Poker imbalance override enabled for this settlement.");
      }
      if (action === "calculate-manual-chip-tool") calculateManualChipTool();
      if (action === "clear-manual-chip-tool") clearManualChipTool();
      if (action === "export") {
        $("saveText").value = btoa(unescape(encodeURIComponent(JSON.stringify(state))));
        toast("Save text exported.");
      }
      if (action === "import") {
        try {
          state = normalize(decodeSave($("saveText").value));
          addSystemHistory("Save Imported", "Admin imported save text.");
          save();
          toast("Import complete.");
        } catch (error) {
          toast("Import failed. Check the save text.");
        }
      }
      if (action === "seed-save") {
        state = normalize(decodeSave(attachedSaveText));
        addSystemHistory("Seed Save Loaded", "Admin loaded the attached Canada save.");
        save();
      }
      if (action === "reset") {
        state = structuredClone(defaultState);
        addSystemHistory("Tracker Reset", "Admin reset the tracker to the attached Canada save.");
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
      if (view === "admin" && !isDarrenAdmin()) {
        toast("Only Darren can open Admin.");
        view = "players";
      }
      activeView = view;
      closeMobileNav();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    function toggleMobileNav() {
      els.mobileNavDrawer.hidden = !els.mobileNavDrawer.hidden;
    }

    function closeMobileNav() {
      els.mobileNavDrawer.hidden = true;
    }

    function openProfileDialog() {
      closeMobileNav();
      if (els.linkProfileDialog.open) els.linkProfileDialog.close();
      const profile = currentProfile();
      fillSelect("profilePlayerName");
      els.profileEmail.value = profile.email || firebaseState.user?.email || "local@test";
      els.profilePlayerName.value = playerByName(profile.playerName) ? profile.playerName : currentPlayer()?.name || "";
      els.profileDisplayName.value = els.profilePlayerName.value || profile.displayName || "";
      relinkUnlocked = false;
      els.profileRelinkPass.value = "";
      const hasLink = Boolean(profile.playerName);
      els.profilePlayerName.disabled = hasLink;
      els.profileRelinkHelp.hidden = !hasLink;
      els.profileRelinkHelp.textContent = "Already linked. Request Relink requires admin pass.";
      els.profilePassword.value = "";
      els.profileMessage.textContent = "Link this login to the player record used for bankroll and achievements.";
      els.profileDialog.showModal();
    }

    function closeProfileDialog() {
      els.profileDialog.close();
    }

    async function saveProfileSettings() {
      const playerName = els.profilePlayerName.value;
      const displayName = playerName || els.profileDisplayName.value.trim() || "Player";
      const newPassword = els.profilePassword.value;
      const existingProfile = currentProfile();
      if (existingProfile.playerName && existingProfile.playerName !== playerName && !relinkUnlocked) {
        els.profileMessage.textContent = "Request Relink with the admin pass before changing linked player.";
        return;
      }
      state.linkages[currentProfileKey()] = {
        email: existingProfile.email || firebaseState.user?.email || localProfile.email || "",
        displayName,
        playerName,
        updatedAt: Date.now()
      };
      if (firebaseDisabled) {
        localProfile = {email: "local@test", displayName, playerName};
        localStorage.setItem("virtualCasinoProfileV1", JSON.stringify(localProfile));
        els.profileMessage.textContent = "Profile saved for local test mode.";
        toast("Profile saved.");
        save({cloud: false});
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
        save({cloud: true});
        runAchievementSweep({cloud: true, showNoUnlock: true});
        closeProfileDialog();
      } catch (error) {
        console.warn(error);
        els.profileMessage.textContent = profileErrorMessage(error);
      }
    }

    function maybePromptProfileLink() {
      if (!isSignedIn() || currentPlayer() || linkPromptDismissed) return;
      if (els.profileDialog.open || els.linkProfileDialog.open) return;
      setTimeout(() => {
        if (isSignedIn() && !currentPlayer() && !linkPromptDismissed && !els.profileDialog.open && !els.linkProfileDialog.open) {
          els.linkProfileDialog.showModal();
        }
      }, 350);
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

    function resultToast(title, delta, duration = 4200) {
      const deltaClass = String(delta).startsWith("-") ? "loss" : "money";
      els.toast.innerHTML = `<strong>${escapeHtml(title)}</strong><span class="result-delta ${deltaClass}">${escapeHtml(delta)}</span>`;
      els.toast.classList.add("show");
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => els.toast.classList.remove("show"), duration);
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
          createUserWithEmailAndPassword: authModule.createUserWithEmailAndPassword,
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
            clearInterval(roomPollTimer);
            if (firebaseState.unsubscribe) firebaseState.unsubscribe();
            if (firebaseState.roomsUnsubscribe) firebaseState.roomsUnsubscribe();
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
      const roomsRef = dbRef(firebaseState.db, `${databasePath}/state/onlineRooms`);
      const snapshot = await get(stateRef);
      if (!snapshot.exists()) {
        await set(stateRef, {...state, updatedAtServer: serverTimestamp()});
      }
      if (firebaseState.unsubscribe) firebaseState.unsubscribe();
      if (firebaseState.roomsUnsubscribe) firebaseState.roomsUnsubscribe();
      firebaseState.unsubscribe = onValue(stateRef, (snap) => {
        if (!snap.exists()) return;
        const incoming = normalize(snap.val());
        const canApplyInitialCloud = !realtimeSnapshotApplied && !hadLocalSaveAtBoot;
        if (!canApplyInitialCloud && isIncomingSnapshotOlder(incoming, state)) {
          setSync("Ignored older cloud snapshot", true);
          return;
        }
        skipNextCloudWrite = true;
        const previousRooms = state.onlineRooms || {};
        state = incoming;
        state.onlineRooms = previousRooms;
        localStorage.setItem(localKey, JSON.stringify(state));
        realtimeSnapshotApplied = true;
        setSync("Live sync loaded", true);
        runAchievementSweep({cloud: false});
        render();
        setTimeout(() => { skipNextCloudWrite = false; }, 50);
      }, (error) => {
        console.warn(error);
        setSync("Database blocked", false);
      });
      firebaseState.roomsUnsubscribe = onValue(roomsRef, (snap) => {
        applyRoomsSnapshot(snap.val() || {});
      }, (error) => {
        console.warn(error);
        setSync("Room sync blocked", false);
      });
      startRoomPoller();
    }

    async function registerAccount() {
      const email = els.signInEmail.value.trim();
      const password = els.signInPassword.value;
      if (firebaseDisabled) {
        els.signInMessage.textContent = "Registration is disabled in local test mode. Use password neweden.";
        return;
      }
      if (!email || !password) {
        els.signInMessage.textContent = "Enter email and password to register.";
        return;
      }
      if (!firebaseState.ready) {
        els.signInMessage.textContent = firebaseConfigured() ? "Firebase is still loading." : "Firebase config is missing.";
        return;
      }
      try {
        const credential = await firebaseState.modules.createUserWithEmailAndPassword(firebaseState.auth, email, password);
        const displayName = email.split("@")[0] || "Player";
        await firebaseState.modules.updateProfile(credential.user, {displayName}).catch(() => {});
        await firebaseState.modules.update(firebaseState.modules.dbRef(firebaseState.db, `${databasePath}/users/${credential.user.uid}`), {
          email,
          displayName,
          playerName:"",
          createdAt: firebaseState.modules.serverTimestamp(),
          online:true
        }).catch(() => {});
        els.signInMessage.textContent = "Account created. Open Profile Settings to claim your player.";
      } catch (error) {
        els.signInMessage.textContent = firebaseErrorMessage(error);
      }
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
      clearInterval(roomPollTimer);
      if (firebaseState.user && firebaseState.ready) {
        if (firebaseState.roomsUnsubscribe) firebaseState.roomsUnsubscribe();
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
      const achievementCategoryButton = event.target.closest("[data-achievement-category]");
      if (achievementCategoryButton) {
        achievementCategory = achievementCategoryButton.dataset.achievementCategory || "all";
        renderAchievementBoards();
      }
      const blackjackTab = event.target.closest("[data-blackjack-mode]");
      if (blackjackTab) {
        blackjackMode = blackjackTab.dataset.blackjackMode;
        activeOnlineGame = "blackjack";
        render();
      }
      const historyFilterButton = event.target.closest("[data-history-filter]");
      if (historyFilterButton) {
        historyFilter = historyFilterButton.dataset.historyFilter || "all";
        renderHistoryBoard();
      }
      const bankPreset = event.target.closest("[data-bank-preset]");
      if (bankPreset) {
        const input = $(bankPreset.dataset.bankTarget || "");
        const player = currentPlayer();
        if (input && player) {
          const preset = bankPreset.dataset.bankPreset;
          const maximum = input.id === "bankWithdrawAmount" ? Number(player.bankBalance || 0) : bankrollValue(player);
          input.value = ["max","all"].includes(preset) ? maximum : Number(preset || 0);
        }
      }
      const slotButton = event.target.closest("[data-slot-machine]");
      if (slotButton) {
        slotMachine = createEmptySlotMachine();
        slotMachine.machine = slotButton.dataset.slotMachine;
        const machine = currentSlotMachine();
        slotMachine.reels = Array.from({length: machine.reels}, () => Array.from({length: machine.rows}, () => "blank"));
        activeView = "online";
        activeOnlineGame = "slots";
        activeRoomId = "";
        if (els.slotMachineDialog?.open) els.slotMachineDialog.close();
        render();
        setTimeout(() => $("slotsOnlineArea")?.scrollIntoView({behavior: "smooth", block: "start"}), 60);
      }
      const slotPresetButton = event.target.closest("[data-slot-preset-button]");
      if (slotPresetButton) {
        $("slotBetAmount").value = slotPresetButton.dataset.slotPresetButton;
        $("slotBetPreset").value = "";
        renderSlots();
      }
    });

    els.signInForm.addEventListener("submit", (event) => {
      event.preventDefault();
      signIn(els.signInEmail.value.trim(), els.signInPassword.value);
    });
    els.profileDialog.addEventListener("click", (event) => {
      if (event.target === els.profileDialog) closeProfileDialog();
    });
    els.mobileNavDrawer.addEventListener("click", (event) => {
      if (event.target === els.mobileNavDrawer) closeMobileNav();
    });
    els.blackjackRoomDialog.addEventListener("click", (event) => {
      if (event.target === els.blackjackRoomDialog) closeBlackjackRoomDialog();
    });
    els.blackjackModeDialog?.addEventListener("click", (event) => {
      if (event.target === els.blackjackModeDialog) els.blackjackModeDialog.close();
    });
    els.slotMachineDialog?.addEventListener("click", (event) => {
      if (event.target === els.slotMachineDialog) els.slotMachineDialog.close();
    });
    els.blackjackGuideDialog.addEventListener("click", (event) => {
      if (event.target === els.blackjackGuideDialog) closeBlackjackGuide();
    });
    els.pokerRoomDialog.addEventListener("click", (event) => {
      if (event.target === els.pokerRoomDialog) closePokerRoomDialog();
    });
    els.pokerGuideDialog.addEventListener("click", (event) => {
      if (event.target === els.pokerGuideDialog) closePokerGuide();
    });
    els.crapsGuideDialog?.addEventListener("click", (event) => {
      if (event.target === els.crapsGuideDialog) els.crapsGuideDialog.close();
    });
    els.luckyWheelDialog?.addEventListener("click", (event) => {
      if (event.target === els.luckyWheelDialog) els.luckyWheelDialog.close();
    });
    els.profilePlayerName.addEventListener("change", () => {
      if (els.profilePlayerName.value) els.profileDisplayName.value = els.profilePlayerName.value;
    });
    els.profileRelinkPass.addEventListener("input", () => {
      if (els.profileRelinkPass.value === "BigDreams001") {
        relinkUnlocked = true;
        els.profilePlayerName.disabled = false;
        els.profileRelinkHelp.textContent = "Relink unlocked.";
        toast("Relink unlocked.");
      }
    });
    $("soloBetAmount")?.addEventListener("input", () => {
      if (Number($("soloBetAmount").value || 0) < 1) $("soloBetAmount").value = "1";
    });
    $("localStakeMode")?.addEventListener("change", () => {
      localSettlement.reviews = [];
      renderLocalSettlementDesk();
    });
    $("manualStakeMode")?.addEventListener("change", () => renderStakeValues("manual"));
    ["localStakeWhite","localStakeRed","localStakeBlue","localStakeGreen","localStakeBlack"].forEach((id) => $(id)?.addEventListener("input", () => renderStakeValues("local")));
    ["manualStakeWhite","manualStakeRed","manualStakeBlue","manualStakeGreen","manualStakeBlack"].forEach((id) => $(id)?.addEventListener("input", () => renderStakeValues("manual")));
    $("localGameType")?.addEventListener("change", () => {
      localSettlement.reviews = [];
      if ($("localSettlementReview")) $("localSettlementReview").textContent = "Game type changed. Recalculate before submitting.";
    });
    $("slotBetPreset").addEventListener("change", () => {
      if ($("slotBetPreset").value) $("slotBetAmount").value = $("slotBetPreset").value;
      renderSlots();
    });
    $("slotBetAmount").addEventListener("input", renderSlots);
    $("stockSymbol")?.addEventListener("change", updateTradePreview);
    $("stockShares")?.addEventListener("input", updateTradePreview);
    $("stockNetworkFilter")?.addEventListener("change", () => {
      stockNetworkFilter = $("stockNetworkFilter").value || "all";
      renderStockMarket();
    });
    $("stockSectorFilter")?.addEventListener("change", () => {
      stockSectorFilter = $("stockSectorFilter").value || "all";
      renderStockMarket();
    });
    $("historyLimit")?.addEventListener("change", () => {
      activityHistoryLimit = Number($("historyLimit").value || 10);
      renderHistoryBoard();
    });
    $("historySearch")?.addEventListener("input", () => {
      historySearch = $("historySearch").value.trim().toLowerCase();
      renderHistoryBoard();
    });
    $("achievementSearch")?.addEventListener("input", () => {
      achievementSearch = $("achievementSearch").value.trim().toLowerCase();
      renderAchievementBoards();
    });
    $("achievementSort")?.addEventListener("change", () => {
      achievementSort = $("achievementSort").value || "unlocked";
      renderAchievementBoards();
    });
    els.pokerBuyIn?.addEventListener("input", renderPokerBuyInPreview);
    setInterval(() => {
      if (activeView === "dailies") renderDailyRewards();
    }, 30000);
    setInterval(() => {
      if (!isSignedIn() || activeView !== "stocks") return;
      if (Date.now() >= Number(state.stockMarket?.nextTick || 0)) {
        maybeAdvanceMarkets();
        renderStockMarket();
      } else {
        updateStockCountdownDisplay();
      }
    }, 1000);
    setInterval(() => {
      if (!isSignedIn()) return;
      maybeAdvanceMarkets();
      if (activeView === "stocks") renderStockMarket();
      if (activeView === "assets") renderAssets();
      if (activeView === "dailies") renderDailyRewards();
    }, 10000);
    fillStaticSelects();
    render();
    loadChangelog();
    initFirebase();
