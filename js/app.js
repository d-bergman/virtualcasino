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
    const crapsXP = {"First Roll":10,"Pass Line Win":20,"Field Hit":15,"Hardway Hit":35,"Point Made":50};
    const LUCKY_WHEEL_REWARDS = [
      {label:"$10", type:"money", value:10, weight:22},
      {label:"10 XP", type:"xp", value:10, weight:20},
      {label:"$25", type:"money", value:25, weight:20},
      {label:"25 XP", type:"xp", value:25, weight:18},
      {label:"$50", type:"money", value:50, weight:17},
      {label:"50 XP", type:"xp", value:50, weight:14},
      {label:"$100", type:"money", value:100, weight:12},
      {label:"$250", type:"money", value:250, weight:7},
      {label:"250 XP", type:"xp", value:250, weight:5},
      {label:"$500", type:"money", value:500, weight:3},
      {label:"500 XP", type:"xp", value:500, weight:2},
      {label:"$1000", type:"money", value:1000, weight:1},
      {label:"1000 XP", type:"xp", value:1000, weight:1},
      {label:"JACKPOT", type:"money", value:5000, weight:0.2, golden:true}
    ];
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
      ["slots-first-spin","First Spin","Spin any slot machine","Common","Slots","slots"],
      ["slots-first-win","First Slot Win","Win money on slots","Common","Slots","slots"],
      ["slots-jackpot-hunter","Jackpot Hunter","Hit any slot jackpot","Rare","Slots","slots"],
      ["slots-grand-vault","Grand Vault","Hit the Treasure Vault Grand Jackpot","Legendary","Slots","slots"],
      ["slots-family-fortune","Family Fortune","Trigger a family symbol bonus","Rare","Slots","slots"],
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
      ["bank-first-deposit","First Deposit","Deposit bankroll into the bank","Common","Banking","banking"],
      ["bank-safe-stack","Safe Stack","Keep $10,000 in safe bank","Rare","Banking","banking"],
      ["bankroll-transfer","Generous Banker","Transfer bankroll to another player","Common","Banking","banking"],
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
      ["daily-first-clear","Daily Grinder","Complete a daily challenge","Common","Dailies","daily"],
      ["daily-wheel-spin","Wheel Spinner","Spin the Lucky Wheel","Common","Dailies","daily"],
      ["daily-scratch-card","Scratch Luck","Use the daily scratch-off","Common","Dailies","daily"],
      ["craps-first-roll","Dice Rookie","Roll your first craps hand","Common","Craps","craps"],
      ["craps-pass-line","Pass Line Winner","Win a Pass Line bet","Common","Craps","craps"],
      ["craps-field-day","Field Day","Win a Field bet","Common","Craps","craps"],
      ["craps-point-maker","Point Maker","Establish and make a point","Uncommon","Craps","craps"],
      ["craps-hardway","Hardway Hero","Win a hardway bet","Rare","Craps","craps"],
      ["craps-seven-out","Seven Out Survivor","Play through a seven-out","Common","Craps","craps"],
      ["craps-hot-dice","Hot Dice","Win three craps bets","Rare","Craps","craps"],
      ["craps-table-profit","Table Profit","Win $100+ from craps","Rare","Craps","craps"],
      ["craps-comeback","Dice Comeback","Win craps while under $50 bankroll","Epic","Craps","craps"],
      ["craps-high-roller","Craps High Roller","Place a $100+ craps bet","Epic","Craps","craps"],
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

    const defaultState = normalize(decodeSave(attachedSaveText));
    let state = normalize(JSON.parse(localStorage.getItem(localKey) || "null") || structuredClone(defaultState));
    let activeView = "overview";
    let activeGame = "poker";
    let skipNextCloudWrite = false;
    let cloudWriteTimer = null;
    let localTestSignedIn = false;
    let activeAchievementTab = "unlocked";
    let achievementCheckTimer = null;
    let roomPollTimer = null;
    let activeOnlineGame = "";
    let activeRoomId = "";
    let lastClosedRoomId = "";
    let roomNoticePrimed = false;
    let seenOpenRoomIds = new Set();
    let linkPromptDismissed = sessionStorage.getItem("virtualCasinoLinkPromptDismissed") === "1";
    let relinkUnlocked = false;
    let pendingDeletePlayer = "";
    let blackjackMode = "solo";
    let lastRoomResultToastKey = "";
    let activityHistoryLimit = 10;
    let changelogEntries = [];
    let changelogPage = 1;
    const changelogRowsPerPage = 5;
    let soloBlackjack = createEmptyBlackjackGame();
    let slotMachine = createEmptySlotMachine();
    let crapsGame = createEmptyCrapsGame();
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
      pokerRoomMessage: $("pokerRoomMessage"),
      pokerGuideDialog: $("pokerGuideDialog"),
      luckyWheelDialog: $("luckyWheelDialog"),
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
        return {
          name: String(player.name || "Player").trim(),
          xp: Number(player.xp || 0),
          stars: Number(player.stars || 0),
          chips,
          lifetime,
          bankBalance: Number(player.bankBalance || 0),
          bankDebt: Number(player.bankDebt || 0),
          sessionBuyIn: Number(player.sessionBuyIn || player.sessionStart || 0),
          gamesPlayed: Number(player.gamesPlayed || 0)
        };
      });
      data.version = 9;
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
      data.daily = data.daily && typeof data.daily === "object" && !Array.isArray(data.daily) ? data.daily : {};
      data.daily.challenges = data.daily.challenges && typeof data.daily.challenges === "object" && !Array.isArray(data.daily.challenges) ? data.daily.challenges : {};
      data.daily.wheel = data.daily.wheel && typeof data.daily.wheel === "object" && !Array.isArray(data.daily.wheel) ? data.daily.wheel : {};
      data.daily.scratch = data.daily.scratch && typeof data.daily.scratch === "object" && !Array.isArray(data.daily.scratch) ? data.daily.scratch : {};
      data.daily.wheelHistory = Array.isArray(data.daily.wheelHistory) ? data.daily.wheelHistory.slice(0, 12) : [];
      data.jackpots = data.jackpots && typeof data.jackpots === "object" && !Array.isArray(data.jackpots) ? data.jackpots : {};
      data.jackpots.treasureVault = {
        mini: Number(data.jackpots.treasureVault?.mini || 250),
        major: Number(data.jackpots.treasureVault?.major || 2500),
        grand: Number(data.jackpots.treasureVault?.grand || 25000)
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
      return [...state.players].sort((a, b) => netBankroll(b) - netBankroll(a));
    }

    function netBankroll(player) {
      return stackValue(player.chips) - Number(player.bankDebt || 0);
    }

    function playerByName(name) {
      return state.players.find((player) => player.name === name);
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
          const {dbRef, get, set, serverTimestamp} = firebaseState.modules;
          const stateRef = dbRef(firebaseState.db, `${databasePath}/state`);
          const latest = await get(stateRef).catch(() => null);
          const latestRooms = latest?.val?.()?.onlineRooms;
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
      log("All online rooms were cleared by Darren.");
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
      const linked = currentPlayer();
      const restrictedLoan = ["borrowPlayer", "bankBorrowPlayer"].includes(id) && linked && !isDarrenAdmin();
      const players = restrictedLoan ? [linked] : state.players;
      element.innerHTML = players.map((p) => `<option value="${escapeAttr(p.name)}">${escapeHtml(displayNameForPlayer(p.name))}</option>`).join("");
      if (current && state.players.some((p) => p.name === current)) element.value = current;
      if (restrictedLoan) element.value = linked.name;
    }

    function fillStaticSelects() {
      $("handType").innerHTML = Object.entries(pokerHandXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("blackjackEvent").innerHTML = Object.entries(blackjackXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("unoEvent").innerHTML = Object.entries(unoXP).map(([name, xp]) => `<option value="${escapeAttr(name)}">${escapeHtml(name)} - ${xp} XP</option>`).join("");
      $("manualLevel").innerHTML = levels.slice(0, 10).map((row) => `<option value="${row.level}">Level ${row.level}</option>`).join("");
    }

    function render() {
      document.body.classList.toggle("auth-locked", !isSignedIn() && !document.body.classList.contains("auth-checking"));
      handleActiveRoomClosure();
      if (activeView === "admin" && !isDarrenAdmin()) activeView = "players";
      document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
      document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${activeView}View`));
      document.querySelectorAll("[data-game]").forEach((button) => button.classList.toggle("active", button.dataset.game === activeGame));
      document.querySelectorAll("[data-achievement-tab]").forEach((button) => button.classList.toggle("active", button.dataset.achievementTab === activeAchievementTab));
      document.querySelectorAll("[data-blackjack-mode]").forEach((button) => button.classList.toggle("active", button.dataset.blackjackMode === blackjackMode));
      ["borrowPlayer","bankBorrowPlayer","manualPlayer","buyinPlayer","chipPlayer","handPlayer","potPlayer","blackjackPlayer","unoPlayer","blackjackMoneyPlayer","localBjPlayer","transferToPlayer"].forEach(fillSelect);
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
      $("familyPrestige").textContent = state.players.reduce((sum, p) => sum + Number(p.stars || 0), 0) || 1;

      $("crewGrid").innerHTML = ranked.slice(0, 3).map(renderPlayerCard).join("");
      $("allPlayersDetailedBoard").innerHTML = state.players.map(renderDetailedPlayerCard).join("");
      $("leaderboard").innerHTML = ranked.map((p, i) => renderLeaderboardRow(p, i)).join("");
      $("allPlayersBoard").innerHTML = state.players.map((p) => renderPlayerSummaryRow(p)).join("");
      $("playerAdminBoard").innerHTML = state.players.map((p) => renderAdminPlayerRow(p)).join("");
      document.querySelectorAll(".admin-link").forEach((item) => item.hidden = !isDarrenAdmin());
      $("debtBoard").innerHTML = ranked.map((p) => renderDebtRow(p)).join("");
      renderLinkageAdminBoard();
      $("bankStatus").innerHTML = [
        renderListRow("&#9878;", "Total Loans Outstanding", "", money(state.players.reduce((sum, p) => sum + p.bankDebt, 0))),
        renderListRow("&#9888;", "Players In Debt", "", state.players.filter((p) => p.bankDebt > 0).length)
      ].join("");
      $("recentActivity").innerHTML = (state.log.length ? state.log : ["No activity yet."]).slice(0, 5).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      renderHistoryBoard();
      const unlocked = unlockedAchievementRows();
      $("recentAchievements").innerHTML = unlocked.length
        ? unlocked.slice(0, 3).map((item) => renderAchievementRow(item.definition, item.unlock)).join("")
        : renderListRow("&#9733;", "No achievements unlocked yet", "Complete tracked milestones to unlock achievements.", "");
      renderAchievementBoards();
      renderCurrentPlayerStats();
      renderBlackjackBankroll();
      $("gameGrid").innerHTML = ["poker","blackjack","uno"].map(renderGameCard).join("");
      document.querySelectorAll("[data-game-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.gamePanel === activeGame));
      const room = activeRoom();
      const onlineTilePage = $("onlineTilePage");
      if (onlineTilePage) onlineTilePage.hidden = Boolean(activeOnlineGame || room);
      $("blackjackOnlineArea").hidden = activeOnlineGame !== "blackjack" || Boolean(room);
      $("pokerOnlineArea").hidden = activeOnlineGame !== "poker" || Boolean(room);
      $("slotsOnlineArea").hidden = activeOnlineGame !== "slots" || Boolean(room);
      $("crapsOnlineArea").hidden = activeOnlineGame !== "craps" || Boolean(room);
      $("blackjackRoomArea").hidden = !(room && room.game === "blackjack");
      $("pokerRoomArea").hidden = !(room && room.game === "poker");
      $("blackjackSoloPanel").classList.toggle("active", blackjackMode === "solo");
      $("blackjackSoloPanel").hidden = blackjackMode !== "solo";
      $("blackjackMultiPanel").classList.toggle("active", blackjackMode === "multi");
      $("blackjackMultiPanel").hidden = blackjackMode !== "multi";
      renderBlackjackTable();
      renderBlackjackControls();
      renderBlackjackRooms();
      renderPokerRooms();
      renderActiveRoom();
      renderSlots();
      renderCraps();
      renderDailyRewards();
      renderLuckyWheel();
      renderSessionOverview();
      renderChangelog();
      maybePromptProfileLink();
    }

    function renderHistoryBoard() {
      const items = state.log.length ? state.log : ["No session history yet."];
      const visible = items.slice(0, activityHistoryLimit);
      $("historyBoard").innerHTML = visible.map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      const select = $("historyLimit");
      if (select) select.value = String(activityHistoryLimit);
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
              <div class="stat-line"><span>Current Bankroll</span><strong class="${bankrollClass}">${money(stackValue(player.chips))}</strong></div>
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

    function renderAdminPlayerRow(player) {
      const protectedPlayer = player.name === "Darren";
      return `<div class="list-row">
        <span class="medal">${playerSymbol(player.name)}</span>
        <div><strong>${escapeHtml(displayNameForPlayer(player.name))}</strong><div style="color:var(--muted);font-size:.82rem;">Player record: ${escapeHtml(player.name)}</div></div>
        <button class="mini-btn danger-mini" type="button" data-player-name="${escapeAttr(player.name)}" data-action="delete-player" ${protectedPlayer ? "disabled" : ""}>Delete</button>
      </div>`;
    }

    function renderDetailedPlayerCard(player) {
      const bankroll = stackValue(player.chips);
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
          <div><span>Safe Bank</span><strong>${money(player.bankBalance || 0)}</strong></div>
          <div><span>Lifetime P/L</span><strong class="${player.lifetime >= 0 ? "money" : "loss"}">${signedMoney(player.lifetime)}</strong></div>
          <div><span>Bank Debt</span><strong class="${debtClass}">${money(player.bankDebt || 0)}</strong></div>
          <div><span>Achievements</span><strong>${achievements}</strong></div>
          <div><span>XP</span><strong>${Number(player.xp || 0).toLocaleString()}</strong></div>
        </div>
      </article>`;
    }

    function renderLeaderboardRow(player, index) {
      const net = netBankroll(player);
      const debtText = player.bankDebt > 0 ? `Debt ${money(player.bankDebt)} - net ${signedMoney(net)}` : `Net ${money(net)}`;
      return renderListRow(`#${index + 1}`, displayNameForPlayer(player.name), debtText, signedMoney(player.lifetime));
    }

    function renderPlayerSummaryRow(player) {
      return renderListRow(playerSymbol(player.name), displayNameForPlayer(player.name), `Bankroll ${money(stackValue(player.chips))} / Debt ${money(player.bankDebt)}`, `Net ${signedMoney(netBankroll(player))}`);
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
      const title = concealed ? `${definition.rarity} Mystery` : definition.name;
      const requirement = concealed ? "Requirement hidden for surprise." : definition.requirement;
      const meta = isUnlocked ? `${definition.rarity} - Unlocked ${timeAgo(unlock.at || Date.now())}` : `${definition.rarity} - ${definition.category}`;
      const value = isUnlocked ? (unlock.player || "Unlocked") : achievementProgress(definition);
      return renderListRow(rarityIcon(definition.rarity), title, requirement ? `${meta} - ${requirement}` : meta, value);
    }

    function renderAchievementBoards() {
      const unlocked = unlockedAchievementRows();
      const unlockedIds = new Set(unlocked.map((item) => item.definition.id));
      const linkedName = currentPlayer()?.name || "";
      const linkedUnlockedIds = new Set(Object.entries(state.unlockedAchievements || {})
        .filter(([, unlock]) => linkedName && unlock.player === linkedName)
        .map(([id]) => id));
      const locked = ACHIEVEMENT_DEFINITIONS.filter((definition) => !linkedUnlockedIds.has(definition.id) && !shouldConcealAchievement(definition, false));
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
        renderListRow(playerSymbol(player.name), currentDisplayName(), `Linked to ${player.name}`, money(stackValue(player.chips))),
        renderListRow("&#9818;", "Safe Bank", "Deposited bankroll", money(player.bankBalance || 0)),
        renderListRow("&#8597;", "Lifetime Profit / Loss", "All tracked play", signedMoney(player.lifetime)),
        renderListRow("&#9878;", "Bank Debt", "Outstanding loans", money(player.bankDebt))
      ].join("");
    }

    function renderBlackjackBankroll() {
      const player = currentPlayer();
      $("blackjackBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(stackValue(player.chips))}</span><span>Debt ${money(player.bankDebt)}</span>`
        : `<span>Link your profile to show bankroll here.</span>`;
    }

    function todayKey() {
      return centralDailyKey();
    }

    function dailyRecord(playerName = currentPlayer()?.name || "") {
      const key = todayKey();
      state.daily.challenges[playerName] = state.daily.challenges[playerName] || {};
      if (state.daily.challenges[playerName].date !== key) {
        state.daily.challenges[playerName] = {date:key, blackjackWins:0, slotSpins:0, xpEarned:0, claimed:false};
      }
      return state.daily.challenges[playerName];
    }

    function renderDailyRewards() {
      const player = currentPlayer();
      if (!player) {
        $("dailyChallengeBoard").innerHTML = renderListRow("&#9733;", "Link profile for daily rewards", "Daily challenge, wheel, and scratch card unlock after linking.", "");
        $("dailyRewardHistory").innerHTML = "";
        const claimButton = $("claimDailyButton");
        if (claimButton) claimButton.disabled = true;
        return;
      }
      const record = dailyRecord(player.name);
      const wheelDone = state.daily.wheel[player.name] === todayKey();
      const scratchDone = state.daily.scratch[player.name] === todayKey();
      const complete = record.blackjackWins >= 5 && record.slotSpins >= 5 && record.xpEarned >= 200;
      const reset = dailyResetText();
      $("dailyChallengeBoard").innerHTML = [
        renderListRow("&#9827;", "Win 5 Blackjack Hands", "Daily Challenge", `${Math.min(record.blackjackWins, 5)} / 5`),
        renderListRow("&#127922;", "Spin Slots 5 Times", "Daily Challenge", `${Math.min(record.slotSpins, 5)} / 5`),
        renderListRow("XP", "Earn 200 XP", "Daily Challenge", `${Math.min(record.xpEarned, 200)} / 200`),
        renderListRow("&#9819;", "Claim Reward", complete ? "Reward ready: $150 bankroll" : "Complete all tasks", record.claimed ? "Claimed" : complete ? "Ready" : "Locked"),
        renderListRow("&#127919;", "Lucky Wheel", "Once per day", wheelDone ? `Ready in ${reset.countdown} / ${reset.unlock}` : "Ready"),
        renderListRow("&#9635;", "Daily Scratch-Off", "Once per day", scratchDone ? `Ready in ${reset.countdown} / ${reset.unlock}` : "Ready")
      ].join("");
      const claimButton = $("claimDailyButton");
      if (claimButton) claimButton.disabled = !complete || record.claimed;
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
      const community = Array.isArray(table.community) ? table.community : [];
      const visibleCommunity = visiblePokerCommunity(table);
      $("pokerCommunityBoard").innerHTML = community.length
        ? community.map((card, index) => index < visibleCommunity ? renderPlayingCard(card, false, table.animateCommunityIndexes?.includes(index), false, Math.max(0, table.animateCommunityIndexes?.indexOf(index) || 0) * 800) : `<span class="playing-card hidden-card">?</span>`).join("")
        : `<span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span><span class="playing-card hidden-card">?</span>`;
      $("pokerRoomStatus").textContent = table.message || "Texas Hold'em room is open.";
      $("pokerPlayerHands").innerHTML = Object.entries(room.seats || {}).map(([key, seat]) => {
        const hand = table.hands?.[key] || [];
        const indexes = table.handAnimateIndexes?.[key] || [];
        const canSeeHand = key === currentProfileKey() || ["showdown","done"].includes(table.phase);
        const folded = Boolean(table.folded?.[key]);
        const cards = hand.length && !folded
          ? hand.map((card, index) => renderPlayingCard(card, !canSeeHand, indexes.includes(index), false, Math.max(0, indexes.indexOf(index)) * 800)).join("")
          : `<span class="sync-pill">Waiting for deal</span>`;
        const status = folded ? "Folded" : key === table.activeSeatKey ? "To act" : `${money(table.committed?.[key] || 0)} in pot`;
        return `<div class="list-row">
          <span class="medal ${medalClass(seat.playerName || seat.name)}">${playerSymbol(seat.playerName || seat.name)}</span>
          <div><strong>${escapeHtml(seat.name)}</strong><div class="playing-card-row compact">${cards}</div><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(status)} - ${escapeHtml(seat.playerName || "Unlinked")} ${key === room.hostKey ? "/ Host" : ""}</div></div>
        </div>`;
      }).join("") || `<div class="blackjack-status">No players seated.</div>`;
      const canDeal = isRoomHost(room) && Object.keys(room.seats || {}).length >= 2;
      const myTurn = table.activeSeatKey === currentProfileKey() && ["preflop","flop","turn","river"].includes(table.phase) && !table.folded?.[currentProfileKey()];
      const owed = Math.max(0, Number(table.currentBet || 0) - Number(table.bets?.[currentProfileKey()] || 0));
      document.querySelectorAll('[data-action="poker-deal-hand"]').forEach((button) => button.disabled = !canDeal);
      document.querySelectorAll('[data-action="poker-check"]').forEach((button) => button.disabled = !myTurn || owed > 0);
      document.querySelectorAll('[data-action="poker-call"]').forEach((button) => button.disabled = !myTurn || owed <= 0);
      document.querySelectorAll('[data-action="poker-raise"]').forEach((button) => button.disabled = !myTurn);
      document.querySelectorAll('[data-action="poker-fold"]').forEach((button) => button.disabled = !myTurn);
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
          Math.max(0, table.dealerAnimateIndexes?.indexOf(index) || 0) * 800
        )).join("")
        : `<div class="sync-pill">No dealer hand</div>`;
      $("multiDealerTotal").textContent = table.dealerHand.length
        ? (hideDealerHole ? handValue([table.dealerHand[0]]) : handValue(table.dealerHand))
        : "0";
      const activeSeat = seats[table.activeSeatKey];
      $("multiActiveSeat").textContent = activeSeat ? `${activeSeat.name}'s turn` : "Waiting";
      $("multiBlackjackStatus").textContent = table.message || "Start a shared round when players have joined.";
      const hands = table.hands || {};
      $("multiBlackjackHands").innerHTML = Object.entries(seats).map(([key, seat]) => {
        const hand = hands[key];
        const animated = table.handAnimateIndexes?.[key] || [];
        const seatHands = multiSeatHands(hand);
        const cardHtml = seatHands.length
          ? seatHands.map((seatHand, handIndex) => {
            const animatedKey = `${handIndex}`;
            const indexes = animated[animatedKey] || [];
            const cards = seatHand.cards.map((card, index) => renderPlayingCard(card, false, indexes.includes(index), false, Math.max(0, indexes.indexOf(index)) * 800)).join("");
            const status = seatHand.result || (seatHand.stood ? "Stand" : key === table.activeSeatKey && handIndex === Number(hand?.activeHand || 0) ? "Active" : "Queued");
            return `<div class="blackjack-hand ${key === table.activeSeatKey && handIndex === Number(hand?.activeHand || 0) ? "active" : ""}">
              <div class="blackjack-hand-meta"><strong>Hand ${handIndex + 1}</strong><span>${money(seatHand.bet || table.bet)} - ${escapeHtml(status)}${seatHand.doubled ? " / Double" : ""}${seatHand.delta ? ` / ${signedMoney(seatHand.delta)}` : ""}</span></div>
              <div class="playing-card-row compact">${cards}</div>
            </div>`;
          }).join("")
          : `<span class="sync-pill">Waiting for round</span>`;
        const total = activeMultiSeatHand(hand) ? handValue(activeMultiSeatHand(hand).cards) : 0;
        const status = multiSeatSummary(hand, key === table.activeSeatKey ? "Active" : table.phase === "waiting" ? "Waiting" : "Queued");
        return `<div class="list-row ${key === table.activeSeatKey ? "active-room-hand" : ""}">
          <span class="medal ${medalClass(seat.playerName || seat.name)}">${playerSymbol(seat.playerName || seat.name)}</span>
          <div>
            <strong>${escapeHtml(seat.name)}</strong>
            ${cardHtml}
            <div style="color:var(--muted);font-size:.82rem;">Total ${total} - ${escapeHtml(status)}${hand?.delta ? ` - ${signedMoney(hand.delta)}` : ""}</div>
          </div>
        </div>`;
      }).join("") || `<div class="blackjack-status">No players seated.</div>`;
      const currentKey = currentProfileKey();
      const isActive = table.phase === "player" && table.activeSeatKey === currentKey;
      const activeHand = isActive ? activeMultiSeatHand(table.hands?.[currentKey]) : null;
      const canSplit = Boolean(activeHand && activeHand.cards.length === 2 && activeHand.cards[0]?.rank === activeHand.cards[1]?.rank && Number(table.hands?.[currentKey]?.splits || 0) < 3 && multiSeatHands(table.hands?.[currentKey]).length < 4);
      const canDouble = Boolean(activeHand && activeHand.cards.length === 2);
      const readyEntries = Object.values(seats).filter((seat) => seat.ready && Number(seat.readyBet || 0) > 0);
      const canReady = !["player", "dealer"].includes(table.phase) && Boolean(seats[currentKey]);
      const canStart = isRoomHost(room) && !["player", "dealer"].includes(table.phase) && Object.keys(seats).length > 0 && readyEntries.length === Object.keys(seats).length;
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
      const totalXp = Number(currentPlayer()?.xp || 0);
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
          Math.max(0, soloBlackjack.dealerAnimateIndexes?.indexOf(index) || 0) * 800
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

    function renderBlackjackHand(hand, index) {
      const active = soloBlackjack.phase === "playing" && index === soloBlackjack.activeHand;
      const animated = soloBlackjack.playerAnimateIndexes?.[index] || [];
      const cards = hand.cards.map((card, cardIndex) => renderPlayingCard(card, false, animated.includes(cardIndex), false, Math.max(0, animated.indexOf(cardIndex)) * 800)).join("");
      const flags = [
        active ? "Active" : "",
        hand.doubled ? "Double" : "",
        hand.stood ? "Stand" : "",
        hand.result || ""
      ].filter(Boolean).join(" / ");
      return `<div class="blackjack-hand ${active ? "active" : ""}">
        <div class="blackjack-hand-meta"><strong>Hand ${index + 1}</strong><span>${money(hand.bet || soloBlackjack.bet)} ${flags ? "- " + escapeHtml(flags) : ""}</span></div>
        <div class="playing-card-row compact">${cards}</div>
      </div>`;
    }

    function renderPlayingCard(card, hidden = false, animate = false, flip = false, delayMs = 0) {
      const animationClass = [animate ? "dealt-card" : "", flip ? "flip-card" : ""].filter(Boolean).join(" ");
      const style = animate && delayMs ? ` style="--deal-delay:${delayMs}ms"` : "";
      if (hidden) return `<span class="playing-card hidden-card ${animationClass}"${style}>?</span>`;
      const red = card.suit === "♥" || card.suit === "♦";
      return `<span class="playing-card ${animationClass} ${red ? "red" : ""}"${style}>${escapeHtml(card.rank)}${escapeHtml(card.suit)}</span>`;
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
      $("slotLineText").textContent = `${machine.lines.length} payline${machine.lines.length === 1 ? "" : "s"}`;
      $("slotsBankroll").innerHTML = player
        ? `<span>${escapeHtml(currentDisplayName())}</span><span>Bankroll ${money(stackValue(player.chips))}</span><span>Wager ${money(totalWager)} (${money(lineBet)} x ${machine.lines.length})</span>${machine.progressive ? `<span>Mini ${money(state.jackpots.treasureVault.mini)} / Major ${money(state.jackpots.treasureVault.major)} / Grand ${money(state.jackpots.treasureVault.grand)}</span>` : ""}`
        : `<span>Link your profile to play slots.</span>`;
      $("slotReels").innerHTML = slotMachine.reels.map((reel) => `
        <div class="slot-reel ${slotMachine.spinning ? "spinning" : ""}">
          ${reel.map((symbolId) => renderSlotSymbol(symbolId)).join("")}
        </div>
      `).join("");
      $("slotStatus").innerHTML = `${escapeHtml(slotMachine.message)}${slotMachine.lastWin ? ` <strong class="${slotMachine.lastWin >= slotMachine.lastWager ? "money" : "loss"}">Paid ${money(slotMachine.lastWin)}</strong>` : ""}`;
      document.querySelectorAll('[data-action="slots-spin"]').forEach((button) => button.disabled = slotMachine.spinning);
      document.querySelectorAll('[data-action="slots-reset"]').forEach((button) => button.disabled = slotMachine.spinning);
    }

    function renderCraps() {
      const player = currentPlayer();
      const bankroll = player ? stackValue(player.chips) : 0;
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
      if (stackValue(player.chips) < amount) return toast(`You need ${money(amount)} bankroll for that craps bet.`);
      const roll = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
      const total = roll[0] + roll[1];
      crapsGame.lastRoll = roll;
      crapsGame.lastTotal = total;
      crapsGame.betType = betType;
      crapsGame.betAmount = amount;
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
        if (net !== 0) applyMoneyResult(player, net, "craps");
        state.gameStats.craps.played += 1;
        state.gameStats.craps.profit += net;
        if (net > 0) {
          crapsGame.wins += 1;
          state.gameStats.craps.wins += 1;
          state.gameStats.craps.biggest = Math.max(state.gameStats.craps.biggest || 0, net);
          addXP(player.name, crapsXP["First Roll"], "Craps: First Roll", {persist:false, toast:false});
          if (net >= 100) unlockAchievement("craps-table-profit", player.name);
          if (crapsGame.wins >= 3) unlockAchievement("craps-hot-dice", player.name);
          if (stackValue(player.chips) < 50) unlockAchievement("craps-comeback", player.name);
        }
        log(`${player.name} played craps: ${message} Net ${signedMoney(net)}.`);
        resultToast("Craps Result", signedMoney(net), 5000);
      }
      save();
    }

    function resetCraps() {
      crapsGame = createEmptyCrapsGame();
      render();
      toast("Craps table reset.");
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

    function renderSlotSymbol(symbolId) {
      const symbol = currentSlotSymbols().find((item) => item.id === symbolId) || slotSymbols.find((item) => item.id === symbolId) || slotSymbols[0];
      const classes = ["slot-symbol", symbol.wild ? "wild" : "", symbol.scatter ? "scatter" : ""].filter(Boolean).join(" ");
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
      if (stackValue(player.chips) < wager) return toast(`You need ${money(wager)} for 9 active lines.`);
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
      slotMachine.reels = spinSlotGrid();
      const result = evaluateSlots(slotMachine.reels, lineBet);
      const net = result.totalWin - wager;
      if (currentSlotMachine().progressive) {
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
      if (net !== 0) applyMoneyResult(player, net, "slots");
      state.gameStats.slots.played = Number(state.gameStats.slots.played || 0) + 1;
      trackDailyProgress(player.name, "slotSpins", 1);
      if (result.totalWin > wager) state.gameStats.slots.wins = Number(state.gameStats.slots.wins || 0) + 1;
      state.gameStats.slots.profit = Number(state.gameStats.slots.profit || 0) + net;
      state.gameStats.slots.biggest = Math.max(Number(state.gameStats.slots.biggest || 0), result.totalWin);
      log(`${player.name} spun slots for ${money(wager)} and paid ${money(result.totalWin)} (${signedMoney(net)} net).`);
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
      const preset = Number($("soloBetPreset").value || 0);
      const manual = Number($("soloBetAmount").value || 0);
      return Math.max(0, preset || manual);
    }

    function startSoloBlackjack() {
      const player = currentPlayer();
      const bet = selectedBet();
      if (soloBlackjack.phase === "playing" || soloBlackjack.phase === "dealing") return toast("Finish the current blackjack hand first.");
      if (!player) return toast("Link your profile to a player before playing blackjack.");
      if (bet <= 0) return toast("Enter a bet or choose a standard bet.");
      if (stackValue(player.chips) < bet) return toast("Not enough bankroll for that bet.");
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
      }, 1900);
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
      if (stackValue(player.chips) < totalBlackjackExposure() + hand.bet) return toast("Not enough bankroll to cover the split.");
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
      if (stackValue(player.chips) < totalBlackjackExposure() + hand.bet) return toast("Not enough bankroll to double down.");
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
        }, Math.max(850, animatedIndexes.length * 800 + 120));
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
      const player = currentPlayer();
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
      if (totalDelta !== 0) applyMoneyResult(player, totalDelta, "solo blackjack");
      state.gameStats.blackjack.played = Number(state.gameStats.blackjack.played || 0) + hands.length;
      state.gameStats.blackjack.wins = Number(state.gameStats.blackjack.wins || 0) + wins;
      state.gameStats.blackjack.profit = Number(state.gameStats.blackjack.profit || 0) + totalDelta;
      soloBlackjack.message = `Dealer ${dealerTotal}. ${wins} win, ${losses} loss, ${pushes} push. Net ${signedMoney(totalDelta)}.`;
      log(`${player.name} played solo blackjack: ${soloBlackjack.message}`);
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
      els.pokerRoomMessage.textContent = "Create a Texas Hold'em multiplayer room.";
      els.pokerRoomDialog.showModal();
    }

    function closePokerRoomDialog() {
      els.pokerRoomDialog.close();
    }

    async function createPokerRoom() {
      if (!currentPlayer()) return toast("Link your profile to a player before creating a room.");
      const name = els.pokerRoomName.value.trim() || "Family Hold'em";
      const smallBlind = Math.max(1, Number(els.pokerSmallBlind.value || 0));
      const bigBlind = Math.max(smallBlind * 2, Number(els.pokerBigBlind.value || 0));
      const id = `poker-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
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
        kickerRules: true,
        xpAuto: true,
        createdAt: Date.now(),
        table: createEmptyPokerTable(),
        seats: {
          [currentProfileKey()]: currentSeat("player")
        }
      };
      state.onlineRooms[id] = room;
      log(`${currentSeat().name} opened Hold'em room ${name} with ${money(smallBlind)} / ${money(bigBlind)} blinds.`);
      closePokerRoomDialog();
      activeOnlineGame = "poker";
      activeRoomId = id;
      activeView = "online";
      await saveRoom(room);
      toast(`Poker room created: ${name}`);
    }

    async function joinPokerRoom(roomId) {
      if (!currentPlayer()) return toast("Link your profile to a player before joining a room.");
      const room = await refreshRoomFromCloud(roomId);
      if (!room || room.status !== "open") return toast("That poker room is no longer open.");
      room.seats = room.seats || {};
      room.seats[currentProfileKey()] = currentSeat("player");
      room.table = room.table || createEmptyPokerTable();
      log(`${currentSeat().name} joined Hold'em room ${room.name}.`);
      activeRoomId = roomId;
      activeOnlineGame = "poker";
      activeView = "online";
      await saveRoom(room);
      toast(`Joined ${room.name}.`);
    }

    async function dealPokerHand() {
      const room = await refreshRoomFromCloud(activeRoomId);
      if (!room || room.game !== "poker") return toast("Open a poker room first.");
      if (!isRoomHost(room)) return toast("Only the host can deal Hold'em.");
      const entries = pokerSeatEntries(room);
      if (entries.length < 2) return toast("Hold'em needs at least 2 players.");
      const brokeSeat = entries.find(([, seat]) => {
        const player = playerByName(seat.playerName);
        return !player || stackValue(player.chips) < Number(room.bigBlind || 0);
      });
      if (brokeSeat) return toast(`${brokeSeat[1].name} needs at least the big blind to play.`);
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
      table.folded = {};
      table.bets = {};
      table.committed = {};
      table.acted = {};
      table.handAnimateIndexes = {};
      entries.forEach(([key]) => {
        table.hands[key] = [drawCard(table), drawCard(table)];
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
      room.table = table;
      room.pokerHandNumber = handNumber + 1;
      await saveRoom(room);
      await persistSettledRoomState(room);
      setTimeout(() => {
        const latest = state.onlineRooms[room.id];
        if (!latest?.table) return;
        latest.table.handAnimateIndexes = {};
        saveRoom(latest);
      }, 1900);
    }

    function pokerSeatEntries(room) {
      const entries = Object.entries(room.seats || {}).sort((a, b) => {
        if (a[0] === room.hostKey) return -1;
        if (b[0] === room.hostKey) return 1;
        return Number(a[1].joinedAt || 0) - Number(b[1].joinedAt || 0);
      });
      return entries;
    }

    function postPokerBlind(room, key, amount, table) {
      const player = playerByName(room.seats?.[key]?.playerName);
      if (!player || amount <= 0) return;
      commitPokerChips(player, table, key, amount);
    }

    function commitPokerChips(player, table, key, amount) {
      const value = Math.max(0, Math.round(Number(amount || 0)));
      if (!player || value <= 0) return;
      adjustPlayerBankroll(player, -value);
      player.lifetime -= value;
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
      const player = seat?.playerName ? playerByName(seat.playerName) : null;
      if (!player) return toast("Link your profile to a player before acting.");
      const owed = Math.max(0, Number(table.currentBet || 0) - Number(table.bets?.[key] || 0));
      if (kind === "check") {
        if (owed > 0) return toast(`Call ${money(owed)} or fold.`);
        table.acted[key] = true;
        table.message = `${seat.name} checks.`;
      }
      if (kind === "call") {
        if (owed <= 0) return toast("Nothing to call. Check or raise.");
        if (stackValue(player.chips) < owed) return toast(`You need ${money(owed)} to call.`);
        commitPokerChips(player, table, key, owed);
        table.acted[key] = true;
        table.message = `${seat.name} calls ${money(owed)}.`;
      }
      if (kind === "raise") {
        const raiseBy = Math.max(Number(table.minRaise || room.bigBlind || 1), Math.round(Number($("pokerRaiseAmount").value || 0)));
        const totalNeeded = owed + raiseBy;
        if (stackValue(player.chips) < totalNeeded) return toast(`You need ${money(totalNeeded)} to raise.`);
        commitPokerChips(player, table, key, totalNeeded);
        table.currentBet = table.bets[key];
        table.minRaise = raiseBy;
        table.acted = Object.fromEntries(Object.keys(room.seats || {}).map((seatKey) => [seatKey, false]));
        table.acted[key] = true;
        table.message = `${seat.name} raises to ${money(table.currentBet)}.`;
      }
      if (kind === "fold") {
        table.folded[key] = true;
        table.acted[key] = true;
        table.message = `${seat.name} folds.`;
      }
      advancePokerAfterAction(room);
      await saveRoom(room);
      await persistSettledRoomState(room);
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
      if (player) {
        adjustPlayerBankroll(player, pot);
        player.lifetime += pot;
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
      log(`${seat?.name || "Player"} won online Hold'em pot ${money(pot)} with ${handName}.`);
      resultToast(`${seat?.name || "Player"} wins the pot`, `${money(pot)} / ${handName}`, 5000);
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
      if (!player || stackValue(player.chips) < bet) return toast(`You need ${money(bet)} bankroll to ready up.`);
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
        return !player || stackValue(player.chips) < Number(seat.readyBet || 0);
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
      }, 1900);
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
      if (!player || stackValue(player.chips) < totalExposure + Number(hand.bet || table.bet || 0)) return toast("Not enough bankroll to cover the split.");
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
      if (!player || stackValue(player.chips) < totalExposure + Number(hand.bet || table.bet || 0)) return toast("Not enough bankroll to double down.");
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
        setTimeout(() => settleMultiplayerBlackjack(latest), Math.max(850, animated.length * 800 + 120));
      }, 500);
    }

    function settleMultiplayerBlackjack(room) {
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
        const player = seat?.playerName ? playerByName(seat.playerName) : null;
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
          if (seatDelta !== 0) applyMoneyResult(player, seatDelta, `online blackjack room ${room.name}`);
          if (seatDelta > 0) addXP(player.name, blackjackXP["Win Hand"], "Online Blackjack: Win Hand", {persist: false, toast: false});
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
      log(`${room.name} blackjack round settled. ${table.message}`);
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
        log: state.log,
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
      room.status = "closed";
      room.closedReason = "host";
      room.closedAt = Date.now();
      room.seats = {};
      log(`${currentSeat().name} closed ${room.name}.`);
      activeRoomId = "";
      activeOnlineGame = "";
      await saveRoom(room);
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
      if (room.seats) delete room.seats[key];
      log(`${currentSeat().name} left ${room.name}.`);
      activeRoomId = "";
      activeOnlineGame = room.game;
      await saveRoom(room);
      toast("You left the session.");
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
        activeOnlineGame = "";
        activeView = "online";
        return;
      }
      if (!room.seats?.[key]) {
        activeRoomId = "";
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
      const total = Math.max(0, stackValue(player.chips) + Number(delta || 0));
      player.chips = chipSetup(total);
    }

    function depositToBank() {
      const player = currentPlayer();
      const amount = Math.round(Number($("bankingAmount").value || 0));
      if (!player) return toast("Link your profile to a player before banking.");
      if (amount <= 0) return toast("Enter a deposit amount.");
      if (stackValue(player.chips) < amount) return toast("Not enough on-hand bankroll to deposit.");
      adjustPlayerBankroll(player, -amount);
      player.bankBalance = Number(player.bankBalance || 0) + amount;
      unlockAchievement("bank-first-deposit", player.name);
      if (player.bankBalance >= 10000) unlockAchievement("bank-safe-stack", player.name);
      $("bankingAmount").value = "";
      log(`${player.name} deposited ${money(amount)} into the bank.`);
      save();
      toast(`Deposited ${money(amount)} into safe bank.`);
    }

    function withdrawFromBank() {
      const player = currentPlayer();
      const amount = Math.round(Number($("bankingAmount").value || 0));
      if (!player) return toast("Link your profile to a player before banking.");
      if (amount <= 0) return toast("Enter a withdrawal amount.");
      if (Number(player.bankBalance || 0) < amount) return toast("Not enough safe bank balance.");
      player.bankBalance -= amount;
      adjustPlayerBankroll(player, amount);
      $("bankingAmount").value = "";
      log(`${player.name} withdrew ${money(amount)} from the bank.`);
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
      if (stackValue(from.chips) < amount) return toast("Not enough on-hand bankroll. Withdraw from bank first if needed.");
      adjustPlayerBankroll(from, -amount);
      const debtPay = Math.min(Number(to.bankDebt || 0), amount);
      to.bankDebt -= debtPay;
      state.counters.debtRepaid += debtPay;
      const remainder = amount - debtPay;
      if (remainder > 0) adjustPlayerBankroll(to, remainder);
      $("transferAmount").value = "";
      unlockAchievement("bankroll-transfer", from.name);
      if (debtPay > 0) unlockAchievement("debt-recovery", to.name);
      log(`${from.name} transferred ${money(amount)} to ${to.name}. Paid debt ${money(debtPay)}, bankroll added ${money(remainder)}.`);
      save();
      toast(`Transferred ${money(amount)}. Debt paid ${money(debtPay)}, bankroll added ${money(remainder)}.`);
    }

    function settleLocalBlackjack() {
      const player = playerByName($("localBjPlayer").value);
      if (!player) return toast("Choose a player.");
      const start = Number($("localBjStart").value || stackValue(player.chips) || 0);
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
      $("localBjPreview").textContent = `${player.name}: final ${money(endingValue)}, profit ${signedMoney(profit)}, debt paid ${money(debtPay)}, bankroll now ${money(stackValue(player.chips))}.`;
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

    function trackDailyProgress(playerName, field, amount = 1) {
      if (!playerName) return;
      const record = dailyRecord(playerName);
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
      if (record.blackjackWins < 5 || record.slotSpins < 5 || record.xpEarned < 200) return toast("Finish all daily challenge tasks first.");
      record.claimed = true;
      unlockAchievement("daily-first-clear", player.name);
      grantDailyMoney(player, 150, "daily challenge reward");
      log(`${player.name} claimed the daily challenge for $150.`);
      save();
      resultToast("Daily challenge claimed", "+$150");
    }

    function spinLuckyWheel() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to spin the wheel.");
      if (state.daily.wheel[player.name] === todayKey()) return toast("Lucky Wheel already used today.");
      $("wheelResult").textContent = "Spin once per day.";
      $("wheelSpinButton").disabled = false;
      $("luckyWheel").classList.remove("spinning");
      $("luckyWheel").style.setProperty("--wheel-rotation", "0deg");
      els.luckyWheelDialog.showModal();
    }

    function awardLuckyWheel() {
      const player = currentPlayer();
      if (!player) return toast("Link your profile to spin the wheel.");
      if (state.daily.wheel[player.name] === todayKey()) return toast("Lucky Wheel already used today.");
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
      state.daily.wheel[player.name] = todayKey();
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
      if (state.daily.scratch[player.name] === todayKey()) return toast("Daily scratch already used today.");
      const reward = weightedReward([
        {value:0, weight:45}, {value:25, weight:25}, {value:50, weight:16}, {value:100, weight:10}, {value:250, weight:4}
      ]);
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
        log(`${name} was removed from the casino.`);
        pendingDeletePlayer = "";
        if (els.confirmDialog.open) els.confirmDialog.close();
        save();
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
        state.players.push({name, xp:0, stars:0, chips:{...blank}, lifetime:0, bankDebt:0, sessionBuyIn:0, gamesPlayed:0});
        $("newPlayerName").value = "";
        log(`${name} joined the casino.`);
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
        addXP($("manualPlayer").value, Number($("manualXP").value || 0), "Manual catch-up adjustment");
      }
      if (action === "manual-level") {
        if (!isDarrenAdmin()) return toast("Only Darren can set levels and stars.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return;
        player.xp = levelXP(Number($("manualLevel").value));
        player.stars = Math.max(0, Number($("manualStars").value || 0));
        log(`${player.name} manually set to Level ${$("manualLevel").value} with ${player.stars} star(s).`);
        save();
      }
      if (action === "grant-bankroll") {
        if (!isDarrenAdmin()) return toast("Only Darren can grant bankroll.");
        const player = playerByName($("manualPlayer").value);
        const amount = Number($("grantMoneyAmount").value || 0);
        if (!player || amount === 0) return toast("Choose a player and amount.");
        adjustPlayerBankroll(player, amount);
        player.lifetime += amount;
        log(`${player.name} received ${money(amount)} bankroll grant.`);
        save();
        toast(`${player.name} bankroll updated by ${signedMoney(amount)}.`);
      }
      if (action === "reset-daily-wheel") {
        if (!isDarrenAdmin()) return toast("Only Darren can reset daily spins.");
        const player = playerByName($("manualPlayer").value);
        if (!player) return toast("Choose a player.");
        delete state.daily.wheel[player.name];
        log(`${player.name}'s Lucky Wheel spin was reset by Darren.`);
        save();
        toast(`${player.name} can spin the wheel again.`);
      }
      if (action === "settle-local-blackjack") {
        if (!isDarrenAdmin()) return toast("Only Darren can settle local blackjack.");
        settleLocalBlackjack();
      }
      if (action === "clear-linkage") {
        if (!isDarrenAdmin()) return toast("Only Darren can edit linkages.");
        const key = target?.dataset.linkKey || "";
        if (state.linkages[key]) {
          state.linkages[key].playerName = "";
          state.linkages[key].displayName = state.linkages[key].displayName || "";
          state.linkages[key].updatedAt = Date.now();
          log(`Cleared player linkage for ${state.linkages[key].email || key}.`);
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
          log(`Updated player linkage for ${state.linkages[key].email || key} to ${select.value}.`);
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
        skipNextCloudWrite = true;
        const previousRooms = state.onlineRooms || {};
        state = normalize(snap.val());
        state.onlineRooms = previousRooms;
        localStorage.setItem(localKey, JSON.stringify(state));
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
      const blackjackTab = event.target.closest("[data-blackjack-mode]");
      if (blackjackTab) {
        blackjackMode = blackjackTab.dataset.blackjackMode;
        activeOnlineGame = "blackjack";
        render();
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
    $("soloBetPreset").addEventListener("change", () => {
      if ($("soloBetPreset").value) $("soloBetAmount").value = $("soloBetPreset").value;
    });
    $("slotBetPreset").addEventListener("change", () => {
      if ($("slotBetPreset").value) $("slotBetAmount").value = $("slotBetPreset").value;
      renderSlots();
    });
    $("slotBetAmount").addEventListener("input", renderSlots);
    $("historyLimit")?.addEventListener("change", () => {
      activityHistoryLimit = Number($("historyLimit").value || 10);
      renderHistoryBoard();
    });
    setInterval(() => {
      if (activeView === "dailies") renderDailyRewards();
    }, 30000);
    fillStaticSelects();
    render();
    loadChangelog();
    initFirebase();

