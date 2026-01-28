import { locations } from "#constants/index.js";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import React from "react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work?.children || [];

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        Draggable.create(".folder");
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/folder.png`}
                            alt={project.name}
                        />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;
