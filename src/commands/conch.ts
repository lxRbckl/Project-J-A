// import <
import { ConchProps } from '../typings/tConch';

// >


export default class Conch {


   private _responses: string[];


   constructor() {

      this._responses = [

         "It is certain.",
         "It is decidedly so.",
         "Without a doubt.",
         "Yes -definitely.",
         "You may rely on it.",
         "As I see it, yes.",
         "Most likely.",
         "Outlook good.",
         "Yes.",
         "Signs point to yes.",
         "Reply hazy, try again.",
         "Ask again later.",
         "Better not tell you now.",
         "Cannot predict now.",
         "Concentrate and ask again.",
         "Don't count on it.",
         "My reply is no.",
         "My sources say no.",
         "Outlook not so good.",
         "Very doubtful."

      ]

   }


   context(): any {

      return {

         type : 1,
         name : 'conch',
         description : 'get your question answered',
         options : [

            {

               type : 3,
               name : 'conch',
               required : true,
               description : 'what to ask'

            }

         ]

      }

   }


   async run({conch}: ConchProps): Promise<string> {

      const responseSize: number = this._responses.length;
      const index: number = Math.floor((Math.random() * 100) % responseSize);

      return this._responses[index];
      
   }

   
}