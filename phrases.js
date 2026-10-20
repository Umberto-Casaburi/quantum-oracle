// Predictions. `id` is stable and can be targeted by the URL bias (see README),
// `c` is the category. Add new entries at the end of their category with a new id.
window.PHRASES = [
  // ---------- Amore / Love ----------
  { id: "love-01", c: "love", it: "Presto qualcuno ti farà battere il cuore più forte di una canzone ascoltata al primo appuntamento.", en: "Soon someone will make your heart beat faster than a song heard on a first date." },
  { id: "love-02", c: "love", it: "Nei prossimi mesi troverai una persona in perfetta sintonia con te: quello che senti tu, lo sentirà anche lei.", en: "In the coming months you'll find someone perfectly in tune with you: whatever you feel, they'll feel too." },
  { id: "love-03", c: "love", it: "Un messaggio che aspetti da tempo arriverà proprio quando smetterai di controllare il telefono.", en: "A message you've been waiting for will arrive the moment you stop checking your phone." },
  { id: "love-04", c: "love", it: "Il tuo prossimo appuntamento andrà molto meglio di come te lo immagini.", en: "Your next date will go much better than you imagine." },
  { id: "love-05", c: "love", it: "Qualcuno sta pensando a te in questo preciso momento. Presto ne avrai la prova.", en: "Someone is thinking about you right now. Soon you'll have proof." },
  { id: "love-06", c: "love", it: "Una vecchia fiamma tornerà a farsi viva, ma tu avrai già voltato pagina.", en: "An old flame will reappear, but you'll have already moved on." },
  { id: "love-07", c: "love", it: "Entro la fine dell'anno qualcuno ti farà una dichiarazione inaspettata.", en: "Before the year is out, someone will surprise you with a confession." },
  { id: "love-08", c: "love", it: "La tua storia d'amore avrà più colpi di scena di una serie TV.", en: "Your love story will have more plot twists than a TV series." },
  { id: "love-09", c: "love", it: "Un incontro casuale a una festa si rivelerà tutt'altro che casuale.", en: "A random encounter at a party will turn out to be anything but random." },
  { id: "love-10", c: "love", it: "Riceverai un complimento sincero dalla persona da cui meno te lo aspetti.", en: "You'll get a sincere compliment from the person you least expect." },
  { id: "love-11", c: "love", it: "Il prossimo anno festeggerai un anniversario che oggi nemmeno immagini.", en: "Next year you'll celebrate an anniversary you can't even imagine today." },
  { id: "love-12", c: "love", it: "Due caratteri che sembrano incompatibili troveranno un equilibrio: in amore, il compromesso ti porterà lontano.", en: "Two personalities that seem incompatible will find a balance: in love, compromise will take you far." },

  // ---------- Lavoro / Work ----------
  { id: "work-01", c: "work", it: "Entro un anno riceverai una proposta di lavoro che cambierà la tua traiettoria.", en: "Within a year you'll get a job offer that changes your trajectory." },
  { id: "work-02", c: "work", it: "Il tuo prossimo colloquio andrà meglio di quanto tu possa immaginare.", en: "Your next interview will go better than you can imagine." },
  { id: "work-03", c: "work", it: "Presto qualcuno ti affiderà un progetto importante. E dirai di sì.", en: "Soon someone will trust you with an important project. And you'll say yes." },
  { id: "work-04", c: "work", it: "Una tua idea, oggi ancora nel cassetto, diventerà realtà nei prossimi mesi.", en: "An idea of yours, still tucked away in a drawer today, will become real in the coming months." },
  { id: "work-05", c: "work", it: "Arriverà un aumento. La probabilità sale ogni volta che lo chiedi.", en: "A raise is coming. The probability goes up every time you ask." },
  { id: "work-06", c: "work", it: "Un giorno lavorerai da un posto con vista sul mare.", en: "One day you'll work from a place with a sea view." },
  { id: "work-07", c: "work", it: "Il lunedì smetterà di farti paura: troverai un lavoro che ti piace davvero.", en: "Mondays will stop scaring you: you'll find a job you truly love." },
  { id: "work-08", c: "work", it: "Un collega diventerà un amico per la vita.", en: "A coworker will become a lifelong friend." },
  { id: "work-09", c: "work", it: "La tua prossima riunione sarà breve. È la predizione meno probabile, ma non impossibile.", en: "Your next meeting will be short. It's the least likely prediction, but not impossible." },
  { id: "work-10", c: "work", it: "Presto qualcuno ti chiederà un consiglio professionale: sarà l'inizio di qualcosa di grande.", en: "Soon someone will ask for your professional advice: it'll be the start of something big." },
  { id: "work-11", c: "work", it: "Avvierai un progetto tutto tuo, e all'inizio sembrerà un caos. Poi tutto andrà al suo posto.", en: "You'll start a project of your own, and at first it'll look like chaos. Then everything will fall into place." },
  { id: "work-12", c: "work", it: "Il tuo nome comparirà in un posto dove non ti aspetteresti mai di vederlo.", en: "Your name will appear somewhere you'd never expect to see it." },

  // ---------- Studio / Study ----------
  { id: "study-01", c: "study", it: "Il prossimo esame che affronterai andrà meglio del previsto.", en: "The next exam you take will go better than expected." },
  { id: "study-02", c: "study", it: "Un giorno sarai tu a festeggiare una laurea, con una bomboniera tutta tua.", en: "One day you'll be the one celebrating a graduation, with a party favor all your own." },
  { id: "study-03", c: "study", it: "Imparerai una nuova lingua prima di quanto pensi.", en: "You'll learn a new language sooner than you think." },
  { id: "study-04", c: "study", it: "Presto capirai finalmente una cosa che ti sembrava impossibile.", en: "Soon you'll finally understand something that seemed impossible." },
  { id: "study-05", c: "study", it: "Un corso che inizierai per curiosità cambierà la tua carriera.", en: "A course you start out of curiosity will change your career." },
  { id: "study-06", c: "study", it: "Il tuo relatore, presente o futuro, ti risponderà entro 24 ore. I miracoli esistono.", en: "Your advisor, current or future, will reply within 24 hours. Miracles do happen." },
  { id: "study-07", c: "study", it: "Insegnerai qualcosa a qualcuno e scoprirai di saperla meglio di quanto credevi.", en: "You'll teach something to someone and discover you know it better than you thought." },
  { id: "study-08", c: "study", it: "Un libro che leggerai quest'anno ti resterà dentro per sempre.", en: "A book you'll read this year will stay with you forever." },
  { id: "study-09", c: "study", it: "Supererai l'esame, o la sfida, che rimandi da troppo tempo.", en: "You'll pass the exam, or the challenge, you've been putting off for too long." },
  { id: "study-10", c: "study", it: "Presto ti iscriverai a qualcosa di nuovo: un corso, un master, una scuola di ballo. Darai la colpa a questo oracolo.", en: "Soon you'll sign up for something new: a course, a master's, dance classes. You'll blame this oracle." },
  { id: "study-11", c: "study", it: "Nei prossimi giorni avrai un'intuizione geniale. Probabilmente sotto la doccia.", en: "In the next few days you'll have a brilliant insight. Probably in the shower." },
  { id: "study-12", c: "study", it: "Un giorno qualcuno citerà un tuo lavoro.", en: "One day someone will cite your work." },

  // ---------- Viaggi / Travel ----------
  { id: "travel-01", c: "travel", it: "Entro il prossimo anno farai il viaggio che rimandi da troppo tempo.", en: "By next year you'll take the trip you've been postponing for too long." },
  { id: "travel-02", c: "travel", it: "Presto ti ritroverai dall'altra parte del mondo, quasi senza accorgertene.", en: "Soon you'll find yourself on the other side of the world, almost without noticing." },
  { id: "travel-03", c: "travel", it: "Un volo in ritardo ti farà incontrare una persona importante.", en: "A delayed flight will make you meet someone important." },
  { id: "travel-04", c: "travel", it: "Il tuo prossimo viaggio sarà improvvisato, e sarà il migliore di sempre.", en: "Your next trip will be improvised, and it'll be the best ever." },
  { id: "travel-05", c: "travel", it: "Vedrai l'aurora boreale. L'esito è certo, la data no.", en: "You'll see the northern lights. The outcome is certain, the date isn't." },
  { id: "travel-06", c: "travel", it: "Un weekend fuori porta si trasformerà in un ricordo indimenticabile.", en: "A weekend getaway will turn into an unforgettable memory." },
  { id: "travel-07", c: "travel", it: "Vivrai per un periodo in un'altra città, e ti piacerà più del previsto.", en: "You'll live in another city for a while, and you'll like it more than expected." },
  { id: "travel-08", c: "travel", it: "Perderai una coincidenza, ma troverai una strada migliore.", en: "You'll miss a connection, but you'll find a better path." },
  { id: "travel-09", c: "travel", it: "Assaggerai un piatto in un paese lontano e ne parlerai per anni.", en: "You'll taste a dish in a faraway country and talk about it for years." },
  { id: "travel-10", c: "travel", it: "La tua valigia arriverà a destinazione. Insieme a te. Stavolta.", en: "Your suitcase will reach your destination. Together with you. This time." },
  { id: "travel-11", c: "travel", it: "Un viaggio con gli amici diventerà una leggenda da raccontare per anni.", en: "A trip with friends will become a legend you'll retell for years." },
  { id: "travel-12", c: "travel", it: "Presto riceverai l'invito a un matrimonio in un posto bellissimo.", en: "Soon you'll be invited to a wedding in a beautiful place." },

  // ---------- Fortuna / Luck ----------
  { id: "luck-01", c: "luck", it: "Nei prossimi giorni troverai dei soldi in una tasca che non controllavi da mesi.", en: "In the next few days you'll find money in a pocket you haven't checked in months." },
  { id: "luck-02", c: "luck", it: "La fortuna ti gira intorno da giorni: domani si fermerà proprio su di te.", en: "Luck has been circling around you for days: tomorrow it'll land right on you." },
  { id: "luck-03", c: "luck", it: "Vincerai qualcosa. Forse non la lotteria, ma qualcosa sì.", en: "You'll win something. Maybe not the lottery, but something." },
  { id: "luck-04", c: "luck", it: "Il prossimo semaforo sarà verde. E anche quello dopo.", en: "The next traffic light will be green. And the one after that." },
  { id: "luck-05", c: "luck", it: "Una porta che sembrava chiusa si aprirà all'improvviso.", en: "A door that seemed closed will suddenly open." },
  { id: "luck-06", c: "luck", it: "Questa settimana tutto andrà come previsto. Per una volta.", en: "This week everything will go according to plan. For once." },
  { id: "luck-07", c: "luck", it: "Troverai parcheggio al primo colpo proprio quando ne avrai più bisogno.", en: "You'll find a parking spot on the first try exactly when you need it most." },
  { id: "luck-08", c: "luck", it: "Una piccola coincidenza ti porterà una grande occasione.", en: "A small coincidence will bring you a big opportunity." },
  { id: "luck-09", c: "luck", it: "Il prossimo anno sarà il tuo anno: le probabilità sono tutte dalla tua parte.", en: "Next year will be your year: the odds are all on your side." },
  { id: "luck-10", c: "luck", it: "Riceverai una buona notizia prima della fine del mese.", en: "You'll get good news before the end of the month." },
  { id: "luck-11", c: "luck", it: "Qualcosa che hai perso tornerà da te.", en: "Something you lost will come back to you." },
  { id: "luck-12", c: "luck", it: "Presto sarai nel posto giusto al momento giusto. Non distrarti.", en: "Soon you'll be in the right place at the right time. Be ready." },

  // ---------- Amicizia / Friends ----------
  { id: "friends-01", c: "friends", it: "Ritroverai un'amicizia che credevi persa.", en: "You'll reconnect with a friendship you thought was lost." },
  { id: "friends-02", c: "friends", it: "Entro cinque minuti brinderai alla salute del Dott. Casaburi.", en: "Within five minutes you'll raise a glass to Dr. Casaburi." },
  { id: "friends-03", c: "friends", it: "Presto organizzerai una cena che finirà molto più tardi del previsto.", en: "Soon you'll host a dinner that ends much later than planned." },
  { id: "friends-04", c: "friends", it: "Una persona che hai appena conosciuto diventerà importante nella tua vita.", en: "Someone you've just met will become important in your life." },
  { id: "friends-05", c: "friends", it: "Un vecchio amico ti chiamerà proprio quando ne avrai bisogno.", en: "An old friend will call you right when you need it." },
  { id: "friends-06", c: "friends", it: "Qualcuno ti chiederà di fare da testimone al suo matrimonio.", en: "Someone will ask you to stand by their side at their wedding." },
  { id: "friends-07", c: "friends", it: "Il tuo gruppo di amici resterà unito anche a migliaia di chilometri di distanza.", en: "Your group of friends will stay close even thousands of kilometers apart." },
  { id: "friends-08", c: "friends", it: "Presto riderai così tanto da non riuscire a respirare.", en: "Soon you'll laugh so hard you can't breathe." },
  { id: "friends-09", c: "friends", it: "Qualcuno ti ringrazierà per un favore che hai già dimenticato.", en: "Someone will thank you for a favor you've already forgotten." },
  { id: "friends-10", c: "friends", it: "Questa festa sarà l'inizio di una nuova amicizia.", en: "This party will be the start of a new friendship." },
  { id: "friends-11", c: "friends", it: "Un gruppo WhatsApp nato stasera durerà più di molte relazioni.", en: "A group chat born tonight will outlast many relationships." },
  { id: "friends-12", c: "friends", it: "Tra dieci anni ricorderai questa giornata con le stesse persone che hai accanto adesso.", en: "Ten years from now you'll remember this day with the same people who are next to you now." },

  // ---------- Tecnologia / Tech ----------
  { id: "tech-01", c: "tech", it: "Presto un'AI risolverà un tuo problema in cinque secondi. Il sesto lo passerai a chiederti come facevi prima.", en: "Soon an AI will solve one of your problems in five seconds. You'll spend the sixth wondering how you managed before." },
  { id: "tech-02", c: "tech", it: "Il tuo prossimo codice funzionerà al primo tentativo. Goditi il momento: è raro.", en: "Your next piece of code will work on the first try. Enjoy the moment: it's rare." },
  { id: "tech-03", c: "tech", it: "Entro dieci anni la tecnologia farà per te cose che oggi sembrano fantascienza.", en: "Within ten years technology will do things for you that seem like science fiction today." },
  { id: "tech-04", c: "tech", it: "Oggi la batteria del telefono durerà fino a sera. È dalla tua parte.", en: "Today your phone battery will last until evening. It's on your side." },
  { id: "tech-05", c: "tech", it: "Un'AI ti suggerirà qualcosa di perfetto, ma l'idea migliore resterà la tua.", en: "An AI will suggest something perfect, but the best idea will still be yours." },
  { id: "tech-06", c: "tech", it: "Presto risolverai un bug che ti tormenta da giorni. Era un punto e virgola.", en: "Soon you'll fix a bug that's been haunting you for days. It was a semicolon." },
  { id: "tech-07", c: "tech", it: "Il Wi-Fi funzionerà alla perfezione proprio quando ne avrai più bisogno.", en: "The Wi-Fi will work perfectly exactly when you need it most." },
  { id: "tech-08", c: "tech", it: "Un giorno racconterai ai tuoi nipoti che una volta i telefoni avevano i tasti.", en: "One day you'll tell your grandkids that phones used to have buttons." },
  { id: "tech-09", c: "tech", it: "Farai il backup di qualcosa di importante. Un attimo prima che serva.", en: "You'll back up something important. Just before you need it." },
  { id: "tech-10", c: "tech", it: "Un tuo post diventerà virale. Non sarà quello che ti aspetti.", en: "One of your posts will go viral. It won't be the one you expect." },
  { id: "tech-11", c: "tech", it: "La prossima password che inventerai sarà impossibile da indovinare. Anche per te.", en: "The next password you create will be impossible to guess. Even for you." },
  { id: "tech-12", c: "tech", it: "Nei prossimi anni la tecnologia ti aprirà una strada che oggi non esiste ancora.", en: "In the coming years technology will open a path for you that doesn't exist yet." },

  // ---------- Vita / Life ----------
  { id: "life-01", c: "life", it: "Domani ti sveglierai con più energia del solito.", en: "Tomorrow you'll wake up with more energy than usual." },
  { id: "life-02", c: "life", it: "Presto prenderai una decisione importante, e sarà quella giusta.", en: "Soon you'll make an important decision, and it'll be the right one." },
  { id: "life-03", c: "life", it: "Questo weekend ti concederai la pausa che meriti da tempo.", en: "This weekend you'll give yourself the break you've long deserved." },
  { id: "life-04", c: "life", it: "Nei prossimi mesi inizierai un'abitudine che ti cambierà in meglio.", en: "In the coming months you'll start a habit that changes you for the better." },
  { id: "life-05", c: "life", it: "La settimana prossima dirai di sì a qualcosa di nuovo, e non te ne pentirai.", en: "Next week you'll say yes to something new, and you won't regret it." },
  { id: "life-06", c: "life", it: "Presto avrai una casa che sentirai davvero tua.", en: "Soon you'll have a home that truly feels like yours." },
  { id: "life-07", c: "life", it: "Un sogno che avevi messo da parte tornerà a bussare. Stavolta aprirai la porta.", en: "A dream you set aside will come knocking again. This time you'll open the door." },
  { id: "life-08", c: "life", it: "Il tuo futuro ha tutte le carte in regola per essere felice.", en: "Your future has everything it needs to be a happy one." },
  { id: "life-09", c: "life", it: "Entro un anno guarderai indietro e sorriderai per quanta strada hai fatto.", en: "Within a year you'll look back and smile at how far you've come." },
  { id: "life-10", c: "life", it: "Presto qualcuno cucinerà per te il tuo piatto preferito.", en: "Soon someone will cook your favorite dish for you." },
  { id: "life-11", c: "life", it: "Troverai il coraggio di fare quella cosa che rimandi da troppo tempo.", en: "You'll find the courage to do that thing you've been putting off for too long." },
  { id: "life-12", c: "life", it: "Stanotte dormirai benissimo. Te lo meriti.", en: "Tonight you'll sleep wonderfully. You deserve it." },

  // ---------- Personali / Personal ----------
  // `p` is the group unlocked by ?bias=<group>. These phrases are never drawn without it.

  // Alfredo
  { id: "alfredo-01", p: "alfredo", c: "work", it: "Un giorno ti ritroverai pelato, ma almeno avrai una farmacia di proprietà.", en: "One day you'll be bald, but at least you'll own a pharmacy." },
  { id: "alfredo-02", p: "alfredo", c: "work", it: "La tua farmacia fallirà: in vetrina c'erano solo integratori anticaduta, e non funzionavano nemmeno su di te.", en: "Your pharmacy will go bankrupt: the window was full of hair-loss supplements, and they didn't even work on you." },
  { id: "alfredo-03", p: "alfredo", c: "work", it: "Tra dieci anni sarai il farmacista più amato del quartiere. Soprattutto dalle signore over 80.", en: "Ten years from now you'll be the most beloved pharmacist in the neighborhood. Especially among the ladies over 80." },
  { id: "alfredo-04", p: "alfredo", c: "work", it: "Passerai la vita a decifrare ricette scritte a mano dai medici. Ci riuscirai nel 40% dei casi.", en: "You'll spend your life deciphering doctors' handwritten prescriptions. You'll succeed 40% of the time." },
  { id: "alfredo-05", p: "alfredo", c: "work", it: "Presto un cliente ti chiederà \"qualcosa per tutto\". E tu glielo darai.", en: "Soon a customer will ask you for \"something for everything\". And you'll give it to them." },
  { id: "alfredo-06", p: "alfredo", c: "work", it: "La croce verde della tua farmacia sarà l'unica luce accesa la notte di Natale. Turno di guardia, ovviamente.", en: "Your pharmacy's green cross will be the only light on Christmas night. On-call shift, obviously." },
  { id: "alfredo-07", p: "alfredo", c: "work", it: "Diventerai ricco vendendo creme antietà. Il tuo cliente più fedele sarai tu.", en: "You'll get rich selling anti-aging creams. Your most loyal customer will be you." },
  { id: "alfredo-08", p: "alfredo", c: "friends", it: "Il Dott. Casaburi ti chiederà lo sconto in farmacia per tutta la vita. Concediglielo.", en: "Dr. Casaburi will ask you for a pharmacy discount for life. Grant it." },

  // Giada, ?bias=amore_mio (drawn more often: see GROUP_SHARE in app.js)
  { id: "amore_mio-01", p: "amore_mio", c: "love", it: "Ti amo ∞^∞", en: "I love you ∞^∞" },
  { id: "amore_mio-02", p: "amore_mio", c: "love", it: "Sei la mia vita.", en: "You are my life." },
  { id: "amore_mio-03", p: "amore_mio", c: "love", it: "13/01/2025 ❤️", en: "13/01/2025 ❤️" },
  { id: "amore_mio-04", p: "amore_mio", c: "love", it: "Quand'è che ci sposiamo?", en: "So when are we getting married?" },
  { id: "amore_mio-05", p: "amore_mio", c: "love", it: "Che c'è un filo rosso che ci unisce\nChe non si vede, si capisce", en: "Che c'è un filo rosso che ci unisce\nChe non si vede, si capisce" },
  { id: "amore_mio-06", p: "amore_mio", c: "love", it: "Sei la maga Circe 🧙‍♀️ che mi ha stregato il cuore.", en: "You're the sorceress Circe 🧙‍♀️ who bewitched my heart." },
  { id: "amore_mio-07", p: "amore_mio", c: "love", it: "Con te anche il lunedì sembra domenica.", en: "With you, even Monday feels like Sunday." },
  { id: "amore_mio-08", p: "amore_mio", c: "love", it: "Sei il mio posto preferito nel mondo.", en: "You're my favorite place in the world." },
  { id: "amore_mio-09", p: "amore_mio", c: "love", it: "Ti sceglierei ancora, ogni giorno, in ogni vita.", en: "I'd choose you again, every day, in every life." },
  { id: "amore_mio-10", p: "amore_mio", c: "love", it: "Prossima predizione: un viaggio, noi due, nessuna sveglia.", en: "Next prediction: a trip, just the two of us, no alarms." },
  { id: "amore_mio-11", p: "amore_mio", c: "love", it: "Ogni volta che ridi, il mondo fa un po' meno rumore.", en: "Every time you laugh, the world gets a little quieter." },
  { id: "amore_mio-12", p: "amore_mio", c: "love", it: "Grazie di esserci stata, sempre. Soprattutto nei giorni difficili.", en: "Thank you for always being there. Especially on the hard days." },

  // Giuseppe
  { id: "giuseppe-01", p: "giuseppe", c: "work", it: "Prima o poi qualcuno capirà davvero qual è il tuo mestiere. Noi ancora no.", en: "Sooner or later someone will truly understand what your job is. We still don't." },
  { id: "giuseppe-02", p: "giuseppe", c: "work", it: "Ormai anche le mura di casa tua parlano di health care.", en: "By now even the walls of your house talk about health care." },
  { id: "giuseppe-03", p: "giuseppe", c: "life", it: "L'oracolo dice che puoi anche lasciar entrare in casa i tuoi amici con le scarpe, invece di far indossare sempre le pattine.", en: "The oracle says you can let your friends in with their shoes on, instead of always making them wear floor slippers." },
  { id: "giuseppe-04", p: "giuseppe", c: "love", it: "Prima o poi una tua tecnica d'approccio funzionerà. Statisticamente. Forse.", en: "Sooner or later one of your pickup techniques will work. Statistically. Maybe." },
  { id: "giuseppe-05", p: "giuseppe", c: "love", it: "Il cappello da cowboy attirerà molti sguardi. Non tutti per i motivi che speri.", en: "The cowboy hat will draw a lot of looks. Not all for the reasons you hope." },
  { id: "giuseppe-06", p: "giuseppe", c: "friends", it: "Please no!", en: "Please no!" },
  { id: "giuseppe-07", p: "giuseppe", c: "travel", it: "È ora di comprare una barca nuova. L'oracolo ha parlato, il conto in banca un po' meno.", en: "It's time to buy a new boat. The oracle has spoken; your bank account, less so." },

  // Matteo
  { id: "matteo-01", p: "matteo", c: "work", it: "Ricordati dei tuoi amici quando sarai nell'amministrazione del Milan 💸", en: "Remember your friends when you're on AC Milan's management team 💸" },
  { id: "matteo-02", p: "matteo", c: "luck", it: "Mi raccomando, non spendere tutti i tuoi soldi in serate e bollette.", en: "Please, don't spend all your money on nights out and betting slips." },
  { id: "matteo-03", p: "matteo", c: "luck", it: "Qualche quota potresti passarla ai tuoi amici.", en: "You could pass a few betting tips on to your friends." },

  // Stefano
  { id: "stefano-01", p: "stefano", c: "luck", it: "Quei maledetti cucchiai d'argento spezzati.", en: "Those damn broken silver spoons." },
  { id: "stefano-02", p: "stefano", c: "work", it: "Smettila di lucrare sulla procreazione di quei poveri barboncini.", en: "Stop profiting off the breeding of those poor poodles." },
  { id: "stefano-03", p: "stefano", c: "friends", it: "Ma alla fine tuo padre che lavoro fa?", en: "So, in the end, what does your dad actually do for a living?" },
  { id: "stefano-04", p: "stefano", c: "life", it: "L'oracolo vede nel tuo futuro una fronte sempre più spaziosa. Più spazio per le idee.", en: "The oracle sees an ever more spacious forehead in your future. More room for ideas." },
  { id: "stefano-05", p: "stefano", c: "travel", it: "La tua attaccatura dei capelli sta facendo un viaggio. Non tornerà.", en: "Your hairline is going on a trip. It won't be coming back." },

  // Gianluigi
  { id: "gianluigi-01", p: "gianluigi", c: "life", it: "L'oracolo in questo caso è indeciso: non sa se morirai prima per colpa della droga o per colpa di qualche malattia sessualmente trasmissibile.", en: "The oracle is torn on this one: it can't tell whether drugs or some sexually transmitted disease will get you first." },
  { id: "gianluigi-02", p: "gianluigi", c: "friends", it: "Sei il mio cucciolone.", en: "You're my big puppy." },
  { id: "gianluigi-03", p: "gianluigi", c: "friends", it: "Sei la versione salentina di Kratos.", en: "You're the Salento version of Kratos." },
  { id: "gianluigi-04", p: "gianluigi", c: "luck", it: "Brilli di luce propria, o forse è solo la tua pelata...", en: "You shine with your own light, or maybe it's just your bald head..." },

  // Massimo
  { id: "massimo-01", p: "massimo", c: "life", it: "Se l'oracolo seguisse i tuoi orari, a quest'ora starebbe ancora dormendo.", en: "If the oracle kept your hours, it would still be asleep right now." },
  { id: "massimo-02", p: "massimo", c: "study", it: "Prima o poi riuscirai anche tu in questa impresa (forse...)", en: "Sooner or later you'll pull off this feat too (maybe...)" },
  { id: "massimo-03", p: "massimo", c: "love", it: "La tua anima gemella ti attende alla porta: i carabinieri hanno bussato.", en: "Your soulmate is waiting at the door: the police just knocked." },
  { id: "massimo-04", p: "massimo", c: "work", it: "Dici di essere creativo perché dire \"non ho voglia di lavorare\" suonava male.", en: "You say you're creative because saying \"I don't feel like working\" sounded bad." },
  { id: "massimo-05", p: "massimo", c: "friends", it: "Meno male che quest'oracolo è gratuito, altrimenti non avresti mai scoperto tutte queste bellissime frasi che ho scritto per te.", en: "Good thing this oracle is free, otherwise you'd never have discovered all these lovely lines I wrote for you." },
  { id: "massimo-06", p: "massimo", c: "work", it: "Siete i colleghi migliori che mi potessero capitare.", en: "You're the best coworkers I could have ended up with." },

  // Carmine
  { id: "carmine-01", p: "carmine", c: "work", it: "Siete i colleghi migliori che mi potessero capitare.", en: "You're the best coworkers I could have ended up with." },
  { id: "carmine-02", p: "carmine", c: "life", it: "L'oracolo prevede... solo 96 kg!", en: "The oracle predicts... only 96 kg!" },
  { id: "carmine-03", p: "carmine", c: "friends", it: "Miao", en: "Meow" },
  { id: "carmine-04", p: "carmine", c: "friends", it: "Tu sei un oracolo.", en: "You are an oracle." },
  { id: "carmine-05", p: "carmine", c: "work", it: "\"Non me l'aspettavo da Babbo Natale 😭\" è più o meno quello che pensiamo tutti quando ci stampi le stronzate.", en: "\"Didn't expect this from Santa 😭\" is more or less what we all think when you print us your nonsense." },
  { id: "carmine-06", p: "carmine", c: "luck", it: "La prossima cena la paga il signor Adivo, lo dice l'oracolo.", en: "Mr. Adivo is paying for the next dinner, says the oracle." },

  // Zii Casaburi
  { id: "zii-casaburi-01", p: "zii-casaburi", c: "study", it: "Молодец, Эмануэла! Только ты могла это перевести.", en: "Молодец, Эмануэла! Только ты могла это перевести." }
];
