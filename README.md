# Toasting Demo

## Konzept Ideen

* Optik wird über (S)CSS definiert. Dadurch ist es zentral steuerbar und wird durch den Entwickler nicht beeinflusst.
* Kleiner Anpassungen können über CSS Custom Properties dennoch schnell und einfach überschrieben werden.
* Das Layout ist flexibel erweiterbar, z.B. für Modals anstatt Toasts. Darum wurde auf "Fehlercodes" (Integer) verzichtet,
  und stattdessen mit Key-Strings gearbeitet.
* Durch den Typ String lässt sich auch schneller erkennen um welche Art von Meldung es sich handelt.


* Für globale Verfügbarkeit ist es ein eigenständiges Objekt, welches über JS ansprechbar ist.
* Es sollte self-managed sein, damit der Entwickler (Dev) es möglichst einfach bedienen kann, ohne Rücksicht 
  auf einzelne Elemente (Komponenten) nehmen muss.
* Durch einen zentralen Container sollten auch die Items verwaltet werden. Dadurch gibt es eine zentralisierte Steuerung.
* Jedes Toast/Modal wiederrum soll seine Daten selbst verwalten, für eine möglichst lose Kopplung.


* Die Initialisierung eines Elements sollte so einfach wie möglich sein ( showSimpleMessage(...) ).
* Optional sollte es möglich sein, auch komplexere Daten (Modals, etc.) anzeigen zu können (showExtendedMessage(...)).
  In dieser Variante, ist es dann erlaubt alle Formen von Daten hinein zu geben (HTML, Buttons, Components, etc.).

## Server Messages

* Nachrichten sollten auch vom Backend abgebildet werden können
* Zur Sicherheit sollten diese keine komplexen Daten enthalten (reiner Text)
* Über eine JS Funktion sollte dies einfach zu verarbeiten sein, 
  damit es in einem Callback (bzw. Promise) gelöst werden kann.

### Beispiel

    { "messages": [
        { "uid": 12345, error_code: "F01238", "type": "error", "title": "A good readable Headline", "message": "This is a detailed error message" },
        { "uid": 12345, error_code: "F01238", "type": "info", "title": "A good readable Headline", "message": "This is a detailed error message" },
        { "uid": 12345, error_code: "F01238", "type": "warning", "title": "A good readable Headline", "message": "This is a detailed error message" },
      ] 
    }

### Sicherheit

Auch wenn die Daten aus einem Vertrauenswürdigen Backend kommen, dürfen die Daten NIEMALS einfach so übergeben werden.
Eine Überprüfung und bereinigung sollte erfolgen. Zum Beispiel der Typ darf nur eine feste Auswahl sein, oder minimal
durch reguläre Ausdrücke auf z.B. nur buchstaben gefiltert werden. Gleiches gilt für die anderen Key/Value paare.

## Erweiterungsmöglichkeiten (Todo)

* Responsive Layout verbessern (CSS etc.)
* Optik feinschliff (Icons, Cross, etc.) 
* Demo erweitern / komplexer (Routing Beispiel, Steuerung außerhalb des Elements durch z.B. Buttons, ...)
  

* Listener bzw. Observer einbauen, so dass auf Nachrichten Typen reagiert werden kann und Interaktionen durchgeführt 
  werden können. Dadurch lassen sich bestimmte Elemente sperren im Design bis eine Aktion durchgeführt wurde.


* Positionierung: Eine fixe oder variable konfigurierbare Positionierung könnte für Layouts praktikabel sein,
  unabhängig vom CSS
  

* Code auf React Hooks umbauen für z.B. einfacheres State handling(?)
* Toast in ein Modul verpacken zur einfacheren Bedienung / Handhabung