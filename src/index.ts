require('dotenv').config();
const { Client } = require("@notionhq/client");


// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

(async () => {
  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "stage",
      select: {
        equals: "wrong",
      },
    },
  });

  const date = new Date();
  console.log('date', date);

  Promise.all(data.results.map(async (obj: any) => {
    await notion.pages.update({
      page_id: obj.id,
      properties: {
        stage: {
          type: "select",
          select: {
            name: "0"
          }
        },
        'wrong date': {
          date: {
            start: date
          }
        }
      }
    });
  }));

})();
