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


// describe('Newman JSON validation', () => {
//   it('validates JSON response', async () => {
//       // Read CSV file
//       const csvData = fs.readFileSync('path/to/data.csv', 'utf8');
      
//       // Run Newman command to get JSON response
//       const { stdout } = await newman.run({
//           collection: "../qrcode_data.json",
//           environment: "../testcases/test_data.csv",
//           iterationData: csvData,
//           reporters: 'json',
//       });

//       // Parse JSON response
//       const jsonResponse = JSON.parse(stdout);

//       // Perform assertion on the JSON response
//       assert.deepEqual(jsonResponse.run.stats.tests, jsonResponse.run.stats.passes);
//   });
// });
