/**
 * Destination hub data (from the live destinations.html). Static on purpose: no API calls on this page.
 * Flight times, seasons and trip lengths are the site's editorial guidance.
 */
export type Season = "spring" | "summer" | "autumn" | "all";
export type Style = "nature" | "city" | "water" | "castles";

export interface Destination {
  id: string;
  name: string;
  region: string;
  color: string;
  url: string;
  image: string;
  imageAlt: string;
  days: string;
  minDays: number;
  season: string;
  seasons: Season[];
  flightHours: number;
  currency: { code: string; symbol: string };
  styles: Style[];
  desc: string;
  tags: string[];
  /** Word used in the pre-filled WhatsApp message ("…a trip to X with kids"). */
  wa: string;
}

export const destinations: Destination[] = [
  { id: "athens", name: "אתונה", region: "יוון", color: "#0d5eaf", url: "/athens.html", image: "/images/destinations/athens.webp", imageAlt: "אתונה", days: "5 ימים", minDays: 5, season: "מאי עד ספטמבר", seasons: ["spring", "summer"], flightHours: 1.5, currency: { code: "EUR", symbol: "€" }, styles: ["city", "water"], desc: "Allou! Fun Park, האי אגינה, מוזיאון אשליות וגבעת ליקאבטוס - אתונה מפתיעה עם ילדים. עיר שחיה בלילה ומלאה בהיסטוריה.", tags: ["Allou! Fun Park", "האי אגינה", "XPLORE", "מונסטירקי", "ליקאבטוס"], wa: "אתונה" },
  { id: "budapest", name: "בודפשט", region: "הונגריה", color: "#ce2939", url: "/budapest.html", image: "/images/destinations/budapest.webp", imageAlt: "בודפשט על גדות הדנובה", days: "5-6 ימים", minDays: 5, season: "כל השנה", seasons: ["all"], flightHours: 3, currency: { code: "HUF", symbol: "Ft" }, styles: ["city", "water", "castles"], desc: "עיר הקסמים על גדות הדנובה - פרלמנט מרהיב, מרחצאות היסטוריים, פארק מים ענק, מגלשות בוב ואטרקציות לכל גיל.", tags: ["טירת בודה", "Aquaworld", "Visegrad Bobsled", "שצ'ני", "הפרלמנט"], wa: "בודפשט" },
  { id: "romania", name: "רומניה", region: "מזרח אירופה", color: "#002B7F", url: "/romania.html", image: "/images/destinations/romania.webp", imageAlt: "נוף כפרי ברומניה", days: "7 ימים", minDays: 7, season: "אפריל, פסח", seasons: ["spring"], flightHours: 3, currency: { code: "RON", symbol: "lei" }, styles: ["castles", "nature"], desc: "טירת דרקולה, הרי הקרפטים, פארקי הרפתקות ביער ופסח בטבע. רומניה מפתיעה - ועדיין לא גילו אותה כולם.", tags: ["טירת ברן", "Dino Park", "Peleș", "Aventura Park"], wa: "רומניה" },
  { id: "slovakia", name: "סלובקיה", region: "מרכז אירופה", color: "#1A6B72", url: "/slovakia.html", image: "/images/destinations/slovakia.webp", imageAlt: "הרי הטטרה בסלובקיה", days: "7-10 ימים", minDays: 7, season: "מאי עד ספטמבר", seasons: ["spring", "summer"], flightHours: 3.5, currency: { code: "EUR", symbol: "€" }, styles: ["nature", "castles", "water"], desc: "טירות מהאגדות, הרי הטטרה ובירה ציורית. אחת ההפתעות הכי טובות באירופה לטיול משפחתי - זולה, נוחה ולא עמוסה בתיירים.", tags: ["טירת ספיש", "הרי הטטרה", "מערות דומיצה", "פארק מים", "רפטינג"], wa: "סלובקיה" },
  { id: "czechia", name: "דרום צ'כיה", region: "צ'כיה", color: "#11457e", url: "/czechia.html", image: "/images/destinations/czechia.webp", imageAlt: "צ'סקי קרומלוב", days: "10-14 ימים", minDays: 10, season: "אוגוסט מומלץ", seasons: ["summer"], flightHours: 3.5, currency: { code: "CZK", symbol: "Kč" }, styles: ["nature", "water", "city"], desc: "אגם ליפנו עם בובסלד ופארק מים, צ'סקי קרומלוב הציורית, ראפטינג בנהר ולטאבה ופראג בסוף - אחת ההפתעות הכי טובות.", tags: ["אגם ליפנו", "צ'סקי קרומלוב", "ראפטינג", "בובסלד", "פראג"], wa: "דרום צ'כיה" },
  { id: "austria", name: "אוסטריה", region: "מרכז אירופה", color: "#ed2939", url: "/austria.html", image: "/images/destinations/austria.webp", imageAlt: "האלפים באוסטריה", days: "7-10 ימים", minDays: 7, season: "אוגוסט מומלץ", seasons: ["summer"], flightHours: 3.5, currency: { code: "EUR", symbol: "€" }, styles: ["nature", "water", "castles"], desc: "פסגת דאכשטיין עם Skywalk מעל האלפים, מכרה מלח שגולשים בו בשקיות, פארק מים על ההר וטירה עם מופע נשרים - ווינה מחכה בסוף.", tags: ["דאכשטיין", "מכרה מלח", "Wagrainis", "טירת וורפן", "ווינה"], wa: "אוסטריה" },
  { id: "slovenia", name: "סלובניה", region: "מרכז אירופה", color: "#003DA5", url: "/slovenia.html", image: "/images/destinations/slovenia.webp", imageAlt: "אגם בלד בסלובניה", days: "7 ימים", minDays: 7, season: "אוגוסט מומלץ", seasons: ["summer"], flightHours: 3.5, currency: { code: "EUR", symbol: "€" }, styles: ["nature"], desc: "אגם Bled כמו מתוך אגדה, מערת פוסטוינה הענקית, ערוץ וינטגר ירוק וגני פרחים - המדינה הקטנה שמפתיעה בגדול.", tags: ["אגם Bled", "מערת פוסטוינה", "ערוץ וינטגר", "הר ווגל", "גני וולצ'י פוטוק"], wa: "סלובניה" },
  { id: "warsaw", name: "סובב וורשה", region: "פולין", color: "#C0392B", url: "/warsaw.html", image: "/images/destinations/warsaw.jpg", imageAlt: "וורשה", days: "7-9 ימים", minDays: 7, season: "ספטמבר עד אוקטובר", seasons: ["autumn"], flightHours: 4, currency: { code: "PLN", symbol: "zł" }, styles: ["city", "water"], desc: "עיר שמחברת היסטוריה עמוקה עם כיף אמיתי לילדים - מרכז מדע קופרניקוס, Suntago, Majaland ואינסוף אטרקציות לכל גיל.", tags: ["קופרניקוס", "Suntago", "Majaland", "Łazienki Park"], wa: "וורשה" },
  { id: "poland-south", name: "זקופנה", region: "דרום פולין", color: "#7B1010", url: "/poland-south.html", image: "/images/destinations/poland-south.webp", imageAlt: "הרי הטטרה ליד זקופנה", days: "7-8 ימים", minDays: 7, season: "קיץ מומלץ", seasons: ["summer"], flightHours: 4, currency: { code: "PLN", symbol: "zł" }, styles: ["nature", "water"], desc: "זקופנה שמוקפת בהרי הטטרה, עמק קושיליסקה לטיולים סביב הנהר, פארק מים תרמי, מכרה מלח שגולשים בו במגלשות עץ.", tags: ["זקופנה", "הרי הטטרה", "מכרה מלח", "Terma Bania", "Energylandia"], wa: "דרום פולין" },
];

export const seasonFilters: { id: Season | "any"; label: string }[] = [
  { id: "any", label: "כל עונה" },
  { id: "spring", label: "אביב" },
  { id: "summer", label: "קיץ" },
  { id: "autumn", label: "סתיו" },
];
export const lengthFilters = [
  { id: "any", label: "כל אורך" },
  { id: "short", label: "עד שבוע", max: 6 },
  { id: "week", label: "שבוע", min: 7, max: 9 },
  { id: "long", label: "10 ימים ומעלה", min: 10 },
] as const;
export const styleFilters: { id: Style; label: string }[] = [
  { id: "nature", label: "טבע והרים" },
  { id: "city", label: "עיר" },
  { id: "water", label: "פארקי מים" },
  { id: "castles", label: "טירות" },
];

export const articles = [
  { id: "poland", title: "פולין: שלוש חוויות, שלושה יעדים", read: "כ-4 דקות קריאה", text: "שלושה טיולי רכב, שלושה עולמות שונים לגמרי: ורשה, קרקוב וזקופנה - ומה באמת עבד לנו כמשפחה.", url: "/poland-three-experiences.html" },
  { id: "slovakia", title: "סלובקיה למתקדמים: איך לא לפספס את הקסם האמיתי", read: "כ-3 דקות קריאה", text: "הרי הטטרה, גופס, גן העדן הסלובקי ומערות - איך לתזמן נכון ולחסוך תורים.", url: "/slovakia-advanced.html" },
  { id: "romania", title: "רומניה הכפרית: בין טירות למרחבים", read: null, text: null, url: null },
];
