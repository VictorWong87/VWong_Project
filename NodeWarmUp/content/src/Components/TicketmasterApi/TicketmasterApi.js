import { ApiExecute } from '../Common/apiExecute';

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
const apikey = "&apikey=vkrquvREGMgAgliPpzpTWBlDD8RUnAuo";

//https://app.ticketmaster.com/discovery/v2/events.json?keyword=BTS chicago&apikey=vkrquvREGMgAgliPpzpTWBlDD8RUnAuo

// get 
const getEvents = (event) => {
    return ApiExecute(`${baseUrl}keyword=${event}${apikey}`, "GETHeader", null, {'Access-Control-Allow-Origin':'*'});
}

export const TicketmasterApi = {
    getEvents
}