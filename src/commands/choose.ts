// import <
import { ChooseProps } from '../typings/tChoose';

// >


export default class Choose {


   private _delimeters: RegExp;


   constructor() {

      this._delimeters = /[,.;/]/;

   }


   context(): any {

      return {

         type : 1,
         name : 'choose',
         description : 'make the bot decide',
         options : [

            {

               type : 3,
               name : 'choose',
               required : true,
               description : `split with ${this._delimeters}`

            }

         ]

      }

   }


   async run({choose}: ChooseProps): Promise<string> {

      const choices: string[] = choose.split(this._delimeters);
      const index = Math.floor((Math.random() * 100) % choices.length);

      return choices[index];
      
   }

   
}