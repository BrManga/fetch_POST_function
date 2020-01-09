const POST = async (url = "", data = {}) => {
  let result = await fetch(`${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    header: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });

  return await result.json();
};

export default POST;
