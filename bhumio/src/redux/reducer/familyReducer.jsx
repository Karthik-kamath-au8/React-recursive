const intialState =
    // {
    //     id: 0,
    //     name: 'Root',
    //     Spouse: 'Some subtext',
    //     Birth: '',
    //     Address:'',
    //     photo:'',
    //     childId: [1, 2]
    //   },
    // {
    //     id: 1,
    //     name: 'Child',
    //     Spouse: 'Some subtext',
    //     Birth: '',
    //     Address:'',
    //     photo:'',
    //     childId: [3]
    //   },
    //  {
    //     id: 2,
    //     name: 'Child2',
    //     subtext: 'Child subtext',
    //     Spouse: 'Some subtext',
    //     Birth: '',
    //     Address:'',
    //     photo:'',
    //     childId: []
    //   },
    //  {
    //     id: 3,
    //     name: 'GrandChild',
    //     Spouse: 'Some subtext',
    //     Birth: '',
    //     Address:'',
    //     photo:'',
    //     childId: [0]
    //   }
    {
        id: 74,
        name:'GrandFather',
        parentId: null,
        Spouse: 'Some subtext',
        Location:'Bhopal',
        Birth: '1/1/90',
        Address:'AM KD ',
        photo:'',
        children: [
          {
            id: 62,
            name:'son1',
            parentId: 74,
            Location:'Bhopal',
            Spouse: 'Some subtext',
            Birth: '1/1/90',
            Address:'AM KD ',
            photo:'',
            children: [
              { id: 56,
                name:'son1',
                Spouse: 'Some subtext',
                Location:'Bhopal',
                Birth: '1/1/90',
                Address:'AM KD ',
                photo:'',
                parentId: 62 },
              { id: 63,
                name:'son2', 
                Spouse: 'Some subtext',
                Location:'Bhopal',
                Birth: '1/1/90',
                Address:'AM KD ',
                photo:'',
                parentId: 62 }],
          },
          {
            id: 86,
            name:'son2',
            Spouse: 'Some subtext',
            Location:'Bhopal',
            Birth: '1/1/90',
            Address:'AM KD ',
            photo:'',
            parentId: 74,
            children: [
              {
                id: 80,
                name:'son1',
                parentId: 86,
                Spouse: 'Some subtext',
                Location:'Bhopal',
                Birth: '1/1/90',
                Address:'AM KD ',
                photo:'',
                children: [{ id: 81,
                  name:'son1',
                  Spouse: 'Some subtext',
                  Location:'Bhopal',
                  Birth: '1/1/90',
                  Address:'AM KD ',
                  photo:'',
                  parentId: 80 },
                 { id: 76,
                  name:'son2',
                  Spouse: 'Some subtext',
                  Location:'Bhopal',
                  Birth: '1/1/90',
                  Address:'AM KD ',
                  photo:'',
                   parentId: 80 }],
              },
              { id: 87,
                 name:'son2',
                 Spouse: 'Some subtext',
                 Location:'Bhopal',
                 Birth: '1/1/90',
                 Address:'AM KD ',
                 photo:'',
              parentId: 86 },
            ],
          },
        ],
      }




const familyReducer = (state= intialState,action ) => {
    switch (action.type){
        case 'ADD_FAMILY':
            return(action.payload);
        default:
            return state;    
    }
}
export default familyReducer;