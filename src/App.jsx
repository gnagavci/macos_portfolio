import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import Terminal from "#windows/Terminal.jsx";
import SafariWindow from "#windows/Safari.jsx";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <SafariWindow />
        </main>
    );
};

export default App;
