// import <
const cron = require('node-cron');
import { discord } from 'lxrbckl';

import conch from './commands/conch';
import choose from './commands/choose';
import config from './config/configClient';
import discussion from './commands/discussion';

// >


export default class Client {


   private _discord: discord;


   constructor() {

      this._discord = new discord({

         commands : {

            'conch' : new conch(),
            'choose' : new choose(),
            'discussion' : new discussion()

         },

         guildId : config.guildId,
         channelId : config.channelId,
         applicationId : config.applicationId

      });

   }


   async run(): Promise<void> {

      this._discord.login({token : config.token});
      this._discord.registerCommands();

      await this._listen();
      await this._schedule();

   }


   private async _listen(): Promise<void> {

      this._discord.registerInteractionCreate(async (interaction) => {

         // try (send message from command) <
         // except (then no message) <
         try {

            await interaction.reply({

               ephemeral : true,
               content : await this._discord.commands[interaction.commandName].run({

                  // (conch, choose, discussion) <
                  conch : interaction.options.get('conch')?.value,

                  choose : interaction.options.get('choose')?.value,

                  isDiscrete : true,
                  query : interaction.options.get('query')?.value,
                  status : interaction.options.get('status')?.value

                  // >

               })

            });

         } catch (error) {}

         // >

      });

   }


   private async _schedule(): Promise<void> {

      this._discord.registerOnReady(async () => {

         this._discord.messageChannel({

            isInline : true,
            content : await this._discord.commands['discussion'].run({})

         });

         // cron.schedule('0 0 * * 1', async () => {


            
         // });

      });

   }


}