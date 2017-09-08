import React, {Component} from "React";
import {View, Text, FlatList, StyleSheet, Image} from "react-native";

export default class App extends Component{

	constructor(props) {
	  super(props);

	  this.state={
	  		mang:[],
	  		refresh:false,
	  		page:1
			}
	}
	render(){
		return(

			<FlatList

				refreshing={this.state.refresh}
				onRefresh={()=>{this.refresh()}}

				onEndReachedThreshold={0.5}
				onEndReached={()=>{this.AonEndReached()}}

			  data={this.state.mang}
			  renderItem={({item}) =>
			  <View style={ao.dong}>

			    <View style={ao.trai}>
			    <Image
			          style={ao.hinh}
			          source={{uri: item.HINH}}
			     />
			    </View>
			    <View style={ao.phai}>
			    <Text>{item.HOTEN}</Text>
			   <Text style={ao.key}>{item.key}</Text>
			   <Text style={ao.key}>{item.key}</Text>
			    </View>
			  </View>
			}/>

		);
	}


		AonEndReached(){
			fetch("http://192.168.131.2/Flatlist/demo3.php?trang="+(this.state.page+1))
		.then((response)=>response.json())
		.then((responseJson)=>{
			if(responseJson.length !=0){
				this.setState({
				mang : mang.concat(responseJson),
				page : (this.state.page + 1)
			});

			}

		})
		.catch((e)=>{console.log(e)});
		}


		refresh(){
			this.setState({
				refresh:true
			});
			fetch("http://192.168.131.2/Flatlist/demo2.php")
		.then((response)=>response.json())
		.then((responseJson)=>{
			this.setState({
				mang:responseJson,
				refresh:false
			});
		})
		.catch((e)=>{console.log(e)});
		}
	componentDidMount(){
		fetch("http://192.168.131.2/Flatlist/demo3.php?trang="+this.state.page)
		.then((response)=>response.json())
		.then((responseJson)=>{
			this.setState({
				mang : responseJson
			});
		})
		.catch((e)=>{console.log(e)});
	}
}


	var ao = StyleSheet.create({

		dong:{borderBottomWidth:1, padding:50, borderRightWidth:1, flexDirection:"row"},
		trai:{flex:1, justifyContent:"center", alignItems:"center"},
		phai:{flex:2, justifyContent:"center", alignItems:"center"},
		hinh:{width: 100, height: 100, borderRadius:50},
		key:{color:"red", margin:10}
	});
