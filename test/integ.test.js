require('dotenv').config()
const axios=require('axios');

test("Service returns 'Hello World!'", async () => {
  try {
    const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
    console.log(response)
    expect(response.data).toBe("Welcome to aws test Backend part 1");
  } catch (e) {
    console.error(e);
    throw e;
  }
});