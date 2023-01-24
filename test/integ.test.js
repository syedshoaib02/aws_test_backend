require('dotenv').config()
const axios=require('axios');

test("Service returns 'Hello World!'", async () => {
  try {
    const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
    const response2 = await axios.get(process.env.SERVICE_ENDPOINT2, {});
    console.log(response)
    console.log(response2)

    expect(response.data).toBe(response2);
  } catch (e) {
    console.error(e);
    throw e;
  }
});