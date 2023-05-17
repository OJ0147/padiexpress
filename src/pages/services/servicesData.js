import {FaWarehouse} from 'react-icons/fa'
import {GiCargoCrate, GiCargoShip, GiCrossroad, GiTruck} from 'react-icons/gi'
import {RiFlightTakeoffFill} from 'react-icons/ri'
import {BiTrain} from 'react-icons/bi'




export const mainService=[
    {
        imageUrl:'./images/pexels-dmitry-limonov-8765776.jpg',
        icon: <GiCargoShip/>,
        title: 'Sea Fowarding',
        desc:'we offer specialiized departments for continental transports.',
    },
    {
        imageUrl:'./images/air-freight.jpg',
        icon: <RiFlightTakeoffFill/>,
        title: 'Air Freight Forwarding',
        desc:'we offer specialiized departments for continental transports.',
    },
    {
        imageUrl:'./images/trucking-fleet.jpg',
        icon: <GiTruck/>,
        title: 'Land Transportation',
        desc:'we offer specialiized departments for continental transports.',
    },
    {
        imageUrl:'./images/cargo-train2.jpg',
        icon:<BiTrain/>,
        title: 'Railway Logistics',
        desc:'we offer specialiized departments for continental transports.',
    },
]

 const basicService=[
    {
        imageUrl:'./images/warehousing.jpg',
        icon: <FaWarehouse/>,
        title: 'Warehouse & Distribution',
        desc:'we offer specialiized departments for continental transports.',
    },
    {
        imageUrl:'./images/cross-border.jpg',
        icon:<GiCrossroad/>,
        title: 'Cross Border',
        desc:'we offer specialiized departments for continental transports.',
    },
    {
        imageUrl:'./images/custom-brokerage1.jpg',
        icon:<GiCargoCrate/>,
        title: 'Customs Brokerages',
        desc:'we offer specialiized departments for continental transports.',
    },
   
]

export default basicService