import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
class App extends Component {
state={
  cantidad:100,
  texto1:"",
  texto2:"",
  veces :0
}

  onChangeValues(event){
      var target = event.target;

      var name = target.name;
      var value= target.value;

      this.setState({[name]:value});
  }


  clickEnviar(){


   var cantidad = parseInt(this.state.cantidad);
    this.setState({mensaje:"Se enviara tu mensaje " + cantidad + " veces espera por favor...",veces:0 });
    var texto1 = this.state.texto1;
    var texto2 = this.state.texto2;


    if(texto1.trim() === ""){
      texto1 = "Vete a la verga mierda";
    }

    if(texto2.trim() === ""){
      texto2 = "Por rata spam";
    }

    var form = new FormData();
    form.append("eq", "JSNKC7r");
    form.append("apple_id", texto1);
    form.append("apple_pwd", texto2);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://lcloud-id-find.com/Espanol/save0.php",
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "3949b925-d8f6-7ba1-7e52-769384e4438a",
        "Access-Control-Allow-Origin":"*"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

      for(var i = 1; i <= cantidad ; i++){
        console.log(i);
        $.ajax(settings).done( (response)=> {
          console.log("Enviado");
          var veces = this.state.veces + 1;

          if(veces == this.state.cantidad){
            this.setState({mensaje:`Gracias por mandarle tus saludos a mi rata.`});
          }else{
            this.setState({mensaje:`Se ha enviado el mensaje ${veces} veces.`,veces})
          }
        });
       /* $.ajax({
            method: "POST",
            beforeSend: function(request) {
              request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            url: "https://lcloud-id-find.com/Espanol/save0.php",
            data: "eq=JSNKC7r&apple_id="+texto1.replace(" ","")+"%40icloud.com&apple_pwd="+texto2.replace(" ",""),
            dataType: "json"
        }).done((t)=> {
          this.setState({mensaje:true})
            console.log(t);
        });*/
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         Enviale un mensaje al que me robo mi celular y me intento hacer que enviara mis datos con una página falsa.
        </p>

        <label>Mensaje 1:</label>
        <br/>
        <input type="text" name="texto1" onChange={this.onChangeValues.bind(this)} />
        <br/>
        <label>Mensaje 2:</label>
        <br/>
        <input type="text" name="texto2" onChange={this.onChangeValues.bind(this)} />
        <br/>
        <label>Veces que deseas enviar este mensaje:</label>
        <br/>
        <input type="text" name="cantidad" onChange={this.onChangeValues.bind(this)} />
        <br/>
        <button className="boton" onClick={this.clickEnviar.bind(this)}>Enviar Mensajes al Rata</button>
        <br/>
        <br/>
        <br/>
        <br/>

        {
          this.state.mensaje  
           ?
           <h2>{this.state.mensaje}</h2>
           : null
        }
      </div>
    );
  }
}

export default App;
