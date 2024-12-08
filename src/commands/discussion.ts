// import <
import { openai } from 'lxrbckl';
import configs from '../configs/confOpenAi';
import { DiscussionProps } from '../typings/tDiscussion';

// >


export default class Discussion {


   private _chatgpt: openai;


   constructor() {

      this._chatgpt = new openai({token : configs.token});

   }


   context(): any {

      return {

         type : 1,
         name : 'discussion',
         description : 'configure discussion forum',
         options : [

            {

               type : 3,
               name : 'query',
               required : false,
               description : 'alter prompt'
               
            },
            {

               type : 3,
               name : 'status',
               required : false,
               description : 'turn [on/off] discussion',
               choices : [

                  {

                     name : 'on',
                     value : 'on'

                  },
                  {

                     name : 'off',
                     value : 'off'

                  }

               ]

            }

         ]

      }

   }


   private _setQuery(query: string): string {

      configs.query = query;
      return `\`Query: ${configs.query}\`\n`;

   }


   private _setStatus(status: string): string {

      configs.status = status;
      return `\`Status: ${configs.status}\`\n`;

   }


   async run({
      
      query, 
      status, 
      isDiscrete = false
   
   }: DiscussionProps): Promise<string> {

      let response: string = '';

      // if (status or query) <
      // else (then default) <
      if (query) {response += this._setQuery(query);}
      if (status) {response += this._setStatus(status);}
      else {

         if ((configs.status == 'on') && (isDiscrete == false)) {

            response += await this._chatgpt.query(configs.query);

         }

      }

      // >

      return response;

   }

   
}