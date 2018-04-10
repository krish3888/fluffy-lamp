import React from 'react';
import {connect} from 'react-redux';
import ShopActions from '../redux/ShopRedux';
import {Content, Container, Item, Left, Body, Right, Icon, Button, Input, Label} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import {BarCodeScanner} from 'expo';

class InventoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false,
            prodList:[],
            itemName:null,
            itemBarcodeNum:null,
            itemQty:null,
            itemPrice:null
        }
    }

    componentWillMount() {
        this.props.getProductList(this.props.shopId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.prodList !== nextProps.prodList) {
            console.log(nextProps.prodList);
            this.setState({prodList: _.cloneDeep(nextProps.prodList)});
        }
    }
    addItem() {
        if (this.state.itemBarcodeNum && this.state.itemName && this.state.itemPrice && this.state.itemQty) {
            let product = {
                name: this.state.itemName,
                barcodeNum: this.state.itemBarcodeNum,
                qty: this.state.itemQty,
                price: this.state.itemPrice
            }
            let newList = this.state.prodList;
            newList.push(product);
            this.setState({prodList: _.cloneDeep(newList)});
        } else {
            alert('All fields are mandatory');
        }
    }

    editItemQty(index, qty) {
        let newList = this.state.prodList;
        newList[index].qty = parseInt(qty);
        this.setState({prodList: _.cloneDeep(newList)});
    }

    saveChanges() {
        this.props.updateProductList(this.props.shopId, this.state.prodList);
    }

    renderItem(item, index){
        return (
            <View>
                <Item>
                    <Left style={{flex:7 }} >
                        <Text style={{
                            flex:5,
                            fontFamily:'Nunito-SemiBold',
                            fontSize:16,
                            color:'black',
                            margin:10,
                        }}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        >
                        {item.name}
                        </Text>
                    </Left>
                    <Body style={{flex:3, flexDirection:'row', justifyContent:'center', alignItems:'center', marginHorizontal:10 }} >
                        <Input
                            style={{flex:1, textAlign:'center', fontSize:12,fontFamily:'Nunito-Regular', width:'100%', height:36, borderWidth:1 }}
                            defaultValue={item.qty.toString()}
                            onChangeText={(text)=>this.editItemQty(index, text)}
                        />
                    </Body>
                    <Right style={{flex:4, alignItems:'center'}}>
                        <Text style={{flex:1, textAlignVertical:'center',fontFamily:'Nunito-Regular', fontSize:12 }} >₹{item.price}</Text>
                    </Right> 
                </Item>
            </View>
        );
    }

    render() {
        return (
            <Container style={{flex:1}} >
                <View style={{flex:1}}  >
                    <View style={{flex:0.8, borderBottomWidth:1, borderColor:'#AAA'}}>
                        <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:20, color:'#444', textAlign:'center', padding:5}} >Inventory</Text>
                    </View>
                    <View style={{flex:7}}>
                        <Content style={{flex:1}} >
                            <View style={{flex:5}} >
                                <FlatList
                                    showsVerticalScrollIndicator={true}
                                    data={this.state.prodList}
                                    renderItem={({item, index})=>this.renderItem(item, index)}
                                    keyExtractor={({index})=>index}
                                />
                            </View>
                        </Content>
                    </View>

                    <View style={{flex:4, borderTopColor:'#888', borderTopWidth:2}} >
                        <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5, marginTop:10}} >
                            <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                placeholder='Barcode number'
                                keyboardType='numeric'
                                onChangeText={(text)=>this.setState({itemBarcodeNum: parseInt(text)})}
                            />
                        </View>
                        <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                            <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                placeholder='Name of product'
                                onChangeText={(text)=>this.setState({itemName: text})}
                            />
                        </View>
                        <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                            <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                placeholder='Qty'
                                keyboardType='numeric'
                                onChangeText={(text)=>this.setState({itemQty: parseInt(text)})}
                            />
                            <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                placeholder='Price'
                                keyboardType='numeric'
                                onChangeText={(text)=>this.setState({itemPrice: parseInt(text)})}
                            />
                        </View>
                        <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                            <TouchableOpacity
                                style={{flex:1, flexDirection:'row', borderColor:'#BBB', borderRadius:25, height:36, borderWidth:1, backgroundColor:'#DDD', justifyContent:'center', alignItems:'center'}}
                                onPress={()=>this.addItem()}
                            >
                                <Text style={{fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}} >Add item</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection:'row', backgroundColor:'#44F'}} >
                        <TouchableOpacity style={{flex:1, flexDirection:'row', padding:10}}
                            onPress={()=>this.saveChanges()}
                        >
                            <View style={{flex:5, flexDirection:'row', justifyContent:'center'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:18, color:'white'}} >Save Changes </Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                                <Icon name="ios-arrow-forward" style={{color:'white'}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state =>{
    return {
        prodList: state.shop.prodList,
        shopId: state.login.currentUser.key,
    };
}

const bindActions = dispatch =>{
    return {
        getProductList:(shopId)=>dispatch(ShopActions.getProductList(shopId)),
        updateProductList:(shopId, list)=>dispatch(ShopActions.updateProductList(shopId, list))
    };
}

export default connect(mapStateToProps, bindActions)(InventoryScreen);