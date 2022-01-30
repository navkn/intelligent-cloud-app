export const getDataFromSF = async () => {
    //subreddit = subreddit || "worldnews";
    const resp = await (
      await fetch(`https://intelligent-code.herokuapp.com/`, {
        mode: "no-cors",
        headers: { Accept: "application/json" },
      })
    );
    console.log(resp);
    return resp;
  };