// Frase del giorno: widget per Scriptable
const Q = [{"c": "Tempo", "t": "Il tempo non passa: siamo noi che passiamo attraverso di lui, un po' più leggeri ogni volta."}, {"c": "Tempo", "t": "Ogni ora è un luogo in cui non tornerai, eppure te lo porti addosso."}, {"c": "Tempo", "t": "Non è il passato che pesa, ma tutte le volte che lo abbiamo riscritto."}, {"c": "Tempo", "t": "Domani è solo oggi con un'altra luce."}, {"c": "Tempo", "t": "Aspettare non è perdere tempo, se sai cosa stai aspettando."}, {"c": "Tempo", "t": "Gli anni non ci invecchiano, ci rendono più precisi."}, {"c": "Tempo", "t": "Il presente è l'unica casa che non chiede affitto."}, {"c": "Tempo", "t": "Ricordare è un modo gentile di non lasciare andare."}, {"c": "Silenzio", "t": "Il silenzio non è assenza di parole: è il posto dove le parole si ricordano di cosa significano."}, {"c": "Silenzio", "t": "A volte il rumore più forte è tutto ciò che non hai detto."}, {"c": "Silenzio", "t": "Impara a stare in una stanza vuota senza sentirti solo."}, {"c": "Silenzio", "t": "Chi ascolta il silenzio sente cose che gli altri non sentono."}, {"c": "Silenzio", "t": "Non tutte le risposte arrivano a voce alta."}, {"c": "Silenzio", "t": "Una pausa è già una frase."}, {"c": "Silenzio", "t": "La calma non è fare meno: è sapere cosa lasciare fuori."}, {"c": "Silenzio", "t": "Il vuoto non è un difetto, è lo spazio che rende possibile qualcosa."}, {"c": "Amore", "t": "Amare è scegliere di restare curiosi di qualcuno anche quando lo conosci a memoria."}, {"c": "Amore", "t": "Ci innamoriamo delle persone, ma restiamo per il modo in cui ci fanno sentire a casa."}, {"c": "Amore", "t": "Alcune persone sono un luogo, non un periodo."}, {"c": "Amore", "t": "Il bene vero non fa rumore: si nota quando manca."}, {"c": "Amore", "t": "Non cercare qualcuno che ti completi, cerca qualcuno che ti lasci intero."}, {"c": "Amore", "t": "Dire \"ci sono\" è più difficile che dire \"ti amo\"."}, {"c": "Amore", "t": "Le mani sanno cose che la bocca non osa dire."}, {"c": "Amore", "t": "Perdere qualcuno è scoprire quanta parte di te viveva in lui."}, {"c": "Mente", "t": "I pensieri sono ospiti: puoi offrire loro un tè, ma non devi dargli le chiavi."}, {"c": "Mente", "t": "Ciò che chiami carattere è spesso solo un'abitudine con un bel nome."}, {"c": "Mente", "t": "Non credere a ogni pensiero, nemmeno a quelli che ti somigliano."}, {"c": "Mente", "t": "Ci si perde dentro la testa molto più spesso che fuori."}, {"c": "Mente", "t": "La domanda giusta vale più di cento risposte pronte."}, {"c": "Mente", "t": "Capire è accettare di non aver ancora finito di capire."}, {"c": "Mente", "t": "Sei ciò a cui torni quando nessuno guarda."}, {"c": "Mente", "t": "La mente è un giardino: ciò che non curi cresce comunque."}, {"c": "Notte", "t": "Di notte i pensieri parlano più piano, ma dicono la verità."}, {"c": "Notte", "t": "Il buio non toglie niente: ti mostra solo che le stelle c'erano già."}, {"c": "Notte", "t": "Alle tre del mattino tutto sembra più grande, tranne le soluzioni."}, {"c": "Notte", "t": "La luna non fa niente di speciale: sta lì, e tutti la guardano."}, {"c": "Notte", "t": "Certe sere servono solo a ricordarti che sei vivo."}, {"c": "Notte", "t": "Dormire è fidarsi che il mondo ci aspetti."}, {"c": "Notte", "t": "La città di notte è un grande respiro trattenuto."}, {"c": "Notte", "t": "Dopo il tramonto si è un po' più onesti."}, {"c": "Libertà", "t": "Libero non è chi fa ciò che vuole, ma chi sa perché lo vuole."}, {"c": "Libertà", "t": "Ogni \"no\" detto con calma è un pezzo di libertà."}, {"c": "Libertà", "t": "Non devi diventare qualcuno: puoi anche solo diventare più te."}, {"c": "Libertà", "t": "Cambiare strada non è fallire, è leggere meglio la mappa."}, {"c": "Libertà", "t": "Il coraggio è fare il primo passo prima di vedere la scala."}, {"c": "Libertà", "t": "Non tutto ciò che lasci indietro è una perdita."}, {"c": "Libertà", "t": "A volte ripartire è solo smettere di spiegarsi."}, {"c": "Libertà", "t": "La leggerezza non è non avere peso: è saperlo portare."}];

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
  const a = [...Array(Q.length).keys()];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd(c * 1000 + i) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(n) {
  const L = Q.length, c = Math.floor(n / L), k = n % L;
  const p = perm(c);
  if (k < 2 && p[0] === perm(c - 1)[L - 1]) [p[0], p[1]] = [p[1], p[0]];
  return p[k];
}
const q = Q[pick(day)];

const dark = Device.isUsingDarkAppearance();
const family = config.widgetFamily || "medium";
const size = family === "small" ? 14 : family === "large" ? 24 : 17;

const w = new ListWidget();
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

w.addSpacer();

w.refreshAfterDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 5);

if (config.runsInWidget) {
  Script.setWidget(w);
} else {
  await w.presentMedium();
}
Script.complete();
