import React from 'react';
import { Switch } from '@headlessui/react';

const ToggleSwitch = ({ dark, setDark }) => {
  return (
    <Switch
      checked={dark}
      onChange={setDark}
      className={`${'bg-gray-400 dark:bg-blue-400'} relative inline-flex items-center h-6 rounded-full w-11 mr-16 my-1`}
    >
      <span
        className={`${
          dark ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default ToggleSwitch;
