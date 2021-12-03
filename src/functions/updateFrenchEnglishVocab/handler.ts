import { Client } from "@notionhq/client";
import dayjs from 'dayjs';

export const main = async () => {
  console.log('Job will execute', new Date());
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const items_guessed_wrong = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "stage",
      select: {
        equals: "wrong",
      },
    },
  });

  await Promise.all(items_guessed_wrong.results.map(async (obj: any) => {
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
            start: dayjs().format('YYYY-MM-DD')
          }
        }
      }
    });
  }));

  return 'Job succeded';
}