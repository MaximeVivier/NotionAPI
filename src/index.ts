require('dotenv').config();
import { Client } from "@notionhq/client";
import { jobs } from "./programmed_jobs";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

console.log('Starting app', new Date());

jobs(notion);
