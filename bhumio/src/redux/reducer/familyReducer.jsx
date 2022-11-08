const intialstate =
    // {
    //     id: 0,
    //     name: 'Root',
    //     spouse: 'some subtext',
    //     birth: '',
    //     address:'',
    //     photo:'',
    //     childId: [1, 2]
    //   },
    // {
    //     id: 1,
    //     name: 'Child',
    //     spouse: 'some subtext',
    //     birth: '',
    //     address:'',
    //     photo:'',
    //     childId: [3]
    //   },
    //  {
    //     id: 2,
    //     name: 'Child2',
    //     subtext: 'Child subtext',
    //     spouse: 'some subtext',
    //     birth: '',
    //     address:'',
    //     photo:'',
    //     childId: []
    //   },
    //  {
    //     id: 3,
    //     name: 'GrandChild',
    //     spouse: 'some subtext',
    //     birth: '',
    //     address:'',
    //     photo:'',
    //     childId: [0]
    //   }
    {
        id: 74,
        name:'Great Grandparents',
        parentId: null,
        spouse: 'text',
        location:'bhopal',
        birth: '1/1/39',
        address:'aM KD ',
        photo:'https://picsum.photos/id/237/200/300',
        children: [
          {
            id: 62,
            name:'Grandparents1',
            parentId: 74,
            location:'bhopal',
            spouse: 'Text',
            birth: '1/1/59',
            address:'aM KD ',
            photo:'https://picsum.photos/id/237/200/300',
            children: [
              { id: 56,
                name:'Son',
                spouse: 'Text',
                location:'Bengaluru',
                birth: '1/1/60',
                address:'aM KD ',
                photo:'https://picsum.photos/id/237/200/300',
                parentId: 62 },
              { id: 63,
                name:'Daughter', 
                spouse: 'NA',
                location:'Mumbai',
                birth: '1/1/55',
                address:'aM KD ',
                photo:'https://picsum.photos/id/237/200/300',
                parentId: 62 }],
          },
          {
            id: 86,
            name:'Grandparents2',
            spouse: 'AB',
            location:'Pune',
            birth: '1/1/56',
            address:'aM KD ',
            photo:'https://picsum.photos/id/237/200/300',
            parentId: 74,
            children: [
              {
                id: 80,
                name:'son1',
                parentId: 86,
                spouse: 'some subtext',
                location:'bhopal',
                birth: '1/1/90',
                address:'aM KD ',
                photo:'https://picsum.photos/id/237/200/300',
                children: [{ id: 81,
                  name:'son1',
                  spouse: 'some subtext',
                  location:'USA',
                  birth: '1/1/90',
                  address:'Seattle',
                  photo:'https://picsum.photos/id/237/200/300',
                  parentId: 80 },
                 { id: 76,
                  name:'son2',
                  spouse: 'some subtext',
                  location:'bhopal',
                  birth: '1/1/90',
                  address:'aM KD ',
                  photo:'https://picsum.photos/id/237/200/300',
                  parentId: 80 }],
              },
              { id: 87,
                 name:'son2',
                 spouse: '',
                 location:'London',
                 birth: '1/1/80',
                 address:'street 2',
                 photo:'https://picsum.photos/id/237/200/300',
                 parentId: 86 },
            ],
          },
        ],
      }
    



const familyReducer = (state= intialstate,action ) => {
    switch (action.type){
        case 'UPDATE_FAMILY':
            return {...action.payload};
        default:
            return state;    
    }
}
export default familyReducer;