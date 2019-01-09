import { day } from '../src/date.js';
describe('Day', function() {

  var reusableDate;
  beforeEach(function() {
   reusableDate = ("Wednesday");
   console.log(reusableDate);
  
  });

  it('should return wednesday', function() {
    expect(day(2019,0,9)).toEqual(reusableDate);
  });


});

