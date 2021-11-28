import schedule from 'node-schedule';
import wrongVocabFrenchEnglish from './actions/updates/flashcard/wrongToStage0';
import type { Client } from "@notionhq/client";

export const jobs = (notion: Client) => {
  schedule.scheduleJob('00 01 * * *', async () => {
    console.log('Job executed');
    await wrongVocabFrenchEnglish(notion);
  });
}
