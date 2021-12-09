'use strict';
/**
Beispiel für eine eigene React Dummy Klasse

*/
class MyDummy extends React.Component {
  constructor(props) {
    super(props);
    //alert ('constructed');
  }
  render() {
      return (
        <h1>
          Nur ne Überschrift
        </h1>
      );
    }
}
