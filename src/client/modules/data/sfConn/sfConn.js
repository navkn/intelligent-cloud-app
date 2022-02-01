export const getDataFromSF = async () => {
    const resp = await (
      await fetch(`https://intelligent-cloud-app.herokuapp.com/read`, {
        mode: "no-cors",
        headers: { Accept: "application/json" },
      })
    );
    console.log(resp);
    return resp;
  };