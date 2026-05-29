// ================================================================
// NTUE RatePro — 課程資料庫
// 填寫說明：
//   name      課程名稱
//   teacher   授課教師姓名
//   dept      系所代碼（見下方對照表）
//   credit    學分數
//   type      課程類型：'required'必修 / 'elective'選修
//   level     修課年級：'ug'大學部 / 'grad'研究所 / 'inservice'在職
//   diff      難易度：'latte'拿鐵 / 'americano'美式 / 'espresso'濃縮
//   rating    給分甜度 1-5（可用小數，例如 4.2）
//   hours     每週投入時數（整數）
//   challenge 挑戰程度 1-5
//   content   內容扎實度 1-5
//   attend    點名頻率 1-5
//   harvest   學習收穫 1-5
//   reviews   評價筆數
//   exams     考核方式陣列（可複選）：
//             'exam'筆試 / 'report'報告 / 'group'小組 /
//             'attend'出席 / 'quiz'小考 / 'present'上台報告
//   tags      自訂標籤陣列（文字）
//   review    代表性評論文字（一句話）
//
// 系所代碼對照：
//   'edu'    教育學系
//   'cs'     數位科技設計學系
//   'lang'   語文與創作學系
//   'art'    藝術與造型設計學系
//   'math'   數學暨資訊教育學系
//   'sci'    自然科學教育學系
//   'social' 社會與區域發展學系
//   'pe'     體育學系
//   'music'  音樂學系
//   'cict'  課程與教學傳播科技研究所  
// ================================================================

const COURSES = [

  // ── 教育學系 ────────────────────────────────────────────────
  {
    id: 1,
    name: '教育心理學',
    teacher: '王美玲',
    dept: 'edu',
    credit: 3,
    type: 'required',
    level: 'ug',
    diff: 'latte',
    rating: 4.2,
    hours: 2,
    challenge: 2.1,
    content: 3.6,
    attend: 2.9,
    harvest: 3.8,
    reviews: 42,
    exams: ['report', 'group', 'attend'],
    tags: ['大學部必修', '教育系'],
    review: '老師上課很活潑，期末報告題目自由度高，給分算甜。'
  },
  {
    id: 2,
    name: '課程設計與評量',
    teacher: '黃建國',
    dept: 'edu',
    credit: 2,
    type: 'required',
    level: 'ug',
    diff: 'americano',
    rating: 3.8,
    hours: 4,
    challenge: 3.2,
    content: 4.1,
    attend: 2.0,
    harvest: 4.3,
    reviews: 29,
    exams: ['report', 'group'],
    tags: ['師資培育', '教育系'],
    review: '內容扎實，對未來教書很有幫助，小組報告需找到好隊友。'
  },
  {
    id: 3,
    name: '教育哲學',
    teacher: '許文傑',
    dept: 'edu',
    credit: 2,
    type: 'elective',
    level: 'grad',
    diff: 'espresso',
    rating: 3.2,
    hours: 6,
    challenge: 4.2,
    content: 4.7,
    attend: 3.0,
    harvest: 4.5,
    reviews: 22,
    exams: ['exam', 'report'],
    tags: ['研究所', '教育系'],
    review: '閱讀量很重，但對理解教育本質有深度幫助。'
  },

  // ── 數位科技設計學系 ─────────────────────────────────────────
  {
    id: 4,
    name: '統計學（含實習）',
    teacher: '陳志明',
    dept: 'cs',
    credit: 3,
    type: 'required',
    level: 'ug',
    diff: 'espresso',
    rating: 2.8,
    hours: 7,
    challenge: 4.5,
    content: 4.8,
    attend: 3.5,
    harvest: 4.2,
    reviews: 38,
    exams: ['exam', 'report'],
    tags: ['大學部必修', '數位科技'],
    review: '期中期末都很硬，但實習課對理解幫助很大。'
  },
  {
    id: 5,
    name: 'Python 程式設計',
    teacher: '吳俊宏',
    dept: 'cs',
    credit: 3,
    type: 'elective',
    level: 'ug',
    diff: 'americano',
    rating: 3.5,
    hours: 5,
    challenge: 3.8,
    content: 4.5,
    attend: 1.5,
    harvest: 4.4,
    reviews: 44,
    exams: ['exam', 'report','attend',],
    tags: ['大學部選修', '數位科技'],
    review: '對沒基礎的人有點吃力，但老師課後很願意解惑。'
  },

  // ── 語文與創作學系 ───────────────────────────────────────────
  {
    id: 6,
    name: '兒童文學',
    teacher: '林淑芬',
    dept: 'lang',
    credit: 2,
    type: 'elective',
    level: 'ug',
    diff: 'latte',
    rating: 4.7,
    hours: 2,
    challenge: 1.5,
    content: 3.2,
    attend: 4.0,
    harvest: 3.5,
    reviews: 57,
    exams: ['report', 'attend'],
    tags: ['大學部選修', '語文教育'],
    review: '超推薦！老師人很好，作業有趣，幾乎不點名。'
  },

  // ── 藝術與造型設計學系 ───────────────────────────────────────
  {
    id: 7,
    name: '數位媒體設計',
    teacher: '蔡雅婷',
    dept: 'art',
    credit: 3,
    type: 'elective',
    level: 'ug',
    diff: 'americano',
    rating: 4.0,
    hours: 5,
    challenge: 3.0,
    content: 3.8,
    attend: 2.5,
    harvest: 4.0,
    reviews: 31,
    exams: ['report', 'group'],
    tags: ['大學部選修', '藝術設計'],
    review: '期末展覽很有成就感，適合有創作慾的人。'
  },
  {
    id: 8,
    name: '繪本創作與教學',
    teacher: '鄭美慧',
    dept: 'art',
    credit: 2,
    type: 'elective',
    level: 'ug',
    diff: 'latte',
    rating: 4.5,
    hours: 3,
    challenge: 1.8,
    content: 3.5,
    attend: 3.5,
    harvest: 3.8,
    reviews: 35,
    exams: ['report', 'attend'],
    tags: ['大學部選修', '藝術設計'],
    review: '超喜歡這門課！期末自己做一本繪本超有成就感。'
  },
  // ── 課程與教學傳播教育研究所 ───────────────────────────────────────
  {
    id: 9,
    name: '數位內容設計專題',
    teacher: '胡秋帆',
    dept: '網頁設計',
    credit: 3,
    type: 'elective',
    level: 'grad',
    diff: 'americano',
    rating: 4.2,
    hours: 2,
    challenge: 3.0,
    content: 3.8,
    attend: 5,
    harvest: 3,
    reviews: 2,
    exams: ['report', 'group','present','attend'],
    tags: ['研究所選修', '未來趨勢','vibe coding'],
    review: '期末成果很有成就感，適合有想練習架設互動平台的人。'
  }

  // ================================================================
  // 👇 在這裡繼續新增課程，複製上面的格式貼上即可
  // 記得每筆資料結尾要有逗號，最後一筆不用
  // ================================================================

];
