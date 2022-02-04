# Cyber Security Software Engineering


## Inhalte Überblick vom 4.2.22
In Anlehnung an den [Modulkatalogeintrag T3INF3001](https://github.com/michael-spengler/cyber-security-software-engineering/blob/main/Screenshot%202021-10-17%20at%2016.06.50.png) wird die Aneignung von Methodenkompetenz in den folgenden Bereichen angeboten:    

<img width="1546" alt="Screenshot 2022-02-04 at 12 34 34" src="https://user-images.githubusercontent.com/43786652/152525474-3fd6a872-6447-4ebb-8bdf-c64dc21b0ca2.png">

wie UML Diagramme [z.B. via staruml.io](https://staruml.io/) - die Entstehung von High Cohesion & [Loose Coupling](http://xunitpatterns.com/Test%20Double.html) unterstützen können.  


## Prüfungsleistung
Sofern eine Portfolioarbeit als Prüfungsleistung möglich ist, entwickeln wir eine Web Anwendung unter Nutzung von [svelte](https://svelte.dev/) für die Frontendentwicklung und [Deno](https://deno.land) (als RTE...) für die Backendentwicklung. Die konkreten Projektvorschläge werden zu Beginn der Vorlesungsreihe als Issues auf diesem Repository gesammelt. Bei passenden Anwendungsfällen kann die Backendentwicklung zusätzlich die Entwicklung von Smart Contracts für die Ethereum Blockchain als Plattform / Server umfassen.   

Maximale Punktzahl bei 5 ECTS Leistungspunkten = ?   
zu nutzender Notenschlüssel = ?

## Bewertungskriterien 
Falls Portfolioprüfung möglich:  
1. Web app funktioniert fehlerfrei  
2. Web app ist responsive  
3. Es wurden nachvollziehbare Requirements- / Scope- Plattform- & Frameworkentscheidungen gefällt und dokumentiert  
4. Die Implementierung nutzt die Plattform, Frameworks, Libraries und Module auf effiziente Art und Weise   
5. High Code Quality / Good Maintainability reached by ...    
5.1 clear separation of concerns (no spaghetti code)   
5.2 high cohesion   
5.3 loose coupling   
5.4 automated static checks available (linting)   
5.5 automated dynamic tests available (unit tests and integration tests)     
6. Die Web app wurde weitgehend testgetrieben entwickelt 


## Diagrams
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



