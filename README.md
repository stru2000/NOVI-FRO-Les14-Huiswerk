# Opdrachtbeschrijving

Heee FRO 2026/04,

De dynamic API is nog steeds kaduuk. Om de huiswerkopdracht alsnog te kunnen maken heb ik een oplossing bedacht. Je gaat je eigen mini server hosten . Dit klinkt spannender dan het is. Zie hieronder het stappenplan:

Voeg het bijgevoegde bloginitNEW.json-bestand toe aan de root van je project. Hij komt dan bijvoorbeeld tussen je .gitignore en index.html te staan.
Installeer JSON Server met:

npm install json-server

Start daarna de lokale server met:

npx json-server bloginitNEW.json --port 3001

Je hebt nu lokaal een server gestart. In de terminal zie je welke endpoints beschikbaar zijn. Voor de blogposts is dit:
http://localhost:3001/blogposts
Laat deze server draaien zolang je met je project bezig bent. Je kunt hem stoppen met CTRL + C in de terminal.
Open een nieuwe terminal (het +-teken naast Local). Hier kun je je React-app zoals gewoonlijk starten met:
npm run dev
Je kunt de opdracht nu uitvoeren met async functies die requests doen naar:
http://localhost:3001/blogposts
Succes! 🚀