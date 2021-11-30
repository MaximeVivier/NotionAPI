import schedule from 'node-schedule';
import wrongVocabFrenchEnglish from './actions/updates/flashcard/wrongToStage0';
import type { Client } from "@notionhq/client";

export const jobs = (notion: Client) => {
  schedule.scheduleJob('45 23 * * *', async () => {
    console.log('Job executed in notion');
    console.log(new Date());
    await wrongVocabFrenchEnglish(notion);
  });
}
