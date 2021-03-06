# Cyber Security Software Engineering


## Inhalte Überblick vom 4.2.22
In Anlehnung an den [Modulkatalogeintrag T3INF3001](https://github.com/michael-spengler/cyber-security-software-engineering/blob/main/Screenshot%202021-10-17%20at%2016.06.50.png) wird die Aneignung von Methodenkompetenz in den folgenden Bereichen angeboten:    

<img width="1523" alt="Screenshot 2022-02-10 at 20 22 27" src="https://user-images.githubusercontent.com/43786652/153481378-22507995-849e-4187-a736-9247d83df5d5.png">



## Prüfungsleistung
Portfolioarbeit - Maximale Punktzahl bei 5 ECTS Leistungspunkten = ?  - zu nutzender Notenschlüssel = ?


## Bewertungskriterien 
Siehe Mindmap oben.   
Contributions.md file  
**Auf Wunsch aller Gruppenmitglieder** kann grundsätzlich allen innerhalb der Gruppe dieselbe Note gegeben werden (Gruppennote) - Es wäre gleichzeitig wünschenswert, dass sich die Fairness dessen iwie in github oder per Stichproben fragen nachvollziehen lässt.   
Reminder für Spengler: Die Kursteilnehmer haben die Web Programmierung nicht als Fokus --> Expectation Management 

## Vorlesungsgestaltung
Zu Beginn der einzelnen Vorlesungseinheiten sammeln wir Challenges aus den einzelnen Gruppen, priorisieren deren gemeinschaftliche Lösung und machen uns dann jeweils an die Lösungsfindung.   
Am Tag der letzten Vorlesungseinheit (gerne auch vorher zwischendurch) hat jede Gruppe ca. 30 Minuten Zeit ihre Ergebnisse zu präsentieren und Feedback in Form von Punkten zu erhalten. 

## Zwischenfeedbacks 
### Optimierungsempfehlungen
Add Link to each bot or SPOE Bot in README   
Add conf.template.py + instructions 1. Copy conf.template.py to conf.py and add your individual conf there…  
Enhance Bot Description + Help Command - take infos from wiki and display it to the bot user  
Enhance (Unit) Tests vs. Debugging  
Consider publishing your work as python module(s) - about 8 additional files for python publishing…     
Consider! replacing comments by adding functions (https://github.com/NoWo2000/MOT-Multi-Functional-Bot/blob/main/main.py#L23-L28)     
Individual Scalability (wie ist es wenn ein Spiel besonders häufig gespielt wird?) / Multi-Threading vs. Microservices Architecture    
Consider Adding Constraint-Satisfaction-Problems (CSP) Background Info to README…
Add TypeSafety / leverage TypeScript to its full extent – e.g. https://github.com/TheMuppet/deno-CSP/pull/18/files  
Consider REGEX based limitations for eval - difficult & no exploitables known as long as no “code injection”… possibility… granted by users…  - probably responsibility of user not the module itself - Add recommendation to proper input validation to README
Consider asking the Deno Community https://discord.gg/deno about performance improvement options 
Improve Likelyhood for broad (Developer) Adoption …. 
Consider Cloud Hosting PLUS local setup  
Consider publishing e.g. https://github.com/Music-Bot-for-Jitsi/jitsi-api-client on deno.land,  nest.land (https://medium.com/deno-the-complete-reference/node-js-compatibility-in-deno-a7cb8384a8d7) / npmjs.com (https://www.npmjs.com/package/ts-node)  
Automate Quality Assurance - good example https://github.com/felix-beie/youtube-deno-discord/blob/main/.github/workflows/deno.yml#L12   
Ensure your Doku / Readme is great so that each visitor could immediately use your artifacts and contribute to them  




## Inhalte vom 11.2.22
### Snel & Svelte
Für die Frontendentwicklung bzgl. browserbasierten web apps empfehle ich [Svelte unter Nutzung von Snel](https://github.com/crewdevio/Snel). 
https://github.com/michael-spengler/tinfcs-demo/tree/main/client/example-ui-in-svelte

### Deno 
Für die Backendentwicklung empfehle ich [Deno](https://deno.land). Konkret: [opine](https://deno.land/x/opine) für die Entwicklung eines Backends / Microservices mit unterschiedlichen API Endpoints... 
https://github.com/michael-spengler/tinfcs-demo/blob/main/server/server.ts

### Webharvesting
Für die Entwicklung von Webharvesting Anwendungen empfehle ich [codecept](https://codecept.io).

### CI/CD
Für CI/CD Funktionalitäten empfehle ich GitHub Actions.   
Für die Bereitstellung der index.html (aka. page provisioning for browserbased web apps) empfehle ich GitHub Pages.   
Für die Bereitstellung der einzelnen backends / microservices empfehle ich einen beliebigen IAAS, PaaS oder FaaS Anbieter wie z.B. [hetzner](https://hetzner.de).

### Themen- & Gruppenfindung
Für die Themenfindung empfehle ich das Öffnen eines issues auf diesem Repo pro Themenvorschlag. Jeder, der an einem konkreten Thema / Issue interessiert ist, kann diesen kommentieren.

### Zeit für gemeinschaftliches Problemlösungen
Sofern einzelne von Euch an einer bestimmten Stelle nicht weiterkommen, können wir das nutzen um aus diesen Challenges zu lernen.


## Inhalte vom 25.2.22
### Architekturen + dazugehörige Deployment- / Operationsvarianten
Infrastructure as Code   
DevOps (Closed Feedbackloops)     
A / B Testing   
Blue Green Deployment    
Chaos Monkey  

#### Design for Flexibility

#### Simplicity / Reliability & Maintainability of Infrastructure Setup
Infrastructure as Code (Dock Compose File, xyz.infrastructure.yml....)  
Test First (nicht nur für functional correctness) auch für Infrastruktur Code --> auch für Performance Tests / auch für Security Tests --> Safety Net --> motiviert zum mutigen Aufräumen

http://xunitpatterns.com/

![Screenshot 2022-02-25 at 09 28 59](https://user-images.githubusercontent.com/43786652/155698749-b54dbe03-102c-448d-af31-0fb36044e367.png)  

![Screenshot 2022-02-25 at 09 29 06](https://user-images.githubusercontent.com/43786652/155698753-c2fd1fce-f3db-4ac4-aaf5-342655dce7fc.png)  

![Screenshot 2022-02-25 at 09 29 49](https://user-images.githubusercontent.com/43786652/155698754-0ce51f42-d30c-45be-93b4-1546037d9fb2.png)  



#### Skalierbarkeit
Individuelle Skalierbarkeit (Skalieren genau derjenigen Funktion, welche auf dem kritischen Pfad liegt... ) 

#### Resilienz
Resilienz des Gesamtsystems (wenn eine Funktion ausfällt kann das gesamtsystem dennoch mit einer hohen Wahrscheinlichkeit weitgehend stabil sein - wenn feingranular designed & deployed) 



### Cloud Service Categories
Infrastructure as a Service (IaaS)   

Platform as a Service (PaaS) / Function as a Service (FaaS)  

Software as a Service (SaaS)  


### Meilensteine in der Webentwicklung

#### Web 1 (statische Seiten mit Links)  

#### Web 2 (Web 1 + Dynamik (Dank Brendan Eich - Erfinder von JavaScript))

#### Web 3 (Web 2 + Decentralization)
Distributed App (DApp) 





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


### Architekturen
#### Monolithische Architekturen
Selbst was vermeintlich komplett falsch und outdated erscheint, kann in manchen Kontexten (z.B. Kontexte, die Jahrzentelang stabil sind - vom Personal und von der Funktionalität her) erfolgreich und wertvoll sein - Beispiel CML. 

#### Microservices Architekturen
Individuelle Skalierbarkeit   
Resilienz des Gesamtsystems   
Technologische Freiheit  
Design for Flexibility  

#### Tradeoffs
Debating Club anbieten 

### Infrastructure as Code
Test First auch für nicht-funktionale (z.B. Performance- und Sicherheitsanforderungen)  

## UML
### Strukturdiagramme Beispiele
Klassendiagramme, Komponentendiagramme

### Verlaufsdiagramme Beispiele
Sequenzdiagramme, Aktivitätsdiagramme

## Werkzeuge
[diagrams.net](https://app.diagrams.net/)   
[staruml](https://staruml.io/)  

## Lernprozess (planned)
### Optional: Individuelle Einzelbewertungen anbieten

### Beispiel für die Nutzung von Security Advisories
#### Responsible Disclosure  
Known Maintainers informieren   
Fixen   
Announcement    

https://github.com/cla-assistant/cla-assistant/security/advisories  



### Benefits der Modularisierung / Open Sourcing erkunden ...


### je nach feedback

