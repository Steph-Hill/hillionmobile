import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [

  {
    key:"one1",
    title:"Plage de l'Anse Couleuvre (Le Précheur)",
    text:"Vous êtes dans le village du Prêcheur, au nord de l'île de la Martinique. La première chose à faire est de déterminer le moment où vous décidez de vous arrêter sur l'une des plus belles plages de votre vie : Anse Couleuvre. ",
    image:require("./images/1.png")

  },
  {
    key:"two",
    title:"Les plages des Anses d'Arlet",
    text:"Bienvenue dans l'un des plus beaux et des plus évocateurs coins du sud de la Martinique. Ici, à Anses d'Arlet, vous trouverez quelques-unes des plages les plus populaires des Petites Antilles.",
    image:require("./images/2.png")

  },
  {
    key:"three",
    title:"Plage de diamants",
    text:"Ceux qui viennent en Martinique passent au moins une fois par la plage de diamants, une plage qui vaut chaque instant de votre visite. Ici, vous pouvez non seulement vous détendre et dormir longtemps sur du sable blanc et doux, mais si vous le souhaitez, vous pouvez aussi essayer des sports nautiques de toutes sortes, comme le surf ou la plongée avec tuba.",
    image:require("./images/3.png")

  },
   {
    key:"three",
    title:"Plage de l'Anse Trabaud",
    text:"La plage de carte postale de l'Anse Trabaud est située au sud de l'île de la Martinique, la fleur des Caraïbes, à quelques kilomètres de Sainte-Anne. Il n'y a pas de bains publics à l'Anse Trabaud, alors faites attention si vous décidez d'emmener vos enfants avec vous.",
    image:require("./images/4.png")

  },
   {
    key:"three",
    title:"Les plages de la Caravelle",
    text:"La péninsule de la Caravelle offre des plages non polluées, presque désertes. Un endroit très spécial où vous pouvez vous consacrer à des activités telles que le trekking. Située dans la partie nord de la côte martiniquaise.",
    image:require("./images/5.png")

  },
   {
    key:"three",
    title:"Plage du Cap Macré",
    text:"Bienvenue à Marin, au sud de l'île de la Martinique. Cette zone spectaculaire de l'île offre des vues à couper le souffle sur la baie, des restaurants de fruits de mer frais et des plages de cartes postales, à photographier.",
    image:require("./images/6.png")

  },
  
]
export default class App extends React.Component {
  state = {showHomePage :false}
  _renderItem = ({item}) => {
    return(
      <View style={{flex:1}}>

          <Image
              source={item.image}
              style={{
                resizeMode:"cover",
                height:"73%",
                width:"100%"

              }}

          />
        <Text style={{

          paddingTop:25,
          paddingBottom:10,
          fontSize:23,
          fontWeight:"bold",
          color:"#21465b",
          alignSelf:"center",

        }}
        >{item.title}
        </Text>
        <Text style={{

          textAlign:"center",
          color:"b5b5b5",
          fontSize:15,
          paddingHorizontal:30

        }}>

          {item.text}
        </Text>
      </View>

    )

  }

    render(){
      if(this.state.showHomePage){

        return <App/>
      }else
      return (
        
        <AppIntroSlider

          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor:"#21465b",
            width:30
          }}

        />

      );
      
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
