# Cyber Security Software Engineering


## Inhalte Überblick vom 4.2.22
In Anlehnung an den [Modulkatalogeintrag T3INF3001](https://github.com/michael-spengler/cyber-security-software-engineering/blob/main/Screenshot%202021-10-17%20at%2016.06.50.png) wird die Aneignung von Methodenkompetenz in den folgenden Bereichen angeboten:    

<img width="1523" alt="Screenshot 2022-02-10 at 20 22 27" src="https://user-images.githubusercontent.com/43786652/153481378-22507995-849e-4187-a736-9247d83df5d5.png">



## Prüfungsleistung
Portfolioarbeit - Maximale Punktzahl bei 5 ECTS Leistungspunkten = ?  - zu nutzender Notenschlüssel = ?


## Bewertungskriterien 
Siehe Mindmap oben.  


## Vorlesungsgestaltung
Zu Beginn der einzelnen Vorlesungseinheiten sammeln wir Challenges aus den einzelnen Gruppen, priorisieren deren gemeinschaftliche Lösung und machen uns dann jeweils an die Lösungsfindung.   
Am Tag der letzten Vorlesungseinheit (gerne auch vorher zwischendurch) hat jede Gruppe ca. 30 Minuten Zeit ihre Ergebnisse zu präsentieren und Feedback in Form von Punkten zu erhalten. 


## Inhalte vom 11.2.22
### Snel & Svelte
Für die Frontendentwicklung bzgl. browserbasierten web apps empfehle ich [Svelte unter Nutzung von Snel](https://github.com/crewdevio/Snel). 

### Deno 
Für die Backendentwicklung empfehle ich [Deno](https://deno.land). Konkret: [opine](https://deno.land/x/opine) für die Entwicklung eines Backends / Microservices mit unterschiedlichen API Endpoints... 

### Webharvesting
Für die Entwicklung von Webharvesting Anwendungen empfehle ich [codecept](https://codecept.io).

### CI/CD
Für CI/CD Funktionalitäten empfehle ich GitHub Actions.   
Für die Bereitstellung der index.html (aka. page provisioning for browserbased web apps) empfehle ich GitHub Pages.   
Für die Bereitstellung der einzelnen backends / microservices empfehle ich einen beliebigen IAAS, PaaS oder FaaS Anbieter wie z.B. [hetzner](https://hetzner.de).


## Exkurse 
### Deno 
https://deno.land/ ... sollte als sehr empfehlenswert rübergekommen sein :)   


### Severe Vulnerability in the NodeJS Context
<img width="883" alt="Screenshot 2022-02-04 at 10 36 58" src="https://user-images.githubusercontent.com/43786652/152506245-6e341ada-54ff-47f3-b15a-6802628885d0.png">

**short term mitigation option 1:**  
```sh
npm config set ignore-scripts true  
npm i  
npm config set ignore-scripts false  
```


**long term fix**
use https://deno.land instead of nodejs


### Dezentralized Web
Dezentrale Lösungen bringen häufig Performance Nachteile mit sich. Sie entstehen meistens in Kontexten, in welchen Menschen glauben, dass es nicht gut ist einer zentralen Instanz zu vertrauen, da sich diese evtl. unfair verhält oder unfair verhalten könnte. Welche zentralen Instanzen vertrauenswürdig sind und welche nicht scheint mir unmöglich zu beurteilen. Daher hoffe ich, dass Sie die Skills, die Sie im Rahmen der Web 3 Technologie hier erhalten stets besonnen, fair und respektvoll einsetzen.  


### Monolithische Architekturen
Selbst was vermeintlich komplett falsch und outdated erscheint, kann in manchen Kontexten (z.B. Kontexte, die Jahrzentelang stabil sind - vom Personal und von der Funktionalität her) erfolgreich und wertvoll sein - Beispiel CML. 

