# sch86

## Post-Header

Dieser Teil sollte am Anfang eines jeden Posts stehen:

```yaml
---

title: "Ein Titel" # das wird der Titel der Seite, am besten in Anführungszeichen (z.B. wenn er Sonderzeichen enthält)
author: ElZorro # Name des Authors, der nachher mit dem Artikel auf der Seite angezeigt wird; das ist unabhängig vom github-Benutzernamen
date: 2014-07-15 04:06:40 # im Format: Jahr-Monat-Tag Stunde:Minute:Sekunde, die Uhrzeit ist optional
tags: [ News Verein, Erste ] # Die eckigen Klammern sind wichtig. Mehrere Tags werden durch Kommas separiert
layout: post # Das muss überall genau so drinstehen

---
```

## Artikelanriss

Auf den Artikelübersichtsseiten werden nur Anrisse, also die ersten Absätze, dargestellt. Dieser Anriss kann beliebig bestimmt werden durch platzieren des HTML-Tags `<!-- continue -->`.

Zum Beispiel:

```markdown
Hier ist der erste Paragraph des Artikels, der im Anriss stehen sollte.

<!-- continue -->
Hier kommen weitere Paragraphen, die aber auf den Übersichtsseiten nicht sichtbar sind, weil sie nach dem HTML-Tag stehen.
```

## Tags

* Erste
* Zweite
* B(r)ettgeflüster
* News Verein

## Markdown-Referenz 

siehe http://www.heise.de/mac-and-i/downloads/65/1/1/6/7/1/0/3/Markdown-CheatSheet-Deutsch.pdf
