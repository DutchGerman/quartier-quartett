# OS-City-Quartett

Wie gut kennen Sie Osnabrück? Wie gut kennen wir eigentlich Osnabrück? 

Das haben wir uns gefragt – und uns überlegt, dass wir viele Fakten, die eigentlich verfügbar sind, gar nicht kennen. Deshalb haben wir überlegt, wie wir miteinander ins Gespräch kommen können. Ein Quartett ist dafür ein super Ansatzpunkt.

Das Spielprinzip ist einfach: Die Stadtteile treten gegeneinander an und der bessere gewinnt! Dazu wählt man eine Zahl von fünf aus der eigenen Karte aus, mit der man den Stadtteil auf der verdeckten Karte am besten übertrumpfen könnten. Das Ergebnis zeigt dann, ob man recht hatte.

Das Spiel kennt man vielleicht auch als "Supertrumpf" – gespielt wird es häufig von Kindern mit Karten zu Autos, LKW oder Flugzeugen und deren technische Daten.

Unser Spiel kann man hier ausprobieren: [https://kurzelinks.de/os](https://kurzelinks.de/os).

## Über das Projekt

Dieses Quartett entstand im Juli 2021 beim [Osnahack](https://osnahack.de) der [Stadtwerke Osnabrück](https://www.stadtwerke-osnabrueck.de).

Mitentwickelt haben Aleksandra, Bernhard, Christoph, Jan, Julia, Kolja und Stefan.

## Daten

Die Daten wurden für den Hackathon bereitgestellt von den Stadtwerken Osnabrück, kommen aus dem [Kommunalen Statistik und Monitoringportal Osnabrück (KOSMOS)](https://geo.osnabrueck.de/kosmos/ziel_1/atlas.html?select=Stadtgrenze) oder von [OpenStreetMap](https://www.openstreetmap.org).

Die verwendeten Daten liegen im Ordner `data_sourcing` als Excel-Tabelle. Sie werden durch ein Python-Skript automatisch in ein json-File umgewandelt, das dann in das Browser-Spiel eingebunden wird. Dafür muss die Excel-Tabelle folgende Anforderungen erfüllen:

1. Es muss ein Sheet mit exakt dem Namen "spieldaten" geben. Aus diesem werden die Daten gelesen.
2. In den Zeilen werden die Themen abgebildet, die Werte der Stadtteile sind jeweils in einer Spalte. Die letzten 23 Spalten dürfen nur die Stadtteile enthalten. Damit sind die Spalten wie folgt strukturiert:
    * **Thema:** Kurze Beschreibung des Themas, maximal 21 Zeichen.
    * **WinCondition:** Gibt an, ob die höhere oder die niedrigere Zahl gewinnt.
    * ... und dann die **23 Stadtteile** als Spalten: Innenstadt, Weststadt, Westerberg, Eversburg, Hafen, Sonnenhügel, Haste, Dodesheide, Gartlage, Schinkel, Widukindland, Schinkel-Ost, Fledder, Schölerberg, Kalkhügel, Wüste, Sutthausen, Hellern, Atter, Pye, Darum-Gretesch-Lüstringen, Voxtrup, Nahne

## Fotos

Die Fotos aus den Stadtteilen wurden uns freundlicherweise von der Stadt Osnabrück zur Verfügung gestellt, aufgenommen haben sie Silke Brickwedde und Nina Hoss.

## So sieht's aus

#### Screenshot der Startseite
![Screenshot Desktop-Ansicht Startseite](https://raw.githubusercontent.com/DutchGerman/quartier-quartett/main/doc/screenshot-os-city-quartett-startseite.png)

#### Screenshot eines gewonnenen Spielzugs
![Screenshot Desktop-Ansicht Gewonnen](https://github.com/DutchGerman/quartier-quartett/blob/main/doc/screenshot-os-city-quartett-gewonnen.png)

## Fehler gefunden?

Wir haben dieses Projekt in etwas mehr als 24 Stunden gebaut. Vermutlich sind noch einige Fehler drin und der Code nicht ganz so hübsch. Wer Fehler findet oder konkrete Verbesserungsvorschläge hat, kann gerne hier auf GitHub Issues erstellen. Ob wir weiterarbeiten, ist aber unklar – wir haben uns nämlich als Gruppe nur für den Hackathon zusammengefunden.

## Lokal installieren

Das Spiel funktioniert ganz einfach über [diese Webseite](https://dutchgerman.github.io/quartier-quartett/) im Browser. Trotzdem kann man es mit etwas Vorwissen auch lokal installieren.

Gebaut wurde die Webanwendung mit [vue.js](https://vuejs.org/).

Die Daten können einfach in einem Excel-File abgelegt werden und werden mit einem Python-Skript in das nötige JSON-File mit der korrekten Datenstruktur umgewandelt.

```
npm run serve
# or
yarn serve
```

## Lizenz

Dieser Code ist unter der Lizenz [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt) veröffentlicht.
