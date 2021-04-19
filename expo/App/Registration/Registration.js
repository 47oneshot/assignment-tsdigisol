
import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { h, w} from "../../dimensions.js"

export default class Registration extends React.Component {






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
            userData :{
                name :'',
                email : '',
                password :''
            },
            confirmPass:'',
        }
	}

	componentDidMount() {
        
	}
    
	onLoginPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
	}

    __handelChange=(e)=>{
    
    this.setState({userData :{...this.state.userData,[e.target.name]:e.target.value,
    }});
}
    
    __confirmPass=(e)=>{
        

     this.setState({confirmPass:e.target.value});
           
    }
    
         
        __onSubmit = () => {
              
        if(this.state.userData.password!==this.state.confirmPass){
            
            alert('Password Does Not Matched');
        }
        else if(this.state.userData.name!==''&& this.state.userData.email!==''&&this.state.userData.password!==''&&this.state.confirmPass!==''){
                const { navigate } = this.props.navigation
                navigate('Logout', this.state.userData);
                this.setState({userData :{...this.state.userData,name:'',email:'',password:'',
                }});
                this.setState({confirmPass:''});
            }
            else {
                alert('Please filled all registration details');
            }
             
          }

    

	render() {
	      
       console.log(this.state.userData)
		return <View
				style={styles.signup2View}>
				<Text
					style={styles.companynameText}>Registration Here</Text>
				<TextInput
					returnKeyType="next"
					autoCorrect={false}
					placeholder="Name"
					name='name'
                    value={this.state.userData.name}
                    onChange={this.__handelChange}
					style={styles.formField1TextInput}/>
				<TextInput
					returnKeyType="next"
					autoCorrect={false}
					placeholder="Email"
					name='email'
                    value={this.state.userData.email}
                    onChange={this.__handelChange}
					style={styles.formField2TextInput}/>
				<TextInput
					returnKeyType="next"
					autoCorrect={false}
					placeholder="Password"
					secureTextEntry={true}
					name='password'
                    value={this.state.userData.password}
                    onChange={this.__handelChange}
					style={styles.formField3TextInput}/>
				<TextInput
					returnKeyType="done"
					autoCorrect={false}
					placeholder="Confirm password"
                    value={this.state.confirmPass}
                    onChange={this.__confirmPass}
					secureTextEntry={true}
					style={styles.formField4TextInput}/>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity disabled={this.state.disabled}
					onPress={this.__onSubmit}
					style={styles.buttonButton}>
					<Text
						style={styles.buttonButtonText}>Registration</Text>
				</TouchableOpacity>
				
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.alreadyOnboardText}>Already onboard?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onLoginPressed}
						style={styles.loginButton}>
						<Text
							style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	signup2View: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	companynameText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "OpenSans-Bold",
		fontSize: 3.2*h,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 19.83*h,
	},
	formField1TextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 78.67*w,
		height: 5.3*h,
		marginTop: 8.13*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	formField2TextInput: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 78.67*w,
		height: 5.3*h,
		marginTop: 5.05*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	formField3TextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 78.67*w,
		height: 5.3*h,
		marginTop: 5.05*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	formField4TextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 78.67*w,
		height: 5.3*h,
		marginTop: 4.93*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	buttonButton: {
		backgroundColor: "black",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78.67*w,
		height: 7.39*h,
		marginBottom: 9.61*h,
		borderRadius: 10
	},
	buttonButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 2.67*w,
	},
	loginLinkView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 47.47*w,
		height: 2.71*h,
		marginLeft: 10.67*w,
		marginBottom: 7.39*h,
		flexDirection: "row",
		alignItems: "center",
	},
	alreadyOnboardText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	loginButtonImage: {
		resizeMode: "contain",
		marginRight: 2.67*w,
	},
	loginButtonText: {
		color: "rgb(208, 2, 27)",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	
})

