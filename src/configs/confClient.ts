const configClient: {

   token: string,
   guildId: string,
   channelId: string,
   applicationId: string

} = {

   token : process.env.TokenDiscord!,
   guildId : process.env.GuildId!,
   channelId : process.env.ChannelId!,
   applicationId : process.env.ApplicationId!

}


// export <
export default configClient;

// >