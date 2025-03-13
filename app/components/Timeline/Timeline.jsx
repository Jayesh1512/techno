import React from "react";

const Timeline = ({ ...props }) => {

    return (
        <>
            <div className="timeline flex gap-16 justify-between">
                {
                    props.events.map((event) => (
                        <div key={event.id} className="flex flex-col gap-4">
                            <div className=" circle bg-white w-6 h-6 rounded-full " />
                            <div>
                                <h2>{event.title}</h2>
                                <span>{event.date || event.time}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Timeline;
