// Frase del giorno: widget per Scriptable (Home e schermata di blocco)
const Q = [{"c": "Tempo", "t": "Il tempo non passa: siamo noi che passiamo attraverso di lui, un po' più leggeri ogni volta."}, {"c": "Tempo", "t": "Ogni ora è un luogo in cui non tornerai, eppure te lo porti addosso."}, {"c": "Tempo", "t": "Non è il passato che pesa, ma tutte le volte che lo abbiamo riscritto."}, {"c": "Tempo", "t": "Domani è solo oggi con un'altra luce."}, {"c": "Tempo", "t": "Aspettare non è perdere tempo, se sai cosa stai aspettando."}, {"c": "Tempo", "t": "Gli anni non ci invecchiano, ci rendono più precisi."}, {"c": "Tempo", "t": "Il presente è l'unica casa che non chiede affitto."}, {"c": "Tempo", "t": "Ricordare è un modo gentile di non lasciare andare."}, {"c": "Silenzio", "t": "Il silenzio non è assenza di parole: è il posto dove le parole si ricordano di cosa significano."}, {"c": "Silenzio", "t": "A volte il rumore più forte è tutto ciò che non hai detto."}, {"c": "Silenzio", "t": "Impara a stare in una stanza vuota senza sentirti solo."}, {"c": "Silenzio", "t": "Chi ascolta il silenzio sente cose che gli altri non sentono."}, {"c": "Silenzio", "t": "Non tutte le risposte arrivano a voce alta."}, {"c": "Silenzio", "t": "Una pausa è già una frase."}, {"c": "Silenzio", "t": "La calma non è fare meno: è sapere cosa lasciare fuori."}, {"c": "Silenzio", "t": "Il vuoto non è un difetto, è lo spazio che rende possibile qualcosa."}, {"c": "Amore", "t": "Amare è scegliere di restare curiosi di qualcuno anche quando lo conosci a memoria."}, {"c": "Amore", "t": "Ci innamoriamo delle persone, ma restiamo per il modo in cui ci fanno sentire a casa."}, {"c": "Amore", "t": "Alcune persone sono un luogo, non un periodo."}, {"c": "Amore", "t": "Il bene vero non fa rumore: si nota quando manca."}, {"c": "Amore", "t": "Non cercare qualcuno che ti completi, cerca qualcuno che ti lasci intero."}, {"c": "Amore", "t": "Dire \"ci sono\" è più difficile che dire \"ti amo\"."}, {"c": "Amore", "t": "Le mani sanno cose che la bocca non osa dire."}, {"c": "Amore", "t": "Perdere qualcuno è scoprire quanta parte di te viveva in lui."}, {"c": "Mente", "t": "I pensieri sono ospiti: puoi offrire loro un tè, ma non devi dargli le chiavi."}, {"c": "Mente", "t": "Ciò che chiami carattere è spesso solo un'abitudine con un bel nome."}, {"c": "Mente", "t": "Non credere a ogni pensiero, nemmeno a quelli che ti somigliano."}, {"c": "Mente", "t": "Ci si perde dentro la testa molto più spesso che fuori."}, {"c": "Mente", "t": "La domanda giusta vale più di cento risposte pronte."}, {"c": "Mente", "t": "Capire è accettare di non aver ancora finito di capire."}, {"c": "Mente", "t": "Sei ciò a cui torni quando nessuno guarda."}, {"c": "Mente", "t": "La mente è un giardino: ciò che non curi cresce comunque."}, {"c": "Notte", "t": "Di notte i pensieri parlano più piano, ma dicono la verità."}, {"c": "Notte", "t": "Il buio non toglie niente: ti mostra solo che le stelle c'erano già."}, {"c": "Notte", "t": "Alle tre del mattino tutto sembra più grande, tranne le soluzioni."}, {"c": "Notte", "t": "La luna non fa niente di speciale: sta lì, e tutti la guardano."}, {"c": "Notte", "t": "Certe sere servono solo a ricordarti che sei vivo."}, {"c": "Notte", "t": "Dormire è fidarsi che il mondo ci aspetti."}, {"c": "Notte", "t": "La città di notte è un grande respiro trattenuto."}, {"c": "Notte", "t": "Dopo il tramonto si è un po' più onesti."}, {"c": "Libertà", "t": "Libero non è chi fa ciò che vuole, ma chi sa perché lo vuole."}, {"c": "Libertà", "t": "Ogni \"no\" detto con calma è un pezzo di libertà."}, {"c": "Libertà", "t": "Non devi diventare qualcuno: puoi anche solo diventare più te."}, {"c": "Libertà", "t": "Cambiare strada non è fallire, è leggere meglio la mappa."}, {"c": "Libertà", "t": "Il coraggio è fare il primo passo prima di vedere la scala."}, {"c": "Libertà", "t": "Non tutto ciò che lasci indietro è una perdita."}, {"c": "Libertà", "t": "A volte ripartire è solo smettere di spiegarsi."}, {"c": "Libertà", "t": "La leggerezza non è non avere peso: è saperlo portare."}, {"c": "Tempo", "t": "Non si discende due volte nello stesso fiume.", "a": "Eraclito"}, {"c": "Tempo", "t": "Non è poco il tempo che abbiamo, ma molto quello che ne perdiamo.", "a": "Seneca"}, {"c": "Tempo", "t": "Certi giorni passano senza far rumore, e sono quelli che ci cambiano di più."}, {"c": "Tempo", "t": "Il tempo non guarisce: ci insegna a portare le cose con più grazia."}, {"c": "Silenzio", "t": "Ci sono silenzi che abbracciano e silenzi che chiudono la porta: impara a riconoscerli."}, {"c": "Silenzio", "t": "Nel silenzio anche i pensieri si tolgono le scarpe."}, {"c": "Silenzio", "t": "Non riempire ogni vuoto: certe stanze servono per respirare."}, {"c": "Silenzio", "t": "Si parla per farsi capire, si tace per capire."}, {"c": "Amore", "t": "Amare se stessi è l'inizio di un idillio che dura tutta la vita.", "a": "Oscar Wilde"}, {"c": "Amore", "t": "Certe mancanze hanno la forma esatta di una persona."}, {"c": "Amore", "t": "Il modo più bello di essere amati è sentirsi liberi accanto a qualcuno."}, {"c": "Amore", "t": "Si ama davvero quando il bene dell'altro pesa quanto il proprio."}, {"c": "Mente", "t": "L'anima prende il colore dei suoi pensieri.", "a": "Marco Aurelio"}, {"c": "Mente", "t": "Abbi pazienza verso tutto ciò che è irrisolto nel tuo cuore.", "a": "Rainer Maria Rilke"}, {"c": "Mente", "t": "Chi ha un perché abbastanza forte può sopportare quasi ogni come.", "a": "Friedrich Nietzsche"}, {"c": "Mente", "t": "Non devi vincere ogni discussione, soprattutto quelle che hai con te stesso."}, {"c": "Notte", "t": "Bisogna avere ancora un caos dentro di sé per partorire una stella danzante.", "a": "Friedrich Nietzsche"}, {"c": "Notte", "t": "Ogni finestra accesa di notte è un faro per chi non riesce a dormire."}, {"c": "Notte", "t": "La notte non è il contrario del giorno: è il suo respiro."}, {"c": "Notte", "t": "Chi veglia di notte impara a fare amicizia con i propri pensieri."}, {"c": "Libertà", "t": "Fatti non foste a viver come bruti, ma per seguir virtute e canoscenza.", "a": "Dante Alighieri"}, {"c": "Libertà", "t": "Un paese ci vuole, non fosse altro per il gusto di andarsene via.", "a": "Cesare Pavese"}, {"c": "Libertà", "t": "Un viaggio di mille miglia comincia con un passo.", "a": "Lao Tzu"}, {"c": "Libertà", "t": "Non tutte le porte chiuse sono un rifiuto: alcune sono solo indirizzi sbagliati."}, {"c": "Mare", "t": "E il naufragar m'è dolce in questo mare.", "a": "Giacomo Leopardi"}, {"c": "Mare", "t": "Nessun vento è favorevole a chi non sa dove andare.", "a": "Seneca"}, {"c": "Mare", "t": "Navigare è necessario, vivere non è necessario.", "a": "Plutarco"}, {"c": "Mare", "t": "Il mare non risponde, ma ascolta tutto."}, {"c": "Mare", "t": "Ogni onda torna indietro senza smettere di arrivare."}, {"c": "Mare", "t": "Davanti al mare i problemi si mettono in fila e imparano la loro misura."}, {"c": "Mare", "t": "Il mare insegna a restare: va e viene, ma non se ne va mai davvero."}, {"c": "Mare", "t": "Alcune persone sono come il mare d'inverno: silenziose, grandi, vere."}, {"c": "Mare", "t": "Sulla riva ci si ricorda di essere piccoli, e non è una cosa triste."}, {"c": "Mare", "t": "L'orizzonte non è un confine: è un invito."}, {"c": "Mare", "t": "Il sale sulla pelle è il modo del mare di dirti che sei stato qui."}, {"c": "Mare", "t": "A volte basta una marea per ricominciare."}, {"c": "Mare", "t": "Il mare fa ciò che i discorsi non riescono a fare: ti svuota senza chiedere niente."}, {"c": "Mare", "t": "La sabbia dimentica ogni passo, e per questo ti lascia ripartire."}, {"c": "Mare", "t": "Ci sono giorni da porto e giorni da largo: l'importante è saperli distinguere."}, {"c": "Montagna", "t": "I monti sono maestri muti e fanno discepoli silenziosi.", "a": "Johann Wolfgang Goethe"}, {"c": "Montagna", "t": "Chi striscia al suolo non rischia di cadere come chi sale sulle cime dei monti.", "a": "Søren Kierkegaard"}, {"c": "Montagna", "t": "Chi sale sui monti più alti ride di tutte le tragedie, finte e vere.", "a": "Friedrich Nietzsche"}, {"c": "Montagna", "t": "Le montagne chiamano e io devo andare.", "a": "John Muir"}, {"c": "Montagna", "t": "In montagna impari che la fretta non ti porta più in alto, solo più stanco."}, {"c": "Montagna", "t": "Si sale un passo alla volta, e la vetta è la somma dei passi che non hai mollato."}, {"c": "Montagna", "t": "Il silenzio di una valle all'alba non si spiega: si abita."}, {"c": "Montagna", "t": "La montagna non giudica: ti mostra solo quanto fiato hai."}, {"c": "Montagna", "t": "Dal basso la vetta sembra lontana; dall'alto, il bello è tutto il cammino fatto."}, {"c": "Montagna", "t": "Tra le rocce ho capito che la leggerezza si impara portando poco."}, {"c": "Montagna", "t": "Il bosco in autunno non ha fretta e non si scusa di niente."}, {"c": "Montagna", "t": "A tremila metri le parole si fanno brevi e i pensieri limpidi."}, {"c": "Montagna", "t": "Il rifugio è quel posto dove il caldo ha il sapore di averlo meritato."}, {"c": "Montagna", "t": "Scendere è metà della salita: l'umiltà si impara con le ginocchia."}, {"c": "Speciale", "t": "Kikka Zampa for pussy lovers", "s": "2026-10-28"}];

// Categorie scelte nell'app (vuoto = tutte). L'app le scrive qui quando copi lo script.
const CATS = [];
const P = Q.map((_, i) => i).filter(i => !Q[i].s && (!CATS.length || CATS.includes(Q[i].c)));
if (!P.length) Q.forEach((_, i) => { if (!Q[i].s) P.push(i); });

const d = new Date();
const day = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);

// Una frase a caso per ogni giorno: resta la stessa fino a mezzanotte, mai uguale a quella di ieri
function rnd(n) {
  let t = (n + 0x6D2B79F5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
function perm(c) {
  const a = [...Array(P.length).keys()];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd(c * 1000 + i) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(n) {
  const L = P.length, c = Math.floor(n / L), k = n % L;
  const p = perm(c);
  if (L > 1 && k < 2 && p[0] === perm(c - 1)[L - 1]) [p[0], p[1]] = [p[1], p[0]];
  return P[p[k]];
}
// Frase speciale di un giorno preciso (campo s = AAAA-MM-GG): non entra nella rotazione
const pad = n => String(n).padStart(2, "0");
const key = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const sp = Q.findIndex(x => x.s === key);
const q = sp >= 0 ? Q[sp] : Q[pick(day)];

const dark = Device.isUsingDarkAppearance();
const family = config.widgetFamily || "medium";
const w = new ListWidget();

if (family === "accessoryInline") {
  // Riga sotto la data: poche parole
  const s = q.t.length > 34 ? q.t.slice(0, 33).trimEnd() + "…" : q.t;
  w.addText(s);
} else if (family === "accessoryCircular") {
  const m = w.addText("“");
  m.font = new Font("Georgia", 40);
  m.centerAlignText();
} else if (family === "accessoryRectangular") {
  // Schermata di blocco: niente sfondo, testo piccolo e leggibile
  w.setPadding(0, 0, 0, 0);
  const c = w.addText(q.c.toUpperCase());
  c.font = Font.semiboldSystemFont(9);
  c.textOpacity = 0.7;
  const t = w.addText(q.t);
  t.font = new Font("Georgia", 12);
  t.minimumScaleFactor = 0.6;
} else {
  // Home: piccolo, medio, grande
  const size = family === "small" ? 14 : family === "large" ? 24 : 17;
  w.backgroundColor = new Color(dark ? "#1c1c1e" : "#f5f5f7");
  w.setPadding(16, 16, 16, 16);

  const label = w.addText(q.c.toUpperCase());
  label.font = Font.semiboldSystemFont(10);
  label.textColor = new Color("#ff375f");

  w.addSpacer(6);

  const t = w.addText(q.t);
  t.font = new Font("Georgia", size);
  t.textColor = new Color(dark ? "#f5f5f7" : "#1c1c1e");
  t.minimumScaleFactor = 0.5;

  if (q.a) {
    w.addSpacer(6);
    const a = w.addText("— " + q.a);
    a.font = Font.italicSystemFont(11);
    a.textColor = new Color("#ff375f");
  }

  w.addSpacer();
}

w.refreshAfterDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 5);

if (config.runsInWidget) {
  Script.setWidget(w);
} else {
  await w.presentMedium();
}
Script.complete();
