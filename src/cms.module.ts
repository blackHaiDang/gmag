import { Directus } from '@directus/sdk';
import { Module } from '@nestjs/common';
@Module({
  providers: [
    {
        provide:'CMS',
        async useFactory(){
            const cnn = new Directus(process.env.CMS_URL);
            const p = await cnn.server.ping();
            console.log(p);
            if (p !== 'pong'){
                // console.log('Error: Server ping failed');
            }
            return cnn;
        }
    }
  ],
  exports: ['CMS']

})
export class CMSModule {}
