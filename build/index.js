"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const { Client } = require("@notionhq/client");
// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield notion.databases.query({
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
    Promise.all(data.results.map((obj) => __awaiter(void 0, void 0, void 0, function* () {
        yield notion.pages.update({
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
    })));
}))();
