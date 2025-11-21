const investBtn = document.getElementById("invest-btn")
const liveContainer = document.getElementById("price-display")
const outputsDialog = document.getElementById("outputs")
const investSummary = document.getElementById("investment-summary")
const investAmount = document.getElementById("investment-amount")
const summaryBtn = document.getElementById("summary-btn")

investBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  outputsDialog.showModal()
  investSummary.textContent = `You just bought ${investAmount.value/liveContainer.textContent} BTC.`
})

summaryBtn.addEventListener("click",()=>outputsDialog.close())


const eventSource = new EventSource("/price")


eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const price = data.price
  liveContainer.textContent = price
}

eventSource.onerror = ()=>{
  console.log("Connection lost. Attempting to reconnect....")
}