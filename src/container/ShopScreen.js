import React from 'react';
import {Content, Container, Item, Left, Body, Right, Icon, Button} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import {BarCodeScanner} from 'expo';
import ShopActions from '../redux/ShopRedux';
import {connect} from 'react-redux';

class ShopScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cartList:[],
            cartTotal:0
        }
    }

    componentDidMount(){
        this.props.setCurrentProduct();
    }

    onBarcodeRead(data){
        if (!this.props.loading){
            this.props.getScannedProduct(this.props.navigation.state.params.shopId, data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentProduct && this.props.currentProduct!==nextProps.currentProduct) {
            let product = {...nextProps.currentProduct, orderQty:1, orderPrice:nextProps.currentProduct.price};
            let newList = this.state.cartList;
            newList.push(product);
            this.setState({cartList: _.cloneDeep(newList), cartTotal: this.state.cartTotal+product.price});
        }
    }

    onIncQty(item, index) {
        if (item.orderQty<item.qty) {
            let newList = this.state.cartList;
            newList[index] = {...item, orderQty: item.orderQty+1, orderPrice: item.orderPrice+item.price}
            this.setState({cartList: _.cloneDeep(newList), cartTotal: this.state.cartTotal+item.price});
        }
    }

    onDecQty(item, index) {
        if (item.orderQty>0) {
            let newList = this.state.cartList;
            newList[index] = {...item, orderQty: item.orderQty-1, orderPrice: item.orderPrice-item.price}
            this.setState({cartList: _.cloneDeep(newList), cartTotal: this.state.cartTotal-item.price});
        }
    }

    renderItem(item, index){
        return (
            <View>
                <Item>
                    <Left style={{flex:7 }} >
                        <Text style={{
                            flex:5,
                            fontFamily:'Nunito-SemiBold',
                            fontSize:18,
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
                        <TouchableOpacity
                            style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7 }}
                            onPress={()=>this.onDecQty(item, index)}
                        >
                            <Icon name='ios-remove'/>
                        </TouchableOpacity>
                        <Text style={{flex:1, textAlign:'center' }} >{item.orderQty}</Text>
                        <TouchableOpacity
                            style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7}}
                            onPress={()=>this.onIncQty(item, index)}
                        >
                            <Icon name='ios-add'/>
                        </TouchableOpacity>
                    </Body>
                    <Right style={{flex:4, alignItems:'center'}}>
                        <Text style={{flex:1, textAlignVertical:'center',fontFamily:'Nunito-Regular', fontSize:14 }} >₹{item.orderPrice}</Text>
                    </Right> 
                </Item>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex:1}} >
                <View style={{flex:1}}><BarCodeScanner style={{flex:1}} onBarCodeRead={({type, data})=>this.onBarcodeRead(data)} /></View>
                <View style={{flex:1}}  >
                    {/* <Content style={{flex:1}} > */}
                        <View style={{flex:4, marginTop:10}} >
                            <FlatList
                                showsVerticalScrollIndicator={true}
                                data={this.state.cartList}
                                renderItem={({item, index})=>this.renderItem(item, index)}
                                keyExtractor={({index})=>index}
                            />
                        </View>
                        <View style={{flex:2, borderTopWidth:2 }} >
                            <View style={{flex:1, flexDirection:'row', padding:0, alignItems:'center'}}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F'}} >CART TOTAL : </Text>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', paddingHorizontal:10}}>
                                    <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F'}}>₹{this.state.cartTotal}</Text>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#44F', alignItems:'center'}} >
                                <TouchableOpacity style={{flex:1, flexDirection:'row', padding:15}} onPress={()=>{this.props.navigation.navigate('Review', {cartList: this.state.cartList, cartTotal: this.state.cartTotal})}} >
                                    <View style={{flex:5, flexDirection:'row', justifyContent:'center'}}>
                                        <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:18, color:'white'}} >Review Order </Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                                        <Icon name="ios-arrow-forward" style={{color:'white'}} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    {/* </Content> */}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        currentProduct: state.shop.currentProduct,
        loading: state.shop.loading,
    };
}

const bindActions = (dispatch)=>{
    return {
        getScannedProduct:(shopId, barcodeNum)=>dispatch(ShopActions.getScannedProduct(shopId, barcodeNum)),
        setCurrentProduct:()=>dispatch(ShopActions.setCurrentProduct())
    };
}
export default connect(mapStateToProps, bindActions)(ShopScreen);