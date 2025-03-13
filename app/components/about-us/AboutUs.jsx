import React from "react";
import Timeline from "../Timeline/Timeline";

const AboutUs = () => {
    const events = [
        {
            id: 1,
            title: "First met at Apple/IIM",
            description: "fghiop[k;lnjbncgfdftyuioklnbvhcgfdftyuiojlknjbvhgcdftyfjuijkhvgftyugihug",
            date: "2015",
            time: "10:00",
            location: "Location 1"
        },
        {
            id: 2,
            title: "Blockchain Project Collaboration",
            description: "This is the description of event 2 gfhiop[iuyyftfcvbjkouytfgvhbjhiuyghbjhiyutghjuytyfgvhu",
            date: "2019",
            time: "10:00",
            location: "Location 2"
        },
        {
            id: 3,
            title: "The Techno Byte Incorporation",
            description: "This is the description of event 3",
            date: "2023",
            time: "10:00",
            location: "Location 3"
        },
    ];

    return (
        <section className="p-48 flex flex-col items-center relative border-amber-400">
            <div className="absolute top-2 p-6">
                <h1 className="text-5xl">About Us</h1>
            </div>
            <Timeline events={events} />
        </section>
    );
};

export default AboutUs;
