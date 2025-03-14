import React from "react";
import Timeline from "../Timeline/Timeline";

const AboutUs = () => {
    const events = [
        {
            id: 1,
            title: "First met at Apple/IIM",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores aspernatur minima. Consectetur nesciunt veniam, consequatur nulla minus porro unde omnis enim adipisci quas odio, facilis est. Officia, eius quisquam.",
            date: "2015",
            time: "10:00",
            location: "USA"
        },
        {
            id: 2,
            title: "Blockchain Project Collaboration",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores aspernatur minima. Consectetur nesciunt veniam, consequatur nulla minus porro unde omnis enim adipisci quas odio, facilis est. Officia, eius quisquam.",
            date: "2019",
            time: "10:00",
            location: "India"
        },
        {
            id: 3,
            title: "The Techno Byte Incorporation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores aspernatur minima. Consectetur nesciunt veniam, consequatur nulla minus porro unde omnis enim adipisci quas odio, facilis est. Officia, eius quisquam.",
            date: "2023",
            time: "10:00",
            location: "India"
        },
    ];

    return (
        <section id="about-us" className=" md:px-32 px-2 pt-28  flex flex-col items-center relative">
            <div className="absolute top-2 p-6">
                <h1 className="text-5xl font-bold text-gray-200">About Us</h1>
            </div>
            <Timeline events={events} />
        </section>
    );
};

export default AboutUs;
