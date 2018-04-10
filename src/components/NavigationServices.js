import {NavigationActions} from 'react-navigation';
import {DeviceEventEmitter} from 'react-native';
import _ from 'lodash';
const config = {};

export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

export function getLastRouteName() {
  const lastRouteName = _.get( _.last( _.get( config, 'navigator.state.nav.routes', [] ) ), 'routeName');
  return lastRouteName;
}

export function navigate(routeName, params) {
    if (config.navigator && routeName) {
        let action = NavigationActions.navigate({routeName, params});
        config.navigator.dispatch(action);
    }
}

export function goBack(params) {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
