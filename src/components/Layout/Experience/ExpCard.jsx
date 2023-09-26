import { Work__element } from "../../../data/Base";

const ExpCard = () => {
  return (
    <div className="exp__cards">
      {Work__element.map((item) => (
        <div key={Date.now()} className="exp__card">
          <img src={item.workImage} alt={item.compant_name} />

          <div className="about__work">
            <h3>{item.compant_name}</h3>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ul>
          </div>

          <p>{item.end}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpCard;
