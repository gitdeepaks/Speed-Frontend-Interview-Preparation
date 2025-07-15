import { Rating } from './components/Rating';

const App = () => {
  return (
    <div className="rating-container">
      <Rating
        heading="How do you feel about React?"
        feedbackMessages={[
          'Terrible',
          'Poor',
          'Fair',
          'Good',
          'VeryGood',
          'Excillent',
          'Exceptional',
        ]}
      />
    </div>
  );
};

export default App;
