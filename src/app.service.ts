import { Injectable } from '@nestjs/common';
import { Directus, ID } from '@directus/sdk';
import 'dotenv/config';

  
  const directus = new Directus('http://localhost:8055/');


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dang';
  }   

 async getData() : Promise<any> {
    return directus.
    items('data')
    .readOne(1)

    
  }
}
