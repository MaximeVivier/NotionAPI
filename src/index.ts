require('dotenv').config();
import { jobs } from "./programmed_jobs";



console.log('Starting app', new Date());

jobs(notion);
