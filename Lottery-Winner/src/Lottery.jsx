import { useState } from "react";
import './Lottery.css'
import { randomNumber, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}) {
  let [ticket, setTicket] = useState(randomNumber(n));
  
  let winning = sum(ticket) === winningSum;
  
  


   let buyTicket = ()=>{
    setTicket(randomNumber(n));
   }
  
  return (
    <>
      <h1> Lottery Ticket</h1>

      <div className="lottery">
      <h3 className="ticketnum">Ticket Number</h3>
      
      <div className={`lottery-2 ${winning ? 'green-background' : ''}`}>
          <Ticket ticket={ticket} />
        </div>
    </div>
      <button onClick={buyTicket} className="button">Buy New Ticket </button>
      <h3 className="winGreen">{winning && "Congratulations, you won!"}</h3>
    </>
  );
}
