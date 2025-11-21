
const API_KEY = "sghr7add82m5vaygph6q";

async function getBitcoinPrice() {
  try {
    const response = await fetch("https://api.freecryptoapi.com/v1/getData?symbol=BTC",{
      method: "GET",
      headers: {
        "accept": "*/*",
        "Authorization": `Bearer ${API_KEY}`
      }
    });

    const data = await response.json();
    return data.symbols[0].last

  } catch (err) {
    console.error("Error:", err);
  }
}



export function handlePrice(req,res){
  res.statusCode = 200
  res.setHeader("Connection","keep-alive")
  res.setHeader("cache-Control","no-cache")
  res.setHeader("Content-Type","text/event-stream")

  setInterval(async ()=>{
    const priceData = await getBitcoinPrice()
    res.write(
      `data: ${JSON.stringify({
        event:"price-update",
        price: priceData
      })}\n\n`
    )
  },1000)
}