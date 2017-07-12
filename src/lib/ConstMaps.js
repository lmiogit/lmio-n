import actions from './maps/ActionMaps';
import mutations from './maps/MutationMaps';
import types from './maps/TypesMaps';


export const ConstMaps = {
  ...actions,
  ...mutations,
  ...types
};
