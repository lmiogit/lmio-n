import actions from './maps/ActionMaps';
import mutations from './maps/MutationMaps';
import types from './maps/TypesMaps';

// todo maps
export const ConstMaps = {
  ...actions,
  ...mutations,
  ...types
};


export const ActionMaps = {...actions};
export const MutationMaps = {...mutations};
export const TypesMaps = {...types};
