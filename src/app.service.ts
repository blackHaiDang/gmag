import { Injectable } from '@nestjs/common';
import { Directus } from '@directus/sdk';
import { dir } from 'console';


 const directus = new Directus(process.env.DIRECTUS_URL);

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dang';
  }   
  }

