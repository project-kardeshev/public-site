import { useGlobalState } from '@src/services/state/useGlobalState';
import { useEffect } from 'react';

function useDaoInterfaceSwitch(callback: () => void) {
  const { useMemeframe } = useGlobalState();
  useEffect(() => {
    // Object to keep track of the keys pressed
    const keysPressed: {
      Ctrl: boolean;
      Shift: boolean;
      sequence: string[];
    } = {
      Ctrl: false,
      Shift: false,
      sequence: [], // Track the sequence of keys pressed
    };

    // Function to reset the keysPressed object
    function resetKeys() {
      keysPressed.Ctrl = false;
      keysPressed.Shift = false;
      keysPressed.sequence = [];
    }

    // Listener for keydown events
    function handleKeydown(event: KeyboardEvent) {
      console.log(event);
      // Check for Ctrl and Shift
      if (event.ctrlKey) keysPressed.Ctrl = true;
      if (event.shiftKey) keysPressed.Shift = true;

      // Check for D, A, O in sequence
      if (event.key === 'd' || event.key === 'D')
        keysPressed.sequence.push('D');

      // Check if the correct sequence has been entered
      if (
        keysPressed.Ctrl &&
        keysPressed.Shift &&
        keysPressed.sequence.join('') === 'D'
      ) {
        callback(); // Execute the callback function
        resetKeys(); // Reset after detection
      }
    }

    // Listener for keyup events to reset the state when modifier keys are released
    function handleKeyup(event: KeyboardEvent) {
      if (event.key === 'Control') keysPressed.Ctrl = false;
      if (event.key === 'Shift') keysPressed.Shift = false;
      if (!event.ctrlKey && !event.shiftKey) resetKeys(); // Reset if any modifier keys are released
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [callback, useMemeframe]); // Ensure the effect runs only when the callback changes
}

export default useDaoInterfaceSwitch;
