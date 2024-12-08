var configOpenai: {

   token: string,
   query: string,
   status: string

} = {

   token : process.env.TokenOpenAi!,
   status : process.env.Status!,
   query : process.env.Query!

}


// export <
export default configOpenai;

// >