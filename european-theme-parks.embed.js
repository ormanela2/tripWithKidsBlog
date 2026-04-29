window.__EUROPEAN_THEME_PARKS__ = {
  "meta": {
    "title": "European theme & major amusement parks (family destination tier)",
    "language": "en",
    "updated": "2026-04-23",
    "notes": "Curated for itineraries, suppliers, and code. Each park includes an official website URL (https). Linking to official sites is normal for travel content and structured data; follow each park's terms for logos/media.",
    "schedule_disclaimer": "Opening/closing times and closure dates change every season. Fields opening_periods and shutdown_periods are typical patterns for UX and planning only — always use hours_url (official calendar) before tickets or travel.",
    "schedule_fields": {
      "timezone": "IANA timezone for interpreting opens/closes (local civil time).",
      "hours_url": "Official opening calendar / hours page — source of truth.",
      "opening_periods": "When the park usually runs with opens/closes; months = 1–12 where that pattern often applies.",
      "shutdown_periods": "Full closure, end-of-season, or maintenance windows (approximate). type: full_closure | reduced_operation | end_of_season."
    },
    "image_disclaimer": "Images use Wikimedia Commons via Special:FilePath (redirects to upload.wikimedia.org). Verify file pages for license (usually CC BY-SA). For production, consider self-hosting or official press kits.",
    "image_fields": {
      "url": "HTTPS image URL; null if no image yet (use UI placeholder). Special:FilePath links work in <img src> (browser follows redirect).",
      "alt": "English description for accessibility and SEO.",
      "source": "wikimedia_commons | none",
      "file_page": "Commons file page URL for attribution.",
      "credit": "Suggested credit line; read the Commons license on file_page.",
      "notes": "Present when url is null or extra guidance is needed."
    },
    "visitor_extras_disclaimer": "Lodging and ticket-inclusion flags are indicative. Products, pass names, and bundle rules change often — always confirm on official_urls before booking. null means unknown or not researched yet.",
    "visitor_extras_fields": {
      "lodging": {
        "sleep_inside_park_or_resort": "boolean | null — true if official on-site hotel/resort/camping in or directly managed as part of the park; false if clearly day-only; null unknown.",
        "description": "Short English note for your UI.",
        "official_packages_url": "Link to hotels/overnight page when available."
      },
      "packages_with_park_entry": {
        "hotel_or_partner_bundles_include_park_tickets": "boolean | null — true when the operator commonly sells stay + entry together; false if not offered; null verify.",
        "notes": "Clarifies whether tickets are free add-on, discounted bundle, or separate.",
        "official_url": "Best page for stay+tickets."
      },
      "discounts_and_passes": "Array of { type, name, notes, url }. type: annual_pass | season_pass | hotel_bundle | multi_attraction | multi_park | retail_partner | city_tourist_card | other."
    },
    "tags_schema": {
      "description": "Each park has `tags` (string[]) for filtering UI and future listings (e.g. water parks by region). Extend with values like: water_park, indoor, resort, seasonal_only.",
      "review_fields": "optional_review: { score: 1-5 or null, review_count: number|null, source: string|null } — set manually or from an API export; theme-parks UI shows stars when score is set.",
      "card_teaser_he": "Optional per-park string (Hebrew) for the short line on list cards; if omitted, UI uses kind + country templates.",
      "future_water_parks": "When adding aqua parks per country/area, add a park entry OR use tags: [\"water_park\",\"region:med\"]. Optionally add country-level `water_parks_note` in a later schema version.",
      "distance_from_city": "Short logistics text, e.g. \"90-minute drive from Munich\".",
      "price_level": "Budget indicator string: € | €€ | €€€.",
      "family_filters": {
        "description": "Hebrew UI filters map to these tags: toddler_friendly (פעוטות), young_kids + family_all_ages (ילדים, excludes teen_only), teen_thrills (נוער), indoor (מקורה), water_park (מים), animals_zoo + dinosaurs (חיות), educational (לומדים), shows_live (מופעים), resort (ריזורט), city_urban (בעיר).",
        "tag_meanings": {
          "toddler_friendly": "Play areas, gentle pace, preschool-friendly.",
          "young_kids": "School-age children; family rides.",
          "teen_thrills": "Major coasters / height rides.",
          "teen_only": "Primarily thrill / height rides; not tagged for preschool “young kids” filter.",
          "family_all_ages": "Broad mix for mixed-age families.",
          "indoor": "Meaningful indoor or weather-proof options.",
          "water_park": "Water park or major aquapark component.",
          "animals_zoo": "Animals, safari, marine mammals, dinosaur trails.",
          "educational": "Learning, museums, science, history trails.",
          "shows_live": "Shows, stunt spectaculars, circus.",
          "resort": "Stay + park resort model.",
          "city_urban": "City fairground / easy urban day trip.",
          "outdoor_nature": "Outdoor trails, nature-heavy sites.",
          "europe": "European destination dataset marker."
        }
      }
    }
  },
  "countries": [
    {
      "code": "PL",
      "name": "Poland",
      "flag": "🇵🇱",
      "parks": [
        {
          "name": "Energylandia",
          "location": "Zator",
          "website": "https://www.energylandia.pl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.energylandia.pl/en/for-visitors/opening-hours",
            "opening_periods": [
              {
                "label": "Peak summer",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "09:30",
                "closes": "22:00",
                "days": "daily"
              },
              {
                "label": "Spring / autumn",
                "months": [
                  4,
                  5,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Winter Kingdom (when scheduled)",
                "months": [
                  11,
                  12,
                  1
                ],
                "opens": "11:30",
                "closes": "18:30",
                "days": "selected_weekends_and_holidays",
                "notes": "Not all attractions open; calendar varies."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Late winter maintenance (typical)",
                "months": [
                  2,
                  3
                ],
                "notes": "Often closed except possible Winter Kingdom weekends until main season; verify calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Zadra%20(Energylandia)%20-%20First%20Drop.jpg",
            "alt": "Zadra roller coaster at Energylandia, Zator, Poland",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Zadra%20(Energylandia)%20-%20First%20Drop.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Partner hotels at the park (e.g. Atron at the entrance); standard rooms walking distance to the park.",
              "official_packages_url": "https://www.energylandia.pl/en/hotels-and-apartments"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Official hotel + ticket bundles are sold on the park site; inclusions vary by season.",
              "official_url": "https://www.energylandia.pl/en/hotels-and-apartments"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Annual passes (season products)",
                "notes": "Multi-day and annual-style products appear on the official ticket shop.",
                "url": "https://www.energylandia.pl/"
              }
            ]
          },
          "geo": {
            "lat": 49.9919,
            "lng": 19.4096,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Legendia",
          "location": "Chorzów",
          "website": "https://legendia.pl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.legendia.pl/info/godziny-otwarcia",
            "opening_periods": [
              {
                "label": "Summer season",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "End times often later in peak July–August."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season / winter",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Exact opening season dates published yearly on hours_url."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lech%20Coaster%20-%20Legendia%20-%202018.jpg",
            "alt": "Lech Coaster at Legendia amusement park, Chorzów, Poland",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Lech%20Coaster%20-%20Legendia%20-%202018.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Urban/regional park in Śląski Park; typical day visit, hotels in Chorzów/Katowice.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": "No standard on-park hotel bundle like a resort; check third-party OTAs for nearby stays.",
              "official_url": null
            },
            "discounts_and_passes": [
              {
                "type": "season_pass",
                "name": "Park season products (if offered)",
                "notes": "See official ticketing for current pass types.",
                "url": "https://legendia.pl/"
              }
            ]
          },
          "geo": {
            "lat": 50.2918,
            "lng": 19.0014,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Majaland Warsaw",
          "location": "Warsaw (Grodzisk Mazowiecki area)",
          "website": "https://www.majalandwarsaw.pl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.majalandwarsaw.pl/pl/bilety",
            "opening_periods": [
              {
                "label": "Regular operation (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "most_days",
                "notes": "Indoor park; hours vary by day — check calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Christmas / maintenance",
                "months": [
                  12,
                  1
                ],
                "notes": "May close selected days; see official calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Majaland Warsaw indoor theme park",
            "source": "none",
            "notes": "No suitable Wikimedia Commons image yet; use official press photo when you build the page."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Indoor park; no overnight stay inside the attraction.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.147,
            "lng": 20.618,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Zatorland",
          "location": "Zator",
          "website": "https://www.zatorland.com/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.zatorland.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by sub-park; confirm before visit."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Typical winter off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Zatorland family park, Zator, Poland",
            "source": "none",
            "notes": "Add Wikimedia or official press image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day visit; lodging in Zator/Kraków area.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.997,
            "lng": 19.421,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "dinosaurs",
            "educational",
            "europe",
            "kids",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "ליד אנרגילנדיה: דינוזאורים זזים, מיתולוגיה על מים ואזורי משחק לכל המשפחה.",
          "distance_from_city": "45-minute drive from Kraków",
          "price_level": "€€"
        },
        {
          "name": "Inwałd Park (Świat Marzeń)",
          "location": "Inwałd (near Wadowice)",
          "website": "https://www.inwaldpark.pl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.inwaldpark.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Several themed sub-parks; hours may differ."
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Miniature park may open limited days; verify calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Inwałd Park miniature and family attractions, Poland",
            "source": "none",
            "notes": "Add Commons or official image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Partner hotel on site (separate operator); day tickets common.",
              "official_packages_url": "https://www.inwaldpark.pl/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.779,
            "lng": 19.394,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "miniatures",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "מיניאטורות של אתרים מפורסמים, טירה, דינוזאורים ומבוך — קומפלקס משפחתי ליד ואדוביצה.",
          "distance_from_city": "55-minute drive from Kraków",
          "price_level": "€€"
        },
        {
          "name": "JuraPark Krasiejów",
          "location": "Krasiejów (near Opole)",
          "website": "https://jurapark-krasiejow.pl/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://jurapark-krasiejow.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:00",
                "closes": "19:00",
                "days": "daily",
                "notes": "Museum and outdoor trail may differ; check site."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Typical winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Verify annual reopening."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "JuraPark Krasiejów dinosaur park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day site; hotels in Opole region.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 50.967,
            "lng": 18.232,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "dinosaurs",
            "educational",
            "europe",
            "kids",
            "museum",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "מסלול בין מאות דגמי דינוזאורים, מוזיאון פרהיסטוריה וקולנוע תלת־ממד — ליד אופולה.",
          "distance_from_city": "45-minute drive from Opole",
          "price_level": "€€"
        },
        {
          "name": "Bałtowski Kompleks Turystyczny",
          "location": "Bałtów",
          "website": "https://www.baltow.eu/",
          "kind": "theme_park_zoo",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.baltow.eu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Large complex; sub-attractions may have own hours."
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Reduced operation; confirm before travel."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Bałtów tourist complex, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Rural resort area with multiple paid attractions.",
              "official_packages_url": "https://www.baltow.eu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Combo tickets may be sold on site or online.",
              "official_url": "https://www.baltow.eu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.121,
            "lng": 21.034,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "dinosaurs",
            "educational",
            "europe",
            "family_all_ages",
            "rope_park",
            "toddler_friendly",
            "young_kids",
            "zoo"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "קומפלקס ענק: דינוזאורים, ספארי, אושנריום, כפר מכשפות, פארק חבלים ורכבל.",
          "distance_from_city": "90-minute drive from Kraków",
          "price_level": "€€"
        },
        {
          "name": "Mandoria – Miasto Przygód",
          "location": "Rzgów (near Łódź)",
          "website": "https://mandoria.city/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://mandoria.city/",
            "opening_periods": [
              {
                "label": "Indoor operation (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "20:00",
                "days": "most_days",
                "notes": "Large indoor park; hours vary by day."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": null,
            "alt": "Mandoria indoor theme park, Rzgów, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Indoor day park; hotels in Łódź metropolitan area.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.437,
            "lng": 19.408,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק מקורה ענק בסגנון עיר מסחר מהמאה ה־16 — מתקנים, רכבות הרים מקורות ושיט בסירות.",
          "distance_from_city": "25-minute drive from Łódź",
          "price_level": "€€€"
        },
        {
          "name": "Suntago – Park of Poland",
          "location": "Wręcza (near Warsaw)",
          "website": "https://parkofpoland.com/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://parkofpoland.com/",
            "opening_periods": [
              {
                "label": "Indoor water park (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "09:00",
                "closes": "22:00",
                "days": "daily",
                "notes": "Spa zones may have different hours."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": null,
            "alt": "Suntago water park, Park of Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Resort/hotel complex associated with the water park.",
              "official_packages_url": "https://parkofpoland.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Stay + entry bundles are common; verify inclusions.",
              "official_url": "https://parkofpoland.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.198,
            "lng": 20.284,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "spa",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק מים מקורה ענק ליד ורשה — מגלשות, אזור טרופי וספא.",
          "distance_from_city": "45-minute drive from Warsaw",
          "price_level": "€€€"
        },
        {
          "name": "Julinek Park",
          "location": "Leszno (west of Warsaw)",
          "website": "https://julinek.pl/",
          "kind": "show_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://julinek.pl/",
            "opening_periods": [
              {
                "label": "Summer season (typical)",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Circus and outdoor program; confirm schedule."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "May run limited events; see official calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Julinek circus and family park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park / shows; nearby Mazovia towns for stays.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.251,
            "lng": 20.592,
            "precision": "approximate"
          },
          "tags": [
            "circus",
            "europe",
            "family_all_ages",
            "kids",
            "nature",
            "shows_live",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק קרקס וליצנות, חבלים, מתנפחים וטבע — מתאים ליום משפחתי ליד ורשה.",
          "distance_from_city": "40-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Dzielnica Filmowa",
          "location": "Zalesie Górne (south of Warsaw)",
          "website": "https://dzielnicafilmowa.pl/",
          "kind": "science_media_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://dzielnicafilmowa.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "weekends",
                "notes": "Often weekend-heavy; verify before visit."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter weekdays",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Seasonal operation; check calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Dzielnica Filmowa movie sets park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Outdoor sets and experiences; day visit.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.968,
            "lng": 21.048,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family_all_ages",
            "indoor",
            "kids",
            "media",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "תפאורות קולנוע, אפקטים וסצנות אקשן — חוויה ליד ורשה לאוהבי קולנוע.",
          "distance_from_city": "35-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Farma Iluzji",
          "location": "Trojanów (south-east of Warsaw)",
          "website": "https://www.farmailuzji.pl/",
          "kind": "science_media_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.farmailuzji.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Illusion rooms; peak queues possible."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Typical winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Verify reopening each spring."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Farma Iluzji illusion park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Indoor/outdoor exhibits; day visit.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.695,
            "lng": 21.798,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family_all_ages",
            "indoor",
            "interactive",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "אשליות אופטיות, חדרים הפוכים ומבוכים — אתר אינטראקטיבי לכל הגילאים.",
          "distance_from_city": "75-minute drive from Warsaw",
          "price_level": "€€"
        },
        {
          "name": "Magiczne Ogrody",
          "location": "Trzcianki (Lublin region)",
          "website": "https://magiczneogrody.pl/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://magiczneogrody.pl/",
            "opening_periods": [
              {
                "label": "Warm season",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Garden fantasy park; weather dependent."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Cold season",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Limited or closed; confirm on site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Magiczne Ogrody fantasy gardens, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Outdoor gardens and play; rural Lublin area.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 50.548,
            "lng": 22.823,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "fairy_tale",
            "garden",
            "indoor",
            "kids",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "גני פנטזיה עם דמויות אגדיות, מתקנים לקטנטנים ומסלולי הליכה.",
          "distance_from_city": "90-minute drive from Lublin",
          "price_level": "€"
        },
        {
          "name": "Sady Klemensa",
          "location": "Podkowa Leśna (west of Warsaw)",
          "website": "https://sadyklemensa.pl/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://sadyklemensa.pl/",
            "opening_periods": [
              {
                "label": "Warm season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "weekends",
                "notes": "Nature play orchard; confirm open days."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Late autumn / winter",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Often closed or very limited."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Sady Klemensa family orchard park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Local day outing; stays near Warsaw.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.126,
            "lng": 20.726,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "kids",
            "nature",
            "outdoor_nature",
            "playground",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק טבע עם משחקי עץ, יצירה ואזורי משחק — קרוב לוורשה.",
          "distance_from_city": "35-minute drive from Warsaw",
          "price_level": "€"
        },
        {
          "name": "Majaland Gdańsk",
          "location": "Gdańsk",
          "website": "https://www.majalandgdansk.pl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.majalandgdansk.pl/",
            "opening_periods": [
              {
                "label": "Indoor / mixed operation (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "most_days",
                "notes": "Indoor + outdoor parts; hours vary."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": null,
            "alt": "Majaland Gdańsk indoor family park",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park; Tricity hotels nearby.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 54.323,
            "lng": 18.755,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "kids",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק צבעוני לקטנים בטריאסיטי — מאיה הדבורה, מתקנים מקורים וחיצוניים.",
          "distance_from_city": "25-minute drive from Gdańsk centre",
          "price_level": "€€"
        },
        {
          "name": "Hossoland",
          "location": "Reda (north of Gdynia)",
          "website": "https://hossoland.pl/",
          "kind": "theme_park",
          "notes": "Large new coastal-themed park; verify 2025–2026 opening status and ride lineup on the official site.",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://hossoland.pl/",
            "opening_periods": [
              {
                "label": "Main season (typical)",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "20:00",
                "days": "daily",
                "notes": "New park; hours may change frequently in early seasons."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Confirm annual calendar."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Hossoland theme park, Reda, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park; Baltic coast resorts nearby.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 54.472,
            "lng": 18.285,
            "precision": "approximate"
          },
          "tags": [
            "coast",
            "europe",
            "family_all_ages",
            "new_venue",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "פארק חדש ליד החוף — אזורי נושא בהשראת הבלטי ומתקנים רבים.",
          "distance_from_city": "25-minute drive from Gdynia",
          "price_level": "€€€"
        },
        {
          "name": "Lunapark Sowiński",
          "location": "Władysławowo",
          "website": "https://lunapark-sowinski.com.pl/",
          "kind": "urban_funfair",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://lunapark-sowinski.com.pl/",
            "opening_periods": [
              {
                "label": "Summer season (typical)",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "11:00",
                "closes": "23:00",
                "days": "daily",
                "notes": "July–August often latest hours; token/ride pricing."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Classic seasonal fairground."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Lunapark Sowiński fairground, Władysławowo, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Seaside resort town; many family pensions.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": "Pay-per-ride model typical.",
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 54.793,
            "lng": 18.401,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "coast",
            "europe",
            "family_all_ages",
            "funfair",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "לונה־פארק קבוע ליד הים — גלגל ענק, רכבות הרים קלאסיות ואווירת יריד.",
          "distance_from_city": "45-minute drive from Gdynia",
          "price_level": "€"
        },
        {
          "name": "Deli Park",
          "location": "Trzebaw (near Poznań)",
          "website": "https://delipark.pl/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://delipark.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Outdoor trails and giant models."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Confirm reopening."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Deli Park nature and giant animal models, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Forest park day visit; Poznań for hotels.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.46,
            "lng": 16.936,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "educational",
            "europe",
            "kids",
            "nature",
            "outdoor_nature",
            "playground",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "דגמי חיות ענקיים, גשרים תלויים וטבע — יום קל ליד פוזנן.",
          "distance_from_city": "25-minute drive from Poznań",
          "price_level": "€"
        },
        {
          "name": "Majaland Kownaty",
          "location": "Kownaty (Lubuskie)",
          "website": "https://www.majaland.pl/kownaty",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.majaland.pl/kownaty",
            "opening_periods": [
              {
                "label": "Indoor / mixed operation (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "most_days",
                "notes": "Similar Majaland model; check daily hours."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": null,
            "alt": "Majaland Kownaty family theme park, Poland",
            "source": "none",
            "notes": null
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Regional day trip between Berlin and Poznań corridors.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.267,
            "lng": 15.13,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "kids",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": null
          },
          "card_teaser_he": "מג׳אלנד גדול לקטנים במערב פולין — מתקנים מקורים וחיצוניים ומאיה הדבורה.",
          "distance_from_city": "90-minute drive from Poznań",
          "price_level": "€€"
        },
        {
          "name": "Rabkoland",
          "location": "Rabka-Zdrój (Lesser Poland)",
          "website": "https://www.rabkoland.pl/",
          "kind": "family_theme_park",
          "notes": "Popular South-Poland family park focused on younger children and gentle rides.",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.rabkoland.pl/godziny-otwarcia/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4, 5, 6, 7, 8, 9, 10],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [11, 12, 1, 2, 3],
                "notes": "Exact calendar varies each year."
              }
            ]
          },
          "image": {
            "url": "https://www.rabkoland.pl/",
            "alt": "Family rides and attractions at Rabkoland, Poland",
            "source": "official_site",
            "file_page": "https://www.rabkoland.pl/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-visit park with many guesthouses in Rabka-Zdrój.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Seasonal promotions and family bundles may appear.",
              "official_url": "https://www.rabkoland.pl/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.6117,
            "lng": 19.9612,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "kids",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק משפחתי בדרום פולין שמכוון בדיוק לגילאי פעוטות וילדים קטנים, עם מתקנים עדינים ואווירה קלילה.",
          "distance_from_city": "70-minute drive from Kraków",
          "price_level": "€€"
        },
        {
          "name": "Dream Park Ochaby",
          "location": "Ochaby Wielkie (Silesia)",
          "website": "https://www.dreampark.pl/",
          "kind": "family_adventure_park",
          "notes": "Mixed family attraction park with dinosaurs, miniatures and activity zones.",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.dreampark.pl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4, 5, 6, 7, 8, 9, 10],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Winter reduced operation",
                "months": [11, 12, 1, 2, 3],
                "notes": "Some zones may open for events only."
              }
            ]
          },
          "image": {
            "url": "https://www.dreampark.pl/",
            "alt": "Dream Park Ochaby family attractions, Poland",
            "source": "official_site",
            "file_page": "https://www.dreampark.pl/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-trip park near Silesia/Cieszyn region towns.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Group and family packages vary seasonally.",
              "official_url": "https://www.dreampark.pl/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.8504,
            "lng": 18.7773,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "learn",
            "outdoor_nature",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק חוויות מגוון בשלזיה עם מתחמי דינוזאורים, מתקני משחק ואטרקציות שמתאימות ליום משפחתי מלא.",
          "distance_from_city": "75-minute drive from Kraków",
          "price_level": "€"
        },
        {
          "name": "Twinpigs Park Rozrywki",
          "location": "Żory (Silesia)",
          "website": "https://www.twinpigs.eu/",
          "kind": "theme_park",
          "notes": "Western-themed amusement park in Silesia with rides and live entertainment.",
          "schedule": {
            "timezone": "Europe/Warsaw",
            "hours_url": "https://www.twinpigs.eu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4, 5, 6, 7, 8, 9, 10],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Off-season events only",
                "months": [11, 12, 1, 2, 3],
                "notes": "Openings may be limited to selected dates."
              }
            ]
          },
          "image": {
            "url": "https://www.twinpigs.eu/",
            "alt": "Twinpigs western theme park in Zory, Poland",
            "source": "official_site",
            "file_page": "https://www.twinpigs.eu/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "City-based day trip; use Żory / Katowice area lodging.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Seasonal family passes and event bundles may be offered.",
              "official_url": "https://www.twinpigs.eu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 50.0324,
            "lng": 18.6842,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows",
            "teen_thrills",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק מערב פרוע בשלזיה עם מתקנים, מופעים ואווירה שונה מיתר הפארקים - מתאים גם לנוער וגם לילדים.",
          "distance_from_city": "80-minute drive from Kraków",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "AT",
      "name": "Austria",
      "flag": "🇦🇹",
      "parks": [
        {
          "name": "Familypark",
          "location": "St. Margarethen im Burgenland",
          "website": "https://www.familypark.at/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.familypark.at/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:30",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Margarethen%20-%20Familypark%2C%20Parkplatz.JPG",
            "alt": "Familypark amusement park, St. Margarethen im Burgenland, Austria",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:St.%20Margarethen%20-%20Familypark%2C%20Parkplatz.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park; lodging in Burgenland towns nearby.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check official site for any partner hotel + entry offers.",
              "official_url": "https://www.familypark.at/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.7365,
            "lng": 16.6511,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "55-minute drive from Vienna",
          "price_level": "€€",
          "card_teaser_he": "כשעה מווינה: פארק נקי ומעוצב נהדר למשפחות עם ילדים עד גיל 12, עם מתקנים נוחים וקצב רגוע."
        },
        {
          "name": "Prater (Wurstelprater)",
          "location": "Vienna",
          "website": "https://www.prater.at/",
          "kind": "urban_funfair",
          "notes": "Large permanent fair; different vibe from out-of-town parks.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.prater.at/en/visitor-information/opening-hours",
            "opening_periods": [
              {
                "label": "Fairground (grounds)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "11:00",
                "closes": "00:00",
                "days": "daily",
                "notes": "Public park; individual rides have own schedules and fees."
              },
              {
                "label": "Main ride season (typical)",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "22:00",
                "days": "daily",
                "notes": "Varies by attraction; weekends often later in summer."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Wien%2C%20Prater%2C%20Riesenrad%20--%202018%20--%203163.jpg",
            "alt": "Wiener Riesenrad giant wheel at the Prater, Vienna",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Wien%2C%20Prater%2C%20Riesenrad%20--%202018%20--%203163.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Public fairground in Vienna; hotels in the city, not inside the fair.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": "Pay-per-ride; no single park ticket like a gated resort.",
              "official_url": null
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.2164,
            "lng": 16.3956,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "120-minute drive from Vienna",
          "price_level": "€"
        },
        {
          "name": "Area 47",
          "location": "Ötztal Bahnhof, Tyrol",
          "website": "https://www.area47.at/",
          "kind": "outdoor_adventure",
          "notes": "Outdoor/adventure park, not classic rides-only.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.area47.at/en/opening-hours/",
            "opening_periods": [
              {
                "label": "Summer operation",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Activities staggered; water park hours may differ."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Outdoor site; verify annual opening date."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Area%2047%20panorama%2C%202016.jpg",
            "alt": "Outdoor adventure area at Area 47, Tyrol, Austria",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Area%2047%20panorama%2C%202016.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Lodge / group accommodation options exist in the outdoor resort area.",
              "official_packages_url": "https://www.area47.at/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Activity bundles (not always classic ride tickets)—verify activity packages on site.",
              "official_url": "https://www.area47.at/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.1254,
            "lng": 10.7982,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Vienna",
          "price_level": "€€"
        },
        {
          "name": "Fantasiana (Erlebnispark Straßwalchen)",
          "location": "Strasswalchen (near Salzburg)",
          "website": "https://www.fantasiana.at/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.erlebnispark.at/infos/oeffnungszeiten.html",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:30",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Erlebnispark%20Stra%C3%9Fwalchen%2C%20Eingang.JPG",
            "alt": "Entrance area at Fantasiana Erlebnispark Straßwalchen, Austria",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Erlebnispark%20Stra%C3%9Fwalchen%2C%20Eingang.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Typical day-visit amusement park.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.fantasiana.at/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.981,
            "lng": 13.244,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק קטן ליד זלצבורג עם סיפוריות מפתיעה, אנימטרוניקה מושקעת ואווירה שמרגישה הרבה יותר גדולה מגודלו.",
          "distance_from_city": "35-minute drive from Salzburg",
          "price_level": "€€"
        },
        {
          "name": "Drachental Family Park",
          "location": "Wildschönau (Oberau), Tyrol",
          "website": "https://www.drachental.at/",
          "kind": "alpine_coaster_park",
          "notes": "Year-round family destination with alpine coaster, adventure play zones and mini golf.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.drachental.at/",
            "opening_periods": [
              {
                "label": "Main operation",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season/weather; coaster may run longer in peak periods."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.drachental.at/",
            "alt": "Drachenflitzer alpine coaster at Drachental Family Park, Wildschonau, Austria",
            "source": "official_site",
            "file_page": "https://www.drachental.at/",
            "credit": "Official park website media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Stay in Wildschonau valley hotels/apartments; park is integrated into the valley resort area.",
              "official_packages_url": "https://www.wildschoenau.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Look for Wildschonau Card / regional bundle offers depending on season.",
              "official_url": "https://www.drachental.at/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.4478,
            "lng": 12.0346,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק משפחתי בטירול עם רכבת הרים אלפינית ארוכה, מיני-גולף ואווירת טבע מושלמת ליום אקשן קליל.",
          "distance_from_city": "150-minute drive from Salzburg",
          "price_level": "€€"
        },
        {
          "name": "Serfaus-Fiss-Ladis (Adventure Mountains)",
          "location": "Serfaus/Fiss/Ladis, Tyrol",
          "website": "https://www.serfaus-fiss-ladis.at/",
          "kind": "mountain_adventure_region",
          "notes": "Large alpine family region with multiple adventure zones including Skyswing and Fisser Flitzer.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.serfaus-fiss-ladis.at/en",
            "opening_periods": [
              {
                "label": "Summer adventure season",
                "months": [
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Mountain lifts, weather and attraction schedules vary by zone."
              },
              {
                "label": "Winter family activity season",
                "months": [
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "opens": "09:00",
                "closes": "16:30",
                "days": "daily",
                "notes": "Many attractions are snow/altitude dependent."
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Interseason maintenance windows",
                "months": [
                  5,
                  11
                ],
                "notes": "Some lifts/attractions close between seasons."
              }
            ]
          },
          "image": {
            "url": "https://www.serfaus-fiss-ladis.at/en",
            "alt": "Family adventure area in Serfaus-Fiss-Ladis, Tyrol, Austria",
            "source": "official_site",
            "file_page": "https://www.serfaus-fiss-ladis.at/en",
            "credit": "Official destination media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Full mountain resort region with extensive family lodging inventory.",
              "official_packages_url": "https://www.serfaus-fiss-ladis.at/en/Accommodation"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Regional cards and lift-inclusive offers change by season.",
              "official_url": "https://www.serfaus-fiss-ladis.at/en"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.0815,
            "lng": 10.6053,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "לא פארק אחד אלא אזור שלם שהופך למגרש משחקים אלפיני ענק, עם מתקני אקסטרים לצד מסלולים ידידותיים למשפחות.",
          "distance_from_city": "210-minute drive from Innsbruck",
          "price_level": "€€€"
        },
        {
          "name": "Sonnentherme Lutzmannsburg",
          "location": "Lutzmannsburg, Burgenland",
          "website": "https://www.sonnentherme.at/",
          "kind": "water_park",
          "notes": "Family-focused thermal and slide complex known for dedicated baby/toddler zones.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.sonnentherme.at/en",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "09:00",
                "closes": "21:00",
                "days": "daily",
                "notes": "Slides and specific pools may run on separate timetables."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.sonnentherme.at/en",
            "alt": "Indoor family water attractions at Sonnentherme Lutzmannsburg, Austria",
            "source": "official_site",
            "file_page": "https://www.sonnentherme.at/en",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Thermal resort hotels and family accommodation directly connected or nearby.",
              "official_packages_url": "https://www.sonnentherme.at/en/hotel"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Commonly sold as hotel + thermal access packages.",
              "official_url": "https://www.sonnentherme.at/en"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.4642,
            "lng": 16.6362,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק מים תרמי מוביל באוסטריה עם מתחמי תינוקות ופעוטות מעולים, מגלשות ארוכות ומענה מושלם לכל מזג אוויר.",
          "distance_from_city": "75-minute drive from Vienna",
          "price_level": "€€"
        },
        {
          "name": "Triassic Park (Waidring)",
          "location": "Steinplatte, Waidring, Tyrol",
          "website": "https://www.triassicpark.at/",
          "kind": "mountain_theme_park",
          "notes": "Dinosaur-themed alpine park reached by cable car with fossil, water and viewing attractions.",
          "schedule": {
            "timezone": "Europe/Vienna",
            "hours_url": "https://www.triassicpark.at/en",
            "opening_periods": [
              {
                "label": "Summer mountain season",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Lift and attraction operation depends on weather at altitude."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season closures",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Main Triassic summer attractions closed outside summer lift season."
              }
            ]
          },
          "image": {
            "url": "https://www.triassicpark.at/en",
            "alt": "Dinosaur themed attractions at Triassic Park on Steinplatte, Austria",
            "source": "official_site",
            "file_page": "https://www.triassicpark.at/en",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Stay in Waidring and nearby Tyrol/Saalach valley family hotels.",
              "official_packages_url": "https://www.triassicpark.at/en"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Usually sold as cable car + attraction combinations.",
              "official_url": "https://www.triassicpark.at/en"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.5553,
            "lng": 12.5761,
            "precision": "approximate"
          },
          "tags": [
            "dinosaur",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק דינוזאורים בגובה ההר עם עלייה ברכבל, תחנות חפירה, אזורי מים ונקודות תצפית דרמטיות על האלפים.",
          "distance_from_city": "60-minute drive from Salzburg",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "CZ",
      "name": "Czech Republic",
      "flag": "🇨🇿",
      "parks": [
        {
          "name": "Království lesa (Kingdom of the Forest)",
          "location": "Lipno nad Vltavou",
          "website": "https://www.kralovstvilesa.cz/",
          "kind": "nature_edutainment",
          "notes": "Near AT border; forest/nature-led experience.",
          "schedule": {
            "timezone": "Europe/Prague",
            "hours_url": "https://www.kralovstvilesa.cz/",
            "opening_periods": [
              {
                "label": "Spring–autumn season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Peak summer often longer hours; last entry before closing."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Confirm each year."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/WTB%2020220723%20Lipno%20Baumwipfelpfad%209874.jpg",
            "alt": "Treetop walkway near Lipno nad Vltavou, Czech Republic",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:WTB%2020220723%20Lipno%20Baumwipfelpfad%209874.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Attraction in the Lipno resort area; sleep in Lipno town/camping regionally.",
              "official_packages_url": "https://www.kralovstvilesa.cz/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check Lipno.cz / local accommodations for attraction bundles.",
              "official_url": "https://www.kralovstvilesa.cz/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.64,
            "lng": 14.229,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "outdoor_nature",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Prague",
          "price_level": "€"
        }
      ]
    },
    {
      "code": "IT",
      "name": "Italy",
      "flag": "🇮🇹",
      "parks": [
        {
          "name": "Gardaland Resort",
          "location": "Castelnuovo del Garda",
          "website": "https://www.gardaland.it/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.gardaland.it/en/plan-your-visit/opening-times-calendar/",
            "opening_periods": [
              {
                "label": "Peak summer",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "23:00",
                "days": "daily"
              },
              {
                "label": "Shoulder season",
                "months": [
                  3,
                  4,
                  5,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter weekdays",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Often weekends only or shorter days; see calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gardaland%20-%20Oblivion.jpg",
            "alt": "Oblivion: The Black Hole at Gardaland, Lake Garda, Italy",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Gardaland%20-%20Oblivion.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Official Gardaland Hotel, Adventure Hotel, on-site Glamping etc.",
              "official_packages_url": "https://www.gardaland.it/en/hotels/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Hotel packages typically bundle stay + park tickets on Gardaland channels.",
              "official_url": "https://www.gardaland.it/en/hotels/"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Gardaland annual products",
                "notes": "Season/annual products on official ticket shop.",
                "url": "https://www.gardaland.it/"
              }
            ]
          },
          "geo": {
            "lat": 45.4542,
            "lng": 10.714,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "resort",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "90-minute drive from Milan",
          "price_level": "€€€"
        },
        {
          "name": "Movieland Studios",
          "location": "Lazise, Lake Garda",
          "website": "https://www.movieland.it/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.movieland.it/en/plan-your-visit/opening-times/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Approximate; verify yearly."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Movieland%20Entrance.JPG",
            "alt": "Entrance to Movieland Studios, Lazise, Italy",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Movieland%20Entrance.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park on Lake Garda; stays in Lazise/Peschiera.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.movieland.it/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.4755,
            "lng": 10.7268,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "teen_only",
            "teen_thrills",
            "theme_park"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from Milan",
          "price_level": "€€"
        },
        {
          "name": "CanevaWorld / Caneva Aquapark",
          "location": "Lazise, Lake Garda",
          "website": "https://www.canevaworld.it/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.canevaworld.it/en/caneva-the-aquapark/",
            "opening_periods": [
              {
                "label": "Aquapark summer",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              },
              {
                "label": "Late spring / early autumn",
                "months": [
                  5,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season (water park)",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Aquapark is seasonal; other CanevaWorld venues may differ."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/AquaPark02.jpg",
            "alt": "Water slides at Caneva Aquapark, Lazise, Lake Garda, Italy",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:AquaPark02.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Water park / resort-style complex; hotels nearby (e.g. Lazise).",
              "official_packages_url": "https://www.canevaworld.it/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Combined park bundles sometimes sold—check CanevaWorld offers.",
              "official_url": "https://www.canevaworld.it/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.4738,
            "lng": 10.7265,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Milan",
          "price_level": "€€"
        },
        {
          "name": "Leolandia",
          "location": "Capriate San Gervasio (near Milan)",
          "website": "https://www.leolandia.it/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.leolandia.it/en/plan-your-visit/opening-calendar/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter maintenance",
                "months": [
                  1,
                  2
                ],
                "notes": "Often closed Jan–Feb; confirm calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Leolandia%20(34500690181).jpg",
            "alt": "Leolandia theme park, Capriate San Gervasio, Italy",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Leolandia%20(34500690181).jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park near Milan; no overnight inside the park.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.leolandia.it/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.628,
            "lng": 9.478,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "40-minute drive from Milan",
          "price_level": "€€",
          "card_teaser_he": "פארק מספר 1 לפעוטות באיטליה — הכל בקנה מידה לילדים קטנים, עם דמויות אהובות וחוויית יום רגועה."
        },
        {
          "name": "Mirabilandia",
          "location": "Ravenna",
          "website": "https://www.mirabilandia.it/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.mirabilandia.it/en/plan-your-visit/opening-times/",
            "opening_periods": [
              {
                "label": "Peak summer",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "23:00",
                "days": "daily"
              },
              {
                "label": "Shoulder",
                "months": [
                  4,
                  5,
                  9,
                  10
                ],
                "opens": "10:30",
                "closes": "17:30",
                "days": "weekends_and_holidays_or_daily_in_peak_spring",
                "notes": "Check calendar for exact open days."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Approximate."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Divertical01.JPG",
            "alt": "Divertical water coaster at Mirabilandia, Ravenna, Italy",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Divertical01.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Official hotels and camping associated with the Mirabilandia brand (see site).",
              "official_packages_url": "https://www.mirabilandia.it/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Official holiday products often include park access.",
              "official_url": "https://www.mirabilandia.it/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 44.3372,
            "lng": 12.2619,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Milan",
          "price_level": "€€"
        },
        {
          "name": "MagicLand",
          "location": "Valmontone",
          "website": "https://www.magicland.it/en/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Rome",
            "hours_url": "https://www.magicland.it/en/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "MagicLand, Italy",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.magicland.it/en/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.magicland.it/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 41.772,
            "lng": 12.919,
            "precision": "approximate"
          },
          "tags": [
            "dark_rides",
            "educational",
            "europe",
            "family",
            "family_all_ages",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "ליד רומא, עם מתקני חושך וטכנולוגיה מתקדמת בתוך תמה קסומה ששונה מהפארקים של צפון איטליה.",
          "distance_from_city": "45-minute drive from Rome",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "DE",
      "name": "Germany",
      "flag": "🇩🇪",
      "parks": [
        {
          "name": "Europa-Park",
          "location": "Rust",
          "website": "https://www.europapark.de/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.europapark.de/en/theme-park/info/plan-your-visit/europa-park-opening-hours-seasons",
            "opening_periods": [
              {
                "label": "Summer main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Closing extends to 19:00–20:00 in peak summer."
              },
              {
                "label": "Winter season (separate ticketed period)",
                "months": [
                  11,
                  12,
                  1
                ],
                "opens": "11:00",
                "closes": "19:00",
                "days": "selected_dates",
                "notes": "Winter Magic; not all areas open; see official winter calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "End-of-season maintenance (typical)",
                "months": [
                  1
                ],
                "notes": "Short full closure between winter and summer seasons varies by year."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Europa-Park%20(Rust).jpg",
            "alt": "Europa-Park theme park, Rust, Germany",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Europa-Park%20(Rust).jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Multiple resort hotels on site (e.g. bell rock, colosseo) + Rulantica area.",
              "official_packages_url": "https://www.europapark.de/en/hotels"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Hotel guests typically receive park admission rules/packages as published for the season.",
              "official_url": "https://www.europapark.de/en/hotels"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Annual pass products",
                "notes": "Annual-style products on Europa-Park ticket shop.",
                "url": "https://www.europapark.de/"
              }
            ]
          },
          "geo": {
            "lat": 48.266,
            "lng": 7.722,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "resort",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from Munich",
          "price_level": "€€€"
        },
        {
          "name": "Phantasialand",
          "location": "Brühl",
          "website": "https://www.phantasialand.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.phantasialand.de/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Often open until 20:00 in July–August."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  1,
                  2
                ],
                "notes": "Typically closed several weeks in Jan–Feb; verify."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Phantasialand%20Br%C3%BChl.JPG",
            "alt": "Phantasialand amusement park, Brühl, Germany",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Phantasialand%20Br%C3%BChl.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Matamba Hotel, Ling Bao, Charles Lindbergh adjoining the park.",
              "official_packages_url": "https://www.phantasialand.de/en/hotel"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Hotel packages sold with park admission per official rules.",
              "official_url": "https://www.phantasialand.de/en/hotel"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Phantasialand club / annual products",
                "notes": "See official tickets for current annual products.",
                "url": "https://www.phantasialand.de/"
              }
            ]
          },
          "geo": {
            "lat": 50.799,
            "lng": 6.878,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Munich",
          "price_level": "€€"
        },
        {
          "name": "Legoland Deutschland Resort",
          "location": "Günzburg",
          "website": "https://www.legoland.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.legoland.de/en/plan-your-visit/before-you-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Longer hours in summer holidays."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  12,
                  1,
                  2
                ],
                "notes": "Approximate off-season."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/2017-07-04%20Legoland%20Deutschland%20G%C3%BCnzburg%20(173).jpg",
            "alt": "Legoland Deutschland, Günzburg, Germany",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:2017-07-04%20Legoland%20Deutschland%20G%C3%BCnzburg%20(173).jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "LEGOLAND Feriendorf / partner hotels at the resort.",
              "official_packages_url": "https://www.legoland.de/en/plan-your-visit/overnight-stays/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Typical LEGOLAND overnight bundles include park days.",
              "official_url": "https://www.legoland.de/en/plan-your-visit/overnight-stays/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.4248,
            "lng": 10.301,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Munich",
          "price_level": "€€"
        },
        {
          "name": "Heide Park Resort",
          "location": "Soltau",
          "website": "https://www.heide-park.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.heide-park.de/en/plan-your-visit/opening-hours",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Often closed mid-November through winter; exact dates yearly."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Heide%20Park%20Colossos%20Start.jpg",
            "alt": "Colossos wooden coaster at Heide Park, Soltau, Germany",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Heide%20Park%20Colossos%20Start.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Holiday Camp / Abenteuerhotel on site.",
              "official_packages_url": "https://www.heide-park.de/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Official overnight offers usually combine stay + entry.",
              "official_url": "https://www.heide-park.de/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 53.0676,
            "lng": 9.8787,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Munich",
          "price_level": "€€"
        },
        {
          "name": "Hansa-Park",
          "location": "Sierksdorf",
          "website": "https://www.hansapark.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.hansapark.de/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Hansa-Park, Germany",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.hansapark.de/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.hansapark.de/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 54.074,
            "lng": 10.776,
            "precision": "approximate"
          },
          "tags": [
            "coastal",
            "europe",
            "family",
            "family_all_ages",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "על חוף הים הבלטי, עם נוף ים נדיר ותחושת פארק מושקעת בלי תורים ענקיים כמו בפארקים הגדולים.",
          "distance_from_city": "90-minute drive from Hamburg",
          "price_level": "€€"
        },
        {
          "name": "Tripsdrill",
          "location": "Cleebronn",
          "website": "https://www.tripsdrill.de/en/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.tripsdrill.de/en/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Tripsdrill, Germany",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.tripsdrill.de/en/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.tripsdrill.de/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.039,
            "lng": 9.022,
            "precision": "approximate"
          },
          "tags": [
            "culture",
            "europe",
            "family",
            "family_all_ages",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק ותיק עם קסם כפרי-גרמני, אווירה רגועה וחוויה משפחתית אותנטית שמתאימה במיוחד לקצב נינוח.",
          "distance_from_city": "50-minute drive from Stuttgart",
          "price_level": "€€"
        },
        {
          "name": "Bayern-Park",
          "location": "Reisbach",
          "website": "https://www.bayern-park.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.bayern-park.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Bayern-Park, Germany",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.bayern-park.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.bayern-park.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.533,
            "lng": 12.533,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family",
            "family_all_ages",
            "kids",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "בוואריה, עם שילוב נעים של מתקנים רכים לילדים ופינות עם בעלי חיים — מושלם למשפחות צעירות.",
          "distance_from_city": "80-minute drive from Munich",
          "price_level": "€€"
        },
        {
          "name": "Holiday Park",
          "location": "Haßloch",
          "website": "https://www.holidaypark.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.holidaypark.de/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Holiday Park, Germany",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.holidaypark.de/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.holidaypark.de/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.32,
            "lng": 8.31,
            "precision": "approximate"
          },
          "tags": [
            "coasters",
            "europe",
            "family",
            "teen_only",
            "teen_thrills"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "בית לרכבת Expedition GeForce האגדית, עם שילוב טוב בין מתקני אקסטרים לנוער לבין אזורים לקטנטנים.",
          "distance_from_city": "35-minute drive from Mannheim",
          "price_level": "€€"
        },
        {
          "name": "Movie Park Germany",
          "location": "Bottrop",
          "website": "https://www.movieparkgermany.de/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Berlin",
            "hours_url": "https://www.movieparkgermany.de/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Movie Park Germany, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.movieparkgermany.de/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.movieparkgermany.de/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.619,
            "lng": 6.972,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Düsseldorf",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "NL",
      "name": "Netherlands",
      "flag": "🇳🇱",
      "parks": [
        {
          "name": "Efteling",
          "location": "Kaatsheuvel",
          "website": "https://www.efteling.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.efteling.com/en/park/opening-hours-and-closing-days",
            "opening_periods": [
              {
                "label": "Peak summer",
                "months": [
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "20:00",
                "days": "daily"
              },
              {
                "label": "Rest of year (typical)",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "11:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary widely; many evening openings in spring/autumn."
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Scheduled closing days",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Listed on official closing-days page; not fully closed all winter."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Symbolica%20(Efteling)%2020170521.jpg",
            "alt": "Symbolica dark ride at Efteling, Kaatsheuvel, Netherlands",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Symbolica%20(Efteling)%2020170521.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Efteling Hotel, Loonsche Land cottages, Bosrijk on the domain.",
              "official_packages_url": "https://www.efteling.com/en/hotel"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Stay packages often include park access per product description.",
              "official_url": "https://www.efteling.com/en/hotel"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Efteling annual subscription (when offered)",
                "notes": "Check ticket shop for subscription/season products.",
                "url": "https://www.efteling.com/"
              }
            ]
          },
          "geo": {
            "lat": 51.6508,
            "lng": 5.0499,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from Amsterdam",
          "price_level": "€€"
        },
        {
          "name": "Walibi Holland",
          "location": "Biddinghuizen",
          "website": "https://www.walibi.nl/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.walibi.nl/en/practical-information/opening-hours",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Often 18:00–20:00 closings in July–August."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Halloween events may extend into Oct–Nov — check calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Walibi%20Holland%20Untamed%20first%20drop.jpg",
            "alt": "Untamed roller coaster at Walibi Holland, Biddinghuizen, Netherlands",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Walibi%20Holland%20Untamed%20first%20drop.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park; nearby town lodging.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Partner deals may appear seasonally.",
              "official_url": "https://www.walibi.nl/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.441,
            "lng": 5.763,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "teen_only",
            "teen_thrills",
            "theme_park"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from Amsterdam",
          "price_level": "€€"
        },
        {
          "name": "Duinrell",
          "location": "Wassenaar",
          "website": "https://www.duinrell.com/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.duinrell.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Duinrell, Netherlands",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.duinrell.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.duinrell.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.155,
            "lng": 4.384,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "resort",
            "teen_thrills",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "מפורסם בזכות Tikibad — פארק מים מקורה עצום — ולצידו פארק מתקנים נוח מאוד ליום משפחתי בלי עומס.",
          "distance_from_city": "35-minute drive from Amsterdam",
          "price_level": "€€€"
        },
        {
          "name": "Toverland",
          "location": "Sevenum",
          "website": "https://www.toverland.com/en/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.toverland.com/en/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Toverland, Netherlands",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.toverland.com/en/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.toverland.com/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.407,
            "lng": 6.173,
            "precision": "approximate"
          },
          "tags": [
            "coasters",
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "שילוב חכם של אזורים מקורים ופתוחים — פתרון מעולה לימים גשומים בהולנד, עם רכבת העץ Troy המעולה.",
          "distance_from_city": "70-minute drive from Eindhoven",
          "price_level": "€€"
        },
        {
          "name": "Julianatoren",
          "location": "Apeldoorn",
          "website": "https://www.julianatoren.nl/",
          "kind": "urban_theme_park",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.julianatoren.nl/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Julianatoren, Netherlands",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.julianatoren.nl/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.julianatoren.nl/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.22,
            "lng": 5.947,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "europe",
            "family",
            "family_all_ages",
            "indoor",
            "kids",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "מותאם במיוחד לגילאי 2–10: קטן, בטוח וקל להתמצאות כך שההורים שומרים קשר עין כמעט מכל נקודה.",
          "distance_from_city": "70-minute drive from Amsterdam",
          "price_level": "€"
        },
        {
          "name": "Slagharen",
          "location": "Slagharen",
          "website": "https://www.slagharen.com/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Amsterdam",
            "hours_url": "https://www.slagharen.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Slagharen, Netherlands",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.slagharen.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.slagharen.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 52.624,
            "lng": 6.555,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family",
            "family_all_ages",
            "resort",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "קונספט מערב פרוע עם לינה בבקתות עץ ותחושת הרפתקה חזקה לילדים — חוויה שונה ומלאת אופי.",
          "distance_from_city": "95-minute drive from Amsterdam",
          "price_level": "€€€"
        }
      ]
    },
    {
      "code": "FR",
      "name": "France",
      "flag": "🇫🇷",
      "parks": [
        {
          "name": "Disneyland Paris",
          "location": "Marne-la-Vallée",
          "website": "https://www.disneylandparis.com/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.disneylandparis.com/en-us/park-hours/",
            "opening_periods": [
              {
                "label": "Disneyland Park (typical peak)",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "08:30",
                "closes": "23:00",
                "days": "daily",
                "notes": "Walt Disney Studios has separate hours; Extra Magic Time shifts opens."
              },
              {
                "label": "Shoulder season",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "09:30",
                "closes": "20:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Disneyland%20Pary%C5%BC%202013%20(13).JPG",
            "alt": "Sleeping Beauty Castle at Disneyland Park, Disneyland Paris, Marne-la-Vallée, France",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Disneyland%20Pary%C5%BC%202013%20(13).JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Disney Hotels at Disneyland Paris, partner hotels, Disney Village area.",
              "official_packages_url": "https://www.disneylandparis.com/en-us/hotels/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Hotel + ticket packages are standard; some offers include Extra Magic Time.",
              "official_url": "https://www.disneylandparis.com/en-us/hotel-and-ticket-packages/"
            },
            "discounts_and_passes": [
              {
                "type": "annual_pass",
                "name": "Disneyland Paris annual pass (Magic Plus, etc.)",
                "notes": "Official annual pass program on Disneyland Paris.",
                "url": "https://www.disneylandparis.com/"
              }
            ]
          },
          "geo": {
            "lat": 48.867,
            "lng": 2.7836,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "resort",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "75-minute drive from Paris",
          "price_level": "€€€"
        },
        {
          "name": "Parc Astérix",
          "location": "Plailly",
          "website": "https://www.parcasterix.fr/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.parcasterix.fr/en/prepare-your-visit/opening-hours-and-calendar",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Often 20:00 close in peak summer."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Christmas season sometimes partially open — check calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/D%C3%A9corations%20d'Halloween%20au%20Parc%20Ast%C3%A9rix.jpg",
            "alt": "Parc Astérix near Plailly, France",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:D%C3%A9corations%20d'Halloween%20au%20Parc%20Ast%C3%A9rix.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Hotels Les Quais de Lutèce, Les Trois Hiboux at the resort.",
              "official_packages_url": "https://www.parcasterix.fr/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Hotel + tickets bundles on official channel.",
              "official_url": "https://www.parcasterix.fr/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.1342,
            "lng": 2.5704,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "90-minute drive from Paris",
          "price_level": "€€"
        },
        {
          "name": "Puy du Fou",
          "location": "Les Epesses",
          "website": "https://www.puydufou.com/",
          "kind": "show_park",
          "notes": "Historic shows/stunt spectaculars; different format from coaster parks.",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.puydufou.com/en/plan-your-stay/opening-times-and-calendar",
            "opening_periods": [
              {
                "label": "Main season (daytime shows)",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "09:30",
                "closes": "19:00",
                "days": "daily",
                "notes": "Evening Cinéscénie on select dates (separate ticket)."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Closed season",
                "months": [
                  1,
                  2,
                  3,
                  11,
                  12
                ],
                "notes": "Christmas events may run on select dates."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Puy%20du%20Fou.-%20La%20Cit%C3%A9%20M%C3%A9di%C3%A9vale%20(1).JPG",
            "alt": "Medieval cité area at Puy du Fou, Les Epesses, France",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Puy%20du%20Fou.-%20La%20Cit%C3%A9%20M%C3%A9di%C3%A9vale%20(1).JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Themed on-domain hotels (e.g. Cité Nocturne offerings—verify current range).",
              "official_packages_url": "https://www.puydufou.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Stay packages often bundle shows/park access per product.",
              "official_url": "https://www.puydufou.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.892,
            "lng": -0.9316,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Paris",
          "price_level": "€€"
        },
        {
          "name": "Futuroscope",
          "location": "Chasseneuil-du-Poitou (Poitiers)",
          "website": "https://www.futuroscope.com/",
          "kind": "science_media_park",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.futuroscope.com/en/practical-information/opening-times/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "most_days",
                "notes": "Open most of year; evening events in peak season."
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "January weekdays / maintenance",
                "months": [
                  1
                ],
                "notes": "May close some days; verify calendar."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Futuroscope%20%40%20Poitiers%20(8381150553).jpg",
            "alt": "Futuroscope park near Poitiers, France",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Futuroscope%20%40%20Poitiers%20(8381150553).jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Hotel on site / overnight formulas exist.",
              "official_packages_url": "https://www.futuroscope.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Check stay + ticket formulas on the official site.",
              "official_url": "https://www.futuroscope.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.6695,
            "lng": 0.3714,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "90-minute drive from Bordeaux",
          "price_level": "€€",
          "card_teaser_he": "פארק מולטימדיה עם חוויות 4D/5D/VR במקום דגש על רכבות קלאסיות — בחירה מעולה למשפחות שאוהבות טכנולוגיה."
        },
        {
          "name": "Nigloland",
          "location": "Dolancourt",
          "website": "https://www.nigloland.fr/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.nigloland.fr/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Nigloland, France",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.nigloland.fr/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.nigloland.fr/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.264,
            "lng": 4.63,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family",
            "family_all_ages",
            "forest",
            "shows_live",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק משפחתי בבעלות פרטית באזור שמפיין, מוקף יער ירוק וידוע בזמני המתנה קצרים במיוחד.",
          "distance_from_city": "150-minute drive from Paris",
          "price_level": "€€"
        },
        {
          "name": "Walibi Rhône-Alpes",
          "location": "Les Avenières Veyrins-Thuellin",
          "website": "https://www.walibi.com/fr/rhone-alpes",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.walibi.com/fr/rhone-alpes",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Walibi Rhône-Alpes, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.walibi.com/fr/rhone-alpes"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.walibi.com/fr/rhone-alpes"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.632,
            "lng": 5.628,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "90-minute drive from Lyon",
          "price_level": "€€"
        },
        {
          "name": "Parc Spirou Provence",
          "location": "Monteux",
          "website": "https://www.parcspirou.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Paris",
            "hours_url": "https://www.parcspirou.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Parc Spirou Provence, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.parcspirou.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.parcspirou.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 44.045,
            "lng": 4.989,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "110-minute drive from Marseille",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "ES",
      "name": "Spain",
      "flag": "🇪🇸",
      "parks": [
        {
          "name": "PortAventura World / Ferrari Land",
          "location": "Salou",
          "website": "https://www.portaventuraworld.com/",
          "kind": "theme_park_resort",
          "schedule": {
            "timezone": "Europe/Madrid",
            "hours_url": "https://www.portaventuraworld.com/en/opening-times/",
            "opening_periods": [
              {
                "label": "Peak summer",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "23:00",
                "days": "daily",
                "notes": "Ferrari Land hours differ; night events in peak season."
              },
              {
                "label": "Shoulder",
                "months": [
                  3,
                  4,
                  5,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "January–February weekdays",
                "months": [
                  1,
                  2
                ],
                "notes": "Shorter hours or closed some days; water park seasonal."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/PortAventura.%20Abril%202014.jpg",
            "alt": "PortAventura Park, Salou, Spain",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:PortAventura.%20Abril%202014.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "PortAventura Hotels on the resort (Gold River, Caribe, etc.).",
              "official_packages_url": "https://www.portaventuraworld.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Standard resort model: hotel + multi-park tickets available.",
              "official_url": "https://www.portaventuraworld.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 41.087,
            "lng": 1.157,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "resort",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "120-minute drive from Barcelona",
          "price_level": "€€€"
        },
        {
          "name": "Parque Warner Madrid",
          "location": "San Martín de la Vega (near Madrid)",
          "website": "https://www.parquewarner.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Madrid",
            "hours_url": "https://www.parquewarner.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Parque Warner Madrid, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.parquewarner.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.parquewarner.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 40.2307,
            "lng": -3.5947,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Madrid",
          "price_level": "€€€"
        }
      ]
    },
    {
      "code": "GB",
      "name": "United Kingdom",
      "flag": "🇬🇧",
      "parks": [
        {
          "name": "Alton Towers",
          "location": "Alton, Staffordshire",
          "website": "https://www.altontowers.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/London",
            "hours_url": "https://www.altontowers.com/plan-your-visit/opening-times/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Often 18:00–20:00 close in school holidays."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Christmas/New Year event may open select dates."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Smiler%20at%20Alton%20Towers.png",
            "alt": "The Smiler roller coaster at Alton Towers, UK",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:The%20Smiler%20at%20Alton%20Towers.png",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Alton Towers Hotel, CBeebies Hotel, Stargazing Pods, etc.",
              "official_packages_url": "https://www.altontowers.com/plan-your-visit/short-breaks/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Merlin short breaks typically bundle B&B + theme park entry.",
              "official_url": "https://www.altontowers.com/plan-your-visit/short-breaks/"
            },
            "discounts_and_passes": [
              {
                "type": "multi_attraction",
                "name": "Merlin Annual Pass / MAP (UK)",
                "notes": "Separate product; check Merlin Annual Pass terms for Alton Towers and blackout dates.",
                "url": "https://www.merlinannualpass.co.uk/"
              }
            ]
          },
          "geo": {
            "lat": 52.985,
            "lng": -1.881,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from London",
          "price_level": "€€"
        },
        {
          "name": "Thorpe Park",
          "location": "Chertsey",
          "website": "https://www.thorpepark.com/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/London",
            "hours_url": "https://www.thorpepark.com/plan-a-visit/opening-times/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Fright Nights extend season into autumn."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Thorpe%20Stealth.jpg",
            "alt": "Stealth launch coaster at Thorpe Park, UK",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Thorpe%20Stealth.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Thorpe Shark Hotel on site.",
              "official_packages_url": "https://www.thorpepark.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Short breaks with entry often sold via Merlin.",
              "official_url": "https://www.thorpepark.com/"
            },
            "discounts_and_passes": [
              {
                "type": "multi_attraction",
                "name": "Merlin Annual Pass (UK)",
                "notes": "Check terms for Thorpe Park inclusion.",
                "url": "https://www.merlinannualpass.co.uk/"
              }
            ]
          },
          "geo": {
            "lat": 51.405,
            "lng": -0.513,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "teen_only",
            "teen_thrills",
            "theme_park"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "120-minute drive from London",
          "price_level": "€€"
        },
        {
          "name": "Legoland Windsor",
          "location": "Windsor",
          "website": "https://www.legoland.co.uk/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/London",
            "hours_url": "https://www.legoland.co.uk/plan-your-visit/days-and-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily",
                "notes": "Often 18:00–19:00 in peak summer."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Legoland at Christmas on select dates."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Miniland%20at%20Legoland%20Windsor%2C%20Berkshire%20-%20geograph.org.uk%20-%203126859.jpg",
            "alt": "Miniland at Legoland Windsor, UK",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Miniland%20at%20Legoland%20Windsor%2C%20Berkshire%20-%20geograph.org.uk%20-%203126859.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "LEGOLAND Resort Hotel and Castle Hotel on site.",
              "official_packages_url": "https://www.legoland.co.uk/short-breaks/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Short breaks typically include park tickets.",
              "official_url": "https://www.legoland.co.uk/short-breaks/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.464,
            "lng": -0.599,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "105-minute drive from London",
          "price_level": "€€"
        },
        {
          "name": "Chessington World of Adventures",
          "location": "Chessington",
          "website": "https://www.chessington.com/",
          "kind": "theme_park_zoo",
          "schedule": {
            "timezone": "Europe/London",
            "hours_url": "https://www.chessington.com/plan-your-visit/opening-times/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Winter’s Tail event on select dates."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20entrance%20to%20Chessington%20World%20of%20Adventures%20-%20geograph.org.uk%20-%203228534.jpg",
            "alt": "Entrance to Chessington World of Adventures, UK",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:The%20entrance%20to%20Chessington%20World%20of%20Adventures%20-%20geograph.org.uk%20-%203228534.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Safari Hotel and other resort stays on site.",
              "official_packages_url": "https://www.chessington.com/short-breaks/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Merlin short breaks with zoo/theme park entry.",
              "official_url": "https://www.chessington.com/short-breaks/"
            },
            "discounts_and_passes": [
              {
                "type": "multi_attraction",
                "name": "Merlin Annual Pass",
                "notes": "Verify Chessington inclusion and exclusions.",
                "url": "https://www.merlinannualpass.co.uk/"
              }
            ]
          },
          "geo": {
            "lat": 51.345,
            "lng": -0.318,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "educational",
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from London",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "BE",
      "name": "Belgium",
      "flag": "🇧🇪",
      "parks": [
        {
          "name": "Plopsaland De Panne",
          "location": "De Panne",
          "website": "https://www.plopsalanddepanne.be/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Brussels",
            "hours_url": "https://www.plopsalanddepanne.be/en/practical/opening-hours",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  1,
                  2,
                  3
                ],
                "notes": "Approximate."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Wickieland%20shops%20and%20restaurants%2C%20Plopsaland%20De%20Panne%2C%202021.jpg",
            "alt": "Wickieland area at Plopsaland De Panne, Belgium",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Wickieland%20shops%20and%20restaurants%2C%20Plopsaland%20De%20Panne%2C%202021.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Plopsa Hotel / resort stays in the Plopsa network.",
              "official_packages_url": "https://www.plopsalanddepanne.be/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Plopsa bundles vary by park—check official stay offers.",
              "official_url": "https://www.plopsalanddepanne.be/"
            },
            "discounts_and_passes": [
              {
                "type": "multi_park",
                "name": "Plopsa annual products (when offered)",
                "notes": "Belgian Plopsa parks may offer pass products—verify site.",
                "url": "https://www.plopsa.be/"
              }
            ]
          },
          "geo": {
            "lat": 51.0767,
            "lng": 2.5977,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Brussels",
          "price_level": "€€"
        },
        {
          "name": "Walibi Belgium",
          "location": "Wavre",
          "website": "https://www.walibi.be/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Brussels",
            "hours_url": "https://www.walibi.be/en/practical-information/opening-hours",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Halloween may extend season."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Walibi%20Belgium%20Entr%C3%A9e.jpg",
            "alt": "Entrance to Walibi Belgium, Wavre",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Walibi%20Belgium%20Entr%C3%A9e.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park; lodging in Brabant Wallon region.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.walibi.be/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 50.701,
            "lng": 4.595,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "teen_only",
            "teen_thrills",
            "theme_park"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "120-minute drive from Brussels",
          "price_level": "€€"
        },
        {
          "name": "Bobbejaanland",
          "location": "Lichtaart",
          "website": "https://www.bobbejaanland.be/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Brussels",
            "hours_url": "https://www.bobbejaanland.be/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Bobbejaanland, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.bobbejaanland.be/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.bobbejaanland.be/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 51.199,
            "lng": 5.114,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Brussels",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "SE",
      "name": "Sweden",
      "flag": "🇸🇪",
      "parks": [
        {
          "name": "Liseberg",
          "location": "Gothenburg",
          "website": "https://www.liseberg.se/",
          "kind": "urban_theme_park",
          "schedule": {
            "timezone": "Europe/Stockholm",
            "hours_url": "https://www.liseberg.se/en/home/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Summer season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "12:00",
                "closes": "22:00",
                "days": "daily",
                "notes": "Afternoon/evening focus; hours vary by month."
              },
              {
                "label": "Christmas at Liseberg",
                "months": [
                  11,
                  12
                ],
                "opens": "15:00",
                "closes": "22:00",
                "days": "selected_dates",
                "notes": "Separate winter event; not all rides."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "January–March (typical)",
                "months": [
                  1,
                  2,
                  3
                ],
                "notes": "Main park closed; winter market is Nov–Dec only."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Helix%20by%20night-Liseberg-G%C3%B6teborg.jpeg",
            "alt": "Helix roller coaster at Liseberg, Gothenburg, Sweden",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Helix%20by%20night-Liseberg-G%C3%B6teborg.jpeg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Urban park; Grand Curiosa / Liseberg hotels adjacent but verify separate booking.",
              "official_packages_url": "https://www.liseberg.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Hotel packages may include admission—see official.",
              "official_url": "https://www.liseberg.com/"
            },
            "discounts_and_passes": [
              {
                "type": "season_pass",
                "name": "Liseberg season products",
                "notes": "Season pass / card products sold on site.",
                "url": "https://www.liseberg.com/"
              }
            ]
          },
          "geo": {
            "lat": 57.696,
            "lng": 11.995,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Stockholm",
          "price_level": "€"
        },
        {
          "name": "Gröna Lund",
          "location": "Stockholm",
          "website": "https://www.gronalund.com/",
          "kind": "urban_theme_park",
          "schedule": {
            "timezone": "Europe/Stockholm",
            "hours_url": "https://www.gronalund.com/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Spring–autumn daily operation",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "15:00",
                "closes": "23:00",
                "days": "daily",
                "notes": "Opens earlier in peak summer; concert nights differ."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact opening day in spring varies."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gr%C3%B6na%20Lund%20June%202015.jpg",
            "alt": "Gröna Lund amusement park, Stockholm, Sweden",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Gr%C3%B6na%20Lund%20June%202015.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "City amusement park; hotels in Stockholm.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": "https://www.gronalund.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 59.3233,
            "lng": 18.0954,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Stockholm",
          "price_level": "€"
        }
      ]
    },
    {
      "code": "NO",
      "name": "Norway",
      "flag": "🇳🇴",
      "parks": [
        {
          "name": "TusenFryd",
          "location": "Vinterbro (near Oslo)",
          "website": "https://www.tusenfryd.no/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Oslo",
            "hours_url": "https://www.tusenfryd.no/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:30",
                "closes": "17:00",
                "days": "daily",
                "notes": "Later closing in July."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Halloween event may run late Oct."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/TusenfrydEntrance.jpg",
            "alt": "Entrance area at TusenFryd, Norway",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:TusenfrydEntrance.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day park near Oslo.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.tusenfryd.no/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 59.6376,
            "lng": 11.075,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Oslo",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "DK",
      "name": "Denmark",
      "flag": "🇩🇰",
      "parks": [
        {
          "name": "Tivoli Gardens",
          "location": "Copenhagen",
          "website": "https://www.tivoli.dk/",
          "kind": "urban_garden_rides",
          "notes": "Historic city-centre pleasure gardens + rides.",
          "schedule": {
            "timezone": "Europe/Copenhagen",
            "hours_url": "https://www.tivoli.dk/en/practical-information/opening-hours-and-closing-days/",
            "opening_periods": [
              {
                "label": "Spring–summer–autumn seasons",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "11:00",
                "closes": "23:00",
                "days": "daily",
                "notes": "Fridays often later; season split into named seasons."
              },
              {
                "label": "Christmas at Tivoli",
                "months": [
                  11,
                  12
                ],
                "opens": "11:00",
                "closes": "22:00",
                "days": "selected_dates",
                "notes": "Separate winter season dates."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Between seasons (typical)",
                "months": [
                  1,
                  2,
                  3
                ],
                "notes": "Closed several weeks Jan–Mar; exact dates vary."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Fountain%20in%20Tivoli%20Gardens%2C%20Copenhagen%2C%2020220618%201307%207156.jpg",
            "alt": "Fountain in Tivoli Gardens, Copenhagen, Denmark",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Fountain%20in%20Tivoli%20Gardens%2C%20Copenhagen%2C%2020220618%201307%207156.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Historic city park; Tivoli Hotel is partner/nearby (separate building).",
              "official_packages_url": "https://www.tivoli.dk/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Hotel + ride combinations may be offered—check Tivoli Hotel packages.",
              "official_url": "https://www.tivoli.dk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 55.6735,
            "lng": 12.5683,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "shows_live",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "90-minute drive from Copenhagen",
          "price_level": "€"
        },
        {
          "name": "Bakken",
          "location": "Klampenborg (near Copenhagen)",
          "website": "https://www.bakken.dk/",
          "kind": "urban_funfair",
          "notes": "World’s oldest operating amusement park (founded 1583).",
          "schedule": {
            "timezone": "Europe/Copenhagen",
            "hours_url": "https://www.bakken.dk/english/practical-information/opening-hours/",
            "opening_periods": [
              {
                "label": "Spring–autumn",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "12:00",
                "closes": "22:00",
                "days": "daily",
                "notes": "Ride operation afternoon/evening early season."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed",
                "months": [
                  11,
                  12,
                  1,
                  2
                ],
                "notes": "Approximate."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rutschebanen%20p%C3%A5%20Bakken.jpg",
            "alt": "Rutschebanen wooden coaster at Bakken, Klampenborg, Denmark",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Rutschebanen%20p%C3%A5%20Bakken.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Oldest fair; day visits.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": "https://www.bakken.dk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 55.7702,
            "lng": 12.5748,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Copenhagen",
          "price_level": "€"
        }
      ]
    },
    {
      "code": "PT",
      "name": "Portugal",
      "flag": "🇵🇹",
      "parks": [
        {
          "name": "Zoomarine Algarve",
          "location": "Guia, Algarve",
          "website": "https://www.zoomarine.pt/",
          "kind": "marine_zoo_rides",
          "notes": "Marine park + some rides; not pure coaster destination.",
          "schedule": {
            "timezone": "Europe/Lisbon",
            "hours_url": "https://www.zoomarine.pt/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:30",
                "days": "daily",
                "notes": "Longer in peak summer."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure (typical)",
                "months": [
                  12,
                  1,
                  2
                ],
                "notes": "Verify yearly."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Zoomarine%20Algarve%2029.JPG",
            "alt": "Zoomarine Algarve, Portugal",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Zoomarine%20Algarve%2029.JPG",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Marine park; lodging in Algarve region.",
              "official_packages_url": "https://www.zoomarine.pt/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Regional packages may exist; verify official partners.",
              "official_url": "https://www.zoomarine.pt/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 37.0948,
            "lng": -8.1776,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Lisbon",
          "price_level": "€€"
        },
        {
          "name": "Aquashow Park Hotel",
          "location": "Quarteira (Algarve)",
          "website": "https://www.aquashowparkhotel.com/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Lisbon",
            "hours_url": "https://www.aquashowparkhotel.com/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Aquashow Park Hotel, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.aquashowparkhotel.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.aquashowparkhotel.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 37.089,
            "lng": -8.114,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "shows_live",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "25-minute drive from Faro",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "GR",
      "name": "Greece",
      "flag": "🇬🇷",
      "parks": [
        {
          "name": "Allou! Fun Park",
          "location": "Athens area",
          "website": "https://www.allou.gr/",
          "kind": "urban_amusement_park",
          "schedule": {
            "timezone": "Europe/Athens",
            "hours_url": "https://www.allou.gr/",
            "opening_periods": [
              {
                "label": "Evening operation (typical)",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "17:00",
                "closes": "23:30",
                "days": "daily",
                "notes": "Often weekend-only or shorter in shoulder months."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closed (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Outdoor park; confirm each season."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Allou! Fun Park amusement area, Athens",
            "source": "none",
            "notes": "No suitable Wikimedia Commons overview; add official or CC image when building the page."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Urban Athens funfair style; no overnight in park.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": "https://www.allou.gr/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 37.987,
            "lng": 23.691,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Athens",
          "price_level": "€"
        }
      ]
    },
    {
      "code": "CH",
      "name": "Switzerland",
      "flag": "🇨🇭",
      "parks": [
        {
          "name": "Conny-Land",
          "location": "Lipperswil",
          "website": "https://www.connyland.ch/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Zurich",
            "hours_url": "https://www.connyland.ch/en/plan-your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter closure",
                "months": [
                  12,
                  1,
                  2
                ],
                "notes": "Approximate."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Schiffschaukel%20im%20Conny-Land.jpg",
            "alt": "Swing ride at Conny-Land, Lipperswil, Switzerland",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Schiffschaukel%20im%20Conny-Land.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day amusement park in Switzerland.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.connyland.ch/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.634,
            "lng": 8.908,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "135-minute drive from Zurich",
          "price_level": "€€"
        },
        {
          "name": "Swiss Vapeur Parc",
          "location": "Le Bouveret",
          "website": "https://www.swiss-vapeur-parc.ch/",
          "kind": "miniature_railway_park",
          "notes": "Steam trains; smaller scale than major EU parks.",
          "schedule": {
            "timezone": "Europe/Zurich",
            "hours_url": "https://www.swiss-vapeur-parc.ch/en/your-visit/opening-hours/",
            "opening_periods": [
              {
                "label": "Operating season (typical)",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "17:30",
                "days": "daily",
                "notes": "Steam days schedule; check calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Closed season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Approximate."
              }
            ]
          },
          "image": {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Swiss%20Vapeur%20Parc.Miniature%20Train%20Park.jpg",
            "alt": "Miniature steam railway at Swiss Vapeur Parc, Le Bouveret, Switzerland",
            "source": "wikimedia_commons",
            "file_page": "https://commons.wikimedia.org/wiki/File:Swiss%20Vapeur%20Parc.Miniature%20Train%20Park.jpg",
            "credit": "Wikimedia Commons — see file page for author and license."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Small steam railway attraction; no overnight.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": null,
              "official_url": "https://www.swiss-vapeur-parc.ch/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.3848,
            "lng": 6.884,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family_all_ages",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "75-minute drive from Zurich",
          "price_level": "€"
        }
      ]
    },
    {
      "code": "SK",
      "name": "Slovakia",
      "flag": "🇸🇰",
      "parks": [
        {
          "name": "Donovalkovo",
          "location": "Donovaly",
          "website": "https://www.donovalkovo.sk/",
          "kind": "urban_theme_park",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.donovalkovo.sk/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Donovalkovo, Slovakia",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.donovalkovo.sk/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.donovalkovo.sk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.881,
            "lng": 19.231,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "edutainment",
            "europe",
            "family_all_ages",
            "indoor",
            "kids",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "\"עיר בירה לילדים\" שבה הם מקבלים רישיון נהיגה משלהם ומנהלים מיני-עיר חווייתית ומשחקית.",
          "distance_from_city": "150-minute drive from Bratislava",
          "price_level": "€"
        },
        {
          "name": "Habakuky",
          "location": "Donovaly",
          "website": "https://www.habakuky.eu/",
          "kind": "nature_edutainment",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.habakuky.eu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Habakuky, Slovakia",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.habakuky.eu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://www.habakuky.eu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.88,
            "lng": 19.229,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "family",
            "folk",
            "indoor",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "כפר אגדות עממי עם בנייה מסורתית מעץ וקש, אווירת \"פעם\" וקסם מקומי עם ציון וייב גבוה במיוחד.",
          "distance_from_city": "150-minute drive from Bratislava",
          "price_level": "€"
        },
        {
          "name": "Tatralandia",
          "location": "Liptovský Mikuláš",
          "website": "https://www.tatralandia.sk/en/",
          "kind": "water_park",
          "notes": "Largest water park complex in Central Europe with tropical halls and year-round operation zones.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.tatralandia.sk/en/opening-hours/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "10:00",
                "closes": "21:00",
                "days": "daily",
                "notes": "Outdoor areas and slide towers may run with seasonal timetables."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.tatralandia.sk/en/",
            "alt": "Tatralandia aquapark pools and slides in Liptovsky Mikulas, Slovakia",
            "source": "official_site",
            "file_page": "https://www.tatralandia.sk/en/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Holiday Village and partner accommodation near the aquapark.",
              "official_packages_url": "https://www.tatralandia.sk/en/accommodation/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Frequent aquapark + stay bundles and wellness add-ons.",
              "official_url": "https://www.tatralandia.sk/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.1047,
            "lng": 19.5717,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק המים הגדול במרכז אירופה: עשרות מגלשות, בריכות תרמיות ואולם טרופי בטמפרטורה קבועה לכל עונות השנה.",
          "distance_from_city": "35-minute drive from Poprad",
          "price_level": "€€"
        },
        {
          "name": "Bešeňová",
          "location": "Bešeňová",
          "website": "https://www.besenova.com/en/",
          "kind": "thermal_water_park",
          "notes": "Thermal complex known for mineral-rich water and a calmer family pace plus slide zone.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.besenova.com/en/opening-hours/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "09:00",
                "closes": "21:00",
                "days": "daily",
                "notes": "Selected pools and slides can shift by season."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.besenova.com/en/",
            "alt": "Thermal pools and slides at Besenova resort, Slovakia",
            "source": "official_site",
            "file_page": "https://www.besenova.com/en/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Resort accommodation near thermal pools.",
              "official_packages_url": "https://www.besenova.com/en/accommodation/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Thermal and wellness packages are commonly offered.",
              "official_url": "https://www.besenova.com/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.1009,
            "lng": 19.4339,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "מים תרמיים עשירים במינרלים, אווירה רגועה יותר מטטרלנדיה ואזור אדרנלין עם מגלשות גדולות למי שרוצה אקשן.",
          "distance_from_city": "30-minute drive from Liptovský Mikuláš",
          "price_level": "€€"
        },
        {
          "name": "AquaCity Poprad",
          "location": "Poprad",
          "website": "https://aquacity.sk/en/",
          "kind": "thermal_resort",
          "notes": "Eco-focused thermal resort at the foot of the High Tatras, known for evening water-light shows.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://aquacity.sk/en/opening-hours/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "08:00",
                "closes": "22:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://aquacity.sk/en/",
            "alt": "AquaCity Poprad thermal pools near High Tatras, Slovakia",
            "source": "official_site",
            "file_page": "https://aquacity.sk/en/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Integrated hotel and wellness resort next to pools.",
              "official_packages_url": "https://aquacity.sk/en/accommodation/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Stay + thermal access bundles are typical.",
              "official_url": "https://aquacity.sk/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.0569,
            "lng": 20.2963,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "ריזורט אקולוגי למרגלות הטטרה עם בריכות תרמיות פנימיות וחיצוניות ומופעי אור-לייזר בערב בתוך המים.",
          "distance_from_city": "5-minute drive from Poprad center",
          "price_level": "€€€"
        },
        {
          "name": "Aquapark Lipany",
          "location": "Lipany",
          "website": "https://www.aquaparklipany.sk/",
          "kind": "water_park",
          "notes": "Budget-friendly eastern Slovakia aquapark with recent indoor expansion and modern slide hardware.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.aquaparklipany.sk/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "10:00",
                "closes": "20:00",
                "days": "daily",
                "notes": "Operating hours vary by season and school periods."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.aquaparklipany.sk/",
            "alt": "Aquapark Lipany indoor and outdoor pools, Slovakia",
            "source": "official_site",
            "file_page": "https://www.aquaparklipany.sk/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-visit water park with nearby town lodging options.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Primarily day tickets; check seasonal offers.",
              "official_url": "https://www.aquaparklipany.sk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.1533,
            "lng": 20.9636,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "יהלום משתלם במזרח סלובקיה עם אזור מקורה חדש, מגלשות איכותיות ואווירה פחות עמוסה.",
          "distance_from_city": "35-minute drive from Prešov",
          "price_level": "€"
        },
        {
          "name": "Vadaš Thermal Resort (Štúrovo)",
          "location": "Štúrovo",
          "website": "https://www.vadas.sk/en/",
          "kind": "thermal_resort",
          "notes": "Large-capacity summer thermal resort near the Hungarian border.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.vadas.sk/en/opening-hours/",
            "opening_periods": [
              {
                "label": "Main summer season",
                "months": [5,6,7,8,9],
                "opens": "09:00",
                "closes": "20:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Winter reduced operation",
                "months": [10,11,12,1,2,3,4],
                "notes": "Selected thermal facilities operate outside peak season."
              }
            ]
          },
          "image": {
            "url": "https://www.vadas.sk/en/",
            "alt": "Vadas thermal pools and summer area in Sturovo, Slovakia",
            "source": "official_site",
            "file_page": "https://www.vadas.sk/en/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "On-site accommodation and bungalows available in season.",
              "official_packages_url": "https://www.vadas.sk/en/accommodation/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Summer packages vary by accommodation type.",
              "official_url": "https://www.vadas.sk/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.8036,
            "lng": 18.7206,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "קומפלקס ענק לקיץ ליד הגבול ההונגרי, עם קיבולת גבוהה, בריכות רבות ואחלה פתרון למשפחות בימים חמים.",
          "distance_from_city": "95-minute drive from Bratislava",
          "price_level": "€€"
        },
        {
          "name": "Winter Wonderland (Bratislava)",
          "location": "Bratislava",
          "website": "https://www.winterwonderland.sk/",
          "kind": "seasonal_light_park",
          "notes": "Seasonal light amusement experience, usually active from autumn through winter.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.winterwonderland.sk/",
            "opening_periods": [
              {
                "label": "Seasonal operation",
                "months": [9,10,11,12,1],
                "opens": "16:00",
                "closes": "22:00",
                "days": "selected_weekends_and_holidays",
                "notes": "Exact dates and themes change each year."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season",
                "months": [2,3,4,5,6,7,8],
                "notes": "Event-based park, not year-round."
              }
            ]
          },
          "image": {
            "url": "https://www.winterwonderland.sk/",
            "alt": "Winter Wonderland light installations in Bratislava, Slovakia",
            "source": "official_site",
            "file_page": "https://www.winterwonderland.sk/",
            "credit": "Official event media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "City event format; use Bratislava hotels.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Ticket bundles may vary by season.",
              "official_url": "https://www.winterwonderland.sk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.1486,
            "lng": 17.1077,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "shows",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק אורות עונתי בברטיסלבה עם מיצבי ענק ותמות מתחלפות - מעולה לערב משפחתי קליל בעיר.",
          "distance_from_city": "Within Bratislava",
          "price_level": "€€"
        },
        {
          "name": "DinoPark (Bratislava & Košice)",
          "location": "Bratislava Zoo and Košice Zoo",
          "website": "https://www.dinopark.sk/",
          "kind": "dino_park",
          "notes": "Life-size moving dinosaur models and 3D cinema zones inside city zoo compounds.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://www.dinopark.sk/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4,5,6,7,8,9,10],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Winter limited operation",
                "months": [11,12,1,2,3],
                "notes": "Check each city location separately."
              }
            ]
          },
          "image": {
            "url": "https://www.dinopark.sk/",
            "alt": "Moving dinosaur models at DinoPark Slovakia",
            "source": "official_site",
            "file_page": "https://www.dinopark.sk/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day activity inside zoo compounds in Bratislava and Košice.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": "Usually sold as add-on/combined zoo entry.",
              "official_url": "https://www.dinopark.sk/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.1686,
            "lng": 17.0756,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "learn",
            "outdoor_nature",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "דינופארק עם דגמי דינוזאורים זזים וקולנוע תלת־ממד - חוויה בטוחה לילדים שאוהבים יצורים פרהיסטוריים.",
          "distance_from_city": "Within Bratislava / Košice zoo areas",
          "price_level": "€"
        },
        {
          "name": "Bachledka Treetop Walk",
          "location": "Ždiar (Bachledova dolina)",
          "website": "https://chodnikkorunamistromov.sk/en/",
          "kind": "nature_edutainment",
          "notes": "Treetop educational walk with panoramic tower slide and child-friendly activity zones.",
          "schedule": {
            "timezone": "Europe/Bratislava",
            "hours_url": "https://chodnikkorunamistromov.sk/en/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [5,6,7,8,9,10],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Winter operation",
                "months": [12,1,2,3],
                "opens": "09:00",
                "closes": "16:00",
                "days": "daily",
                "notes": "Weather dependent in mountain conditions."
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Shoulder-season maintenance",
                "months": [4,11],
                "notes": "Lift and walkway schedules vary."
              }
            ]
          },
          "image": {
            "url": "https://chodnikkorunamistromov.sk/en/",
            "alt": "Bachledka treetop walk and spiral tower, Slovakia",
            "source": "official_site",
            "file_page": "https://chodnikkorunamistromov.sk/en/",
            "credit": "Official attraction media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Regional mountain lodging around Ždiar and Tatra foothills.",
              "official_packages_url": "https://bachledka.sk/en/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Look for cable car + walkway combo tickets.",
              "official_url": "https://chodnikkorunamistromov.sk/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 49.2744,
            "lng": 20.3089,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "learn",
            "outdoor_nature",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "שביל צמרות בין נופי הטטרה עם מגדל ספירלה ומגלשה ארוכה - שילוב נהדר של טבע, תצפיות ומשחק לילדים.",
          "distance_from_city": "45-minute drive from Poprad",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "HU",
      "name": "Hungary",
      "flag": "🇭🇺",
      "parks": [
        {
          "name": "Aquaworld Resort Budapest",
          "location": "Budapest",
          "website": "https://www.aquaworldresort.hu/en",
          "kind": "water_park_resort",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://www.aquaworldresort.hu/en/aquaworld",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "08:00",
                "closes": "22:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Maintenance windows (if announced)",
                "months": [
                  1,
                  2
                ],
                "notes": "Indoor complex is generally open year-round; verify slides/areas availability."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Aquaworld Resort Budapest indoor water park dome",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Full resort hotel connected to the aquapark.",
              "official_packages_url": "https://www.aquaworldresort.hu/en"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Entry is often bundled with stay packages; confirm room plan details.",
              "official_url": "https://www.aquaworldresort.hu/en"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.6002,
            "lng": 19.1155,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "europe",
            "family_all_ages",
            "water_park",
            "indoor",
            "resort",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק מים ענק ומקורה בבודפשט עם כיפה מרשימה, עשרות מגלשות ואזור מותאם במיוחד לקטנטנים - פתרון מעולה לכל עונה.",
          "distance_from_city": "About 25–35 minutes from central Budapest",
          "price_level": "€€"
        },
        {
          "name": "Annagora Aquapark",
          "location": "Balatonfured",
          "website": "https://annagora.com/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://annagora.com/",
            "opening_periods": [
              {
                "label": "Summer season",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Typical off-season",
                "months": [
                  9,
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4,
                  5
                ],
                "notes": "Main operation is usually summer-focused."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Annagora Aquapark near Lake Balaton",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-visit aquapark with many nearby Balaton stays.",
              "official_packages_url": "https://annagora.com/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check Balatonfured hotels for seasonal bundle offers.",
              "official_url": "https://annagora.com/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.9619,
            "lng": 17.8822,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "water_park",
            "seasonal_only",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק קיץ ליד אגם בלטון עם בריכות גלים ומגלשות גדולות - בחירה מעולה ליום מים משפחתי בקיץ.",
          "distance_from_city": "Within Balatonfured, about 90 minutes from Budapest",
          "price_level": "€€"
        },
        {
          "name": "Aquarena",
          "location": "Mogyorod",
          "website": "https://aquarena.hu/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://aquarena.hu/",
            "opening_periods": [
              {
                "label": "Main summer season",
                "months": [
                  6,
                  7,
                  8
                ],
                "opens": "09:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Off-season",
                "months": [
                  9,
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4,
                  5
                ],
                "notes": "Usually runs as an outdoor summer waterpark."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Aquarena slides in Mogyorod",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-visit aquapark near Budapest and Hungaroring.",
              "official_packages_url": "https://aquarena.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check seasonal promotions and family tickets.",
              "official_url": "https://aquarena.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.5989,
            "lng": 19.2367,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "water_park",
            "seasonal_only",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק מים חיצוני ענק ליד בודפשט עם הרבה מגלשות מהירות ואווירת אדרנלין - מעולה לילדים גדולים ולנוער.",
          "distance_from_city": "About 30 minutes from Budapest",
          "price_level": "€€"
        },
        {
          "name": "Palatinus Strand",
          "location": "Margaret Island, Budapest",
          "website": "https://palatinusstrand.hu/",
          "kind": "urban_water_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://palatinusstrand.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "09:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Shoulder / winter operation varies",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Thermal areas may operate differently by season."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Palatinus Strand water and thermal complex in Budapest",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Urban day-visit water and thermal complex in Margaret Island.",
              "official_packages_url": "https://palatinusstrand.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "City cards and seasonal local offers may apply.",
              "official_url": "https://palatinusstrand.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.5316,
            "lng": 19.0467,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "europe",
            "family_all_ages",
            "water_park",
            "young_kids",
            "toddler_friendly"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "באי מרגיט בלב בודפשט: שילוב מוצלח של בריכות, מגלשות ומים תרמיים - יום מים בלי לצאת מהעיר.",
          "distance_from_city": "Within central Budapest",
          "price_level": "€€"
        },
        {
          "name": "Hungarospa Aquapark",
          "location": "Hajduszoboszlo",
          "website": "https://hungarospa.hu/en/",
          "kind": "spa_water_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://hungarospa.hu/en/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "09:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Thermal complex in operation, aquapark parts vary",
                "months": [
                  10,
                  11,
                  12,
                  1,
                  2,
                  3,
                  4
                ],
                "notes": "Spa zones may remain open while outdoor slides are seasonal."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Hungarospa thermal and aquapark complex",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Large spa destination with nearby and partner accommodation options.",
              "official_packages_url": "https://hungarospa.hu/en/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Area hotels often offer spa + aquapark package combinations.",
              "official_url": "https://hungarospa.hu/en/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.4464,
            "lng": 21.3966,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "water_park",
            "resort",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "מתחם ספא ענק עם אזור אקווה עשיר ומגלשות אקסטרים - יעד חזק למשפחות שמשלבות מים ופינוק.",
          "distance_from_city": "About 2.5 hours from Budapest",
          "price_level": "€€"
        },
        {
          "name": "Tarzan Park",
          "location": "Budapest",
          "website": "https://tarzanpark.hu/",
          "kind": "family_adventure_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://tarzanpark.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter/off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Open days vary in colder months; verify before arrival."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Tarzan Park outdoor playground in Budapest",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Urban day park designed for family play sessions.",
              "official_packages_url": "https://tarzanpark.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": false,
              "notes": "Typically standalone day-entry tickets.",
              "official_url": "https://tarzanpark.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.5523,
            "lng": 19.0802,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק משחקים חיצוני ענק ומאובטח לילדים, עם חלוקה לפי גילאים - בחירה מצוינת למשפחות עם קטנים.",
          "distance_from_city": "About 25 minutes from central Budapest",
          "price_level": "€"
        },
        {
          "name": "Budapest Zoo & Holnemvolt Var",
          "location": "Budapest",
          "website": "https://zoobudapest.com/en",
          "kind": "zoo_theme_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://zoobudapest.com/en",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "opens": "09:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal hours",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Opening hours and activity zones vary by season."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Budapest Zoo and Holnemvolt Var area",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Historic city zoo with family attractions and animal areas.",
              "official_packages_url": "https://zoobudapest.com/en"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Look for family and seasonal ticket combinations.",
              "official_url": "https://zoobudapest.com/en"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.5186,
            "lng": 19.0818,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "city_urban",
            "europe",
            "family_all_ages",
            "learn",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "גן חיות היסטורי עם מתחם משפחתי בסגנון אגדות, קרוסלות ורכיבות קלות - מושלם ליום רגוע בעיר.",
          "distance_from_city": "Within central Budapest",
          "price_level": "€€"
        },
        {
          "name": "Sobri Joska Adventure Park",
          "location": "Bakony Region",
          "website": "https://sobri.hu/",
          "kind": "outdoor_adventure",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://sobri.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Typical winter closure",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Outdoor operation is strongly seasonal."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Sobri Joska Adventure Park in the Bakony area",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Adventure-focused nature park with nearby regional stays.",
              "official_packages_url": "https://sobri.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check official pages for combo/activity tickets.",
              "official_url": "https://sobri.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.203,
            "lng": 17.647,
            "precision": "approximate"
          },
          "tags": [
            "adventure",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק אקסטרים בטבע עם אומגות מעל מים, מסלולי מכשולים ופעילויות אתגר - מתאים במיוחד לילדים גדולים ולנוער.",
          "distance_from_city": "About 2 hours from Budapest",
          "price_level": "€€"
        },
        {
          "name": "Zemplen Adventure Park",
          "location": "Satoraljaujhely",
          "website": "https://zemplenkalandpark.hu/",
          "kind": "mountain_adventure",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://zemplenkalandpark.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter schedule varies",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Cable systems and rides can run on seasonal timetables."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Zemplen Adventure Park bobsled and cable attractions",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Mountain adventure zone with regional stays in northern Hungary.",
              "official_packages_url": "https://zemplenkalandpark.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check ride bundles and family offers by season.",
              "official_url": "https://zemplenkalandpark.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 48.3977,
            "lng": 21.6531,
            "precision": "approximate"
          },
          "tags": [
            "adventure",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק הרפתקאות בצפון הונגריה עם מסלול בובסלד קיצי ארוך ורכבל - נוף נהדר והרבה אקשן.",
          "distance_from_city": "About 3.5 hours from Budapest",
          "price_level": "€€"
        },
        {
          "name": "Katica Tanya",
          "location": "Patca",
          "website": "https://katicatanya.hu/",
          "kind": "farm_family_park",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://katicatanya.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Winter timetable",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Indoor play facilities may operate on reduced schedules."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Katica Tanya family farm and play center",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Family farm-style leisure center with indoor and outdoor activities.",
              "official_packages_url": "https://katicatanya.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Check family ticket options and seasonal deals.",
              "official_url": "https://katicatanya.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.6562,
            "lng": 17.6646,
            "precision": "approximate"
          },
          "tags": [
            "animals_zoo",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "חווה משפחתית ידידותית לילדים עם שילוב של משחקים מקורים ופעילויות חוץ - מושלם לגיל הרך.",
          "distance_from_city": "About 2.5 hours from Budapest",
          "price_level": "€"
        },
        {
          "name": "Zobori Adventure Park",
          "location": "Balatonszabadi",
          "website": "https://zoborikalandpark.hu/",
          "kind": "outdoor_adventure",
          "schedule": {
            "timezone": "Europe/Budapest",
            "hours_url": "https://zoborikalandpark.hu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily"
              },
              {
                "label": "Off-season",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "opens": "10:00",
                "closes": "17:00",
                "days": "selected_weekends_and_holidays"
              }
            ],
            "shutdown_periods": [
              {
                "type": "reduced_operation",
                "label": "Seasonal variation",
                "months": [
                  1,
                  2,
                  11,
                  12
                ],
                "notes": "Check official calendar before visit."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Zobori Adventure Park, Hungary",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image if available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://zoborikalandpark.hu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "May vary by season and package type.",
              "official_url": "https://zoborikalandpark.hu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.91,
            "lng": 18.067,
            "precision": "approximate"
          },
          "tags": [
            "adventure",
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "מעל אזור אגם בלטון: שילוב מצוין של מתקני אקסטרים יבשים לצד מגלשות מים ענקיות ליום מלא אקשן.",
          "distance_from_city": "70-minute drive from Budapest",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "FI",
      "name": "Finland",
      "flag": "🇫🇮",
      "parks": [
        {
          "name": "Linnanmäki",
          "location": "Helsinki",
          "website": "https://www.linnanmaki.fi/",
          "kind": "urban_theme_park",
          "schedule": {
            "timezone": "Europe/Helsinki",
            "hours_url": "https://www.linnanmaki.fi/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Linnanmäki, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.linnanmaki.fi/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.linnanmaki.fi/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 60.1882,
            "lng": 24.9402,
            "precision": "approximate"
          },
          "tags": [
            "city",
            "city_urban",
            "europe",
            "family_all_ages",
            "teen_thrills",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "Within Helsinki",
          "price_level": "€€"
        },
        {
          "name": "Särkänniemi",
          "location": "Tampere",
          "website": "https://www.sarkanniemi.fi/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Helsinki",
            "hours_url": "https://www.sarkanniemi.fi/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Särkänniemi, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.sarkanniemi.fi/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.sarkanniemi.fi/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 61.503,
            "lng": 23.746,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "Within Tampere",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "RO",
      "name": "Romania",
      "flag": "🇷🇴",
      "parks": [
        {
          "name": "Salina Turda",
          "location": "Turda",
          "website": "https://salinaturda.eu/",
          "kind": "nature_edutainment",
          "notes": "Historic salt mine with underground amusement and boat rides; verify hours for families.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://salinaturda.eu/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Salina Turda salt mine, Romania",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://salinaturda.eu/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://salinaturda.eu/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 46.573,
            "lng": 23.784,
            "precision": "approximate"
          },
          "tags": [
            "educational",
            "europe",
            "indoor",
            "outdoor_nature",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "45-minute drive from Cluj-Napoca",
          "price_level": "€"
        },
        {
          "name": "Divertiland Water Park",
          "location": "Chiajna (near Bucharest)",
          "website": "https://www.divertiland.ro/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://www.divertiland.ro/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Divertiland Water Park, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.divertiland.ro/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.divertiland.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 44.451,
            "lng": 25.975,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "30-minute drive from Bucharest",
          "price_level": "€€"
        },
        {
          "name": "Therme București",
          "location": "Balotești (near Otopeni Airport, Bucharest)",
          "website": "https://therme.ro/",
          "kind": "water_park",
          "notes": "Large botanical-style thermal complex with family slides zone, relaxation zone and premium sauna/wellness areas.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://therme.ro/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "10:00",
                "closes": "23:00",
                "days": "daily",
                "notes": "Zone-specific access and hours vary by ticket type and age."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://therme.ro/",
            "alt": "Therme Bucuresti indoor tropical pools and slides",
            "source": "official_site",
            "file_page": "https://therme.ro/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Excellent day activity near Otopeni airport hotels.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Airport-area package combinations may exist via hotel partners.",
              "official_url": "https://therme.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 44.6279,
            "lng": 26.0784,
            "precision": "approximate"
          },
          "tags": [
            "city_urban",
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "קומפלקס מים טרופי ענק ליד שדה התעופה של בוקרשט - מעולה ליום ראשון/אחרון בטיול עם ילדים.",
          "distance_from_city": "10-minute drive from Otopeni Airport",
          "price_level": "€€€"
        },
        {
          "name": "Aquapark Nymphaea",
          "location": "Oradea",
          "website": "https://www.aquapark-nymphaea.ro/",
          "kind": "water_park",
          "notes": "Modern indoor-outdoor aquapark in western Romania, popular stop for cross-border family road trips.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://www.aquapark-nymphaea.ro/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "10:00",
                "closes": "22:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.aquapark-nymphaea.ro/",
            "alt": "Aquapark Nymphaea pools and slides in Oradea, Romania",
            "source": "official_site",
            "file_page": "https://www.aquapark-nymphaea.ro/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day-visit aquapark with broad lodging options in Oradea.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Look for city-break bundles in Oradea.",
              "official_url": "https://www.aquapark-nymphaea.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 47.0428,
            "lng": 21.9259,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "theme_park",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק מים מודרני באורדאה עם בריכות ומגלשות איכותיות - תחנה נוחה למי שנכנס מרכב מהונגריה.",
          "distance_from_city": "10-minute drive from Oradea center",
          "price_level": "€€"
        },
        {
          "name": "Dino Parc Râșnov",
          "location": "Râșnov (near Brașov)",
          "website": "https://www.dinoparc.ro/",
          "kind": "dino_park",
          "notes": "Large dinosaur park with life-size models, immersive cinema and family activity trails.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://www.dinoparc.ro/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4,5,6,7,8,9,10],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              },
              {
                "label": "Winter season",
                "months": [11,12,1,2,3],
                "opens": "10:00",
                "closes": "17:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://www.dinoparc.ro/",
            "alt": "Dino Parc Rasnov dinosaur attractions in Romania",
            "source": "official_site",
            "file_page": "https://www.dinoparc.ro/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Ideal for Brașov/Râșnov star-trip itineraries.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Combined local attraction tickets may vary.",
              "official_url": "https://www.dinoparc.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.5902,
            "lng": 25.4596,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "learn",
            "outdoor_nature",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק הדינוזאורים הגדול באזור עם עשרות דגמים בגודל אמיתי וחוויית יום נהדרת למשפחות ליד בראשוב.",
          "distance_from_city": "25-minute drive from Brașov",
          "price_level": "€€"
        },
        {
          "name": "Arsenal Park",
          "location": "Orăștie",
          "website": "https://arsenalpark.ro/",
          "kind": "adventure_resort",
          "notes": "Military-themed adventure resort with family action activities and on-site lodging concepts.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://arsenalpark.ro/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "09:00",
                "closes": "20:00",
                "days": "daily",
                "notes": "Activity-specific hours vary by season and weather."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://arsenalpark.ro/",
            "alt": "Arsenal Park adventure resort in Orastie, Romania",
            "source": "official_site",
            "file_page": "https://arsenalpark.ro/",
            "credit": "Official resort media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Resort stay options are part of the core concept.",
              "official_packages_url": "https://arsenalpark.ro/cazare/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Action/activity bundles and stay packages are common.",
              "official_url": "https://arsenalpark.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.8243,
            "lng": 23.2055,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "ריזורט אקשן ייחודי עם קונספט צבאי, פעילויות אתגר ולינה במקום - שילוב מעולה למשפחות עם מתבגרים.",
          "distance_from_city": "30-minute drive from Deva",
          "price_level": "€€"
        },
        {
          "name": "Parc Aventura Brașov",
          "location": "Brașov",
          "website": "https://parc-aventura.ro/",
          "kind": "outdoor_adventure",
          "notes": "Major rope-and-zip adventure park with progressive routes for different ages and confidence levels.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://parc-aventura.ro/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [4,5,6,7,8,9,10],
                "opens": "10:00",
                "closes": "19:00",
                "days": "daily"
              }
            ],
            "shutdown_periods": [
              {
                "type": "partial_closure",
                "label": "Winter weather limits",
                "months": [11,12,1,2,3],
                "notes": "Opening depends on weather and safety conditions."
              }
            ]
          },
          "image": {
            "url": "https://parc-aventura.ro/",
            "alt": "Parc Aventura Brasov rope courses and zip lines",
            "source": "official_site",
            "file_page": "https://parc-aventura.ro/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": false,
              "description": "Day adventure near Brașov city lodging.",
              "official_packages_url": null
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": "Group/family bundles may vary by season.",
              "official_url": "https://parc-aventura.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.6228,
            "lng": 25.6309,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "teen_thrills",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק חבלים ענק עם מסלולים מדורגים לכל רמה - דרך מצוינת ליום אקטיבי בחיק הטבע ליד בראשוב.",
          "distance_from_city": "20-minute drive from Brașov center",
          "price_level": "€"
        },
        {
          "name": "Edenland Park",
          "location": "Balotești (near Bucharest)",
          "website": "https://edenland.ro/",
          "kind": "outdoor_adventure",
          "notes": "Forest adventure park with treehouses, rope courses and family activity zones near Bucharest.",
          "schedule": {
            "timezone": "Europe/Bucharest",
            "hours_url": "https://edenland.ro/",
            "opening_periods": [
              {
                "label": "Year-round operation",
                "months": [1,2,3,4,5,6,7,8,9,10,11,12],
                "opens": "10:00",
                "closes": "20:00",
                "days": "daily",
                "notes": "Specific activities may close in severe weather."
              }
            ],
            "shutdown_periods": []
          },
          "image": {
            "url": "https://edenland.ro/",
            "alt": "Edenland Park treehouse and adventure areas near Bucharest",
            "source": "official_site",
            "file_page": "https://edenland.ro/",
            "credit": "Official park media."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": true,
              "description": "Treehouse lodging is a signature family experience.",
              "official_packages_url": "https://edenland.ro/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": true,
              "notes": "Treehouse + activities combinations available.",
              "official_url": "https://edenland.ro/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 44.6318,
            "lng": 26.0704,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "outdoor_nature",
            "theme_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "card_teaser_he": "פארק יער ליד בוקרשט עם בתי עץ ללינה, אומגות ומסלולי חבלים - בול ליום טבע אקטיבי עם ילדים.",
          "distance_from_city": "20-minute drive from Otopeni Airport",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "HR",
      "name": "Croatia",
      "flag": "🇭🇷",
      "parks": [
        {
          "name": "Istralandia",
          "location": "Brtonigla (Istria)",
          "website": "https://www.istralandia.hr/",
          "kind": "water_park",
          "schedule": {
            "timezone": "Europe/Zagreb",
            "hours_url": "https://www.istralandia.hr/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Istralandia, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.istralandia.hr/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.istralandia.hr/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 45.352,
            "lng": 13.608,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "indoor",
            "toddler_friendly",
            "water_park",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "60-minute drive from Pula",
          "price_level": "€€"
        }
      ]
    },
    {
      "code": "IE",
      "name": "Ireland",
      "flag": "🇮🇪",
      "parks": [
        {
          "name": "Emerald Park",
          "location": "Ashbourne (near Dublin)",
          "website": "https://www.emeraldpark.ie/",
          "kind": "theme_park",
          "schedule": {
            "timezone": "Europe/Dublin",
            "hours_url": "https://www.emeraldpark.ie/",
            "opening_periods": [
              {
                "label": "Main season",
                "months": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ],
                "opens": "10:00",
                "closes": "18:00",
                "days": "daily",
                "notes": "Hours vary by season; confirm on official calendar."
              }
            ],
            "shutdown_periods": [
              {
                "type": "full_closure",
                "label": "Winter off-season (typical)",
                "months": [
                  11,
                  12,
                  1,
                  2,
                  3
                ],
                "notes": "Exact dates vary; see official site."
              }
            ]
          },
          "image": {
            "url": null,
            "alt": "Emerald Park, Europe",
            "source": "none",
            "file_page": null,
            "credit": null,
            "notes": "Add official media image when available."
          },
          "visitor_extras": {
            "lodging": {
              "sleep_inside_park_or_resort": null,
              "description": "Verify official and nearby stays before booking.",
              "official_packages_url": "https://www.emeraldpark.ie/"
            },
            "packages_with_park_entry": {
              "hotel_or_partner_bundles_include_park_tickets": null,
              "notes": null,
              "official_url": "https://www.emeraldpark.ie/"
            },
            "discounts_and_passes": []
          },
          "geo": {
            "lat": 53.509,
            "lng": -6.412,
            "precision": "approximate"
          },
          "tags": [
            "europe",
            "family_all_ages",
            "teen_thrills",
            "theme_park",
            "toddler_friendly",
            "young_kids"
          ],
          "optional_review": {
            "score": null,
            "review_count": null,
            "source": null,
            "note": "Populate when integrating ratings API; UI shows placeholder until then."
          },
          "distance_from_city": "35-minute drive from Dublin",
          "price_level": "€€"
        }
      ]
    }
  ]
}
;
window.__THEME_PARK_LODGING__ = {
  "meta": {
    "generated": "2026-04-27",
    "source": "google_places_nearby + distance_matrix",
    "criteria": {
      "minRatingGoogle5": 4,
      "minRatingDisplay10": 8,
      "minReviews": 1000,
      "maxDrivingDistanceM": 10000,
      "minHotelsToList": 1,
      "maxHotelsListed": 1,
      "note": "ratingDisplay10 = Google 1–5 mapped to a Booking-like /10 for display only (not Booking.com data)."
    },
    "parkCount": 81
  },
  "byParkId": {
    "PL__energylandia": {
      "hotels": [
        {
          "name": "Holiday Park Zator",
          "ratingGoogle": 4.8,
          "ratingDisplay10": 9.6,
          "reviews": 1512,
          "driveTextHe": "4 דקות נסיעה מהפארק",
          "distanceM": 2167,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.0032813&lng=19.4045039&campaign=theme-parks-lodging&campaign=PL__energylandia",
          "image": null
        }
      ]
    },
    "PL__legendia": {
      "hotels": [
        {
          "name": "Hotel Diament Plaza Katowice",
          "ratingGoogle": 4.8,
          "ratingDisplay10": 9.6,
          "reviews": 1483,
          "driveTextHe": "19 דקות נסיעה מהפארק",
          "distanceM": 6824,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.2577743&lng=19.0221546&campaign=theme-parks-lodging&campaign=PL__legendia",
          "image": null
        }
      ]
    },
    "PL__majaland-warsaw": {
      "hotels": []
    },
    "PL__zatorland": {
      "hotels": [
        {
          "name": "Holiday Park Zator",
          "ratingGoogle": 4.8,
          "ratingDisplay10": 9.6,
          "reviews": 1512,
          "driveTextHe": "3 דקות נסיעה מהפארק",
          "distanceM": 1673,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.0032813&lng=19.4045039&campaign=theme-parks-lodging&campaign=PL__zatorland",
          "image": null
        }
      ]
    },
    "PL__inwa-d-park-wiat-marze": {
      "hotels": [
        {
          "name": "Czarny Groń Hotel & SPA",
          "ratingGoogle": 4.7,
          "ratingDisplay10": 9.4,
          "reviews": 2568,
          "driveTextHe": "6 דקות נסיעה מהפארק",
          "distanceM": 2088,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=49.794489&lng=19.387206&campaign=theme-parks-lodging&campaign=PL__inwa-d-park-wiat-marze",
          "image": null
        }
      ]
    },
    "PL__jurapark-krasiej-w": {
      "hotels": [
        {
          "name": "Restauracja Hotel Joanna Kluczbork",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 1278,
          "driveTextHe": "7 דקות נסיעה מהפארק",
          "distanceM": 5177,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.9702242&lng=18.2632689&campaign=theme-parks-lodging&campaign=PL__jurapark-krasiej-w",
          "image": null
        }
      ]
    },
    "PL__ba-towski-kompleks-turystyczny": {
      "hotels": []
    },
    "PL__mandoria-miasto-przyg-d": {
      "hotels": []
    },
    "PL__suntago-park-of-poland": {
      "hotels": []
    },
    "PL__julinek-park": {
      "hotels": []
    },
    "PL__dzielnica-filmowa": {
      "hotels": []
    },
    "PL__farma-iluzji": {
      "hotels": [
        {
          "name": "Jakubowa Izba - Restauracja | Pokoje gościnne",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 8451,
          "driveTextHe": "9 mins נסיעה מהפארק",
          "distanceM": 7959,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.6753258&lng=21.8642098&campaign=theme-parks-lodging&campaign=PL__farma-iluzji",
          "image": null
        }
      ]
    },
    "PL__magiczne-ogrody": {
      "hotels": []
    },
    "PL__sady-klemensa": {
      "hotels": []
    },
    "PL__majaland-gda-sk": {
      "hotels": [
        {
          "name": "Radisson Blu Hotel, Gdansk",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 2116,
          "driveTextHe": "15 mins נסיעה מהפארק",
          "distanceM": 9103,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=54.3479056&lng=18.6546403&campaign=theme-parks-lodging&campaign=PL__majaland-gda-sk",
          "image": null
        }
      ]
    },
    "PL__hossoland": {
      "hotels": []
    },
    "PL__lunapark-sowi-ski": {
      "hotels": [
        {
          "name": "Gwiazda Morza Resort SPA&SPORT",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 3020,
          "driveTextHe": "3 דקות נסיעה מהפארק",
          "distanceM": 1028,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=54.7981784&lng=18.4076917&campaign=theme-parks-lodging&campaign=PL__lunapark-sowi-ski",
          "image": null
        }
      ]
    },
    "PL__deli-park": {
      "hotels": [
        {
          "name": "Hotel Włoski",
          "ratingGoogle": 4.7,
          "ratingDisplay10": 9.4,
          "reviews": 2000,
          "driveTextHe": "23 דקות נסיעה מהפארק",
          "distanceM": 8319,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.39754869999999&lng=16.9263935&campaign=theme-parks-lodging&campaign=PL__deli-park",
          "image": null
        }
      ]
    },
    "PL__majaland-kownaty": {
      "hotels": []
    },
    "AT__familypark": {
      "hotels": [
        {
          "name": "Seehotel Rust",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 1575,
          "driveTextHe": "13 mins נסיעה מהפארק",
          "distanceM": 8578,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=47.8021033&lng=16.6782042&campaign=theme-parks-lodging&campaign=AT__familypark",
          "image": null
        }
      ]
    },
    "AT__prater-wurstelprater": {
      "hotels": [
        {
          "name": "Boutiquehotel Stadthalle by Cocoon",
          "ratingGoogle": 4.8,
          "ratingDisplay10": 9.6,
          "reviews": 1317,
          "driveTextHe": "22 דקות נסיעה מהפארק",
          "distanceM": 7525,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.19921710000001&lng=16.333811&campaign=theme-parks-lodging&campaign=AT__prater-wurstelprater",
          "image": null
        }
      ]
    },
    "AT__area-47": {
      "hotels": []
    },
    "AT__fantasiana-erlebnispark-stra-walchen": {
      "hotels": []
    },
    "CZ__kr-lovstv-lesa-kingdom-of-the-forest": {
      "hotels": [
        {
          "name": "Wellness Hotel Frymburk",
          "ratingGoogle": 4,
          "ratingDisplay10": 8,
          "reviews": 2274,
          "driveTextHe": "10 דקות נסיעה מהפארק",
          "distanceM": 8766,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.6675092&lng=14.1640414&campaign=theme-parks-lodging&campaign=CZ__kr-lovstv-lesa-kingdom-of-the-forest",
          "image": null
        }
      ]
    },
    "IT__gardaland-resort": {
      "hotels": [
        {
          "name": "Hotel Parchi del Garda",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 3412,
          "driveTextHe": "3 דקות נסיעה מהפארק",
          "distanceM": 1438,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=45.4619654&lng=10.7195691&campaign=theme-parks-lodging&campaign=IT__gardaland-resort",
          "image": null
        }
      ]
    },
    "IT__movieland-studios": {
      "hotels": [
        {
          "name": "Gardaland Hotel",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 6379,
          "driveTextHe": "6 mins נסיעה מהפארק",
          "distanceM": 4546,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=45.4430018&lng=10.7263723&campaign=theme-parks-lodging&campaign=IT__movieland-studios",
          "image": null
        }
      ]
    },
    "IT__canevaworld-caneva-aquapark": {
      "hotels": [
        {
          "name": "Gardaland Hotel",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 6379,
          "driveTextHe": "7 דקות נסיעה מהפארק",
          "distanceM": 4391,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=45.4430018&lng=10.7263723&campaign=theme-parks-lodging&campaign=IT__canevaworld-caneva-aquapark",
          "image": null
        }
      ]
    },
    "IT__leolandia": {
      "hotels": [
        {
          "name": "Villa Appiani",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 1043,
          "driveTextHe": "9 דקות נסיעה מהפארק",
          "distanceM": 5241,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=45.6096649&lng=9.522089899999997&campaign=theme-parks-lodging&campaign=IT__leolandia",
          "image": null
        }
      ]
    },
    "IT__mirabilandia": {
      "hotels": []
    },
    "IT__magicland": {
      "hotels": [
        {
          "name": "Fashion Hotel",
          "ratingGoogle": 4,
          "ratingDisplay10": 8,
          "reviews": 1785,
          "driveTextHe": "1 דקות נסיעה מהפארק",
          "distanceM": 480,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=41.7685547&lng=12.9211282&campaign=theme-parks-lodging&campaign=IT__magicland",
          "image": null
        }
      ]
    },
    "DE__europa-park": {
      "hotels": [
        {
          "name": "Hotel-Restaurant Mythos",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 1368,
          "driveTextHe": "2 דקות נסיעה מהפארק",
          "distanceM": 364,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.2642416&lng=7.725595999999998&campaign=theme-parks-lodging&campaign=DE__europa-park",
          "image": null
        }
      ]
    },
    "DE__phantasialand": {
      "hotels": [
        {
          "name": "Hotel Matamba",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 2316,
          "driveTextHe": "2 דקות נסיעה מהפארק",
          "distanceM": 337,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.79822360000001&lng=6.8803728&campaign=theme-parks-lodging&campaign=DE__phantasialand",
          "image": null
        }
      ]
    },
    "DE__legoland-deutschland-resort": {
      "hotels": [
        {
          "name": "Vienna House Easy Günzburg",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 1514,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 4202,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.4538301&lng=10.2779558&campaign=theme-parks-lodging&campaign=DE__legoland-deutschland-resort",
          "image": null
        }
      ]
    },
    "DE__heide-park-resort": {
      "hotels": [
        {
          "name": "Camping Auf dem Simpel",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 2377,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 6961,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=53.0240836&lng=9.8586969&campaign=theme-parks-lodging&campaign=DE__heide-park-resort",
          "image": null
        }
      ]
    },
    "DE__hansa-park": {
      "hotels": []
    },
    "DE__tripsdrill": {
      "hotels": []
    },
    "DE__bayern-park": {
      "hotels": [
        {
          "name": "Schlappinger Hof",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 1101,
          "driveTextHe": "12 דקות נסיעה מהפארק",
          "distanceM": 9750,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.5713082&lng=12.6282837&campaign=theme-parks-lodging&campaign=DE__bayern-park",
          "image": null
        }
      ]
    },
    "DE__holiday-park": {
      "hotels": []
    },
    "DE__movie-park-germany": {
      "hotels": [
        {
          "name": "Hotel I Restaurant I Biergarten Beisenbusch",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 1415,
          "driveTextHe": "4 mins נסיעה מהפארק",
          "distanceM": 2794,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.59957370000001&lng=6.9627454&campaign=theme-parks-lodging&campaign=DE__movie-park-germany",
          "image": null
        }
      ]
    },
    "NL__efteling": {
      "hotels": []
    },
    "NL__walibi-holland": {
      "hotels": [
        {
          "name": "Golfclub Dorhout Mees",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 1651,
          "driveTextHe": "10 דקות נסיעה מהפארק",
          "distanceM": 8226,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.41142620000001&lng=5.676497500000001&campaign=theme-parks-lodging&campaign=NL__walibi-holland",
          "image": null
        }
      ]
    },
    "NL__duinrell": {
      "hotels": [
        {
          "name": "Van der Valk Hotel Den Haag - Wassenaar",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 3972,
          "driveTextHe": "12 דקות נסיעה מהפארק",
          "distanceM": 7769,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.1049303&lng=4.3605861&campaign=theme-parks-lodging&campaign=NL__duinrell",
          "image": null
        }
      ]
    },
    "NL__toverland": {
      "hotels": [
        {
          "name": "De Maasparel - Hotel & Restaurant",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 1055,
          "driveTextHe": "11 דקות נסיעה מהפארק",
          "distanceM": 8235,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.47355559999999&lng=6.1796473&campaign=theme-parks-lodging&campaign=NL__toverland",
          "image": null
        }
      ]
    },
    "NL__julianatoren": {
      "hotels": [
        {
          "name": "Van der Valk Hotel Apeldoorn - De Cantharel",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 7083,
          "driveTextHe": "12 דקות נסיעה מהפארק",
          "distanceM": 7080,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.1776063&lng=5.9114589&campaign=theme-parks-lodging&campaign=NL__julianatoren",
          "image": null
        }
      ]
    },
    "NL__slagharen": {
      "hotels": [
        {
          "name": "PonyparkCity",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 2426,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 7904,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.5915039&lng=6.5992295&campaign=theme-parks-lodging&campaign=NL__slagharen",
          "image": null
        }
      ]
    },
    "FR__disneyland-paris": {
      "hotels": [
        {
          "name": "Hotel l'Elysee Val d'Europe",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 3623,
          "driveTextHe": "7 דקות נסיעה מהפארק",
          "distanceM": 2272,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=48.85558770000001&lng=2.775725599999999&campaign=theme-parks-lodging&campaign=FR__disneyland-paris",
          "image": null
        }
      ]
    },
    "FR__parc-ast-rix": {
      "hotels": [
        {
          "name": "Hôtel des Trois Hiboux",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 3566,
          "driveTextHe": "7 mins נסיעה מהפארק",
          "distanceM": 2652,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=49.1297505&lng=2.571310699999999&campaign=theme-parks-lodging&campaign=FR__parc-ast-rix",
          "image": null
        }
      ]
    },
    "FR__puy-du-fou": {
      "hotels": []
    },
    "FR__futuroscope": {
      "hotels": [
        {
          "name": "Château le Clos de la Ribaudière",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 1579,
          "driveTextHe": "9 דקות נסיעה מהפארק",
          "distanceM": 4666,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=46.651&lng=0.3766436&campaign=theme-parks-lodging&campaign=FR__futuroscope",
          "image": null
        }
      ]
    },
    "FR__nigloland": {
      "hotels": []
    },
    "FR__walibi-rh-ne-alpes": {
      "hotels": []
    },
    "FR__parc-spirou-provence": {
      "hotels": []
    },
    "ES__portaventura-world-ferrari-land": {
      "hotels": [
        {
          "name": "Estival Centurión Playa Sup.",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 2756,
          "driveTextHe": "15 דקות נסיעה מהפארק",
          "distanceM": 8378,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=41.0676196&lng=1.0918633&campaign=theme-parks-lodging&campaign=ES__portaventura-world-ferrari-land",
          "image": null
        }
      ]
    },
    "ES__parque-warner-madrid": {
      "hotels": []
    },
    "GB__alton-towers": {
      "hotels": [
        {
          "name": "Splash Landings Hotel",
          "ratingGoogle": 4.1,
          "ratingDisplay10": 8.2,
          "reviews": 2489,
          "driveTextHe": "2 דקות נסיעה מהפארק",
          "distanceM": 380,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=52.985054&lng=-1.8759302&campaign=theme-parks-lodging&campaign=GB__alton-towers",
          "image": null
        }
      ]
    },
    "GB__thorpe-park": {
      "hotels": [
        {
          "name": "The Crown (Hotel)",
          "ratingGoogle": 4.2,
          "ratingDisplay10": 8.4,
          "reviews": 1221,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 4116,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.3921089&lng=-0.5028439&campaign=theme-parks-lodging&campaign=GB__thorpe-park",
          "image": null
        }
      ]
    },
    "GB__legoland-windsor": {
      "hotels": [
        {
          "name": "Sir Christopher Wren Hotel",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 2152,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 2961,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.4852946&lng=-0.6080171999999999&campaign=theme-parks-lodging&campaign=GB__legoland-windsor",
          "image": null
        }
      ]
    },
    "GB__chessington-world-of-adventures": {
      "hotels": [
        {
          "name": "Woodlands Park Hotel",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 1033,
          "driveTextHe": "11 דקות נסיעה מהפארק",
          "distanceM": 7278,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=51.3166497&lng=-0.3627903&campaign=theme-parks-lodging&campaign=GB__chessington-world-of-adventures",
          "image": null
        }
      ]
    },
    "BE__plopsaland-de-panne": {
      "hotels": []
    },
    "BE__walibi-belgium": {
      "hotels": [
        {
          "name": "ibis Wavre Brussels East",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 1128,
          "driveTextHe": "3 דקות נסיעה מהפארק",
          "distanceM": 1526,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=50.7087184&lng=4.608728200000001&campaign=theme-parks-lodging&campaign=BE__walibi-belgium",
          "image": null
        }
      ]
    },
    "BE__bobbejaanland": {
      "hotels": []
    },
    "SE__liseberg": {
      "hotels": [
        {
          "name": "Hotel Royal",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 1107,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 2999,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=57.70637599999999&lng=11.97226&campaign=theme-parks-lodging&campaign=SE__liseberg",
          "image": null
        }
      ]
    },
    "SE__gr-na-lund": {
      "hotels": [
        {
          "name": "Grand Hôtel",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 4243,
          "driveTextHe": "12 mins נסיעה מהפארק",
          "distanceM": 3404,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=59.3297258&lng=18.07571339999999&campaign=theme-parks-lodging&campaign=SE__gr-na-lund",
          "image": null
        }
      ]
    },
    "NO__tusenfryd": {
      "hotels": []
    },
    "DK__tivoli-gardens": {
      "hotels": [
        {
          "name": "Hotel D'Angleterre",
          "ratingGoogle": 4.7,
          "ratingDisplay10": 9.4,
          "reviews": 1894,
          "driveTextHe": "9 דקות נסיעה מהפארק",
          "distanceM": 2821,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=55.68060519999999&lng=12.5846997&campaign=theme-parks-lodging&campaign=DK__tivoli-gardens",
          "image": null
        }
      ]
    },
    "DK__bakken": {
      "hotels": []
    },
    "PT__zoomarine-algarve": {
      "hotels": [
        {
          "name": "Falésia Hotel",
          "ratingGoogle": 4.7,
          "ratingDisplay10": 9.4,
          "reviews": 1659,
          "driveTextHe": "3 דקות נסיעה מהפארק",
          "distanceM": 775,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=37.0951581&lng=-8.175540800000002&campaign=theme-parks-lodging&campaign=PT__zoomarine-algarve",
          "image": null
        }
      ]
    },
    "PT__aquashow-park-hotel": {
      "hotels": [
        {
          "name": "Tivoli Marina Vilamoura Algarve Resort",
          "ratingGoogle": 4.6,
          "ratingDisplay10": 9.2,
          "reviews": 3877,
          "driveTextHe": "6 דקות נסיעה מהפארק",
          "distanceM": 2549,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=37.074277&lng=-8.1198056&campaign=theme-parks-lodging&campaign=PT__aquashow-park-hotel",
          "image": null
        }
      ]
    },
    "GR__allou-fun-park": {
      "hotels": [
        {
          "name": "Hotel Grande Bretagne, a Luxury Collection Hotel",
          "ratingGoogle": 4.8,
          "ratingDisplay10": 9.6,
          "reviews": 6623,
          "driveTextHe": "17 דקות נסיעה מהפארק",
          "distanceM": 5164,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=37.976178&lng=23.7353123&campaign=theme-parks-lodging&campaign=GR__allou-fun-park",
          "image": null
        }
      ]
    },
    "CH__conny-land": {
      "hotels": []
    },
    "CH__swiss-vapeur-parc": {
      "hotels": [
        {
          "name": "Grand Hotel Suisse Majestic, Autograph Collection",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 1797,
          "driveTextHe": "17 mins נסיעה מהפארק",
          "distanceM": 9816,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=46.4358971&lng=6.909875&campaign=theme-parks-lodging&campaign=CH__swiss-vapeur-parc",
          "image": null
        }
      ]
    },
    "SK__donovalkovo": {
      "hotels": []
    },
    "SK__habakuky": {
      "hotels": []
    },
    "HU__zobori-adventure-park": {
      "hotels": [
        {
          "name": "Mala Garden",
          "ratingGoogle": 4.7,
          "ratingDisplay10": 9.4,
          "reviews": 3715,
          "driveTextHe": "3 mins נסיעה מהפארק",
          "distanceM": 1572,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=46.913869&lng=18.0619299&campaign=theme-parks-lodging&campaign=HU__zobori-adventure-park",
          "image": null
        }
      ]
    },
    "FI__linnanm-ki": {
      "hotels": [
        {
          "name": "Hilton Helsinki Kalastajatorppa",
          "ratingGoogle": 4.4,
          "ratingDisplay10": 8.8,
          "reviews": 2481,
          "driveTextHe": "13 דקות נסיעה מהפארק",
          "distanceM": 4724,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=60.19251249999999&lng=24.8731381&campaign=theme-parks-lodging&campaign=FI__linnanm-ki",
          "image": null
        }
      ]
    },
    "FI__s-rk-nniemi": {
      "hotels": [
        {
          "name": "Original Sokos Hotel Ilves",
          "ratingGoogle": 4.3,
          "ratingDisplay10": 8.6,
          "reviews": 3760,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 2325,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=61.4962457&lng=23.7665689&campaign=theme-parks-lodging&campaign=FI__s-rk-nniemi",
          "image": null
        }
      ]
    },
    "RO__salina-turda": {
      "hotels": [
        {
          "name": "SunGarden Hotel",
          "ratingGoogle": 4.2,
          "ratingDisplay10": 8.4,
          "reviews": 1006,
          "driveTextHe": "10 mins נסיעה מהפארק",
          "distanceM": 5847,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=46.58583609999999&lng=23.7595565&campaign=theme-parks-lodging&campaign=RO__salina-turda",
          "image": null
        }
      ]
    },
    "RO__divertiland-water-park": {
      "hotels": [
        {
          "name": "Yesterday",
          "ratingGoogle": 4,
          "ratingDisplay10": 8,
          "reviews": 1359,
          "driveTextHe": "19 דקות נסיעה מהפארק",
          "distanceM": 8772,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=44.4416881&lng=26.059107&campaign=theme-parks-lodging&campaign=RO__divertiland-water-park",
          "image": null
        }
      ]
    },
    "HR__istralandia": {
      "hotels": [
        {
          "name": "Aminess Maestral Hotel",
          "ratingGoogle": 4.5,
          "ratingDisplay10": 9,
          "reviews": 3397,
          "driveTextHe": "7 דקות נסיעה מהפארק",
          "distanceM": 5776,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=45.3163908&lng=13.5730555&campaign=theme-parks-lodging&campaign=HR__istralandia",
          "image": null
        }
      ]
    },
    "IE__emerald-park": {
      "hotels": [
        {
          "name": "Pillo Hotel Ashbourne",
          "ratingGoogle": 4.1,
          "ratingDisplay10": 8.2,
          "reviews": 2453,
          "driveTextHe": "8 דקות נסיעה מהפארק",
          "distanceM": 3374,
          "stay22Url": "https://www.stay22.com/embed/gm?lmaID=69c0491c51844e7588a7882e&lat=53.526063&lng=-6.413903&campaign=theme-parks-lodging&campaign=IE__emerald-park",
          "image": null
        }
      ]
    }
  }
};
