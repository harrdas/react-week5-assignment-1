import LocationsContainer from './LocationsContainer';

jest.mock('react-redux');

export default function App() {
  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <LocationsContainer />
      <h2>Category</h2>
      <ul>
        <li>한식</li>
        <li>분식</li>
      </ul>
    </>
  );
}
