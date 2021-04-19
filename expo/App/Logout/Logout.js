import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,SafeAreaView, ScrollView} from 'react-native'
import { Card} from 'react-native-elements'
import { h, w} from "../../dimensions.js"
export default class Logout extends Component {
    static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
        
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}
    
    constructor(props) {
		super(props);
        this.state={
            mockData:[]
        }
	}

   componentDidMount(){
	this.getMockData(); 
   }


	getMockData = async () => {

		try {
		  const response = await fetch('https://run.mocky.io/v3/90187550-741e-4e24-906e-f6524b489463');

		  const data = await response.json();
          
		  return this.setState({mockData:data.sample});

		} catch (error) {
		   console.error(error);
		}
	  }; 


	 
   


    render() {
    console.log(this.state.mockData)
    
   
	

        const { navigation } = this.props;
        const name= navigation.getParam('name', '');
        const email = navigation.getParam('email', '');
        return (
			<SafeAreaView style={styles.card}>
			<ScrollView>
            <View style={styles.signup2View}>
                <Text>Welcome : {name}</Text>
                <Text>Email : {email}</Text>
                <View style={styles.AlignButton}>
				<TouchableOpacity
						//onPress={(e)=> {navigation.goBack()}}
					    onPress={this.getMockData}
						style={styles.dataButton}>
						<Text
							style={[styles.loginButtonText,{color:'#fff',textAlign:'center'}]}>Gallery</Text>
				</TouchableOpacity>
				<TouchableOpacity
					//	onPress={()=> {navigation.goBack()}}
					onPress={()=> {navigation.navigate('Signup1')}}
						style={styles.loginButton}>
						<Text
							style={styles.loginButtonText}>Logout</Text>
				</TouchableOpacity>
				</View>
						
				{this.state.mockData.map((data, index)=> {
				return (
					<Card key={index} style={styles.card}>
				    
					<View style={styles.card}>
					<Card.Title>{data.description}</Card.Title>
					<Image
                     style={styles.tinyLogo}
                     source={{
                        uri: data.image,
                      }}
                    />
					
					
				</View>
				</Card>
				
				)

				
			})}
			
            </View>
			</ScrollView>	
			</SafeAreaView>
        )
    }

    

}
const styles = StyleSheet.create({
	card:{
      flex:1,
	  padding:0,
	  margin:0

	},
	AlignButton:{
      flex:1,
	  flexDirection:'row',
	  justifyContent:'center',
	  width:100*w,
	  height:'auto'
	},
	dataButton:{
		backgroundColor: "#8a2be2",
		padding: 0,
		width: 20.67*w,
		height: 2.22*h,
		marginRight: 0.53*w,
	},
	signup2View: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
        justifyContent:"center"
	},
    loginButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 10.67*w,
		height: 2.22*h,
		marginRight: 0.53*w,
	},
    loginButtonText: {
		color: "rgb(208, 2, 27)",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	tinyLogo: {
		width: 100*w,
		height: 40*h,
	  },
})
