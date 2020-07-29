import { editMission } from "./mission";
import { v4 as uuid } from "uuid";

let missions = [
  {
    id: uuid(),
    name: "מה הסיסמה?",
    explanation: "כדי להיכנס צריך סיסמה (רמז: הכינוי המקורי שלך)",
    type: "password",
    digitPrizeLocation: 18,
    digitPrizeValue: "3",
    data: {
      validPassword: "סימבה",
    },
  },
  {
    id: uuid(),
    name: "תמונה שלנו?",
    explanation: "אני מאתגר אותך, תמונה שלנו מהחודש הראשון ביחד",
    type: "photo",
    digitPrizeLocation: 17,
    digitPrizeValue: "1",
    doesMissionNeedsApproval: true,
  },
  {
    id: uuid(),
    name: "אז מי בתמונה?",
    explanation: "זה לא פשוט נכון, אבל אני סומך עלייך",
    type: "recognize",
    digitPrizeLocation: 16,
    digitPrizeValue: "4",
    doesMissionNeedsApproval: true,
    data: {
      images: [
        {
          url:
            "http://localhost:3000/api/images/galbd-c97c0973-ccde-41e9-8515-b26b3db15593.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
        {
          url:
            "http://localhost:3000/api/images/galbd-474aeba4-ef68-4925-8d9f-a9451e168658.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "שאלון היכרות - תום",
    explanation: "זה הולך להיות קשה אם חשבת אחרת",
    type: "quiz",
    digitPrizeLocation: 15,
    digitPrizeValue: "1",
    data: {
      questions: [
        {
          id: uuid(),
          question: "כמה שנים ריילי אצלי?",
          options: ["5", "10", "12", "14"],
          correctAnswer: "12",
        },
        {
          id: uuid(),
          question: "באיזה בית ספר למדתי בחטיבה?",
          options: ["דה שליט", "אורט", "קציר א'", "קציר ב'"],
          correctAnswer: "קציר א'",
        },
        {
          id: uuid(),
          question: "מה הצבע האהוב עליי?",
          options: ["ורוד", "צהוב", "כחול", "שחור"],
          correctAnswer: "כחול",
        },
        {
          id: uuid(),
          question: "באיזה שנה התגייסתי?",
          options: ["2014", "2013", "2015", "2016"],
          correctAnswer: "2014",
        },
        {
          id: uuid(),
          question: "באיזה בית חולים נולדתי?",
          options: ["איכילוב", "קפלן", "אסף הרופא", "תל השומר"],
          correctAnswer: "תל השומר",
        },
        {
          id: uuid(),
          question: "איזה פלאפון יש לי?",
          options: [
            "Samsung Galaxy S9+",
            "OnePlus 7 Pro",
            "Huawei P40 Pro",
            "Xiaomi Mi Note 10",
          ],
          correctAnswer: "OnePlus 7 Pro",
        },
        {
          id: uuid(),
          question: "אורז?",
          options: ["אורז ", "אורז  ", "אורז   ", "אורז    "],
          correctAnswer: "אורז ",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "אז לי יש זכרון טוב, מה איתך?",
    explanation: "מה קרה לפני מה? יש פה כמה קשים...",
    type: "order",
    digitPrizeLocation: 14,
    digitPrizeValue: "6",
    data: {
      correctOrder: ["7", "4", "3", "1", "2", "5", "10", "8", "9", "6"],
      objects: [
        { id: "1", name: "נשיקה ראשונה" },
        { id: "2", name: "גל מציעה לי פיצה" },
        { id: "3", name: "באולינג עם אלה לי" },
        { id: "4", name: "נפגשים במלבייה" },
        { id: "5", name: "לונה פארק" },
        { id: "6", name: "תום מציין שנה לשחרור" },
        { id: "7", name: "סדנת העצמה אישית" },
        { id: "8", name: "דרום אפריקה" },
        { id: "9", name: "תחילת הקורונה" },
        { id: "10", name: "תום נכנס לתפקיד" },
      ],
    },
  },
  {
    id: uuid(),
    name: "סיסמה נוספת?",
    explanation:
      "(היום בחודש שבו הכרנו + הגיל שלך(היום) + הספרה החמישית במספר פלאפון שלי + מספר היחידה שלי) + השם של סבתא שלי",
    type: "password",
    digitPrizeLocation: 13,
    digitPrizeValue: "3",
    data: {
      validPassword: "364חסיבה",
    },
  },
  {
    id: uuid(),
    name: "מה הסדר הנכון?",
    explanation: "צריך לסדר את כולם לפי תאריכי הלידה של השחקנים",
    type: "order",
    digitPrizeLocation: 12,
    digitPrizeValue: "4",
    data: {
      correctOrder: ["1", "2", "3", "4", "5", "6"],
      objects: [
        {
          id: "6",
          name: "צ'נדלר (מת'יו פרי)",
          pictureLink:
            "https://i.pinimg.com/originals/30/a4/14/30a4141d658b21a837730655a42b8af1.jpg",
        },
        {
          id: "5",
          name: "רייצ'ל (ג'ניפר אניסטון)",
          pictureLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw7yt7xZ3qRWcfriRwnW2qPpZrHDDwkBdxTg&usqp=CAU",
        },
        {
          id: "3",
          name: "רוס (דיוויד שווימר)",
          pictureLink:
            "https://gl-images.condecdn.net/image/jLpYBeXRj73/crop/405/f/Friends17_glamour_17apr13_NBCUniversal_getty_b.jpg",
        },
        {
          id: "4",
          name: "ג'ואי (מאט לבלאנק)",
          pictureLink:
            "https://cbsnews2.cbsistatic.com/hub/i/r/2014/09/17/65e4ec82-0f93-4f46-9dba-0112787d48dc/resize/620x465/b3fc9e37427775e12608e3de6bb13cd8/leblanc-joey.jpg",
        },
        {
          id: "2",
          name: "פיבי (ליסה קודרו)",
          pictureLink:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lisa-kudrow-friends-phoebe-buffay-1546435984.jpg",
        },
        {
          id: "1",
          name: "מוניקה (קורטני קוקס)",
          pictureLink:
            "https://i.pinimg.com/originals/39/a7/c3/39a7c366b3dcf6eb377432bd34631fb5.jpg",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "יש לנו זמר...",
    explanation: "זה קשה אבל אפשרי, תמצאי תמונה שלי עם מיקרופון",
    type: "photo",
    digitPrizeLocation: 7,
    digitPrizeValue: "7",
    doesMissionNeedsApproval: true,
  },
  {
    id: uuid(),
    name: "את יכולה לזהות?",
    explanation: "יאללה, שתי תמונות, מי אלה?",
    type: "recognize",
    digitPrizeLocation: 6,
    digitPrizeValue: "5",
    doesMissionNeedsApproval: true,
    data: {
      images: [
        {
          url:
            "http://localhost:3000/api/images/galbd-8d18096b-3b67-4ac7-8349-05bae26968a5.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
        {
          url:
            "http://localhost:3000/api/images/galbd-75b5fc92-045b-46a6-b37e-db6c52b82d59.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "PYRO מי??",
    explanation:
      "אז הוצאתי כמה שירים בעבר, אני רוצה תמונה שהוצאתי עם אחד השירים",
    type: "photo",
    digitPrizeLocation: 0,
    digitPrizeValue: "3",
    doesMissionNeedsApproval: true,
  },
  {
    id: uuid(),
    name: "ילדת בת מצווה",
    explanation: "זה כבר בשביל הכיף, את צריכה להעלות תמונה שלך מהבת מצווה",
    type: "photo",
    digitPrizeLocation: 10,
    digitPrizeValue: "5",
    doesMissionNeedsApproval: true,
  },
  {
    id: uuid(),
    name: "מודה שהגזמתי...",
    explanation: "רמז: שני, יסמין, מתן, לירון, טליה",
    type: "password",
    digitPrizeLocation: 1,
    digitPrizeValue: "2",
    data: {
      validPassword: "גלאתכברממשקרובה",
    },
  },
  {
    id: uuid(),
    name: "חברים - הסדרה",
    explanation: "שאלון שמתאים בדיוק למעריצה שכמוך",
    type: "quiz",
    digitPrizeLocation: 4,
    digitPrizeValue: "3",
    data: {
      questions: [
        {
          id: uuid(),
          question: "כמה שנים ריילי אצלי?",
          options: ["5", "10", "12", "14"],
          correctAnswer: "12",
        },
        {
          id: uuid(),
          question: "באיזה בית ספר למדתי בחטיבה?",
          options: ["דה שליט", "אורט", "קציר א'", "קציר ב'"],
          correctAnswer: "קציר א'",
        },
        {
          id: uuid(),
          question: "מה הצבע האהוב עליי?",
          options: ["ורוד", "צהוב", "כחול", "שחור"],
          correctAnswer: "כחול",
        },
        {
          id: uuid(),
          question: "באיזה שנה התגייסתי?",
          options: ["2014", "2013", "2015", "2016"],
          correctAnswer: "2014",
        },
        {
          id: uuid(),
          question: "באיזה בית חולים נולדתי?",
          options: ["איכילוב", "קפלן", "אסף הרופא", "תל השומר"],
          correctAnswer: "תל השומר",
        },
        {
          id: uuid(),
          question: "איזה פלאפון יש לי?",
          options: [
            "Samsung Galaxy S9+",
            "OnePlus 7 Pro",
            "Huawei P40 Pro",
            "Xiaomi Mi Note 10",
          ],
          correctAnswer: "OnePlus 7 Pro",
        },
        {
          id: uuid(),
          question: "אורז?",
          options: ["אורז ", "אורז  ", "אורז   ", "אורז    "],
          correctAnswer: "אורז ",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "בלתי אפשרי",
    explanation: "זה הכי קשה שיהיה פה, מי אלה?",
    type: "recognize",
    digitPrizeLocation: 9,
    digitPrizeValue: "3",
    doesMissionNeedsApproval: true,
    data: {
      images: [
        {
          url:
            "http://localhost:3000/api/images/galbd-0e500334-8783-4f55-a363-941f5bd11cc6.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
        {
          url:
            "http://localhost:3000/api/images/galbd-f57456d5-547b-4f29-8f04-c4c2b35a7ce5.png",
          id: uuid(),
          isApproved: false,
          answer: undefined,
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "יומנגס :O",
    explanation: "מה סדר הפתיחה של הסניפים?",
    type: "order",
    digitPrizeLocation: 5,
    digitPrizeValue: "7",
    data: {
      correctOrder: ["1", "2", "3", "4", "5", "6"],
      objects: [
        {
          id: "6",
          name: "פרדסייה",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/59409706_2405268109727919_1321125484765000757_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=H4YQgZLzJqAAX9_jmzu&oh=0a8d2ec10bda7809225ee18b464c25f2&oe=5F490882",
        },
        {
          id: "4",
          name: "נשר",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/66668767_161225525020869_3803998534883074082_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=vCtEeCxR3RUAX8QkP93&oh=a74f90ab51d334a2c095fc1d100ced8c&oe=5F47FDA7",
        },
        {
          id: "1",
          name: "רופין",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/106492441_140249384353397_5321293631331846099_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=A0-NVsil_DQAX9L6yRW&oh=b6437d31d6aaf0651da70d995ae5bf64&oe=5F4B4C51",
        },
        {
          id: "5",
          name: "באר שבע",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/74413826_2474832996087282_8221065893579873975_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=rHLDga2e6igAX8dN7cs&oh=eed0925c4c7df9cfc45d15730f650457&oe=5F489320",
        },
        {
          id: "2",
          name: "כפר סבא",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/74876698_465551004315578_7306973715921359422_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=tBk8r8f9-uoAX-0Ggaf&oh=de8351ca6c5d8f9abdde6eb20553596a&oe=5F4ADBF8",
        },
        {
          id: "3",
          name: "ברנר",
          pictureLink:
            "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/69891177_472049966976349_1918083112979765848_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8JdEqDdBWLQAX9fPnPg&oh=c9ebfc6f27a76feda595fb728f1cd1ff&oe=5F4AE081",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "חברים - המקוריים",
    explanation: "כמה טוב את מכירה את החברים שלך?",
    type: "quiz",
    digitPrizeLocation: 3,
    digitPrizeValue: "9",
    data: {
      questions: [
        {
          id: uuid(),
          question: "כמה שנים ריילי אצלי?",
          options: ["5", "10", "12", "14"],
          correctAnswer: "12",
        },
        {
          id: uuid(),
          question: "באיזה בית ספר למדתי בחטיבה?",
          options: ["דה שליט", "אורט", "קציר א'", "קציר ב'"],
          correctAnswer: "קציר א'",
        },
        {
          id: uuid(),
          question: "מה הצבע האהוב עליי?",
          options: ["ורוד", "צהוב", "כחול", "שחור"],
          correctAnswer: "כחול",
        },
        {
          id: uuid(),
          question: "באיזה שנה התגייסתי?",
          options: ["2014", "2013", "2015", "2016"],
          correctAnswer: "2014",
        },
        {
          id: uuid(),
          question: "באיזה בית חולים נולדתי?",
          options: ["איכילוב", "קפלן", "אסף הרופא", "תל השומר"],
          correctAnswer: "תל השומר",
        },
        {
          id: uuid(),
          question: "איזה פלאפון יש לי?",
          options: [
            "Samsung Galaxy S9+",
            "OnePlus 7 Pro",
            "Huawei P40 Pro",
            "Xiaomi Mi Note 10",
          ],
          correctAnswer: "OnePlus 7 Pro",
        },
        {
          id: uuid(),
          question: "אורז?",
          options: ["אורז ", "אורז  ", "אורז   ", "אורז    "],
          correctAnswer: "אורז ",
        },
      ],
    },
  },
];

export function initData() {
  missions.forEach((mission) => {
    if (mission.name !== "מה הסיסמה?") {
      // mission["isSolved"] = true;
    }

    // editMission(mission);
  });
}
