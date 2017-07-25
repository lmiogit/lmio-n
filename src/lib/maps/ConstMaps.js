import actions from './ActionMaps';
import mutations from './MutationMaps';
import types from './TypesMaps';

// todo maps
export const ConstMaps = {
  ...actions,
  ...mutations,
  ...types
};


export const ActionMaps = {...actions};
export const MutationMaps = {...mutations};
export const TypesMaps = {...types};
