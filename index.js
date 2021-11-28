require('dotenv').config();
const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

notion.databases.query({
  database_id: process.env.DATABASE_ID,
  filter: {
    property: "stage",
    select: {
      equals: "wrong",
    },
  },
}).then((data) => {
  data.results.map(obj => {
    notion.pages.update({
      page_id: obj.id,
      properties: {
        stage: {
          type: "select",
          select: {
            name: "0"
          }
        },
        'next date': {
          date: {
            start: new Date()
          }
        }
      }
    });
  })
});