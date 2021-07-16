# quartier-quartett

## Start

```
npm rum serve
# OR
yarn serve
```


## Daten

Die verwendeten Daten liegen im Ordner `data_sourcing` als Excel-Tabelle. Sie werden durch ein Python-Skript automatisch in ein json-File umgewandelt, das dann in das Browser-Spiel eingebunden wird. Dafür muss die Excel-Tabelle folgende Anforderungen erfüllen:

1. Es muss ein Sheet mit exakt dem Namen "spieldaten" geben. Aus diesem werden die Daten gelesen.
2. Die letzten 23 Spalten dürfen nur die Stadtteile enthalten.