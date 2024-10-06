import React from 'react'

const data = [
    {
        id: 1,
        title: "Check the laundry",
        text: "Need to check the laundry by Monday",
        day: "1",
        month: "2",
        year: "2023",
    },
    {
        id: 2,
        title: "Buy groceries",
        text: "Pick up vegetables and fruits before the weekend",
        day: "7",
        month: "10",
        year: "2024",
    },
    {
        id: 3,
        title: "Call the dentist",
        text: "Book an appointment for a dental checkup",
        day: "15",
        month: "6",
        year: "2024",
    },
    {
        id: 4,
        title: "Water the plants",
        text: "Remember to water the plants in the garden",
        day: "23",
        month: "8",
        year: "2023",
    },
    {
        id: 5,
        title: "Finish project report",
        text: "Submit the final project report by the deadline",
        day: "12",
        month: "9",
        year: "2024",
    },
    {
        id: 6,
        title: "Birthday gift for Sarah",
        text: "Get a present for Sarah's birthday",
        day: "30",
        month: "11",
        year: "2023",
    },
    {
        id: 7,
        title: "Car service",
        text: "Schedule the annual car service appointment",
        day: "18",
        month: "4",
        year: "2024",
    },
    {
        id: 8,
        title: "Pay electricity bill",
        text: "Pay the electricity bill before the due date",
        day: "5",
        month: "7",
        year: "2023",
    },
    {
        id: 9,
        title: "Plan weekend trip",
        text: "Organize a trip for the weekend getaway",
        day: "22",
        month: "5",
        year: "2024",
    },
    {
        id: 10,
        title: "Attend friend's wedding",
        text: "Be at Alex's wedding and RSVP beforehand",
        day: "9",
        month: "3",
        year: "2024",
    },
    {
        id: 11,
        title: "Doctor’s appointment",
        text: "Regular check-up at the doctor’s clinic",
        day: "6",
        month: "12",
        year: "2023",
    },
    {
        id: 12,
        title: "Renew subscription",
        text: "Renew the streaming service subscription for another year",
        day: "21",
        month: "1",
        year: "2024",
    },
    {
        id: 13,
        title: "Organize bookshelf",
        text: "Sort and clean the bookshelf this weekend",
        day: "17",
        month: "2",
        year: "2024",
    },
    {
        id: 14,
        title: "Complete tax forms",
        text: "Finish and submit tax forms before the deadline",
        day: "13",
        month: "10",
        year: "2023",
    },
    {
        id: 15,
        title: "Buy cat food",
        text: "Get more cat food for the month",
        day: "4",
        month: "9",
        year: "2024",
    },
    {
        id: 16,
        title: "Schedule meeting",
        text: "Set up a meeting with the new client",
        day: "11",
        month: "6",
        year: "2023",
    }
];


export default function DummyData() {
  return (
    <div className='py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {data.map((item) =>{
            return (
            <div key={item.id} > 
                <div className='border border-solid bg-yellow-100 rounded-lg border-slate-400 '>
                    <div className='flex justify-between items-start border-b-2 border-black w-full min-h-[25px]'>
                        <h1 className='whitespace-pre-wrap'>{item.title}</h1>                   
                        <i className="fa-solid fa-trash text-red-600 p-1"/>
                    </div>
                    <p className='min-h-[100px] my-2 whitespace-pre-wrap'>{item.text}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}
