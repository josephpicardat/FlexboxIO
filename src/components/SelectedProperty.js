import './css/Property.css';
import './css/Body.css';

function Property(flexed) {
  return (
    <div className="propertyWrapper">
      <h2 className="propertyName">Justify-Content:</h2>
      <ul className="propertyList">
        <li className="propertyItems">
          <button className="propertyButtons"></button>flex-start
        </li>
        <li className="propertyItems">
          <button className="propertyButtons"></button>flex-start
        </li>
        <li className="propertyItems">
          <button className="propertyButtons"></button>flex-start
        </li>
        <li className="propertyItems">
          <button className="propertyButtons"></button>space-between
        </li>
      </ul>
    </div>
  );
}

export default Property;
