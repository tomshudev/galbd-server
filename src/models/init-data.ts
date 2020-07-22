import { editMission } from "./mission";
import { v4 as uuid } from "uuid";

let missions = [
  {
    id: uuid(),
    name: "מה הסיסמה?",
    explanation: "כדי להיכנס צריך סיסמה (רמז: הכינוי המקורי שלך)",
    type: "password",
    digitPrizeLocation: 2,
    digitPrizeValue: ".",
    data: {
      validPassword: "simba",
    },
  },
  {
    id: uuid(),
    name: "תמונה שלנו?",
    explanation: "אני מאתגר אותך, תמונה שלנו מהחודש הראשון ביחד",
    type: "photo",
    digitPrizeLocation: 2,
    digitPrizeValue: ".",
    doesMissionNeedsApproval: true,
  },
  {
    id: uuid(),
    name: "אז מי בתמונה?",
    explanation: "זה לא פשוט נכון, אבל אני סומך עלייך",
    type: "recognize",
    digitPrizeLocation: 2,
    digitPrizeValue: ".",
    data: {
      correctAnswer: ["לשים שם"],
    },
  },
  {
    id: uuid(),
    name: "שאלון היכרות - תום",
    explanation: "זה הולך להיות קשה אם חשבת אחרת",
    type: "quiz",
    digitPrizeLocation: 5,
    digitPrizeValue: "5",
    data: {
      questions: [
        {
          question: "כמה שנים ריילי אצלי?",
          options: ["5", "10", "12", "14"],
          correctAnswer: "12",
        },
        {
          question: "באיזה בית ספר למדתי בחטיבה?",
          options: ["דה שליט", "אורט", "קציר א'", "קציר ב'"],
          correctAnswer: "קציר א'",
        },
        {
          question: "מה הצבע האהוב עליי?",
          options: ["ורוד", "צהוב", "כחול", "שחור"],
          correctAnswer: "כחול",
        },
        {
          question: "באיזה שנה התגייסתי?",
          options: ["2014", "2013", "2015", "2016"],
          correctAnswer: "2014",
        },
        {
          question: "באיזה בית חולים נולדתי?",
          options: ["איכילוב", "קפלן", "אסף הרופא", "תל השומר"],
          correctAnswer: "תל השומק",
        },
        {
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
          question: "אורז?",
          options: ["אורז", "אורז", "אורז", "אורז"],
          correctAnswer: "אורז",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "סיסמה נוספת?",
    explanation:
      "(היום בחודש שבו הכרנו + הגיל שלך(היום) + הספרה החמישית במספר פלאפון שלי + מספר היחידה שלי) + השם של סבתא שלי",
    type: "password",
    digitPrizeLocation: 6,
    digitPrizeValue: "7",
    data: {
      validPassword: "חסיבה364",
    },
  },
  {
    id: uuid(),
    name: "מה הסדר הנכון?",
    explanation: "צריך לסדר את כולם לפי תאריכי הלידה של השחקנים",
    type: "order",
    digitPrizeLocation: 3,
    digitPrizeValue: "2",
    data: {
      correctOrder: [
        "courtney",
        "lisa",
        "david",
        "matt",
        "jennifer",
        "matthew",
      ],
      objects: [
        {
          name: "matthew",
          pictureLink:
            "https://i.pinimg.com/originals/30/a4/14/30a4141d658b21a837730655a42b8af1.jpg",
        },
        {
          name: "jennifer",
          pictureLink:
            "https://static.fustany.com/images/en/photo/small_d4e524e1931f88ccec0ec73a92d17448.jpg",
        },
        {
          name: "ross",
          pictureLink:
            "https://gl-images.condecdn.net/image/jLpYBeXRj73/crop/405/f/Friends17_glamour_17apr13_NBCUniversal_getty_b.jpg",
        },
        {
          name: "matt",
          pictureLink:
            "https://cbsnews2.cbsistatic.com/hub/i/r/2014/09/17/65e4ec82-0f93-4f46-9dba-0112787d48dc/resize/620x465/b3fc9e37427775e12608e3de6bb13cd8/leblanc-joey.jpg",
        },
        {
          name: "lisa",
          pictureLink:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lisa-kudrow-friends-phoebe-buffay-1546435984.jpg",
        },
        {
          name: "courtney",
          pictureLink:
            "https://i.pinimg.com/originals/39/a7/c3/39a7c366b3dcf6eb377432bd34631fb5.jpg",
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "אז לי יש זכרון טוב, מה איתך?",
    explanation: "מה קרה לפני מה? יש פה כמה קשים...",
    type: "order",
    digitPrizeLocation: 3,
    digitPrizeValue: "2",
    data: {
      correctOrder: [
        "סדנת העצמה אישית",
        "נפגשים במלבייה",
        "באולינג עם אלה לי",
        "נשיקה ראשונה",
        "גל מציעה לי פיצה",
        "לונה פארק",
        "תום נכנס לתפקיד",
        "דרום אפריקה",
        "תחילת הקורונה",
        "תום מציין שנה לשחרור",
      ],
      objects: [
        { name: "נשיקה ראשונה" },
        { name: "גל מציעה לי פיצה" },
        { name: "באולינג עם אלה לי" },
        { name: "נפגשים במלבייה" },
        { name: "לונה פארק" },
        { name: "תום מציין שנה לשחרור" },
        { name: "סדנת העצמה אישית" },
        { name: "דרום אפריקה" },
        { name: "תחילת הקורונה" },
        { name: "תום נכנס לתפקיד" },
      ],
    },
  },
];

export function initData() {
  // missions.forEach((mission) => editMission(mission));
}
