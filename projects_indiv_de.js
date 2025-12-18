window.PROJECTS = [
    {
        "id": "rental-yield-trap",
        "category": "Immobilienanalyse",
        "type": "Case Study",
        "style_type": "organic",
        "title": "Die Mietrenditefalle",
        "subtitle": "Wenn Anleiherendite die Mietrendite schlägt",
        "tagline": "KI nutzen, um die 'Negative Hebelwirkung'-Falle in einem Premium-Immobilienmarkt aufzudecken.",
        "author": "Sie",
        "publication_date": "11.12.2025",
        "likes": 0,
        "tech_stack": ["Gemini 3.0", "Streamlit", "Antigravity"],
        "metrics": {
            "role": "Solo-Bauer",
            "timeline": "60 Min.",
            "impact": "500.000 € gespart",
            "tech": "Gemini 3.0, Streamlit, Antigravity"
        },
        "summary": "Eine investigative Analyse eines Wohnungsinserats für 469.000 €. Was wie eine Standardinvestition aussah, entpuppte sich im Vergleich zu risikofreien Bundesanleihen als Kapitalschlucker. Dieses Projekt automatisierte die Finanzmathematik, um zu beweisen, dass der faire Preis tatsächlich 380.000 € und nicht 469.000 € betrug.",
        "insights": {
            "analyst": "Risikoadjustiert: Immobilie (2,4 %) vs. Anleihe (2,8 %). Ein datengesteuerter Realitätscheck.",
            "businessman": "ROI-Fokus: Kapitalallokationsfehler von 500.000 € in < 10 Min. identifiziert.",
            "visionary": "Zukunft der Arbeit: Schnelle 'Vibe Coding'-Zyklen verwandeln abstrakte Ideen sofort in Werkzeuge.",
            "humanist": "Befreiung: Die Angst vor komplexen finanziellen Entscheidungen durch Klarheit nehmen."
        },
        "steps": [
            {
                "title": "Die Aufforderung (Menschliche Absicht)",
                "color": "stone-400",
                "content_type": "text",
                "text": "\"Hier ist ein Exposé für eine Wohnung (469.000 €). Berechnen Sie die jährliche Nettokaltmiete und zeigen Sie mir den Rechenweg. Ist die Rendite attraktiv?\""
            },
            {
                "title": "Tiefe Einblicke",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Die anfängliche Rendite beträgt nur 1,92 % (Nettomiete 10.800 €).",
                    "Entdeckung der Mietpreisbremse: 15 % Begrenzung aufgrund bestehender Mieter.",
                    "Negative Hebelwirkung: Hypothekenzinsen (~3,8 %) übersteigen die potenzielle Immobilienrendite (2,24 %).",
                    "Benchmark: Risikofreie deutsche Bundesanleihen rentieren mit 2,8 % ohne jeden Aufwand."
                ]
            },
            {
                "title": "Automatisierungsüberprüfung",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "Um manuelle Berechnungen für jedes Inserat zu vermeiden, habe ich einen <strong>Umgekehrten Rechner</strong> entwickelt. Anstatt zu fragen <em>'Wie hoch ist die Rendite?'</em>, fragt er <em>'Was sollte der Preis sein, um 3 % zu erreichen?'</em>. Ergebnis: Der faire Preis liegt bei <strong class=\"bg-yellow-100 px-1\">380.000 €</strong> (19 % unter dem geforderten Preis)."
            },
            {
                "title": "Implementierung",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "pics/streamlit_dashboard.png",
                "image_caption": "Streamlit-Rechner: Cashflow- & Anleihenvergleich",
                "link_url": "https://residentialinvestmentcalc-ikffwbbuqfpvu2ksd9iolx.streamlit.app/"
            },
            {
                "title": "Feedback-Verfeinerung",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "Das Finanzmodell ignorierte das Alter des physischen Vermögenswerts (1972) und rechtliche Risiken.",
                "success": "Manuell eine Due-Diligence-Checkliste hinzugefügt: Heizungsanlage von 1992 (GEG-Austauschpflicht) & Prüfung der WEG-Instandhaltungsrücklage."
            }
        ],
        "lessons": [
            "KI ist hervorragend in Mathematik, benötigt aber menschliche Anleitung bei rechtlichen Beschränkungen (Mietpreisbremse, GEG).",
            "Vibe Coding verlagert die Rolle des PM vom 'Spezifizieren' zum 'Bauen'.",
            "Analysieren Sie die Rendite niemals isoliert; vergleichen Sie sie immer mit risikofreien Zinssätzen."
        ],
        "generalizes": "Institutionelle Firmen geben Millionen für Analysten aus, um Geschäfte über Nacht zu prüfen. Dieser Arbeitsablauf beweist, dass ein Einzelunternehmer mit KI nun in der Lage ist, diese **institutionelle Due Diligence in Sekunden** zu replizieren. Es lässt sich zu einem 'Persönlichen Anlageausschuss' verallgemeinern, der eine standardisierte, unemotionale Scorecard für jede finanzielle Entscheidung erstellt, vor der Sie stehen."
    },
    {
        "id": "job-skills",
        "category": "Karriere",
        "type": "Tool",
        "style_type": "structured",
        "coming_soon": true,
        "title": "Abgleich von Berufskompetenzen",
        "subtitle": "Automatisierte Anpassung",
        "tagline": "Automatisierte Anpassung",
        "author": "Sarah",
        "publication_date": "05.11.2023",
        "likes": 0,
        "tech_stack": ["React", "GPT-4"],
        "metrics": {
            "role": "Entwickler",
            "timeline": "2 Wochen",
            "impact": "3x Interview-Rate",
            "tech": "React, OpenAI"
        },
        "summary": "Bewerbungen sind ein Zahlenspiel, aber Personalisierung gewinnt. Dieser Bot nimmt einen Lebenslauf und eine Stellenbeschreibung, gleicht Schlüsselwörter ab und schreibt die Zusammenfassung des Lebenslaufs neu, um relevante Erfahrungen automatisch hervorzuheben.",
        "insights": {
            "analyst": "Analyse des Schlüsselwortabgleichs mit der Stellenbeschreibung.",
            "businessman": "Erhöhte die Interviewrate um 300 %.",
            "visionary": "Persönlicher Markenagent.",
            "humanist": "Tonprüfung: Selbstvertrauen vs. Arroganz."
        },
        "steps": [
            {
                "title": "Die Aufforderung (Menschliche Absicht)",
                "color": "stone-400",
                "content_type": "text",
                "text": "Benutzerabsicht: 'Ich möchte mich für diese Produktmanager-Stelle bewerben, aber mein Lebenslauf ist zu techniklastig. Schreiben Sie meine Zusammenfassung neu, um strategische Führung zu betonen, während die technischen Details korrekt bleiben.'"
            },
            {
                "title": "Tiefe Einblicke",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Recruiter verbringen <6 Sekunden pro Lebenslauf.",
                    "ATS-Systeme lehnen 75 % der qualifizierten Kandidaten wegen fehlender Schlüsselwörter ab."
                ]
            },
            {
                "title": "Automatisierungsüberprüfung",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "Der <strong class=\"bg-yellow-100 px-1\">Context Matcher</strong>-Algorithmus extrahiert die 5 wichtigsten erforderlichen Fähigkeiten aus der Stellenbeschreibung und ordnet sie der Projekthistorie des Benutzers zu, um eine 'Kompetenzlückenanalyse' zu erstellen, bevor er schreibt."
            },
            {
                "title": "Implementierung",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6gPommhRV3U7IAzhEbExPy-aZyhzjgskV0RKyEeUu3_x0g5PD9pR66U6YCOnCwKnWzzq4IQYl3NdXDfxngFduPdHOHsi52CFtpfPAjMc9T1LISzyR3-CnmMrlfDjkMhrm5QyQuxg8qhlMUUyFOnlciVsxmmveMP9nATNuAphe71aC9cDA01m0QKpDosHki80Ch7zFPdHV_OletgZq-4weINpYe5z_KDqbGwc0T8d39_RD9H2hTSTm-_zvP0UZfoVHfJCaDw3y4mYw",
                "image_caption": "Dashboard-Schnittstelle"
            },
            {
                "title": "Feedback-Verfeinerung",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "Die ersten Entwürfe klangen zu roboterhaft und verwendeten übermäßige Modewörter wie 'Synergie'.",
                "success": "Implementierung eines 'Ton-Schiebereglers', der die Temperatur des Modells anpasst und es den Benutzern ermöglicht, zwischen 'Professionell', 'Kreativ' oder 'Direkt' zu wählen."
            }
        ],
        "lessons": [
            "Das Parsen von PDFs ist schwieriger als das Generieren von Text.",
            "Benutzer vertrauen dem Ergebnis mehr, wenn sie die Änderungen hervorgehoben sehen."
        ],
        "generalizes": "Dieser 'Context Matcher'-Dienst kann für jeden Bereich angepasst werden, der eine Dokumentenabstimmung erfordert, wie z. B. Förderanträge, Verkaufsgespräche oder die Überprüfung von Rechtsverträgen, und spart Tausende von Stunden bei der manuellen Anpassung."
    },
    {
        "id": "fact-checking",
        "category": "Automatisierung",
        "type": "Tool",
        "style_type": "code",
        "coming_soon": true,
        "title": "Faktenprüfung",
        "subtitle": "Automatisierte Überprüfung",
        "tagline": "v2.0.1",
        "author": "Sie",
        "publication_date": "18.11.2023",
        "likes": 0,
        "tech_stack": ["Node.js", "Puppeteer"],
        "metrics": {
            "role": "Ingenieur",
            "timeline": "1 Wochenende",
            "impact": "40h/Woche gespart",
            "tech": "Puppeteer"
        },
        "summary": "Manuelle Dateneingabe ist zermürbend. Dieser Scraper überwacht die Preise der Wettbewerber in Echtzeit und benachrichtigt das Team über Slack, wenn signifikante Schwellenwertüberschreitungen auftreten.",
        "insights": {
            "analyst": "99 % Datengenauigkeit.",
            "businessman": "40 Stunden/Woche gespart.",
            "visionary": "Echtzeit-Marktpuls.",
            "humanist": "Ethische Ratenbegrenzung integriert."
        },
        "steps": [
            {
                "title": "Die Aufforderung (Menschliche Absicht)",
                "color": "stone-400",
                "content_type": "text",
                "text": "'Wir müssen wissen, wann Wettbewerber X seinen Preis unter 50 € senkt. Die stündliche manuelle Überprüfung verschwendet 20 % der Kapazität des Vertriebsteams.'"
            },
            {
                "title": "Tiefe Einblicke",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Wettbewerber-Websites verwenden dynamisches Rendering (Hydration).",
                    "Einfache HTTP-Anfragen geben leere HTML-Körper zurück."
                ]
            },
            {
                "title": "Automatisierungsüberprüfung",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "Anstelle von Regex haben wir einen <strong class=\"bg-yellow-100 px-1\">Headless Browser Cluster</strong> eingesetzt, der das gesamte DOM rendert, auf den 'In den Warenkorb'-Button wartet (was den Ladeabschluss signalisiert) und dann den Preis ausliest."
            },
            {
                "title": "Implementierung",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6gPommhRV3U7IAzhEbExPy-aZyhzjgskV0RKyEeUu3_x0g5PD9pR66U6YCOnCwKnWzzq4IQYl3NdXDfxngFduPdHOHsi52CFtpfPAjMc9T1LISzyR3-CnmMrlfDjkMhrm5QyQuxg8qhlMUUyFOnlciVsxmmveMP9nATNuAphe71aC9cDA01m0QKpDosHki80Ch7zFPdHV_OletgZq-4weINpYe5z_KDqbGwc0T8d39_RD9H2hTSTm-_zvP0UZfoVHfJCaDw3y4mYw",
                "image_caption": "Terminal-Ausgabestrom"
            },
            {
                "title": "Feedback-Verfeinerung",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "Wir wurden nach 400 Anfragen in 1 Minute auf die IP-Sperrliste gesetzt.",
                "success": "Implementierung von exponentiellem Backoff und rotierenden privaten Proxys, um menschliches Verhalten nachzuahmen."
            }
        ],
        "lessons": [
            "Websites ändern sich häufig; Selektoren müssen robust sein.",
            "Respektieren Sie robots.txt, um IP-Sperren zu vermeiden."
        ],
        "generalizes": "Der Headless Browser Cluster ist eine universelle Datenextraktions-Engine. Er kann auf jede Website – Finanzportale, soziale Medien, E-Commerce – gerichtet werden, um Echtzeit-Datenfeeds für Marktinformationen, Sentiment-Analysen oder Compliance-Überwachung zu erstellen."
    }
];
