'use strict';



class MyList extends React.Component {
    
    
    constructor(props) {
      super(props);     
      
    }
    render() {
      const incomings = aa.tags.cI;
      console.log("incoming ist :" + incomings, "from myList");
        return (
          
          <div>
          <h1>
              Hallo
            {incomings.forEach(i => {
              <div></div>            })}
          </h1>
         </div>
        );
      }
  }