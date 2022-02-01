export const getDataFromSF = async () => {
    const resp = await (
      await fetch(`https://intelligent-cloud-app.herokuapp.com/read`, {
        mode: "no-cors",
        headers: { Accept: "application/json" },
      })
    );
    console.log(JSON.parse(resp.body));
    return JSON.parse(resp.body);
  };