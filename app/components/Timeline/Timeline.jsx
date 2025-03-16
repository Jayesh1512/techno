"use client";

import React from "react";
import { useState, useEffect, useMemo } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegCalendarAlt, FaApple } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const Timeline = ({ events }) => {
    const [layout, setLayout] = useState("2-columns");
    useEffect(() => {
        const updateLayout = () => {
            setLayout(window.innerWidth > 768 ? "2-columns" : "1-column-left");
        }
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);
    const getIcon = (id) => {
        switch (id) {
            case 1: {
                return <FaApple className="text-white text-lg md:text-xl" />
            }
            case 2: {
                return <SiBlockchaindotcom className="text-white text-lg md:text-xl" />
            }
            // case 3: {
            //     return (
            //         <Image />
            //     )
            // }
            default: {
                return <FaRegCalendarAlt className="text-white text-lg md:text-xl" />;
            }
        }
    }
    const memoizedEvents = useMemo(() => events, [events]);

    return (
        <div className="w-full">
            <VerticalTimeline animate={true} layout={layout}>
                {memoizedEvents.map((event) => (
                    <VerticalTimelineElement
                        key={event.id}
                        date={`${event.date || event.time}`}
                        icon={getIcon(event.id)}
                        iconClassName=" bg-[url('/bg-icon.png')] border-0 bg-[#000] bg-cover bg-center bg-no-repeat"
                        contentStyle={{
                            backgroundImage: "url('/bg.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            borderRadius: "10px",
                            color: "#ffff",
                            maxWidth: "500px",
                        }}
                        contentArrowStyle={{ borderRight: "13px solid #ffff" }}
                    >

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">{event.title}</h3>
                            <h4 className="text-gray-300 text-lg">{event.location}</h4>
                            <p className="text-gray-400 text-left text-sm">{event.description}</p>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;