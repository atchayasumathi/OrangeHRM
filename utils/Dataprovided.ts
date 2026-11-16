
import * as fs from 'fs';
export class dataprovider{
 
    static Json_data(path:string):any
    {
      const logindata:any=JSON.parse(fs.readFileSync(path,'utf-8'));
      return logindata;
    }




}