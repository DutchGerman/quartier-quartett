# quartier-quartett

## Start

Dieses Quartett entstand im Juli 2021 beim [Osnahack](https://osnahack.de) der [Stadtwerke Osnabrück](https://www.stadtwerke-osnabrueck.de).

Mitentwickelt haben Aleksandra, Bernhard, Christoph, Jan, Julia, Kolja und Stefan.


## Daten

Die verwendeten Daten liegen im Ordner `data_sourcing` als Excel-Tabelle. Sie werden durch ein Python-Skript automatisch in ein json-File umgewandelt, das dann in das Browser-Spiel eingebunden wird. Dafür muss die Excel-Tabelle folgende Anforderungen erfüllen:

1. Es muss ein Sheet mit exakt dem Namen "spieldaten" geben. Aus diesem werden die Daten gelesen.
2. In den Zeilen werden die Themen abgebildet, die Werte der Stadtteile sind jeweils in einer Spalte. Die letzten 23 Spalten dürfen nur die Stadtteile enthalten.


## Fotos

Die Fotos aus den Stadtteilen wurden uns freundlicherweise von der Stadt Osnabrück zur Verfügung gestellt, aufgenommen haben sie Silke Brickwedde und Nina Hoss.

## Lokal installieren

Das Spiel funktioniert ganz einfach über [diese Webseite](https://dutchgerman.github.io/quartier-quartett/) im Browser. Trotzdem kann man es mit etwas Vorwissen auch lokal installieren.

Gebaut wurde die Webanwendung mit [vue.js](https://vuejs.org/).

```
npm run serve
# or
yarn serve
```

## Lizenz

Dieser Code ist unter der Lizenz GPLv3 veröffentlicht.