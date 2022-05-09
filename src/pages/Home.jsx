import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import museumIcon from "../images/museum.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to get started:</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    imgSrc={museumIcon}
                    imgAlt="An illustration of a roman pantheon"
                    subject="Latin"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
