'use strict';
/**
Beispiel für eine eigene React Button Klasse
Die kann noch nicht sehr viel, außer event binding
*/
class MyButton extends React.Component {
  constructor(props) {
    super(props);
   // This binding is necessary to make `this` work in the callback
    this.clickMessage = this.clickMessage.bind(this);
    this.indexChannel;
  }
  
  clickMessage(){
    alert(aa.tags.cI[this.indexChannel] + " wurde geklickt");
  }
  
  
  //echt fieses workaround um den index aus props instanzattribut zu bekommen
  render() {

      return (
        <button style={{ background: "red" , margin: "10px" }} onClick={this.clickMessage}>
          {aa.tags.cI[String(this.indexChannel = this.props.index)]} 
        </button>

      );
    }
}
