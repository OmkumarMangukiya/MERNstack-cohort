const client = require('./client');
async function init(){
    await client.expire("user:2", 15);
    const result = await client.get("user:2");
    console.log(result);
}
init();