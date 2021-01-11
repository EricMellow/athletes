import React from 'react';
import Workout from './Workout';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as getExercise from '../../api/getExercise';
Enzyme.configure({ adapter: new Adapter() });

describe('Workout', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      workout: {
        "id": 77667820,
        "userId": 29891,
        "datetimeCompleted": "2018-03-05 06:42:13",
        "blocks": [
          {
            "exerciseId": 568,
            "sets": [
              {
                "reps": 3,
                "weight": 0
              },
              {
                "reps": 6,
                "weight": 160
              }
            ]
          },
          {
            "exerciseId": 568,
            "sets": [
              {
                "reps": 1,
                "weight": 155
              },
              {
                "reps": 3,
                "weight": null
              },
              {
                "reps": 9,
                "weight": 145
              }
            ]
          },
          {
            "exerciseId": 797,
            "sets": [
              {
                "reps": 12,
                "weight": null
              },
              {
                "reps": 4,
                "weight": 145
              },
              {
                "reps": 1,
                "weight": 155
              },
              {
                "reps": 0,
                "weight": 160
              }
            ]
          }
        ]
      }
    };
    wrapper = shallow(<Workout {...props} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        workout: {
          "id": 77667820,
          "userId": 29891,
          "datetimeCompleted": "2018-03-05 06:42:13",
          "blocks": [
            {
              "exerciseId": 568,
              "sets": [
                {
                  "reps": 3,
                  "weight": 0
                },
                {
                  "reps": 6,
                  "weight": 160
                }
              ]
            },
            {
              "exerciseId": 568,
              "sets": [
                {
                  "reps": 1,
                  "weight": 155
                },
                {
                  "reps": 3,
                  "weight": null
                },
                {
                  "reps": 9,
                  "weight": 145
                }
              ]
            },
            {
              "exerciseId": 797,
              "sets": [
                {
                  "reps": 12,
                  "weight": null
                },
                {
                  "reps": 4,
                  "weight": 145
                },
                {
                  "reps": 1,
                  "weight": 155
                },
                {
                  "reps": 0,
                  "weight": 160
                }
              ]
            }
          ]
        }
      };
      wrapper = shallow(<Workout {...props} />);
    });

    it('should call getExercises', () => {
      const spy = jest.spyOn(wrapper.instance(), 'getExercises');
      wrapper.instance().componentDidMount();
      expect(spy).toHaveBeenCalled();
    })
  })

  describe('getExercises', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        workout: {
          "id": 77667820,
          "userId": 29891,
          "datetimeCompleted": "2018-03-05 06:42:13",
          "blocks": [
            {
              "exerciseId": 568,
              "sets": [
                {
                  "reps": 3,
                  "weight": 0
                },
                {
                  "reps": 6,
                  "weight": 160
                }
              ]
            },
            {
              "exerciseId": 568,
              "sets": [
                {
                  "reps": 1,
                  "weight": 155
                },
                {
                  "reps": 3,
                  "weight": null
                },
                {
                  "reps": 9,
                  "weight": 145
                }
              ]
            },
            {
              "exerciseId": 797,
              "sets": [
                {
                  "reps": 12,
                  "weight": null
                },
                {
                  "reps": 4,
                  "weight": 145
                },
                {
                  "reps": 1,
                  "weight": 155
                },
                {
                  "reps": 0,
                  "weight": 160
                }
              ]
            }
          ]
        }
      };
      wrapper = shallow(<Workout {...props} />);
    });

    it('should call getExercise for each block in the workout', () => {
      const spy = jest.spyOn(getExercise, 'default');
      wrapper.instance().getExercises();
      expect(spy).toHaveBeenCalledTimes(3);
    })
  })

  // describe('getTableRows', () => {
  //   let wrapper;

  //   beforeEach(() => {
  //     const props = {
  //       workout: {
  //         "id": 77667820,
  //         "userId": 29891,
  //         "datetimeCompleted": "2018-03-05 06:42:13",
  //         "blocks": [
  //           {
  //             "exerciseId": 568,
  //             "sets": [
  //               {
  //                 "reps": 3,
  //                 "weight": 0
  //               },
  //               {
  //                 "reps": 6,
  //                 "weight": 160
  //               }
  //             ]
  //           },
  //         ]
  //       }
  //     };
  //     wrapper = shallow(<Workout {...props} />);
  //   })

  //   it('should return table rows', () => {
  //     const expected = [
  //       <tr key={key * ii}>
  //         <td>Bench Press</td>
  //         <td>1</td>
  //         <td>3</td>
  //         <td>0</td>
  //         <td>0</td>
  //       </tr>,
  //       <tr key={key * ii}>
  //         <td>Bench Press</td>
  //         <td>2</td>
  //         <td>6</td>
  //         <td>160</td>
  //         <td>960</td>
  //       </tr>,
  //     ]
  //     wrapper.setState({
  //       exercises: [
  //         {
  //           "id": 568,
  //           "title": "Bench Press"
  //         },
  //         {
  //           "id": 568,
  //           "title": "Bench Press"
  //         },
  //       ]
  //     })
  //     const result = wrapper.instance().getTableRows().map(point => {
  //         return shallow(point).html();
  //       });
  //     expect(result).toEqual(expected);
  //   })
  // })

});
