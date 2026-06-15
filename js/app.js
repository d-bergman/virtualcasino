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

    const defaultState = normalize(decodeSave(attachedSaveText));
    let state = normalize(JSON.parse(localStorage.getItem(localKey) || "null") || structuredClone(defaultState));
    let activeView = "overview";
    let activeGame = "poker";
    let skipNextCloudWrite = false;
    let cloudWriteTimer = null;
    let localTestSignedIn = false;

    const firebaseState = {
      ready: false,
      user: null,
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
      toast: $("toast")
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
      data.achievements = Array.isArray(data.achievements) ? data.achievements.slice(0, 30) : [];
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

    function log(message) {
      state.log.unshift(message);
      state.log = state.log.slice(0, 30);
    }

    function achievement(message, xp = 0) {
      state.achievements.unshift({message, xp, at: Date.now()});
      state.achievements = state.achievements.slice(0, 30);
    }

    function save({cloud = true} = {}) {
      state.updatedAt = Date.now();
      state = normalize(state);
      localStorage.setItem(localKey, JSON.stringify(state));
      render();
      if (cloud) queueCloudWrite();
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
      ["borrowPlayer","manualPlayer","buyinPlayer","chipPlayer","handPlayer","blackjackPlayer","unoPlayer","blackjackMoneyPlayer"].forEach(fillSelect);

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
      $("debtBoard").innerHTML = ranked.map((p) => renderListRow("Bank", p.name, `Debt ${money(p.bankDebt)}`, `Lifetime ${signedMoney(p.lifetime)}`)).join("");
      $("bankStatus").innerHTML = [
        renderListRow("Loans", "Total Loans Outstanding", "", money(state.players.reduce((sum, p) => sum + p.bankDebt, 0))),
        renderListRow("Debt", "Players In Debt", "", state.players.filter((p) => p.bankDebt > 0).length)
      ].join("");
      $("recentActivity").innerHTML = (state.log.length ? state.log : ["No activity yet."]).slice(0, 5).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      $("historyBoard").innerHTML = (state.log.length ? state.log : ["No session history yet."]).map((item, index) => renderListRow(index + 1, item, "", "")).join("");
      const achievements = state.achievements.length ? state.achievements : [
        {message:"Pocket Kings - Win with Pocket Kings", xp:25},
        {message:"Blackjack - Get a Natural 21", xp:50},
        {message:"UNO Champion - Win 5 UNO games", xp:30}
      ];
      $("recentAchievements").innerHTML = achievements.slice(0, 3).map((item) => renderListRow("Star", item.message, item.at ? timeAgo(item.at) : "Ready", item.xp ? `+${item.xp} XP` : "")).join("");
      $("achievementBoard").innerHTML = achievements.map((item) => renderListRow("Star", item.message, item.at ? new Date(item.at).toLocaleString() : "Starter achievement", item.xp ? `+${item.xp} XP` : "")).join("");
      $("gameGrid").innerHTML = ["poker","blackjack","uno"].map(renderGameCard).join("");
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
            <div class="chip-text" title="${escapeAttr(chipText(player.chips))}">Chips: ${escapeHtml(chipText(player.chips))}</div>
          </div>
        </article>`;
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
      return `<div class="list-row"><span class="medal">${escapeHtml(String(icon))}</span><div><strong>${escapeHtml(String(title))}</strong><div style="color:var(--muted);font-size:.82rem;">${escapeHtml(String(sub || ""))}</div></div><strong>${escapeHtml(String(value || ""))}</strong></div>`;
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

    function addXP(name, amount, reason) {
      const player = playerByName(name);
      if (!player) return;
      player.xp += Number(amount);
      while (player.xp >= 7600) {
        player.xp -= 7600;
        player.stars += 1;
        achievement(`${player.name} gained a Prestige star`, 100);
      }
      log(`${player.name} +${amount} XP - ${reason}`);
      save();
    }

    function applyMoneyResult(player, amount, reason) {
      const value = Number(amount || 0);
      if (value > 0) {
        const debtPay = Math.min(player.bankDebt, value);
        player.bankDebt -= debtPay;
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

    function handleAction(action) {
      if (action === "borrow") {
        const player = playerByName($("borrowPlayer").value);
        const amount = Number($("borrowAmount").value || 0);
        if (!player || amount <= 0) return toast("Enter a loan amount.");
        const chips = chipSetup(amount);
        player.bankDebt += amount;
        player.chips = addChips(player.chips, chips);
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
        achievement(`${$("handPlayer").value} won a poker tournament`, 100);
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
          signOut: authModule.signOut,
          getDatabase: databaseModule.getDatabase,
          dbRef: databaseModule.ref,
          get: databaseModule.get,
          set: databaseModule.set,
          update: databaseModule.update,
          onValue: databaseModule.onValue,
          onDisconnect: databaseModule.onDisconnect,
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
      const {dbRef, update, serverTimestamp, onDisconnect} = firebaseState.modules;
      const profileRef = dbRef(firebaseState.db, `${databasePath}/users/${user.uid}`);
      await update(profileRef, {
        email: user.email || "",
        displayName: user.displayName || user.email?.split("@")[0] || "Player",
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

    async function signOutUser() {
      if (firebaseState.user && firebaseState.ready) {
        await firebaseState.modules.update(firebaseState.modules.dbRef(firebaseState.db, `${databasePath}/users/${firebaseState.user.uid}`), {
          online: false,
          lastSeenAt: firebaseState.modules.serverTimestamp()
        }).catch(() => {});
        await firebaseState.modules.signOut(firebaseState.auth);
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
      if (actionButton) handleAction(actionButton.dataset.action);
      const viewButton = event.target.closest("[data-view]");
      if (viewButton) setView(viewButton.dataset.view);
      const gameButton = event.target.closest("[data-game]");
      if (gameButton) {
        activeGame = gameButton.dataset.game;
        if (!gameButton.closest(".game-tabs")) activeView = "sessions";
        render();
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    });

    els.signInForm.addEventListener("submit", (event) => {
      event.preventDefault();
      signIn(els.signInEmail.value.trim(), els.signInPassword.value);
    });
    $("signOutMobile").addEventListener("click", signOutUser);

    fillStaticSelects();
    render();
    initFirebase();

