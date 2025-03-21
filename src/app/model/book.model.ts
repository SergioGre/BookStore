export interface Book {
    id?: number;
    title: string;
    author: string;
    description: string;
    pages: number;
    language: string;
    genre: string;
  }

  export const authors: string[] = [
    "Александр Дюма", "Николай Гоголь", "Олдос Хаксли", "Джордж Оруэлл", "Джон Рональд Руэл Толкин"
  ]

  export const geners: string[] = [
    "Приключения", "Сатира", "Антиутопия", "Фэнтази"
  ]

  export const languages: string[] = [
    "Français", "Русский", "English"
  ]

  export const bookList: Book[] = [
    { 
        id: 0, 
        title: "Три мушкетёра", 
        author: "Александр Дюма", 
        description: "Задиристый, но доблестный дворянин желает вступить в ряды королевских мушкетёров, заводит с ними дружбу и пытается спасти королеву Франции.",
        pages: 412,
        language: "Français",
        genre: "Приключения"
    },
    {
        id: 1,
        title: "Мёртвые души",
        author: "Николай Гоголь",
        description: "Аферист скупал мёртвые души, чтобы заложить их государству и разбогатеть, но его махинации вдруг раскрылись.",
        pages: 314,
        language: "Русский",
        genre: "Сатира"
    },
    {
        id: 2,
        title: "О дивный новый мир",
        author: "Олдос Хаксли",
        description: "В Лондоне будущего запрещены все высокие чувства, люди рождаются в пробирках и распределяются на касты. Так герои и живут, пока не встречают Дикаря, рождённого естественным путём.",
        pages: 250,
        language: "English",
        genre: "Антиутопия"
    },
    {
        id: 3,
        title: "1984",
        author: "Джордж Оруэлл",
        description: "Уинстон Смит работает в Министерстве правды, но втайне не разделяет взгляды партии. У него случается роман с работницей министерства Джулией, после чего вся жизнь идёт наперекосяк.",
        pages: 300,
        language: "English",
        genre: "Антиутопия"
    },
    {
        id: 4,
        title: "Властелин Колец",
        author: "Джон Рональд Руэл Толкин",
        description: "Трилогия «Властелин Колец» бесспорно возглавляет список «культовых» книг ХХ века. Ее автор, Дж. Р.Р. Толкин, профессор Оксфордского университета, специалист по древнему и средневековому английскому языку, создал удивительный мир – Средиземье, который вот уже без малого пятьдесят лет неодолимо влечет к себе миллионы читателей. Великолепная кинотрилогия, снятая Питером Джексоном, в десятки раз увеличила ряды поклонников как Толкина, так и самого жанра героического фэнтези.",
        pages: 673,
        language: "English",
        genre: "Фэнтази"
    },
    {
        id: 5,
        title: "Граф Монте-Кристо",
        author: "Александр Дюма",
        description: " приключенческий роман Александра Дюма, написанный им в 1844—1846 годах в соавторстве с Огюстом Маке",
        pages: 211,
        language: "Français",
        genre: "Приключения"
    }
];

let _sortBookList: any[] = bookList;
export const sortBookList = () => _sortBookList;;
export const setSortBookList = (books: any[]) => {
  _sortBookList = books;};

  let _sortchange: boolean = false;
  export const getChange = () => _sortchange; 
  export const setSortChange = (bool: boolean) => {
    _sortchange = bool;}; 