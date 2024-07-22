import TicketNum from "./TicketNum"

export default function Ticket ({ticket}){
    return (
        <>
            {ticket.map ((num, id)=>(
             <TicketNum num ={num} key={id}/>
            ))}
        </>
    )
}