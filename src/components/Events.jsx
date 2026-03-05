import { events } from "../data/events"

export default function Events(){

return(

<section className="events">

<h2>Upcoming Nights</h2>

<div className="events-grid">

{events.map((event,index)=>(

<div key={index} className="event-card">

<h3>{event.name}</h3>

<p>{event.venue}</p>

<p>{event.spots} spots left</p>

<button className="btn">Apply</button>

</div>

))}

</div>

</section>

)

}
