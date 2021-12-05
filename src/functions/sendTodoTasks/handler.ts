import { Client } from "@notionhq/client";
import { postNotifToMyReminders } from '@libs/slack-toolbox';
import { formatTodosMessage } from '@libs/formatMessage';

export const main = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const important_todos_object = await notion.databases.query({
    database_id: process.env.TODO_TABLE_ID!,
    filter: {
      property: "Status",
      select: {
        equals: "Urgent ToDo",
      },
    },
    sorts: [{
      property: "Urgency",
      direction: "descending",
    }],
    page_size: 3,
  });

  const important_todos_messages = important_todos_object.results.map(obj => obj.properties.Name.title[0].text.content)

  const listMessages = formatTodosMessage(important_todos_messages);

  console.log('postNotif', (await postNotifToMyReminders(listMessages)).data);

  return 'Job succeded';
}